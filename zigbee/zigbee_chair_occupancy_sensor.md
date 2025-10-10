---
title: DIY Zigbee chair occupancy sensor
category: Zigbee
tags: [Zigbee, occupancy, diy, zigbee, WiFi, contact, sensor, Aqara, chair, office, cat, bed, mat, pressure, car]
image: /zigbee/images_chair/pillow_with_sensor.jpg
---

# DIY chair occupancy sensor
*Based on a leak or contact sensor and a car seat pressure sensor*

## Introduction

<a href="images_chair/pillow_with_sensor.jpg">
<img src="images_chair/pillow_with_sensor.jpg" alt="Zigbee chair occupancy sensor" height="150px" style="margin-left:15px;float:right"/>
</a>
For my home office I want a way to detect if I'm there behind my desk. 
So I can automate my desk peripherals as heater, monitor power, desk light and phone charger.

To detect that, it's possible to use a motion sensor, 
 but to detect when you also sit still on a chair, it's better to use a presence sensor. 
The downside with one of those is, they will also detect animals or blowing fans and are more expensive. 
They detect a wider range and not only the chair occupancy.\
I also use this room when I'm not at my desk, then I don't need all these things powered up.

Of course, with a regular button you can activate these devices also, but now my "bottom presses the button".

Also, when I walk away from my desk, it's automatically detected, then my heater goes off, 
and if I'm after X minutes not returned, everything shuts down automatically.

