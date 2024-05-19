---
title: ESPHome custom sensors and actuators
description: "ESPHome let you create your own custom home automation sensors and actuators."
category: ESPHome
tags: [ESP, ESP8266, ESP32, nodeMCU, ESPHome, sensors, actuators]
image: /esphome/images/esphome.png
---
{% capture imgBasket %}<img src="images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

# ESPHome custom sensors and actuators

![ESPHome logo](images/esphome.png)

*ESPHome is a product from Nabu Casa, like Home Assistant is also one of them.*

## Introduction

Not every sensor is available on the market as a complete product.
Sometimes the only way is to create one yourself.\
It's also fun to build your own. 
It's also possible to combine multiple sensors together with one ESP board.

The ESP board is a small mini computer with onboard wifi. ESPHome makes it easy to program these boards.

You define for each ESP board the connected sensors in a template. In the template, you define your ESP board and which and how the sensors are connected.
The sensor also automatically register itself to Home Assistant (or sends its data to a MQTT server).

---

## Articles

I wrote multiple articles about creating your own wireless wifi sensors and actuators based on the ESP chip with ESPHome:

* [Co2 sensor based on an SCD40](co2_scd40)
* [Co2 sensor based on an SenseAir S8](co2_senseair_s8_sensor)
* [Control an Orcon mechanic ventilation system](orcon_mechanic_ventilation)

![ESP8266 NodeMCU v3](images/esp8266_nodemcu.jpg)

---

## How to flash with ESPHome
* [How to flash the config to the ESP board](esphome_flashing)

---

## DIY Best But Tips

See {{imgBasket}}[ESPHome DIY sensors - best buy tips](../buy/esphome_diy) for all kinds or hardware buy tips to create your own sensors.
