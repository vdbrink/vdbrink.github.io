---
title: DIY Zigbee chair occupancy sensor
category: Zigbee
tags: [Zigbee, occupancy, diy, contact, sensor, Aqara, chair, office, pressure, car]
---

# DIY Zigbee chair occupancy sensor
*Based on a Zigbee contact sensor and a car seat pressure sensor*

## Introduction

<img src="images_chair/pillow_with_sensor.jpg" alt="Zigbee chair occupancy sensor" height="150px" style="margin-left:15px;float:right"/>
For my office I want a way to detect if I'm there.
To detect that you can use a motion sensor, or to detect when you sit still on a chair you can use a radar millimeter wave sensors, 
the downside with one this is it will also detect animals or blowing fans.

---
## My solution

This "hack" uses a Zigbee contact sensor connected to a car seat sensor to detect if a chair is occupied, or not, exactly what I needed!

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
I have a Zigbee network, so I use a Zigbee contact sensor, but any other protocol sensor can also be used for this.

<a href="../buy/smart_home_best_buy_tips#contact-sensor">
<img src="../buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" width="200px">
</a>

[Car seat pressure sensor](../buy/esphome_diy#pressure-sensor)

<a href="../buy/esphome_diy#pressure-sensor">
<img src="../buy/images_diy/pressure_sensor.webp" width="200px" alt="pressure sensor" />
</a>

To connect both together, you need also some soldering tools:
* [Soldering iron](../buy/esphome_diy#soldering-iron)
* [Soldering iron tin](../buy/esphome_diy#soldering-tin-wire)

---

## Wire them together

![opened_contact_sensor.jpg](images_chair/opened_contact_sensor.jpg)
![remove_reed_from_contact_sensor.jpg](images_chair/remove_reed_from_contact_sensor.jpg)
![solder_wires_to_reed_contacts.jpg](images_chair/solder_wires_to_reed_contacts.jpg)
![wires_through_hole.jpg](images_chair/wires_through_hole.jpg)
![double_pressure_sensor.jpg](images_chair/double_pressure_sensor.jpg)

![pillow_with_sensor_top.jpg](images_chair/pillow_with_sensor_top.jpg)

---

## Automations

With this new sensor you can make all kind different automations, a few examples are:
* When the light can turn on/off
* When the PC can shut down
* When it's time to take a break
* When it's time to end your working day
* Control the room temperature because it's occupied

---

## Home Assistant

### Create a new custom chair sensor

By default, the contact status is inverted as preferred.
With this addition to `configuration.yaml` you can create a new sensor that shows the correct status in your dashboard.
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

### Occupancy time sensor

With the [history stats](https://www.home-assistant.io/integrations/history_stats/) it's possible to create new sensors which indicate how long something takes.
In this case we want to track how long the chair is occupied on each day.
The start/reset is on a new day and end time is the current time and within this timeframe how long has entity `binary_sensor.chair_work` the state `on`.
This is the code you need to add in the `configuration.yaml`. This will generate a new sensor called `sensor.chair_occupancy`.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: history_stats
  name: chair occupancy
  entity_id: binary_sensor.chair_work
  state: 'on'
  type: time
  start: '{{ now().replace(hour=0, minute=0, second=0) }}'
  end: '{{ now() }}'
{% endraw %}
```

### Graphs

Now we have the data, it's possible to present this on the dashboard!

#### Total time as text

Show the amount of time on the chair as an entity.\
8 hours, 12 minutes and 36 seconds.

<img src="images_chair/sum_hours_occupancy.png" alt="Entities Card in Home Assistant" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: entities
entities:
  - entity: sensor.chair_occupancy
{% endraw %}
```

#### Occupied in time as graph

Or show the occupied time in a line graph in time.\
You can exactly see where I took some breaks, the line is broken.

<img src="images_chair/hours_occupancy.png" alt="History graph Card in Home Assistant" width="400px">

A History graph Card is used for this.

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

If you use the same History graph Card with binary sensors, it's presented as a bar.

Here I add the chair occupancy sensor next to the value of a pir motion sensor in the same room. As you can see the chair sensor is much more reliable if you sit still! A  

<img src="images_chair/bar_motion_chair_occupancy.png" alt="History graph bar Card in Home Assistant" width="400px">


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

Indicate if someone is sitting on the chair.

<img src="images_chair/chair_occupancy.png" alt="" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: entities
entities:
  - entity: binary_sensor.chair_occupancy
{% endraw %}
```
