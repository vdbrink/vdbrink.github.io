---
title: "Node-RED - Lights on by motion"
description: "Node-RED - Turn the lights on by motion and keep it on as long as motion is detected"
category: Node-RED
tags: [Node-RED, light, flow, motion, trigger, node]
---

# Node-RED - Lights on by motion
*Keep it on as long as motion is detected*

<img style="float: right;" src="images/node-red_logo.png" height="100px" alt="Node-RED logo">

Node-RED example flow: to turn a light on when motion is detected and keep it on as long as motion is detected.

---
## Light on based on motion

Keep the lights on while there is motion detected.

![Node-RED flow](images/flows/light_on_based_on_motion.png)

You can download this flow [here](flows/light_on_based_on_motion.json).

**Scenario:**

This flow turns on the light if someone enters the room and turn it off when nobody is detected for a while.

* [MQTT node] Motion sensor
* [Change node] Filter if the motion field

<br>

**Explanation of each node:**

* **[inject node]** 

* This get node is part of the additional nodes set, named **node-red-contrib-zigbee2mqtt**. You must install this first to used it. Via the menu > Manage Palette > Palette

**Additions to this flow:**

---
## Hardware

Motion / presence sensors:


Lights:
 

---
[Table of Content ^](#table-of-contents)

[<< See also my other Node-RED pages](index)
