---
title: "Zigbee Smart home - Best Buy Tips"
description: "Useful link to buy Zigbee sensors other devices for your smart home automation with Home Assistant"
category: Buy tips
tags: [Best, Buy, tips, smart, home automation, batteries, sensors, Aqara, Tuya, Zigbee, WiFi]
image: /buy/images_zigbee/zigbee_banner.png
---
{% capture imgBasket %}<img src="/buy/images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

{% capture imgZ2M %} | <img src="/zigbee/images/zigbee2mqtt.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;height:15px"/>{% endcapture %}

# Zigbee Smart home - Best Buy Tips

<br>

<a href="/buy">
<img src="images_zigbee/zigbee_banner.png" alt="Banner"/>
</a>

<br>

What is a smart home without digital ears and eyes? Sensors are the digital version of those.\
With the sensor data, you can make conditions, act on it and control other devices.

On this page you'll find the sensors, actuators, and other (Zigbee) home automation related hardware I use in my own home.

If you need some home automation inspiration, check my [home automation ideas](../ideas/home_automation_ideas) section!

I've been ordering most of my smart home products from [AliExpress](https://www.aliexpress.com/) for years:
good prices, reliable products, run for years already, fast shipping (sometimes under a week at home), and a huge selection.

Where available, I've also linked Amazon alternatives.
These Amazon products are also bundled on these
[Amazon US](https://amzn.to/4d6vXkN) and [Amazon NL](https://amzn.to/4cO48ip) pages.

[> Go direct to the sensor section on this page.](#zigbee-sensors-and-actuators)

---

## Table of Contents
<!-- TOC -->
  * [Why I chose Zigbee](#why-i-chose-zigbee)
  * [Zigbee coordinator](#zigbee-coordinator)
  * [Home server](#home-server)
  * [Zigbee sensors and actuators](#zigbee-sensors-and-actuators)
    * [Contact sensor](#contact-sensor)
    * [Motion sensor](#motion-sensor)
    * [Presence detection sensor](#presence-detection-sensor)
    * [Temperature sensor](#temperature-sensor)
    * [Light intensity sensor](#light-intensity-sensor)
    * [Leak sensor](#leak-sensor)
    * [Pressure sensor](#pressure-sensor)
    * [Lights](#lights)
      * [GU10](#gu10)
      * [Bulb](#bulb)
      * [Bulb socket](#bulb-socket)
      * [LED strip](#led-strip)
    * [Buttons](#buttons)
      * [Wall switch](#wall-switch)
      * [Wall dimmer](#wall-dimmer)
      * [Portable button](#portable-button)
    * [Vibration sensor](#vibration-sensor)
    * [USB adapter switch](#usb-adapter-switch)
    * [Plant soil sensor](#plant-soil-sensor)
    * [Outdoor sensors](#outdoor-sensors)
    * [Air quality sensor](#air-quality-sensor)
    * [Smoke detector](#smoke-detector)
    * [Infrared remote control](#infrared-remote-control)
    * [Radiator Thermostat](#radiator-thermostat)
    * [Smart socket](#smart-socket)
    * [Power strip](#power-strip)
  * [Smart Curtains](#smart-curtains)
  * [Google Coral USB](#google-coral-usb)
  * [Batteries](#batteries)
    * [Battery eliminators](#battery-eliminators)
  * [Cables](#cables)
    * [Micro USB power cable](#micro-usb-power-cable)
    * [USB-C power cable](#usb-c-power-cable)
    * [USB-C to USB-C](#usb-c-to-usb-c)
    * [USB-A extension cable](#usb-a-extension-cable)
  * [Power](#power)
    * [Adapters](#adapters)
  * [Battery powered with PIR](#battery-powered-with-pir)
    * [Lights](#lights-1)
    * [Automatic soap dispenser](#automatic-soap-dispenser)
<!-- TOC -->

---

> **_NOTE 1:_** Almost all hardware links on this page are devices I also use myself.\
> Most of the links are affiliate links, you pay the same price AND support my blog a bit.

> **_NOTE 2:_** I advise these products based on my personal experience.\
> I run my network with a CC2652 Zigbee adapter and Zigbee2MQTT.\
> With other hardware combinations it may not run with the same experience.

---

[> Go direct to the sensor section on this page.](#zigbee-sensors-and-actuators)

## Why I chose Zigbee

On the market, there are different types of protocols to create a smart home network.
Like Zigbee, Thread, WiFi, Bluetooth, Z-Wave and Matter.
All with their pros and cons.
You can use different protocols next to each other.
I chose one protocol: Zigbee.

<img src="images_zigbee/zigbee.jpg" alt="zigbee" height="60px" style="margin-left:15px;float:right"/>

This is why I chose Zigbee:
* There is a wide range of sensor and actuator types available;
* Every Zigbee device, independent of manufacturer, works in your network;
* The prices are low;
* It works locally, no internet is required;
* You can even link buttons directly to (a group of) lamps without the need of a hub;
* Not dependent on the manufacturer's app, cloud or other software. When a manufacturer goes bankrupt, you can still use your devices.
* It works as a mesh network, you can reach devices far away from the coordinator as long as there are enough active hops in between;
* The standard is an open protocol, you don't pay license fees (for Z-Wave you do) to use it;
* No compatibility issues with hardware with older or newer Zigbee versions;
* Active development on the software Zigbee2MQTT with every release a set of new supported Zigbee devices;

A reason not to choose Zigbee? I don't know :)

---

## Zigbee coordinator

<a href="https://slae.sh/projects/cc2652/" target="_blank">
<img src="images_zigbee/slaesh_zigbee_stick_CC2652RB.jpg" alt="Slaesh's CC2652RB stick" height="150px" style="margin-left:15px;float:right"/></a>

I've run my Zigbee network since 2020 non-stop with the {{imgBasket}}Slaesh's CC2652RB stick <a href="https://slae.sh/projects/cc2652/" target="_blank">(Slae website)</a>
<a href="https://www.zigbee2mqtt.io/guide/adapters/zstack.html" target="_blank" alt="CC2652RB">{{imgZ2M}}CC2652RB</a> without any issue, it's a very reliable stick.
My network grew to 140+ devices today, and it still runs fast.

* A coordinator where many people are very satisfied about, is the Sonoff ZBDongle-E Plus.
 <a href="https://s.click.aliexpress.com/e/_omBbJGj" target="_blank">(AliExpress)</a>
 <a href="https://amzn.to/3RhO53N#ad" target="_blank">(Amazon US)</a>
 <a href="https://amzn.to/3OkLelX#ad" target="_blank">(Amazon NL)</a>
 <a href="https://www.zigbee2mqtt.io/guide/adapters/zstack.html" target="_blank" alt="https://www.zigbee2mqtt.io/guide/adapters/zstack.html#zstack-adapters-texas-instruments">{{imgZ2M}}EFR32MG21</a>

 <a href="https://s.click.aliexpress.com/e/_omBbJGj" target="_blank">
 <img src="images_zigbee/sonoff_zbdongle-e.webp" alt="Sonoff ZBDongle-E Zigbee 3.0 dongle Plus" height="150px"/>
 </a>

* Nabu Casa (from Home Assistant) delivers also a Zigbee dongle with Zigbee or Thread,
the [Home Assistant Connect - ZBT-2](https://www.home-assistant.io/connect/zbt-2/)

To avoid interference with Bluetooth or WiFi,
it's better to move the stick away from the server. This is recommended for every stick.
You can use a {{imgBasket}}USB A extension cord <a href="https://s.click.aliexpress.com/e/_oFCMjGU" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4cOv6q9#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3V2q9Rk#ad" target="_blank">(Amazon NL)</a>
<br>

---

## Home server

If you're looking for (upgrade) hardware where you can run Home Assistant and other services on,
then you can take a look at this page:
[Which hardware to run Home Assistant on?](/homeassistant/homeassistant_hardware)\
I explain which options are available and make common used terms clear.
I hope this gives you more information to make a good choice.

---

## Zigbee sensors and actuators

### Contact sensor

<a href="https://s.click.aliexpress.com/e/_EumfxFt" target="_blank">
<img src="images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" height="150px" style="margin-left:15px;float:right"/></a>

A contact sensor can be placed to check if doors and windows are open or closed. The sensor knows only those two values.
The contact sensor works with a "reed switch", the circuit is by default open, but when there is a magnet nearby, the internal metal closes the circuit.

The sensor can also be used attached to other sensors that also return an open or closed circuit.
With this behavior, you can create also a [seat occupancy sensor](/zigbee/zigbee_chair_occupancy_sensor) or a [water leak sensor](/zigbee/zigbee_water_leak_sensor).

**Best option:**\
{{imgBasket}}Zigbee Contact sensor - Aqara
<a href="https://s.click.aliexpress.com/e/_EumfxFt" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/3R03iGC#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3Dnl1kK#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/MCCGQ11LM.html" target="_blank" title="MCCGQ11LM">{{imgZ2M}}MCCGQ11LM</a> aka T1.
They are small and a long battery life.

<a href="https://s.click.aliexpress.com/e/_EumfxFt" target="_blank">
<img src="images_zigbee/zigbee_contact_sensor_aqara.webp" alt="Aqara contact sensor" height="100px" /></a>

<br>

**Cheaper option:**\
{{imgBasket}}Zigbee Contact sensor - Tuya
<a href="https://s.click.aliexpress.com/e/_c3SEjOhh" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4eokjEj#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4swcmAw#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/ZD08.html" target="_blank" title="ZD08">{{imgZ2M}}ZD08</a>
Small and cheaper.

<a href="https://s.click.aliexpress.com/e/_c3SEjOhh" target="_blank">
<img src="images_zigbee/zigbee_contact_sensor.webp" alt="Tuya contact sensor" height="100px" /></a>

<br>

**2xAAA battery option:**\
{{imgBasket}}Zigbee Contact sensor 2xAAA powered - Tuya
<a href="https://s.click.aliexpress.com/e/_c3PaIIKN" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4tT6bHW#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3GJdFKq#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/ZD06.html" target="_blank" title="ZD06">{{imgZ2M}}ZD06</a>
Battery powered, bigger, cheaper.

---

### Motion sensor

<a href="https://s.click.aliexpress.com/e/_oEy7q2V" target="_blank">
<img src="images_zigbee/human_presence_sensor.avif" alt="pir + mmWave human motion and presence sensor" height="150px" style="margin-left:15px;float:right"/>
</a>
A human presence sensors.<br>
It's a combination with a PIR + mmWave radar and brightness sensor.
It's wireless and 2x AAA battery powered.<br>
The PIR sensor is used to detect a person and to activate the mmWave radar sensor.
It avoids the detection of animals.
It can also detect persons who sit still or laying in bed.

{{imgBasket}}Zigbee Human motion + presence + lux sensor - Hoazee
<a href="https://s.click.aliexpress.com/e/_oEy7q2V" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/42aE8HW#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/46H1JBL#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/ZG-204ZM.html" target="_blank" title="ZG-204ZM">{{imgZ2M}}ZG-204ZM</a>

<br>

<a href="https://s.click.aliexpress.com/e/_c2QfVR4H" target="_blank">
<img src="../ideas/images/motion_sensor.png" alt="pir motion sensor" height="150px" style="margin-left:15px;float:right"/>
</a>
The traditional motion sensors work with PIR, which stands for Passive InfraRed. This sensor detects objects that emit heat, like humans and animals.

I like the Aqara motion sensor a lot. It's fast and reliable.
With the stand you can point it in a specific direction, so it doesn't 'see' the whole room.

If I want to cover a whole room, I use a different type of PIR sensor which you can stick in the center of the ceiling and it looks in all directions.

**Best option:**\
{{imgBasket}}Zigbee motion sensor beam, WITH LIGHT SENSOR - Aqara
<a href="https://s.click.aliexpress.com/e/_c2QfVR4H" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4tcin5k#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4mK01ph#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/RTCGQ11LM.html" target="_blank" title="RTCGQ11LM">{{imgZ2M}}RTCGQ11LM / P1</a>

<a href="https://s.click.aliexpress.com/e/_c2QfVR4H" target="_blank">
<img src="../ideas/images/motion_sensor.png" alt="motion sensor" height="100px" /></a>

<br>

**Alternative option:**\
{{imgBasket}}Zigbee motion sensor beam - Xiaomi
<a href="https://s.click.aliexpress.com/e/_c4CYStNH" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4kUzGUw#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/RTCGQ01LM.html" target="_blank" title="RTCGQ01LM">{{imgZ2M}}RTCGQ01LM</a>

**All direction option:**\
{{imgBasket}}Zigbee motion sensor all directions - Tuya
<a href="https://s.click.aliexpress.com/e/_c2R8wwNb" target="_blank">(AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/IH012-RT01.html" target="_blank" title="IH012-RT01">{{imgZ2M}}IH012-RT01</a> <!-- or 809WZT -->

<a href="https://s.click.aliexpress.com/e/_c2R8wwNb" target="_blank"><img src="images_zigbee/zigbee_motion_all_directions.webp" height="100px"></a>

**2xAAA battery option:**\
{{imgBasket}}Zigbee / WiFi motion sensor PIR, AAA powered - Tuya
<a href="https://s.click.aliexpress.com/e/_EwELbwt" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4dhkbFv#ad" target="_blank">(Amazon US)</a>
<a href="https://www.zigbee2mqtt.io/devices/ZP01.html" target="_blank" title="ZP01">{{imgZ2M}}ZP01</a>

<a href="https://s.click.aliexpress.com/e/_EwELbwt" target="_blank"><img src="/buy/images_zigbee/zigbee_motion_pir.jpg" height="100px"></a>

[//]: # ({{imgBasket}}<a href="https://amzn.to/4i18dQH#ad" target="_blank">Zigbee motion sensor all directions - LIGHTEU &#40;Amazon&#41;</a>)
[//]: # (<a href="https://www.zigbee2mqtt.io/devices/PIR1-ZB.html" target="_blank" title="ZP01">{{imgZ2M}}PIR1-ZB</a>)

<br>

---

### Presence detection sensor

A presence sensor has no need for a direct line of sight.
It uses radar to detect people (and pets).
You can also hide it in a closet and it still detects.
It can even detect a person who isn't moving, for example, sitting on a couch or chair.\
Ideal for the living room, bedrooms and home office.

**Best option:**\
<a href="https://amzn.to/48qWsyY#ad" target="_blank">
<img src="images_zigbee/aqara_fp300.avif" alt="human Presence detection sensor" height="150px" style="margin-left:15px;float:right"/></a>
The Aqara FP300 is a new battery powered motion sensor with PIR and mmWave radar sensor.
It can detect up to 6 meters and also measures light, temperature and humidity.
It can be configured with multiple zones where you can detect persons in.

{{imgBasket}} Zigbee or Thread (Matter) - Aqara FP300
<a href="https://amzn.to/48qWsyY#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/PS-S04D.html" target="_blank" title="Aqara FP300">{{imgZ2M}}FP300</a>

<br>

**Cheaper option:**\
<a href="https://s.click.aliexpress.com/e/_oEbnm2m" target="_blank">
<img src="images_zigbee/mmwave_motion_sensor.jpg" alt="human Presence detection sensor" height="150px" style="margin-left:15px;float:right"/></a>
{{imgBasket}}Zigbee / WiFi human Presence detection sensor
<a href="https://s.click.aliexpress.com/e/_oEbnm2m" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4dlxvIY#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3Zi5pay#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/ZY-M100-24G.html" target="_blank" title="ZY-M100-24G">{{imgZ2M}}ZY-M100-24G</a>

<br>
<br>

---

### Temperature sensor

<a href="https://s.click.aliexpress.com/e/_c3qxoNPD" target="_blank">
<img src="images_zigbee/zigbee_temperature_humidity_sensor_aqara.webp" alt="Aqara temperature and humidity sensor" height="150px" style="margin-left:15px;float:right"/></a>

A temperature sensor is a simple sensor that measures, besides the temperature, also the humidity in a room.
This sensor is useful to create automations, like taking action if someone is in the shower,
or in the summer when it becomes colder outside than inside.

**Best option:**\
{{imgBasket}}Zigbee temperature and humidity sensor - Aqara
<a href="https://s.click.aliexpress.com/e/_c3qxoNPD" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4ekFk2A#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3V2h0YX#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.banggood.com/Aqara-Temperature-Sensor-Smart-Zigbe-Air-Pressure-Humidity-Environment-Sensor-Remote-Control-for-XiaoMi-Home-Homekit-p-2004763.html?warehouse=CN&ID=0&p=IF081412102025201707&custlinkid=3958785" target="_blank">(Banggood)</a>
<a href="https://www.zigbee2mqtt.io/devices/WSDCGQ11LM.html" target="_blank" title="WSDCGQ11LM">{{imgZ2M}}WSDCGQ11LM</a>

**Cheaper option:**\
{{imgBasket}}Zigbee temperature and humidity sensor - Tuya / Thirdreality
<a href="https://s.click.aliexpress.com/e/_EuScxuN" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/427r9Xp#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4cuvcBp#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/RSH-HS06.html" target="_blank" title="RSH-HS06">{{imgZ2M}}RSH-HS06</a>

**2xAAA battery option:**\
{{imgBasket}}Zigbee / WiFi temperature and humidity sensor 2xAAA powered - Tuya
<a href="https://s.click.aliexpress.com/e/_c3ocEEeT" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4t87Isj#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4lfjVI5#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/WSD500A.html" target="_blank" title="WSD500A">{{imgZ2M}}WSD500A</a> Battery powered, bigger, cheaper.\
This sensor can be converted to an [outlet sensor](/zigbee/zigbee_outlet_sensor).\
<a href="https://s.click.aliexpress.com/e/_c3ocEEeT" target="_blank"><img src="images_zigbee/temperature_sensor_tuya_aaa.avif" alt="Battery powered temperature and humidity sensor" height="150px" /></a>

**With display option:**\
{{imgBasket}}Zigbee / WiFi temperature and humidity sensor 2xAAA powered with display.
The width is 7 cm and the height is 2,6 cm.\
<a href="https://s.click.aliexpress.com/e/_oBX1DMr" target="_blank">(AliExpress)</a>
(Not available on Amazon US)
Model: ZY-TH01Pro
<!--<a href="https://www.zigbee2mqtt.io/devices/ZY-TH01Pro.html" target="_blank" title="ZY-TH01Pro">{{imgZ2M}}ZY-TH01Pro</a>-->
<a href="https://s.click.aliexpress.com/e/_oBX1DMr" target="_blank"><img src="images_zigbee/display_temp_hum.avif" alt="Battery powered temperature and humidity sensor with display" height="150px" /></a>

#### Water-resistant option:
{{imgBasket}}Zigbee water-resistant (IP65) aquarium/pool/bath water temperature sensor with a probe and display.
<a href="https://s.click.aliexpress.com/e/_c3mRgyKj" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4utmSd1#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/44Unhd2#ad" target="_blank">(Amazon NL)</a>

Model: SNZB-02LD
Battery: CR2477
<a href="https://www.zigbee2mqtt.io/devices/SNZB-02LD.html" target="_blank" title="SNZB-02LD">{{imgZ2M}}SNZB-02LD</a>

<a href="https://s.click.aliexpress.com/e/_c3mRgyKj" target="_blank"><img src="images_zigbee/zigbee_water_temp.webp" alt="Battery powered temperature and humidity sensor with display" height="150px" /></a>

<br>

---

### Light intensity sensor

<a href="https://s.click.aliexpress.com/e/_c3oHoBsX" target="_blank">
<img src="../ideas/images/lux_sensor.jpg" alt="Light intensity / lux sensor" height="150px" style="margin-left:15px;float:right"/></a>

A light intensity sensor (lux sensor) measures the amount of light brightness.\
Useful to enable the lights when it becomes dark outside.

**Best option:**\
{{imgBasket}}Zigbee lux sensor - Aqara T1
<a href="https://s.click.aliexpress.com/e/_c3oHoBsX" target="_blank">(AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/GZCGQ11LM.html" target="_blank" title="GZCGQ11LM">{{imgZ2M}}GZCGQ11LM</a>
Very reliable, very long battery life, quick response on small light changes, more expensive.

<!--
Xiaomi has almost the same device, with the same looks and works the same as the Aqara.

{{imgBasket}}Zigbee lux sensor - Xiaomi Mi light sensor
<a href="https://s.click.aliexpress.com/e/" target="_blank">(AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/GZCGQ01LM.html" target="_blank" title="GZCGQ01LM">{{imgZ2M}}GZCGQ01LM</a>

<a href="https://s.click.aliexpress.com/e/_oBxc9XP" target="_blank">
<img src="../ideas/images/lux_sensor.jpg" alt="Light intensity / lux sensor" height="150px" /></a>

**Cheaper option 1:**\
{{imgBasket}}Zigbee lux sensor - Moes
<a href="https://s.click.aliexpress.com/e/_DlwYz45" target="_blank">(AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0222_light.html" target="_blank" title="TS0222_light">{{imgZ2M}}TS0222_light</a>


**Cheaper option 2:**\
{{imgBasket}}Zigbee lux sensor - Tuya
<a href="https://s.click.aliexpress.com/e/_DC8WRhJ" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/3TX4A3y#ad" target="_blank">(Amazon US)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0222.html" target="_blank" title="TS0222">{{imgZ2M}}TS0222</a>

<a href="https://s.click.aliexpress.com/e/_DC8WRhJ" target="_blank">
<img src="images_zigbee/zigbee_lux_sensor.avif" alt="Light intensity / lux sensor" height="150px" /></a>
-->
<br>

---

### Leak sensor

Each leak sensor has two metal contacts, when these contacts get in contact with water, the current flows from one contact to the other, then you have a closed circuit.
The sensor sends a signal "water detected"!
Water conducts the current and air doesn't.

<a href="https://s.click.aliexpress.com/e/_c3QCb0sj" target="_blank">
<img src="images_zigbee/aqara_leak_sensor.webp" alt="Aqara leak sensor" height="150px" style="margin-left:15px;float:right"/></a>

The Aqara leak sensor has two metal screw contacts on the back of the sensor that measures if there is water.
This sensor is completely water-resistant.
It has a small size and the battery lasts very long. That makes this sensor a more expensive but very reliable one.

It can also be used to create other boolean sensors,
like the [chair occupancy sensor](/zigbee/zigbee_chair_occupancy_sensor).

**Best option:**\
{{imgBasket}}Leak sensor - Aqara
<a href="https://s.click.aliexpress.com/e/_c3QCb0sj" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4eZBV9z#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3ZneX2Z#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/SJCGQ11LM.html" target="_blank" title="SJCGQ11LM">{{imgZ2M}}SJCGQ11LM</a>

<a href="https://s.click.aliexpress.com/e/_c3QCb0sj" target="_blank">
<img src="images_zigbee/aqara_leak_sensor.webp" alt="Aqara leak sensor" height="150px" /></a>

**Cheaper option:**\
Another leak sensor is the one with a wire, this sensor itself isn't water-resistant, only the other end of the cable may become wet.
This one runs on two common AAA batteries that make the sensor pretty big but cheaper to buy.

{{imgBasket}}Zigbee leak sensor
<a href="https://s.click.aliexpress.com/e/_c3Su3S8r" target="_blank">(AliExpress)</a>
(Not available on Amazon US)
<a href="https://amzn.to/45cjJTY#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0207_water_leak_detector_1.html" target="_blank" title="TS0207_water_leak_detector_1">{{imgZ2M}}TS0207</a>

<a href="https://s.click.aliexpress.com/e/_c3Su3S8r" target="_blank">
<img src="images_zigbee/leak_sensor.webp" alt="leak sensor" height="150px" /></a>

<br>

---

### Pressure sensor

<a href="https://s.click.aliexpress.com/e/_c4Fg3X1t" target="_blank"><img src="images_zigbee/pressure_sensor.avif" alt="zigbee pressure sensor" height="150px" style="margin-left:15px;float:right"/></a>

A small strip with pressure sensors in it.\
I have a separate page on how I created my own [Zigbee chair occupancy sensor](/zigbee/zigbee_chair_occupancy_sensor).

Suitable for chairs/carpets/beds/sofas/carpets:
* Compact and convenient, multiple pressure control point sensors
* Flexible, lightweight, bend-resistant
* Power input：CR2032 battery

<br>

{{imgBasket}}Zigbee pressure sensor  - Tuya
<a href="https://s.click.aliexpress.com/e/_c4Fg3X1t" target="_blank">(AliExpress)</a>

gBasket}}Alternative: larger Zigbee pressure mat sensor  - Tuya
<a href="https://s.click.aliexpress.com/e/_c3k6qjLH" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4nglGHp#ad" target="_blank">(Amazon US)</a>

---

### Lights

#### GU10

<a href="https://s.click.aliexpress.com/e/_c3T9TMn5" target="_blank">
<img src="/buy/images_zigbee/gu10_fullcolor.jpg" alt="Zigbee smart gu10 light" height="150px" style="margin-left:15px;float:right"/>
</a>

{{imgBasket}}Zigbee GU10 full color light with RGB, 5W and a E14 fitting.
<a href="https://s.click.aliexpress.com/e/_c3T9TMn5" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/3PLzxcm#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4nyvcWC#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/CK-BL702-AL-01.html" target="_blank" title="">{{imgZ2M}}</a>

#### Bulb

<a href="https://s.click.aliexpress.com/e/_oFxRuUw" target="_blank"><img src="../ideas/images/smart_bulb.webp" alt="Zigbee smart bulb" height="150px" style="margin-left:15px;float:right"/></a>

You can replace a normal E27 bulb with a Zigbee variant.
With a colored version, you can use it to inform yourself with a color for different states.

{{imgBasket}}Zigbee light bulb dimmable colored
<a href="https://s.click.aliexpress.com/e/_oFxRuUw" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4tc06oS#ad" target="_blank">(Amazon US)</a>
<a href="https://www.zigbee2mqtt.io/devices/CK-BL702-AL-01.html" target="_blank" title="CK-BL702-AL-01">{{imgZ2M}}CK-BL702-AL-01</a>

&nbsp;
<br>

#### Bulb socket

<a href="https://s.click.aliexpress.com/e/_oFxRuUw" target="_blank"><img src="images_zigbee/bulb_socket.avif" alt="smart bulb socket" height="150px" style="margin-left:15px;float:right"/></a>
An easy solution, screw it between the original socket and the lamp to make it controllable.

{{imgBasket}}WiFi / Zigbee smart light bulb socket
<a href="https://s.click.aliexpress.com/e/_c3yd93IX" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/3RhV9xi#ad" target="_blank">(Amazon US)</a>

&nbsp;
<br>

&nbsp;
<br>

---

#### LED strip

<a href="https://s.click.aliexpress.com/e/_ookcWte" target="_blank">
<img src="../projects/images_bin_day/zigbee_rgb_led_strip.webp" alt="LED strip" height="150px" style="margin-left:15px;float:right"/></a>

This LED strip is available in different versions:
* Indoor no waterproof (IP20) / Outdoor waterproof (IP65)
* 5 / 10 meter
* RGB White or RGB Warm White

<br>

{{imgBasket}}Zigbee RGB 5m LED strip
<a href="https://s.click.aliexpress.com/e/_ookcWte" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/48Cpaht#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3H5c0yN#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0503B.html" target="_blank" title="TS0503B">{{imgZ2M}}TS0503B</a>

<br>

{{imgBasket}}WiFi ESP32 WLED RGB 3-30m LED strip
<a href="https://s.click.aliexpress.com/e/_on0VP8A" target="_blank">(AliExpress)</a>
This one supports over 100 dynamic effects. These are controllable via the WLED API or app.

---

### Buttons

#### Wall switch

<a href="https://s.click.aliexpress.com/e/_c4pcVDnh" target="_blank">
<img src="images_zigbee/zigbee_moes_wall_switch.webp" alt="Zigbee Moes wall switch" height="150px" style="margin-left:15px;float:right"/></a>

{{imgBasket}}Zigbee wall switch - Aqara
<a href="https://s.click.aliexpress.com/e/_DBfTCOj" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4cgAL6f#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/QBKG41LM.html" target="_blank" title="QBKG41LM">{{imgZ2M}}QBKG41LM</a>

{{imgBasket}}Zigbee wall switch - Moes
<a href="https://s.click.aliexpress.com/e/_c4pcVDnh" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4uotc5i#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3GF13nC#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/ZS-EUB_2gang.html" target="_blank" title="ZS-EUB_2gang">{{imgZ2M}}ZS-EUB</a>

<br>

#### Wall dimmer

<a href="https://www.ecodim.nl/nl/eco-dim07-zigbee-basic.html" target="_blank">
<img src="images_zigbee/ecodim07.webp" alt="Zigbee dimmers" height="150px" style="margin-left:15px;float:right"/></a>

This Zigbee dimmer replaces an original wall dimmer module.\
The easiest way to make a dimmable group with gu10 lights smart.

{{imgBasket}}<a href="https://www.ecodim.nl/nl/eco-dim07-zigbee-basic.html" target="_blank">ECO-DIM.07 LED dimmer press/turn 0-200W - EcoDim (manufacturer site with links to different shops)</a>
<a href="https://www.zigbee2mqtt.io/devices/Eco-Dim.07_Eco-Dim.10.html" target="_blank" title="Eco-Dim.07_Eco-Dim.10">{{imgZ2M}}Eco-Dim.07</a>

{{imgBasket}}ECO-DIM.01 LED dimmer press/turn 0-300W - EcoDim
<a href="https://amzn.to/4108Zri#ad" target="_blank">(Amazon NL)</a>

{{imgBasket}}Other EcoDimZigbee devices - EcoDim <a href="https://www.ecodim.nl/nl/smart-led-dimmers-en-schakelaars/zigbee/" target="_blank">(manufacturer site with links to different shops)</a>

<br>

---

#### Portable button

<a href="https://s.click.aliexpress.com/e/_DF2oxu7" target="_blank">
<img src="images_zigbee/zigbee_button.webp" alt="Zigbee button" height="150px" style="margin-left:15px;float:right"/></a>

These buttons can trigger multiple scenarios because they support three press types: single-, double- and long press.

**Best option:**\
{{imgBasket}}Zigbee button - Aqara
<a href="https://s.click.aliexpress.com/e/_DF2oxu7" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4droHj8#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/WXKG11LM.html" target="_blank" title="WXKG11LM">{{imgZ2M}}WXKG11LM</a>

**Cheaper option:**\
{{imgBasket}}Small Zigbee button - Tuya / Loginovo
<a href="https://s.click.aliexpress.com/e/_on6fohX" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4l6OrUs#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/ZG-101ZL.html" target="_blank" title="ZG-101ZL">{{imgZ2M}}ZG-101ZL</a>

---

### Vibration sensor

<a href="https://s.click.aliexpress.com/e/_c3JdAlpD" target="_blank">
<img src="images_zigbee/zigbee_vibration_sensor.webp" alt="Zigbee button" height="150px" style="margin-left:15px;float:right"/></a>

This sensor can measure vibrations and rotations in the X, Y and Z direction.

{{imgBasket}}Zigbee vibration sensor - Aqara
<a href="https://s.click.aliexpress.com/e/_c3JdAlpD" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4w5S57F#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3OiAAvY#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/DJT11LM.html" target="_blank" title="DJT11LM">{{imgZ2M}}DJT11LM</a>

<br><br>

---

### USB adapter switch

<a href="https://s.click.aliexpress.com/e/_c38UUilJ" target="_blank">
<img src="../zigbee/images_usb_switch/zigbee_usb_switch_three_ports.png" alt="Zigbee USB adapter switch" height="150px" style="margin-left:15px;float:right"/></a>

This actuator can toggle the power state of each USB port individually.\
The first port can also be used to switch on/off data access via USB, the other two only for USB power.

{{imgBasket}}Zigbee / WiFi USB adapter switch - Tuya
<a href="https://s.click.aliexpress.com/e/_c38UUilJ" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4lL8Ijp#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0003.html" target="_blank" title="TS0003">{{imgZ2M}}TS0003</a>

{{imgBasket}}Zigbee / WiFi USB adapter switch - Sonoff
<a href="https://amzn.to/4n7AxnA#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4fcxpmu#ad" target="_blank">(Amazon NL)</a>

Check also the [dedicated page](/zigbee/usb_adapter_switch) about this device.

<br>

---
### Plant soil sensor

<a href="https://s.click.aliexpress.com/e/_onIII5b" target="_blank">
<img src="images_zigbee/TS0601_soil_3.png" alt="Zigbee soil sensor" height="200px" style="margin-left:15px;float:right"/></a>
Do your plants have enough water?
You stick this sensor in the soil with the plant, and it detects if the soil is not too dry or the temperature too high.

Powered by two AAA batteries.

Make sure you select the Zigbee version:\
{{imgBasket}}Zigbee soil humidity sensor - Tuya
<a href="https://s.click.aliexpress.com/e/_onIII5b" target="_blank">(AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0601_soil_3.html" target="_blank" title="TS0601_soil_3">{{imgZ2M}}TS0601_soil_3</a>

{{imgBasket}}Alternative: Zigbee soil humidity sensor - Tuya
<a href="https://s.click.aliexpress.com/e/_c3tIjR3z" target="_blank">(AliExpress)</a>

---
### Outdoor sensors

There are also outdoor sensors and actuators available,
like water-resistant sockets, LED strips, rain sensors, etc...

There is a separate page where you can find them: [Outdoor sensors - Best Buy Tips](zigbee_outdoor)

<br>

---

### Air quality sensor

<a href="https://s.click.aliexpress.com/e/_c4pjXZtH" target="_blank">
<img src="images_zigbee/zigbee_air_quality_sensor.webp" alt="Air quality sensor" height="150px" style="margin-left:15px;float:right"/></a>

This 6-in-1 sensor can detect six kinds of environmental parameters:
* Temperature
* Humidity
* PM2.5
* VOC of poisonous gas
* Formaldehyde (not really accurate)
* CO2 (not really accurate, then you need a dedicated one)

All these values can affect a healthy environment at home.

Normally you would need single sensors for each parameter!

Because the price is low, there are some downsides in sensor precision, the formaldehyde and CO2 sensors don't work as well as dedicated sensors.
But for the other parameters, it is a good overall air quality sensor to detect how your air quality is and if you need some fresh air inside.

{{imgBasket}}Zigbee / WiFi Air quality sensor - Tuya
<a href="https://s.click.aliexpress.com/e/_c4pjXZtH" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/40Y4IEB#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0601_air_quality_sensor.html" target="_blank" title="TS0601_air_quality_sensor">{{imgZ2M}}TS0601</a>

<br>

---

### Smoke detector

<a href="https://s.click.aliexpress.com/e/_c4TV3E8L" target="_blank">
<img src="images_zigbee/smoke_detector.avif" alt="smoke detector" height="150px" style="margin-left:15px;float:right"/></a>

The device can detect smoke and has an alarm sound of 85 dB.

{{imgBasket}}Zigbee smoke detector - Heiman
<a href="https://s.click.aliexpress.com/e/_c4TV3E8L" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4n6jJNv" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/HS1SA.html" target="_blank" title="HS1SA Heiman smoke detector">{{imgZ2M}}HS1SA</a>

Battery: CR123A

<br>

---

### Infrared remote control

<a href="https://s.click.aliexpress.com/e/_EyhV6lj" target="_blank">
<img src="/buy/images_zigbee/zigbee_ir_remote.webp" alt="Zigbee IR remote control" height="150px" style="margin-left:15px;float:right"/></a>

These devices can learn infrared remote control signals and send them again via Zigbee.
This way you can create automations for air conditioners, fans, lights, etc.

I have a dedicated page: [Zigbee infrared transmitter / receiver](/zigbee/smart_infrared_transmitter_receiver)
on how to program and use this device to replace and automate the original remote.
Controlled by Home Assistant.

{{imgBasket}}Zigbee IR remote control - Moes
<a href="https://s.click.aliexpress.com/e/_DEUWZ73" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4w2CplD#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/495yrxA#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/UFO-R11.html" target="_blank" title="TS0003">{{imgZ2M}}UFO-R11</a>

**WiFi option:**
{{imgBasket}}WiFi IR remote control RM4 Mini - Broadlink
<a href="https://s.click.aliexpress.com/e/_Dna8hgH" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4tvsH8Z#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4lbgPoa#ad" target="_blank">(Amazon NL)</a>

**Cheaper WiFi option:**
{{imgBasket}}WiFi IR remote control - Tuya
<a href="https://s.click.aliexpress.com/e/_c3xtCnnz" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4h1HsLO#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4eJPxlw#ad" target="_blank">(Amazon NL)</a>

#### Infrared + RF + 433MHz + 315MHz remote control

<a href="https://s.click.aliexpress.com/e/_DnbfWjP" target="_blank">
<img src="/buy/images_bbt/wifi_ir_rf_433.avif" alt="WiFi IR + RF + 433 + 315 remote control" height="150px" style="margin-left:15px;float:right"/></a>

This WiFi device supports a wide range of different wireless protocols, like Infrared + RF + 433MHz + 315MHz.
It can learn signals from the original remote control and retransmit them via Zigbee.\
This way you can create automations for air conditioners, fans, lights, etc.

{{imgBasket}}WiFi IR + RF + 433 + 315 remote control - Moes
<a href="https://s.click.aliexpress.com/e/_DnbfWjP" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4lttIud#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/46GqsrC#ad" target="_blank">(Amazon NL)</a>
Model: RF-R1 / UFO-R2-RF

<br>

---

### Radiator Thermostat

<a href="https://s.click.aliexpress.com/e/_ongwmtx" target="_blank">
<img src="/buy/images_zigbee/thermostat.avif" alt="Zigbee radiator thermostat" height="150px" style="margin-left:15px;float:right"/></a>

With this radiator thermostat valve, it is possible to open and close the radiator in steps.\
You can also schedule complete weeks in it what the temperature should be.

{{imgBasket}}Zigbee smart radiator thermostat - Moes / Tuya
<a href="https://s.click.aliexpress.com/e/_ongwmtx" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4hX8D9A#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/TV02-Zigbee.html" target="_blank" alt="TV02">{{imgZ2M}}TV02</a>
<br>
{{imgBasket}}Zigbee smart radiator thermostat W600 - Aqara
<a href="https://amzn.to/4epec2w#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/WT-A03E.html" target="_blank" alt="Aqara W600">{{imgZ2M}}Aqara WT-A03E</a>

<br>

---


### Smart socket
<a href="https://s.click.aliexpress.com/e/_c4majdPD" target="_blank">
<img src="../esphome/orcon_images/blitzwolf_shp-15_zigbee_socket.jpg" alt="BlitzWolf SHP-15 smart socket" height="150px" style="margin-left:15px;float:right"/></a>

Smart sockets are useful to make traditional "dumb" devices smart. Like a traditional standing lamp with a plug.

Sockets are always connected to power, this makes this sensor also a hub in the Zigbee network which extends the range and coverage of your network.
You can also plug a smart socket somewhere strategic with bad coverage to improve this.

A smart plug with power consumption metrics can be useful to detect the state of the machine by its power consumption.
This can be used for washing machines, dryers, dishwashers, ovens, etc.

I use the European Zigbee BlitzWolf EU SHP-13 and SHP-15 which has also power consumption measurement.
It has a physical button to switch the state, and can handle 3680 W and 16 A which is enough for washing machines and dryers.
It took me a while before I got the correct smart socket for this purpose, and now they've run for years without any issues.

{{imgBasket}}Zigbee smart power socket with power measurement - BlitzWolf EU SHP-15
<a href="https://www.banggood.com/custlink/33vjDy5OWw" target="_blank">(Banggood)</a>
<a href="https://s.click.aliexpress.com/e/_c4majdPD" target="_blank">(AliExpress)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS011F_plug_3.html" target="_blank" alt="TS011F">{{imgZ2M}}TS011F_plug_3</a>

{{imgBasket}}Zigbee smart power socket with power measurement - BlitzWolf EU SHP-13
<a href="https://www.banggood.com/BlitzWolf-BW-SHP13-ZigBee3_0-Smart-Socket-16A-EU-Plug-Electricity-Metering-APP-Remote-Controller-Timer-Work-with-Amazon-Alexa-Google-Home-p-2000907.html?warehouse=CN&ID=0&p=IF081412102025201707&custlinkid=3954741" target="_blank">(Banggood)</a>
<a href="https://www.zigbee2mqtt.io/devices/TS0121_plug.html" target="_blank" title="TS0121_plug">{{imgZ2M}}TS0121</a>

<br>

---

### Power strip

<a href="https://s.click.aliexpress.com/e/_omZ0ZpF" target="_blank">
<img src="/buy/images_zigbee/powerstrip.avif" alt="Zigbee power strip" height="150px" style="margin-left:15px;float:right"/></a>
Zigbee power strip with 4x outlets (max. 16A) and 2x USB-A (5V 2.1A).
<br><br>
Each outlet and the two USB ports can be controlled independently.
Cheaper solution than four single smart sockets!

* Suitable for EU/US/JP
* With overload protection switch
* Extension cable 1.5m
* Manual master switch
* LED indicate for each socket

<br>

{{imgBasket}}Zigbee power strip with 4 outlets and 2 USB ports - BORUIDAPLS / LELLKI
<a href="https://s.click.aliexpress.com/e/_c3sqLPWf" target="_blank">(AliExpress)</a>
<a href="https://s.click.aliexpress.com/e/_c4WMorsL" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/46nuiFT#ad" target="_blank">(Amazon NL)</a>
<a href="https://www.zigbee2mqtt.io/devices/SM-0306E-2W.html" target="_blank" title="SM-0306E-2W">{{imgZ2M}}SM-0306E-2W</a>

<br>
<br>

<a href="https://s.click.aliexpress.com/e/_c3B3MqrB" target="_blank">
<img src="/buy/images_zigbee/powerstrip2.avif" alt="Zigbee power strip" height="150px" style="margin-left:15px;float:right"/></a>
Another Zigbee power strip with 4x outlets (max. 16A 4000W) and 2x USB-A (5V 3A) fast charging.
<br><br>
Each outlet can be controlled independently with light indicator.
The two USB ports are controlled together.
Cheaper solution than four single smart sockets!

* Physical button for each socket
* Suitable for EU
* Overload protection
* Extension cable 1.8m
* Manual master switch
* LED indicate for each socket

<br>

{{imgBasket}}Zigbee power strip with 4 outlets and 2 USB ports - Lellki
<a href="https://s.click.aliexpress.com/e/_c3B3MqrB" target="_blank">(AliExpress)</a>

<a href="https://www.zigbee2mqtt.io/devices/E220-KR4N0Z0-HA.html" target="_blank" title="E220-KR4N0Z0-HA">{{imgZ2M}}E220-KR4N0Z0-HA (WP33)</a>

<br>

---

## Smart Curtains

If you're looking for a U-rail solution, you can look at [Slide - Smart Curtains](/projects/slide_smart_curtains).

<br>

---

## Google Coral USB

<a href="https://s.click.aliexpress.com/e/_c2JpmDMj" target="_blank">
<img src="images_zigbee/google_coral.webp" alt="Google Coral" width="150px" style="margin-left:15px;float:right"/></a>

USB stick to handle heavy GPU processes, like human detection with Frigate.

{{imgBasket}}Coral USB - Google
<a href="https://s.click.aliexpress.com/e/_c2JpmDMj" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/3QYltwo#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4594MC0#ad" target="_blank">(Amazon NL)</a>

<br>

---

## Batteries

The advantage of a lot of Zigbee sensors is that they work completely wireless.
You can place them everywhere without the need to wire them.
Most of the devices run for years on a single battery, but now and then you need to replace them.
Before you start using a new sensor, first check what kind of battery it uses and already order some of them.
When it gets out of fuel, you can directly replace it with a new battery.

These are common types of batteries used by the above-mentioned sensors:
* [AA](/buy/batteries#aa)
* [AAA](/buy/batteries#aaa)
* [CR2032](/buy/batteries#cr2032)
* [CR1632](/buy/batteries#cr1632)
* [CR2450](/buy/batteries#cr2450)

### Battery eliminators

<a href="https://s.click.aliexpress.com/e/_onadIXG" target="_blank">
<img src="/buy/images_diy/battery_eliminator.png" height="150px" alt="battery eliminator" style="margin-left:15px;float:right" /></a>

A battery eliminator (aka battery replacement) is, as the name says, a replacement for battery-powered devices to connect them to mains power.
This saves you from buying new batteries.
The big advantage is also that you can now control them with your home automations by adding a smart plug between the device and the wall outlet.
Now you also don't have to worry about forgetting to turn them off again.
There are different variants of them.
Replacements for AA or AAA batteries and with a plug or USB connector.
The advantage of a USB connector is that you can plug multiple to an active powered USB-hub to control multiple ones.

I use these a lot for all kinds of [Christmas decorations](/projects/automate_christmas_decorations).

{{imgBasket}}AA battery replacement with USB
<a href="https://s.click.aliexpress.com/e/_onadIXG" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4lv9H7M#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3AIfXqb#ad" target="_blank">(Amazon NL)</a>

{{imgBasket}}AAA battery replacement with USB
<a href="https://s.click.aliexpress.com/e/_omwDXZ7" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4cqCQwo#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/4jnFDZB#ad" target="_blank">(Amazon NL)</a>

{{imgBasket}}AA battery replacement with power socket EU
<a href="https://s.click.aliexpress.com/e/_c3oFkUUl" target="_blank">(AliExpress)</a>

{{imgBasket}}AAA battery replacement with power socket EU
<a href="https://s.click.aliexpress.com/e/_opan0OF" target="_blank">(AliExpress)</a>

{{imgBasket}}CR2032 battery replacement with USB
<a href="https://s.click.aliexpress.com/e/_DDUCKpH" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/3YWg1LO#ad" target="_blank">(Amazon US)</a>

{{imgBasket}}USB A or C to clips 3V (same voltage as two batteries)
<a href="https://s.click.aliexpress.com/e/_c3nZhTbN" target="_blank">

<img src="../projects/images_christmas_decorations/USB_to_clip_3v.avif" height="150px" alt="battery eliminator"/>

<br>

---

## Cables

### Micro USB power cable

USB-A to micro USB cable to power the ESP.

<a href="https://s.click.aliexpress.com/e/_c32Nxdc7" target="_blank">
<img src="../esphome/images/micro_usb_cable.jpg" height="150px" alt="Micro USB cable" /><br>
{{imgBasket}}Micro USB cable (AliExpress)</a>
<a href="https://amzn.to/42C3sHw#ad" target="_blank">(Amazon US)</a>
<a href="https://amzn.to/3CAUNdU#ad" target="_blank">(Amazon NL)</a>

### USB-C power cable

USB-A to USB-C cable to power the ESP.

<a href="https://s.click.aliexpress.com/e/_oB1SfVP" target="_blank">
<img src="images_zigbee/usb_c_cable.jpg" height="150px" alt="USB C cable" /><br>
{{imgBasket}}USB-A to USB-C cable (AliExpress)</a>
<a href="https://amzn.to/3RdjocW#ad" target="_blank">(Amazon US)</a>

### USB-C to USB-C

USB-C to USB-C power cable with 90-degree connectors.

<a href="https://s.click.aliexpress.com/e/_EvdirFL" target="_blank">
<img src="/buy/images_diy/usb_c_cable.avif" height="150px" alt="USB C to USB C cable" /><br>
{{imgBasket}}USB-C to USB-C power cable (AliExpress)</a>
<a href="https://amzn.to/3RaTlDi#ad" target="_blank">(Amazon US)</a>

### USB-A extension cable

Useful to move your Zigbee stick away from your server for the best range and avoid interference.

<a href="https://s.click.aliexpress.com/e/_oFCMjGU" target="_blank">
<img src="images_zigbee/usb_a_extension_cable.webp" height="150px" alt="extension cable" /><br>
{{imgBasket}}USB A Extension Cable Male to Female (AliExpress)</a>
<a href="https://amzn.to/42tTmaE#ad" target="_blank">(Amazon US)</a>

<br>

---

## Power

### Adapters

5V USB EU power adapter to power your USB devices.

<img src="../esphome/images/5v_power_adapter.jpg" alt="5V USB EU power adapter" width="200px"/>

{{imgBasket}}5V 2A EU USB power adapter <a href="https://s.click.aliexpress.com/e/_c3BEg2xd" target="_blank">(AliExpress)</a>

{{imgBasket}}5V 2A EU USB power adapter <a href="https://s.click.aliexpress.com/e/_c3uacEZt" target="_blank">(AliExpress)</a>

5V EU USB power adapter to power multiple usb devices, with fast charging and 3.1A.

<a href="https://s.click.aliexpress.com/e/_ol8RIG1" target="_blank">
<img src="images_diy/usb_power_charger.png" alt="5V EU USB power adapter" width="200px"/></a>

{{imgBasket}}5V USB EU power adapter
<a href="https://s.click.aliexpress.com/e/_ol8RIG1" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/4cvtLCK#ad" target="_blank">(Amazon US)</a>

<br>

---

## Battery powered with PIR

Not connected, but still smart with a PIR sensor in it.

### Lights

Very useful for closets or stairs where no power is available.

<a href="https://s.click.aliexpress.com/e/_DC7Ac3r" target="_blank">
<img src="images_diy/battery_powered_pir_lights.avif" alt="Battery powered PIR lights" width="200px"/></a>

{{imgBasket}}Battery powered PIR lights
<a href="https://s.click.aliexpress.com/e/_DC7Ac3r" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/42zFj4t#ad" target="_blank">(Amazon US)</a>

<br>

### Automatic soap dispenser

With this automatic soap dispenser, you can wash your hands much quicker and without touching the soap dispenser!
A must-have for in my kitchen since I used it for the first time.
It contains a PIR sensor to detect that your hand is close by, and then it dispenses a small amount of foam soap.
The amount can be defined in four levels.

The dispenser contains the soap already mixed with water so foam is coming out of it.
You don't need to create the foam yourself which saves water, time and soap.

I have multiple ones in use around the house.
In the kitchen, bathroom and toilet.

<a href="https://s.click.aliexpress.com/e/_c4c4gh1d" target="_blank">
<img src="images_kitchen/soap_dispenser2.avif" alt="Battery powered automatic soap dispenser" width="200px"/></a>

Make sure you select the foam version and not the normal liquid one!

{{imgBasket}}Battery powered automatic soap dispenser
<a href="https://s.click.aliexpress.com/e/_c4c4gh1d" target="_blank">(AliExpress)</a>
<a href="https://amzn.to/46IqsFS#ad" target="_blank">(Amazon US)</a>


<br>

---

<br><br>
That's it for the indoor sensors, see also my [Outdoor sensors - Best Buy Tips](zigbee_outdoor)

Or check out [ESPHome DIY sensors buy tips](esphome_diy) for all kinds of hardware buy tips to create your own sensors.
