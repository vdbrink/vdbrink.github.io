---
layout: default
title: "Feed: Home Assistant dashboard - Weer in Nederland"
date: 2026-04-17
locale: nl
tags: [weather, Dutch, dashboard, Netherlands, Home Assistant]
permalink: /home-assistant-dashboard-weer-in-nederland
image: /homeassistant/images_weather/pollennieuws.png
---

# Feed: Home Assistant dashboard - Weer in Nederland

*As exception this post is in Dutch.*

Nederlanders praten graag over het weer!
Heb je Home Assistant draaien dan wil je natuurlijk ook alles over het weer op je dashboard tonen.

Er is heel veel data beschikbaar wat je allemaal kunt tonen.
Hier zijn wat voorbeelden waarvan ik ook de voorbeeld YAML en de bijbehorende HACS-integratie heb besproken hier op mijn site (dat is wel allemaal in het Engels).

> Klik op een screenshot om naar de desbetreffende beschrijving van deze weergave te gaan.

## Voorspellingen

Huidig weer en voorspelling voor de komende 3 dagen.\
HACS `clock-weather-card`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#animated-weather-predictions">
    <img width="450px" src="/homeassistant/images_hacs/hacs_clock-weather-card.png" alt="huidig weer en voorspelling voor de komende 3 dagen" />
</a>

Voorspelling voor de komende 5 dagen en per uur.\
HACS `clock-weather-card`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#animated-weather-predictions">
    <img width="450px" src="/homeassistant/images_weather/weather_per_hour.jpg" alt="voorspelling voor de komende 5 dagen en per uur" />
</a>

Huidig weer en de voorspelling voor de komende uren.\
HACS `weather-chart-card`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#weather-predictions">
    <img width="450px" src="/homeassistant/images_hacs/hacs_weather-chart-card.png" alt="huidig weer en de voorspelling voor de komende uren" />
</a>

Dezelfde integratie maar met andere instellingen.\
Alleen de min en max temperatuur en neerslag voor vandaag en de voorspellingen voor de komende 5 dagen.\
HACS `weather-chart-card`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#example-2">
    <img width="450px" src="/homeassistant/images_hacs/hacs_weather-chart-card2.png" alt="weer voor vandaag en de voorspellingen voor de komende 5 dagen" />
</a>

---
## Regen

Neerslag verwachting o.b.v. data van Buienradar en/of Buienalarm.\
HACS `Neerslag App`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#neerslag-app">
    <img width="450px" src="https://github.com/aex351/home-assistant-neerslag-app/raw/main/documentation/example.png" alt="neerslag verwachting" />
</a>

Geanimeerde neerslag voor de komende uren van heel nederland.\
HACS `Buienradar`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#rain-radar-animated">
    <img width="450px" src="/homeassistant/images_weather/buienradar.gif" alt="geanimeerde neerslag" />
</a>

Andere geanimeerde weergave van nederland met de neerslag hoeveelheid.\
Iframe: `weeronline.nl`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#rain-radar">
    <img width="450px" src="/homeassistant/images_weather/rain_radar_animated.png" alt="geanimeerde neerslag" />
</a>

Statische afbeelding van het neerslag overschot van de afgelopen maanden.\
Bron: KNMI

<a href="/homeassistant/homeassistant_dashboard_weather_nl#precipitation-surplus-neerslagoverschot">
    <img src="/homeassistant/images_weather/weather_neerslagoverschot.png" alt="neerslagoverschot" width="400px">
</a>

---
## Onweer

Geanimeerde weergave van de hoeveelheid onweer, in te stellen per plaats.\
Iframe: `blitzortung.org`

<a href="/homeassistant/homeassistant_dashboard_weather#lightning-and-thunderstorm">
    <img width="450px" src="/homeassistant/images_weather/thunderstorm.jpg" alt="onweer" />
</a>

---
## Weer alarm

Weeralarm code en omschrijving.\
Bron: KNMI

<a href="/homeassistant/homeassistant_dashboard_weather_nl#weather-alarm">
    <img width="450px" src="/homeassistant/images_weather/weather_alarm_knmi.png" alt="weer alarm" />
</a>

Weer alarm per provincie.\
Bron: KNMI

<a href="/homeassistant/homeassistant_dashboard_weather_nl#weather-alarm-map">
    <img width="450px" src="/homeassistant/images_weather/weather_alarm_map_knmi.jpg" alt="weer alarm kaart" />
</a>

<a href="/homeassistant/homeassistant_dashboard_weather_nl#conditional-weather-alarm-2">
    <img src="images_weather/weather_alarm_knmi_colored_background.png" alt="weer alarm" width="400px">
</a>

---
## Pollen

Statische afbeelding met het totaal aantal pollen.\
Bron: `Pollennieuws.nl`

<a href="/homeassistant/homeassistant_dashboard_weather_nl#pollen">
    <img width="450px" src="/homeassistant/images_weather/pollennieuws.png" alt="Pollen" />
</a>

Verchillende presentatie van onkruid, grassen en bomen. Ook info per boom soort.\
HACS: `Kleenex Pollen Radar`

<a href="/homeassistant/homeassistant_hacs_kleenex">
    <img src="/homeassistant/images_kleenex/kleenex_advanced_presentation.png" alt="Kleenex pollen" width="450px">
</a>

<a href="/homeassistant/homeassistant_hacs_kleenex">
    <img src="/homeassistant/images_kleenex/attribute_tree_data_apexcharts.jpg" alt="Kleenex pollen per boom voorspelling" width="450px">
</a>

<a href="/homeassistant/homeassistant_hacs_kleenex">
    <img src="/homeassistant/images_kleenex/attribute_tree_data_tile.jpg" alt="Kleenex pollen per boom" width="450px">
</a>

Voor meer Nederlandse dashboard elementen kijk ook eens hier:
* [Voorbeeld templates NL](/homeassistant/homeassistant_dashboard_templates_nl)
* [Afvalbeheer](/homeassistant/homeassistant_hacs_afvalbeheer)

