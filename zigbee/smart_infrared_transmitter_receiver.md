---
title: Zigbee infrared transmitter / receiver
category: Zigbee
tags: [Zigbee, WiFi, infrared, transmitter, receiver, remote, learn, send, air conditioner, TV, fireplace, lights, screens]
---

## Introduction

With a small device, you can automate all your infrared controlled devices! 
Like a TV, air conditioner, fireplace, screens or lights.

> **_NOTE:_** Affiliate links are used on this page.

---
### smart infrared transmitter / receiver

<a href="/buy/images_zigbee/zigbee_ir_remote.webp"><img src="/buy/images_zigbee/zigbee_ir_remote.webp" alt="infrared remote control" width="90px" style="margin-left:15px;float:right" /></a>
With this small black box, powered on batteries, you can control any infrared device.

A fireplace, a TV, air conditioner, or lights, you can control them all with this device.
Also, Christmas decorations, see my [dedicated page](/projects/automate_christmas_decorations#infrared-lights) about this subject.

---
### Learn mode

To learn a new signal, set the device in learning mode by sending this payload to the MQTT topic of the device, for it that `zigbee2mqtt/irremote/set`
```yaml
{% raw %}
{     
  "learn_ir_code":"ON" 
}
{% endraw %}
```
Now a light turned on in front of the device.
Now you can hold the original remote in front of the device and press a single button.

The response contains the infrared code to use to resend the signal via this device now.
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

To resend the signal, send on the topic MQTT topic `zigbee2mqtt/irremote/set` this payload to send the same signal as from the original remote.

```yaml
{% raw %}
{
  "ir_code_to_send": "Bb8jphFIAuAXAQF9BuAVA0ABwCPgAwFAE0ABwAdAAUALwANAAUALCcqdvyPBCEgC///gAgcCCEgC"
}
{% endraw %}
```

Now the lights also turned on!

Now you can add these commands to your automation.

---
### Home Assistant

From Home Assistant, you can create buttons on your dashboard and send a MQTT events to a specific topic.

<img src="images_infrared/ha_mqtt_button.png" alt="Home Assistant button send MQTT event" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard button card code
type: button
name: Turn on
tap_action:
  action: perform-action
  perform_action: mqtt.publish
  data:
    topic: zigbee2mqtt/irremote/set
    payload: >-
      {"ir_code_to_send":"BcsjsBFGAuAXAQGFBuAZA0ABQCfgAwHgAw/AC0AHwANAAUALCc+dyyPDCEYC///gCgcCCEYC"}
{% endraw %}
```

---
### Hardware

These hardware devices are examples of what can be used with infrared automation.

#### Infrared transmitter / receiver

* {{imgBasket}}<a href="/buy/smart_home_best_buy_tips#infrared-remote-control" target="_blank">An programmable infrared remote</a>

  It can learn signals from the original remote, and via WiFi or Zigbee you can resend the copied signal to simulate the press on the button via an automation.

  <a href="/buy/smart_home_best_buy_tips#infrared-remote-control" target="_blank">
    <img src="/buy/images_zigbee/zigbee_ir_remote.webp" alt="infrared remote control" width="200px" class="buy-link"/>
  </a>
  
#### Infrared controlled devices

LEDS
* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_EIwZk97" target="_blank">(1 - 6) LED lights, with different colors and brightness, controlled by a remote</a>

  <a href="https://s.click.aliexpress.com/e/_EIwZk97" target="_blank">
    <img src="/buy/images_diy/led_lamp_with_remote.avif" alt="smart socket" width="200px" class="buy-link"/>
  </a>

Light curtains

* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/" target="_blank">Light curtains</a>

  <a href="https://s.click.aliexpress.com/e/" target="_blank">
  <img src="images_infrared/light_string.avif" alt="light curtains" width="200px" class="buy-link"/>
  </a>

Tea lights

* {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DFWJ9gH" target="_blank">Tea lights controlled by an infrared remote</a>

  <a href="https://s.click.aliexpress.com/e/_DFWJ9gH" target="_blank">
    <img src="../projects/images_christmas_decorations/tea_lights_with_ir_remote.avif" alt="candles" width="200px" class="buy-link"/>
  </a>

Also, Christmas decorations, see my [dedicated page](/projects/automate_christmas_decorations#infrared-lights) about this subject.

---

Where do you use the infrared transmitter / receiver for in your smart home?