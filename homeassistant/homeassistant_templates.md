---
title: "Home Assistant dashboard: Templates"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, templates]
---

# Home Assistant dashboard: Templates

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find some Home Assistant template examples.\
With templates you can create new custom sensors based on other sensor values to use on the dashboard or in automations.
<br>

---
## Table of Contents
<!-- TOC -->
  * [Count the number of lights on](#count-the-number-of-lights-on)
  * [Floor activity](#floor-activity)
  * [Day of the week translation](#day-of-the-week-translation)
  * [Trash bin days countdown](#trash-bin-days-countdown)
  * [Minutes since mail is delivered](#minutes-since-mail-is-delivered)
  * [What to wear outside](#what-to-wear-outside)
  * [Calculate daylight brightness percentage](#calculate-daylight-brightness-percentage)
  * [Daylight brightness to opacity](#daylight-brightness-to-opacity)
  * [Is it night](#is-it-night)
  * [Expected rain amount](#expected-rain-amount)
  * [Rain intensity](#rain-intensity)
  * [Co2 threshold values](#co2-threshold-values)
  * [Temperature static value](#temperature-static-value)
  * [Overlay based on lux](#overlay-based-on-lux)
  * [Moon image based on state](#moon-image-based-on-state)
  * [DIY Sink leak status](#diy-sink-leak-status)
  * [DIY Chair occupancy status](#diy-chair-occupancy-status)
<!-- TOC -->

---
## Count the number of lights on

Count the number of lights with the status `on`.

<img src="images_templates/nr_lights_on.png" alt="Number of lights on" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    count_lights_on:
      friendly_name: "# lights on"
      icon_template: mdi:ceiling-light
      unit_of_measurement: "on"
      value_template: "{{ states.light | selectattr('state', 'eq', 'on') | list | count }}"  
{% endraw %}
```

---
## Floor activity

Check if there is any activity on a specific floor or section based on multiple sensors.\
One minute after the last trigger the state goes back to `off`.

<img src="images_templates/floor_activity.png" alt="floor activity" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  activity_downstairs:
    friendly_name: Activity downstairs
    icon_template: mdi:radar
    value_template: >
      {{ is_state("binary_sensor.motion1_occupancy", "on")
        or is_state("binary_sensor.motion2_occupancy", "on") 
        or is_state("binary_sensor.motion3_occupancy", "on") 
      }}
    delay_off: "00:01:00"
{% endraw %}
```

---
## Day of the week translation

By default, the day of the week is in English.\
With this template, you can translate it to a non-English language (like here to Dutch).

<img src="images_templates/day_of_the_week.png" alt="Day of the week translated" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    dayoftheweek:
      value_template: >
        {{ ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"][now().weekday()] }}
{% endraw %}
```

---
## Trash bin days countdown

Count the days before the paper bin will be picked up.

<img src="images_templates/paper_waste_countdown.png" alt="days countdown" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    paper_waste_pickup_countdown:
      friendly_name: "paper pick up"
      icon_template: mdi:delete-empty
      value_template: >-
        {% set datex = state_attr('sensor.cyclus_papier','Sort_date') | string %}
        {{ ((as_timestamp(strptime(datex, '%Y%m%d')) - as_timestamp(now())) / (60 * 60 * 24)) | round(0, 'ceil')  }}
      unit_of_measurement: "days"
{% endraw %}
```

The sensor `sensor.cyclus_papier` has an attribute `Sort_date` which holds the date for the bin pickup day in the format "YYYYMMDD".\
Based on today's date the diff in days is calculated.\
(The sensor value is not always accurate, that's why I use the attribute value.)

<img src="images_templates/attribute_date_countdown.png" alt="date attribute" width="400px">

---
## Minutes since mail is delivered

Minutes since the snail mail is delivered. 

<img src="images_templates/mail_delivered_in_minutes.png" alt="minutes since mail is delivered" width="400px" />

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    mail_delivered_minutes_ago:
      friendly_name: "mail delivered"
      icon_template: mdi:mailbox
      value_template: >-
        {% set now_timestamp = as_timestamp(now()) %}
        {% set mailbox_timestamp = as_timestamp(states.binary_sensor.contact2_contact.last_changed) %}
        {% set minutes = ((now_timestamp - mailbox_timestamp) / 60) | round(0, 'ceil')  %}
        {{ minutes }}
      unit_of_measurement: "minutes"
{% endraw %}
```

---
## What to wear outside

Based on the outside temperature defined what to wear when you go outside.

<img src="images_templates/what_to_wear.png" alt="What to wear outside" width="100px" />

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
        {% elif states.sensor.tempest_temperature_feels_like_rounded.state|int <= 18 %} thin jacket
        {% elif states.sensor.tempest_temperature_feels_like_rounded.state|int > 18 %} T-shirt{% endif %}
{% endraw %}
```
This is the code for the mushroom card, as shown on the image, based on this template.
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# dashboard card code
type: custom:mushroom-chips-card
chips:
  - type: entity
    entity: sensor.what_to_wear_outside
    icon: mdi:tshirt-v
{% endraw %}
```
---
## Calculate daylight brightness percentage

Based on the sun sensor elevation and the cloud coverage, calculate the daylight brightness percentage.
Which can be used to control the lights, the window blinds or on a floor map as overlay image.

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

Daylight brightness, from the previous template, converted to opacity for CSS to use as overlay on a floor map.

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

Boolean value if it is night.

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
## Expected rain amount

Expected rain amount for the coming hours based on the Dutch Buienradar data.

<img src="images_templates/expected_rain_amount.png" alt="Expected rain amount" width="450px" />

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
      unit_of_measurement: 'mm'
{% endraw %}
```

---
## Rain intensity

Rain intensity for the coming hours based on the Dutch Buienradar data.

<img src="images_templates/rain_intensity.png" alt="Rain intensity" width="450px" />

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    buienalarm_rain_level:
      friendly_name: "rain intensity"
      icon_template: mdi:weather-pouring
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
## Co2 threshold values

Create three static value sensors with the threshold values: 800, 1200 and 1500.

<img src="images_templates/base_values_sensors.jpg" alt="C02 base values" width="450px" />

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
Add this to a graph to get this result:

<img src="images_templates/23_degrees_temp_static_sensor.png" alt="static value" width="450px" />

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

## Overlay based on lux

When you have a floor plan and want to show a dark overlay when the lux is low, you can create a new sensor based on the lux value.

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
## Moon image based on state

The default moon component in Home Assistant gives the moon phase as a text value. 
With an image corresponding to each phase, you can show the moon phase as an image.

<img src="images_templates/moon_phase.png" alt="moon phase" width="100px" />

[Download here the moon images.](https://community.home-assistant.io/t/moon-platform-with-moon-phases-pictures/86646/7)

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
## DIY Sink leak status

I created a custom [leak sensor](/zigbee/zigbee_water_leak_sensor) based on a contact sensor.
The used sensor stores the value if it detects a leak in an attribute value `contact`. 
This attribute is now used to create a boolean value.

<img src="images_templates/leak_sink.png" alt="sink leak" width="450px" />

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    sink_leak:
      friendly_name: "leak sink"
      icon_template: mdi:water
      value_template: >-
        {{ state_attr('binary_sensor.water_contact', 'contact') | lower }}
{% endraw %}
```

---

## DIY Chair occupancy status

I created a custom [chair occupancy sensor](/zigbee/zigbee_chair_occupancy_sensor) based on a contact sensor.
If you sit on it the contact sensor return `off`.\
The normal value of the contact sensor needs to be inverted.\
That's what happened here.

<img src="../zigbee/images_chair/pillow_with_sensor.jpg" width="450px" />

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    chair:
      friendly_name: "chair"
      icon_template: mdi:chair-rolling
      value_template: >-
        {% if is_state('binary_sensor.contact1_contact', 'off') %}
           on
        {% else %}
           off
        {% endif %}
{% endraw %}
```

---

That's it; I hope you can use some of these templates in your own setup.

Let me know which cool templates you use!

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant tips and tricks](index)