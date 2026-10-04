---
title: "Zigbee Smart home - Best Buy Tips"
description: "Useful link to buy Zigbee sensors other devices for your smart home automation with Home Assistant"
category: Buy tips
tags: [Best, Buy, tips, smart, home automation, batteries, sensors, Aqara, Tuya, Zigbee, WiFi]
image: /buy/images_zigbee/zigbee_banner.png
---
{% capture imgBasket %}<img src="/buy/images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

{% capture imgZ2M %} | <img src="/zigbee/images/zigbee2mqtt.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;height:15px"/>{% endcapture %}

# Zigbee Smart home - Best Buy Tips

<a href="/buy">
<img src="images_zigbee/zigbee_banner.png" alt="Banner"/>
</a>

What is a smart home without digital ears and eyes? Sensors are the digital version of those.\
With the sensor data, you can make conditions, act on it and control other devices.

On this page you'll find the sensors, actuators, and other (Zigbee) home automation hardware I use in my own home and that has worked very reliably for me.

If you need some home automation inspiration, you can check my [home automation ideas](../ideas/home_automation_ideas) section!

> **_NOTE 1:_** Almost all hardware links I show are devices I also use myself.\
> Most of the links are affiliate links, You pay the normal price and also support my blog a bit.

> **_NOTE 2:_** I advise these products based on my personal experience.\
> I run my network with a CC2652 Zigbee adapter and Zigbee2MQTT.\
> With other hardware combinations it may not run with the same experience.

