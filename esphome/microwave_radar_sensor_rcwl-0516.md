---
title: ESPHome Presence detection with a microwave radar sensor
description: "Create your own ESPHome presence sensor based on the RCWL-0516 sensor for Home Assistant"
category: ESPHome
tags: [ESP8266, "Home Assistant", ESPHome, D1mini, RCWL-0516]
image: /esphome/images_rcwl-0516/rcwl_0516_microwave_radar_sensor.jpg
---

# ESPHome Presence detection with a microwave radar sensor

*Based on the RCWL-0516*

## Introduction

<img src="images_rcwl-0516/rcwl_0516_microwave_radar_sensor.jpg" height="150px" style="margin-left:15px;float:right"/>

The microwave radar sensor is a presence detection sensor based on radar.
The advantage above this PIR is that you can hide it out of the right by placing it, for example, in a closet.

## My solution

I used a compact D1 mini ESP chip and wired to the microwave sensor.

<a href="images_rcwl-0516/rcwl_0516_wired.jpg">
<img src="images_rcwl-0516/rcwl_0516_wired.jpg" alt="hardware connected" width="400px"/>
</a>

<a href="images_rcwl-0516/rcwl_0516_closed_box.jpg">
<img src="images_rcwl-0516/rcwl_0516_closed_box.jpg" alt="final closed box" width="400px"/>
</a>

Click on the photos to open it fullscreen.

---

