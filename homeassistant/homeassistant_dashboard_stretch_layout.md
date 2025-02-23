---
title: "Home Assistant dashboard: Stretch Display Layout"
description: "A Home Assistant dashboard for a stretched display"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, layout, stretch, display, long, large]
#image: /homeassistant/images_layout_stretch/ha_layout_stretch_banner.png
---

# Home Assistant dashboard:<br>Stretch Display Layout

<br>

<a href="index"><img src="images/home_assistant_logo.png" style="margin-left:20px;float: right" alt="Home Assistant logo" height="100px"></a>
I bought a long-stretched small 8.8" display to show directly my room and important house status on it.

The default Home Assistant dashboard elements show the text not big enough if you look at it from a distance. 
That's why I created **two custom themes** (to test which looks better) for more contrast and less element borders.
I also modified several dashboard elements to show the text bigger.

On this page, I describe how I created the different elements with the corresponding YAML code. 
You can copy-paste is you want to reuse it for yourself.

This is how the dashboard looks like on the display:

<a href="/projects/images_stretch_display/office_display_closeup.jpg">
<img src="/projects/images_stretch_display/office_display_closeup.jpg" alt="stretch display close-up" height="400px" />
</a>

<br>
<br>

Check [here for the hardware section](/projects/stretch_display) where I describe how I setup the hardware.

