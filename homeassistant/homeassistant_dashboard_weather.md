---
title: "Home Assistant dashboard: Weather"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, weather, thunder, lightning]
image: /homeassistant/images_hacs/hacs_weather-chart-card.png
---

# Home Assistant dashboard: Weather

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you can find different examples of weather forecast dashboard cards with copy-paste YAML code.

Most of the cards are highly configurable, check the source site for all possible parameters which fits your needs the best.

---
## Table of Contents
<!-- TOC -->
  * [Weather Chart Card](#weather-chart-card)
  * [Animated weather card](#animated-weather-card)
  * [Clock weather card](#clock-weather-card)
  * [Windy.com compact forecast](#windycom-compact-forecast)
  * [Hourly Weather Card](#hourly-weather-card)
  * [Kleenex pollen radar Integration](#kleenex-pollen-radar-integration)
  * [Lightning and thunderstorm](#lightning-and-thunderstorm)
  * [Outside pressure, good vs bad](#outside-pressure-good-vs-bad)
<!-- TOC -->

---
## Weather Chart Card

### Example 1

With current weather conditions and forecast for the upcoming hours.

<img src="images_hacs/hacs_weather-chart-card.png" alt="Weather predictions with weather-chart-card" width="400px">

Install this HACS [**Weather Chart Card**](https://github.com/mlamberts78/weather-chart-card?tab=readme-ov-file#weather-chart-card) integration via this button
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=mlamberts78&repository=weather-chart-card&category=integration)

With no extra parameters defined you get a full card with available data.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:weather-chart-card
entity: weather.home
{% endraw %}
```

### Example 2

If you want to customize the presentation it can get a complete different look, and you can (de)active elements.

E.g. only with forecast data and an alternative presentation style.

<img src="images_hacs/hacs_weather-chart-card2.png" alt="Weather predictions with weather-chart-card" width="400px">

Install this HACS [**Weather Chart Card**](https://github.com/mlamberts78/weather-chart-card?tab=readme-ov-file#weather-chart-card) integration via this button
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=mlamberts78&repository=weather-chart-card&category=integration)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:weather-chart-card
entity: weather.forecast_home
forecast:
  style: style2
  round_temp: true
  condition_icons: false
  show_wind_forecast: false
show_main: false
show_attributes: false
{% endraw %}
```

---
## Animated Weather Card

This Animated Weather Card comes with current weather conditions and the predictions for the coming days.

![Animated weather card](https://raw.githubusercontent.com/bramkragten/custom-ui/master/weather-card/weather-card.gif)

Install the HACS [**Animated Weather Card**](https://github.com/bramkragten/weather-card) integration via this button.\
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=bramkragten&repository=weather-card&category=integration)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:weather-card
entity: weather.yourweatherentity
current: true
details: false
forecast: true
hourly_forecast: false
number_of_forecasts: 5
{% endraw %}
```

---
## Clock Weather Card

Animated weather icon, with current weather and a temperature forecast with min/max temperature bars for the upcoming days.

<img src="images_hacs/hacs_clock-weather-card.png" alt="Animated weather predictions with clock-weather-card" width="400px">

Install the HACS [**Clock Weather Card**](https://github.com/pkissling/clock-weather-card#readme) integration via this button
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=pkissling&repository=clock-weather-card&category=integration)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:clock-weather-card
entity: weather.home
forecast_days: 3
locale: nl
time_format: 24
date_pattern: P
hide_today_section: false
hide_forecast_section: false
{% endraw %}
```

<a name="clock-weather-card-per-hour"></a>

This card is highly customizable.
To show more days, no clock and also the expected weather per weather hour.

<img src="images_weather/weather_per_hour.jpg" alt="clock-weather-card per hour" width="400px">

This is the corresponding code:

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:clock-weather-card
entity: weather.forecast_home
forecast_days: 5
locale: nl
time_format: 24
hide_clock: true
date_pattern: ""
hide_today_section: true
hide_forecast_section: false
hourly_forecast: true
forecast_rows: 12
{% endraw %}
```

---
## Windy.com compact forecast

Show an iframe with a very compact presentation but with much information for the upcoming hours.
Clouds/sunny, position of the sun, temperature, rain, wind force, wind gust, wind direction, 

<img src="images_weather/home-assistant-windy-com.png" alt="Home Assistant Windy.com" width="400px">

Replace in this YAML code the longitude and latitude values (2x) for the weather at your location.
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: iframe
url: https://embed.windy.com/embed2.html?lat=52.000&lon=4.000&detailLat=52.000&detailLon=4.000&width=650&height=180&zoom=11&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=bft&metricTemp=%C2%B0C&radarRange=-1
aspect_ratio: 44%
{% endraw %}
```

---
## Hourly Weather Card

The forecast in a bar and with the temperature per hour.

<img src="images_weather/hourly-weather.png" alt="Hourly Weather Card Home Assistant card" width="400px">

Install the HACS [**Hourly Weather Card**](https://github.com/pkissling/clock-weather-card#readme) integration via this button
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=decompil3d&repository=lovelace-hourly-weather&category=integration)

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: custom:hourly-weather
entity: weather.forecast_home
show_precipitation_probability: true
show_precipitation_amounts: true
show_wind: "false"
name: " "
{% endraw %}
```

---
## Kleenex pollen radar Integration

Pollen integration with intensity for weeds, grasses and trees for today.

<img src="images_kleenex/kleenex_colored_presentation.png" alt="" width="400px">

Check out my [dedicated page](homeassistant_hacs_kleenex) about this integration for more cards with multi day forecast.
And graphs with details different types of pollen per type of trees.

---
## Lightning and thunderstorm

Show an iframe with the realtime lightning and thunderstorm activities from blitzortung.org.

<img src="images_weather/thunderstorm.jpg" alt="blitzortung lightning and thunderstorm" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: iframe
url: https://map.blitzortung.org/index.php?interactive=0&NavigationControl=0&FullScreenControl=0&Cookies=0&InfoDiv=0&MenuButtonDiv=1&ScaleControl=1&LinksCheckboxChecked=1&LinksRangeValue=10&MapStyle=0&MapStyleRangeValue=0&Advertisment=#10/52.100676/5.168668
aspect_ratio: '1:0.6'
{% endraw %}
```

---
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

[Dutch focused weather cards >>](homeassistant_dashboard_weather)

[<< See also my other Home Assistant tips and tricks](index)