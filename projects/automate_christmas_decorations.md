---
title: "Automate Christmas decorations"
description: "How to automate all your Christmas decorations."
category: Projects
tags: [battery, Christmas, smart home, socket, lights, usb hub, decorations, Halloween]
image: /projects/images_christmas_decorations/banner_christmas.png
---
# Automate Christmas decorations

<img src="/projects/images_christmas_decorations/banner_christmas.png" alt="Christmas banner" width="450px" />

## Introduction

<a href="images_christmas_decorations/christmas_tree.jpg">
<img src="images_christmas_decorations/christmas_tree.jpg" alt="Christmas tree" width="90px" style="margin-left:15px;float:right" /></a>

During the Christmas season, we have a lot of extra lights and other powered decorations in and around our house. 
**Christmas trees**, **battery powered decorations** and **outside lights** to cheer up the dark days.

It's a lot of work to control them manually every day. 
I've made my life easier by automating them all.
On this page, you can read how I did this to enjoy the Christmas season even more in a more relaxed way!

> **_NOTE:_** I used here Christmas as my example project, but these tips can be used for any kind of (battery/plug/outside) powered projects like Halloween automations.

---
## Table of Contents
<a href="images_christmas_decorations/door_deco_lights2.jpg">
<img src="images_christmas_decorations/door_deco_lights2.jpg" alt="Christmas door light" height="180px" style="margin-left:15px;float:right" /></a>

