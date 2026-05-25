---
title: "Home Assistant dashboard: Fullscreen camera stream"
description: "Guide how to show your camera stream, when a person is detected, as fullscreen popup on your Home Assistant dashboard."
category: Home Assistant
tags: [Home Assistant, dashboard, tablet, fullscreen, camera]
---

# Home Assistant dashboard:<br>Fullscreen camera stream
*when a person is detected*

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>
I have a [tablet dashboard](/homeassistant/homeassistant_dashboard_tablet_in_kiosk_mode) in my living room where I show weather, news and actual home data.

I wanted to show a full screen live stream of my front door when someone is detected entering my front door.

I have already [Frigate](/homeassistant/homeassistant_dashboard_frigate) installed to recognize a person and not get triggered when a cat walks by in my front yard.

<img src="images_camera_stream/ha_camera_popup.gif" alt="Home Assistant dashboard popup camera stream" width="100%">
<em>Opening the fullscreen popup camera stream in action.</em>

---
## Table of Contents
<!-- TOC -->
  * [Multiple solutions](#multiple-solutions)
    * [Fullscreen popup with browser_mod](#fullscreen-popup-with-browser_mod)
      * [Automation: Show popup](#automation-show-popup)
      * [Automation: Hide popup](#automation-hide-popup)
      * [FAQ](#faq)
    * [Fullscreen popup with Bubble Card](#fullscreen-popup-with-bubble-card)
<!-- TOC -->

---

## Multiple solutions

There are multiple solutions to achieve this.
I will explain the one I use myself via the extra HACS module **browser_mod**.

Another popular solution is via the extra HACS card **Bubble Card**, this supports also a fullscreen popup feature.
I added a link to a video on how to implement this alternative solution if you want to try it.

### Fullscreen popup with browser_mod

To use the **browser_mod** solution, the extra HACS module [browser_mod 2](https://github.com/thomasloven/hass-browser_mod#browser_mod-2) is required.

Install this integration, via this button, into your own Home Assistant instance.\
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=hass-browser_mod&category=integration)

Also, the HACS module [WebRTC](https://github.com/AlexxIT/WebRTC) is required to show the camera stream in the popup, this module supports RTSP streams and converts them to WebRTC streams which can be shown in the popup.

Install this **WebRTC** integration, via this button, into your own Home Assistant instance.\
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=AlexxIT&repository=WebRTC&category=integration)

You also need to create **two automations**, one to **show the popup** when a person is detected and one to **hide the popup** when no person is detected anymore.
It will show the popup on all your dashboards.

#### Automation: Show popup

Create an automation that triggers when a person is detected and shows the popup with the camera stream.
In my case I have a [Node-RED](/node-red/node-red_home-assistant) automation which set the `input_boolean.frontdoor_detection_mode` to `on` when a person is detected and set to `off` after a delay once no person is detected anymore.

[![Open your Home Assistant instance and show your automations.](https://my.home-assistant.io/badges/automations.svg)](https://my.home-assistant.io/redirect/automations/)

[](https://github.com/thomasloven/hass-browser_mod/blob/master/documentation/services.md#browser_modpopup)

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

> **_NOTE:_** The properties `muted: true` and `autoplay: true` are optional in case the stream doesn't always start.

#### Automation: Hide popup

Create a second automation to hide the popup when no person is detected anymore.\
In my case I have an automation (in [Node-RED](/node-red/node-red_home-assistant)) that sets the `input_boolean.frontdoor_detection_mode` to `off` after a delay once a person was detected.

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

#### FAQ

**Q: Can I also auto hide the popup after a fixed time?**\
A: Yes, that's also possible with the property `timeout` under the `data` tag, you can set a timeout in milliseconds after which the popup will automatically close.

**Q: Can I restrict the popup to only show on a specific dashboard/browser?**\
A: Yes, you can add the property `deviceID:` under the `data` tag to define a single browser to show the popup on, instead of all browsers.
The `deviceID` can be found in the browser_mod integration page.

Click on this button to open your Browser mod integration page

[![Open your Home Assistant instance and show an integration.](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=browser_mod)
```yaml
{% raw %}
...
actions:
  - data:
      deviceID:
          - browser_mod_0c68c302_d198f995
      size: fullscreen
      ...
{% endraw %}
```
<br>

**Q: Which parameters can I use in the popup?**\
A: You can use many parameters for `browser_mod.popup`, take a look at the documentation for the full list of [all browser_mod popup parameters](https://github.com/thomasloven/hass-browser_mod/blob/master/documentation/services.md#browser_modpopup).

---
### Fullscreen popup with Bubble Card

There is also an alternative solution to show a fullscreen popup with the HACS [Bubble Card](https://github.com/Clooos/Bubble-Card#bubble-card).

Install this integration, via this button, into your own Home Assistant instance.\
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Clooos&repository=Bubble-Card&category=integration)

In this video you can see how to implement the fullscreen popup with the Bubble Card.

[![Home Assistant Reolink Video Doorbell Pop Up - With Pop Up Time Fix](http://img.youtube.com/vi/T2rtGrxSgcI/0.jpg)](https://www.youtube.com/watch?v=T2rtGrxSgcI "Home Assistant Reolink Video Doorbell Pop Up - With Pop Up Time Fix")

<em>Click to start the YouTube video</em>

