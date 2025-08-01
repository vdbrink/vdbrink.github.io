---
title: "Home Assistant dashboard card: Mushroom"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, card, mushroom, minimalistic, icons]
image: /homeassistant/images_mushroom/mushroom_examples.png
---

# Home Assistant dashboard card: Mushroom

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to the **mushroom** cards which you can easily add to your own dashboards.

Mushroom <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f344.png" height="15px" /> is a card which can let you add a small widget on your dashboard.

<img src="images_mushroom/mushroom_examples.png" width="350px" alt="mushroom examples" /> 

Click on one of these icons below to go to the corresponding example code:

<a href="#co2-colored-icon-indicator-based-on-a-number"><img src="images_mushroom/mushroom_co2_ok.png" alt="mushroom chips" height="50px"></a>
<a href="#weather-alarm-state-colored-icon-indicator-based-on-a-value"><img src="images_mushroom/mushroom_weather_code.png" alt="mushroom chips" height="50px"></a>
<a href="#bigger-icon"><img src="images_mushroom/mushroom_bigger_icon.png" alt="mushroom chips" height="50px"></a>
<a href="#nice-weather-only-an-icon"><img src="images_mushroom/mushroom_nice_outside.png" alt="mushroom chips" height="50px"></a>
<a href="#temperature-custom-icon"><img src="images_mushroom/mushroom_feels_like.png" alt="mushroom chips" height="50px"></a>
<a href="#temperature-colored-icon-and-text"><img src="images_mushroom/mushroom_colored.png" alt="mushroom chips" height="50px"></a>
<a href="#person-status"><img src="images_mushroom/mushroom_home.png" alt="mushroom chips" height="50px"></a>
<a href="#persons-count-in-a-specific-zone"><img src="images_mushroom/mushroom_zone_count.png" alt="mushroom chips" height="50px"></a>
<a href="#door-open-custom-picture"><img src="images_mushroom/mushroom_door_open.png" alt="mushroom chips" height="50px"></a>

The git repository of the Mushroom card is https://github.com/piitaya/lovelace-mushroom

Install the Mushroom card via this button\
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=piitaya&repository=lovelace-mushroom&category=integration)

**Custom styling**

For some examples, some custom CSS styling is applied which isn't possible by default. 
You need the extra HACS integration `card_mod`. 
You can Install this integration via this button in your own HA instance\
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)