<!-- TOC -->
  * [Advantages](#advantages)
  * [My old situation](#my-old-situation)
  * [My solutions](#my-solutions)
    * [Battery powered decorations](#battery-powered-decorations)
    * [Christmas tree lights string](#christmas-tree-lights-string)
    * [Lights with a power plug](#lights-with-a-power-plug)
    * [Outdoor lights](#outdoor-lights)
  * [Other solutions](#other-solutions)
<!-- TOC -->

---
## Advantages

<a href="images_christmas_decorations/ani_snow_globe.gif">
<img src="images_christmas_decorations/ani_snow_globe.gif" alt="snow globe" width="100px" style="margin-left:15px;float:right" /></a>

There are a lot of advantages to automate all the lights and electric decorations. 
It's not only about turning them on and off.
It's more than you can think of, like:
* Don't start every day turning on all the (battery powered) decorations one-by-one manually and at the end of the day turning them off again;
    * _No use of batteries, no useless power usage, more time for other things, more comfort_
    * _Only downside: No morning gymnastics to switch all the buttons in each corner_
* Come downstairs, and all the cozy lights are (just) on;
    * _More joy, quicker to the coffee!_
* Outside lights only on when it becomes dark;
    * _On a sunny day it doesn't make sense to put also all outside lights on_
* Activate something (like playing Christmas music, or a dancing Santa) when someone shows up at your doorstep;
    * _A smile on their face_     
* No lights on when there is nobody around for a while;
    * _No useless power usage, which saves money_
* Spend more time in bed and sleep like a baby;
    * _More rest, more energy, less coffee_
* Fellow house members have no one to blame when the cozy lights are off because you were in a hurry to go to work;
    * _More harmonie, for a better Christmas spirit_
* Less energy consumption, no batteries that need to be replaced which saves money. You still need to buy once the hardware to automate it, but in the end it earns itself back very fast;
    * _Save money to spend on Christmas presents or extra [home automation hardware](/buy/smart_home_best_buy_tips)_
<br>
  
These advantages must be enough excuses to automate these decorations. I even convinced myself again!

---
## My old situation

<a href="images_christmas_decorations/tree_light_plug_button.jpg">
<img src="images_christmas_decorations/tree_light_plug_button.jpg" alt="Christmas light plug" width="100px" style="margin-left:15px;float:right" /></a>

Before I automated it, there were a lot of frustrations I had to deal with.

For example, my biggest **Christmas tree** lights have two light strings, and each has a power socket with a button which controls seven different flash modes. 
Each time you press the button, it switches from mode. 
And the normal required non-disco mode is the last mode! So I had to press every day that button seven times. 
And that for two strings of light. For only one tree.
Those sockets are also out of sight under the tree, so you need to dive under the tree to reach them.
And when you press one time too much, you can start all over again! Aargh!

<a href="images_christmas_decorations/dummy_battery_example.jpg">
<img src="images_christmas_decorations/dummy_battery_example.jpg" alt="Christmas light on battery" width="100px" style="margin-left:15px;float:right" /></a>

We also have a lot of **battery powered** decorations.
I could use rechargeable batteries, but then I still have to turn all the decorations on and off manually every day to enjoy it.
As a result, during the season they are only a few times on. And if you forgot one, it ends up with empty batteries after Santa was singing and dancing all night long.

The **plug powered lights** are easy to automate. 
Plug them into a good old-fashioned timers, everybody had already automated it in the previous century like in Home Alone! Every day on exact the same time.

<img src="images_christmas_decorations/home_alone_automatic_timers.gif" alt="Home Alone automatic timers" width="450px" />

Two decades later, we can use "smarter" solutions. 
Like control them more dynamically based on the daylight level or motion and occupancy detection.

I, as a home automation geek, I was (previous year) looking for solutions and found them for all my decorations and lights! 
Read along how I did that.

---

## My solutions

As mentioned, I have multiple types of Christmas decorations.\
Which result in four power types to automate:

<a href="images_christmas_decorations/random_plugs.jpg">
<img src="images_christmas_decorations/random_plugs.jpg" alt="random plugs" width="120px" style="margin-left:15px;float:right" /></a>

* [Battery powered decorations](#battery-powered-decorations), 15+ pieces
* [Christmas tree lights](#christmas-tree-lights-string) with a button to turn it on and change light mode to get to the right mode.
* [Decoration/lights powered with a power plug](#lights-with-a-outlet-plug)
* [Outdoor lights](#outdoor-lights)
<br>

In the next chapters I'll describe how I automated each type.

<a href="images_christmas_decorations/home_assistant_switches.jpg">
<img src="images_christmas_decorations/home_assistant_switches.jpg" alt="random plugs" width="200px" /></a>

Now I also can control all my Christmas decorations from my phone.

---

### Battery powered decorations

There are multiple smart hardware device combinations possible to change battery powered decorations . Here are some examples.

#### Examples

An example of a battery powered light is a garland with lights above the door. 
Automated with a battery-to-usb set (a.k.a. battery eliminator/replacement), a smart usb adapter and a 5V-adapter. With the smart USB-adapter you can activate each port individually.

<a href="../buy/smart_home_best_buy_tips#battery-eliminators" target="_blank">
<img src="images_christmas_decorations/battery_to_usb.jpg" alt="battery to usb" height="150px"/></a>
 &nbsp;
<a href="../buy/smart_home_best_buy_tips#usb-adapter-switch" target="_blank">
<img src="../zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter switch" height="150px" /></a>
&nbsp;
<a href="../buy/smart_home_best_buy_tips#power" target="_blank">
    <img src="../esphome/images/5v_power_adapter.jpg" alt="5V USB power adapter" height="150px"/>
</a>
<br>
<img src="images_christmas_decorations/door_deco_lights.jpg" alt="door deco light string" height="300px" />

<a href="images_christmas_decorations/christmas_lights.jpg">
<img src="images_christmas_decorations/christmas_lights.jpg" alt="Christmas light balls string" height="300px" /></a>

Another example is a battery powered light in a bottle. I use for this a battery-to-plug set and a smart socket.

<a href="../buy/smart_home_best_buy_tips#battery-eliminators" target="_blank">
<img src="images_christmas_decorations/battery_replacement_to_socket.jpg" alt="battery to plug" height="150px"/></a>
&nbsp;
<a href="../buy/smart_home_best_buy_tips#usb-adapter-switch" target="_blank">
<img src="images_christmas_decorations//blitzwolf_shp-15_zigbee_socket.jpg" alt="Zigbee smart EU socket" height="150px" /></a>
<br>
<img src="images_christmas_decorations/lights_in_a_bottle.jpg" alt="bottle with lights" height="300px" />
<a href="images_christmas_decorations/battery_powered_deco.jpg">
<img src="images_christmas_decorations/battery_powered_deco.jpg" alt="battery powered decoration" height="300px"/></a>

If you have multiple battery power devices close to each other, and you want to automate them the same way, you can use an active powered USB-hub.
This hub can be powered with a smart socket to control all the connected devices at once.

<a href="images_christmas_decorations/usb_hub.jpg">
<img src="images_christmas_decorations/usb_hub.jpg" alt="USB hub" height="300px"/>
</a>
&nbsp;
<a href="../buy/smart_home_best_buy_tips#usb-adapter-switch" target="_blank">
<img src="images_christmas_decorations//blitzwolf_shp-15_zigbee_socket.jpg" alt="Zigbee smart EU socket" height="150px" />
</a>

#### Hardware suggestions

As you could read, there are multiple combinations possible.

* [Battery to USB / battery eliminator](../buy/smart_home_best_buy_tips#battery-eliminators)
   
   <a href="../buy/smart_home_best_buy_tips#battery-eliminators" target="_blank">
        <img src="images_christmas_decorations/battery_eliminator.webp" width="300px" alt="battery eliminator" />
   </a>

* [5V EU USB power adapter](../buy/smart_home_best_buy_tips#power)

    <a href="../buy/smart_home_best_buy_tips#power" target="_blank">
        <img src="../esphome/images/5v_power_adapter.jpg" alt="5V USB power adapter" width="200"/>
    </a>

* [EU Smart power socket. I use the Zigbee BlitzWolf EU SHP-15](../buy/smart_home_best_buy_tips#smart-socket)

    <a href="../buy/smart_home_best_buy_tips#smart-socket" target="_blank">
        <img src="images_christmas_decorations/blitzwolf_shp-15_zigbee_socket.jpg" alt="BlitzWolf EU SHP-15" width="200px"/>
    </a>

* [Active USB hub](../buy/esphome_diy#usb-hub)

    <a href="../buy/esphome_diy#usb-hub" target="_blank">
        <img src="/buy/images_diy/usbhub.webp" alt="USB hub" width="200px"/>
    </a>

* [USB adapter](../buy/smart_home_best_buy_tips#usb-adapter-switch)

    <a href="../buy/smart_home_best_buy_tips#usb-adapter-switch" target="_blank">
    <img src="../zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter switch" height="150px" /></a>

    This actuator can toggle the power state of each USB port individual.

    {{imgBasket}}<a href="../buy/smart_home_best_buy_tips#usb-adapter-switch" target="_blank">Zigbee USB adapter switch - Tuya (AliExpress)</a>

---

### Christmas tree lights

A two-pin EU outlet plug WITHOUT any button to select a mode, it's just always on, for a Christmas light string with the specs 31V and 3.6W.

<a href="https://s.click.aliexpress.com/e/_mstDarg" target="_blank">
<img src="images_christmas_decorations/tree_light_plug_no_button.avif" alt="christmas light adapter" width="200px"/></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_mstDarg" target="_blank">link 1</a>

---

### Decoration/lights powered with a power plug


* [Smart power socket. I use the Zigbee BlitzWolf EU SHP-15](../buy/smart_home_best_buy_tips#smart-socket)

  <a href="../buy/smart_home_best_buy_tips#smart-socket" target="_blank">
    <img src="/esphome/orcon_images/blitzwolf_shp-15_zigbee_socket.jpg" alt="smart socket" width="200px"/>
    </a>

---

### Outdoor lights

For outdoor wall sockets, there are also water-resistant Zigbee smart sockets.

<img src="images_christmas_decorations/front_door_light.jpg" alt="Front door lights" width="200px" />

<br>

* Nous outdoor Zigbee EU power socket has two ports, where each socket can be controlled individual and has power consumption measurements.
 
  {{imgBasket}}<a href="https://www.amazon.de/dp/B0CN8FDSKP" target="_blank">Zigbee dual port power outdoor socket with power measurement - Nous (Amazon.de)

  <img src="../buy/images_zigbee/outdoor_socket_A4Z.jpg" alt="Nous A4Z ZigBee Outdoor Smart Socket" height="150px" /></a>

* Silvercrest has an outdoor Zigbee EU power socket without power consumption measurements.

  {{imgBasket}}<a href="https://www.amazon.de/dp/B0BG8HSPTJ" target="_blank">Zigbee outdoor socket - Silvercrest SWSA (Amazon.de)

  <img src="images_christmas_decorations/silvercrest_outdoor_socket.jpg" alt="Silvercrest ZigBee Outdoor Smart Socket" height="150px" /></a>

---

## Other solutions

Do you have other solutions to automate your Christmas decorations? 
Please let me know!

---

Links to other sections of this blog site.

[Main page](../index) | [Other projects](index) | [Home Assistant](../homeassistant/index) | [ESPHome](../esphome/index) | [Node-RED](../node-red/index)