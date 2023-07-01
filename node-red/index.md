---
title: Node-RED
categories: Node-RED
tags: Node-RED, MQTT, Home Assistant
---
# Node-RED

![Banner](images/banner.png)

Node-RED is a graphical programming tool based on blocks (nodes) which can be linked to each other. 
Most nodes have an input and an output. Each node can do a single task, it can evaluate or convert the input value. 

Node-RED has also a module/plugin system, which add extra nodes with specific functionality.

I use it for all my automations. 
* I read local sensors and camera's and based on these input values I act on it.
* I control actuators like lights, smart sockets, ESP's or send notifications.
* I check online website for sales.
* I use external webservices to add extra functionality to my home automations.

I use this tool for a few years and created 100+ automations from all different types and there is no automation I couldn't create with it!

For more information check also the website: https://nodered.org

---

<img style="float: right;" src="images/node-red_logo.png" alt="Node-RED logo">

## Cheat Sheets
Look at these Cheat Sheets where I described how you can convert values from one to another and example flows.

* [Node-RED Cheat Sheet - Basic Nodes](node-red_cheatsheet-basic_nodes)
* [Node-RED Cheat Sheet - Function Node](node-red_cheatsheet-function_node)

<br/>

---

## Examples

### Basic example flows

Here you find some basic usefully example flows to control light, act on temperatures, etc.

* [Node-RED - Light flows](node-red_light_flows.md)
* [Node-RED - Temperature flows](node-red_temperature_flows.md)

###  Home Assistant integration

Here you find how to interact between Home Assistant and Node-RED.

* [Node-RED - Home Assistant integration](node-red_home-assistant.md)

### Advanced flow
Here you see an example of a script which I use to automatic control my ventilation system.
You can read all the details about this project on the [Control an Orcon mechanic ventilation system from Home Assistant](../esphome/orcon_mechanic_ventilation) page.

<a href="../esphome/orcon_images/script_node-red.png" target="_blank">
<img src="../esphome/orcon_images/script_node-red.png" alt="Example Node-RED" style="width:500px">
</a>

---
[Homepage](../index)