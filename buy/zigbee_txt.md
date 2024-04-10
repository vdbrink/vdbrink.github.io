---
title: "Smart home sensor buy tips"
category: Buy tips
tags: Buy, tips, aliexpress, banggood, batteries
---
# Sensor buy tips

What is a smart home without ears and eyes? Sensors are the digital version of those. With all this data, you can make conditions and act on it and control other devices. Those devices called 'actuators', they can be controlled and act on input data.

On the market, there are different types of protocols to create a smart home network. Like Zigbee, Thread, Wifi, Bluetooth, Zwave and Matter. All with their pros and cons.

I choose for Zigbee because of:
* There is a wide range of sensor- and actuator types available;
* Every zigbee device, independent of manufacturer, it works in your network;
* The prices are low;
* It works locally, no internet is required;
* Not dependent on the manufacture app, cloud or other software. When a manufacture gets bankrupt, you still can use your devices.
* It works as a mesh network, you can reach devices far away from the coordinator as long as there are enough active hops in between;
* The standard is an open protocol, no license fees to use it;
* No compatibility issues with older or newer Zigbee versions;
* Active development on the software Zigbee2MQTT with every release a bulk of new supported Zigbee devices;

A reason why not to choose for Zigbee? I don't know :)

---

## Zigbee coordinator

Since 2020 I run non-stop my Zigbee network with the [Slaesh's CC2652RB stick](https://slae.sh/projects/cc2652/) without any issue, it's a very reliable stick.
My network grew to 120+ devices today, and it still runs fast.

To avoid interference with Bluetooth or wifi also running on your server, it's better to move the stick away from the server. This is recommended for every stick. You can use a [20 cm USB extention cord]() for it.

---

## Contact sensor

<img src="../ideas/images/contact_sensor.jpg" alt="contact sensor" height="150px" />

A contact sensor can be placed to check if doors and windows are open or closed. The sensor knows only those two values. The contact sensor works with a "reed switch", the circuit is by default open, but when there is a magnet nearby, the internal metal closes the circuit.

The sensor can also be used attached to other sensors that also return an open or closed circuit. With this behavior, you can create also a seat sensor or a water leak sensor.

---

## Motion sensor

<img src="../ideas/images/motion_sensor.png" alt="motion sensor" height="150px" />

The traditional motion sensors work with PIR, which stands for Passive InfraRed. This sensor detects objects which sending heat, like humans and animals.  

---

## Smart socket

<img src="../esphome/orcon_images/blitzwolf_shp-15_zigbee_socket.jpg" alt="BlitzWolf SHP-15 smart socket" height="150px"/>

Smart sockets are useful to make traditional "dump" devices smart. Like a traditional standing lamp with a plug. You put it "on" and place the smart plug between the socket and wall. Now you change the switch functionality to the plug which you can be controlled automatically.

Sockets are always connected to power, this makes this sensor also a hub in the zigbee network which extends the range and coverage of your network. You can also just plug a smart socket somewhere with bad coverage to improve this. He doesn't need to be on.

A smart plug with power consumption metrics can be useful to detect the state of the machine. You don't use the on/off functionality in that case. This can be used for washing machines, dryers, dish washers, ovens etc.

I use the Zigbee BlitzWolf SHP-15 which has also power consumption measurement and a physic button to switch the state [you can buy it here](https://www.banggood.com/BlitzWolf-BW-SHP15-Zigbee-3_0-16A-3680W-Smart-Plug-Wireless-Power-Socket-Outlet-EU-Plug-APP-Remote-Control-or-Voice-Control-or-Multiple-Timer-Modes-Compatible-With-Amazon-Alexa-or-Google-Assistant-p-1856492.html)


---

## Lux sensor

<img src="../ideas/images/lux_sensor.jpg" alt="lux sensor" height="150px" />

---

## Lights

### Bulb

<img src="../ideas/images/smart_bulb.webp" alt="smart bulb" height="150px" />

---


### LED strip


---
## Batteries

### CR2032

### CR1632

### CR2450

### Battery replacements

Battery to USB / battery eliminator [link 1](https://www.aliexpress.com/item/4001065392767.html) [link 2](https://www.aliexpress.com/item/1005004996793449.html) [with power cable](https://www.aliexpress.com/item/4000562483198.html)

<img src="../projects/images_christmas_lights/battery_eliminator.webp" height="150px" alt="battery eliminator" />

---

# DIY

## Power adapter

## Cables

## ESP

## Sensors

### Co2

### mmWave

