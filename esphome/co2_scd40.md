---
title: ESPHome SCD40 Co2 sensor
date: 2022-06-24
category: ESPHome
tags: Co2, ESP8266, ESPHome, Home Assistant, SCD40, SCD41, SCD4x
image: /esphome/images_scd40/hardware.jpg
---

# ESPHome Co2 sensor

*Based on the SCD40 sensor*

## Introduction

<img src="images_scd40/hardware.jpg" alt="SCD40" height="150px" style="margin-left:15px;float:right"/>

There are Co2 sensors available, most of them are really expensive.
You can also create one yourself with just a single sensor and an ESP board. 
It's easy (and fun) to create one yourself, and with this one NO SOLDERING REQUIRED!!

Co2 stands for `Carbon dioxide` and is measured in `Parts per million` (ppm).
If your in a space with a too high ppm level, you can feel tired, your start yawning and can get a headache.

The base value outside is around 400 ppm.

| ppm        | condition | action                              |
|------------|-----------|-------------------------------------|
| 400 - 800  | good      | no action is required               |
| 800 - 1200 | medium    | open a window                       |
| 1200+      | bad       | limit has reached, open all windows |

<br>

<img src="images_co2/home_assistant_co2_history_graph.png" alt="SCD40" height="250px"/>

---

## My solution

No soldering required.

<img src="images_scd40/hardware.jpg" alt="hardware connected" height="400px"/>

---

