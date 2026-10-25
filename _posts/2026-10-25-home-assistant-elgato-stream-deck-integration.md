---
layout: default
title: "Feed: Control and show your Home Assistant entities on an Elgato Stream Deck"
description: "Use the Stream Deck Home Assistant plugin to toggle lights and sockets, show live sensor values and trigger enities like lamp, charger or an IR air conditioner with a single key press."
date: 2026-10-25
tags: [Home Assistant, Stream Deck, Elgato, hardware]
permalink: /home-assistant-elgato-stream-deck-integration
image: /elgato_stream_deck/home_assistant/images/home-assistant_stream_deck_integration.gif
---

# Feed: Control and show your Home Assistant entities on an Elgato Stream Deck

<a href="/elgato_stream_deck/home_assistant/images/home-assistant_stream_deck_integration.gif">
<img src="/elgato_stream_deck/home_assistant/images/home-assistant_stream_deck_integration.gif" alt="Home Assistant integration" width="100%" />
</a>
<em style="display:block; text-align:center">The Home Assistant dashboard next to the Stream Deck app: fast and interactive</em>

Your Home Assistant dashboard needs a screen to see and manually control your home.\
With the **Stream Deck Home Assistant plugin**, every key of an Elgato Stream Deck can control DIRECT a Home Assistant entity as well.

Don't you know what a Stream Deck is and can do? Check [here](/elgato_stream_deck/#what-is-a-stream-deck) first.

The key is more than a button: its icon can shows the **live state** of entities as well, so you can see what is going on in your home at a glance.

## What you can do with it

* **Lights:** toggle a `light` entity. The key shows a bright, colored bulb when the lamp is on, in the same color as the lamp, and a pale bulb when it is off.
* **Smart sockets:** switch `switch` entities on or off and see which devices are still powered, like the chargers on my desk.
* **Live sensor values:** show the current office temperature, humidity or CO2 on a key. It updates as soon as the `sensor` entity reports a new value.
* **Infrared devices:** turn a non-smart air conditioner on or off. A Zigbee IR transmitter and a template switch in Home Assistant send the original IR code.
* **Dashboards:** open a Home Assistant view, like your camera streams, with one key press.

<br>
<div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
<div style="text-align:center">
<img src="/elgato_stream_deck/home_assistant/actions/ha_light_ai_action.png" alt="Stream Deck key AI action lamp" style="max-height:80px; width:auto;">
<em style="display:block; text-align:center">light</em>
</div>
<div style="text-align:center">
<img src="/elgato_stream_deck/home_assistant/actions/ha_power_switch_phone_charger.png" alt="Stream Deck key phone charger off" style="max-height:80px; width:auto;">
<em style="display:block; text-align:center">socket (off)</em>
</div>
<div style="text-align:center">
<img src="/elgato_stream_deck/home_assistant/actions/ha_power_switch_battery_charger.png" alt="Stream Deck key battery charger on" style="max-height:80px; width:auto;">
<em style="display:block; text-align:center">socket (on)</em>
</div>
<div style="text-align:center">
<img src="/elgato_stream_deck/home_assistant/actions/ha_states.png" alt="Room values visible on your Stream Deck" style="max-height:80px; width:auto;">
<em style="display:block; text-align:center">live sensor values</em>
</div>
<div style="text-align:center">
<img src="/elgato_stream_deck/home_assistant/actions/ha_ac_ir.png" alt="Control an IR air conditioner on and off via a Stream Deck" style="max-height:80px; width:auto;">
<em style="display:block; text-align:center">IR air conditioner</em>
</div>
</div>

## Advantages

* No extra automation needed for a manual action: the key calls the entity directly.
* The key always shows the real state, so you do not have to guess whether the lamp or charger is on.
* It works with anything that is already an entity in Home Assistant.

## Related articles

<div class="hp-tiles hp-options hp-full">
<a class="hp-card hp-tile" href="/elgato_stream_deck/stream_deck_home_assistant">
<img src="/elgato_stream_deck/home_assistant/images/home-assistant_stream_deck_integration.png" alt="Elgato Stream Deck - Home Assistant integration" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Stream Deck</span><strong>Elgato Stream Deck - Home Assistant integration</strong><p>The full guide with all examples.</p></div>
</a>
<a class="hp-card hp-tile" href="/elgato_stream_deck/stream_deck_button_actions#home-assistant">
<img src="/elgato_stream_deck/images/actions_sd_app.png" alt="Stream Deck button action examples" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Stream Deck</span><strong>Stream Deck button action examples</strong><p>Download the buttons and more examples for all kinds or applications.</p></div>
</a>
<a class="hp-card hp-tile" href="/elgato_stream_deck">
<img src="/elgato_stream_deck/images/my_sd_xl.png" alt="My Stream Deck XL" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Stream Deck</span><strong>Elgato Stream Deck for developers</strong><p>Read more about the Stream Deck and what it can do.</p></div>
</a>
<a class="hp-card hp-tile" href="/zigbee/smart_infrared_transmitter_receiver">
<img src="/zigbee/images_infrared/ir_buttons_ha.png" alt="Automate infrared devices in Home Assistant" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Zigbee</span><strong>Automate infrared devices</strong><p>How to make dumb infrared devices smart with a Zigbee IR transmitter.</p></div>
</a>
</div>
