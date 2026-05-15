---
title: "Smart and stylish notification light"
category: Home Assistant
tags: [automations, Zigbee, office, CO2, waste collect]
image: /project/images_noti_light/banner_noti_light.png
---
{% capture imgBasket %}<img src="/buy/images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

# Smart and stylish notification light

<img src="images_noti_light/banner_noti_light.png" alt="Smart and stylish notification light" width="50%">

## Introduction

I wanted for my [new office](/home_office_desk/) an indicator when the CO2 level is too high, a warning system which doesn't look like some ugly plastic box or normal lamp.
I want a more stylish item which on my desk, something that perfectly blend in with the rest on my desk.
In a normal mode, when the light is turned off, it shouldn't track attention on it.

I came up with a walnut pencil holder where I put in a small GU10 smart full color light.
I could now automate this lamp with any color, linked to any kind of notification. 
I use it for warning system when the CO2 level isn't good at the moment.

<img src="images_noti_light/smart_noti_light_ani.gif" alt="Smart and stylish notification light animation" width="50%">\
<em>Changing colors based on the current CO2 level.</em>

---

## Purposes

I use this light for my CO2 level, but this light can also be used for all kinds of different notifications.
Because the light can set to any color you can use it for different indicators.

Examples are:
* CO2 level too high, from a bit too high (orange), to way too high (red).
  * [Diy CO2 sensor - based on ESPHome with a SenseAir S8 sensor](/esphome/co2_senseair_s8_sensor)
  * [Diy CO2 sensor - based on ESPHome with a SCD40 sensor](/esphome/co2_scd40)
* Trash can day tomorrow, matching the color of the bin.
  * [Bin day - LED strip reminder](/projects/bin_day_led_strip_reminder)
* Mail is delivered.
  * [Mail delivered](/projects/smart_mailbox)
* When someone who is working at home can't be interrupted.
* Indicate a next calendar meeting will start in a few minutes.

<p></p>
 
Do you have any other purpose of a light like this? Let me know!

---
## Hardware

For this project I used just these four products:

* GU10 Zigbee full color smart light
* GU10 socket
* Power cable to power the light
* Stylish element to hide the lamp in

<p></p>
The products which are available on Amazon are bundled on these [Amazon US](https://amzn.to/4drcBqy) and [Amazon NL](https://amzn.to/4uWTsUR) pages.

### GU10 Zigbee full color smart light

Because I have a running Zigbee network, I chose for Zigbee, but this can also be replaced with a similar WiFi light. 

<a href="/buy/images_zigbee/gu10_fullcolor.jpg" target="_blank">
<img src="/buy/images_zigbee/gu10_fullcolor.jpg" alt="Zigbee smart GU10 light" width="150px"/>
</a>

{{imgBasket}}Zigbee GU10 full color light with RGB, 5W and an E14 fitting
<a href="https://s.click.aliexpress.com/e/_c3T9TMn5" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/3PLzxcm#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4nyvcWC#ad" target="_blank">(Amazon NL)</a>

### GU10 fitting

A GU10 fitting is only a holder for the light and connected to the power. 
There is no need for any big adapter or screw system to connect the lamp in the fitting, like you have with an E27 fitting.
This makes it possible to hide this lamp into something small.

<a href="images_noti_light/gu10_fitting.avif" target="_blank">
<img src="images_noti_light/gu10_fitting.avif" alt="GU10 fitting" width="150px"/>
</a>

{{imgBasket}}Ceramic lamp fitting for GU10
<a href="https://s.click.aliexpress.com/e/_c3E9CGrt" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4eQsae0#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4uiccy6#ad" target="_blank">(Amazon NL)</a>

### Power cable to GU10

A GU10 light use the EU 230V from the wall power, no need to lower the voltage first with an adapter.

<a href="images_noti_light/power_cable.avif" target="_blank">
<img src="images_noti_light/power_cable.avif" alt="230v power cable" width="150px"/>
</a>

{{imgBasket}}EU Power cable
<a href="https://s.click.aliexpress.com/e/_c3bMDrSL" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4tyCTgJ#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4wEZjQn#ad" target="_blank">(Amazon NL)</a>

### Stylish element to hide the lamp in

<a href="images_noti_light/walnut_pencil_holder.avif" target="_blank">
<img src="images_noti_light/walnut_pencil_holder.avif" alt="Walnut pencil holder" width="150px"/>
</a>

{{imgBasket}}Walnut pencil holder
<a href="https://s.click.aliexpress.com/e/_c3X7srbV" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/43hjVAp#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4wxXbJW#ad" target="_blank">(Amazon NL)</a>

---

Do you know other automation which can be linked to this light? Let me know!

<img src="images_noti_light/smart_noti_light_ani.gif" alt="Smart and stylish notification light animation" width="50%">\
<em>Switching colors from yellow (warning) to red (alert), back to green (ok again), then off.</em>