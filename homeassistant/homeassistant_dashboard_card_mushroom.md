---
title: "Home Assistant dashboard card: Mushroom"
category: Home Assistant
tags: Home Assistant, dashboard, lovelace, card, mushroom, minimalistic, icons
---
# Home Assistant dashboard card: Mushroom

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to the **mushroom** cards which you can easily add to your own dashboards.

Mushroom <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f344.png" height="15px" /> is a card which can let you add small widget on your dashboard.

<img src="images_mushroom/mushroom_examples.png" width="350px" /> 

The git repository is https://github.com/piitaya/lovelace-mushroom

---
## Table of Contents
<!-- TOC -->
  * [Intro](#intro)
  * [Cards](#cards)
    * [Title card](#title-card)
      * [Welcome text and weather forecast for today](#welcome-text-and-weather-forecast-for-today)
    * [Chips card](#chips-card)
      * [Co2 colored icon indicator based on a number](#co2-colored-icon-indicator-based-on-a-number)
      * [Weather alarm state colored icon indicator based on a value](#weather-alarm-state-colored-icon-indicator-based-on-a-value)
      * [Nice weather (only an icon)](#nice-weather-only-an-icon)
      * [Outside temperature (custom icon)](#outside-temperature-custom-icon)
      * [Person status](#person-status)
      * [Door open (custom picture)](#door-open-custom-picture)
      * [Today's gas consumption](#todays-gas-consumption)
      * [Today's power consumption](#todays-power-consumption)
  * [More examples](#more-examples)
<!-- TOC -->

---
## Intro

The mushroom card has a whole set of different card types.
In my examples here I only use two of them. If you want to know more about them all check this page https://github.com/piitaya/lovelace-mushroom#cards

<img src="images_mushroom/mushroom_card_types.png" alt="mushroom card types" width="150px" />

---
## Cards

I highlight here two cards.

### Title card

The title card show data based on a template and has no background.

#### Welcome text and weather forecast for today
<img src="images_mushroom/mushroom_title.png" alt="mushroom title" width="400px">

Welcome text based on the time of the day and the name of the logged in user.\
Show also the minimal and maximum temperature for today and a textual description of the weather.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-title-card
  title: > 2
    {%- if now().hour < 12 -%}Goeiemorgen
    {%- elif now().hour < 18 -%}Goeiemiddag
    {%- else -%}Goeieavond{%- endif -%}, {{user}}. 
    Vandaag is het tussen de {{states.sensor.meteoserver_d0tmin.state}} en de
    {{ states.sensor.meteoserver_d0tmax.state }} °C  
    met {{ states.sensor.meteoserver_verw.state.lower() }}.
{% endraw %}
```

---

### Chips card

Chips cards are small icon which indicate a status.\
In my example I only show them, with a condition, when they are relative. 

#### Co2 colored icon indicator based on a number

<img src="images_mushroom/mushroom_co2_ok.png" alt="mushroom chips" width="50px" style="float:left;margin-right:10px">
 Show a green icon, without any text, if the level is less the 800 ppm, less than 1200 ppm yellow, less than 1500 ppm red.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-chips-card
  chips:
    - chip:
      type: template
      icon: mdi:molecule-co2
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
      entity: sensor.senseair_co2_value
      content: ''
{% endraw %}
```

#### Weather alarm state colored icon indicator based on a value


Show a green icon, when the value is `Code groen`, yellow for `Code geel` and red for `Code rood`.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-chips-card
  chips:
    - chip:
      type: template
      icon: mdi:weather-lightning-rainy
      icon_color: |-
        {% if is_state('sensor.knmi_weercode', 'Code groen') %}
           green
        {% elif is_state('sensor.knmi_weercode', 'Code geel') %}
           yellow
        {% elif is_state('sensor.knmi_weercode', 'Code rood') %}
           red
        {% else %}
           gray
        {% endif %}
      entity: sensor.knmi_weercode
      content: ''
      tap_action:
        action: url
        url_path: https://www.knmi.nl/nederland-nu/weer/waarschuwingen/overijssel
      card_mod: null
{% endraw %}
```

#### Nice weather (only an icon)

<img src="images_mushroom/mushroom_nice_outside.png" alt="mushroom chips" width="50px" style="float:left">
 Show only a green icon, without any text, of a seat when the custom binary sensor `nice_outside` is `on` Otherwise this icon is not visible.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-chips-card
  chips:
    - type: conditional
      conditions:
        - entity: binary_sensor.nice_outside
          state: 'on'
      chip:
        type: template
        icon_color: green
        icon: mdi:seat
        entity: binary_sensor.nice_outside
        content: ''
{% endraw %}
```

#### Outside temperature (custom icon)

<img src="images_mushroom/mushroom_feels_like.png" alt="mushroom chip" width="100px" style="float:left">Show the outside temperature.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-chips-card
  chips:
    - type: entity
      entity: sensor.temperature_outside_feels_like
      icon: mdi:sun-thermometer
{% endraw %}
```

#### Person status
<img src="images_mushroom/mushroom_home.png" alt="mushroom chip" width="100px" style="float:left">Show if your at home.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-chips-card
  chips:
  - type: conditional
    conditions:
      - entity: person.vdbrink
        state: home
    chip:
      type: entity
      entity: person.vdbrink
      name: Me
      use_entity_picture: true
      hide_state: true
      hide_name: false
{% endraw %}
```

#### Door open (custom picture)

<img src="images_mushroom/mushroom_door_open.png" alt="mushroom chip" width="100px" style="float:left">Show a custom picture when the front door is open.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-chips-card
  chips:
    - type: conditional
      conditions:
        - entity: binary_sensor.contact_front_door_contact
          state: 'on'
      chip:
        type: template
        picture: https://img.icons8.com/plasticine/344/door-opened.png
        content: Open
{% endraw %}
```
---

#### Today's gas consumption

<img src="images_mushroom/mushroom_gas_consumption.png" alt="mushroom gas consumption" width="80px" style="float:left">Show today's gas consumption.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- chip: null
  type: template
  entity: sensor.dsmr_day_consumption_gas
  content: "{{ (states ('sensor.dsmr_day_consumption_gas') | float * 10) | round(1) }}"
  icon: mdi:fire
  tap_action:
  action: navigate
  navigation_path: /energy
{% endraw %}
```
---

#### Today's power consumption

<img src="images_mushroom/mushroom_power_consumption.png" alt="mushroom power consumption" width="80px" style="float:left">Show today's power consumption.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- chip: null
  type: template
  entity: sensor.dsmr_day_consumption_electricity_merged
  content: '{{ states (''sensor.dsmr_day_consumption_electricity_merged'') | round(1) }}'
  icon: mdi:power-plug
  tap_action:
  action: navigate
  navigation_path: /energy
  {% endraw %}
```
---

## More examples
Looking for more examples check this link:
* https://smarthomescene.com/guides/mushroom-cards-part-2-room-layout-and-card-combinations/

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)



