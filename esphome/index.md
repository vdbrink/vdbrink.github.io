---
title: ESPHome custom sensors and actuators
description: "ESPHome let you create your own custom home automation sensors and actuators."
category: ESPHome
tags: [ESP, ESP8266, ESP32, nodeMCU, ESPHome, sensors, actuators]
image: /esphome/images/esphome.png
---
{% capture imgBasket %}<img src="/buy/images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

# ESPHome custom sensors and actuators

![ESPHome logo](images/esphome.png)

*ESPHome is a product from Nabu Casa, like Home Assistant is also one of them.*

## Introduction

Not every sensor is available on the market as a complete product.
Sometimes the only way is to create one yourself.\
It's also fun to build your own. 
It's also possible to combine multiple sensors together with one ESP board.

The ESP board is a small mini computer with onboard WiFi. ESPHome makes it easy to program these boards.

You define for each ESP board the connected sensors in a template. In the template, you define your ESP board and which and how the sensors are connected.
The sensor registers itself automatically to Home Assistant (or sends its data to a MQTT server).

---

## Articles

I wrote multiple articles about creating your own wireless WiFi sensors and actuators based on the ESP chip with ESPHome:

<div class="hp-tiles hp-options">
<a class="hp-card hp-tile" href="orcon_mechanic_ventilation">
<img src="/esphome/orcon_images/wires_connected.jpg" alt="Control an Orcon mechanic ventilation system" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Ventilation control</span><strong>Control an Orcon mechanic ventilation system</strong><p>Make an Orcon mechanical ventilation smart with an ESP board.</p></div>
</a>
<a class="hp-card hp-tile" href="co2_scd40">
<img src="/esphome/images_scd40/hardware.jpg" alt="CO2 sensor based on a SCD40 sensor" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">CO2 sensor</span><strong>CO2 sensor based on a SCD40 sensor</strong><p>Create your own ESPHome CO2 sensor based on the SCD40 sensor for Home Assistant.</p></div>
</a>
<a class="hp-card hp-tile" href="co2_senseair_s8_sensor">
<img src="/esphome/images_co2/case_fit_co2_sensor.jpg" alt="CO2 sensor based on a SenseAir S8 sensor" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">CO2 sensor</span><strong>CO2 sensor based on a SenseAir S8 sensor</strong><p>Create your own ESPHome CO2 sensor based on the SenseAir S8 sensor for Home Assistant.</p></div>
</a>
<a class="hp-card hp-tile" href="microwave_radar_sensor_rcwl-0516">
<img src="/esphome/images_rcwl-0516/rcwl_0516_wired.jpg" alt="Motion and Presence sensor based on the RCWL-0516 sensor" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Motion and Presence sensor</span><strong>Motion and Presence sensor based on the RCWL-0516 sensor</strong><p>Create your own ESPHome motion and presence sensor for Home Assistant.</p></div>
</a>
</div>

---

## How to flash with ESPHome

<div class="hp-tiles hp-options hp-full">
<a class="hp-card hp-tile" href="esphome_flashing">
<img src="/esphome/images/esphome_logo.png" alt="How to flash the config to the ESP board" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">How to</span><strong>How to flash the config to the ESP board</strong><p>Install the ESPHome config on your ESP board, the first time and via the air afterwards.</p></div>
</a>
</div>

---

## DIY Best Buy Tips

<div class="hp-tiles hp-options hp-full">
<a class="hp-card hp-tile" href="../buy/esphome_diy">
<img src="/esphome/images/esp32.webp" alt="ESPHome DIY sensors - Best Buy Tips" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Best Buy Tips</span><strong>ESPHome DIY sensors</strong><p>All kinds of hardware buy tips to create your own sensors: ESP boards, sensors, cables and tools.</p><span class="hp-more">To the buy tips &rarr;</span></div>
</a>
</div>
