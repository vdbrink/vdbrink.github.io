---
title: "Node-RED open apps on your Android phone"
category: Node-RED
tags: [Node-RED, phone, android, Home Assistant, apps]
---

# Use Node-RED to open apps on your Android phone

<a href="node-red_home-assistant">
<img src="../homeassistant/images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px">
<img src="images_open_apps/android_logo.png" style="float: right;" alt="Home Assistant logo" height="100px">
<img style="float: right;margin-left:15px" src="images/node-red_logo.png" height="100px" alt="Node-RED logo">
</a>

Send events from Node-RED to your Android phone, via the Home Assistant companion app, to open any app.

*See [initial setup](node-red_home-assistant#initial-setup) for the required additional nodes and setup.*

---
## Table of Contents
<!-- TOC -->
* [How it works](#how-it-works)
* [Flow explanation](#flow-explanation)
* [Usefull scenario's](#usefull-scenarios)
* [Android Intents](#android-intents)
  * [Open any app](#open-any-app)
  * [Spotify](#spotify)
  * [Netflix](#netflix)
  * [Youtube](#youtube)
  * [Chrome](#chrome)
<!-- TOC -->

---
## How it works

The Home Assistant Companion app has built in support for receiving notifications.

Node-RED on your server can connect over the local network, via websockets, or over the internet to your phone and connect to the Home Assistant Companion app which can show the notification.

<img src="images_open_apps/flow_open_apps.jpg" height="150px" alt="notification">

---
## Flow explanation

With this flow you can open any app on your android phone.

![Node-RED flow](images_open_apps/node-red_flow_open_apps.png)

[Download this flow](flows/vdbrink_open_apps.json)

---

## Usefull scenario's

* Open the camera app when a camera detects something
* Open a specific app based on a HA defined location:
  * Open reduction card app at the supermarket
  * Open shopping list at the supermarket
  * Open things-to-buy list at the construction shop
  * Open the bank app to use it to pay at the supermarket
* Start Spotify when your phone is connected to a bluetooth device, like a car or headphone

---

## Android Intents

To open an app you need Android Intents, it's some internals to open an app. 
If you direct want to do an action in an app the app must support this custom Intent.

### Open any app

Go to the [Play Store](https://play.google.com/store/apps?hl=nl&gl=US) and find your app and open the page.

The url which is opened is ```https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=nl&gl=US```

Get the text between the `id=` and `&nl`. This is the app id you need.

### Spotify

Right click on a track in Spotify and choose to Share the Song Link.

```spotify:track:<spotify uri>```

Example ```spotify:track:https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=3acdc1d4b7ed4ab1```

### Netflix

```com.netflix.mediaclient```

### Youtube

```com.google.android.youtube```

### Chrome

```com.android.chrome```

### Reolink

```com.mcu.reolink```

### Specific screen in HA app
This is the prefix `homeassistant://navigate/` and the rest of the command is the local path.
```
{
    "message": "command_webview",
    "data": {
        "command": "homeassistant://navigate/lovelace/home"
    }
}
```
---

## References

* https://companion.home-assistant.io/docs/integrations/app-events/
* https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/
* https://zachowj.github.io/node-red-contrib-home-assistant-websocket/cookbook/actionable-notifications-subflow-for-android.html

Enjoy automations!

---

[<< See also my other Node-RED Home + Assistant pages](node-red_home-assistant)
