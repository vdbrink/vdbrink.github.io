---
title: ESPHome SenseAir S8 CO2 sensor
description: "Create your own ESPHome CO2 sensor based on the SenseAir S8 sensor for Home Assistant"
date: 2024-06-24
category: ESPHome
tags: [CO2 , ESP8266, ESPHome, Home Assistant, air quality, senseAir,health]
image: /esphome/images_co2/case_fit_co2_sensor.jpg
---
{% capture imgBasket %}<img src="/buy/images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

# ESPHome CO2 sensor
*Based on the SenseAir S8 sensor*

## Introduction

<img src="images_co2/senseair_s8.jpg" alt=" SenseAir S8 Co2 sensor" height="150px" style="margin-left:15px;float:right"/>

There are not many affordable out-of-the-box CO2 sensors available, but it's easy to create one yourself.
With only an ESP, a CO2 sensor, power cable and box, it's a small and easy project with a lot of benefits!

If you are in a space with a too high ppm level, you can feel tired, you start yawning,
get red cheeks and can get a headache.
Without knowing, this happens because it goes very gradually.
To prevent this, use your smart home automations and take action if the levels are too high.\
This keeps you and your family healthy!

CO2 stands for `Carbon dioxide` and is measured in `Parts per million` (ppm).

The average value outside is around 400 ppm, which is the baseline value.
That's also why you need to open a window when the value is too high, get some fresh air from outside.

| ppm        | condition | action                              |
|------------|-----------|-------------------------------------|
| 400 - 800  | good      | no action is required               |
| 800 - 1200 | medium    | open a window                       |
| 1200+      | bad       | limit has reached, open all windows |

---
## My final result

The finished sensor is compact, practical, and easy to place anywhere in the room.
Everything fits inside a small case: the SenseAir S8 sensor, an ESP mini.

![final box](images_co2/holes_in_case.jpg)