> UPDATE 2025-07: Now there are of-the-shelf Zigbee pressure mat sensors available!
> ([AliExpress](https://s.click.aliexpress.com/e/_o2CfnOM))\
> I didn't test it myself yet, I like to hear your experience with it.

---
## My solution

So I found the solution with this "hack".
It uses a contact (or leak) sensor connected to a car seat pressure sensor to detect if a chair is occupied, 
exactly what I needed!

Other purposes for this sensor are:
* In the cat/dog basket
* In the couch/sofa/relax chair
* Under your mattress to detect bed occupancy (only works if there is enough pressure through the mattress)
* Under a mat on the floor (to detect if someone entering a space or when the laundry basket is too heavy)

---

## Table of Contents
<!-- TOC -->
  * [My solution](#my-solution)
  * [Automations](#automations)
  * [Required hardware](#required-hardware)
  * [Wire them together](#wire-them-together)
  * [Home Assistant](#home-assistant)
<!-- TOC -->

---

## Automations

<img src="images_chair/chair_occupancy.png" alt="" width="400px">

With this new sensor, it's possible to create all kind different automations, like:
* When the light still needs to be on.
* Power up all the computer peripherals (monitor, lights, chargers, heater).
* Shutdown the computer and peripherals automatically when you don't sit behind your desk for a while.
* When it's time to take a break to stand up and stretch your legs.
* When it's time to end your working day.
* Show or announce today's calendar events at the start of the day. 

* Control the room temperature because it's occupied.
* Send notifications with incorrect office health state values only when you're there (CO2, temperature, humidity, PM2.5, VOC, or Formaldehyde).

---

## Required hardware

This project only requires these two devices: A boolean sensor to detect true or false and a pressure sensor.

> I have a Zigbee network, so I use a Zigbee contact sensors, but any other protocol sensor can also do the trick.

The first device needs to detect anything or nothing. 
This can be achieved with two different types of sensors. 
A water leak sensor or a contact sensor. 
Both work with a boolean (true of false) state.

1a. <a href="https://s.click.aliexpress.com/e/_oE7l1ns" target="_blank">Aqara Zigbee water leak sensor</a> (No soldering required)\
The Aqara Zigbee leak sensor has two metal screw contacts on the back of the sensor where you can connect direct the two wires of the pressure sensor behind.

<a href="https://s.click.aliexpress.com/e/_oE7l1ns" target="_blank">
<img src="/buy/images_zigbee/aqara_leak_sensor.webp" alt="Aqara water leak sensor" width="200px">
</a>

<br>

1b. Or use any <a href="https://s.click.aliexpress.com/e/_EumfxFt" target="_blank">Zigbee Contact sensor</a> (or WiFi version). 
Soldering is required if you use this way.\
A contact sensor is (mostly) cheaper than the water leak, but it requires soldering.

On this page I describe how it works with this <a href="https://s.click.aliexpress.com/e/_EumfxFt" target="_blank">contact sensor</a>.

<a href="https://s.click.aliexpress.com/e/_EumfxFt" target="_blank">
<img src="/buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" width="200px">
</a>

1c. Or use an alternative <a href="https://s.click.aliexpress.com/e/_omkbvFz" target="_blank">(Zigbee/WiFi) leak sensor</a> (No soldering required)\
This alternative leak sensor has external contact point, really easy to connect to the two seat sensor wires. 
See 3a how to connect the wires from the leak- and pressure sensor with each other.

<a href="https://s.click.aliexpress.com/e/_omkbvFz" target="_blank">
<img src="/buy/images_zigbee/leak_sensor.webp" alt="leak sensor" width="200px">
</a>

---

2. A [Car seat pressure sensor](../buy/esphome_diy#pressure-sensor) (smaller or bigger versions are available)

<a href="https://s.click.aliexpress.com/e/_c3vZ9fSL" target="_blank">
<img src="images_chair/pressure_mat_even_bigger.avif" width="200px" alt="pressure sensor" /></a>
<a href="https://s.click.aliexpress.com/e/_oEjqY1V" target="_blank"><img src="/buy/images_diy/pressure_sensor.webp" width="200px" alt="pressure sensor" /></a>
<a href="https://s.click.aliexpress.com/e/_oFdjPzD" target="_blank"><img src="images_chair/pressure_mat_bigger.avif" width="200px" alt="pressure sensor" />
</a>

---

3a. To connect the alternative leak sensor and the pressure sensor, you can use different kinds of <a href="../buy/esphome_diy#cable-connectors">clips</a> to avoid soldering.

<a href="https://s.click.aliexpress.com/e/_Ewo1TGo" target="_blank">
<img src="/buy/images_diy/cable_connectors1.avif" alt="Connect two wires without soldering" height="100px"/></a>
&nbsp;
<a href="https://s.click.aliexpress.com/e/_oBrUAsr" target="_blank"><img src="/buy/images_diy/cable_connectors2.avif" alt="Connect two wires without soldering" height="100px"/>
</a>

3b. To connect it to the contact sensor, you need soldering tools:
* <a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank">Soldering iron</a>
* <a href="https://s.click.aliexpress.com/e/_DEDR08n" target="_blank">Soldering iron tin</a>

<br>
3c. Or use hot glue. That can also be possible as long as the metals make contact!

---

## Wire them together

### With an Aqara water leak sensor

With the Aqara Zigbee water leak sensor, you only need to unscrew the screws, wrap the blank wires from the pressure sensor around it. 
Screw them tight again and done!!

<a href="images_chair/aqara_leak_sensor_screws.jpg"><img src="images_chair/aqara_leak_sensor_screws.jpg" title="Aqara water leak back with screws" width="250px"/></a>

You can skip the contact sensor description 
and continue with the [Home Assistant](#home-assistant) section if you use the leak sensor.

### With a contact sensor

A contact sensor is a boolean sensor, the circuit can be opened or closed.\
That's also exact what the car seat pressure sensor returns.

The thing that has to be done is connecting the pressure sensor wires to the (reed) contacts of the contact sensor.

First open the contact sensor.

<a href="images_chair/opened_contact_sensor.jpg">
<img src="images_chair/opened_contact_sensor.jpg" alt="" width="200px">
</a>

You can remove the reed contact, but you can also leave it like it is. 
Because there is no magnet nearby, those ends don't make contact. 
The sensor is set parallel over this switch.

<a href="images_chair/remove_reed_from_contact_sensor.jpg">
<img src="images_chair/remove_reed_from_contact_sensor.jpg" alt="" width="200px">
</a>

Drill a hole in the side of the contact sensor so the cables can go inside.

<a href="images_chair/wires_through_hole.jpg">
<img src="images_chair/wires_through_hole.jpg" alt="" width="200px">
</a>

Solder the wires to each side of the (reed) contact.

<a href="images_chair/solder_wires_to_reed_contacts.jpg">
<img src="images_chair/solder_wires_to_reed_contacts.jpg" alt="" width="200px">
</a>

You can also use two pressure sensors if you want to cover more space with just one sensor.\
You connect both sensors together on the same reed contacts ends.

<a href="images_chair/double_pressure_sensor.jpg">
<img src="images_chair/double_pressure_sensor.jpg" alt="" width="200px">
</a>

Now you can place the sensor inside a pillow on the chair of inside the chair itself if you can zip the seat open.

<a href="images_chair/pillow_with_sensor_top.jpg">
<img src="images_chair/pillow_with_sensor_top.jpg" alt="" width="200px">
</a>

When you now sit on it, the state of the contact sensor will change.\
Now you can create automations based on it!

---

## Home Assistant

### Create a new custom chair sensor

By default, the contact status is inverted as preferred.
With this addition in the `configuration.yaml` file, it creates a new sensor that shows the correct status in the dashboard.

<img src="images_chair/chair_occupancy.png" alt="" width="400px">

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

This is the code to add in the `configuration.yaml`.\
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

That's it, a very useful and reliable DIY chair occupancy sensor (for me at least!).

<br>

---

[<< See also my other Zigbee related content](index)
