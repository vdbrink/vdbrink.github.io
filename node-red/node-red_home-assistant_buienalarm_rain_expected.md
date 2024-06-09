---
title: "Node-RED + Home Assistant: Rain expected"
category: Node-RED
tags: [Node-RED, Home Assistant, rain, buienalarm, regen, buienradar]
---

{% capture imgHeight %}50{% endcapture %}

# Node-RED + Home Assistant: Rain expected


<a href="node-red_home-assistant">
<img src="../homeassistant/images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px">
<img style="float: right;margin-left:15px" src="images/node-red_logo.png" height="100px" alt="Node-RED logo">
</a>

See [initial setup](node-red_home-assistant#initial-setup) for the required additional nodes and setup.

---

## Skylight close based on HA Buienradar entity
You need to install the 'Neerslag App' integration in HA.
Now you have the entity sensor.neerslag_buienalarm_regen_data with this as data.
The field start_human is the current time and each value in precip is the amount of expected rain for another 5 minutes.

```
data:
success: true
start: 1687884300
start_human: '18:45'
temp: 20
delta: 300
precip:
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0
  - 0.1
  - 0
  - 0
  - 0
  - 0
  - 0
levels:
  light: 0.25
  moderate: 1
  heavy: 2.5
```
---
[<< See also my other Node-RED <-> Home Assistant pages](node-red_home-assistant)