---
title: "Home Assistant dashboard: Useful HACS custom elements"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, hacs]
image: /homeassistant/images/home_assistant_logo.png
---
# Home Assistant dashboard: Useful HACS custom elements

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard custom elements which are default not available in Home Assistant, but which you can add to your dashboard.
<br/><br/>

---

## Table of Contents
<!-- TOC -->
  * [Atomic Calendar Revive](#atomic-calendar-revive)
  * [auto-entities](#auto-entities)
  * [card-mod 3 (lovelace-card-mod)](#card-mod-3-lovelace-card-mod)
  * [slider-entity-row](#slider-entity-row)
  * [Lovelace animated weather card](#lovelace-animated-weather-card)
  * [multiple-entity-row](#multiple-entity-row)
  * [Neerslag App](#neerslag-app)
  * [Swipe Navigation](#swipe-navigation)
  * [template-entity-row](#template-entity-row)
<!-- TOC -->

---
## Atomic Calendar Revive
A Google calendar overview.

<img src="images_hacs/hacs_atomic-calendar-revive.png" alt="Atomic Calendar Revive" width="400px">

Repo: https://github.com/totaldebug/atomic-calendar-revive#about-the-project

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=totaldebug&repository=atomic-calendar-revive&category=integration)

---

## auto-entities

Dynamic show entities base on a variance of sorting and filtering.

Example: Sorted on temperature

<img src="images_autoentities/temp_round_sorted_color-autoentities.png" alt="Temperatures rounded, sorted and colored" width="400px">

Repo: https://github.com/thomasloven/lovelace-auto-entities

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-auto-entities&category=integration)

I have a [dedicate page](homeassistant_dashboard_card_auto-entities) with examples and a dashboard with [chores](homeassistant_dashboard_chores) based on this custom element.

---

## card-mod 3 (lovelace-card-mod)

Add custom CSS styling to your dashboard.

Example: Colored icon

<img src="images_styling/colored_icon.png" alt="Colored icon" width="400px">

I have a [styling page](homeassistant_dashboard_styling) with multiple examples based on this custom element.

Repo: https://github.com/thomasloven/lovelace-card-mod

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)


---

## slider-entity-row

Add a slider for brightness, volume, cover position, speed, number, etc.

![slider-entity-row](images_hacs/hacs_slider-entity-row.png)
Repo: https://github.com/thomasloven/lovelace-slider-entity-row

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-slider-entity-row&category=integration)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:slider-entity-row
entity: light.group_light1
toggle: true
{% endraw %}
```

---

## Lovelace animated weather card

Current weather and predictions for the coming days.

![Lovelace animated weather card](https://raw.githubusercontent.com/bramkragten/custom-ui/master/weather-card/weather-card.gif)

Repo: https://github.com/bramkragten/weather-card

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=bramkragten&repository=weather-card&category=integration)

---

## multiple-entity-row

Place multiple entities compact together on a single row.

![multiple-entity-row](https://raw.githubusercontent.com/benct/lovelace-multiple-entity-row/master/example.png)

Repo: https://github.com/benct/lovelace-multiple-entity-row

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=benct&repository=lovelace-multiple-entity-row&category=integration)

---

## Neerslag App

Show expected rain from the possible sources Buienalarm and Buienradar.

![Neerslag App](https://github.com/aex351/home-assistant-neerslag-app/raw/main/documentation/example.png)

Repo: https://github.com/aex351/home-assistant-neerslag-app

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=aex351&repository=home-assistant-neerslag-app&category=integration)

---

## Swipe Navigation

Swipe to left/right to switch to the side lovelace dashboard on your mobile device.

Repo: https://github.com/zanna-37/hass-swipe-navigation

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=zanna-37&repository=hass-swipe-navigation&category=integration)

---

## template-entity-row

Customize a single row for an entities.

<img src="images_hacs/hacs_template-entity-row.png" alt="template-entity-row" width="400px">

Repo: https://github.com/thomasloven/lovelace-template-entity-row

Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-template-entity-row&category=integration)


```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: entities
entities:
  - entity: sensor.temp1_temperature
    type: custom:template-entity-row
    state: |
      {{ states(config.entity)|round(0)}} °C
    style: |
      :host {
        --paper-item-icon-color:
         {% set level = states(config.entity)|round(0) %}
         {% if level >= 30 %} firebrick
         {% elif level >= 25 %} orange
         {% elif level < 10 %} blue
         {% else %} var(--primary-text-color)
         {% endif %} 
         ;
       }
       .state {
         color: 
         {% set level = states(config.entity)|round(0) %}
         {% if level >= 30 %} firebrick
         {% elif level >= 25 %} orange
         {% elif level < 10 %} blue
         {% else %} var(--primary-text-color)
         {% endif %} 
       }

{% endraw %}
```

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant tips and tricks](index)

[Custom element: Auto-entities >>](homeassistant_dashboard_card_auto-entities)

[Dashboard card: Mushroom >>](homeassistant_dashboard_card_mushroom)