---
title: "Node-RED + Home Assistant: Update helper toggle"
category: Node-RED
tags: Node-RED, Home Assistant
---

{% capture imgHeight %}50{% endcapture %}

# Node-RED + Home Assistant: Update helper toggle


<a href="node-red_home-assistant">
<img src="../homeassistant/images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px">
<img style="float: right;margin-left:15px" src="images/node-red_logo.png" height="100px" alt="Node-RED logo">
</a>

See [initial setup](node-red_home-assistant#initial-setup) for the required additional nodes and setup.

---

## Update a Home Assistant helper entity toggle from Node-RED

Let's say you have a customer helper toggle with the name `input_boolean.toggle` and with Node-RED you want to set it to `off`.
Create your flow and add the Home Assistant API node.
```
Server     Home Assistant
Protocol   HTTP
Method     POST
Path       states/input_boolean.toggle
Data       [{}]{"state":"off"}
```
---
[<< See also my other Node-RED Home <-> Assistant pages](node-red_home-assistant)