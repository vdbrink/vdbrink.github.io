---
title: DIY Zigbee outlet sensor
description: "Create a non-battery Zigbee sensor"
category: Zigbee
tags: [Zigbee, diy, temperature, sensor, wall, outlet, socket, battery, eliminator]
---

# DIY Zigbee outlet sensor
*Based on a battery powered sensor and a battery replacements*

## Introduction

<img src="images_temp_no_battery/outlet_socket.webp" alt="outlet plug" height="150px" style="margin-left:15px;float:right"/>
Zigbee sensors, like a temperature sensor measure periodic the current temperature and run on a battery for a long time, but still that battery needs to be replaced from time to time.
Sometimes you just want a solution which always works, without the need to replace batteries once in a while.
 
This solution works for all these types of sensors:
<div>
<a href="https://s.click.aliexpress.com/e/_c3udT3zH" target="_blank">
<img src="/buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" height="100px" style="margin-left:15px;float:left"/></a>

<a href="https://s.click.aliexpress.com/e/_c3xcbfC7" target="_blank">
<img src="/buy/images_zigbee/zigbee_motion_pir.jpg" alt="motion sensor" height="100px" style="margin-left:15px;float:left"></a>

<a href="https://s.click.aliexpress.com/e/_c3qxoNPD" target="_blank">
<img src="/buy/images_zigbee/zigbee_temperature_humidity_sensor_aqara.webp" alt="Aqara temperature and humidity sensor" height="100px" style="margin-left:15px;float:left"/></a>
    
<a href="https://s.click.aliexpress.com/e/_c3ocEEeT" target="_blank">
<img src="/buy/images_zigbee/temperature_sensor_tuya_aaa.avif" alt="Battery powered temperature and humidity sensor" height="100px" style="margin-left:15px;float:left"/></a>
    
<a href="https://s.click.aliexpress.com/e/_c3Su3S8r" target="_blank">
<img src="/buy/images_zigbee/leak_sensor.webp" alt="leak sensor" height="100px" style="margin-left:15px;"/></a>
</div>

---

