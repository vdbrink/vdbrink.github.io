---
title: ESPHome SenseAir S8 Co2 sensor
date: 2022-06-24
category: ESPHome
tags: Co2, ESP8266, ESPHome, Home Assistant, air quality
image: /esphome/images_co2/case_fit_co2_sensor.jpg
---

# ESPHome Co2 sensor
*Based on the SenseAir S8 sensor*

## Introduction

<img src="images_co2/senseair_s8.jpg" alt="zigbee" height="150px" style="margin-left:15px;float:right"/>

There are not so many affordable out-of-the-box Co2 sensors available, but it's easy to create one yourself.
With only an ESP, a CO2 sensor, power cable and box, it's a small and easy project with a lot of benefits! 

If your in a space with a too high ppm level, you can feel tired, your start yawning, 
get red cheeks and can get a headache.
Without knowing, this happens because it goes very gradually.
To prevent this, use your smart home automations and take action if the levels are too high.\
This keeps you and your family healthy!

Co2 stands for `Carbon dioxide` and is measured in `Parts per million` (ppm).

The average value outside is around 400 ppm, which is a base value.
That's also why you need to open a window when the value is too high, get some fresh air from outside.

| ppm        | condition | action                              |
|------------|-----------|-------------------------------------|
| 400 - 800  | good      | no action is required               |
| 800 - 1200 | medium    | open a window                       |
| 1200+      | bad       | limit has reached, open all windows |

---
## My final result

A small box with a tail.  
Inside a Co2 sensor and an ESP mini.

![final box](images_co2/holes_in_case.jpg)

---

