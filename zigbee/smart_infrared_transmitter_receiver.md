---
title: "Automate infrared devices in Home Assistant"
description: "Automate infrared devices in Home Assistant with a smart home infrared transmitter/receiver box"
category: Zigbee
tags: [Zigbee, WiFi, infrared, transmitter, receiver, remote, learn, send, air conditioner, TV, fireplace, led, lights, candles, screens]
image: /projects/images_christmas_decorations/candles3_with_ir_remote.avif
---

{% capture imgBasket %}<img src="/buy/images/basket.png" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}
{% capture imgZ2M %} | <img src="/zigbee/images/zigbee2mqtt.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;height:15px"/>{% endcapture %}

# Automate infrared devices
*In Home Assistant*

## Introduction

With an infrared transmitter and receiver device, you can automate all your infrared controlled devices!  

There are a lot of devices that have a remote which works via infrared. 
Like a TV, air conditioner, (ceiling) fans, fireplace, screens, lights and electric candles.
The signal of an infrared remote has no encryption and is always the same. 
This makes it easy to capture, store and resend the signal.

 <img src="images_infrared/ceiling_fan_remote.webp" alt="ceiling fan with remote" height="100px" />

<img src="../projects/images_christmas_decorations/tea_lights_with_ir_remote.avif" alt="candles" height="100px" />

 <img src="images_infrared/fireplace_with_remote.jpg" alt="fireplace with remote" height="100px" />

 <img src="../projects/images_christmas_decorations/candles3_with_ir_remote.avif" alt="candles" height="100px" />

<img src="images_infrared/light_string.avif" alt="light curtains" height="100px" />

Read further how you can create buttons, on your **Home Assistant dashboard**, to control your infrared devices.

<img src="images_infrared/ha_card.png" alt="Home Assistant button card" width="400px">

> **_NOTE:_** Also affiliate links are used on this page. You sponsor my work and still pay the original price. 

---
### Video

In this video, you see the device in action.
I can control the lights via the original remote and also from my Home Assistant dashboard.

<video controls height="400px">
    <source src="images_infrared/ir_reel_720p.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

---
### Smart infrared transmitter / receiver

