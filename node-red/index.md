---
title: Node-RED
categories: Node-RED
tags: Node-RED, MQTT
---
# Node-RED

![Banner](images/banner.png)

Node-RED is a graphical programming tool based on blocks (nodes) which can be linked to each other. Each block can do a single task.

Node-RED has also a module system, which gives extra nodes with specific functionality.

I use it for all my automations at home. I read sensors and based on these values I act on it.
I control actuators like lights, smart sockets, ESP's or send notifications.

I use this tool for a few years and created 100+ automations from all different types and there is no automation I couldn't create with it!

For more information check also the website: https://nodered.org

---

<img style="float: right;" src="images/node-red_logo.png" alt="Node-RED logo">

Look at these Cheat Sheets where I described how you can convert values from one to another and example flows.

* [Node-RED Cheat Sheet - Basic Nodes](node-red_cheatsheet-basic_nodes)
* [Node-RED Cheat Sheet - Function Node](node-red_cheatsheet-function_node)
* [Node-RED Cheat Sheet - Grafana](node-red_grafana)


<br/>
<br/>
<br/>

---

## Advanced example
Here you see an example of a script which I use to automatic control my ventilation system.
You can read all the details about this project on the [Control an Orcon mechanic ventilation system from Home Assistant](../esphome/orcon_mechanic_ventilation) page.

<a href="../esphome/orcon_images/script_node-red.png" target="_blank">
<img src="../esphome/orcon_images/script_node-red.png" alt="Example Node-RED" style="width:500px">
</a>