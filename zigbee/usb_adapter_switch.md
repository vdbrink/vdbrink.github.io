---
title: Zigbee USB adapter switch
description: A Zigbee USB adapter switch to have control of USB devices
category: Zigbee
tags: [Zigbee, USB, adapter, Zigbee2MQTT, switch, plug]
image: /zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png
---
{% capture imgBasket %}<img src="/buy/images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

{% capture imgZ2M %} | <img src="/zigbee/images/zigbee2mqtt.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;height:15px"/>{% endcapture %}

# USB adapter switch
*Control the power of any USB device*

<a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
<img src="/zigbee/images_usb_switch/zigbee_usb_adapter_back.avif" alt="Zigbee USB adapter" height="150px" />
</a>

## Introduction

You can place this small USB adapter switch between any USB device. 
Now you can control the power of the connected USB device(s) via your automations.\
The first port can also be used to switch on/off data access via USB, the (optional) others are only for USB power control.

---
## Table of Contents
<!-- TOC -->
  * [Purposes](#purposes)
  * [Specifications](#specifications)
  * [Zigbee2MQTT](#zigbee2mqtt)
  * [Buy](#buy)
<!-- TOC -->

---
## Purposes

<img src="/zigbee/images_usb_switch/control_usb_fan.avif" alt="phone charge cable" height="150px" style="margin-left:15px;float:right"/>
Here are some purposes where you can use this device for:

* Control the power of the USB charger for your phone;
* Control a USB lamp;
* Control a USB desk fan;
* Control a device connected to a USB powerbank;
* Cut off the USB data connection for a webcam;
* Make periodic backups on an external hard disk and cut-off the connection by default;
* Control battery-to-USB [Christmas decorations](/projects/automate_christmas_decorations);

---
## Specifications

This sensor has the following specifications:

<img src="images/zigbee.jpg" alt="Zigbee sensor" height="50px" style="margin-left:15px;float:right"/>

* Zigbee or WiFi protocol
* Input: 5V-12V
* Output: 5V-12V - 2,5A
* Control the power via USB
* Control to transfer data via a single port
* Toggle the state with the physic button on the device
* Type TS0003

<br>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">Zigbee adapter switch (AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0003.html" target="_blank" title="TS0003">{{imgZ2M}}TS0003</a>

> Please let me know if this device also works with ZHA.

---
## Zigbee2MQTT

This device is registered as [TS0003](https://www.zigbee2mqtt.io/devices/TS0003.html) in Zigbee2MQTT.

<a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
<img src="/zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter" height="150px" style="margin-left:15px;float:right"/>
</a>
I use Zigbee2MQTT as my Zigbee application.

To pair this device, you first need to set the Zigbee2MQTT to pairing mode.\
Then set the device in pairing mode.\
On the top of the sensor is a small button, press and hold this button for 5 seconds to activate the pairing mode.\
Now the device should be found by Zigbee2MQTT and added to your network.

<br>

<a href="/zigbee/images_usb_switch/each_port_state_change.png" target="_blank">
<img src="/zigbee/images_usb_switch/each_port_state_change.png" alt="Zigbee2MQTT control each port" height="150px" />
</a>

To control each port, you need to send on the MQTT topic `zigbee2mqtt/usbswitch/set` this payload to activate the left USB port.
```yaml
{% raw %}
{
  "state_left": "ON"
}
{% endraw %}
```

To control the other ports you can use `state_center` and `state_right` with also the values `OFF` or `TOGGLE`.

With the property `on_time` you can specify how long (in seconds) the device should be in this state.

See the [Z2M product page](https://www.zigbee2mqtt.io/devices/TS0003.html) for all control option details.

---
## Buy

*The use links are affiliate links, when you buy it via this link, you also support this blog but still pay the original price.*

If you're interested in this sensor,\
you can buy it {{imgBasket}}
[here (AliExpress)](https://s.click.aliexpress.com/e/_op29q8h) or via
[Amazon US](https://amzn.to/43GLLrs).

There are different versions you can choose between:
* It's available for the Zigbee or WiFi protocol;
* With 1, 2 or 3 USB ports;

  <div style="float: left">
    <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
    <img src="/zigbee/images_usb_switch/zigbee_usb_switch_one_port.png" alt="Zigbee USB adapter single USB port" height="150px" />
    </a>
  </div>

  <div style="float: left">
    <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
    <img src="/zigbee/images_usb_switch/zigbee_usb_switch_two_ports.png" alt="Zigbee USB adapter double USB port" height="150px" />
    </a>
  </div>
  
  <div>
    <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
    <img src="/zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter triple USB ports" height="150px" />
    </a>
  </div>

<!--
  <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
  <img src="/zigbee/images_usb_switch/zigbee_usb_adapter_front_back_a.avif" alt="Zigbee USB A adapter" height="150px" />
  </a>
  <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
  <img src="/zigbee/images_usb_switch/zigbee_usb_adapter_front_back_C.avif" alt="Zigbee USB C adapter" height="150px" />
  </a>
-->

That's it!

---

See also my other Zigbee devices list:

<a href="/buy/smart_home_best_buy_tips"><img src="/buy/images_zigbee/zigbee_banner.png" alt="Smart Home Best Buy Tips" width="100%"></a>

---
[^^ Top](#table-of-contents)

[<< See also my other Zigbee content](index)