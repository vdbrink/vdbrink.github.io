---
title: DIY Zigbee chair occupancy sensor
category: Zigbee
tags: [Zigbee, occupancy, diy, contact, sensor, Aqara, chair, office, pressure, car]
image: /zigbee/images_chair/pillow_with_sensor.jpg
---

# DIY chair occupancy sensor
*Based on a contact sensor and a car seat pressure sensor*

## Introduction

<img src="images_chair/pillow_with_sensor.jpg" alt="Zigbee chair occupancy sensor" height="150px" style="margin-left:15px;float:right"/>
For my home office I want a way to detect if I'm there behind the desk.
To detect that, it's possible to use a motion sensor, 
 to detect when you also sit still on a chair, it's better to use a presence sensor. 
The downside with one of those is, they will also detect animals or blowing fans and are more expensive. 
And they detect a wide range and not only the chair occupancy.

---
## My solution

This "hack" uses a contact sensor connected to a car seat sensor to detect if a chair is occupied, 
exactly what I needed!

Other purposes for this sensor are:
* In the couch/sofa/relax chair
* Under your mattress to detect bed occupancy (only works if there is enough pressure through the mattress)
* Under a mat on the floor (to detect if someone entering a space)

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

This project only requires these two devices:
 
1. [(Zigbee) Contact sensor](../buy/smart_home_best_buy_tips#contact-sensor)\
I have a Zigbee network, so I use a Zigbee contact sensor, but any other protocol sensor can also do the trick.

<a href="../buy/smart_home_best_buy_tips#contact-sensor">
<img src="../buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" width="200px">
</a>

2. A [Car seat pressure sensor](../buy/esphome_diy#pressure-sensor)

<a href="../buy/esphome_diy#pressure-sensor">
<img src="../buy/images_diy/pressure_sensor.webp" width="200px" alt="pressure sensor" />
</a>

To connect both, you need also some soldering tools:
* [Soldering iron](../buy/esphome_diy#soldering-iron)
* [Soldering iron tin](../buy/esphome_diy#soldering-tin-wire)

---

## Wire them together

A contact sensor is a boolean sensor, the circuit can be opened or closed.\
That's also exact what the car seat pressure sensor returns.

The only this that has to be done is connecting the pressure sensor wires to the (reed) contacts of the contact sensor.

First open the contact sensor.
![opened_contact_sensor.jpg](images_chair/opened_contact_sensor.jpg)
You can remove the reed contact, but you can also leave it like it is. 
Because there is no magnet nearby, those ends don't make contact. 
The sensor is set parallel over this switch. 
![remove_reed_from_contact_sensor.jpg](images_chair/remove_reed_from_contact_sensor.jpg)
Drill a hole in the side of the contact sensor so the cables can go inside.
![wires_through_hole.jpg](images_chair/wires_through_hole.jpg)
Solder the wires to each side of the (reed) contact.
![solder_wires_to_reed_contacts.jpg](images_chair/solder_wires_to_reed_contacts.jpg)
You can also use two pressure sensors if you want to cover more space with just one sensor.\
You connect both sensors together on the same reed contacts ends.
![double_pressure_sensor.jpg](images_chair/double_pressure_sensor.jpg)
Now you can place the sensor inside a pillow on the chair of inside the chair itself if you can zip the seat open.
![pillow_with_sensor_top.jpg](images_chair/pillow_with_sensor_top.jpg)

When you now sit on it, the state of the contact sensor will change.\
Now you can create automations based on it!

---

## Automations

With this new sensor, it's possible to make all kind different automations, a few examples are:
* When the light still needs to be on
* When the PC/monitor can shut down
* When it's time to take a break
* When it's time to end your working day
* Control the room temperature because it's occupied
* Send notifications with incorrect office health state values (CO2, temperature, humidity, PM2.5, VOC, or Formaldehyde)

---

## Home Assistant

### Create a new custom chair sensor

By default, the contact status is inverted as preferred.
With this addition in the `configuration.yaml` file, it creates a new sensor that shows the correct status in the dashboard.
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
This is the code to add in the `configuration.yaml`.  
This will generate a new sensor called `sensor.chair_occupancy`.

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

Or show the occupied time in a line graph over time.\
It shows exactly where I took some breaks, the line is flat at that time.

<img src="images_chair/graph_hours_occupancy.jpg" alt="History graph Card in Home Assistant" width="400px">

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

Use the same History graph Card with binary sensors, then it's presented as a bar.

Here I add the chair occupancy sensor next to the value of a pir motion sensor in the same room. 
As you can see, the chair sensor is much more reliable if you sit still!

<img src="images_chair/bar_motion_chair_occupancy.jpg" alt="History graph bar Card in Home Assistant" width="400px">

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

#### Is occupied

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

<br>

That's it, a very useful and reliable DIY Zigbee chair sensor (for me at least!).

<br>

---

See also: [DIY zigbee leak sensor based on a contact sensor](zigbee_water_leak_sensor) or [Zigbee Best Buy Tips](/buy/smart_home_best_buy_tips)

---

[^^ Top](#table-of-contents)

[<< See also my other Zigbee content](index)
