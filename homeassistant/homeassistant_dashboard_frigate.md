---
title: "Home Assistant dashboard: Frigate"
description: "Show Frigate captures on your Home Assistant dashboard"
categories: [Home Assistant, Frigate]
tags: [Home Assistant, dashboard, lovelace, Frigate, clip, video]
---

# Home Assistant dashboard: Frigate

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>
<a href="index"><img src="/images/frigate_logo.svg" style="float: right;" alt="Home Assistant logo" height="100px"></a>
Frigate is a tool to analyze your video camera streams.

It can detect and store a snapshot and a video clip when it detects presence.

On this page, you can find how to add this data on your dashboard.

Website: https://frigate.video/

---
## Table of Contents
<!-- TOC -->
  * [Show live RTSP streams](#show-live-rtsp-streams)
  * [Show MP4 video clips](#show-mp4-video-clips)
  * [Show Frigate MQTT last event captured snapshots](#show-frigate-mqtt-last-event-captured-snapshots)
<!-- TOC -->

---

## Show live RTSP streams

You can add a direct livestream based on the rtsp url with the custom HACS integration WebRTC.

Repo: https://github.com/AlexxIT/WebRTC \
There are a lot of possible settings possible, check this site for them.

Install this integration via this button in your own HA instance
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=AlexxIT&repository=WebRTC&category=integration)

```yaml
# Dashboard card code
type: custom:webrtc-camera
url: rtsp://username:password@<ip-address:port>/h264Preview_01_main
```

---
## Show MP4 video clips

Frigate provides for each event a MP4 movie via the api.
* Api format: http://<ip-address:port>/api/<camera-name>/<detection-object>/clip.mp4
* Api example: http://192.168.1.2:5000/api/camera_1/person/clip.mp4

&nbsp;

With some HTML you can include the video on your dashboard. 
This doesn't work with the default Markdown integration, but it works with the custom HACS integration `Lovelace HTML card`.

Repo: https://github.com/PiotrMachowski/lovelace-html-card

Install this integration via this button in your own HA instance
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=PiotrMachowski&repository=lovelace-html-card&category=integration)

```yaml
# Dashboard card code
type: custom:html-card
content: >
  <center>
   <video width="450" height="260" controls class="video-js" data-setup="{}"> 
    <source src="http://<ip-address:port>/api/camera_1/person/clip.mp4" type="video/mp4">
   </video>
  </center>
```

---
## Show Frigate MQTT last event captured snapshots

When you've added your camera as camera-entity in Home Assistant you can use the Picture Entity to show the last captured snapshot.

This example redirects also to the page /my-camera/frigate when you click on it.

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