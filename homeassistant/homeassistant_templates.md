---
title: "Home Assistant dashboard: Templates"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, templates]
---

# Home Assistant dashboard: Templates

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find some Home Assistant template examples that you can add to your own configuration to create new custom sensors.

<br>
<br>

---
## Table of Contents
<!-- TOC -->
  * [Chair occupancy](#chair-occupancy)
  * [Overlay based on lux](#overlay-based-on-lux)
  * [Floor activity](#floor-activity)
<!-- TOC -->

---

## Chair occupancy

Use a contact sensor to detect if a chair is occupied.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
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
{% endraw %}
```

---

## Overlay based on lux

When you have a floorplan and want to show a dark overlay when the lux is low, you can create a new sensor based on the lux value.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
    overlay:
      friendly_name: "overlay"
      value_template: >-
        {% if is_state('sensor.motion_illuminance_lux', 1) > 5 %}
           on
        {% else %}
           off
        {% endif %}
{% endraw %}
```

---
## Floor activity

Check if there is any activity on a specific floor.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  activity_downstairs:
    friendly_name: Activity downstairs
    value_template: >
      {{ is_state("binary_sensor.motion1_occupancy", "on")
        or is_state("binary_sensor.motion2_occupancy", "on") 
        or is_state("binary_sensor.motion3_occupancy", "on") 
      }}
    delay_off: "00:01:00"
{% endraw %}
```
---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)