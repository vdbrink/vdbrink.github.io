---
title: DIY Zigbee outlet temperature sensor
description: "Create a non-battery Zigbee temperature sensor"
category: Zigbee
tags: [Zigbee, diy, temperature, sensor, wall, outlet, socket]
---

# DIY Zigbee outlet temperature sensor
*Based on a temperature sensor and a battery replacements*

## Introduction

<img src="images_temp_no_battery/outlet_socket.webp" alt="outlet plug" height="150px" style="margin-left:15px;float:right"/>
Zigbee temperature sensors measure periodic the current temperature and on a battery the last a long time, but this is not always long enough. 
Sometimes you just want a solution which works always without the need to replace batteries once in a while.

<br>
<br>

---

## Table of Contents
<!-- TOC -->
  * [My solution](#my-solution)
  * [Required hardware](#required-hardware)
    * [Combination 1: CR2032 battery replacement](#combination-1-cr2032-battery-replacement)
    * [Combination 2: AAA battery replacement](#combination-2-aaa-battery-replacement)
<!-- TOC -->

---

## My solution

<img src="/projects/images_christmas_decorations/battery_to_usb.jpg" alt="battery eliminator" height="150px" style="margin-left:15px;float:right"/>
You can create a DIY WiFi based temperature sensor with the BME280 temperature sensor and ESPHome.\
Or, what I choose, use a Zigbee temperature sensor and replace the battery with a dummy battery, with an adapter to USB and connect it to an outlet.

<br>
<br>

---

## Required hardware

This project only requires these devices: A battery powered temperature sensor and a battery replacement kit.

> I have a Zigbee network, so I use a Zigbee temperature sensors, but any other protocol sensor can also do the trick.

### Combination 1: CR2032 battery replacement

1. The <a href="/buy/smart_home_best_buy_tips#temperature-sensor" target="_blank">Aqara WSDCGQ11LM</a> is a CR2032 battery powered temperature sensor.\
   <a href="/buy/smart_home_best_buy_tips#temperature-sensor" target="_blank">
   <img src="/buy/images_zigbee/zigbee_temperature_humidity_sensor_aqara.webp" alt="Aqara temperature and humidity sensor" height="150px" /></a>

2. A <a href="/buy/smart_home_best_buy_tips#cr2032-usb-battery-replacements">CR2032 battery to USB adapter</a>\
   <a href="/buy/smart_home_best_buy_tips#cr2032-usb-battery-replacements" target="_blank">
   <img src="/buy/images_zigbee/cr2032_to_usb.webp" alt="CR2032 to USB" height="150px" /></a>

3. A <a href="/buy/smart_home_best_buy_tips#adapters">USB to outlet adapter</a>\
   <a href="/buy/smart_home_best_buy_tips#adapters" target="_blank">
   <img src="/esphome/images/5v_power_adapter.jpg" alt="USB to outlet adapter" height="150px" /></a>

### Combination 2: AAA battery replacement

1. The <a href="/buy/smart_home_best_buy_tips#temperature-sensor" target="_blank">Tuya WSD500A AAA Battery powered temperature and humidity sensor</a>\
   <a href="/buy/smart_home_best_buy_tips#temperature-sensor" target="_blank">
   <img src="/buy/images_zigbee/temperature_sensor_tuya_aaa.avif" alt="Tuya AAA battery powered temperature and humidity sensor" height="150px" /></a>

2. A <a href="/buy/smart_home_best_buy_tips#battery-eliminators">AAA battery replacement/eliminator to USB adapter</a>\
   <a href="/buy/smart_home_best_buy_tips#battery-eliminators" target="_blank">
   <img src="/buy/images_diy/battery_eliminator.png" alt="battery replacement to USB adapter" height="150px" /></a>

3. A <a href="/buy/smart_home_best_buy_tips#adapters">USB to outlet adapter</a>\
   <a href="/buy/smart_home_best_buy_tips#adapters" target="_blank">
   <img src="/esphome/images/5v_power_adapter.jpg" alt="USB to outlet adapter" height="150px" /></a>

---

Any other solutions or feedback? Please let me know!

<br>

---

[<< See also my other Zigbee content](index)