## Table of Contents
- [Required hardware](#required-hardware)
- [Required software](#required-software)
- [Connect the hardware](#connect-the-hardware)
- [ESPHome](#esphome)
- [Home Assistant](#home-assistant)

---

## Required hardware

These hardware components do I use for this project:

* GY-SCD40 or GY-SCD41 Co2 and temperature sensor


<img src="images_scd40/SCD40_co2_with_cable.webp" height="180px" alt="GY-SCD40 Co2 sensor" />

* ESP8266 NodeMCU v3 with pins

<img src="images/esp8266_nodemcu.jpg" height="180px" alt="ESP8266 Node MCU" />

* plastic DIY Case

<img src="images/diy_cases.png" height="180px" alt="DIY cases" />

* Micro USB cable to power the ESP

![Micro USB cable](images/micro_usb_cable.jpg "Micro USB cable")

* 5V USB power adapter to power the ESP 

<img src="images/5v_power_adapter.jpg" alt="5V USB power adapter" width="200px"/>

Also affiliate links are used here.

Found a dead link? [Please inform me](https://github.com/vdbrink/vdbrink.github.io/issues)

---

## Required software

* <a href="https://www.python.org/" target="_blank">Python</a> to run ESPHome
* <a href="https://esphome.io/guides/getting_started_command_line.html#first-uploading" target="_blank">ESPHome</a> to flash the ESP
* <a href="https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers" target="_blank">Windows driver chp340</a> to recognize the ESP as connected device

---

## Connect the hardware

I've made a scheme how to connect the GY SCD40 to the ESP.
This sensor use an i2c interface to connect to the ESP. 
The ESP has predefined pins for SDA and SDL. I use here a ESP8266 chipset.

| ESP pin | GPIO esp8266 pin | SCD40 pin   |
|---------|------------------|-------------|
| D2      | GPIO4            | SDA (data)  |
| D1      | GPIO5            | SDL (clock) |
| G       | GND              | GND         |
| 3V      | 3 V              | VCC         |

### Connect the GY SCD40 to the ESP

> Use control + click to see the full photos of the connected wires.

---

## ESPHome
![ESPHome](images/esphome.png)

[ESPHome SCD4X page](https://esphome.io/components/sensor/scd4x.html)

[ESPHome I2C page](https://esphome.io/components/i2c.html)

### Flash the ESP via command line with Python


Connect the ESP via USB with the computer.


The script:
```yaml
# Sourcecode by vdbrink.github.io
esphome:
  name: espscd40
  comment: Room Co2 sensor
  platform: ESP8266
  board: nodemcuv2
  arduino_version: latest

wifi:
  ssid: "XXX"
  password: "XXX"
  fast_connect: true # only needed for hidden SSID

# Push the data also to MQTT topics: 
# * Co2 espscd40/sensor/scd40_co2/state
# * Temperature espscd40/sensor/co2_temperature/state  
# * Humidity espscd40/sensor/co2_humidity/state
mqtt:
  broker: 192.168.XXX.XXX
  port: 1883
  username: "XXXX"
  password: "XXXX"

# Enable logging to the console
logger:

# Home Assistant integration
api:

# Pins on an esp8266
i2c:
  sda: 4 # pin 21 for an ESP32
  scl: 5 # pin 22 for an ESP32

# Sensors definitions
sensor:
  - platform: scd4x
    co2:
      name: "SCD40 CO2"
    temperature:
      name: "co2 temperature"
    humidity:
      name: "co2 humidity"
```

---

## Home Assistant

Ones the sensor pushes the data, you can use and present the data on your dashboards or create notifications when the status is not good.

<img src="images_scd40/ha_esphome_device.png" alt="ESPHome device sensors" width="250px">


### Dashboard Gauge

In a Gauge, you can directly see if the current co2 value is correct.
I used different colors to indicate how bad the condition is. I used the values from the table mentioned in the [Introduction](#introduction).

<img src="images_co2/home_assistant_co2_gauge.jpg" alt="Home Assistant Gauge" width="500px">

```yaml
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: gauge
severity:
  green: 400
  yellow: 800
  red: 1200
entity: sensor.scd40_co2_value
min: 350
max: 1500
name: Room Co2 sensor
```
### Dashboard Graphic

To show the history of the last 6 hours, you can use the history-graph-card (or a line-card for a rawer version).

<img src="images_co2/home_assistant_co2_history_graph_base.png" alt="Co2 value for the last 6 hours" width="500px"/>

```yaml
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: history-graph
entities:
  - entity: sensor.scd40_co2_value
hours_to_show: 6
```

### Dashboard History Graphic

<img src="images_co2/home_assistant_co2_history_graph.png" alt="Home Assistant History Graph" width="500px" />

Another graph entity is the `history-graph`.

You can also show baseline values by creating a custom sensor with a fixed value.

```yaml
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: history-graph
entities:
  - entity: sensor.scd40_co2_value
  - entity: sensor.co2_value_800
  - entity: sensor.co2_value_1200
  - entity: sensor.co2_value_1500
hours_to_show: 24
```

This is how you create three custom lines in the graph to see the threshold values.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- sensor:
    - platform: template
      sensors:
        co2_value_800:
          friendly_name: "good"
          value_template: 800
          unit_of_measurement: 'ppm'
        co2_value_1200:
          friendly_name: "avarage"
          value_template: 1200
          unit_of_measurement: 'ppm'
        co2_value_1500:
          friendly_name: "bad"
          value_template: 1500
          unit_of_measurement: 'ppm'
{% endraw %}
```

### Dashboard condition text

<img src="../homeassistant/images/conditional_co2.png" alt="Home Assistant conditional Co2 text" width="500px" />

This creates a new sensor that shows a textual presentation of the current condition.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    scd40_co2_value_text:
        icon_template: "mdi:molecule-co2"
        friendly_name: "roomname CO2"
        value_template: >-
          {% set state = states('sensor.scd40_co2_value') | int %}
          {% if state < 800 %}good
          {% elif state > 800 and state <= 1200 %}medium
          {% elif state > 1200 and state <= 1500 %}bad
          {% elif state > 1500%}very bad
          {% else %}unknown{% endif %}
{% endraw %}
```

### Dashboard bad condition text

In my dashboard, I have a section with important messages. Only when there is an action required, you see that here.
There is also a message when the Co2 value is not good. This section can be achieved by using conditional entities.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: entities
entities:
- type: conditional
  conditions:
    - entity: sensor.scd40_co2_value_text
      state_not: good
      row:
        entity: sensor.scd40_co2_value_text
{% endraw %}
```

### Dashboard Mushroom entity

<img src="../homeassistant/images_mushroom/mushroom_co2_ok.png" alt="mushroom chips" width="50px" style="float:left;margin-right:10px"> 
 Show a green icon, without any text, if the level is less the 800 ppm, less than 1200 ppm yellow, less than 1500 ppm red.


```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
chips:
  - chip: null
    type: template
    icon: mdi:molecule-co2
    entity: sensor.senseair_co2_value
    content: ''
    icon_color: |-
      {% if is_state('sensor.scd40_co2_value', 'unavailable') %}
         blue
      {% elif states('sensor.scd40_co2_value')|int > 1500 %}
         red
      {% elif states('sensor.scd40_co2_value')|int > 1200 %}
         orange
      {% elif states('sensor.scd40_co2_value')|int > 800 %}
         yellow
      {% else %}
         green
      {% endif %}
{% endraw %}
```
