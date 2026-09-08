// ==UserScript==
// @name         Google Meet — blur background hotkey
// @namespace    https://meet.google.com/
// @version      1.1.0
// @description  Toggle Google Meet's native "Blur your background" with Ctrl+Cmd+B (Ctrl+Alt+B on Windows/Linux).
// @match        https://meet.google.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Config
  // ---------------------------------------------------------------------------

  // Ctrl+Cmd+B on macOS, Ctrl+Alt+B elsewhere. Matches Meet's own
  // Ctrl+Cmd+<letter> family (chat, people, raise hand); B is unused there.
  const HOTKEY = {
    code: 'KeyB',
    ctrlKey: true,
    metaKey: navigator.platform.startsWith('Mac'),
    altKey: !navigator.platform.startsWith('Mac'),
    shiftKey: false,
  };

  // Set true to log every matched label + click attempt to the console.
  const DEBUG = false;

  // Meet's class names are generated, so match on the accessible name instead.
  // Kept deliberately loose: a minor copy change or a different locale should
  // still hit.
  const LABELS = {
    // Green-room / self-view one-click blur, and the panel's blur tiles
    // ("Blur your background", "Slightly blur your background").
    BLUR: /\bblur\b|achtergrond\s*wazig|vervagen/i,
    // "Turn off visual effects" / "No effects" tile.
    EFFECTS_OFF: /turn off (visual )?effects|no effects?\b|geen effect/i,
    // Toolbar / overflow entry that opens the effects panel.
    EFFECTS_ENTRY: /apply visual effects|backgrounds?( and| &) effects|visuele effecten|achtergronden/i,
    // Panel close button, used as an Escape fallback.
    CLOSE: /^close\b|\bsluiten\b/i,
  };

  const PANEL_MOUNT_TIMEOUT_MS = 4000;
  const STATE_SETTLE_MS = 350;

  // ---------------------------------------------------------------------------
  // DOM helpers
  // ---------------------------------------------------------------------------

  const CANDIDATE_SELECTOR = '[aria-label], [data-tooltip], [aria-labelledby]';

  // A label often sits on a wrapper div, not on the control itself. Clicking the
  // wrapper is a no-op, which is why the panel used to open and then nothing
  // happened — always resolve a match to one of these.
  const INTERACTIVE_SELECTOR = [
    'button',
    'input',
    '[role="button"]',
    '[role="checkbox"]',
    '[role="radio"]',
    '[role="switch"]',
    '[role="option"]',
    '[role="tab"]',
    '[role="menuitem"]',
    '[role="menuitemcheckbox"]',
    '[role="menuitemradio"]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function accessibleName(el) {
    const direct = el.getAttribute('aria-label') || el.getAttribute('data-tooltip');
    if (direct) return direct;
    const ref = el.getAttribute('aria-labelledby');
    if (ref) {
      return ref
        .split(/\s+/)
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .map((n) => n.textContent.trim())
        .join(' ');
    }
    return '';
  }

  function isVisible(el) {
    if (el.getAttribute('aria-disabled') === 'true' || el.disabled) return false;
    // Meet hides inactive surfaces (green room vs in-call) instead of removing
    // them, so a zero-size rect means "not the surface we are on".
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  // Walk up to the enclosing control; if the label is on an outer wrapper
  // instead, walk down to the control it wraps.
  function interactiveFrom(el) {
    const up = el.closest(INTERACTIVE_SELECTOR);
    if (up && isVisible(up)) return up;
    for (const down of el.querySelectorAll(INTERACTIVE_SELECTOR)) {
      if (isVisible(down)) return down;
    }
    return isVisible(el) ? el : null;
  }

  // All visible interactive controls whose accessible name matches `re`,
  // deduped, best candidate first.
  function findAll(re, rank) {
    const out = new Map(); // control node -> label that matched it
    for (const el of document.querySelectorAll(CANDIDATE_SELECTOR)) {
      const label = accessibleName(el);
      if (!label || !re.test(label)) continue;
      const target = interactiveFrom(el);
      if (target && !out.has(target)) out.set(target, label);
    }
    const list = [...out.entries()].map(([node, label]) => ({ node, label }));
    if (rank) list.sort((a, b) => rank(a.label) - rank(b.label));
    if (DEBUG) console.debug('[meet-blur-hotkey] matches for', re, list.map((m) => m.label));
    return list;
  }

  function find(re, rank) {
    return findAll(re, rank)[0] || null;
  }

  // Prefer plain "Blur your background" over "Slightly blur your background".
  function rankBlur(label) {
    if (/slightly|licht/i.test(label)) return 2;
    return /background|achtergrond/i.test(label) ? 0 : 1;
  }

  function pressedState(el) {
    for (const node of [el, el.parentElement, el.closest('[role="radio"], [role="checkbox"], [role="switch"], [role="option"], button')].filter(Boolean)) {
      const pressed =
        node.getAttribute('aria-pressed') ??
        node.getAttribute('aria-checked') ??
        node.getAttribute('aria-selected');
      if (pressed === 'true') return true;
      if (pressed === 'false') return false;
    }
    return null; // unknown — caller falls back to remembered state
  }

  // Plain .click() covers most Meet controls; some tiles only react to a full
  // pointer sequence. Tried in that order, never both at once, so a control
  // that honours both cannot get toggled twice.
  function plainClick(el) {
    el.focus?.({ preventScroll: true });
    el.click();
  }

  function pointerClick(el) {
    el.focus?.({ preventScroll: true });
    const base = { bubbles: true, cancelable: true, view: window, composed: true };
    const pointer = { pointerId: 1, pointerType: 'mouse', isPrimary: true };
    const Pointer = window.PointerEvent || window.MouseEvent;
    el.dispatchEvent(new Pointer('pointerdown', { ...base, ...pointer, buttons: 1 }));
    el.dispatchEvent(new MouseEvent('mousedown', { ...base, buttons: 1 }));
    el.dispatchEvent(new Pointer('pointerup', { ...base, ...pointer, buttons: 0 }));
    el.dispatchEvent(new MouseEvent('mouseup', { ...base, buttons: 0 }));
    el.dispatchEvent(new MouseEvent('click', { ...base, buttons: 0 }));
  }

  // Returns true when the control reports the state we asked for, or when it
  // reports no state at all (nothing to verify against — assume it took).
  async function press(target, wantOn) {
    for (const doClick of [plainClick, pointerClick]) {
      if (DEBUG) console.debug('[meet-blur-hotkey] clicking', target.label, 'via', doClick.name);
      doClick(target.node);
      await sleep(STATE_SETTLE_MS);
      const state = pressedState(target.node);
      if (state === null || state === wantOn) return true;
    }
    return false;
  }

  function waitFor(re, rank, timeoutMs) {
    return new Promise((resolve) => {
      const hit = find(re, rank);
      if (hit) return resolve(hit);

      const observer = new MutationObserver(() => {
        const found = find(re, rank);
        if (found) {
          observer.disconnect();
          clearTimeout(timer);
          resolve(found);
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['aria-label', 'data-tooltip', 'aria-labelledby', 'style', 'class'],
      });

      const timer = setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, timeoutMs);
    });
  }

  function closePanel() {
    for (const type of ['keydown', 'keyup']) {
      const evt = new KeyboardEvent(type, { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true, cancelable: true });
      (document.activeElement || document.body).dispatchEvent(evt);
    }
    // Escape does not always dismiss the effects panel; fall back to its own
    // close button when the blur tiles are still mounted.
    setTimeout(() => {
      if (!find(LABELS.BLUR, rankBlur)) return;
      const close = find(LABELS.CLOSE);
      if (close) plainClick(close.node);
    }, STATE_SETTLE_MS);
  }

  function warnNoControl(stage) {
    const seen = [...document.querySelectorAll(CANDIDATE_SELECTOR)]
      .map(accessibleName)
      .filter((name) => /blur|background|effect|visual/i.test(name));
    console.warn(`[meet-blur-hotkey] ${stage}: no usable blur control. Labels seen:`, seen);
  }

  // ---------------------------------------------------------------------------
  // Toggle
  // ---------------------------------------------------------------------------

  // Used only when Meet exposes no aria-pressed/checked on the matched control.
  let lastKnownBlurOn = false;
  let busy = false;

  async function toggleBlur() {
    if (busy) return;
    busy = true;
    try {
      let blurs = findAll(LABELS.BLUR, rankBlur);
      let inPanel = blurs.length > 0 && findAll(LABELS.EFFECTS_OFF).length > 0;

      // Blur tiles not mounted yet — open the effects panel first.
      if (!blurs.length) {
        const entry = find(LABELS.EFFECTS_ENTRY);
        if (!entry) return warnNoControl('entry');
        plainClick(entry.node);
        const tile = await waitFor(LABELS.BLUR, rankBlur, PANEL_MOUNT_TIMEOUT_MS);
        if (!tile) {
          closePanel();
          return warnNoControl('panel');
        }
        blurs = findAll(LABELS.BLUR, rankBlur);
        inPanel = true;
      }

      const state = pressedState(blurs[0].node);
      const isOn = state === null ? lastKnownBlurOn : state;

      // Turning blur off uses the panel's "no effects" tile when there is one;
      // the green-room blur button is its own on/off toggle.
      const targets = isOn ? [...findAll(LABELS.EFFECTS_OFF), ...blurs] : blurs;

      for (const target of targets) {
        if (await press(target, !isOn)) {
          lastKnownBlurOn = !isOn;
          if (inPanel) closePanel();
          return;
        }
      }

      warnNoControl('click');
      if (inPanel) closePanel();
    } finally {
      busy = false;
    }
  }

  // ---------------------------------------------------------------------------
  // Key handling
  // ---------------------------------------------------------------------------

  function isTyping(target) {
    if (!(target instanceof Element)) return false;
    return !!target.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]');
  }

  function matchesHotkey(e) {
    return (
      e.code === HOTKEY.code &&
      e.ctrlKey === HOTKEY.ctrlKey &&
      e.metaKey === HOTKEY.metaKey &&
      e.altKey === HOTKEY.altKey &&
      e.shiftKey === HOTKEY.shiftKey
    );
  }

  document.addEventListener(
    'keydown',
    (e) => {
      if (e.repeat || !matchesHotkey(e)) return;
      if (isTyping(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      toggleBlur();
    },
    true, // capture, so Meet's own handlers don't swallow it first
  );
})();
