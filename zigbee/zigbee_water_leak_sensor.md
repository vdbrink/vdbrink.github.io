---
title: DIY Zigbee leak detector
category: Zigbee
tags: [Zigbee, diy, "Home Assistant", contact, sensor, detector, Aqara, leak]
image: /zigbee/images_leak/leak_sensor_in_action.jpg
---

# DIY Zigbee leak sensor
*Based on a Zigbee contact sensor and two wires*

## Introduction

<img src="images_leak/leak_sensor_in_action.jpg" alt="diy Zigbee leak sensor" height="150px" style="margin-left:15px;float:right"/>
A have a water filter behind my kitchen closets, and I want to detect if there is any leak because you don't see it and have no easy access to it. When you find out it leaks it tool late. It never happened, but in case of a disaster happened I want to know it direct!
I had no leak sensor direct available, and they were at that time quite expensive, but I still had some contact sensors lying around. 

Water conducts current, so I thought I could also create from a contact sensor a leak sensor with just a small modification, and so I did.

Nowadays, these [leak sensors](../buy/smart_home_best_buy_tips#leak-sensor) are widely available, and you can buy them for the same price as a contact sensor but if you want to create one based on a contact sensor it's also possible ;) 

<a href="../buy/smart_home_best_buy_tips#leak-sensor">
<img src="../buy/images_zigbee/leak_sensor.webp" alt="leak sensor" height="150px" /></a>

---

## Required hardware

You only need a Zigbee contact sensor and two wires:

[Zigbee contact sensor](../buy/smart_home_best_buy_tips#contact-sensor)

<a href="../buy/smart_home_best_buy_tips#contact-sensor">
<img src="../buy/images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" width="200px">
</a>

[(Dupont) wires](../buy/esphome_diy#dupont)

<a href="../buy/esphome_diy#dupont">
<img src="../esphome/images/dupont_cable_mix.webp" alt="Dupont male to male wires" width="200px"/></a>

**Tools:**

[Soldering iron](../buy/esphome_diy#soldering-iron)

<a href="../buy/esphome_diy#soldering-iron">
<img src="../esphome/images/soldering_iron.webp" alt="soldering iron" width="200px"/></a>

[Soldering iron tin](../buy/esphome_diy#soldering-tin-wire)

<a href="../buy/esphome_diy#soldering-tin-wire">
<img src="../esphome/images/soldering_tin_wire.png" alt="soldering tin wire" width="200px"/></a>

---

## Assemblage

Open the contact sensor. Now you see the black part, this is a reed switch.
When you hold a magnet close enough to it, it will make a closed circuit.

<img src="images_leak/leak_sensor_reed_switch.jpg" alt="reed switch"/>

Use two dupont cables, remove the connectors at one end and remove for a centimeter at the end the isolation 
and solder them to the reed switch.

<img src="images_leak/leak_sensor_assemblage.jpg" alt="diy Zigbee leak sensor assemblage" height="450px"/>

<img src="images_leak/leak_sensor_in_action.jpg" alt="diy Zigbee leak sensor in action" height="450px"/>