## Table of Contents
<!-- TOC -->
* [Introduction](#introduction)
* [My final result](#my-final-result)
* [Required hardware](#required-hardware)
* [Required software](#required-software)
* [Connect the hardware](#connect-the-hardware)
  * [Connect the SenseAir S8 to the ESP](#connect-the-senseair-s8-to-the-esp)
* [ESPHome](#esphome)
  * [Flash the ESP](#flash-the-esp)
* [Home Assistant](#home-assistant)
  * [Dashboard Gauge](#dashboard-gauge)
  * [Dashboard Line Graphic](#dashboard-line-graphic)
  * [Dashboard History Graphic](#dashboard-history-graphic)
  * [Dashboard condition text](#dashboard-condition-text)
  * [Dashboard Mushroom entity](#dashboard-mushroom-entity)
<!-- TOC -->

---

## Required hardware

The links go to an overall page with all different kinds of DIY components with their webshop links.

These hardware components did I use for this project:

* [SenseAir S8 Co2 sensor](../buy/esphome_diy#senseair-s8)

<img src="images_co2/senseair_s8.jpg" height="180px" alt="SenseAir S8 Co2 sensor" />

* [ESP 12S Wemos D1 mini (no pro or V3)](../buy/esphome_diy#esp-d1-mini)
  * You can use any ESP chip, but I like this one because of its small size

<img src="images/esp_d1_mini.jpg" height="180px" alt="ESP D1 mini" />

* [Dupont male to male wires](../buy/esphome_diy#dupont)
  * If you order these, you can better order all three types at ones, also for any further projects

<img src="images/dupont_cable_mix.webp" alt="Dupont male to male wires" width="200px"/>

* Plastic DIY Case, I used a box with the sizes 70 x 45 x 30 mm. This one is not available anymore, but you can order a similar one (it's in [white still available](https://s.click.aliexpress.com/e/_DlrBL2n)) or at least one with a minimal of these sizes. [link 1: a lot of boxes with all kinds of sizes](https://s.click.aliexpress.com/e/_DDALbXD)

<img src="images/diy_cases.png" height="180px" alt="DIY cases" />

* [Micro USB cable to power the ESP board](../buy/esphome_diy#micro-usb-power-cable)

![Micro USB cable](images/micro_usb_cable.jpg "Micro USB cable")

* [5V USB power adapter to power the ESP](../buy/esphome_diy#5v-usb-adapter)

<img src="images/5v_power_adapter.jpg" alt="5V USB power adapter" width="200px"/>

* [Soldering iron](../buy/esphome_diy#soldering-iron). I suggest this based on the reviews. I already had one. Please let me know if you advise this one or not?

<img src="images/soldering_iron.webp" alt="soldering iron" width="200px"/>

* [Soldering tin wire](../buy/esphome_diy#soldering-tin-wire)

<img src="images/soldering_tin_wire.png" alt="soldering tin wire" width="200px"/>


Affiliate links are used here, so you sponsor my blog also with it, without paying extra for it.

Found a dead link? [Please inform me](https://github.com/vdbrink/vdbrink.github.io/issues)


See [ESPHome DIY sensors best buy tips](../buy/esphome_diy) for more DIY hardware buy tips.

---

## Required software

For this project, you only need the software to flash the ESP chip with the configuration file.

* <a href="https://www.python.org/" target="_blank">Python</a> to run ESPHome
* <a href="https://esphome.io/guides/getting_started_command_line.html#first-uploading" target="_blank">ESPHome</a> to flash the ESP
* <a href="https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers" target="_blank">Windows driver chp340</a> to recognize the ESP as connected device

---

## Connect the hardware

I've made a scheme how to connect the SenseAir S8 to the ESP.

The ESP and sensor don't come with pins, so you need to solder a bit to connect the male-to-male dupont cables between the sensor and the ESP.

### Connect the SenseAir S8 to the ESP

> Use control + click to see the full photos of the connected wires.

| Connected pins                                                                                                     | ESP8266 Wemos <br>D1 mini pins                                                                        | SenseAir S8 pins                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="images_co2/schema_senseair_s8_co2_sensor.jpg" height="500px" alt="Connect schema ESPHome SenseAir S8" /> | <img src="images/pins_esp8266_wemos_d1_mini.png" alt="Pins on a ESP8266 Wemos di mini" height="250"/> | <img src="images_co2/senseair_s8_pins.jpg" alt="Pins on a SenseAir S8" height="150"/> <BR> This image is 180 degrees rotated compared with the first image. |

This table show how the ESP is connected with the SenseAir.

| Wemos pin | GPIO Wemos pin* | SenseAir pin |
|-----------|-----------------|--------------|
| D7        | GPIO13          | UART_TxD     |
| D8        | GPIO15          | UART_RxD     |
| G         | GND             | G0           |
| 5V        | 5 V             | G+           |

&ast; The `GPIO Wemos pin` is the port which is used in the ESPHome yaml.


If you place the sensor on top of the ESP mini, it fits perfect in the DIY box.

You need to drill a hole in the edge of the box so the USB power cable can go through it.
![perfect fit in case](images_co2/case_fit_co2_sensor.jpg)

I drilled some holes in the case. Now the air can reach the Co2 sensor inside the box.

![holes in case](images_co2/holes_in_case.jpg)

---

## ESPHome
![ESPHome](images/esphome.png)

[ESPHome SenseAir page](https://esphome.io/components/sensor/senseair.html)

### Flash the ESP

Connect the ESP via USB with the computer.

Install ESPHome and compile the configuration code after you configured your own wi-fi. And configure (or remove) the MQTT section. This is not needed if you integrate it direct in Home Assistant.

For more information about installing and flashing your ESP with ESPHome see the [ESPHome website](https://esphome.io/guides/getting_started_command_line.html) or [Peyanski ESPHome Installation Guide](https://peyanski.com/complete-esphome-installation-guide/#How_to_properly_connect_an_ESP_device_for_ESPHome_install).

The script:
```yaml
# Sourcecode by vdbrink.github.io
esphome:
  name: esp_co2
  comment: Room Co2 sensor
  platform: ESP8266
  board: d1_mini
  arduino_version: latest

wi-fi:
  ssid: "xxx"
  password: "xxx"
  fast_connect: true # only needed for hidden SSID
  
mqtt:
  broker: xxx.xxx.xxx.xxx
  port: 1883
  username: "xxx"
  password: "xxx"
  
uart:
  rx_pin: GPIO13
  tx_pin: GPIO15
  baud_rate: 9600
  
sensor:
  - platform: senseair
    co2:
      id: senseair_co2
      name: "SenseAir Co2 Value"
    update_interval: 30s
```

---

## Home Assistant

Ones the sensor pushes the data, you can use and present the data on your dashboards or create notifications when the values are not good.

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
entity: sensor.senseair_co2_value
min: 350
max: 1500
name: Room Co2 sensor
```

### Dashboard Line Graphic

To show the history of the last X hours, you can use the card.

<img src="images_co2/home_assistant_co2_graph.jpg" alt="Home Assistant Graph" width="500px" />

```yaml
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: sensor
graph: line
entity: sensor.senseair_co2_value
name: Room Co2 sensor
hours_to_show: 6
```

### Dashboard History Graphic

[//]: # (<img src="images_co2/home_assistant_co2_history_graph.jpg" alt="Home Assistant History Graph" width="500px" />)

Another graph entity is the `history-graph`.

You can also show baseline values by creating a custom sensor with a fixed value.

```yaml
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: history-graph
entities:
  - entity: sensor.senseair_co2_value
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
    senseair_co2_value_text:
        icon_template: "mdi:molecule-co2"
        friendly_name: "Room Co2"
        value_template: >-
          {% set state = states('sensor.senseair_co2_value') | int %}
          {% if state < 800 %}good
          {% elif state > 800 and state <= 1200 %}average
          {% elif state > 1200 and state <= 1500 %}bad
          {% elif state > 1500%}very bad
          {% else %}unknown{% endif %}
{% endraw %}
```

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
    - entity: sensor.senseair_co2_value_text
      state_not: good
      row:
        entity: sensor.senseair_co2_value_text
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
      {% if is_state('sensor.senseair_co2_value', 'unavailable') %}
         blue
      {% elif states('sensor.senseair_co2_value')|int > 1500 %}
         red
      {% elif states('sensor.senseair_co2_value')|int > 1200 %}
         orange
      {% elif states('sensor.senseair_co2_value')|int > 800 %}
         yellow
      {% else %}
         green
      {% endif %}
{% endraw %}
```