I've been ordering most of my smart home products from [AliExpress](https://www.aliexpress.com/) for years now:
good prices, reliable products that last for years, fast shipping (sometimes under a week), and a huge selection.
When a product is also available on Amazon, I also added a link to it.\
All the Amazon products are also bundled on these
[Amazon](https://amzn.to/4d6vXkN#ad) and [Amazon NL](https://amzn.to/4cO48ip#ad) pages.

---

## What you need

A smart home is built in layers. Each layer needs its own hardware, and each one builds on the layer above it:

<div class="hp-flow-steps">
<a class="hp-card" href="#1-server"><span class="hp-flow-num">1</span><strong>Server</strong><span>Where your automations run</span></a>
<a class="hp-card" href="#2-protocol-and-dongle"><span class="hp-flow-num">2</span><strong>Protocol + dongle</strong><span>How devices talk to the server</span></a>
<a class="hp-card" href="#3-sensors-and-actuators"><span class="hp-flow-num">3</span><strong>Sensors and actuators</strong><span>The eyes, ears and hands</span></a>
<a class="hp-card" href="#4-power-and-accessories"><span class="hp-flow-num">4</span><strong>Power and accessories</strong><span>Batteries, cables and adapters</span></a>
</div>

---

## 1. Server

Everything starts with a local always-on computer, which runs your applications to control your home automations.
It runs locally in your own home and it the brain of your home automations.

<div class="hp-tiles hp-options hp-full">
<a class="hp-card hp-tile" href="/homeassistant/homeassistant_hardware">
<img src="/homeassistant/images_hardware/beelink_front_back.jpg" alt="Which hardware to run Home Assistant on?" loading="lazy">
<div class="hp-tile-body"><strong>Which hardware to run Home Assistant on?</strong><p>I explain which options are available and clarify common terms, so you can make a good choice.</p><span class="hp-more">Read more about the hardware &rarr;</span></div>
</a>
</div>

<p class="hp-flow-arrow">&darr;</p>

---

## 2. Protocol and dongle

On the market, there are different protocols to create a smart home network, like Zigbee, Thread, WiFi, Bluetooth, Z-Wave and Matter.
You can use different protocols next to each other. I chose one protocol: Zigbee (and some via wifi for [ESPs](/esphome)).

<div class="hp-tiles hp-options hp-full">
<a class="hp-card hp-tile" href="zigbee_why">
<img src="images_zigbee/zigbee.jpg" alt="zigbee" loading="lazy">
<div class="hp-tile-body"><strong>What is Zigbee?</strong><p>Zigbee is a low-power wireless mesh network for smart home devices. Every Zigbee device works in your network regardless of the manufacturer, locally and without the internet. A cheap dongle on your server is all you need to start.</p><span class="hp-more">Why I chose Zigbee &rarr;</span></div>
</a>
</div>

### Zigbee coordinator

The dongle (coordinator) connects your server with all the Zigbee devices. It's the heart of your Zigbee network.
In my setup, a Zigbee2MQTT instance on my home server talks via this stick to all my devices.

<div class="hp-tiles hp-options">
<div class="hp-card hp-tile hp-preferred">
<span class="hp-pick" tabindex="0" role="img" aria-label="I use this stick myself." data-tip="I use this stick myself.">&#10003;</span>
<a href="https://slae.sh/projects/cc2652/" target="_blank"><img src="/buy/images_zigbee/slaesh_zigbee_stick_CC2652RB.jpg" alt="Slaesh's CC2652RB stick" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">My used dongle</span><strong>Slaesh's CC2652RB stick</strong>
<p>Runs my Zigbee network non-stop since 2020 without any issue. My network has grown to 140+ devices, and it still runs fast.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://slae.sh/projects/cc2652/" target="_blank">Slae website</a> | <a href="https://www.zigbee2mqtt.io/guide/adapters/zstack.html" target="_blank">Zigbee2MQTT</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_omBbJGj" target="_blank"><img src="/buy/images_zigbee/sonoff_zbdongle-e.webp" alt="Sonoff ZBDongle-E Plus" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Popular</span><strong>Sonoff ZBDongle-E Plus</strong>
<p>A coordinator that many people are very happy with.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_omBbJGj" target="_blank">AliExpress</a> | <a href="https://amzn.to/3RhO53N#ad" target="_blank">Amazon US</a> | <a href="https://amzn.to/3OkLelX#ad" target="_blank">Amazon NL</a> | <a href="https://www.zigbee2mqtt.io/guide/adapters/zstack.html" target="_blank">Zigbee2MQTT</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://www.home-assistant.io/connect/zbt-2/" target="_blank"><img src="/buy/images_zigbee/ha_connect_zbt2.jpg" alt="Home Assistant Connect ZBT-2" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Nabu Casa</span><strong>Home Assistant Connect ZBT-2</strong>
<p>From Nabu Casa, the makers of Home Assistant. A dongle with Zigbee or Thread support.</p>
<p class="hp-store-links"><a href="https://www.home-assistant.io/connect/zbt-2/" target="_blank">Home Assistant Connect</a></p></div>
</div>
<div class="hp-card hp-tile">
<a href="https://s.click.aliexpress.com/e/_oFCMjGU" target="_blank"><img src="/buy/images_zigbee/usb_a_extension_cable.webp" alt="USB-A extension cable" loading="lazy"></a>
<div class="hp-tile-body"><span class="hp-chip">Better range</span><strong>USB-A extension cable</strong>
<p>To avoid interference with Bluetooth or WiFi, move the stick away from the server. This is recommended for every stick.</p>
<p class="hp-store-links"><img src="/buy/images/basket.png" alt=""><a href="https://s.click.aliexpress.com/e/_oFCMjGU" target="_blank">AliExpress</a> | <a href="https://amzn.to/4cOv6q9#ad" target="_blank">Amazon US</a> | <a href="https://amzn.to/3V2q9Rk#ad" target="_blank">Amazon NL</a></p></div>
</div>
</div>

<p class="hp-flow-arrow">&darr;</p>

---

## 3. Sensors and actuators

Now your network is ready, you can add devices. Sensors give your server information, actuators like lights and sockets act on it.
This is the hardware I advise, mostly based on my personal experience with it. Click on a type to see my favorites.

<div class="hp-tiles hp-options">
<a class="hp-card hp-tile" href="zigbee_contact_sensor">
<img src="/buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="Contact sensor" loading="lazy">
<div class="hp-tile-body"><strong>Contact sensor</strong><p>Detect open and closed doors, windows and drawers.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_motion_sensor">
<img src="/ideas/images/motion_sensor.png" alt="Motion sensor" loading="lazy">
<div class="hp-tile-body"><strong>Motion sensor</strong><p>Trigger lights and alerts when someone moves.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_presence_sensor">
<img src="/buy/images_zigbee/aqara_fp300.avif" alt="Presence detection sensor" loading="lazy">
<div class="hp-tile-body"><strong>Presence detection sensor</strong><p>Detect people, even when they sit still.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_pressure_sensor">
<img src="/buy/images_zigbee/pressure_sensor.avif" alt="Pressure sensor" loading="lazy">
<div class="hp-tile-body"><strong>Pressure sensor</strong><p>Detect weight on a chair, bed or mat.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_temperature_sensor">
<img src="/buy/images_zigbee/zigbee_temperature_humidity_sensor_aqara.webp" alt="Temperature sensor" loading="lazy">
<div class="hp-tile-body"><strong>Temperature sensor</strong><p>Temperature and humidity for every room.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_air_quality_sensor">
<img src="/buy/images_zigbee/zigbee_air_quality_sensor.webp" alt="Air quality sensor" loading="lazy">
<div class="hp-tile-body"><strong>Air quality sensor</strong><p>Measure CO2, VOC and other air quality values.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_light_sensor">
<img src="/ideas/images/lux_sensor.jpg" alt="Light intensity sensor" loading="lazy">
<div class="hp-tile-body"><strong>Light intensity sensor</strong><p>Measure daylight to switch lights at the right moment.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_leak_sensor">
<img src="/buy/images_zigbee/aqara_leak_sensor.webp" alt="Leak sensor" loading="lazy">
<div class="hp-tile-body"><strong>Leak sensor</strong><p>Get warned about water leaks early.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_smoke_detector">
<img src="/buy/images_zigbee/smoke_detector.avif" alt="Smoke detector" loading="lazy">
<div class="hp-tile-body"><strong>Smoke detector</strong><p>Get alerted at the first sign of smoke.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_vibration_sensor">
<img src="/buy/images_zigbee/zigbee_vibration_sensor.webp" alt="Vibration sensor" loading="lazy">
<div class="hp-tile-body"><strong>Vibration sensor</strong><p>Detect vibrations, shocks and knocks.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_plant_soil_sensor">
<img src="/buy/images_zigbee/TS0601_soil_3.png" alt="Plant soil sensor" loading="lazy">
<div class="hp-tile-body"><strong>Plant soil sensor</strong><p>Know when your plants need water.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_lights">
<img src="/buy/images_zigbee/gu10_fullcolor.jpg" alt="Lights" loading="lazy">
<div class="hp-tile-body"><strong>Lights</strong><p>Bulbs, GU10 spots and LED strips.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_buttons">
<img src="/buy/images_zigbee/zigbee_moes_wall_switch.webp" alt="Buttons" loading="lazy">
<div class="hp-tile-body"><strong>Buttons</strong><p>Wall switches, dimmers and portable buttons.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_smart_socket">
<img src="/esphome/orcon_images/blitzwolf_shp-15_zigbee_socket.jpg" alt="Smart socket" loading="lazy">
<div class="hp-tile-body"><strong>Smart socket</strong><p>Switch any plugged-in device and measure its power.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_power_strip">
<img src="/buy/images_zigbee/powerstrip.avif" alt="Power strip" loading="lazy">
<div class="hp-tile-body"><strong>Power strip</strong><p>Several smart sockets in one strip.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_usb_adapter_switch">
<img src="/zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="USB adapter switch" loading="lazy">
<div class="hp-tile-body"><strong>USB adapter switch</strong><p>Switch USB powered devices on and off.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_infrared_remote">
<img src="/buy/images_zigbee/zigbee_ir_remote.webp" alt="Infrared remote control" loading="lazy">
<div class="hp-tile-body"><strong>Infrared remote control</strong><p>Control infrared devices, like an AC or TV, from automations.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_radiator_thermostat">
<img src="/buy/images_zigbee/thermostat.avif" alt="Radiator thermostat" loading="lazy">
<div class="hp-tile-body"><strong>Radiator thermostat</strong><p>Heat only the rooms and moments that need it.</p></div>
</a>
<a class="hp-card hp-tile" href="/projects/slide_smart_curtains">
<img src="/projects/images_slide_curtain/slide_module.webp" alt="Smart curtains" loading="lazy">
<div class="hp-tile-body"><strong>Smart curtains</strong><p>Open and close your curtains automatically.</p></div>
</a>
</div>


### Outdoor sensors

There are also outdoor sensors and actuators available, like water-resistant sockets, lights, rain sensors and even a weather station. Find here a set of preselected devices for your garden or garden room.

<div class="hp-tiles hp-options">
<a class="hp-card hp-tile" href="zigbee_outdoor_contact_sensor">
<img src="/buy/images_outdoor/zigbee_contact_sensor_waterproof.png" alt="Waterproof contact sensor" loading="lazy">
<div class="hp-tile-body"><strong>Waterproof contact sensor</strong><p>Detect a gate, shed door or mailbox, also in the rain.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_outdoor_temperature_sensor">
<img src="/buy/images_outdoor/zigbee_temperature_humidity_sensor_waterproof.png" alt="Waterproof temperature sensor" loading="lazy">
<div class="hp-tile-body"><strong>Waterproof temperature sensor</strong><p>Measure the outdoor temperature and humidity.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_outdoor_soil_sensor">
<img src="/zigbee/images_soil_sensor/NAS-STH02B2.png" alt="Soil sensor" loading="lazy">
<div class="hp-tile-body"><strong>Soil sensor</strong><p>Know if your garden plants have enough water.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_weather_station">
<img src="/buy/images_weather/ecowitt.jpg" alt="Weather stations" loading="lazy">
<div class="hp-tile-body"><strong>Weather stations</strong><p>Full-blown weather stations with Home Assistant integration.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_outdoor_lights">
<img src="/buy/images_outdoor/zigbee_spotlight.avif" alt="Outdoor lights" loading="lazy">
<div class="hp-tile-body"><strong>Outdoor lights</strong><p>Spotlights, floodlights and LED strips for your garden.</p></div>
</a>
<a class="hp-card hp-tile" href="zigbee_outdoor_socket">
<img src="/buy/images_zigbee/ledvance_outdoor_plug.jpg" alt="Outdoor socket" loading="lazy">
<div class="hp-tile-body"><strong>Outdoor socket</strong><p>Water-resistant smart sockets with power measurement.</p></div>
</a>
</div>

<p class="hp-flow-arrow">&darr;</p>

---

## 4. Power and accessories

Most Zigbee devices run on batteries for years, but sometimes you need other ways to power them, or just the right cable.

<div class="hp-tiles hp-options">
<a class="hp-card hp-tile" href="smart_home_batteries">
<img src="/buy/images_diy/battery_eliminator.png" alt="Batteries" loading="lazy">
<div class="hp-tile-body"><strong>Batteries</strong><p>Common battery types and battery eliminators.</p></div>
</a>
<a class="hp-card hp-tile" href="smart_home_cables">
<img src="/esphome/images/micro_usb_cable.jpg" alt="Cables" loading="lazy">
<div class="hp-tile-body"><strong>Cables</strong><p>USB cables and extension cables for your ESP and Zigbee stick.</p></div>
</a>
<a class="hp-card hp-tile" href="smart_home_power">
<img src="/esphome/images/5v_power_adapter.jpg" alt="Power adapters" loading="lazy">
<div class="hp-tile-body"><strong>Power adapters</strong><p>5V USB power adapters for your devices.</p></div>
</a>
<a class="hp-card hp-tile" href="smart_home_battery_powered_pir">
<img src="/buy/images_diy/battery_powered_pir_lights.avif" alt="Battery powered with PIR" loading="lazy">
<div class="hp-tile-body"><strong>Battery powered with PIR</strong><p>Not connected, but still smart with a built-in PIR sensor.</p></div>
</a>
</div>

---

## ESPHome DIY sensors

<div class="hp-tiles hp-options">
<a class="hp-card hp-tile" href="esphome_diy">
<img src="/esphome/images/esp32.webp" alt="ESPHome DIY sensors - Best Buy Tips" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Best Buy Tips</span><strong>ESPHome DIY sensors</strong><p>Hardware tips to create your own sensors with ESPHome for Home Assistant.</p></div>
</a>
</div>

---

## Related articles

<div class="hp-tiles hp-options">
<a class="hp-card hp-tile" href="../ideas/home_automation_ideas#outside">
<img src="/ideas/images/idea.png" alt="Home Automation Ideas" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Ideas</span><strong>Home Automation Ideas</strong><p>For integration ideas, get inspired to make your home smart.</p></div>
</a>
</div>
