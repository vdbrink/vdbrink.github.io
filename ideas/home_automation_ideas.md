---
title: "Home Automation Ideas"
description: "Home automation ideas to make your home smart"
category: Ideas
tags: [ideas, smart, home, automations]
image: /ideas/images/idea.png
---

# Home Automation Ideas
*to make your home smart*

<img src="images/idea.png" style="float: right;" alt="Idea" height="200px">

Below is a list of automation ideas, based on devices and locations in and around the house. <br><br>
For already a few years, I follow various forums, newsgroups and videos to gather new ideas, which I then incorporate into my own automations.

This is a constant growing list. I'll update the list with new ideas now and then.

I hope I can inspire you with some new home automation ideas you can integrate in your home.

<br>

---

## Table of Contents
<!-- TOC -->
  * [Introduction](#introduction)
  * [Devices and locations to be automated](#devices-and-locations-to-be-automated)
    * [Mailbox](#mailbox)
    * [Washing machine / dryer](#washing-machine--dryer)
    * [Living room](#living-room)
    * [Christmas lights](#christmas-lights)
    * [Mechanical ventilation](#mechanical-ventilation)
    * [Laundry room](#laundry-room)
    * [(Bed)rooms](#bedrooms)
    * [Bathroom](#bathroom)
    * [Kitchen](#kitchen)
      * [Lights](#lights)
      * [Dishwasher](#dishwasher)
      * [Oven](#oven)
      * [Refrigerator](#refrigerator)
      * [Stove](#stove)
      * [Sink](#sink)
      * [Coffee machine](#coffee-machine)
    * [Home office](#home-office)
    * [Closet / pantry / storage / stairs](#closet--pantry--storage--stairs)
    * [Drawer](#drawer)
    * [Aquarium](#aquarium)
    * [Outside](#outside)
      * [Front yard](#front-yard)
      * [Car](#car)
      * [Putting out the bin](#putting-out-the-bin)
  * [(Dutch) Inspiration videos](#dutch-inspiration-videos)
<!-- TOC -->

---

## Introduction
I've started with a few automations for lights in the living room, the mailbox, and the washing machine.
And I've continually expanded by adding more and more sensors and actuators, which result in 100+ automation flows running in my home.

Criteria for my own automations are:
* Capable of running locally (no-cloud); <img src="images/nocloud.png" style="float: right;" alt="no cloud" height="80px">
* It can also be controlled in the traditional way with "old-fashioned" buttons, so that everyone in the house can operate everything, without an app and even if the smart server is down;
* Works regardless of who is present (no extra trackers or apps needed).

---

## Devices and locations to be automated

### Mailbox
* Notification when mail is delivered. ([contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) with a separate magnet on the flap)
* Notification if mail is sticking out. (if the [contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) is broken and not closed again after 1 minute)
* Send a picture of the mailbox after something is delivered.
<br>
<img src="images/mailbox.jpg" alt="mailbox" height="200px"/>

---

### Washing machine / dryer
* Notification when the washing machine/dryer is finished. (based on a [smart plug](../buy/smart_home_best_buy_tips#smart-socket) with energy meter)
* Measure how long the machine is running. (based on a [smart plug](../buy/smart_home_best_buy_tips#smart-socket) with energy meter)
* Measure what the costs are. (based on a [smart plug](../buy/smart_home_best_buy_tips#smart-socket) with energy meter)
* Notification when the machine is not emptied yet after X time. ([contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) on the door)
<br>
<img src="images/washing_machine_grafana.png" alt="energy consumption" height="350px"/>

---

### Living room
* Close the curtains in the evening. (smart curtains, [lux sensor](../buy/smart_home_best_buy_tips#lux-sensor))
* Open the curtains in the morning. (smart curtains, [lux sensor](../buy/smart_home_best_buy_tips#lux-sensor))


* Lights fading in and out, according to twilight. ([smart lights](../buy/smart_home_best_buy_tips#lights) + [lux sensor](../buy/smart_home_best_buy_tips#lux-sensor) to detect brightness from inside and outside)
* Lights automatically turning off at bedtime. ([smart lights](../buy/smart_home_best_buy_tips#lights) + switch [button](../buy/smart_home_best_buy_tips#portable-button) near the bed)
* Lights are automatically turned off when no one is in the living anymore.
* Dimming lights after a few minutes when the movie player is on. 
Brightness increases again when someone is detected in the kitchen. ([smart plug](../buy/smart_home_best_buy_tips#smart-socket) + [motion sensor](../buy/smart_home_best_buy_tips#motion-sensor))
 <br><a href="../buy/smart_home_best_buy_tips#motion-sensor"><img src="images/motion_sensor.png" alt="motion sensor" height="150px" /></a>

---

### Christmas lights
* Connecting battery-operated Christmas decorations to the power outlet. (equipped with [battery eliminators](../buy/smart_home_best_buy_tips#battery-eliminators) and multiple connected to an active USB hub, powered by a [smart plug](../buy/smart_home_best_buy_tips#smart-socket) for automation)
* Christmas tree lights. (replace the default power switch with always on mode switch and add a [smart plug](../buy/smart_home_best_buy_tips#smart-socket))
<br/><br/>
<a href="../buy/smart_home_best_buy_tips#battery-eliminators">
<img src="images/christmas_battery.jpg" alt="Christmas decoration lights battery powered" height="350px" />
</a>

---

### Mechanical ventilation
* Depends on which area's the ventilation system is connected to.
  In my case, my bathroom humidity/temperature, kitchen humidity/temperature,
  kitchen/bathroom temperature/humidity difference, duration of a toilet visit.
  ([lux](../buy/smart_home_best_buy_tips#lux-sensor) value above threshold x for time Y,  [temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor), 
[MV control via an additional remote linked to an ESP](../esphome/orcon_mechanic_ventilation))
<br>
<img src="images/ventilation_socket.jpg" alt="ventilation" height="350px" />

---

### Laundry room
* Lights on/off when entering/leaving. ([door contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) + [smart light](../buy/smart_home_best_buy_tips#lights))
* Dehumidifier on based on humidity. ([humidity sensor](../buy/smart_home_best_buy_tips#temperature-sensor) + dehumidifier also turned on with a [smart plug](../buy/smart_home_best_buy_tips#smart-socket))
* Notification if the water tank of the dehumidifier is full. ([leak sensor](../buy/smart_home_best_buy_tips#leak-sensor) in the dehumidifier)

---

### (Bed)rooms
* Light on when entering (and no one is already in bed). ([door contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) + [smart light](../buy/smart_home_best_buy_tips#lights))
* LED strip just a few percentage on when going out of bed during the night. ([LED strip](../buy/smart_home_best_buy_tips#led-strip))
* Dehumidifier on in the evening if the humidity is too high. ([humidity sensor](../buy/smart_home_best_buy_tips#temperature-sensor) + dehumidifier also turned on with a [smart plug](../buy/smart_home_best_buy_tips#smart-socket))
* Notification if windows can be opened in summer when it's cooler outside than inside. (indoor + outdoor [temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor))
* Notification to open a window if the CO2 level is too high [ESP CO2 sensor](../esphome/co2_senseair_s8_sensor)
* Notification to open a window if the humidity is inside too high compared to the value outside. ([humidity sensor](../buy/smart_home_best_buy_tips#temperature-sensor) + [contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) on the window)
* Notification to close a window if heavy rain is expected within 10 minutes. (API weather forecast + [contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) on the window)

---

### Bathroom
* Notification when someone takes a shower. ([humidity sensor](../buy/smart_home_best_buy_tips#temperature-sensor) or water usage measuring)
* Detect if someone is in the bathroom. ([presence detection with mmWave sensor](../buy/smart_home_best_buy_tips#presence-detection-sensor))
* Water consumption. (Water meter reader)
* Change light color when someone is too long in the shower. (Water consumption, [presence](../buy/smart_home_best_buy_tips#presence-detection-sensor), [LED strip](../buy/smart_home_best_buy_tips#led-strip))

---

### Kitchen

#### Lights
* Lights on, based on presence + light. ([motion sensor](../buy/smart_home_best_buy_tips#motion-sensor) + [lux sensor](../buy/smart_home_best_buy_tips#lux-sensor) + normal LED strip with a [smart plug](../buy/smart_home_best_buy_tips#smart-socket) or smart [LED strip](../buy/smart_home_best_buy_tips#led-strip))
 <br>
 <img src="images/kitchen_lights.jpg" alt="kitchen light" height="200px">

#### Dishwasher
* Notification when the dishwasher is finished. (based on a [smart plug](../buy/smart_home_best_buy_tips#smart-socket) with energy meter)
* Notification when dishwasher is not emptied yet after X time. ([contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) on the door)
  <br>
<a href="../buy/smart_home_best_buy_tips#contact-sensor"><img src="images/dishwasher_doorsensor.jpg" alt="dishwasher door sensor" height="200px"/></a>

#### Oven
* Notification when the oven reaches his preset temperature. (based on a [smart plug](../buy/smart_home_best_buy_tips#smart-socket) with energy meter. The power consumption drops when he reaches his temperature)
  <br>
  <img src="images/notification.jpg" alt="notification" height="100px"/>

#### Refrigerator
* Detect if the door is opened too long. ([temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor) inside or door [contact sensor](../buy/smart_home_best_buy_tips#contact-sensor))

#### Stove
* Detect if someone is cooking. ([temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor))
* Extraction fan on based on temperature/humidity. ([temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor) in the extractor hood)
<br>
<img src="../esphome/orcon_images/stove.jpg" alt="stove temperature sensor" height="200px">


#### Sink
* Leak detector under the sink. ([leak sensor](../buy/smart_home_best_buy_tips#leak-sensor) or a modified [contact sensor](../buy/smart_home_best_buy_tips#contact-sensor))
<br>
<img src="images/water_leak.jpg" alt="water leak" height="200px">

#### Coffee machine
* Count the brewed coffees to order new cups. ([vibration sensor](../buy/smart_home_best_buy_tips#vibration-sensor))

---

### Home office
* Computer screen + lights + phone charger on when you sit in the office chair. (car seat pressure sensor in the chair)
* Computer screen + lights + phone charger on when you enter the office. ([contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) at the door)
* Office lights only on when it's dark and someone is in the room. ([smart light](../buy/smart_home_best_buy_tips#lights), [lux sensor](../buy/smart_home_best_buy_tips#lux-sensor), [mmWave sensor](../buy/smart_home_best_buy_tips#presence-detection-sensor) to detect a person who sits still)
* Extra heater on, based on temperature and presence. ([temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor) + chair occupancy)
* On air light so people at home know you're in a call. (calendar integration + [smart light](../buy/smart_home_best_buy_tips#lights))
* Notification to open a window if the inside temperature is too high compared to the outside temperature. ([temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor))
* Notification to open a window if the Co2 value is too high. ([Co2 sensor](../esphome/co2_senseair_s8_sensor))
* Airco on when it's too hot in- and outside. ([smart plug](../buy/smart_home_best_buy_tips#smart-socket) + [temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor))

---

### Closet / pantry / storage / stairs
* Lights on when you open a closet door. (battery-powered LED light with a PIR sensor. Not connected, but smart/convenient!)

---

### Drawer
* Notify when the drawer is opened. (Attach a [contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) behind the drawer to the closet and the magnet to the drawer itself, so when you open it, the contact gets broken and a signal is triggered)
* Notify when drawer is not yet opened today at a specific time. For example, if you have medicines in a drawer, you need to take every day. ([contact sensor](../buy/smart_home_best_buy_tips#contact-sensor))

---

### Aquarium
* Automatic turn the lights on and off. ([smart plug](../buy/smart_home_best_buy_tips#smart-socket))
* Turn the lights on when they got fed. ([contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) at the lid of the aquarium).
* Automatic feeder.
* Water quality check PH-level.
* Temperature warning if water is too hot/cold. (ESP with waterproof temperature sensor)
<br>
<img src="images/aquarium.jpg" alt="aquarium" height="200px">

---

### Outside
* Notification when it's nice weather to sit outside. (based on temperature, [humidity](../buy/smart_home_best_buy_tips#temperature-sensor), [lux sensor](../buy/smart_home_best_buy_tips#lux-sensor), sun strength from a weather station)
* Notification to close skylight or other window if it's open and rain is expected within fifteen minutes. (skylight/window [contact sensor](../buy/smart_home_best_buy_tips#contact-sensor) + API weather forecast/weather station)
* Notification to retract parasols if it's too windy. (outdoor temperature and wind speed from a weather station)
* Close the sunscreen if it's too windy. (outdoor temperature and wind speed from a weather station)
* Notification when the gate is opened. ([contact sensor](../buy/smart_home_best_buy_tips#contact-sensor))
* Turn the lights on when going outside in the evening/night. ([lux sensor](../buy/smart_home_best_buy_tips#lux-sensor), [smart light](../buy/smart_home_best_buy_tips#lights))
* Put out the sunscreen when it heats the home too much.
* Close the curtains when it heats the home too much.
* Close the curtains when it cools the home too much.

#### Front yard
* Outside lights on when:
  * Someone enters the door. (web-/doorcam with person recognition, smart outside light, [Google Coral](../buy/smart_home_best_buy_tips#google-coral-usb))
  * You connect to your wifi. (outside light)
  * You enter home-zone. (Home Assistant Companion app and outside light)
    <br><img src="images/person_detected.jpg" alt="person detected" height="250px" />

#### Car
* Notification to cover the car if the dew point is below -1 in the evening. This increases the chance of not having to scrape in the morning! (weather station)
* Notification to family when I leave work. (location positioning)
* Activate the driveway lights when you arrive home. (When enter the Home-zone, or connect to your local wifi network AND the phone bluetooth is connected to the car)
* Activate the front door lights. (see previous flow)

#### Putting out the bin
* Notification when paper/green/plastic/residual waste bin needs to be put on the street to be emptied tomorrow. (waste calendar integration)
* [Light up a LED strip](../projects/bin_day_led_strip_reminder) in the color of the waste bin which must be put on the street the next day. (waste calendar integration + [LED strip](../buy/smart_home_best_buy_tips#led-strip))

---

See also:
[Home Automation Videos](home_automation_videos) or [Zigbee Smart home - best buy tips](../buy/smart_home_best_buy_tips)