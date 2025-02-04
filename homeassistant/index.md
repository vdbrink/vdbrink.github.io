---
title: Home Assistant dashboards
category: Home Assistant
tags: [Home Assistant, lovelace, dashboard, weather, dutch, examples]
image: /homeassistant/images/ha_banner.png
---
# Home Assistant dashboards

![Banner](images/ha_banner.png)

<img style="float:right;height:150px" src="images/home_assistant_logo.png" alt="Home Assistant logo" >

I created so many different dashboards that I want to document and share them with you.
One by one, I will add them here.

I created dashboards with all kinds of elements in it:
* [Layout](homeassistant_dashboard_layout) (Stacks, grid, rows, compact presentations)
* Templates:
  * [Template examples](homeassistant_templates) 
  * [Dutch examples](homeassistant_dashboard_templates_nl) (NL: welkomst tekst, weer, kleding advies)
* Weather:
  * [External sites](homeassistant_dashboard_weather) (Thunderstorm)
  * [The Netherlands](homeassistant_dashboard_weather_nl) (Buienradar, weeralarm, pollen)
  * [Aurora integration](homeassistant_aurora) Aurora Borealis alert
* [HACS custom elements](homeassistant_dashboard_hacs) (Overview of some very useful custom HACS elements)
  * [Auto entities](homeassistant_dashboard_card_auto-entities)
  * [Mushroom](homeassistant_dashboard_card_mushroom)
  * [Afvalbeheer](homeassistant_hacs_afvalbeheer)
* [Grafana](homeassistant_dashboard_grafana) (Grafana graph integration)
* [Styling](homeassistant_dashboard_styling) (Changing the color of icons, status, backgrounds etc.)
* [Date & Time](homeassistant_dashboard_date_time) (Days countdown)
* [Formatting](homeassistant_dashboard_formatting) (Rounded temperature sensors)
* [Interactive floor plan](homeassistant_dashboard_floorplan)
* [Chores](homeassistant_dashboard_chores) (Manage your weekly chores)
* [Recipe manager Mealie](homeassistant_dashboard_mealie) (With meal weekplanner)
* [Control an Orcon ventilation system](../esphome/orcon_mechanic_ventilation)
* [Hardware monitor](homeassistant_hardware_monitor)
* [Random examples](homeassistant_dashboard_examples) (The latest news)
* [Web scraper](homeassistant_web_scraper) (Show website data on your dashboard)
* [Pientere Tuinen](homeassistant_dashboard_pientere_tuinen) (Dutch garden and soil project)

---
Other Home Assistant integrations

* [Automate infrared devices in Home Assistant](../zigbee/smart_infrared_transmitter_receiver)

Node-RED + Home Assistant integration

Here you find flows to interact between Home Assistant and Node-RED.

* [Node-RED - Home Assistant](node-red_home-assistant)
* [Node-RED - Send notifications to the Home Assistant app](node-red_home-assistant_notifications)


---
## How I use Home Assistant

I started my home automation without Home Assistant on a tiny Raspberry zero (in 2019). 
In those days, I used an app ([Mqtt Dashboard](https://play.google.com/store/apps/details?id=com.app.vetru.mqttdashboard)) where I could see and control all my devices. 
For my smart flows, I used Node-RED.  
After I got more and more sensors, I couldn't get a clear overview of the status of all my sensors anymore.
Then I found the solutions for this where people created floor plans of their house and add their sensor statuses and controls as layers on top of it. 
This was possible with the application Home Assistant (not-so-famous yet in 2020) and so I began with it. 
I created the [floor plans](homeassistant_dashboard_floorplan) I wanted, and I also really liked the dashboards with their endless possibilities.

I use Home Assistant pure as a presentation layer. That's why you don't find Home Assistant flows here, but only Node-RED flows.
In the [Node-RED - Home Assistant integrations](../node-red/node-red_home-assistant) section you find all kinds of integrations between Node-RED and Home Assistant.