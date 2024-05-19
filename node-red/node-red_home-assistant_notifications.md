---
title: "Node-RED + Home Assistant: Mobile app notifications"
category: Node-RED
tags: Node-RED, Home Assistant, camera, companion app
---

# Node-RED + Home Assistant: Mobile app notifications


<a href="node-red_home-assistant">
<img src="../homeassistant/images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px">
<img style="float: right;margin-left:15px" src="images/node-red_logo.png" height="100px" alt="Node-RED logo">
</a>

Send a message to the Home Assistant Companion mobile app from a Node-RED flow.

See [initial setup](node-red_home-assistant#initial-setup) for the required additional nodes and setup.

---

## Companion app notification triggered by Node-RED

### Basic text notification


<img src="images_ha/.png" width="400px" alt="Create a token in Home Assistant"/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```

### With image and link notification

A Node-RED example how to show a Companion App notification and go direct to a specific dashboard. 

I use this when Frigate detects a person, which sends a MQTT message with the picture, triggers via Node-RED a Home Assistant call service node which sends a notification to my phone with the text that there is somebody at the front door together with a screenshot. When you click on the notification it opens the HA Companion app and goes to the Home Assistant dashboard with the live camera streams.

<img src="images_ha/.png" width="400px" alt="Create a token in Home Assistant"/>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io

{% endraw %}
```

---


[<< See also my other Node-RED + Assistant pages](node-red_home-assistant)