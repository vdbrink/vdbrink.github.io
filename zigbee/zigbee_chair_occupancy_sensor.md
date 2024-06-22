---
title: DIY Zigbee chair occupancy sensor
category: Zigbee
tags: Zigbee, occupancy, diy, "Home Assistant", contact, sensor, Aqara
image: 
---

# DIY Zigbee chair occupancy sensor
*Based on a Zigbee contact sensor and a car seat pressure sensor*

## Introduction

<img src="" alt="Zigbee chair occupancy sensor" height="150px" style="margin-left:15px;float:right"/>
For my office I want a way to detect if I'm there.
To detect that you can use a motion sensor, or to detect when you sit still on a chair you can use a radar millimeter wave sensors, 
the downside with one this is it will also detect animals or blowing fans.

---
## My solution

This "hack" use a Zigbee contact sensor connected to a car seat sensor to detect if a chair is occupied, or not, exactly what I needed!

---

## Table of Contents
<!-- TOC -->
  * [My solution](#my-solution)
  * [Required hardware](#required-hardware)
  * [Automations](#automations)
  * [Home Assistant](#home-assistant)
<!-- TOC -->

---

## Required hardware

You only need these two devices:
 
[Zigbee contact sensor](../buy/smart_home_best_buy_tips#contact-sensor)\
I have a Zigbee network, so I use a Zigbee contact sensor but any other protocol sensor can also be used for this.

<a href="../buy/smart_home_best_buy_tips#contact-sensor">
<img src="../buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" width="200px">
</a>

[Car seat pressure sensor](../buy/esphome_diy#pressure-sensor)

<a href="../buy/esphome_diy#pressure-sensor">
<img src="../buy/images_diy/pressure_sensor.webp" width="200px" alt="pressure sensor" />
</a>


To connect both together you need also some soldering tools:
* [Soldering iron](../buy/esphome_diy#soldering-iron)
* [Soldering iron tin](../buy/esphome_diy#soldering-tin-wire)

---

## Automations

With this new sensor you can make all kind different automations, a few examples are:
* When the light can turn on/off
* When the PC can shutdown
* When it's time to stretch your legs
* When it's time to finish your day
* If it's needed to open a window
* To control the room temperature

---

## Home Assistant

### Create a new custom sensor

By default, the contact status is inverted as preferred.
With this addition to `configuration.yaml` you can create a new sensor which show the correct status in your dashboard.
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
binary_sensor:
  - platform: template
    sensors:
      chair:
        friendly_name: "chair"
        value_template: >-
          {% if is_state('binary_sensor.contact1_contact', 'off') %}
             on
          {% else %}
             off
          {% endif %}

homeassistant:
  customize: 
    binary_sensor.chair:
      icon: mdi:chair-rolling
{% endraw %}
```

### Graphs

#### Total time in a graph

<img src="images_chair/ha_graph.png" alt="History graph Card in Home Assistant" width="200px">

History graph Card

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: history-graph
entities:
  - entity: sensor.chair_occupancy
logarithmic_scale: false
hours_to_show: 24
title: Office chair
{% endraw %}
```

#### Total time in a bar

...

<img src="images_chair/ha_graph.png" alt="History graph bar Card in Home Assistant" width="200px">


```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: history-graph
entities:
  - entity: binary_sensor.chair_occupancy
  - entity: binary_sensor.motion_occupancy
hours_to_show: 24

{% endraw %}
```

#### Total time as text

...

<img src="images_chair/ha_graph.png" alt="Entities Card in Home Assistant" width="200px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: entities
entities:
  - entity: sensor.chair_occupancy
  - entity: binary_sensor.contact_chair_contact
{% endraw %}
```
