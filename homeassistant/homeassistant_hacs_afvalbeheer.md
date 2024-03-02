---
title: "Home Assistant dashboard custom element: Auto-entities"
category: Home Assistant
tags: Home Assistant, dashboard, lovelace, card, afvalbeheer, HACS, 
---
# Home Assistant HACS Afvalbeheer

<img style="float: right;" src="images_afvalbeheer/kliko.jpg" height="250px" alt="Kliko">

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to the custom integration **Afvalbeheer** which you can easily use on your own dashboards.

Afvalbeheer is a Dutch and Belgium integration for multiple company who pickup trash. This integration add sensors to HA to show when specific "kliko" (or for people in the east of NL "otto") get picked up.  

Check the git repository to find all the options and if you can use it in your city at https://github.com/pippyn/Home-Assistant-Sensor-Afvalbeheer/

---
## Table of Contents
<!-- TOC -->
* [Intro](#intro)
* [Installation](#installation)
* [Default presentation](#default-presentation)
* [Days count down](#days-count-down)
* [Sorted by days](#sorted-by-days)
* [Show conditional, only for tomorrow and today](#show-conditional-only-for-tomorrow-and-today)
* [Mushroom element](#mushroom-element)
<!-- TOC -->

---

## Intro

---

## Installation

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
# configuration.yaml
afvalbeheer:
    wastecollector: XXX     # Check the site https://github.com/pippyn/Home-Assistant-Sensor-Afvalbeheer/?tab=readme-ov-file#wastecollector
    resources:
        - restafval
        - gft
        - papier
        - pmd
    postcode: 1234AB
    streetnumber: 1
    upcomingsensor: 0        # (optional)
    dateformat: '%d-%m-%Y'   # (optional)
    dateonly: 1              # (optional)
    name: ""                 # (optional)
    nameprefix: 1            # (optional)
    builtinicons: 0          # (optional)
    dutch: 1                 # (optional)
{% endraw %}
```

---
## Default presentation

When this installation is complete you get 4+ entities which you can add to your dashboard.

This is the default presentation.

<img src="images_afvalbeheer/default.png" alt="default afvalbeheer presentation" width="400px">

The downside is that it isn't always ordered by date, you always see the icon and not see the amounts of days. Which I like more that a full date format.

This dashboard code belongs to the above presentation screenshot.
In my case my provider is `cyclus` that's why I have that in my sensor name. Yours can be different.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard Entities card code
type: entities
entities:
  - entity: sensor.cyclus_pmd
  - entity: sensor.cyclus_restafval
  - entity: sensor.cyclus_papier
  - entity: sensor.cyclus_gft
show_header_toggle: false
{% endraw %}
```

---
## Days count down

I wanted my presentation like this:

<img src="images_afvalbeheer/days_countdown.png" alt="countdown" width="400px">

No different icons, no colors, order by date and show the days left.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
sensor:
    - platform: template
      sensors:
        paper_waste_pickup_countdown:
          friendly_name: "papier ophalen"
          value_template: >-
            {% set datex = state_attr('sensor.cyclus_papier','Sort_date') | string %}
            {{ ((as_timestamp(strptime(datex, '%Y%m%d')) - as_timestamp(now())) / (60 * 60 * 24)) | round(0, 'ceil')  }}
          icon_template: mdi:delete-empty
          unit_of_measurement: "dagen"
    
    - platform: template
      sensors:
        gft_waste_pickup_countdown:
          friendly_name: "GFT ophalen"
          value_template: >-
            {% set datex = state_attr('sensor.cyclus_gft','Sort_date') | string %}
            {{ ((as_timestamp(strptime(datex, '%Y%m%d')) - as_timestamp(now())) / (60 * 60 * 24)) | round(0, 'ceil')  }}
          icon_template: mdi:delete-empty
          unit_of_measurement: "dagen"
    
    - platform: template
      sensors:
        rest_waste_pickup_countdown:
          friendly_name: "restafval ophalen"
          value_template: >-
            {% set datex = state_attr('sensor.cyclus_restafval','Sort_date') | string %}
            {{ ((as_timestamp(strptime(datex, '%Y%m%d')) - as_timestamp(now())) / (60 * 60 * 24)) | round(0, 'ceil')  }}
          icon_template: mdi:delete-empty
          unit_of_measurement: "dagen"
    
    - platform: template
      sensors:
        plastic_waste_pickup_countdown:
          friendly_name: "plastic ophalen"
          value_template: >-
            {% set datex = state_attr('sensor.cyclus_pmd','Sort_date') | string %}
            {{ ((as_timestamp(strptime(datex, '%Y%m%d')) - as_timestamp(now())) / (60 * 60 * 24)) | round(0, 'ceil')  }}
          icon_template: mdi:delete-empty
          unit_of_measurement: "dagen"
{% endraw %}
```

---
## Sorted by days


<img src="images_afvalbeheer/days_countdown.png" alt="Days countdown" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:auto-entities
    card:
      type: entities
      show_header_toggle: false
      state_color: false
    filter:
      include:
        - entity_id: sensor.*waste_pickup_countdown
          state 1: '> -1'
          state 2: '> -1'
    show_empty: false
    sort:
      method: state
      numeric: true
{% endraw %}
```

## Show conditional, only for tomorrow and today

<img src="images_afvalbeheer/conditional_two_days.png" alt="" width="400px">

Show the 

This dashboard use the power of the custom element [Auto-entities](homeassistant_dashboard_card_auto-entities)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:auto-entities
  card:
    type: entities
  filter:
    include:
      - entity_id: sensor.*_waste_pickup_countdown
        state 1: "< 2"
        state 2: "> -1"
{% endraw %}
```

## Mushroom element

All different colors for each type of trash.

<img src="images_afvalbeheer/afvalbeheer_mushroom.png" alt="Mushroom conditional and colored" width="200px">

This dashboard use the power of the custom element [Mushroom](homeassistant_dashboard_card_mushroom).

If tomorrow some waste outside show the corresponding color trashcan, otherwise there is no trashcan visible in the circle. 

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
  - chip: null
    type: template
    entity: sensor.cyclus_gft
    icon: mdi:trash-can-outline
    content: ''
    card_mod:
      style: |
        :host {
          --card-mod-icon-color: 
          {% if states('sensor.gft_waste_pickup_countdown')|int == 1 %}
           green
          {% elif states('sensor.paper_waste_pickup_countdown')|int == 1 %}
           blue
          {% elif states('sensor.plastic_waste_pickup_countdown')|int == 1 %}
           orange
          {% elif states('sensor.rest_waste_pickup_countdown')|int == 1 %}
           brown
          {% else %}
           #1C1C1C
          {% endif %}
        }
{% endraw %}
```


---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)