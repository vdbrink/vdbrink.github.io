---
title: "Home Assistant dashboard custom element: Auto-entities"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, card, auto-entities, HACS]
image: /homeassistant/images_autoentities/temp_round_sorted_color-autoentities.png
---

# Home Assistant dashboard custom element: Auto-entities


<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to the custom element **auto-entities** which you can easily use on your own dashboards.

Auto-entities is a very powerful addon card that can let you make dynamic entity lists based on multiple filters, include and exclude entities and different type of sorting.

The git repository with also all options and some examples can be found at https://github.com/thomasloven/lovelace-auto-entities

Install it:

[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-auto-entities&category=integration)


---
## Table of Contents
<!-- TOC -->
  * [Temperatures (rounded, sorted and colored)](#temperatures-rounded-sorted-and-colored)
  * [Show lights ordered by state](#show-lights-ordered-by-state)
  * [Show only the lights which are 'on' at the moment](#show-only-the-lights-which-are-on-at-the-moment)
  * [Full moon (single condition)](#full-moon-single-condition)
  * [Only X days left (multiple conditions with AND)](#only-x-days-left-multiple-conditions-with-and)
  * [With attribute data](#with-attribute-data)
  * [Chores](#chores)
<!-- TOC -->

---

## Temperatures (rounded, sorted and colored)

Show all temperature sensors in order of their temperature from high to low. And show the rounded temperature to a real number and for temperature higher than ideal give them an orange or red color. Blue icons when the temperature is below 10 degrees.

<img src="images_autoentities/temp_round_sorted_color-autoentities.png" alt="Temperatures rounded, sorted and colored" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:auto-entities
card:
  type: entities
  show_header_toggle: false
  state_color: false
  title: Temperaturen aflopend
filter:
  include:
    - entity_id: sensor.temp*.temperature
      options:
        type: custom:template-entity-row
        state: |
          {{ states(config.entity)|round(0)}} °C
        style: |
          :host {
            --paper-item-icon-color:
             {% set level = states(config.entity)|round(0) %}
             {% if level >= 26 %} firebrick
             {% elif level >= 25 %} orange
             {% elif level < 10 %} blue
             {% else %} var(--primary-text-color)
             {% endif %} 
             ;
           }
show_empty: false
sort:
  method: state
  reverse: true
  numeric: true
{% endraw %}
```

---
## Show lights ordered by state
Show the lights which are currently `on` always on top.\
Hide also the unavailable ones.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:auto-entities
card:
  type: entities
  show_header_toggle: false
  state_color: false
filter:
  include:
    - entity_id: light.*
  exclude:
    - state: "unavailable"
sort:
  method: state
  reverse: true
{% endraw %}
```

---
## Show only the lights which are 'on' at the moment

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:auto-entities
show_empty: false
card:
  type: entities
filter:
  include:
    - domain: light
      state: "on"
      options:
        tap_action:
          action: toggle
{% endraw %}
```

---
## Full moon (single condition)

Show this only when the entity `sensor.moon` has the status `full_moon`.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:auto-entities
  card:
    type: entities
  filter:
    include:
      - entity_id: sensor.moon
        state: full_moon
  show_empty: false
{% endraw %}
```

---
## Only X days left (multiple conditions with AND)

For the paper pickup day, I only want this visible when there are only three days left.

Show only when the number of days is less than 4 AND more than -1.

[See here how to create a day countdown based on a date.](homeassistant_dashboard_date_time#days-count-down)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:auto-entities
  card:
    type: entities
  filter:
    include:
      - entity_id: sensor.paper_waste_pickup_countdown
        state 1: "< 4"
        state 2: "> -1"
{% endraw %}
```

---
## With attribute data

Show all room presence entities and as `secondary_info` an attribute value, in this case the `distance` attribute.

<img src="images_autoentities/with_attributes_autoentities.png" width="400px"  alt="auto-entities with attribute data"/>

````yaml
type: custom:auto-entities
card:
  type: entities
  state_color: true
  title: Tracker
filter:
  include:
    - domain: sensor
      entity_id: '*.room_presence'
      options:
        type: custom:multiple-entity-row
        secondary_info:
          attribute: distance
  exclude:
    - state: unknown
    - state: unavailable
sort:
  method: last-changed
  reverse: true
````

---
## Chores
I created a [separated page](homeassistant_dashboard_chores.md) about this subject where I use multiple auto entities lists to show which chores must be done and which are already done.

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)