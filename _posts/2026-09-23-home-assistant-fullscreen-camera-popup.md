---
layout: default
title: "Feed: Home Assistant fullscreen camera popup when someone is at the door"
description: "Home Assistant tablet dashboard shows a fullscreen live camera stream of the front door as soon as a person is detected."
date: 2026-09-23
tags: [Home Assistant, dashboard, tablet, fullscreen, camera, Frigate, browser_mod, WebRTC]
permalink: /home-assistant-fullscreen-camera-popup
image: /homeassistant/images_camera_stream/ha_camera_popup.gif
---

# Feed: Home Assistant fullscreen camera popup

<a href="/homeassistant/images_camera_stream/ha_camera_popup.gif">
<img src="/homeassistant/images_camera_stream/ha_camera_popup.gif" alt="Home Assistant dashboard popup camera stream" width="100%" />
</a>
<em style="display:block; text-align:center">The fullscreen camera popup opening on my tablet dashboard</em>

In my living room I have a tablet dashboard with the weather, news and actual home data.
When someone walks up to my front door, I want to see who it is right away, without grabbing my phone or opening an app.

Now the tablet automatically switches to a **fullscreen live stream of the front door** as soon as a person is detected, and closes it again when the person is gone.

## How it works

* Frigate detects a person, so a cat walking through the front yard doesn't trigger it.
* An automation opens a fullscreen popup with the HACS module **browser_mod 2**.
* The popup shows the camera stream via the HACS module **WebRTC**, which converts the RTSP stream to something the browser can play.
* A second automation closes the popup again once no person is detected anymore.

You can also limit the popup to one specific tablet with the `browser_id` property (in the older Browser Mod v1 this was `deviceID`).

## Read more

* [Home Assistant dashboard: Fullscreen camera stream](/homeassistant/homeassistant_dashboard_fullscreen_camera_stream) - the full guide with the automations and FAQ
* [Home Assistant tablet dashboard](/homeassistant/homeassistant_dashboard_tablet_in_kiosk_mode)
* [Frigate in Home Assistant](/homeassistant/homeassistant_dashboard_frigate)
* [Many other Home Assistant content](/homeassistant)
