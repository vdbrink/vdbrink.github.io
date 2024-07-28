---
title: "Home Assistant dashboard: Voorbeeld templates NL"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, templates, nl, weer]
image: /homeassistant/images/rain_radar_animated.png
---

# Home Assistant dashboard: Voorbeeld templates NL

 <a href="index"><img src="images/home_assistant_logo.png" style="float: right;margin-left:20px" alt="Home Assistant logo" height="100px"></a>

Hier vind je Nederlandse Home Assistant template voorbeelden om op je dashboard te plaatsen.

<br>

---

## Table of Contents
<!-- TOC -->
  * [Welkomstboodschap](#welkomstboodschap)
  * [Het weer voor vandaag](#het-weer-voor-vandaag)
  * [De huidige temperatuur met kleding advies](#de-huidige-temperatuur-met-kleding-advies)
  * [De duur dat de wasmachine aan is](#de-duur-dat-de-wasmachine-aan-is)
<!-- TOC -->

---

## Welkomstboodschap

Op basis van de tijd de juiste begroeting van de gebruiker die is ingelogd.

Voorbeeld notaties van deze template:
```text
{% raw %}
 Goeiemorgen, Henk
{% endraw %}
```
```text
{% raw %}
Goeieavond, Ingrid
{% endraw %}
```

De template:
```yaml
{% raw %}
  {%- if now().hour < 12 -%}Goeiemorgen
  {%- elif now().hour < 18 -%}Goeiemiddag
  {%- else -%}Goeieavond{%- endif -%}, {{user}}.
{% endraw %}
```
---

## Het weer voor vandaag

Voorbeeld notaties van deze template:
```text
{% raw %}
Vandaag is het tussen de 8 en de 24°C 
en bewolkt met af en toe regen. 
{% endraw %}
```

De template:
```yaml
{% raw %}
  Vandaag is het tussen de {{states('sensor.meteoserver_d0tmin')}} 
  en de {{states('sensor.meteoserver_d0tmax')}} °C 
  en {{ states('sensor.meteoserver_verw').lower()}}.
{% endraw %}
```

---

## De huidige temperatuur met kleding advies

Voorbeeld notaties van deze template:
```text
{% raw %}
Het weer buiten is aangenaam met 17 graden als gevoelstemperatuur.
en 16 graden celcius op de thermometer.
T-shirt aan als je naar buiten gaat.
{% endraw %}
```

De template:
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

  en {{states('tempest_temperature_rounded')}} graden celcius op de thermometer.
  
  {% if states('tempest_temperature_feels_like_rounded')|int <= 5 %} Winterjas en handschoenen
  {% elif states('tempest_temperature_feels_like_rounded')|int <= 12 %} Softshell
  {% elif states('tempest_temperature_feels_like_rounded')|int <= 16 %} Vest
  {% elif states('tempest_temperature_feels_like_rounded')|int > 16 %} T-shirt
  {% endif %} aan als je naar buiten gaat.
{% endraw %}
```

---
## De duur dat de wasmachine aan is

Deze template toont hoe lang een binary sensor op de status `on` staat.

Voorbeeld notaties van deze template:
```text
{% raw %}
De wasmachine is 2 dagen 5 uren en 1 minuut bezig.
{% endraw %}
```
```text
{% raw %}
De wasmachine is 1 uur en 12 minuten bezig.
{% endraw %}
```
```text
{% raw %}
De wasmachine is 42 minuten bezig.
{% endraw %}
```

De template:
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
  {{ 'De wasmachine is ' }}
  {%- set entity_id = 'binary_sensor.wasmachine' -%}
  {%- if is_state(entity_id, 'on') -%}
      {%- set runningSince = (now()) - ((states[entity_id].last_changed)) -%}
      {%- set runningSinceSeconds = runningSince.total_seconds()|round -%}
      
      {%- set runningSinceDays = (runningSinceSeconds / 86400)|int|string -%}
      {%- set runningSinceDaysText = 'dagen' -%}
      {%- if runningSinceDays|int == 1 -%}
        {%- set runningSinceDaysText = 'dag' -%}
      {%- endif -%}
      
      {%- set runningSinceHours = (runningSinceSeconds % 86400 / 3600)|int|string -%}
      {%- set runningSinceHoursText = 'uren' -%}
      {%- if runningSinceHours|int == 1 -%}
        {%- set runningSinceHoursText = 'uur' -%}
      {%- endif -%}
    
      {%- set runningSinceMinutes = (runningSinceSeconds % 3600 / 60)|int|string -%}
      {%- set runningSinceMinutesText = 'minuten' -%}
      {%- if runningSinceMinutes|int == 1 -%}
        {%- set runningSinceMinutesText = 'minuut' -%}
      {%- endif -%}
  
      {%- if runningSinceDays|int > 0 -%}
          {{ runningSinceDays + ' ' + runningSinceDaysText + ' ' + runningSinceHours + ' ' + runningSinceHoursText + ' en ' + runningSinceMinutes + ' ' + runningSinceMinutesText }}
      {%- elif runningSinceHours|int > 0 -%}
          {{ runningSinceHours + ' ' + runningSinceHoursText + ' en ' + runningSinceMinutes + ' ' + runningSinceMinutesText }}
      {%- else -%}
        {{ runningSinceMinutes + ' ' + runningSinceMinutesText }}
      {%- endif -%}
  {%- endif -%}
  {{ ' bezig.' }}
{% endraw %}
```

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)