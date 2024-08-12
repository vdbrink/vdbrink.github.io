---
title: "Home Assistant dashboard: Templates"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, templates]
---

# Home Assistant dashboard: Templates

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find some Home Assistant template examples 
that you can add to your own configuration to create new custom sensors based on other sensors.

<br>
<br>

---
## Table of Contents
<!-- TOC -->
  * [Chair occupancy](#chair-occupancy)
  * [Overlay based on lux](#overlay-based-on-lux)
  * [Floor activity](#floor-activity)
  * [Day of the week (short Dutch)](#day-of-the-week-short-dutch)
  * [Day of the week (long Dutch)](#day-of-the-week-long-dutch)
  * [Moon image based on state](#moon-image-based-on-state)
  * [Trash bin days countdown](#trash-bin-days-countdown)
  * [Sink leak status](#sink-leak-status)
  * [Time mail is delivered](#time-mail-is-delivered)
  * [Expected rain amount](#expected-rain-amount)
  * [Rain intensity](#rain-intensity)
  * [What to wear outside](#what-to-wear-outside)
  * [Calculate daylight brightness percentage](#calculate-daylight-brightness-percentage)
  * [Daylight brightness to opacity](#daylight-brightness-to-opacity)
  * [Is it night](#is-it-night)
  * [Co2 threshold values](#co2-threshold-values)
  * [Temperature static value](#temperature-static-value)
  * [Count the number of lights on](#count-the-number-of-lights-on)
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
## Day of the week (short Dutch)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    dayoftheweek:
      value_template: >
        {{ ['ma','di','wo','do','vr','za','zo'][now().weekday()] }}
{% endraw %}
```

---
## Day of the week (long Dutch)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    day_of_the_week_full:
      friendly_name: "Dag van de week"
      value_template: >-
        {% set days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"] %}
        {% set day = days[now().weekday()] %}
        {{ day }}
{% endraw %}
```

---
## Moon image based on state

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
# the template for the moon phase pictures using the original moon component
- platform: template
  sensors:
    moon_phases:
      friendly_name: 'moonphase'
      value_template: '{{ states.sensor.moon.state }}'
      entity_picture_template: /local/moon_phases/{{ states.sensor.moon.state }}.png
{% endraw %}
```

---
## Trash bin days countdown

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    paper_waste_pickup_countdown:
      friendly_name: "paper pick up"
      value_template: >-
        {% set datex = state_attr('sensor.cyclus_papier','Sort_date') | string %}
        {{ ((as_timestamp(strptime(datex, '%Y%m%d')) - as_timestamp(now())) / (60 * 60 * 24)) | round(0, 'ceil')  }}
      icon_template: mdi:delete-empty
      unit_of_measurement: "days"
{% endraw %}
```

---
## Sink leak status

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    sink_leak:
      friendly_name: "leak sink"
      value_template: >-
        {{ state_attr('binary_sensor.water_contact', 'contact') | lower }}
      icon_template: mdi:water
{% endraw %}
```

---
## Time mail is delivered

Minutes since the snail mail is delivered. 

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    mail_delivered_minutes_ago:
      friendly_name: "mail delivered"
      value_template: >-
        {% set now_timestamp = as_timestamp(now()) %}
        {% set mailbox_timestamp = as_timestamp(states.binary_sensor.contact2_contact.last_changed) %}
        {% set minutes = ((now_timestamp - mailbox_timestamp) / 60) | round(0, 'ceil')  %}
        {{ minutes }}
      icon_template: mdi:mailbox
      unit_of_measurement: "minutes"
{% endraw %}
```

---
## Expected rain amount

Expected rain amount for the coming hours based on the Buienradar data.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    buienalarm_rain_expected:
      friendly_name: "rain expected"
      value_template: >-
        {% set rain = state_attr('sensor.neerslag_buienalarm_regen_data', 'data').precip %}
        {% set total_precip = 0 %}
        {% for value in rain %}
            {% set total_precip = total_precip +(value | int) %}
        {% endfor %}
        {{ total_precip }}
{% endraw %}
```

---
## Rain intensity

Rain intensity for the coming hours based on the Buienradar data.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    buienalarm_rain_level:
      friendly_name: "rain intensity"
      value_template: >-
        {% set threshold_licht = '0.4' | float %}
        {% set threshold_matig = '2.0' | float %}
        {% set threshold_zwaar = '5.0' | float %}
        {% for regen in state_attr('sensor.neerslag_buienalarm_regen_data', 'data').precip %}
        {% if regen | float >= threshold_licht %}
          {{ 'light rain' }}
        {% elif regen | float >= threshold_matig %}
          {{ 'medium rain' }}
        {% elif regen | float >= threshold_zwaar %}
          {{ 'heavy rain' }}
        {% endif %}
          {{ 'no rain' }}
        {% endfor %}
{% endraw %}
```

---
## What to wear outside

Based on the outside temperature defined what to wear.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    what_to_wear_outside:
      friendly_name: "wear outside"
      value_template: >-
        {% if states.sensor.tempest_temperature_feels_like_rounded.state|int <= 5 %} winter jacket and hand gloves
        {% elif states.sensor.tempest_temperature_feels_like_rounded.state|int <= 14 %} softshell
        {% elif states.sensor.tempest_temperature_feels_like_rounded.state|int <= 18 %} vest
        {% elif states.sensor.tempest_temperature_feels_like_rounded.state|int > 18 %} T-shirt{% endif %}
{% endraw %}
```

---
## Calculate daylight brightness percentage

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    sunlight_pct:
      value_template: >-
        {%- set elevation = state_attr('sun.sun','elevation') | float %}
        {%- set cloud_coverage = states('sensor.dark_sky_cloud_coverage') | float %}
        {%- set cloud_factor = (1 - (0.75 * ( cloud_coverage / 100) ** 3 )) %}
        {%- set min_elevation = -6 %}
        {%- set max_elevation = 90 %}
        {%- set adjusted_elevation = elevation - min_elevation %}
        {%- set adjusted_elevation = [adjusted_elevation,0] | max %}
        {%- set adjusted_elevation = [adjusted_elevation,max_elevation - min_elevation] | min %}
        {%- set adjusted_elevation = adjusted_elevation / (max_elevation - min_elevation) %}
        {%- set adjusted_elevation = adjusted_elevation %}
        {%- set adjusted_elevation = adjusted_elevation * 100 %}
        {%- set brightness = adjusted_elevation * cloud_factor %}
        {{ brightness | round }}
      unit_of_measurement: '%'
      device_class: 'illuminance'
{% endraw %}
```

---
## Daylight brightness to opacity

Daylight brightness converted to opacity for CSS.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    sunlight_opacity:
      value_template: >-
        {%- set sunpct = states('sensor.sunlight_pct') | float %}
        {%- set opacity = sunpct / 100 | float %}
        {{ opacity }}
 {% endraw %}
```

---
## Is it night

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    night_state:
      friendly_name: night state
      value_template: "{% if is_state('sun.sun', 'below_horizon') %}1{% else %}0{% endif %}"
{% endraw %}
```

---
## Co2 threshold values

Create three static value sensors with the threshold values: 800, 1200 and 1500.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    co2_value_800:
      friendly_name: "good"
      value_template: 800
      unit_of_measurement: 'ppm'
    co2_value_1200:
      friendly_name: "medium"
      value_template: 1200
      unit_of_measurement: 'ppm'
    co2_value_1500:
      friendly_name: "bad"
      value_template: 1500
      unit_of_measurement: 'ppm'
{% endraw %}
```

---
## Temperature static value

Create a static value sensor with the threshold value of 23 degrees Celsius.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    temp_value_23:
      friendly_name: "23"
      value_template: 23
      unit_of_measurement: '°C'
{% endraw %}
```

---
## Count the number of lights on

Count the number of lights with the status on.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    count_lights_on:
      friendly_name: "# lights on"
      unit_of_measurement: "on"
      value_template: "{{ states.light | selectattr('state', 'eq', 'on') | list | count }}"
{% endraw %}
```

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant tips and tricks](index)