---
## Table of Contents
<!-- TOC -->
  * [Introduction](#introduction)
  * [Cards](#cards)
    * [Title card](#title-card)
      * [What to wear when you go outside](#what-to-wear-when-you-go-outside)
      * [Welcome text and weather forecast for today (Dutch)](#welcome-text-and-weather-forecast-for-today-dutch)
      * [Time and date with large font](#time-and-date-with-large-font)
    * [Chips card](#chips-card)
      * [CO2 colored icon indicator based on a number](#co2-colored-icon-indicator-based-on-a-number)
      * [Weather alarm state colored icon indicator based on a value](#weather-alarm-state-colored-icon-indicator-based-on-a-value)
      * [Bigger icon](#bigger-icon)
      * [Nice weather (only an icon)](#nice-weather-only-an-icon)
      * [Temperature (custom icon)](#temperature-custom-icon)
      * [Temperature (colored icon and text)](#temperature-colored-icon-and-text)
      * [Person status](#person-status)
      * [Persons count in a specific zone](#persons-count-in-a-specific-zone)
      * [Door open (custom picture)](#door-open-custom-picture)
  * [More examples](#more-examples)
<!-- TOC -->

---
## Introduction

The mushroom card has a whole set of different card types.
In my examples here, I only use two of them. If you want to know more about them all, check this page https://github.com/piitaya/lovelace-mushroom#cards

<img src="images_mushroom/mushroom_card_types.png" alt="mushroom card types" width="150px" />

---
## Cards

I show here some examples of the two cards, the Tile and Chip card.

### Title card

The title card shows data based on a template.

#### What to wear when you go outside

<img src="images_mushroom/mushroom_wear_outside.png" alt="mushroom title" width="400px">

Show what to wear for clothes when you go outside.
You can change it the way you like or extend it by adding rain expectations.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-title-card
title: >2
 Wear a {% if states('sensor.feels_like_temperature')|int <= 5 %}winter coat and gloves
{% elif states('sensor.feels_like_temperature')|int <= 12 %}jacket
{% elif states('sensor.feels_like_temperature')|int <= 16 %}sweater
{% elif states('sensor.feels_like_temperature')|int > 16 %}T-shirt
{% endif %} when you go outside. It feels as {{ states('sensor.feels_like_temperature')|int }} °C.
{% endraw %}
```

#### Welcome text and weather forecast for today (Dutch)
<img src="images_mushroom/mushroom_title.png" alt="mushroom title" width="400px">

Dutch welcome text based on the time of the day, and the name of the logged-in user.\
Then show also the minimal and maximum temperature for today and a textual description of the weather.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-title-card
title: >2
  {%- if now().hour < 12 -%}Goeiemorgen
  {%- elif now().hour < 18 -%}Goeiemiddag
  {%- else -%}Goeieavond{%- endif -%}, {{user}}. 
  Vandaag is het tussen de {{states('sensor.meteoserver_d0tmin')}} en de
  {{ states('sensor.meteoserver_d0tmax') }} °C  
  met {{ states('sensor.meteoserver_verw').lower() }}.
{% endraw %}
```

#### Time and date with large font

Larger font size to show the time and the full date.

<img src="images_date_time/time_date.png" alt="mushroom title date large font" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
type: vertical-stack
cards:
  - type: custom:mushroom-title-card
    title: '{{now().strftime(''%H:%M'')}}'
    alignment: center
    card_mod:
      style: |
        ha-card {
          --title-font-size: 90px !important;
        }
  - type: custom:mushroom-title-card
    title: {{states('sensor.date_only_formatted')}}
    alignment: center
    card_mod:
      style: |
        ha-card {
          --title-font-size: 30px !important;
        }
{% endraw %}
```

---

Are you looking for more template examples? Check also my dedicated page about [templates](homeassistant_templates#template-examples)!
* [Count the number of lights on](homeassistant_templates#count-the-number-of-lights-on)
* [Calculate temperature differences](homeassistant_templates#calculate-temperature-differences)
* [Minutes since mail is delivered](homeassistant_templates#minutes-since-mail-is-delivered)
* [What to wear outside](homeassistant_templates#what-to-wear-outside)
* [Expected rain amount](homeassistant_templates#expected-rain-amount)
* [Rain intensity](homeassistant_templates#rain-intensity)
* [DIY Sink leak status](homeassistant_templates#diy-sink-leak-status)
* [DIY Chair occupancy status](homeassistant_templates#diy-chair-occupancy-status)

---

### Chips card

Chips cards are a small icon that indicates a status.

#### CO2 colored icon indicator based on a number

<img src="images_mushroom/mushroom_co2_ok.png" alt="mushroom chips" width="50px" style="float:left;margin-right:10px">
 Show a green icon, without any text, if the level is less the 800 ppm, less than 1200 ppm yellow, less than 1500 ppm red.

<br>

[Create your own CO2 sensor (SCD40)](/esphome/co2_scd40)\
[Create your own CO2 sensor (SenseAir S8)](/esphome/co2_senseair_s8_sensor)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code 
type: custom:mushroom-chips-card
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

<img src="images_mushroom/mushroom_weather_code.png" alt="weather status mushroom chips" width="50px" style="float:left;margin-right:10px">

Show a green icon, when the value is `Code groen`, yellow for `Code geel` and red for `Code rood`.

The use entity here is based on the [KNMI weather alarm scraper](/homeassistant/homeassistant_dashboard_weather_nl#weather-alarm).\
You can decide what happens when you click on it, in this example you redirect to the website of the KNMI where you can see all the details about the current weather alarm status.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
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
{% endraw %}
```

#### Bigger icon

<img src="images_mushroom/mushroom_bigger_icon.png" alt="mushroom chips" width="100px" style="float:left">

&nbsp; Show the mushroom icon in a mush bigger size with the `card_mod` HACS integration, see <a href="https://github.com/thomasloven/lovelace-card-mod" target="_blank">https://github.com/thomasloven/lovelace-card-mod</a> for more info.

<br>

Install `card_mod` via this button\
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)


```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
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
         1C1C1C
      {% endif %}
    entity: sensor.knmi_weercode
    content: ""
    card_mod:
      style: |
        ha-card {
          --chip-icon-size: 80px;
          width: 100px !important;
          height: 100px !important
        }
{% endraw %}
```

#### Nice weather (only an icon)

<img src="images_mushroom/mushroom_nice_outside.png" alt="mushroom chips" width="50px" style="float:left">

&nbsp; Show (it only based on a condition) only a green icon, without any text, of a seat when the custom binary sensor `nice_outside` is `on` Otherwise this icon isn't visible.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
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

#### Temperature (custom icon)

<img src="images_mushroom/mushroom_feels_like.png" alt="mushroom chip" width="100px" style="float:left"> &nbsp; Show a (outdoor/room/pool/etc) temperature.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
chips:
  - type: entity
    entity: sensor.temperature_outside_feels_like
    icon: mdi:sun-thermometer
{% endraw %}
```

#### Temperature (colored icon and text)

<img src="images_mushroom/mushroom_colored.png" alt="mushroom chip" height="50px" style="float:left"> &nbsp; Set the icon and text color based on the entity value.
 
<br>

To override the colors, you need the extra HACS integration `card_mod`. 
You can Install this integration via this button in your own HA instance\
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
chips:
  - type: entity
    entity: sensor.tempest_temperature_feels_like_rounded
    icon: mdi:hand-back-right
    tap_action:
      action: navigate
      navigation_path: /lovelace-diverse/test2
    card_mod:
      style:
        .: |
          ha-card {
            --icon-primary-color:
            {% if is_state('sensor.tempest_temperature_feels_like_rounded', 'unavailable') %}
             #1C1C1C;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int <= 5 %}
             blue;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int <= 14 %}
             yellow;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int <= 18 %}
             orange;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int > 25 %}
              red;
            {% else %}
             green;
            {% endif %}
             --text-color:
            {% if is_state('sensor.tempest_temperature_feels_like_rounded', 'unavailable') %}
             gray;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int <= 5 %}
             blue;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int <= 14 %}
             yellow;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int <= 18 %}
             orange;
            {% elif states('sensor.tempest_temperature_feels_like_rounded')|int > 25 %}
              red;
            {% else %}
             green;
            {% endif %}
            }
{% endraw %}
```

#### Person status
<img src="images_mushroom/mushroom_home.png" alt="mushroom chip" width="100px" style="float:left"> &nbsp; Show this icon only when I'm at home.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
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

#### Persons count in a specific zone

<img src="images_mushroom/mushroom_zone_count.png" alt="mushroom chip" height="50px" style="float:left"> &nbsp; 
Show the number of persons which are currently this in the zone `home`.

<br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
chips:
  - type: entity
    entity: zone.home
{% endraw %}
```

#### Door open (custom picture)

<img src="images_mushroom/mushroom_door_open.png" alt="mushroom chip" width="100px" style="float:left"> &nbsp; Show a custom picture when the front door is open. Otherwise hide it.
<br/><br/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:mushroom-chips-card
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

## More examples
Looking for more examples? Check this link:
* https://smarthomescene.com/guides/mushroom-cards-part-2-room-layout-and-card-combinations/

---

[<< See also my other Home Assistant pages](index)