<a href="/buy/images_zigbee/zigbee_ir_remote.webp"><img src="/buy/images_zigbee/zigbee_ir_remote.webp" alt="infrared remote control" width="200px" style="margin-left:15px;float:right" /></a>
I used for this project the <a href="https://s.click.aliexpress.com/e/_DEUWZ73" target="_blank">Zigbee IR remote control - Moes (AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/UFO-R11.html" target="_blank" title="TS0003">{{imgZ2M}}UFO-R11</a> 
With this small black box, powered on batteries, you can control any infrared device.

An infrared sender needs to be in a direct line with the receiver. 
If you have more devices you want to control, it can be that you need multiple smart devices to control them all.

> There are also similar [WiFi versions](https://s.click.aliexpress.com/e/_DnpWmYp) available of this device.

<a href="images_infrared/purposes_ir.png" target="_blank">
<img src="images_infrared/purposes_ir.png" alt="purposes curtains" height="250px" />
</a>

You can set the device in learning mode to copy signals and store the signal on the device.\
When you trigger the device with a code, it sends the stored signals but now from this box.
You can save a lot of signals on this box, each button on a remote and that for multiple remotes.

> I used this solution also for my Christmas paper star, 
see my [dedicated page](/projects/automate_christmas_decorations#infrared-lights) about my automated Christmas lights and decorations.

---
### Learning mode

There are multiple ways to set the device in learning mode to receive the IR codes: via the Zigbee2MQTT frontend, for example.\
This device is also [compatible with ZHA](https://zigbee.blakadder.com/Moes_UFO-R11.html) then you can set it also via a messages on a MQTT topic to learning mode.

#### Option 1: via Zigbee2MQTT

If the device is paired with Zigbee2MQTT, you can go to the frontend and in the `Exposes` tab you can enable the learning mode.\
When you point the original remote to the device, and press a single button, the code will be visible in the second row.\
You can test the code by copy it to the input field and press the `Enter` key, the device sends now the cloned signal.

<a href="images_infrared/z2m_animation.gif">
<img src="images_infrared/z2m_animation.gif" alt="learn IR codes in Z2M" width="400px" />
</a>

#### Option 2: via MQTT
It's also possible via MQTT.

To learn a new signal, set the device in learning mode by sending this payload to the MQTT topic of the device `zigbee2mqtt/irremote/set`

```yaml
{% raw %}
{     
  "learn_ir_code": "ON" 
}
{% endraw %}
```
Now a LED light turned on in front of the device.\
Now you can hold the original remote in front of the device and press a single button.

The response is sent to the MQTT topic `zigbee2mqtt/irremote` and contains the infrared code. 
You need this code to resend the signal via this same device.
```yaml
{% raw %}
{
  "battery" : 11,
  "last_seen" : "2024-11-03T09:21:03.343Z",
  "learn_ir_code" : null,
  "learned_ir_code" : "Bb8jphFIAuAXAQF9BuAVA0ABwCPgAwFAE0ABwAdAAUALwANAAUALCcqdvyPBCEgC///gAgcCCEgC",
  "linkquality" : 43,
  "voltage" : 1200
}
{% endraw %}
```

### Resend signal

To resend the signal, send on the MQTT topic `zigbee2mqtt/irremote/set` this payload to resend the same signal as send from the original remote.

Make sure your signal is in line with the device because the infrared signal is an invisible light beam. 
My experience is that the signal can control devices still in a range of 5 meters.
Because it works on batteries your free to position the device.

```yaml
{% raw %}
{
  "ir_code_to_send": "Bb8jphFIAuAXAQF9BuAVA0ABwCPgAwFAE0ABwAdAAUALwANAAUALCcqdvyPBCEgC///gAgcCCEgC"
}
{% endraw %}
```

If all goes well, the device now also reacts on your box!

Now you can add also other buttons from the remote to the box and clone the signals of other remotes as well.

Now the fun continues to automation the commands!
Turn the candles/fireplace on when you enter the room in the evening or whatever scenario you can think of! 
Enjoy home automation!

---
### Home Assistant

From Home Assistant, you can create buttons on your dashboard and send a MQTT events with a specific copied IR signal to the IR device topic.

<img src="images_infrared/ha_mqtt_button.png" alt="Home Assistant button send MQTT event" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard button card code
show_name: true
show_icon: true
type: button
tap_action:
  action: perform-action
  perform_action: mqtt.publish
  data:
    topic: zigbee2mqtt/irremote/set
    payload: >-
      {"ir_code_to_send":"BdsjmxFPAuAXAQF1BuAZA0ABQCfgAwHgAw/AC0AHwANAAUALCdma2yO3CE8C///gEgcCCE8C"}
name: Turn on
icon: mdi:candle
{% endraw %}
```

You can also create a script which contains the MQTT event and call this script from an automation.\
For readability, I place it here direct on the dashboard as action for a button.

<img src="images_infrared/ha_card.png" alt="Home Assistant button card" width="400px">

---
### Hardware

These hardware devices are examples of what you need and can use in your own infrared automations.

#### Infrared transmitter / receiver

* {{imgBasket}}<a href="/buy/smart_home_best_buy_tips#infrared-remote-control" target="_blank">An few examples of Zigbee and WiFi devices which act as programmable infrared remotes</a>.

  They can learn signals from the original remote, and via Wi-Fi or Zigbee you can resend the copied signal to simulate the press on the button via an automation.
  There are also devices that support RF signals as well.\
  I use in these examples the [Zigbee Moes UFO-R11](https://s.click.aliexpress.com/e/_DEUWZ73).

  <a href="/buy/smart_home_best_buy_tips#infrared-remote-control" target="_blank">
    <img src="/buy/images_zigbee/zigbee_ir_remote.webp" alt="infrared remote control" width="200px" class="buy-link"/>
  </a>
  
#### Infrared controlled devices

As mentioned in the introduction, there are a lot of devices that can be controlled via infrared. 
Here are some links to products which all work via infrared, and can be controlled via the above mentioned infrared transmitter / receiver.

LEDS
* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_EIwZk97" target="_blank">(1 - 6) LED lights, with different colors and brightness, controlled by a remote</a>

  <a href="https://s.click.aliexpress.com/e/_EIwZk97" target="_blank">
    <img src="/buy/images_diy/led_lamp_with_remote.avif" alt="smart socket" width="200px" class="buy-link"/>
  </a>

Light curtains

* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_oF8f3Kd" target="_blank">Light curtains</a>

  <a href="https://s.click.aliexpress.com/e/_oF8f3Kd" target="_blank">
  <img src="images_infrared/light_string.avif" alt="light curtains" width="200px" class="buy-link"/>
  </a>

Tea lights

* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DFWJ9gH" target="_blank">Tea lights controlled by an infrared remote</a>

  <a href="https://s.click.aliexpress.com/e/_DFWJ9gH" target="_blank">
    <img src="../projects/images_christmas_decorations/tea_lights_with_ir_remote.avif" alt="tea lights" width="200px" class="buy-link"/>
  </a>


Candles

* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_EwbMZuk" target="_blank">Candle lights controlled by an infrared remote</a>

  <a href="https://s.click.aliexpress.com/e/_EwbMZuk" target="_blank">
    <img src="../projects/images_christmas_decorations/candles3_with_ir_remote.avif" alt="candles" width="200px" class="buy-link"/>
  </a>

* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_ondkuzR" target="_blank">Candle lights controlled by an infrared remote</a>

  <a href="https://s.click.aliexpress.com/e/_ondkuzR" target="_blank">
    <img src="../projects/images_christmas_decorations/candles2_with_ir_remote.avif" alt="candles" width="200px" class="buy-link"/>
  </a>

* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_oDcngfL" target="_blank">Long candle lights controlled by an infrared remote</a>

  <a href="https://s.click.aliexpress.com/e/_oDcngfL" target="_blank">
    <img src="../projects/images_christmas_decorations/long_candles_with_ir_remote.avif" alt="long candles" width="200px" class="buy-link"/>
  </a>

Also, some Christmas decorations have an infrared remote, see my [dedicated page](/projects/automate_christmas_decorations#infrared-lights) how I used this project for it.


**Physical stores**

* [The Dutch Action sells them also in their shops](https://www.action.com/nl-nl/p/3206761/ledkaarsenset/)
* [The Dutch Hema sells 4 rechargeable tea lights with a remote](https://www.hema.nl/wonen-slapen/wonen/kaarsen/led-kaarsen/oplaadbare-theelichtjes---4-stuks-13550076.html)
  
  <a href="https://www.hema.nl/wonen-slapen/wonen/kaarsen/led-kaarsen/oplaadbare-theelichtjes---4-stuks-13550076.html">
  <img src="images_infrared/hema_ir_tealights.webp" alt="Hema IR tea lights" width="200px" class="buy-link"/>
  </a>

---

Where do you use the infrared transmitter / receiver for in your smart home?

