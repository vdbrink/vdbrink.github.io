---
title: "Home Assistant dashboard: Weather"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, weather, thunder, lightning]
image: /homeassistant/images/thunderstorm.jpg
---

# Home Assistant dashboard: Weather

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you can find weather related examples for your own dashboard.

[Here](homeassistant_dashboard_weather_nl) you can also find Dutch weather elements.

---
## Table of Contents
<!-- TOC -->
* [Lightning and thunderstorm](#lightning-and-thunderstorm)
* [Outside pressure, good vs bad](#outside-pressure-good-vs-bad)
<!-- TOC -->

---

## Lightning and thunderstorm

Show an iframe with the realtime lightning and thunderstorm activities from blitzortung.org.

<img src="images_weather/thunderstorm.jpg" alt="blitzortung lightning and thunderstorm" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: iframe
url: >-
https://map.blitzortung.org/index.php?interactive=0&NavigationControl=0&FullScreenControl=0&Cookies=0&InfoDiv=0&MenuButtonDiv=1&ScaleControl=1&LinksCheckboxChecked=1&LinksRangeValue=10&MapStyle=0&MapStyleRangeValue=0&Advertisment=#10/52.100676/5.168668
aspect_ratio: '1:0.6'
{% endraw %}
```

## Outside pressure, good vs bad

A template that indicates good or bad based on a threshold value.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- platform: template
  sensors:
    temp_pressure_ok:
      friendly_name: "temp_pressure_ok"
      value_template: >-
        {% if states('sensor.temp_outside_pressure') | int > 1000 %}
          good
        {% else %}
          bad
        {% endif %}
{% endraw %}
```

---
[^^ Top](#table-of-contents)

[Dutch weather elements >>](homeassistant_dashboard_weather)

[<< See also my other Home Assistant pages](index)