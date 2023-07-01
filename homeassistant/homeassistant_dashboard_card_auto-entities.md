---
title: "Home Assistant dashboard custom element: Auto-entities"
category: Home Assistant
tags: Home Assistant, dashboard, lovelace, card, auto-entities, HACS
---
# Home Assistant dashboard custom element: Auto-entities

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to the add-on **auto-entities** which you can easily use in your own dashboards.

Auto-entities is a very powerful addon card which can let you make dynamic entity lists based on multiple filters, include and exclude entities and different type of sorting.

The git repository with also all options and some examples can be found at https://github.com/thomasloven/lovelace-auto-entities

---
## Table of Contents
<!-- TOC -->
* [Temperatures (rounded, sorted and colored)](#temperatures-rounded-sorted-and-colored)
* [Full moon (single condition)](#full-moon-single-condition)
* [Only X days left (multiple conditions)](#only-x-days-left-multiple-conditions)
* [Chores](#chores)
<!-- TOC -->

---

## Temperatures (rounded, sorted and colored)

Show all temperature sensors in order of their temperature from high to low. And show the rounded temperature to a real number and for temperature higher than ideal give them an orange or red color. Blue icons when the temperature is below 10 degrees.

<img src="images_autoentities/temp_round_sorted_color-autoentities.png" alt="Temperatures rounded, sorted and colored" width="400">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
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
## Full moon (single condition)

Show this only when the entity `sensor.moon` has the status `full_moon`.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
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
## Only X days left (multiple conditions)

For the paper pickup day I only want this visible when there are only three days left.

Show only when the amount of days is less than 4 AND more than -1.

[See here how to create a days countdown based on a date.](homeassistant_dashboard_date_time#days-count-down)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
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
## Chores
I created a [separated page](homeassistant_dashboard_chores.md) about this subject where I use multiple auto entities lists to show which chores must be done and which are already done.

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)