---
## Table of Contents
<!-- TOC -->
  * [Introduction](#introduction)
  * [Hide top toolbar](#hide-top-toolbar)
  * [Themes](#themes)
  * [Dashboard elements](#dashboard-elements)
    * [Time and date](#time-and-date)
    * [Alerts](#alerts)
    * [News](#news)
    * [Conditional elements](#conditional-elements)
    * [Textual weather](#textual-weather)
    * [Gauge](#gauge)
    * [Graph 1](#graph-1)
    * [Graph 2](#graph-2)
    * [Flexible Horseshoe card](#flexible-horseshoe-card)
<!-- TOC -->

---

## Introduction

 <img src="images_layout_stretch/office_display_charamel.jpg" alt="stretched charamel theme" height="600px" style="float:right;margin-left:15px;"/> 
I wanted a display to show the current room healthy information and other live data around the house. 

Now I show the next data on it: 
* Room temperature (+graph), CO2 (+graph), humidity, room heater status, chair occupancy time,
* Time & date, news headline.
* Outside temperature, rain is expected.
* I also have many **Conditional elements**. 
  By default, not visible only when they have a noticeable state they will be visible.
  * Camera stream if someone is at the front door.
  * CO2 value too high.
  * Temperature is too high.
  * Front-/back-/office door opened.
  * Heater is on.
  * Rain is expected.

<!--
And a display to show the current and expected weather conditions.

With one look at the screen, I wanted to directly see the state. 
By default, the font size of the default theme is too small, the contrast is too low, and the card borders are too distracting.
-->
I created and tested two different themes to see which one works best.

---

## Hide top toolbar

We want to hide this top menu by default.

<img src="images_layout_stretch/hide_top_menu.png" alt="hide top menu" width="400px" />

<br>

Install the **kiosk-mode** integration via this button\
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=NemesisRE&repository=kiosk-mode&category=integration)

To set these properties, select the three dots in the top right and select `Raw configuration editor`.

<img src="images_layout_stretch/raw_config_editor.png" alt="Raw configuration editor" height="200px" /> 
<img src="images_layout_stretch/kiosk_mode.png" alt="kiosk mode" height="200px" />

See all possible configuration parameters at https://github.com/NemesisRE/kiosk-mode

Only define `hide_header` is enough.

```yaml
  {% raw %}
  # Sourcecode by vdbrink.github.io
  # Raw configuration editor
kiosk_mode:
  hide_header: true
views:
  ...
  {% endraw %}
```

To show the top toolbar again, add `?disable_km=` to the url.

---

## Custom themes

I created two custom themes for this project to see which has the best contrast and best looks.

* Stretch Charamel: This theme uses black and charamel color as contrast colors.
* Stretch Dark: This theme uses all black and other contrast colors with the same card background as normal background. 
  Only subtle lines to split elements from each other.

<br>

| Stretch Charamel                                                                                                  | Stretch Dark                                                                                              |
|-------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| <br><img src="images_layout_stretch/office_display_charamel.jpg" alt="stretched charamel theme" height="600px" /> | <br><img src="images_layout_stretch/office_display_dark.jpg" alt="stretched dark theme" height="600px" /> |
| [download stretch_charamel.yaml](themes/stretch_charamel.yaml)                                                    | [download stretch_dark.yaml](themes/stretch_dark.yaml)                                                    |

### Install new theme

### Reload theme after update

---
## Dashboard elements

Here I describe how I realize the different element.
I add some custom CSS to the dashboard elements if I couldn't get it correct via the theme.

### Time and date

I want the time and date as large font size visible.

<img src="images_layout_stretch/clock.png" alt="Clock and date" width="400px" />

For the current time, it doesn't use a sensor just the current time.
With some extra CSS is the size bigger now.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
- type: custom:mushroom-title-card
  title: '{{now().strftime(''%H:%M'')}}'
  alignment: center
  card_mod:
    style: |
      ha-card {
        --title-font-size: 90px !important;
      }
 {% endraw %}
```

For the current date, I use a [custom sensor](homeassistant_dashboard_date_time#inline-time-and-date-dutch-format) with translated (to Dutch) spelled out day and month as text.
With some extra CSS is the size bigger now.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
- type: custom:mushroom-title-card
  title: '{{states.sensor.date_only_formatted.state}}'
  alignment: center
  card_mod:
    style: |
      ha-card {
        --title-font-size: 30px !important;
      }
{% endraw %}
```

---

### Room temperature 

#### Colored line

For the current room temperature, I used my own [DIY ESPHome CO2, temperature, humidity sensor](/esphome/co2_scd40).

<a href="images_layout_stretch/temperature_graph.png">
<img src="images_layout_stretch/temperature_graph.png" alt="temperature graph" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: custom:mini-graph-card
entities:
  - sensor.espscd40_co2_temperature
show:
  labels: true
hours_to_show: 4
points_per_hour: 24
color_thresholds:
  - value: 15
    color: "#0000FF"
  - value: 18
    color: "#008000"
  - value: 20
    color: "#f39c12"
  - value: 21
    color: "#d35400"
  - value: 23
    color: "#c0392b"
{% endraw %}
```

#### Multiple lines

One line for a fixed 23 value, one for the room temperature on one side and one for the temperature on the other side of the room.

<a href="images_layout_stretch/temperature_graph_multiple_lines.png">
<img src="images_layout_stretch/temperature_graph_multiple_lines.png" alt="multiple temperatures graph" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: history-graph
entities:
  - entity: sensor.espscd40_co2_temperature
  - entity: sensor.temp_temperature
  - entity: sensor.temp_value_23
hours_to_show: 4
{% endraw %}
```

---

### CO2

#### Colored line

For the current CO2 value in the room, I used my own [DIY ESPHome CO2, temperature, humidity sensor](/esphome/co2_scd40).

<a href="images_layout_stretch/co2_graph.png">
<img src="images_layout_stretch/co2_graph.png" alt="CO2 graph" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: custom:mini-graph-card
entities:
  - sensor.scd40_co2
show:
  labels: true
hours_to_show: 4
points_per_hour: 24
color_thresholds:
  - value: 400
    color: "#008000"
  - value: 800
    color: "#0000FF"
  - value: 1000
    color: "#f39c12"
  - value: 1200
    color: "#d35400"
  - value: 2000
    color: "#c0392b"
{% endraw %}
```

#### Multiple lines

<a href="images_layout_stretch/co2_multiple_lines.png">
<img src="images_layout_stretch/co2_multiple_lines.png" alt="CO2 multiple lines graph" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: history-graph
entities:
- entity: sensor.scd40_co2
- entity: sensor.co2_value_1200
- entity: sensor.co2_value_1500
- entity: sensor.co2_value_800
  logarithmic_scale: false
  hours_to_show: 4
  title: Co2 level
{% endraw %}
```

---

### Humidity

For the current room humidity, I used my own [DIY ESPHome CO2, temperature, humidity sensor](/esphome/co2_scd40).

<a href="images_layout_stretch/humidity.png">
<img src="images_layout_stretch/humidity.png" alt="humidity graph" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: history-graph
entities:
  - entity: sensor.espscd40_co2_temperature
  - entity: sensor.temp_temperature
  - entity: sensor.temp_value_23
hours_to_show: 4
{% endraw %}
```

---
### News headline

<a href="images_layout_stretch/news.png">
<img src="images_layout_stretch/news.png" alt="news headline" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: markdown
content: |
  {{ states('sensor.web_scrape') }}
card_mod:
  style:
    ha-markdown:
      $: |
        p {
          font-size: 30px;
          line-height: 35px;
        }
{% endraw %}
```

---
### Conditional elements

#### Temperature too high

<a href="images_layout_stretch/.png">
<img src="images_layout_stretch/.png" alt="multiple temperatures graph" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```
#### CO2 too high

<a href="images_layout_stretch/.png">
<img src="images_layout_stretch/.png" alt="multiple temperatures graph" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```
#### Camera stream

<a href="images_layout_stretch/camera_stream.png">
<img src="images_layout_stretch/camera_stream.png" alt="camera stream" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: conditional
conditions:
  - condition: state
    entity: input_boolean.frontdoor_detection
    state: "on"
card:
  type: custom:webrtc-camera
  url: rtsp://username:password@192.168.1.111:554//h264Preview_01_main

{% endraw %}
```
#### Open doors

<a href="images_layout_stretch/.png">
<img src="images_layout_stretch/.png" alt="" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```
---
### Textual weather

<a href="images_layout_stretch/.png">
<img src="images_layout_stretch/.png" alt="" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```

---
### Gauge

Two Gauge elements next to each other with the current room- and outside temperatures.

To place them in a horizontal stack, they will be shown smaller.

<a href="images_layout_stretch/2gauges.png">
<img src="images_layout_stretch/2gauges.png" alt="2 gauges" width="450px" />
</a>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: vertical-stack
cards:
  - type: horizontal-stack
    cards:
      - type: gauge
        severity:
          green: 21
          yellow: 23
          red: 25
        entity: sensor.espscd40_co2_temperature
        max: 27
        min: 19
        needle: true
        name: office temperatuur
      - type: gauge
        severity:
          green: 21
          yellow: 23
          red: 25
        entity: sensor.tempest_st_temperature
        max: 26
        min: 20
        needle: true
        name: buiten temperatuur

{% endraw %}
```

---
### Flexible Horseshoe card

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant tips and tricks](index)
