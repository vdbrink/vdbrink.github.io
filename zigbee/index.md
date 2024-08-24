---
title: Zigbee
category: Zigbee
tags: [Zigbee]
image: /zigbee/images/zigbee.jpg
---

# Zigbee

Zigbee is a local smart home protocol.\
I'm a hugh fan of it because it's local and wide support. 
I have over 100 devices from all kinds of brands working together.\
Find here related information and my Zigbee [Best Buy Tips](../buy/smart_home_best_buy_tips).

---

## Links

How to create custom Zigbee sensors:

[//]: # (* [DIY Zigbee chair occupancy sensor]&#40;zigbee_chair_occupancy_sensor&#41;)
* [DIY Zigbee leak detector](zigbee_water_leak_sensor)
  * <a href="zigbee_water_leak_sensor"><img src="images_leak/leak_sensor_assemblage.jpg" alt="diy Zigbee leak sensor assemblage" height="100px"/></a>

---

## Why I chose Zigbee

On the market, there are different types of protocols to create a smart home network. Like Zigbee, Thread, Wifi, Bluetooth, Z-Wave and Matter. All with their pros and cons. You can use different protocols next to each other. I chose for one, specific Zigbee.

<img src="images/zigbee.jpg" alt="zigbee" height="60px" style="margin-left:15px;float:right"/>

This is why I choose for Zigbee:
* There is a wide range of sensor and actuator types available;
* Every Zigbee device, independent of manufacturer, it works in your network;
* The prices are low;
* It works locally, no internet is required;
* You can even link buttons direct to (a group) lamps without the need of a hub;
* Not dependent on the manufacture app, cloud or other software. When a manufacture gets bankrupt, you still can use your devices.
* It works as a mesh network, you can reach devices far away from the coordinator as long as there are enough active hops in between;
* The standard is an open protocol, you don't pay for a license fees (for Z-Wave you do) to use it;
* No compatibility issues with hardware with older or newer Zigbee versions;
* Active development on the software Zigbee2MQTT with every release a bulk of new supported Zigbee devices;

A reason why not to choose for Zigbee? I don't know :)

---

## My Zigbee coordinator

<a href="https://slae.sh/projects/cc2652/" target="_blank">
<img src="../buy/images_zigbee/slaesh_zigbee_stick_CC2652RB.jpg" alt="Slaesh's CC2652RB stick" height="150px" style="margin-left:15px;float:right"/></a>

Since 2020, I've run non-stop my Zigbee network with the {{imgBasket}}<a href="https://slae.sh/projects/cc2652/" target="_blank">Slaesh's CC2652RB stick (Slae website)</a> without any issues, 
it's a very reliable stick.
My network grew to 120+ devices today, and it still runs fast.

To avoid interference with Bluetooth or Wifi,
it's better to move the stick away from the server. This is recommended for every stick.
You can use a {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_m0Tzory" target="_blank">20 cm USB A extension cord (AliExpress)</a> for it.

---

## Best Buy Tips

I create my [Zigbee Smart home - Best Buy Tips](../buy/smart_home_best_buy_tips) with all kinds or Zigbee hardware that I like and advice to buy for others.
After buying and using them, on a daily basis, by myself. 
I have more than 120 Zigbee devices and some running already for more than 4 years non-stop.

<a href="../buy/smart_home_best_buy_tips">
<img src="../buy/images_zigbee/zigbee_banner.png" width="500px"/>
</a>

---

## Zigbee2MQTT

<img src="images/zigbee2mqtt.png" alt="Zigbee2MQTT" height="150px" style="margin-left:15px;float:right"/></a>
Zigbee2MQTT is the application which retrieves the data from the coordinator and convert the data
to a json format and push that data to a MQTT topic.

You can also send data to sensors on their topic to define settings or update the current status.
