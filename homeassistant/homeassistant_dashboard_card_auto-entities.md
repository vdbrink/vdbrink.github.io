---
title: "Home Assistant dashboard card: Auto-entities"
category: Home Assistant
tags: Home Assistant, dashboard, lovelace, card, auto-entities
---
# Home Assistant dashboard card: Auto-entities

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to **auto-entities** which you can easily add to your own dashboards.

Auto-entities is a very powerful addon card which can let you make dynamic entity lists based on filters.

The git repo: https://github.com/thomasloven/lovelace-auto-entities

---
## Table of Contents
<!-- TOC -->
* [Temperatures rounded, sorted and colored](#temperatures-rounded-sorted-and-colored)
<!-- TOC -->

---

## Temperatures rounded, sorted and colored

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
             {% set level = states(config.entity)|float %}
             {% if level > 26 %} firebrick
             {% elif level > 25 %} orange
             {% else %} white
             {% endif %}
             ;
           }
show_empty: false
sort:
  method: state
  reverse: true
{% endraw %}
```
---
[<< Back to the Home Assistant index page](index)