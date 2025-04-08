---
title: Zigbee USB adapter switch
description: A Zigbee USB adapter switch to have control of USB devices
category: Zigbee
tags: [Zigbee, USB, adapter, Zigbee2MQTT, switch, plug]
---

# USB adapter switch
*Control the power of any USB device*

<a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
<img src="/zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter" height="150px" />
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
  * [Pairing](#pairing)
  * [Where to buy](#where-to-buy)
<!-- TOC -->

---
## Purposes

<img src="/zigbee/images_usb_switch/control_usb_fan.avif" alt="phone charge cable" height="150px" style="margin-left:15px;float:right"/>
Here are some purposes where you can use it for:

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

* Type TS0003
  <img src="images/zigbee.jpg" alt="Zigbee sensor" height="50px" style="margin-left:15px;float:right"/>
* Zigbee or WiFi protocol
* Input: 5V-12V
* Output: 5V-12V - 2,5A
* Control the power via USB
* Control to transfer data via a single port
* Toggle the state with the physic button on the device

The Zigbee2MQTT sensor page is [here](https://www.zigbee2mqtt.io/devices/TS0003.html).

> Please let me know if this device also works with ZHA.

---
## Pairing

<a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
<img src="/zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter" height="150px" style="margin-left:15px;float:right"/>
</a>
I use Zigbee2MQTT as my Zigbee application.
First, set the Zigbee2MQTT to pairing mode.
Then set the device in pairing mode. 
On the top of the sensor is a small button, press and hold this button for 5 seconds to activate the pairing mode.
Now the device should be found by Zigbee2MQTT and added to your network.

<a href="/zigbee/images_usb_switch/each_port_state_change.png" target="_blank">
<img src="/zigbee/images_usb_switch/each_port_state_change.png" alt="Zigbee2MQTT control each port" height="150px" style="margin-left:15px;float:right"/>
</a>

<!--
An example, of the three-port-version, response in the Zigbee2MQTT log is:
```yaml
{% raw %}
{

}
{% endraw %}
```
-->

---
## Where to buy

*The use links are affiliate links, when you buy it via this link, you also support this blog but still pay the original price.*

If you're interested in this sensor, you can buy it
[here (AliExpress)](https://s.click.aliexpress.com/e/_op29q8h).

There are different versions you can choose between:
* It's available for the Zigbee or WiFi protocol;
* With 1, 2 or 3 USB ports;

  <div style="float: left">
  Single USB port version<br>
  
    <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
    <img src="/zigbee/images_usb_switch/zigbee_usb_switch_one_port.png" alt="Zigbee USB adapter single USB port" height="150px" />
    </a>
  </div>

  <div style="float: left">
  Double USB port version <br>
    <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
    <img src="/zigbee/images_usb_switch/zigbee_usb_switch_two_ports.png" alt="Zigbee USB adapter double USB port" height="150px" />
    </a>
  </div>
  <div>
  Triple USB port version<br>
  
    <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
    <img src="/zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter triple USB ports" height="150px" />
    </a>
  </div>

![](/Users/ronaldvandenbrink/data/iot/github/vdbrink/vdbrink.github.io/zigbee/images_usb_switch/zigbee_usb_adapter_front_back_a.avif)

<!--
  <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
  <img src="/zigbee/images_usb_switch/zigbee_usb_adapter_front_back_a.avif" alt="Zigbee USB A adapter" height="150px" />
  </a>
  <a href="https://s.click.aliexpress.com/e/_op29q8h" target="_blank">
  <img src="/zigbee/images_usb_switch/zigbee_usb_adapter_front_back_C.avif" alt="Zigbee USB C adapter" height="150px" />
  </a>
-->

---
[^^ Top](#table-of-contents)

[<< See also my other Zigbee content](index)