## Table of Contents
<!-- TOC -->
  * [My solution](#my-solution)
  * [Required hardware](#required-hardware)
    * [Combination 1: Temperature sensor with CR2032 battery replacement](#combination-1-temperature-sensor-with-cr2032-battery-replacement)
    * [Combination 2: Temperature sensor with AAA battery replacement](#combination-2-temperature-sensor-with-aaa-battery-replacement)
    * [Combination 3: Leak sensor with AAA battery replacement](#combination-3-leak-sensor-with-aaa-battery-replacement)
    * [Combination 4: motion sensor with AAA battery replacement](#combination-4-motion-sensor-with-aaa-battery-replacement)
<!-- TOC -->

---

## My solution

<img src="/projects/images_christmas_decorations/battery_to_usb.jpg" alt="battery eliminator" height="150px" style="margin-left:15px;float:right"/>
You can create a DIY WiFi based temperature sensor with the BME280 temperature sensor and a 5V adapter powered ESP, flashed with ESPHome.

Or, what I choose, use a Zigbee temperature sensor 
and replace the normal battery with a dummy battery adapter to USB and connect it to an outlet.

There are multiple battery-eliminators:

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="/buy/batteries#battery-eliminators" target="_blank"><img src="/projects/images_christmas_decorations/battery_to_usb.jpg" alt="AA battery eliminator" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">AA</span><strong>AA battery eliminator</strong>
<p>For devices with AA batteries.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/batteries#battery-eliminators" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/batteries#battery-eliminators" target="_blank"><img src="/buy/images_diy/battery_eliminator.png" alt="AAA battery eliminator" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">AAA</span><strong>AAA battery eliminator</strong>
<p>For devices with AAA batteries.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/batteries#battery-eliminators" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/batteries#cr2032-usb-battery-replacements" target="_blank"><img src="/buy/images_batteries/cr2032_to_usb.webp" alt="CR2032 battery to USB adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">CR2032</span><strong>CR2032 battery to USB adapter</strong>
<p>For devices with a CR2032 cell battery.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/batteries#cr2032-usb-battery-replacements" target="_blank">Buy tips</a></p></div>
</div>
</div>

---

## Required hardware

This project only requires these devices: A battery powered sensor and a battery replacement kit with a power adapter.

> I have a Zigbee network, so I use a Zigbee temperature sensors, but any other protocol sensor can also do the trick.

---

### Combination 1: Temperature sensor with CR2032 battery replacement

A compact setup for sensors that run on a single CR2032 coin cell, like the Aqara temperature sensor. The CR2032-to-USB adapter takes the place of the coin cell and is powered by a USB adapter in the outlet, so this sensor never runs out of battery.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="/buy/zigbee_temperature_sensor" target="_blank"><img src="/buy/images_zigbee/zigbee_temperature_humidity_sensor_aqara.webp" alt="Aqara WSDCGQ11LM" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">1. Sensor</span><strong>Aqara WSDCGQ11LM</strong>
<p>A CR2032 battery powered temperature sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/zigbee_temperature_sensor" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/batteries#cr2032-usb-battery-replacements" target="_blank"><img src="/buy/images_batteries/cr2032_to_usb.webp" alt="CR2032 battery to USB adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">2. Battery replacement</span><strong>CR2032 battery to USB adapter</strong>
<p>Replaces the CR2032 battery and is powered via USB.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/batteries#cr2032-usb-battery-replacements" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/smart_home_power#adapters" target="_blank"><img src="/esphome/images/5v_power_adapter.jpg" alt="USB to outlet adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">3. Power</span><strong>USB to outlet adapter</strong>
<p>To power the battery replacement from the wall outlet.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/smart_home_power#adapters" target="_blank">Buy tips</a></p></div>
</div>
</div>

---

### Combination 2: Temperature sensor with AAA battery replacement

The same idea for a temperature and humidity sensor that runs on AAA batteries. Put the AAA battery eliminator in the battery compartment instead of the batteries, and connect its USB cable to an adapter in the outlet.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="/buy/zigbee_temperature_sensor" target="_blank"><img src="/buy/images_zigbee/temperature_sensor_tuya_aaa.avif" alt="Tuya WSD500A temperature and humidity sensor" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">1. Sensor</span><strong>Tuya WSD500A temperature and humidity sensor</strong>
<p>An AAA battery powered temperature and humidity sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/zigbee_temperature_sensor" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/batteries#battery-eliminators" target="_blank"><img src="/buy/images_diy/battery_eliminator.png" alt="AAA battery replacement (eliminator) to USB adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">2. Battery replacement</span><strong>AAA battery replacement (eliminator) to USB adapter</strong>
<p>Replaces the AAA batteries and is powered via USB.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/batteries#battery-eliminators" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/smart_home_power#adapters" target="_blank"><img src="/esphome/images/5v_power_adapter.jpg" alt="USB to outlet adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">3. Power</span><strong>USB to outlet adapter</strong>
<p>To power the battery replacement from the wall outlet.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/smart_home_power#adapters" target="_blank">Buy tips</a></p></div>
</div>
</div>

---

### Combination 3: Leak sensor with AAA battery replacement

This also works for other sensor types. This leak sensor runs on two AAA batteries, so the same AAA battery eliminator and USB adapter can power it permanently. Handy for a spot where you want it always on.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3Su3S8r" target="_blank"><img src="/buy/images_zigbee/leak_sensor.webp" alt="Zigbee leak sensor" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">1. Sensor</span><strong>Zigbee leak sensor</strong>
<p>It also works with other sensors, like this leak sensor with two AAA batteries.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3Su3S8r" target="_blank">AliExpress</a> | <a href="https://amzn.to/44ELc0F#ad" target="_blank">Amazon US</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/batteries#battery-eliminators" target="_blank"><img src="/buy/images_diy/battery_eliminator.png" alt="AAA battery replacement (eliminator) to USB adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">2. Battery replacement</span><strong>AAA battery replacement (eliminator) to USB adapter</strong>
<p>Replaces the AAA batteries and is powered via USB.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/batteries#battery-eliminators" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/smart_home_power#adapters" target="_blank"><img src="/esphome/images/5v_power_adapter.jpg" alt="USB to outlet adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">3. Power</span><strong>USB to outlet adapter</strong>
<p>To power the battery replacement from the wall outlet.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/smart_home_power#adapters" target="_blank">Buy tips</a></p></div>
</div>
</div>

---

### Combination 4: motion sensor with AAA battery replacement

A motion sensor on two AAA batteries can be powered the same way. A sensor that reacts to movement is used a lot, so its batteries drain faster. Wired to an outlet it always keeps working.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3xcbfC7" target="_blank"><img src="/buy/images_zigbee/zigbee_motion_pir.jpg" alt="Zigbee motion sensor" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">1. Sensor</span><strong>Zigbee motion sensor</strong>
<p>It also works with other sensors, like this motion sensor with two AAA batteries.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3xcbfC7" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/batteries#battery-eliminators" target="_blank"><img src="/buy/images_diy/battery_eliminator.png" alt="AAA battery replacement (eliminator) to USB adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">2. Battery replacement</span><strong>AAA battery replacement (eliminator) to USB adapter</strong>
<p>Replaces the AAA batteries and is powered via USB.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/batteries#battery-eliminators" target="_blank">Buy tips</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="/buy/smart_home_power#adapters" target="_blank"><img src="/esphome/images/5v_power_adapter.jpg" alt="USB to outlet adapter" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">3. Power</span><strong>USB to outlet adapter</strong>
<p>To power the battery replacement from the wall outlet.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="/buy/smart_home_power#adapters" target="_blank">Buy tips</a></p></div>
</div>
</div>

---

Any other solutions or feedback? Please let me know!

<br>

---

[<< See also my other Zigbee content](index)
