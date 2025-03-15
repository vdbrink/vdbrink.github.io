---
title: "Home Assistant dashboard: Date & Time"
date: 2022-06-29
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, date, time]
image: /homeassistant/images/home_assistant_logo.png
---

# Home Assistant dashboard: Date & Time

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to date and time which you can easily add to your own dashboards.

<br/>

---
## Table of Contents
<!-- TOC -->
  * [Time and date](#time-and-date)
  * [Inline time and date (Dutch format)](#inline-time-and-date-dutch-format)
  * [Current day of the week (Dutch format)](#current-day-of-the-week-dutch-format)
  * [Days count down](#days-count-down)
  * [How long an entity is active in human-readable text](#how-long-an-entity-is-active-in-human-readable-text)
  * [Hours count up](#hours-count-up)
  * [Last changed indication as secondary info](#last-changed-indication-as-secondary-info)
  * [Last changed indication](#last-changed-indication)
  * [Triggered today](#triggered-today)
<!-- TOC -->

---

## Time and date

Hugh time notation and a full date notation.

![time_date.png](images_date_time/time_date.png)

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
## Inline time and date (Dutch format)

![Current date and time](images_date_time/date_time.png)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    time_formatted:
      friendly_name: "Datum en tijd"
      value_template: >-
        {% set days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"] %}
        {% set day = days[now().weekday()] %}
        {% set day_short = day[0:2] %}
        {% set months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"] %}
        {% set month = months[now().month - 1] %}
        {{ now().strftime('%H:%M') + ', ' + day_short + ' ' + now().strftime('%d') + ' ' + month + ' ' + now().strftime('%Y') }}
      icon_template: mdi:calendar-clock
{% endraw %}
```

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: entity
  entity: sensor.time_formatted
  name: ' '
{% endraw %}
```

---
## Current day of the week (Dutch format)

<img src="images_date_time/day_of_the_week.png" alt="Day of the week" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    day_of_the_week_full:
      friendly_name: "Dag van de week"
      value_template: >-
        {% set days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"] %}
        {% set day = days[now().weekday()] %}
        {{ day }}
{% endraw %}
```
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: entity
  entity: sensor.time_formatted
  name: ' '
{% endraw %}
```

---
## Days count down

<img src="images_date_time/days_countdown.png" alt="Days countdown" width="400px">

### Twente Milieu: format `YYYY-MM-DD`
Countdown for the number of days until they pick up the paper waste. 
The `Twente Milieu` integration creates the sensor `paper_waste_pickup` in the format `YYYY-MM-DD` 

With this template it gives the amount of days from now. 

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template      
  sensors:
    paper_waste_pickup_countdown:
      friendly_name: "papier ophalen"
      value_template: >-
         {% set now_timestamp = as_timestamp(strptime(states("sensor.date"), "%Y-%m-%d")) %}
         {% set paper_timestamp = as_timestamp(strptime(states("sensor.paper_waste_pickup"), "%Y-%m-%d")) %}
         {% set days = ((paper_timestamp - now_timestamp) / (24 * 60 * 60)) | round(0, 'ceil')  %}
         {{ days }}
      icon_template: mdi:delete-empty
      unit_of_measurement: "dagen"  
{% endraw %}
```

### HACS: Afvalbeheer: attribute and format `YYYYMMDD`
Countdown for the number of days until they pick up the paper waste.
The [HACS: Afvalbeheer](https://github.com/pippyn/Home-Assistant-Sensor-Afvalbeheer) integration creates the sensor `wastecollector_papier` the default value can be `Morgen, 05-02-2024` or `06-02-2024`. But the attributes field `Sort_date` has a default `YYYYMMDD` that's why I use this value

With this template it gives the amount of days from now.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template      
  sensors:
    paper_waste_pickup_countdown:
      friendly_name: "papier ophalen"
      value_template: >-
        {% set datex = state_attr('sensor.wastecollector_papier','Sort_date') | string %}
        {{ ((as_timestamp(strptime(datex, '%Y%m%d')) - as_timestamp(now())) / (60 * 60 * 24)) | round(0, 'ceil')  }}
      icon_template: mdi:delete-empty
      unit_of_measurement: "dagen"  
{% endraw %}
```

### Show only on the last 4 days

To show only the message when it's less than 4 days before the pick-up I used the [HACS: auto-entities](https://github.com/thomasloven/lovelace-auto-entities) custom element.
Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-auto-entities&category=integration)
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
  show_empty: false
{% endraw %}
```

---
## How long an entity is active in human-readable text

<img src="images_date_time/running_washingmachine.png" alt="How long the washing machine is running" width="400px">

<img src="images_date_time/running_washingmachine2.png" alt="Running more than one hour" width="400px">

Show in human-readable text how long an entity, like a washing machine, is active.

I used a custom HACS module mushroom.
Install it via this button
[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=piitaya&repository=lovelace-mushroom&category=integration)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-title-card
  title: |-
  {{ 'De wasmachine is ' }}
  {%- set entity_id = 'binary_sensor.wasmachine' -%}
  {%- if is_state(entity_id, 'on') -%}
  
      {%- set runningsince = (now()) - ((states[entity_id].last_changed)) -%}
      {%- set runningsinceseconds = runningsince.total_seconds()|round -%}
      {%- set runningsincedays = (runningsinceseconds / 86400)|int|string -%}
      {%- set runningsincedaystext = 'dagen' -%}
      {%- if runningsincedays|int == 1 -%}
        {%- set runningsincedaystext = 'dag' -%}
      {%- endif -%}
  
      {%- set runningsincehours = (runningsinceseconds % 86400 / 3600)|int|string -%}
      {%- set runningsincehourstext = 'uren' -%}
      {%- if runningsincehours|int == 1 -%}
        {%- set runningsincehourstext = 'uur' -%}
      {%- endif -%} 
      
      {%- set runningsinceminutes = (runningsinceseconds % 3600 / 60)|int|string -%} 
      {%- set runningsinceminutestext = 'minuten' -%}
      {%- if runningsinceminutes|int == 1 -%} 
        {%- set runningsinceminutestext = 'minuut' -%}
      {%- endif -%} 
  
      {%- if runningsincedays|int > 0 -%} 
      # Running more then 1 day
        {{ runningsincedays + ' ' + runningsincedaystext + ', ' + runningsincehours + ' ' + runningsincehourstext + ' en ' + runningsinceminutes + ' ' + runningsinceminutestext }} 
      {%- elif runningsincehours|int > 0 -%}
      # Running more then 1 hour
        {{ runningsincehours + ' ' + runningsincehourstext + ' en ' + runningsinceminutes + ' ' + runningsinceminutestext }} 
      {%- else -%}
      # Running for minutes
        {{ runningsinceminutes + ' ' + runningsinceminutestext }}
      {%- endif -%}
      {%- if is_state(entity_id, 'on') -%} 
        {{ ' bezig'}} 
      {%- endif -%}
  {%- else -%}
  # State is off
    {{ ' uit' }}
  {%- endif -%}
{% endraw %}
```
---

## Hours count up

<img src="images_date_time/hours_ago.jpg" alt="Hours count upn" width="400px">

Count the hours since the last changed state. In this case when a drawer with medicines was opened for the last time.

The value 11.3 will round to 11 and also 11.6 will round to 11 hours.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    drawer_opened_hours_ago:
      friendly_name: "la geopend"
      value_template: >-
        {% set now_timestamp = as_timestamp(now()) %}
        {% set drawer_timestamp = as_timestamp(states.binary_sensor.drawer_contact.last_changed) %}
        {% set hours = ((now_timestamp - drawer_timestamp) / (60 * 60)) | round(0, 'ceil')  %}
        {{ hours }}
      unit_of_measurement: "uren"
{% endraw %}
```
---
## Last changed indication as secondary info

<img src="images_date_time/hours_countdown_secondary.png" alt="Last changed indication as secondary info" width="400px">

The value on the right is the actual sensor value.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: entities
  entities:
    - entity: binary_sensor.contact1_contact
      secondary_info: last-changed
{% endraw %}
```

---
## Last changed indication

A custom sensor that shows the time since the last change.\
Also useful to show on a floor map. 

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
mailbox_timer:
  friendly_name: mailbox
  icon_template: mdi:clock-outline
  value_template: >
    {{ relative_time(states.binary_sensor.mailbox_contact.last_changed) }}
{% endraw %}
```

---
## Triggered today

Test if the robot vacuum already runs today.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
binary_sensor:
  - platform: template
    sensors:
       vaccuum_run_today:
            friendly_name: "runned today"
            value_template: "{{ as_local(as_datetime(states("sensor.vacuum_last_clean_start"))).date() == now().date() }}"
{% endraw %}
```

---

[<< See also my other Home Assistant tips and tricks](index)