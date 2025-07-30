---
title: "Home Assistant dashboard: Frigate"
description: "Show Frigate captures on your Home Assistant dashboard"
categories: [Home Assistant, Frigate]
tags: [Home Assistant, dashboard, lovelace, Frigate, clip, video]
---

# Home Assistant dashboard: Frigate

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>
Frigate is a tool to analyse your video camera streams.

It can detect and store a snapshot and clip when it detects presence.

Here you can read how you can add this data on your dashboard.

---
## Table of Contents
<!-- TOC -->
  * [Show live stream RTSP](#show-live-stream-rtsp)
  * [Show MP4 video clip](#show-mp4-video-clip)
  * [Show Frigate MQTT last event captured snapshot](#show-frigate-mqtt-last-event-captured-snapshot)
<!-- TOC -->

---

## Show live stream RTSP

```yaml
# Dashboard card code
type: custom:webrtc-camera
url: rtsp://username:password@<ip-address:port>/h264Preview_01_main
```

---
## Show MP4 video clip

```yaml
# Dashboard card code
type: custom:html-card
content: >
  <center>
   <video width=450 height=260 controls class="video-js" data-setup="{}"> 
    <source src="http://<ip-address:port>/api/camera_1/person/clip.mp4" type="video/mp4">
   </video>
  </center>
```

---
## Show Frigate MQTT last event captured snapshot

```yaml
# Dashboard card code
type: picture-entity
show_state: false
show_name: false
camera_view: auto
fit_mode: cover
tap_action:
    action: navigate
    navigation_path: /my-camera/frigate
entity: camera.frigate_last_person
```

---

[<< See also my other Home Assistant tips and tricks](index)