## Table of Contents
<!-- TOC -->
  * [My solution](#my-solution)
  * [Required hardware](#required-hardware)
  * [Required software](#required-software)
  * [Connect the hardware](#connect-the-hardware)
  * [Flash the software](#flash-the-software)
  * [Test if it works](#test-if-it-works)
  * [Home Assistant](#home-assistant)
<!-- TOC -->

---

## Required hardware

These hardware components do I use for this project.

Affiliate links are used here. Same price, and you sponsor this blog.

### RCWL-0516 microwave sensor

This radar sensor detect humans (and animals) via radar signals.

<a href="https://s.click.aliexpress.com/e/_Dc8YZ39" target="_blank">link 1 (AliExpress)
<br>
<img src="images_rcwl-0516/rcwl_0516_microwave_radar_sensor.jpg" height="180px" alt="RCWL-0516 presence sensor" />
</a>

### ESP board

You can use any ESP board, but on this page I use the tiny ESP8266 D1 mini.

* The pins are not soldered on the board yet (with some practice even you can do it for sure!)

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_ooKDQkk" target="_blank">link 1 (AliExpress)</a>

<a href="https://s.click.aliexpress.com/e/_ooKDQkk" target="_blank">
<img src="../esphome/images/esp_d1_mini.jpg" height="180px" alt="ESP D1 mini" /></a>


## Dupont cables

Dupont are cables to connect the ESP pins with sensors pins. 
The dupont cables are in different variants: male-to-male, female-to-male and male-to-female. 
You can also cut one end to just solder it direct to the connector.

I used for this project female-to-female because I soldered the pin heads on the ESP and sensor. 

<a href="https://s.click.aliexpress.com/e/_DEy2mvt" target="_blank">
<img src="../esphome/images/dupont_cable_mix.webp" alt="Dupont male to male wires" width="200px"/></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DEy2mvt" target="_blank">link 1 (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_EIjrYwZ" target="_blank">link 2 (AliExpress)</a>

* I advise: If you order these, you can better order all three types at ones, also for any further projects.

### Case

Any case with a minimum length of 7 cm, width of 3 cm, and a height of 3 cm can be used.\

It can also be a plastic box from a local shop.

Also, a decorative small statuette can be used.

On AliExpress they also sell
<a href="https://s.click.aliexpress.com/e/_DDALbXD" target="_blank">
Plastic DIY Cases (AliExpress)
<br>
<img src="images/diy_cases.png" height="180px" alt="DIY cases" />
</a>
<br>

### USB power cable

A cable to power the ESP.

<a href="https://s.click.aliexpress.com/e/_onj6tZi" target="_blank">
Micro USB cable to USB A to power the ESP (AliExpress)
<br>
<img src="images/micro_usb_cable.jpg" height="180px" alt="Micro USB cable" />
</a>
<br>

### 5V USB power adapter

A power adapter to power the ESP and sensor.

<a href="https://s.click.aliexpress.com/e/_DBB3Upl" target="_blank">
5V USB power adapter (AliExpress)
<br>
<img src="images/5v_power_adapter.jpg" alt="5V USB power adapter" width="200px"/>
</a>

<br>
<br>

Found a dead link? [Please inform me](https://github.com/vdbrink/vdbrink.github.io/issues) or look at [ESPHome DIY sensors - best buy tips](../buy/esphome_diy) for alternative links.

---

## Required software

### ESPHome

The only software you need is <a href="https://esphome.io/" target="_blank">ESPHome</a>.\
This is needed to flash the config to the ESP board.

---
## Connect the hardware

This table shows how the ESP D1 mini is connected with the RCWL-0516.

| Connected pins                                                                                                                                                     | ESP8266 Wemos <br>D1 mini pins                                                                                                                      | RCWL-0516 pins                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="images_rcwl-0516/d1_mini_pins_connected.jpg"><img src="images_rcwl-0516/d1_mini_pins_connected.jpg" height="250px" alt="Connect ESPHome RCWL-0516" /></a> | <a href="images/pins_esp8266_wemos_d1_mini.png"><img src="images/pins_esp8266_wemos_d1_mini.png" alt="Pins on a ESP8266 d1 mini" height="250"/></a> | <a href="images_rcwl-0516/rcwl_0516_pins.jpg"><img src="images_rcwl-0516/rcwl_0516_pins.jpg" alt="Pins on a RCWL-0516" height="150"/></a> |

Click on the photos/image to open it fullscreen.

| ESP D1 pin | GPIO pin | RCWL-0516 pin | cable color | description                                 |
|------------|----------|---------------|-------------|---------------------------------------------|
| D2         | GPIO4    | VOUT          | blue        | RCWL sends HIGH signal when motion detected |
| GND        | GND      | GND           | green       | ground                                      |
| 5V         | 5V       | VIN           | yellow      | power                                       |

&ast; The `GPIO pin` is the port which is used in the ESPHome yaml.

I've made a small hole in the case for the power USB cable.\
The sensor detects through the case, no holes are needed in the case.

<a href="images_rcwl-0516/rcwl_0516_in_the_box.jpg">
<img src="images_rcwl-0516/rcwl_0516_in_the_box.jpg" height="250px" alt="RCWL-0516 in a box" />
</a>

<a href="images_rcwl-0516/rcwl_0516_closed_box.jpg">
<img src="images_rcwl-0516/rcwl_0516_closed_box.jpg" height="250px" alt="RCWL-0516 in a closed box" />
</a>

---

## Flash the software
![ESPHome](images/esphome.png)

ESPHome is the software to flash the config file to the ESP board.

> esphome "microwave sensor RCWL-0516.yaml" run

Their website contains a lot of information about how to config all kinds of sensors.
Also, the one we used here, a binary sensor:

* [ESPHome Binary Sensor Component page](https://esphome.io/components/binary_sensor/)

### Flash with ESPHome

Connect the ESP via USB to the computer.

There are a lot of ways to flash the config file with ESPHome to the board.\
Read [here](esphome_flashing) how to upload it.

The "microwave sensor RCWL-0516.yaml" YAML file
```yaml
# Sourcecode by vdbrink.github.io
esphome:
  name: esp_microwave_1
  comment: Occupancy sensor
  platform: ESP8266
  board: d1_mini

wifi:
  ssid: "XXX"
  password: "XXX"
  fast_connect: true # only needed for hidden SSID

# Push the data also to MQTT topics: 
# * esp_microwave_1/binary_sensor/microwave_sensor_1/state
mqtt:
  broker: 192.168.XXX.XXX
  port: 1883
  username: "XXXX"
  password: "XXXX"

# Enable logging to the console
logger:

# Home Assistant integration
api:

# Sensors definitions
# See https://esphome.io/components/binary_sensor/ for all config parameters
binary_sensor:
  - platform: gpio
    pin: D2
    name: "Microwave Sensor 1"
    id: microwave_sensor_1
    device_class: motion
    filters:
      - delayed_off: 180000ms # wait for 180 seconds without motion to send OFF
```

---
## Test if it works

Now the data is flashed, check if the sensor pushes the data correctly.

### Via console
If you flash the ESP via the console and enabled logging,
you see the readings in the console direct after the ESP is flashed.

### Via Home Assistant

Ones the ESP is online it automatically registers itself by Home Assistant if you installed ESPHome.

You will see a new device with one entitiy.

<img src="images_rcwl-0516/rcwl-0516_esphome_sensor.png" alt="New ESPHome sensor in Home Assistant" width="400px">

### Via MQTT
One way is to test, if the ESP works now, check for incoming MQTT messages (if you enabled it in the config).  
On Windows you can use the application MQTT Explorer.
The sensor sends it data to the topics `/esp_microwave_1/binary_sensor/microwave_sensor_1/state`

<img src="images_rcwl-0516/rcwl-0516_mqtt_explorer.png" alt="MQTT data" width="400px">

---

## Home Assistant

In Home Assistant you now have a new boolean sensor if presence is detected.

<img src="images_rcwl-0516/rcwl-0516_ha_detected.png" alt="Home Assistant sensor" width="400px">



