---
title: "ESPHome DIY sensors - Best Buy Tips"
description: "Useful link to buy sensors and tools to create your own sensors with ESPHome for Home Assistant"
date: 2024-05-07
category: Buy tips
tags: [Best, Buy, tips, ESPHome, sensors, soldering]
---
{% capture imgBasket %}<img src="/buy/images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

# ESPHome DIY sensors - Best Buy Tips

## Introduction

<img src="../esphome/images_co2/case_fit_co2_sensor.jpg" height="180px" style="margin-left:15px;float:right"/>
If you want to create your own sensors with ESPHome you need an ESP development board where you can load the software to read the sensors and send this data over the network to your home server.

If you're afraid to solder some pins or connect the ESP to the sensor, look for some tutorials and give it a try.
You can also look for ESPs and sensors with already pins, then with dupont cables you don't need to soldering at all.

Here you find some useful links where you can buy ESPs,
sensors and other tooling which can be useful for making your own DIY sensors.

I have a [page](../esphome/index) where I added manuals to create your own sensors.

---

## Table of Contents
<!-- TOC -->
  * [ESP board](#esp-board)
    * [ESP8266 vs ESP32](#esp8266-vs-esp32)
  * [Sensors](#sensors)
  * [Cables and power](#cables-and-power)
  * [Connecting and mounting](#connecting-and-mounting)
  * [Boxes](#boxes)
  * [Tools](#tools)
  * [Other hardware](#other-hardware)
  * [Internal links](#internal-links)
<!-- TOC -->

---

> **_NOTE 1:_** Most links on this page are hardware I also bought myself.
> Most of the links are affiliate links, You pay the normal price and also support my blog by buying it from here.

---

## ESP board

The brains of your own sensor.
It contains the processor to run the program on, and with the WiFi module on it which can make contact with your own network.

### ESP8266 vs ESP32

The two most used ESP families are the ESP8266 and the ESP32. Both are supported by ESPHome.

|              | ESP8266                 | ESP32                                           |
|--------------|-------------------------|-------------------------------------------------|
| Processor    | Single-core, 80/160 MHz | Dual-core up to 240 MHz (the C3 is single-core) |
| Memory       | About 80 KB RAM         | About 520 KB RAM (the C3 has 400 KB)            |
| Connectivity | WiFi                    | WiFi and Bluetooth                              |
| Price        | Cheapest                | A bit more expensive                            |

<br>

**Go for the ESP8266** if you build a simple sensor with one or two sensors, like a temperature sensor or a CO2 sensor. It is cheap and fast enough.

**Go for the ESP32** if:
* You need Bluetooth, for example to use it as a Bluetooth proxy for Home Assistant.
* You want to connect more sensors, a display or other devices, and need more pins.
* You have a bigger or more complex configuration, which needs more memory and speed.
* You want a newer board with USB-C. New ESPHome features are mostly built for the ESP32.

If you're not sure, choose an ESP32. The small price difference gives you more room to grow.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DkQwIwv" target="_blank"><img src="/esphome/images/esp32_c3_mini.avif" alt="ESP32-C3 supermini" loading="lazy"></a>
<div class="hp-tile-body"><a id="esp32"></a><a id="esp32-c3-supermini"></a><span class="hp-chip">ESP32</span><strong>ESP32-C3 supermini</strong>
<p>A really tiny ESP32 with bluetooth.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DkQwIwv" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DDYRBIF" target="_blank"><img src="/esphome/images/esp32.webp" alt="ESP-32S WROOM" loading="lazy"></a>
<div class="hp-tile-body"><a id="esp32s-wroom"></a><span class="hp-chip">ESP32</span><strong>ESP-32S WROOM</strong>
<p>The newer and faster ESP32 board has a dual-core processor, bluetooth, usb-c and already soldered pins.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DDYRBIF" target="_blank">AliExpress</a></p></div>
</div>
</div>
<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3YHyskJ" target="_blank"><img src="/esphome/images/esp8266_nodemcu.jpg" alt="ESP8266 NodeMCU v3" loading="lazy"></a>
<div class="hp-tile-body"><a id="esp8266"></a><span class="hp-chip">ESP8266</span><strong>ESP8266 NodeMCU v3</strong>
<p>The original ESP developer board (or comparable) and in most cases fast enough to handle the sensor data.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3YHyskJ" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_ooKDQkk" target="_blank"><img src="/esphome/images/esp_d1_mini.jpg" alt="ESP D1 mini" loading="lazy"></a>
<div class="hp-tile-body"><a id="esp-d1-mini"></a><span class="hp-chip">ESP8266</span><strong>ESP D1 mini</strong>
<p>This ESP D1 mini is also an ESP8266 variant (don't use the pro or V3). You can use any ESP chip, but I like this one because of its small size. The pins are not soldered on the board yet (with some practice even you can do it for sure!).</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_ooKDQkk" target="_blank">AliExpress</a></p></div>
</div>
</div>

---

## Sensors

Sensors are the digital senses. They can measure all different kinds of units, like temperature, humidity, light intensity, pressure, etc.

Here are some ready-to-use sensors that can be connected direct to an ESP without a challenging circuit with resistors and capacitors, etc.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3jcNSMR" target="_blank"><img src="/buy/images_diy/dht11_temperature_sensor.webp" alt="DHT11" loading="lazy"></a>
<div class="hp-tile-body"><a id="temperature-and-humidity-sensor"></a><span class="hp-chip">Temperature and humidity sensor</span><strong>DHT11</strong>
<p>Dht11 is a commonly used temperature and humidity sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3jcNSMR" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3uGSNpV" target="_blank"><img src="/buy/images_diy/ags10.webp" alt="AGS10" loading="lazy"></a>
<div class="hp-tile-body"><a id="air-quality-sensor"></a><span class="hp-chip">Air quality sensor</span><strong>AGS10</strong>
<p>AGS10 TVOC air quality gas sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3uGSNpV" target="_blank">AliExpress 1</a> | <a href="https://s.click.aliexpress.com/e/_c3GYJ8st" target="_blank">AliExpress 2</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3585CLl" target="_blank"><img src="/esphome/images_co2/senseair_s8.jpg" alt="SenseAir S8 CO2 sensor" loading="lazy"></a>
<div class="hp-tile-body"><a id="co2-sensor"></a><a id="senseair-s8"></a><span class="hp-chip">CO2 sensor</span><strong>SenseAir S8 CO2 sensor</strong>
<p>A basic CO2 sensor (CO2 is measured in parts per million, ppm) which can be used to make your own CO2 sensor. Check <a href="/esphome/co2_senseair_s8_sensor">this page</a> how to create this.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3585CLl" target="_blank">AliExpress 1</a> | <a href="https://s.click.aliexpress.com/e/_oC3ntyw" target="_blank">AliExpress 2</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DB01je7" target="_blank"><img src="/esphome/images_co2/scd4x_i2c.jpg" alt="SCD41 without soldering" loading="lazy"></a>
<div class="hp-tile-body"><a id="scd41"></a><span class="hp-chip">CO2 sensor - SCD41</span><strong>SCD41 without soldering</strong>
<p>SCD40 or SCD41 are compact CO2, humidity and temperature sensors. The 41 has some higher accuracy and can measure higher ppm values (2000 vs 5000). Comes with an I2C cable, so no soldering is required. Check <a href="/esphome/co2_scd40">this page</a> how to make your own CO2 sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DB01je7" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3mSHT8x" target="_blank"><img src="/esphome/images_co2/scd41.webp" alt="SCD41 with soldering" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">CO2 sensor - SCD41</span><strong>SCD41 with soldering</strong>
<p>The same sensor, but it requires soldering.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3mSHT8x" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c4FL7beB" target="_blank"><img src="/zigbee/images_chair/pressure_mat_even_bigger.avif" alt="Pressure sensor - largest version" loading="lazy"></a>
<div class="hp-tile-body"><a id="pressure-sensor"></a><span class="hp-chip">Pressure sensor</span><strong>Pressure sensor - largest version</strong>
<p>This car seat sensor measures if there is pressure on a chair or seat. The output is just an open or a closed circuit. You can directly attach it to a contact-/water leak sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c4FL7beB" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3uYUMaV" target="_blank"><img src="/zigbee/images_chair/pressure_mat_bigger.avif" alt="Pressure sensor - big version" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Pressure sensor</span><strong>Pressure sensor - big version</strong>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3uYUMaV" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3phM4ij" target="_blank"><img src="/buy/images_diy/pressure_sensor.webp" alt="Pressure sensor - smaller version" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Pressure sensor</span><strong>Pressure sensor - smaller version</strong>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3phM4ij" target="_blank">AliExpress</a> | <a href="https://amzn.to/4jdyoXl" target="_blank">Amazon</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DkwwYYr" target="_blank"><img src="/buy/images_diy/weight_sensors.webp" alt="HX711 weight sensor" loading="lazy"></a>
<div class="hp-tile-body"><a id="weight-sensor"></a><span class="hp-chip">Weight sensor</span><strong>HX711 weight sensor</strong>
<p>The HX711 Module comes with four pressure sensors which you can place under your bed to measure the pressure to see how many people are a.t.m. in the bed.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DkwwYYr" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c2vzJch7" target="_blank"><img src="/buy/images_diy/rain_sensor_gauge.webp" alt="Rain gauge" loading="lazy"></a>
<div class="hp-tile-body"><a id="rain-gauge-sensor"></a><span class="hp-chip">Rain gauge sensor</span><strong>Rain gauge</strong>
<p>Can be used, together with a contact sensor, to create your own rain gauge sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c2vzJch7" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_okXqtFF" target="_blank"><img src="/buy/images_diy/ds18b20.webp" alt="DS18B20 water temperature sensor" loading="lazy"></a>
<div class="hp-tile-body"><a id="waterproof-temperature-sensor"></a><span class="hp-chip">Waterproof temperature sensor</span><strong>DS18B20 water temperature sensor</strong>
<p>The DS18B20 sensor is one to measure temperature in wet areas like an aquarium, for example.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_okXqtFF" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_oDNOaAb" target="_blank"><img src="/buy/images_zigbee/HLK-2410C.png" alt="HLK-2410C" loading="lazy"></a>
<div class="hp-tile-body"><a id="occupancy-sensor-mmwave"></a><span class="hp-chip">Occupancy sensor (mmWave)</span><strong>HLK-2410C</strong>
<p>A 24GHz occupancy sensor (a.k.a. millimeter wave sensor).</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_oDNOaAb" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_Dc8YZ39" target="_blank"><img src="/esphome/images_rcwl-0516/rcwl_0516_microwave_radar_sensor.jpg" alt="RCWL-0516" loading="lazy"></a>
<div class="hp-tile-body"><a id="presence-sensor-microwave"></a><span class="hp-chip">Presence sensor (microwave)</span><strong>RCWL-0516</strong>
<p>A presence sensor (a.k.a. micrometer sensor). Check <a href="/esphome/microwave_radar_sensor_rcwl-0516">this page</a> how to make your own presence detection sensor with this sensor.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_Dc8YZ39" target="_blank">AliExpress</a></p></div>
</div>
</div>

---

## Cables and power

Cables and power adapters to power your ESP.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c32Nxdc7" target="_blank"><img src="/esphome/images/micro_usb_cable.jpg" alt="Micro USB cable" loading="lazy"></a>
<div class="hp-tile-body"><a id="cables"></a><a id="micro-usb-power-cable"></a><span class="hp-chip">Micro USB power cable</span><strong>Micro USB cable</strong>
<p>USB-A to micro USB cable to power the ESP8266.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c32Nxdc7" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c4egHUiz" target="_blank"><img src="/buy/images_zigbee/usb_c_cable.jpg" alt="USB-C cable" loading="lazy"></a>
<div class="hp-tile-body"><a id="usb-c-power-cable"></a><span class="hp-chip">USB-C power cable</span><strong>USB-C cable</strong>
<p>USB-A to USB-C cable to power the ESP32.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c4egHUiz" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3r0c6Ot" target="_blank"><img src="/esphome/images/5v_power_adapter.jpg" alt="5V USB EU power adapter" loading="lazy"></a>
<div class="hp-tile-body"><a id="power"></a><a id="5v-usb-adapter"></a><a id="v-usb-adapter"></a><span class="hp-chip">5V USB adapter</span><strong>5V USB EU power adapter</strong>
<p>5V USB EU power adapter to power the ESP.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3r0c6Ot" target="_blank">AliExpress 1</a> | <a href="https://s.click.aliexpress.com/e/_c4O9TuSp" target="_blank">AliExpress 2</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3hipKZb" target="_blank"><img src="/buy/images_diy/usb_power_charger.png" alt="5V USB EU power adapter, fast charging" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">5V USB adapter</span><strong>5V USB EU power adapter, fast charging</strong>
<p>To power multiple usb devices, with fast charging and 3.1A.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3hipKZb" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c41B4sVP" target="_blank"><img src="/projects/images_christmas_decorations/christmas_light_adapter.webp" alt="Christmas light adapter" loading="lazy"></a>
<div class="hp-tile-body"><a id="christmas-light-adapter"></a><span class="hp-chip">Christmas light adapter</span><strong>Christmas light adapter</strong>
<p>A 2 pins adapter without a button to select a mode, just on, for Christmas lights, 31V and 3.6W.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c41B4sVP" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DlR7tt5" target="_blank"><img src="/buy/images_diy/usbhub.webp" alt="Active powered USB hub" loading="lazy"></a>
<div class="hp-tile-body"><a id="usb-hub"></a><span class="hp-chip">USB hub</span><strong>Active powered USB hub</strong>
<p>Active USB hub to power multiple USB devices.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DlR7tt5" target="_blank">AliExpress</a></p></div>
</div>
</div>

---

## Connecting and mounting

Everything to connect the ESP with the sensors.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DEy2mvt" target="_blank"><img src="/esphome/images/dupont_cable_mix.webp" alt="Dupont wires" loading="lazy"></a>
<div class="hp-tile-body"><a id="dupont"></a><span class="hp-chip">Dupont</span><strong>Dupont wires</strong>
<p>Dupont are cables to connect the ESP pins with sensors pins, in different variants: male to male, female to male and male to female. You can also cut one end to just solder it direct to the connector. Better order all three types at once, also for any further projects.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DEy2mvt" target="_blank">AliExpress 1</a> | <a href="https://s.click.aliexpress.com/e/_EIjrYwZ" target="_blank">AliExpress 2</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3PR90Mh" target="_blank"><img src="/buy/images_diy/cable_connectors1.avif" alt="Cable connectors - option 1" loading="lazy"></a>
<div class="hp-tile-body"><a id="cable-connectors"></a><span class="hp-chip">Cable connectors</span><strong>Cable connectors - option 1</strong>
<p>Connect two wires without soldering.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3PR90Mh" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_oBrUAsr" target="_blank"><img src="/buy/images_diy/cable_connectors2.avif" alt="Cable connectors - option 2" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Cable connectors</span><strong>Cable connectors - option 2</strong>
<p>Connect two wires without soldering.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_oBrUAsr" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_Dl8W2wB" target="_blank"><img src="/buy/images_diy/pinhead_female.webp" alt="Pin head female" loading="lazy"></a>
<div class="hp-tile-body"><a id="pin-heads"></a><span class="hp-chip">Pin heads</span><strong>Pin head female</strong>
<p>Pin heads to use dupont cables to connect the ESP with sensor. Only required if they are not already provided.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_Dl8W2wB" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_Dk4s94R" target="_blank"><img src="/buy/images_diy/pinhead_male.webp" alt="Pin head male" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Pin heads</span><strong>Pin head male</strong>
<p>Pin heads to use dupont cables to connect the ESP with sensor. Only required if they are not already provided.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_Dk4s94R" target="_blank">AliExpress</a></p></div>
</div>
</div>

---

## Boxes

A box protects the ESP board and the sensor, and makes your DIY sensor easy to place.
Pick a waterproof one if the sensor is used outside or in a damp room.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DDALbXD" target="_blank"><img src="/esphome/images/diy_cases.png" alt="Plastic boxes in all kind of sizes" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Boxes</span><strong>Plastic boxes in all kind of sizes</strong>
<p>Plastic DIY Case to fix the esp board and sensor in.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DDALbXD" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_opoz0M1" target="_blank"><img src="/esphome/images/diy_cases.png" alt="Waterproof boxes in all kind of sizes" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Boxes (waterproof)</span><strong>Waterproof boxes in all kind of sizes</strong>
<p>Plastic DIY Case to fix the esp board and sensor in.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_opoz0M1" target="_blank">AliExpress</a></p></div>
</div>
</div>

---

## Tools

Some of the DIY sensors need soldering. These are the tools I use for it, and a breadboard to test your setup first.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank"><img src="/esphome/images/soldering_iron.webp" alt="Soldering iron" loading="lazy"></a>
<div class="hp-tile-body"><a id="soldering-iron"></a><span class="hp-chip">Soldering iron</span><strong>Soldering iron</strong>
<p>I suggest this based on the reviews. I already had one. Please let me know if you advise this one or not?</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3rLAGBn" target="_blank"><img src="/buy/images_diy/soldering_kit_clean.webp" alt="Soldering kit" loading="lazy"></a>
<div class="hp-tile-body"><a id="soldering-kit"></a><span class="hp-chip">Soldering kit</span><strong>Soldering kit</strong>
<p>A complete set with a soldering iron, extra tips, solder wire, a stand, a desoldering pump and a carrying case.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3rLAGBn" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank"><img src="/esphome/images/soldering_tin_wire.png" alt="Soldering tin wire" loading="lazy"></a>
<div class="hp-tile-body"><a id="soldering-tin-wire"></a><span class="hp-chip">Soldering tin wire</span><strong>Soldering tin wire</strong>
<p>The tin wire you melt to make the connections.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_DBED3xN" target="_blank"><img src="/esphome/images/desoldering.webp" alt="Desoldering" loading="lazy"></a>
<div class="hp-tile-body"><a id="desoldering"></a><span class="hp-chip">Desoldering</span><strong>Desoldering</strong>
<p>A desoldering pump to remove solder when you made a mistake.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_DBED3xN" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_Dkm9H7l" target="_blank"><img src="/esphome/images/breadboard.webp" alt="Breadboard" loading="lazy"></a>
<div class="hp-tile-body"><a id="breadboard"></a><span class="hp-chip">Breadboard</span><strong>Breadboard</strong>
<p>A breadboard with dupont cables and power connector to test your setup first.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_Dkm9H7l" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_Ev4uoq9" target="_blank"><img src="/buy/images_diy/helping_hand.avif" alt="Helping hand" loading="lazy"></a>
<div class="hp-tile-body"><a id="helping-hand"></a><span class="hp-chip">Helping hand</span><strong>Helping hand</strong>
<p>This helping hand can be used to hold the ESP board and sensor while soldering.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_Ev4uoq9" target="_blank">AliExpress</a></p></div>
</div>
</div>

---

## Other hardware

Some extra hardware which is useful for other DIY projects around your smart home.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_c3JK73A9" target="_blank"><img src="/buy/images_diy/sdr-rtl2832u.webp" alt="RTL-SDR radio sniffer" loading="lazy"></a>
<div class="hp-tile-body"><a id="rtl-sdr-radio-sniffer-for-433-and-868-mhz"></a><span class="hp-chip">RTL-SDR Radio sniffer for 433 and 868 MHz</span><strong>RTL-SDR radio sniffer</strong>
<p>This receiver can be used to receive or sniff signals send by device which uses the 433 or 868 MHz bandwidth.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_c3JK73A9" target="_blank">AliExpress</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_omcRGhA" target="_blank"><img src="/buy/images_diy/p1_cable.webp" alt="P1 smart meter cable" loading="lazy"></a>
<div class="hp-tile-body"><a id="p1-cable-for-smart-gas-and-energy-meter"></a><span class="hp-chip">P1 cable for smart gas and energy meter</span><strong>P1 smart meter cable</strong>
<p>With this cable, you can read your smart meter to read the gas and energy consumption.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_omcRGhA" target="_blank">AliExpress</a></p></div>
</div>
</div>

---

## Internal links

Links to other sections of this blog:

<div class="hp-tiles hp-options">
<a class="hp-card hp-tile" href="../esphome/index">
<img src="/esphome/images/esphome.png" alt="ESPHome custom sensors and actuators" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">ESPHome</span><strong>ESPHome custom sensors and actuators</strong><p>How to create your own sensors with ESPHome.</p></div>
</a>
<a class="hp-card hp-tile" href="smart_home_best_buy_tips">
<img src="/buy/images_zigbee/zigbee_banner.png" alt="Zigbee Smart home - Best Buy Tips" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Best Buy Tips</span><strong>Zigbee Smart home - Best Buy Tips</strong><p>All kinds of Zigbee hardware buy tips.</p></div>
</a>
</div>