> **_NOTE:_** If you prefer a ready-to-go CO2 sensor, you can also choose the Netatmo Healthy Home Coach.
> It is an all-in-one solution with CO2, decibel, temperature, and humidity sensors.
> You can find it here:
[Amazon NL](https://amzn.to/44wKKCE#ad),
[Amazon DE](https://amzn.to/42nXN80#ad)

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
    * [Dashboard Mini Graph Card](#dashboard-mini-graph-card)
    * [Dashboard History Graphic](#dashboard-history-graphic)
    * [Dashboard condition text](#dashboard-condition-text)
    * [Dashboard Mushroom entity](#dashboard-mushroom-entity)
  * [Automations](#automations)
<!-- TOC -->

---

## Required hardware

The links go to an overall page with all different kinds of DIY components with their webshop links.

Also affiliate links are used here. Same price, but you also sponsor this blog.

All the required products are also bundled on these
[Amazon US](https://amzn.to/4ndsHIZ) and
[Amazon NL](https://amzn.to/4u15WKY#ad) pages.

These are the hardware components I used for this project:

* {{imgBasket}}SenseAir S8 CO2 sensor <a href="https://s.click.aliexpress.com/e/_c3585CLl" target="_blank">(AliExpress)</a>
<a href="https://s.click.aliexpress.com/e/_oFib9fC">(AliExpress alternative link)</a>
<a href="https://amzn.to/3OXb03U#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4neifkk#ad" target="_blank">(Amazon NL)</a>
  * <a href="https://senseair.com/product/s8/">Manufacturer product page</a>

<img src="images_co2/senseair_s8.jpg" height="180px" alt="SenseAir S8 CO2 sensor" />

* {{imgBasket}}ESP 12S Wemos D1 mini (no pro or V3) <a href="https://s.click.aliexpress.com/e/_ooKDQkk" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4wfabEe#ad">(Amazon US)</a>
<a href="https://amzn.to/48QLNPl#ad">(Amazon NL)</a>
  * You can use any ESP chip, but I like this one because of its small size

<img src="images/esp_d1_mini.jpg" height="180px" alt="ESP D1 mini" />

* {{imgBasket}}Dupont male-to-male wires <a href="https://s.click.aliexpress.com/e/_DEy2mvt" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4wfc4Re#ad">(Amazon US)</a>
<a href="https://amzn.to/4dgoMqj#ad">(Amazon NL)</a>
  * If you order these, it's better to order all three types at once, also for any future projects

<img src="images/dupont_cable_mix.webp" alt="Dupont male to male wires" width="200px"/>

* Plastic DIY case, I used a box with dimensions 70 x 45 x 30 mm.
This one is not available anymore, but you can order a similar one (it's in <a href="https://s.click.aliexpress.com/e/_oEnMVdm" target="_blank">white still available</a>) or at least one with dimensions of this size or larger.

  * {{imgBasket}}A lot of boxes with all kinds of sizes <a href="https://s.click.aliexpress.com/e/_DDALbXD" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4ts9gxB#ad">(Amazon US)</a>
<a href="https://amzn.to/4ncjPU9#ad">(Amazon NL)</a>

<img src="images/diy_cases.png" height="180px" alt="DIY cases" />

* {{imgBasket}}Micro USB cable to power the ESP board <a href="https://s.click.aliexpress.com/e/_c32Nxdc7" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4eITR8B#ad">(Amazon US)</a>
<a href="https://amzn.to/4cV7cZZ#ad">(Amazon NL)</a>

![Micro USB cable](images/micro_usb_cable.jpg "Micro USB cable")

* {{imgBasket}}5V USB wall power adapter to power the ESP <a href="https://s.click.aliexpress.com/e/_c3BEg2xd" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4j2wDcC#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4ndTMvH#ad" target="_blank">(Amazon NL)</a>

<img src="images/5v_power_adapter.jpg" alt="5V USB EU power adapter" width="200px"/>

* {{imgBasket}}Soldering iron <a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/42lWIgd#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4uvdwNA#ad" target="_blank">(Amazon NL)</a>.
I suggest this based on the reviews. I already had one. Please let me know whether you recommend this one.

<img src="images/soldering_iron.webp" alt="soldering iron" width="200px"/>

* {{imgBasket}}Soldering tin wire <a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4cWTy8U#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4nfzylk#ad" target="_blank">(Amazon NL)</a>

<img src="images/soldering_tin_wire.png" alt="soldering tin wire" width="200px"/>

Also affiliate links are used here, so you also support my blog without paying extra for it.

Found a dead link? [Please inform me](https://github.com/vdbrink/vdbrink.github.io/issues)


See [ESPHome DIY sensors Best Buy Tips](../buy/esphome_diy) for more DIY hardware buy tips.

---

## Required software

For this project, you only need the software to flash the ESP chip with the configuration file.

The only software you need is ESPHome.

There are a lot of ways to flash the config file with ESPHome to the board.\
Read [here](esphome_flashing) how to upload it.

---

## Connect the hardware

I've made a diagram showing how to connect the SenseAir S8 to the ESP.

The ESP and sensor don't come with pins, so you need to solder on some pins to connect the male-to-male dupont cables between the sensor and the ESP.

### Connect the SenseAir S8 to the ESP

> Click on the image to see the full photos of the connected wires.

| Connected pins                                                                                                                                                            | ESP8266 Wemos <br>D1 mini pins                                                                                                                       | SenseAir S8 pins                                                                                                                                                                                           |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="images_co2/schema_senseair_s8_co2_sensor.jpg"><img src="images_co2/schema_senseair_s8_co2_sensor.jpg" height="500px" alt="Connect schema ESP to SenseAir S8" />  | <a href="images/pins_esp8266_wemos_d1_mini.png"><img src="images/pins_esp8266_wemos_d1_mini.png" alt="Pins on a ESP8266 d1 mini" height="250"/></a>  | <a href="images_co2/senseair_s8_pins.jpg"><img src="images_co2/senseair_s8_pins.jpg" alt="Pins on a SenseAir S8" height="150"/></a> <BR> This image is 180 degrees rotated compared with the first image.  |

This table shows how the ESP is connected with the SenseAir.

| Wemos pin | GPIO Wemos pin* | SenseAir pin |
|-----------|-----------------|--------------|
| D7        | GPIO13          | UART_TxD     |
| D8        | GPIO15          | UART_RxD     |
| G         | GND             | G0           |
| 5V        | 5 V             | G+           |

&ast; The `GPIO Wemos pin` is the port which is used in the ESPHome yaml.


If you place the sensor on top of the ESP mini, it fits perfectly in the DIY box.

You need to drill a hole in the edge of the box so the USB power cable can go through it.
![perfect fit in case](images_co2/case_fit_co2_sensor.jpg)

I drilled some holes in the case. Now the air can reach the CO2 sensor inside the box.

![holes in case](images_co2/holes_in_case.jpg)

---

## ESPHome
![ESPHome](images/esphome.png)

[ESPHome SenseAir page](https://esphome.io/components/sensor/senseair.html)

### Flash the ESP

Connect the ESP via USB to the computer.

Install ESPHome and compile the configuration code after you've configured your own wifi. And configure (or remove) the MQTT section. This is not needed if you integrate it directly in Home Assistant.

For more information about installing and flashing your ESP with ESPHome see the [ESPHome website](https://esphome.io/guides/getting_started_command_line.html) or [Peyanski ESPHome Installation Guide](https://peyanski.com/complete-esphome-installation-guide/#How_to_properly_connect_an_ESP_device_for_ESPHome_install).

The script:
```yaml
# Sourcecode by vdbrink.github.io
esphome:
  name: esp_co2
  comment: Room CO2 sensor
  platform: ESP8266
  board: d1_mini
  arduino_version: latest

wifi:
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
      name: "SenseAir CO2 Value"
    update_interval: 30s
```

---

## Home Assistant

Once the sensor pushes the data, you can use and present the data on your dashboards or create notifications when the values are not good.

### Dashboard Gauge

In a Gauge, you can directly see if the current CO2 value is correct.
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
name: Room CO2 sensor
```

### Dashboard Line Graphic

To show the history of the last X hours, you can use the line graph card.
It's a default presentation available in Home Assistant.

<img src="images_co2/home_assistant_co2_graph.jpg" alt="Home Assistant Graph" width="500px" />

```yaml
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: sensor
graph: line
entity: sensor.senseair_co2_value
name: Room CO2 sensor
hours_to_show: 6
```

### Dashboard Mini Graph Card

With a Mini Graph Card you can create a color gradient graph line with the history of the CO2 readings.

With a fixed `sensor.co2_value_800` sensor I defined a visual [threshold](#threshold) line for myself.

This card required the HACS integration `mini-graph-card`,
install this integration via this button\
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=kalkih&repository=mini-graph-card&category=integration)

<img src="images_co2/home_assistant_co2_dashboard_mini-graph-card.png" alt="Home Assistant mini-graph-card CO2" width="500px" />

```yaml
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mini-graph-card
entities:
  - entity: sensor.senseair_co2_value
  - entity: sensor.co2_value_800
    show_fill: false
    color: "#999999"
    show_legend: false
show:
  labels: true
hours_to_show: 12
points_per_hour: 24
height: 150
color_thresholds:
  - value: 400
    color: "#008000"
  - value: 800
    color: "#0000FF"
  - value: 1000
    color: "#c0392b"
  - value: 1200
    color: "#d35400"
  - value: 2000
    color: "#c0392b"
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
  - entity: sensor.senseair_co2_value
  - entity: sensor.co2_value_800
  - entity: sensor.co2_value_1200
  - entity: sensor.co2_value_1500
hours_to_show: 24
```

This is how you create three custom lines in the graph to see the threshold values.
<a name="threshold"></a>
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
          friendly_name: "average"
          value_template: 1200
          unit_of_measurement: 'ppm'
        co2_value_1500:
          friendly_name: "bad"
          value_template: 1500
          unit_of_measurement: 'ppm'
{% endraw %}
```

### Dashboard condition text

<img src="../homeassistant/images/conditional_co2.png" alt="Home Assistant conditional CO2 text" width="500px" />

This creates a new sensor that shows a text representation of the current condition.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    senseair_co2_value_text:
        icon_template: "mdi:molecule-co2"
        friendly_name: "Room CO2 "
        value_template: >-
          {% set state = states('sensor.senseair_co2_value') | int %}
          {% if state < 800 %}good
          {% elif state > 800 and state <= 1200 %}average
          {% elif state > 1200 and state <= 1500 %}bad
          {% elif state > 1500%}very bad
          {% else %}unknown{% endif %}
{% endraw %}
```

In my dashboard, I have a section with important messages. Only when action is required do you see that here.
There is also a message when the CO2 value is not good. This section can be achieved by using conditional entities.

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
 Show a green icon, without any text, if the level is less than 800 ppm, less than 1200 ppm yellow, and less than 1500 ppm red.


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

---

## Automations

When the CO2 value is too high, you can send a [notification](../node-red/node-red_home-assistant_notifications) to your phone or smart speaker.\
Or use a colored light or [LED-strip](/projects/bin_day_led_strip_reminder) to indicate the condition.

It's now easy to present on a [wall panel dashboard](/homeassistant/homeassistant_dashboard_tablet_in_kiosk_mode) in your living room.

<br><br>
Keep your home healthy, measuring is knowing!
