---
title: DIY Zigbee chair occupancy sensor
category: Zigbee
tags: Zigbee, occupancy, diy, "Home Assistant", contact, sensor, Aqara
image: 
---

# DIY Zigbee chair occupancy sensor
*Based on a Zigbee contact sensor and a car seat pressure sensor*

## Introduction

<img src="" alt="zigbee chair occupancy sensor" height="150px" style="margin-left:15px;float:right"/>

...

---

## Required hardware

You only need these two devices:

[Zigbee contact sensor](../buy/smart_home_best_buy_tips#contact-sensor)

<a href="../buy/smart_home_best_buy_tips#contact-sensor">
<img src="../buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" width="200px">
</a>

[Car seat pressure sensor](../buy/esphome_diy#pressure-sensor)

<a href="../buy/esphome_diy#pressure-sensor">
<img src="../buy/images_diy/pressure_sensor.webp" width="200px" alt="pressure sensor" />
</a>

**Tools:**

[Soldering iron](../buy/esphome_diy#soldering-iron)

<a href="../buy/esphome_diy#soldering-iron">
<img src="../esphome/images/soldering_iron.webp" alt="soldering iron" width="200px"/></a>

[Soldering iron tin](../buy/esphome_diy#soldering-tin-wire)

<a href="../buy/esphome_diy#soldering-tin-wire">
<img src="../esphome/images/soldering_tin_wire.png" alt="soldering tin wire" width="200px"/></a>

---

## Automations

...

---

## Home Assistant

### Create a new custom sensor

By default, the contact status is inverted as preferred.
With this addition to configuration.yaml you can create a new sensor which show the correct status in your dashboard.
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

#### Total in time 1

...

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```

#### Total in time 2

...

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```

#### Total hours occupied

...

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```
