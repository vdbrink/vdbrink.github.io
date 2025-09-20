---
title: "Retrofit kitchen appliances to make them smarter"
description: "Retrofit kitchen appliances, like dishwasher, stove, refrigerator, to make them smarter."
category: Projects
tags: [dumb, smart, kitchen, appliances, stove, dishwasher, oven, refrigerator]
image: /projects/images_kitchen_appliances/kitchen.jpg
---

# Retrofit Kitchen Appliances
*Make your kitchen smarter*

## Introduction

<a href="images_kitchen_appliances/kitchen.jpg">
<img src="images_kitchen_appliances/kitchen.jpg" alt="kitchen with appliances" width="200px" style="float: right;margin-left:15px"/>
</a>
As a home automation enthusiast, I try to make as many appliances as possible smart.
Not only by buying smart appliances, but also by making my existing appliances smarter by adding sensors to it.

The advantage of this approach is that I can get started right away. 
Smart appliances are often connected to the cloud and come with security and privacy risks. 
And the selection of models is limited, also they are usually much more expensive.

The downside is that you don’t get all the advanced smart features, only some basic ones.

What matters most in a smart device depends on each personal preferences: is it features, privacy, price, or durability?\
For me, it’s privacy (running everything locally) and durability.\
On this page, I describe how I’ve added basic sensors to each of my "dumb" kitchen appliances to make them a bit smarter.

If you know more automations you can apply in your kitchen, please let me know!

>Note: If you add ESPs inside these appliances to overrule the buttons and read the display from intern, you can make them even smarter, but that has an impact on the safety and assurance of it. 
This is out of scope here. 
If you've done it yourself, please let me know. 
I'm still very interested in it!

---

## Table of Contents
<!-- TOC -->
  * [Introduction](#introduction)
  * [Dishwasher](#dishwasher)
  * [Oven](#oven)
  * [Refrigerator](#refrigerator)
  * [Stove / cooker hood](#stove--cooker-hood)
  * [Ventilation system](#ventilation-system)
  * [Sink](#sink)
  * [Coffee machine](#coffee-machine)
  * [Lights](#lights)
<!-- TOC -->

---

## Dishwasher

<img src="/hardware_hacks/images_dishwasher/dishwasher.webp" alt="dishwasher" width="200px" style="float:right;margin-left:15px;">

**Automations**

Notification and/or announcement when the dishwasher is ...
* finished.
* not emptied yet after X time after it's finished.
* not started yet today when the time is after X.

<br>

<a href="/ideas/images/dishwasher_doorsensor.jpg">
<img src="/ideas/images/dishwasher_doorsensor.jpg" alt="dishwasher door sensor" height="200px"/>
</a>

**Sensors**

* With a [smart plug](/buy/smart_home_best_buy_tips#smart-socket) with energy consumption monitoring, you can track if it (still) running.
* With a [contact sensor](/buy/smart_home_best_buy_tips#contact-sensor) on the door, you can check if the door is opened (and probably emptied).
* With a [lux sensor](/buy/smart_home_best_buy_tips#lux-sensor) next to the light underneath it, you can check if it indicates it's still running (as an alternative for the smart plug).

**Not possible**

Automations which you can't make this way:
* Start it at a specific moment, like when the energy price is low or just during the night. Then you need a real smart dishwasher. 

---

## Oven

<img src="images_kitchen_appliances/oven.webp" alt="oven" width="200px" style="float:right;margin-left:15px;">

**Automations**

Notification and/or announcement when the oven ...
 
* reaches his preset temperature.
* still on after X time.

<br>

<img src="/ideas/images/notification.jpg" alt="notification" height="100px"/>

**Sensors**

* With a [smart plug](/buy/smart_home_best_buy_tips#smart-socket) with energy consumption monitoring. 
The power consumption drops when he reaches his temperature.

**Suggestions**

* With a [contact sensor](/buy/smart_home_best_buy_tips#contact-sensor) on the door, you can track how long something is in the oven.
  * But I don't know if this is really reliable because you can open the door in between also.
  You don't know if you get your meal out of the oven or not. 

---

## Refrigerator

<img src="images_kitchen_appliances/refrigerator.webp" alt="oven" width="200px" style="float:right;margin-left:15px;">

**Automations**

Notification and/or announcement when the refrigerator ...

* the door is opened too long. (Not closed correct)
* the door isn't opened in the evening to get some meat/fish from the freezer for the meal of the next day. 
Check my [Mealie](/homeassistant/homeassistant_dashboard_mealie) page for this implementation.
* the machine doesn't use the normal energy consumption

<br>

**Sensors**

* With a [temperature sensor](../buy/smart_home_best_buy_tips#temperature-sensor) inside, you can track an open door.
* With a [contact sensor](/buy/smart_home_best_buy_tips#contact-sensor) on the door, you can track an open door.
* With a [smart plug](/buy/smart_home_best_buy_tips#smart-socket) with energy consumption monitoring, you can track if it uses the expected power.

<br>

---

## Stove / cooker hood

<img src="images_kitchen_appliances/stove_cookerhood.avif" alt="stove" width="200px" style="float:right;margin-left:15px;">

**Automations**

Notification and/or announcement when the stove ...

* detect if someone is cooking.
* exhaust fan must go on based on the temperature/humidity.

<a href="/esphome/orcon_images/stove.jpg">
<img src="/esphome/orcon_images/stove.jpg" alt="stove temperature sensor" width="200px">
</a>

**Sensors**

* With a [temperature sensor](/buy/smart_home_best_buy_tips#temperature-sensor) in the cooker hood, you can check quick changes in temperature or humidity which indicate someone is cooking.

<br>

**Question**

Do you have automated the lights in the extractor hood?\
Please let me know how you did it!

---

## Ventilation system

I automated an extra remote of my ventilation system to control it also via my server.

<a href="/esphome/orcon_images/orcon_compact_10rhb_esp_controlled.jpg">
<img src="/esphome/orcon_images/orcon_compact_10rhb_esp_controlled.jpg" alt="ventilation system automated" width="250px">
</a>

Check out my [dedicated page](/esphome/orcon_mechanic_ventilation) about this automation project.

---

## Sink

<img src="images_kitchen_appliances/sink.avif" alt="oven" width="200px" style="float:rightmargin-left:15px;">

**Automations**

Notification and/or announcement when the sink ...

* leak detector under the sink. ([leak sensor](/buy/smart_home_best_buy_tips#leak-sensor) or a modified [contact sensor](/buy/smart_home_best_buy_tips#contact-sensor)).
  I have a [dedicated page](/zigbee/zigbee_water_leak_sensor) about how I created this sensor.

  <br>
  
  <img src="/ideas/images/water_leak.jpg" alt="water leak" width="200px">

---

## Coffee machine

<img src="images_kitchen_appliances/coffee_machine.jpg" alt="oven" width="200px" style="float:right;margin-left:15px;">

**Automations**

Notification and/or announcement when the coffee machine ...

* count the brewed coffees to order new cups. ([vibration sensor](/buy/smart_home_best_buy_tips#vibration-sensor))

<br>


<br>



---

## Lights

<img src="images_kitchen_appliances/kitchen.jpg" alt="oven" width="200px" style="float:right;margin-left:15px;">

To automate the light, this really depends on what kind of lights you have in your kitchen.


<br>


<br>


---

Do you have any other cool kitchen automations running?
Please let me know!