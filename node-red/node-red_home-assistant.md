---
title: "Node-RED + Home Assistant: team work"
category: Node-RED
tags: [Node-RED, Home Assistant]
---

# Node-RED + Home Assistant: team work

<a href="node-red_home-assistant">
<img src="../homeassistant/images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px">
<img style="float: right;" src="images/node-red_logo.png" height="100px" alt="Node-RED logo">
</a>

Combine the power of Node-RED and Home Assistant.

Examples:
* [Home Assistant state change -> trigger Node-RED flow](node-red_home-assistant_full_moon)
* [Node-RED + Home Assistant: Full moon trigger](node-red_home-assistant_full_moon)
* [Node-RED flow -> HA App notification](node-red_home-assistant_notifications)

[//]: # (* [Node-RED flow -> update HA helper entity]&#40;node-red_home-assistant_update_helper&#41;)

[//]: # (* [HA Rain data -> Handle entity data in Node-RED]&#40;node-red_home-assistant_buienalarm_rain_expected&#41;)

---
## Initial setup
You need to install some extra Home Assistant nodes in Node-RED, so they can communicate with each other.

### Install the extra nodes
To get data from Home Assistant you need, in Node-RED, to install the extra nodes `node-red-contrib-home-assistant-websocket`.

* Go to the hamburger menu on the top right and select the menu item "Manage pallete"
* Select the tab Install and enter "home-assistant-websocket"
* Click on the install button to install it.
* After the installation, you see a set new node in your left sidebar.

### Configure your Home Assistant server
* Go to the sidebar and open the Configuration nodes (the wheel icon).
  <img src="images_ha/nr_config_node.png" width="250px" alt="Configuration nodes in Node-RED"/>

* Under the section 'On all flows' scroll to server and double-click on the Home Assistant element.
* Define the *Base URL*, this must be the url where Home Assistant can be reached from Node-RED. If you run both in a docker in the same network, you can use the name of the docker image as host name. For example http://homeassistant:8123 Now Node-RED reach Home Assistant from inside the docker network. It's also possible to use the IP-address, but this can change, and then it access it outside the docker and via your network which can act slower.

  <img src="images_ha/config_ha_server.png" alt="config Home Assistant server in Node-RED"/>

* The *Access token* can be created when you logged in into Home Assistant. Select your user from the menu and scroll down on your profile to "Long-Lived Access Tokens" and click on Create Token. Give it a name like 'Node-RED'. Now you get the token, copy the token in the field.

  <img src="images_ha/ha_long-lived_access_token.png" width="400px" alt="Create a token in Home Assistant"/>

---

[<< See also my other Node-RED pages](index)
