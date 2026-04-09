---
title: "Home Assistant dashboard: Examples overview"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, layout, tablet, panel, example, overview]
image: /homeassistant/images_layout/ha_layout_banner.png
---
# Home Assistant dashboard: Examples overview

![Banner](images_layout/ha_layout_banner.png)

<a href="index"><img src="images/home_assistant_logo.png" style="margin-left:20px;float: right" alt="Home Assistant logo" height="100px"></a>

Here you find a visual elements overview of Home Assistant dashboard elements on this site.

Click on the screenshot to go to the section where this is described.

I hope you can use the examples for your own dashboard!

> **_NOTE:_** For some of the examples here, you need to install first an extra HACS integration.

---
## Table of Contents
<!-- TOC -->
  * [Date and time](#date-and-time)
  * [Weather](#weather)
  * [Predictions](#predictions)
    * [Thunder](#thunder)
  * [Weather in The Netherlands](#weather-in-the-netherlands)
    * [Rain](#rain)
    * [Score](#score)
    * [Weather alarm](#weather-alarm)
    * [Pollen](#pollen)
  * [Afvalbeheer Integration](#afvalbeheer-integration)
<!-- TOC -->

---

## Date and time

<a href="homeassistant_dashboard_date_time#time-and-date">
    <img width="450px" src="images_date_time/time_date.png" alt="Time and date" width="450px" />
</a>

Example with time and date (in Dutch).

---
## Weather

## Predictions

<a href="homeassistant_dashboard_weather_nl#animated-weather-predictions">
    <img width="450px" src="images_hacs/hacs_clock-weather-card.png" alt="Animated weather predictions" />
</a>

Current type of temperature and forecast for three days.

 or

<a href="homeassistant_dashboard_weather_nl#animated-weather-predictions">
    <img width="450px" src="images_weather/weather_per_hour.jpg" alt="Weather predictions per hour" />
</a>


Forecast for five days and the upcoming twelve hours.

<a href="homeassistant_dashboard_weather_nl#weather-predictions">
    <img width="450px" src="images_hacs/hacs_weather-chart-card.png" alt="Weather predictions per hour" />
</a>

Forecast with temperature and rain per hour.

### Thunder

<a href="homeassistant_dashboard_weather#lightning-and-thunderstorm">
    <img width="450px" src="images_weather/thunderstorm.jpg" alt="Blitzortung lightning and thunderstorm" />
</a>

Actual lightning and thunder overview.

---
## Weather in The Netherlands

### Rain

<a href="homeassistant_dashboard_weather_nl#neerslag-app">
    <img width="450px" src="https://github.com/aex351/home-assistant-neerslag-app/raw/main/documentation/example.png" alt="Neerslag App" />
</a>

Forecast for rain intensity over time.

<a href="homeassistant_dashboard_weather_nl#rain-radar-animated">
    <img width="450px" src="images_weather/buienradar.gif" alt="Rain radar animated" />
</a>

Animated rain forecast over The Netherlands. With marker for your home town.

<a href="homeassistant_dashboard_weather_nl#weeronline">
    <img width="450px" src="images_weather/rain_radar_animated.png" alt="Weeronline" />
</a>

Other animated rain forecast.

<a href="homeassistant_dashboard_weather_nl#precipitation-surplus-neerslagoverschot">
    <img src="images_weather/weather_neerslagoverschot.png" alt="Precipitation surplus (neerslagoverschot)" width="400px">
</a>

Amount of fallen rain in The Netherlands.

### Score

<a href="homeassistant_dashboard_weather_nl#bikebbqterrace-weather-score-upcoming-days">
    <img width="450px" src="images_weather/weather_score_weerplaza.png" alt="Bike/BBQ/Terrace weather score" />
</a>

Weather scores per day for different type of sports activities. Like cycling.

### Weather alarm

<a href="homeassistant_dashboard_weather_nl#weather-alarm">
    <img width="450px" src="images_weather/weather_alarm_knmi.png" alt="Weather alarm" />
</a>

Weather alarm color and text based on the Dutch KNMI data.

<a href="homeassistant_dashboard_weather_nl#weather-alarm-map">
    <img width="450px" src="images_weather/weather_alarm_map_knmi.jpg" alt="Weather alarm map" />
</a>

Map of the Netherlands with weather alarms per province.

### Pollen

<a href="homeassistant_dashboard_weather_nl#pollen">
    <img width="450px" src="images_weather/pollennieuws.png" alt="Pollen" />
</a>

Map of the Netherlands with pollen level per region.

<a href="homeassistant_hacs_kleenex">
    <img src="images_kleenex/kleenex_colored_presentation.png" alt="Kleenex pollen" width="450px">
</a>

Pollen levels for weed, grass and trees.

---
## Afvalbeheer Integration

Different kind of presentations to show the upcoming trash can pick up days, based on the Afvalbekeer integration.

  <a href="homeassistant_hacs_afvalbeheer#default-presentation">
    <img width="450px" src="images_afvalbeheer/default.png" alt="Default Afvalbeheer presentation">
  </a>

The default presentation.

  <a href="homeassistant_hacs_afvalbeheer#sort-by-date">
    <img width="450px" src="images_afvalbeheer/pres_row_own-icon.png" alt="Afvalbeheer presentation as row">
  </a>

Ordered by date in a row.

  <a href="homeassistant_hacs_afvalbeheer#sort-by-date">
    <img width="450px" src="images_afvalbeheer/pres_list.png" alt="Afvalbeheer presentation as list">
  </a>

Ordered by date in a list.

  <a href="homeassistant_hacs_afvalbeheer#as-list---days-countdown">
    <img width="450px" src="images_afvalbeheer/pres_list_icon_date.png" alt="As list - days countdown">
  </a>

Ordered by date in a list with days count down.

  <a href="homeassistant_hacs_afvalbeheer#as-2x2-raster">
    <img width="450px" src="images_afvalbeheer/pres_raster_2x2.png" alt="Afvalbeheer as 2x2 raster">
  </a>

In a 2x2 raster.

  <a href="homeassistant_hacs_afvalbeheer#as-row">
    <img width="450px" src="images_afvalbeheer/pres_row_date.png" alt="Sorted by countdown entities (row)">
  </a>

In a row with a basic icon.

  <a href="homeassistant_hacs_afvalbeheer#as-list-1">
    <img width="450px" src="images_afvalbeheer/days_countdown.png" alt="Days countdown list">
  </a>

In a row with a basic icon.

  <a href="homeassistant_hacs_afvalbeheer#show-conditional-only-for-the-next-5-days">
    <img width="450px" src="images_afvalbeheer/pres_5days.png" alt="Only for the next 5 days">
  </a>

Show only the pickup days within the upcoming 5 days.

  <a href="homeassistant_hacs_afvalbeheer#mushroom-element">
    <img width="450px" src="images_afvalbeheer/afvalbeheer_mushroom.png" alt="Mushroom conditional and colored">
  </a>

Mushroom icon with matching color which trash can must be handled tomorrow/today.

---

[Dashboard: Layout >>](homeassistant_dashboard_layout)