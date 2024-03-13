---
title: "Home Assistant dashboard: Voorbeeld templates NL"
category: Home Assistant
tags: Home Assistant, dashboard, lovelace, templates, nl, weer
---
# Home Assistant dashboard: Voorbeeld templates NL

 <a href="index"><img src="images/home_assistant_logo.png" style="float: right" alt="Home Assistant logo" height="100px"></a>

---

## Table of Contents
<!-- TOC -->
* [Home Assistant dashboard: Voorbeeld templates NL](#home-assistant-dashboard-voorbeeld-templates-nl)
  * [Table of Contents](#table-of-contents)
  * [Welkom en weer](#welkom-en-weer)
  * [Het weer van nu en vandaag](#het-weer-van-nu-en-vandaag)
  * [De duur dat de (was)machine aan is](#de-duur-dat-de-wasmachine-aan-is)
<!-- TOC -->

---

## Welkom en weer

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
  {%- if now().hour < 12 -%}Goeiemorgen
  {%- elif now().hour < 18 -%}Goeiemiddag
  {%- else -%}Goeieavond{%- endif -%}, {{user}}. 
  
  Vandaag is het tussen de {{states('sensor.meteoserver_d0tmin')}} 
  en de {{states('sensor.meteoserver_d0tmax')}} °C 
  met {{ states('sensor.meteoserver_verw').lower()}}.
{% endraw %}
```
 ---
## Het weer van nu en vandaag

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
  Het weer buiten is 
  {% if states('tempest_temperature_feels_like_rounded')|int <= 5 %} erg koud met slechts 
  {% elif states('tempest_temperature_feels_like_rounded')|int <= 10 %} fris met slechts  
  {% elif states('tempest_temperature_feels_like_rounded')|int < 18 %} aangenaam met 
  {% elif states('tempest_temperature_feels_like_rounded')|int < 28 %} een erg aangename temperatuur met 
  {% elif states('tempest_temperature_feels_like_rounded')|int >= 28 %} heet met 
  {% endif %}
  {{states('tempest_temperature_feels_like_rounded')}} graden als gevoelstemperatuur.

  En {{states('tempest_temperature_rounded')}} celcius op de thermometer.
  {% if states('tempest_temperature_feels_like_rounded')|int <= 5 %} Winterjas en handschoenen aan.
  {% elif states('tempest_temperature_feels_like_rounded')|int <= 12 %} Softshell aan.
  {% elif states('tempest_temperature_feels_like_rounded')|int <= 16 %} Vest aan.
  {% elif states('tempest_temperature_feels_like_rounded')|int > 16 %} T-shirt aan.
  {% endif %}

    De temperatuur ligt tussen de {{states('meteoserver_d0tmin')}} en de {{states('meteoserver_d0tmax')}} graden.

    De weercode is {{states('knmi_weercode').lower()}}.

    De luchtkwaliteit is {{states('outside_lki_lki_text')}} ({{states('outside_lki_lki_index')}}).

    De rest van de dag is het {{states('meteoserver_verw').lower()}}.

{% endraw %}
```
---
## De duur dat de (was)machine aan is

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
{% endraw %}
  {{ 'De machine is ' }}
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
          {{ runningsincedays + ' ' + runningsincedaystext + ' ' + runningsincehours + ' ' + runningsincehourstext + ' en ' + runningsinceminutes + ' ' + runningsinceminutestext }}
      {%- elif runningsincehours|int > 0 -%}
          {{ runningsincehours + ' ' + runningsincehourstext + ' en ' + runningsinceminutes + ' ' + runningsinceminutestext }}
      {%- else -%}
        {{ runningsinceminutes + ' ' + runningsinceminutestext }}
      {%- endif -%}
  {%- endif -%}
  {{ ' bezig.' }}
```

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)