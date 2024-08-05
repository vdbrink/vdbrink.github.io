---
title: "Home Assistant dashboard: Styling"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, styling]
---
# Home Assistant dashboard: Styling


<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard styling examples which you can easily add to your own dashboards.
<br/><br/><br/>

---
## Table of Contents
<!-- TOC -->
* [Changing icon color](#changing-icon-color)
* [Changing status color](#changing-status-color)
* [Changing background color](#changing-background-color)
<!-- TOC -->

---
## Changing icon color

You can change the color of an icon based on its value.

You need the extra HACS module [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod).
Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)

![Changing icon color](images_styling/colored_icon.png)
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: entities
entities:
  - entity: sensor.knmi_weercode
    tap_action:
      action: url
      url_path: https://www.knmi.nl/nederland-nu/weer/waarschuwingen/overijssel
    card_mod:
      style: |
        :host {
          --card-mod-icon-color:
          {% if is_state('sensor.knmi_weercode', 'Code groen') %}
           #008000;
          {% elif is_state('sensor.knmi_weercode', 'Code rood') %}
           #ff4500;
          {% elif is_state('sensor.knmi_weercode', 'Code geel') %}
           #ffd700;
          {% elif is_state('sensor.knmi_weercode', 'Code oranje') %}
           #ffa500;
          {% else %}
           #44739e
          {% endif %}
         }
  {% endraw %}
```

---
## Changing status color

You can change the color of the sensor status based on its value.

**Option 1**: Use the extra HACS module [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod) Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)


![Changing text color](images_styling/colored_status.png)
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: entities
entities:
  - entity: sensor.knmi_weercode
    tap_action:
      action: url
      url_path: https://www.knmi.nl/nederland-nu/weer/waarschuwingen/overijssel
    card_mod:
      style: |
        .text-content {
         color:
            {% if is_state('sensor.knmi_weercode', 'Code groen') %}
             #008000;
            {% elif is_state('sensor.knmi_weercode', 'Code rood') %}
             #ff4500;
            {% elif is_state('sensor.knmi_weercode', 'Code geel') %}
             #ffd700;
            {% elif is_state('sensor.knmi_weercode', 'Code oranje') %}
             #ffa500;
            {% else %}
             #44739e
            {% endif %}
        }
  {% endraw %}
```

**Option 2**: Use the HACS module [template-entity-row](homeassistant_dashboard_hacs#template-entity-row)

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
## Changing background color

You can change the color of the background based on its value.

You need the extra HACS module [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod). Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)


![Changing text color](images_styling/colored_background.png)
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: entities
entities:
  - entity: sensor.knmi_weercode
    tap_action:
      action: url
      url_path: https://www.knmi.nl/nederland-nu/weer/waarschuwingen/overijssel
    card_mod:
      style: |
        .text-content {
         color:
            {% if is_state('sensor.knmi_weercode', 'Code groen') %}
             #008000;
            {% elif is_state('sensor.knmi_weercode', 'Code rood') %}
             #ff4500;
            {% elif is_state('sensor.knmi_weercode', 'Code geel') %}
             #ffd700;
            {% elif is_state('sensor.knmi_weercode', 'Code oranje') %}
             #ffa500;
            {% else %}
             #44739e;
            {% endif %}
        }
  {% endraw %}
```

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)