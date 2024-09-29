---
title: "Automate Christmas decorations"
description: "How to automate all your Christmas decorations."
category: Projects
tags: [battery, Christmas, smart socket, usb hub, wall outlet]
#image:/projects/images_christmas_decorations/banner.png
---
# Automate Christmas decorations

## Introduction

<img src="images_christmas_decorations/christmas_tree.jpg" alt="Christmas tree" width="200px" style="margin-left:15px;float:right" />
During the Christmas season, we have a lot of extra lights around the house. Like Christmas trees, battery powered decorations and outside lights to cheer up the dark days.

<br>

As an automation geek, Last year I was looking for solutions to automate all these extra season lights. 
Not start the day by turning on all the lights manually and end the day with turning them off again manually. 
And when there is no one around for a while, why should the lights be on? 
A waste of energy!

We also have a lot of **battery powered** decorations. I could use rechargeable batteries, but then I still have to turn them all the decorations on and off manually every day to enjoy it. This could be done better in an automated way!

<img src="images_christmas_decorations/tree_light_plug.jpg" alt="Christmas light plug" width="200px" style="margin-left:5px;float:right" />

My **Christmas tree** lights have a power socket with a button and with seven different modes. Each time you press the button, it switches from mode. 
And the normal required non-disco mode is the last mode! So I had to press every day that button seven times. 
And that for two strings of light. 
When you press one time too much, you can start all over again! Aargh!

The **plug powered lights** are easy to automate. 
Plug them into a good old fashioned timer like everybody had already in Home Alone in the previous century!

<img src="images_christmas_decorations/home_alone_automatic_timers.gif" alt="Home Alone automatic timers" width="450px" />

Two decades later, we can use "smarter" solutions. 
Like control them more dynamically based on the daylight level or motion detection.

There should be a better ways to automate all these lights!\
Yes, there are! 
On this page you can read how I achieved this.

Enjoy the Christmas season even more by automate it all!

<br/>

---
## Table of Contents
<!-- TOC -->
  * [My types of Christmas decoration power](#my-types-of-christmas-decoration-power)
    * [Battery powered decorations](#battery-powered-decorations)
    * [Christmas tree lights plug and a button](#christmas-tree-lights-plug-and-a-button)
    * [Lights with a outlet plug](#lights-with-a-outlet-plug)
    * [Outdoor lights](#outdoor-lights)
<!-- TOC -->

---

## My types of Christmas decoration power

As described in the introduction, I have multiple types of Christmas decorations.
These results in four power types to automate:

* [Battery powered decorations](#battery-powered-decorations), 15+ pieces\
 <img src="images_christmas_decorations/battery_powered_lights.jpg" alt="battery powered decoration" width="200px"/>

* [Christmas tree lights](#christmas-tree-lights-string) with a button to turn it on and change light mode to get to the right mode\
  <img src="images_christmas_decorations/tree_light_plug_button.jpg" alt="battery powered lights" width="200px"/>

* [Decoration lights powered with a 230V plug](#lights-with-a-outlet-plug)\
<img src="images_christmas_decorations/plug_powered_lights.jpg" alt="plug powered lights" width="200px"/>

* [Outdoor lights](#outdoor-lights)\
  <img src="images_christmas_decorations/outdoor_lights.jpg" alt="outdoor lights" width="200px"/>

In the next chapters I'll describe how I automated these types of decorations.

---

### Battery powered decorations

#### Approach

<img src="images_christmas_decorations/christmas_lights.jpg" alt="Christmas light string" height="150px" style="margin-left:15px;float:right"/>
If you have multiple battery power devices close together, and you want to automate them the same you can also use an active powered USB-hub.
You can power this hub with a wall plug and use a smart socket to control all the connected devices.

#### Hardware Requirements

<img src="images_christmas_decorations/random_plugs.jpg" alt="random plugs" height="300px" />

<a href="../buy/smart_home_best_buy_tips#battery-eliminators">
<img src="images_christmas_decorations/battery_eliminator.webp" width="300px" alt="battery eliminator" />
</a>

* [Battery to USB / battery eliminator](../buy/smart_home_best_buy_tips#battery-eliminators)

<a href="../buy/smart_home_best_buy_tips#power">
<img src="../esphome/images/5v_power_adapter.jpg" alt="5V USB power adapter" width="200"/>
</a>

* [5V USB power adapter](../buy/smart_home_best_buy_tips#power)

<a href="../buy/smart_home_best_buy_tips#smart-socket">
<img src="images_christmas_decorations/blitzwolf_shp-15_zigbee_socket.jpg" alt="BlitzWolf SHP-15" width="200px"/></a>

* [Smart power socket. I use the Zigbee BlitzWolf SHP-15](../buy/smart_home_best_buy_tips#smart-socket)

<a href="../buy/esphome_diy#usb-hub">
<img src="images_christmas_decorations/usb_hub.jpg" alt="USB hub" width="200px"/>
</a>

* [Active USB hub](../buy/esphome_diy#usb-hu)


<a href="../buy/esphome_diy#usb-adapter-switch" target="_blank">
<img src="../zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter switch" height="150px" style="margin-left:15px;float:right"/></a>

This actuator can toggle the power state of each USB port individual.

{{imgBasket}}<a href="../buy/esphome_diy#usb-adapter-switch" target="_blank">Zigbee USB adapter switch - Tuya (AliExpress)</a>

---

### Christmas tree lights string

A two-pin adapter WITHOUT any button to select a mode, it's just always on, for a Christmas light string with the specs 31V and 3.6W.

<a href="https://s.click.aliexpress.com/e/_mstDarg" target="_blank">
<img src="images_christmas_decorations/tree_light_plug_no_button.avif" alt="christmas light adapter" width="200px"/></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_mstDarg" target="_blank">link 1</a>

---

### Lights with a power plug


* [Smart power socket. I use the Zigbee BlitzWolf SHP-15](../buy/smart_home_best_buy_tips#smart-socket)

<a href="../buy/esphome_diy#usb-hub">
<img src="images_christmas_decorations/usb_hub.jpg" alt="USB hub" width="200px"/>
</a>

---

### Outdoor lights

<a href="https://www.amazon.de/dp/B0CN8FDSKP" target="blank">
<img src="../buy/images_zigbee/outdoor_socket_A4Z.jpg" alt="Nous A4Z ZigBee Outdoor Smart Socket" height="150px" style="margin-left:15px;float:right"/></a>

This outdoor Zigbee power socket, where each socket can be controlled individual and has power consumption measurements.

{{imgBasket}}<a href="https://www.amazon.de/dp/B0CN8FDSKP" target="_blank">Zigbee dual port power socket with power measurement - Nous (Amazon.de)</a>


---

Links to other sections of this blog site.

[Main page](../index) | [Other projects](index) | [Home Assistant](../homeassistant/index) | [ESPHome](../esphome/index) | [Node RED](../node-red/index)