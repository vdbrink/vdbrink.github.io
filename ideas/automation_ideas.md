---
title: "Automation ideas to make your home smart"
category: Ideas
tags: idea, smart, home, automation
---
# Automation ideas to make your home smart

<img src="images/idea.png" style="float: right;" alt="Idea" height="200px"></a>

Below is a list of automations, based on a device or location, that I've implemented (or plan to implement) to make my home smarter.
<br><br>
Perhaps there are some useful ideas for you too!
<br><br>

---

## Table of Contents
<!-- TOC -->
  * [Introduction](#introduction)
  * [Mailbox](#mailbox)
  * [Washing machine / dryer / dishwasher](#washing-machine--dryer--dishwasher)
  * [Oven](#oven)
  * [Living room lights](#living-room-lights)
  * [Christmas lights](#christmas-lights)
  * [Mechanical ventilation](#mechanical-ventilation)
  * [Aquarium](#aquarium)
  * [Laundry room](#laundry-room)
  * [(Bed)rooms](#bedrooms)
  * [Kitchen](#kitchen)
  * [Home office](#home-office)
  * [Outdoor](#outdoor)
  * [Closet / pantry / storage](#closet--pantry--storage)
  * [Car](#car)
  * [Putting out the bin](#putting-out-the-bin)
  * [(Dutch) Inspiration videos](#dutch-inspiration-videos)
<!-- TOC -->

---

## Introduction
I've started with a few automations for lights in the living room, the mailbox, and the washing machine.
And I've continually expanded these by adding more and more sensors and actuator, which results in also 100+ automation flows.

Criteria for my own automations are:
* Capable of running locally (non-cloud); <img src="images/nocloud.png" style="float: right;" alt="no cloud" height="80px">
* Can also be controlled in the traditional way with "old-fashioned" buttons, so that everyone in the house can operate everything, without an app and even if the smart server is down;
* Works regardless of who is present (no extra trackers or apps needed).

\
I follow various forums and newsgroups to gather new ideas, which I then incorporate into my own automations.
\
I'm in the process of documenting my automations here and putting them online. 
I've already set up so many interesting flows, and I'd like to share this knowledge to inspire people like you!

---

## Mailbox
* Notification when mail is delivered (contact sensor with a separate magnet on the flap)
* Notification if mail is sticking out (if the contact sensor is broken and not closed again after 1 minute)
<br>
<img src="images/mailbox.jpg" alt="mailbox" height="200px"/>

---

## Washing machine / dryer / dishwasher
* Notification when the washing machine/dryer/dishwasher is finished: (based on smart plug with energy meter)
<br>
<img src="images/washing_machine_grafana.png" alt="energy consumption" height="350px"/>

---

## Oven
* Notification when the oven reaches his set temperature: (based on smart plug with energy meter)

---

## Living room lights
* Lights fading in and out according to twilight (smart lights + lux sensor to detecting brightness from inside and outside)
* Lights automatically turning off at bedtime (smart lights + switch button near the bed)
* Lights automatically turning off when no one is in the living
* Dimming lights after a few minutes when the DVD player is on. Brightness increases again when someone is detected in the kitchen.

---

## Front yard
* Outside lights on when:
  * someone enters the door (web-/doorcam with person recognition, smart outside light)
  * you connect to your wifi (outside light)
  * you enter home-zone (Home Assistant Companion app and outside light)

---

## Christmas lights
* Connecting battery-operated Christmas decorations to the power outlet (equipped with battery eliminators and multiple connected to an active USB hub, powered by a smart plug for automation)
* Christmas tree lights (replace the default power switch with always on mode switch and add a smart plug)
<br/>
<img src="images/christmas_battery.jpg" alt="Christmas decoration lights battery powered" height="350px" />

---

## Mechanical ventilation
* Depends on which area's the ventilation system is connected to. In my case my bathroom humidity/temperature, kitchen humidity/temperature, kitchen/bathroom temperature/humidity difference, duration of toilet visit (lux value above threshold x for time Y) (MV control via an additional remote linked to an ESP) [Orcon mechanic ventilation](../esphome/orcon_mechanic_ventilation)
<br>
<img src="images/ventilation_socket.jpg" alt="ventilation" height="350px" />

---

## Aquarium
* Automatic turn the lights off (smart plug)
* Turn the lights on when they got feeded (contact sensor at the lid of the aquarium).
* Automatic feeder
* Water quality check PH-level
* Temperature warning if water is too hot/cold (ESP with waterproof temperature sensor)

---

## Laundry room
* Lights on/off when entering/leaving (door contact + smart light)
* Dehumidifier on based on humidity (humidity sensor + dehumidifier also turned on with a smart plug)
* Notification if the water tank is full (leakage sensor in the dehumidifier)

---

## (Bed)rooms
* Light on when entering (door contact + smart light)
* Dehumidifier on in the evening if humidity is too high (humidity sensor + dehumidifier also turned on with smart plug)
* Notification if windows can be opened in summer when it's cooler outside than inside (indoor + outdoor temperature sensor)
* Notification to open window if CO2 level is too high [ESP CO2 sensor](../esphome/co2_senseair_s8_sensor)
 
---

## Kitchen
* Extraction fan on based on temperature/humidity (temperature sensor in the extractor hood)
* Light on based on presence + light (motion sensor with lux + LED strip with smart plug)
* 
<img src="images/kitchen_lights.jpg" alt="kitchen light" height="200px">
<img src="images/water_leak.jpg" alt="water leak" height="200px">

---

## Home office
* Computer screen + lights + phone charger on when I sit on my office chair (car seat pressure sensor in the chair)
* Extra heater on based on temperature and presence (temperature sensor + chair occupancy)

---

## Outdoor
* Notification when it's nice weather to sit outside (based on temperature, humidity, lux, sun strength from weather station)
* Notification to close skylight if it's open and rain is expected within fifteen minutes (skylight contact sensor + API weather forecast/weather station)
* Notification to retract parasols if it's too windy (outdoor temperature and wind speed from weather station)

---

## Closet / pantry / storage
* Light on when you open the closet (battery-powered LED light with a PIR sensor. Not connected, but smart/convenient!)

---

## Car
* Notification to cover the car if the dew point is below -1 in the evening. This increases the chance of not have to scrape in the morning! (weather station)
* Notification to family when I leave work (location positioning)

---

## Putting out the bin
* Notification when paper/green/plastic/residual waste bin needs to be put on the street.
* Light up a LED string in the color of the waste bin which must be put on the street the next day. 

---

## (Dutch) Inspiration videos
There are more home automation geeks like me!

Here are some (Dutch) videos for inspiration:
* [Almere NL (Bright 2024)](https://youtu.be/Q2C1SlfPhKE?si=od3TQVtwhskp71oA)
* [Home tour on a range, US (Smart Home Solver 2023)](https://www.youtube.com/ZYGYG8tDaDY)
* [Home tour by Jimmy, US (Smart Home Solver 2023)](https://youtu.be/bzHdg0RLO1I?si=UwcUB_B8I0oOaBjV)
* [Home tour in Georgia, US (Smart Home Solver 2023)](https://www.youtube.com/watch?v=FkfCoRJZlHA&list=PLERasyubmasVHFLS0ZR4vdg3PVC09hE99&index=4&pp=iAQB)
* [Nieuwbouw woning volledig smart maken, deel 2 (FWD Smart Living Project 2021)](https://www.youtube.com/watch?v=W5c6haXNsic)
* [Nieuwbouw woning volledig smart maken, deel 1 (FWD Smart Living Project 2021)](https://youtu.be/Ff3z3aZfUco?si=c4Hvh6VvqGdYnDpp)
* [Installatie Hue en Google producten (Tweakers 2019)](https://www.youtube.com/watch?v=zqvJerYvlwg)
* [Huis van de oprichter van Tweakers (Tweakers 2017)](https://youtu.be/fWcDT4JISn8?si=C6t0YEN1aYmTF_lu)
* [Huis van de toekomst, met Chriet Titulaer (1989 - 2009)](https://youtu.be/dEsndb8cSn0?si=RisW8OXpGpq5MyYZ)
<br>
If you know any other great videos that inspired you, let me know via a <a href="#remarks-or-suggestions">message</a>, and I can add it also to this list!