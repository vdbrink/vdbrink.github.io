---
title: "Home Assistant dashboard: Fullscreen camera stream"
description: "Guide how to show your camera stream, when motion is detected, as fullscreen popup on your Home Assistant dashboard."
category: Home Assistant
tags: [Home Assistant, dashboard, tablet, fullscreen, camera]
---

# Home Assistant dashboard:<br>fullscreen camera stream
*when motion is detected*

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>
I have a [tablet dashboard](/homeassistant/homeassistant_dashboard_tablet_in_kiosk_mode) in my living room where I show weather, news and actual home data.

I wanted to show a full screen live stream of my frontdoor when someone is detected entering my frontdoor.

I have already [Frigate](/homeassistant/homeassistant_dashboard_frigate) installed to recognize a person 
and not get triggered when a cat walks by in my front yard.

---
## Table of Contents
<!-- TOC -->
  * [Fullscreen popup with browser_mod](#fullscreen-popup-with-browser_mod)
    * [Show popup](#show-popup)
    * [Hide popup](#hide-popup)
  * [Fullscreen popup with Bubble Card](#fullscreen-popup-with-bubble-card)
<!-- TOC -->

---

## Fullscreen popup with browser_mod

You need for this the extra HACS module [hass-browser_mod
](https://github.com/thomasloven/hass-browser_mod).

Install this integration via this button in your own HA instance

[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=hass-browser_mod&category=integration)

### Show popup

[![Open your Home Assistant instance and show your automations.](https://my.home-assistant.io/badges/automations.svg)](https://my.home-assistant.io/redirect/automations/)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Automation
alias: Frontdoor Popup on Detection
triggers:
  - entity_id: input_boolean.frontdoor_detection_mode
    to: "on"
    trigger: state
actions:
  - data:
      size: fullscreen
      content:
        type: custom:webrtc-camera
        url: >-
          rtsp://username:password@192.168.x.x:554/h264Preview_01_main
        muted: true
        autoplay: true
    action: browser_mod.popup
{% endraw %}
```

### Hide popup

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Automation
alias: Close Frontdoor Popup
triggers:
  - entity_id: input_boolean.frontdoor_detection_mode
    to: "off"
    trigger: state
actions:
  - action: browser_mod.close_popup
{% endraw %}
```

---
## Fullscreen popup with Bubble Card

https://www.youtube.com/watch?app=desktop&v=T2rtGrxSgcI