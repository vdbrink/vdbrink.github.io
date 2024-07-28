---
title: "Zigbee Smart home - best buy tips"
description: "Useful link to buy Zigbee sensors other devices for your smart home automation with Home Assistant"
category: Buy tips
tags: [Best, Buy, tips, smart, home automation, batteries, sensors, Aqara, Tuya, Zigbee]
image: /buy/images_zigbee/zigbee_banner.png
---
{% capture imgBasket %}<img src="images/basket.png" alt="" style="margin-right:5px;margin-top:4px;padding-right:2px;float:left"/>{% endcapture %}

# Zigbee Smart home - best buy tips

<br>

![Banner](images_zigbee/zigbee_banner.png)

<br>

What is a smart home without digital ears and eyes? Sensors are the digital version of those.\
With the sensor data, you can make conditions, act on it and control other devices.

On this page, you find my personal favorite sensors, actuator and other Zigbee home automation related hardware.

If you need some home automation inspiration, check my [home automation ideas](../ideas/home_automation_ideas) section!

Most devices are for sale by the online shop AliExpress.
I order 90% of my home automation devices on this site for years already. 
You pay a good price, and they have fast shipping, sometimes you have the order already delivered within one week!

---

## Table of Contents
<!-- TOC -->
  * [Why I chose Zigbee](#why-i-chose-zigbee)
  * [Zigbee coordinator](#zigbee-coordinator)
  * [Contact sensor](#contact-sensor)
  * [Motion sensor](#motion-sensor)
  * [Presence detection sensor](#presence-detection-sensor)
  * [Smart socket](#smart-socket)
  * [Temperature sensor](#temperature-sensor)
  * [Lux sensor](#lux-sensor)
  * [Leak sensor](#leak-sensor)
  * [Lights](#lights)
    * [Bulb](#bulb)
    * [LED strip](#led-strip)
  * [Buttons](#buttons)
    * [Wall switch](#wall-switch)
    * [Wall dimmer](#wall-dimmer)
    * [Portable button](#portable-button)
  * [Vibration sensor](#vibration-sensor)
  * [Google Coral USB](#google-coral-usb)
  * [Batteries](#batteries)
    * [AAA sized](#aaa-sized)
    * [CR2032](#cr2032)
    * [CR1632](#cr1632)
    * [CR2450](#cr2450)
  * [Cables](#cables)
    * [Micro USB power cable](#micro-usb-power-cable)
    * [USB-C power cable](#usb-c-power-cable)
    * [USB-A extension cable](#usb-a-extension-cable)
  * [Power](#power)
<!-- TOC -->

---

> **_NOTE 1:_** Almost all hardware links on this page are devices I also use myself.\
> Most of the links are affiliate links, so you pay the same price AND support my blog also by buying it from here.

> **_NOTE 2:_** I advise these products based on my personal experience.\
> I run my network with a CC2652 Zigbee adapter and Zigbee2MQTT.\
> It can be with other hardware combinations it doesn't run with the same experience.
---
## Why I chose Zigbee

On the market, there are different types of protocols to create a smart home network. Like Zigbee, Thread, Wifi, Bluetooth, Z-Wave and Matter. All with their pros and cons. You can use different protocols next to each other. I chose for one, specific Zigbee.

<img src="images_zigbee/zigbee.jpg" alt="zigbee" height="60px" style="margin-left:15px;float:right"/>

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

## Zigbee coordinator

<a href="https://slae.sh/projects/cc2652/" target="_blank">
<img src="images_zigbee/slaesh_zigbee_stick_CC2652RB.jpg" alt="Slaesh's CC2652RB stick" height="150px" style="margin-left:15px;float:right"/></a>

Since 2020, I've run non-stop my Zigbee network with the {{imgBasket}}<a href="https://slae.sh/projects/cc2652/" target="_blank">Slaesh's CC2652RB stick (Slae website)</a> without any issue, it's a very reliable stick.
My network grew to 120+ devices today, and it still runs fast.

To avoid interference with Bluetooth or wifi,
it's better to move the stick away from the server. This is recommended for every stick. 
You can use a {{imgBasket}}<a href="https://s.click.aliexpress.com/e/_m0Tzory" target="_blank">20 cm USB A extension cord (AliExpress)</a> for it.

---

## Contact sensor

<a href="https://s.click.aliexpress.com/e/_EumfxFt" target="blank">
<img src="images_zigbee/zigbee_contact_sensor_aqara.webp" alt="contact sensor" height="150px" style="margin-left:15px;float:right"/></a>

A contact sensor can be placed to check if doors and windows are open or closed. The sensor knows only those two values. The contact sensor works with a "reed switch", the circuit is by default open, but when there is a magnet nearby, the internal metal closes the circuit.

The sensor can also be used attached to other sensors that also return an open or closed circuit. With this behavior, you can create also a seat sensor or a water leak sensor.

<a href="https://s.click.aliexpress.com/e/_EumfxFt" target="blank">
<img src="images_zigbee/zigbee_contact_sensor_aqara.webp" alt="Aqara contact sensor" height="100px" /></a>
&nbsp;
<a href="https://s.click.aliexpress.com/e/_DdEILMb" target="blank">
<img src="images_zigbee/zigbee_contact_sensor.webp" alt="contact sensor" height="100px" /></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_EumfxFt" target="blank">Zigbee Contact sensor - Aqara (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DdEILMb" target="blank">Zigbee Contact sensor - Tuya (AliExpress)</a>

---

## Motion sensor
<a href="https://s.click.aliexpress.com/e/_DBmzpmB" target="_blank">
<img src="../ideas/images/motion_sensor.png" alt="pir motion sensor" height="150px" style="margin-left:15px;float:right"/>
</a>

The traditional motion sensors work with PIR, which stands for Passive InfraRed. This sensor detects objects which sending heat, like humans and animals. 

I like the Aqara motion sensor myself a lot. It's fast, reliable. With the stand you can point it in a specific direction, so it doesn't 'see' the whole room.

If I want to cover a whole room, I use a different type PIR sensor which you can stick in the center of the ceiling and look around in all directions.

<a href="https://s.click.aliexpress.com/e/_DBmzpmB" target="_blank">
<img src="../ideas/images/motion_sensor.png" alt="motion sensor" height="100px" style="margin-left:15px;float:left"/></a> &nbsp;
<a href="https://s.click.aliexpress.com/e/_Dn2fzd5" target="_blank"><img src="images_zigbee/zigbee_motion_all_directions.webp" height="100px"></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DBmzpmB" target="_blank">Zigbee motion sensor beam, with stand - Aqara (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DFRt33t" target="_blank">Zigbee motion sensor beam, without stand - Xiaomi (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_Dn2fzd5" target="_blank">Zigbee motion sensor all directions - Tuya (AliExpress)</a>

---
## Presence detection sensor

<a href="https://s.click.aliexpress.com/e/_oEbnm2m" target="blank">
<img src="images_zigbee/mmwave_motion_sensor.jpg" alt="mmwave Presence detection sensor" height="150px" style="margin-left:15px;float:right"/></a>

A millimeter wave presence sensor has no need to direct sight. You can hide it in a closet.
It uses 24 GHz to send it signal to detect people in a room.
It can also detect persons when they don't move, like they sit on a couch. Ideal for the living room or home office.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_oEbnm2m" target="_blank">Zigbee mmWave Presence detection sensor (AliExpress)</a>

---

## Smart socket
<a href="https://s.click.aliexpress.com/e/_m0qPURC" target="blank">
<img src="../esphome/orcon_images/blitzwolf_shp-15_zigbee_socket.jpg" alt="BlitzWolf SHP-15 smart socket" height="150px" style="margin-left:15px;float:right"/></a>

Smart sockets are useful to make traditional "dump" devices smart. Like a traditional standing lamp with a plug. You put it "on" and place the smart plug between the socket and wall. Now you change the switch functionality to the plug which you can be controlled automatically.

Sockets are always connected to power, this makes this sensor also a hub in theZigbee network which extends the range and coverage of your network. You can also plug a smart socket somewhere strategic with bad coverage to improve this. He doesn't need to be on or used.

A smart plug with power consumption metrics can be useful to detect the state of the machine. You don't use the on/off functionality in that case. This can be used for washing machines, dryers, dishwashers, ovens, etc.

I use the Zigbee BlitzWolf SHP-13 or SHP-15 which has also power consumption measurement, a physic button to switch the state and can handle 3680 W and 16 A which is enough for washing machines and dryers. It took me a while before I got the correct one for this purpose, and now it runs for years without issues. 
If you buy one which has a lower wattage, your socket constantly stops working; then you know you need one with a higher wattage!

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_m0qPURC" target="_blank">Zigbee smart power socket with power measurement - BlitzWolf SHP-15 (AliExpress)</a>

{{imgBasket}}<a href="https://www.banggood.com/BlitzWolf-BW-SHP13-ZigBee3_0-Smart-Socket-16A-EU-Plug-Electricity-Metering-APP-Remote-Controller-Timer-Work-with-Amazon-Alexa-Google-Home-p-2000907.html?warehouse=CN&ID=0&p=IF081412102025201707&custlinkid=3954741" target="_blank">Zigbee smart power socket with power measurement - BlitzWolf SHP-13 (Banggood)</a>

### Outdoor socket
<a href="https://www.amazon.de/dp/B0CN8FDSKP" target="blank">
<img src="images_zigbee/outdoor_socket_A4Z.jpg" alt="Nous A4Z ZigBee Outdoor Smart Socket" height="150px" style="margin-left:15px;float:right"/></a>

This outdoor Zigbee power socket, where each socket can be controlled individual and has power consumption measurements.

{{imgBasket}}<a href="https://www.amazon.de/dp/B0CN8FDSKP" target="_blank">Zigbee dual port power socket with power measurement - Nous (Amazon.de)</a>

<br>

---

## Temperature sensor

<a href="https://s.click.aliexpress.com/e/_DFVRG63" target="blank">
<img src="images_zigbee/zigbee_temperature_humidity_sensor_aqara.webp" alt="Aqara temperature and humidity sensor" height="150px" style="margin-left:15px;float:right"/></a>

A temperature sensor is a simple sensor that measures, next to the temperature also, the humidity in a room. this sensor is useful to make automations like take action if someone is in the shower. Or in the summer when it becomes outside colder than inside.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DFVRG63" target="_blank">Zigbee temperature and humidity sensor - Aqara (AliExpress)</a>

{{imgBasket}}<a href="https://www.banggood.com/Aqara-Temperature-Sensor-Smart-Zigbe-Air-Pressure-Humidity-Environment-Sensor-Remote-Control-for-XiaoMi-Home-Homekit-p-2004763.html?warehouse=CN&ID=0&p=IF081412102025201707&custlinkid=3958785" target="_blank">Zigbee temperature and humidity sensor - Aqara (Banggood)</a>

---

## Lux sensor

<a href="https://s.click.aliexpress.com/e/_DdVtS4P" target="blank">
<img src="../ideas/images/lux_sensor.jpg" alt="lux sensor" height="150px" style="margin-left:15px;float:right"/></a>

A lux sensor is a sensor that measures the light intensity.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DdVtS4P" target="_blank">Zigbee lux sensor - Aqara (AliExpress)</a>
<br><br><br><br><br>

---

## Leak sensor

<a href="https://s.click.aliexpress.com/e/_DCRMz4L" target="blank">
<img src="images_zigbee/leak_sensor.webp" alt="leak sensor" height="150px" style="margin-left:15px;float:right"/></a>

A leak sensor is a sensor that measures if there is water, then the two contacts have a closed circuit because water conducts.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DCRMz4L" target="_blank">Zigbee leak sensor (AliExpress)</a>
<br><br><br>

---

## Lights

### Bulb

<a href="https://s.click.aliexpress.com/e/_oFxRuUw" target="_blank"><img src="../ideas/images/smart_bulb.webp" alt="smart bulb" height="150px" style="margin-left:15px;float:right"/></a>

You can replace a normal E27 bulb with Zigbee variant.
With a colored version, you can use it to inform yourself with a color for different states.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_oFxRuUw" target="_blank">Zigbee light bulb dimmable colored (AliExpress)</a>

&nbsp;
<br>

---

### LED strip

<a href="https://s.click.aliexpress.com/e/_ookcWte" target="_blank">
<img src="../projects/images_bin_day/zigbee_rgb_led_strip.webp" alt="LED strip" height="150px" style="margin-left:15px;float:right"/></a>

This LED strip is available in different versions:
* Indoor no waterproof (IP20) / Outdoor waterproof (IP65)
* 5 / 10 meter
* RGB White or RGB Warm White

<br>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_ookcWte" target="_blank">Zigbee RGB 5m LED strip (AliExpress)</a>

---

## Buttons

### Wall switch

<a href="https://s.click.aliexpress.com/e/_Ddxq8ej" target="_blank">
<img src="images_zigbee/zigbee_moes_wall_switch.webp" alt="Zigbee Moes wall switch" height="150px" style="margin-left:15px;float:right"/></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DBfTCOj" target="_blank">Zigbee wall switch - Aqara (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_Ddxq8ej" target="_blank">Zigbee wall switch - Moes (AliExpress)</a>

<br>
<br>
<br>

### Wall dimmer

<a href="https://www.ecodim.nl/nl/eco-dim07-zigbee-basic.html" target="_blank">
<img src="images_zigbee/ecodim07.webp" alt="Zigbee dimmers" height="150px" style="margin-left:15px;float:right"/></a>

This Zigbee dimmer replaces an original wall dimmer module.\
The easiest way to make a dimmable group with gu10 lights smart.

{{imgBasket}}<a href="https://www.ecodim.nl/nl/eco-dim07-zigbee-basic.html" target="_blank">ECO-DIM.07 Led dimmer press/turn 0-200W - EcoDim (manufacturer site with links to different shops)</a>

{{imgBasket}}<a href="https://www.ecodim.nl/nl/smart-led-dimmers-en-schakelaars/zigbee/" target="_blank">Other EcoDimZigbee devices - EcoDim (manufacturer site with links to different shops)</a>

---

### Portable button

<a href="https://s.click.aliexpress.com/e/_DF2oxu7" target="_blank">
<img src="images_zigbee/zigbee_button.webp" alt="Zigbee button" height="150px" style="margin-left:15px;float:right"/></a>

This button can trigger multiple scenario's because it supports three press types: single-, double- and long press.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DF2oxu7" target="_blank">Zigbee button - Aqara (AliExpress)</a>
<br><br><br><br>

---

## Vibration sensor

<a href="https://s.click.aliexpress.com/e/_Dn1kLJv" target="_blank">
<img src="images_zigbee/zigbee_vibration_sensor.webp" alt="Zigbee button" height="150px" style="margin-left:15px;float:right"/></a>

This button can measure vibrations and rotations in the X, Y and Z direction.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_Dn1kLJv" target="_blank">Zigbee vibration sensor - Aqara (AliExpress)</a>
<br><br><br><br>

---

## Google Coral USB

<a href="https://s.click.aliexpress.com/e/_DlhnnAf" target="_blank">
<img src="images_zigbee/google_coral.webp" alt="Google Coral" width="150px" style="margin-left:15px;float:right"/></a>

USB stick to handle heavy GPU processes, like human detection with Frigate. 

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DlhnnAf" target="_blank">Coral - Google (AliExpress)</a>

---

## Batteries

The advantage of a lot of Zigbee sensors is that they work completely wireless. 
You can place them everywhere without the need to wire them.
Most of the devices run for years on a single battery, but now and then you need to replace them.
Before you start using a new sensor, first check what kind of battery it uses and already order some of them.
When it gets out of fuel, you can directly replace it with a new battery.

These are common types of batteries used by the above-mentioned sensors:

### AAA sized

<a href="https://s.click.aliexpress.com/e/_DkcYcJt" target="_blank">
<img src="images_zigbee/battery_aa_aaa.jpg" alt="battery AA and AAA" height="150px" style="margin-left:15px;float:right"/></a>

The advantage of these is that they are everywhere available to buy, also in your local supermarket.
Because of the size, they can run for a long time on a single battery. Even these are available as rechargeable. 
The downside is that these make the sensor also quite big.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DEejMZ5" target="_blank">Eneloop Rechargeable AA and AAA batteries - Panasonic (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DkcYcJt" target="_blank">4x Rechargeable AA batteries - Duracell (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_mr8Qxrc" target="_blank">Non rechargeable AA and AAA batteries - Yuform (AliExpress)</a>

### CR2032

<a href="https://s.click.aliexpress.com/e/_DBuYbP9" target="_blank">
<img src="images_zigbee/cr2032.webp" alt="CR2032" width="100px" style="margin-left:15px;float:right"/></a>

This CR2032 is the most commonly used battery. It's small, but still has enough power to run sensors for a year.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DBuYbP9" target="_blank">CR2032 - Panasonic (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DncQAcL" target="_blank">CR2032 - Sony (AliExpress)</a>

#### CR2032 rechargeable = LIR2032

<a href="https://s.click.aliexpress.com/e/_Dl3y9qT" target="_blank">
<img src="images_zigbee/cr2032_rechargeable.webp" alt="LIR2032" width="100px" style="margin-left:15px;float:right"/></a>
Instead of buying batteries for only a single use it's also possible to buy the rechargeable variant of the CR2032, called LIR2032.

They not very famous and more expensive but environment friendlier, and it reduces waste.
<br><br>
<a href="https://s.click.aliexpress.com/e/_DdlNfZD" target="_blank">
<img src="images_zigbee/cr2032_rechargeable_adapter.webp" alt="LIR2032 adapter" height="150px" style="margin-left:15px;float:right"/></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DdlNfZD" target="_blank">LIR2032 rechargeable adapter with USB-C (batteries not included)</a> Lights green when it's full.
DON'T CHARGE NORMAL CR2032 WITH IT!

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_Dl3y9qT" target="_blank">2x LIR2032 rechargeable batteries - L.A Energy </a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DmO93yn" target="_blank">2x LIR2032 rechargeable batteries - Maxwell</a>

#### CR2032 USB battery replacements

<a href="https://s.click.aliexpress.com/e/_DDUCKpH" target="_blank">
<img src="images_zigbee/cr2032_to_usb.webp" alt="CR2032 to USB" height="150px" style="margin-left:15px;float:right" /></a>
It's also possible to convert a wireless CR2032 devices to a USB wired devices. Now you don't have to care about replacing batteries. 

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DDUCKpH" target="_blank">link 1 (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_Dlb4x11" target="_blank">link 2 (AliExpress)</a>


### CR1632

<img src="images_zigbee/cr1632.webp" alt="CR1632" width="100px" style="margin-left:15px;float:right"/>

This CR1632 battery is a bit smaller than the CR2032.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_mLyGW8a" target="_blank">CR1632 - Panasonic (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_onH4bF0" target="_blank">CR1632 - Panasonic (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DE2CUQX" target="_blank">Rechargeable LIR1632 - L.A Energy (AliExpress)</a>

### CR2450

<img src="images_zigbee/cr2450.webp" alt="CR2450" width="100px" style="margin-left:15px;float:right"/>

This CR2450 battery is a bit thicker than the other ones.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_EGHDQRv" target="_blank">CR2450 - Eoenkk (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_mrp3BBy" target="_blank">CR2450 - Panasonic (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DevdMzz" target="_blank">Rechargeable LIR2450 (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DntctnV" target="_blank">Rechargeable LIR2450 + charger (AliExpress)</a>

### Battery eliminators

<a href="https://s.click.aliexpress.com/e/_oElMTEQ" target="_blank">
<img src="../projects/images_christmas_lights/battery_eliminator.webp" height="150px" alt="battery eliminator" style="margin-left:15px;float:right" /></a>

Battery eliminator (aka battery replacements) is, as the name already says, a replacement for battery power device to connect them to the main power.
This saves you from buying new batteries. The big advantage is also that you now can control them with your home automations by adding a smart plugin between the plug and the wall outlet. Now you also don't have to worry that you forgot them to put them off again.
There are different variants of them. Replacements for AA or AAA batteries and with a plug or USB connector. The advantage of a USB connector is that you can plug multiple to an active powered USB-hub to control multiple ones.

I use these a lot for all kinds of Christmas decorations.

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_oElMTEQ" target="_blank">AA battery replacement with USB (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_oBi7yye" target="_blank">AAA battery replacement with USB (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_o2FtBHM" target="_blank">AA battery replacement with power socket EU (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_opJpPLu" target="_blank">AAA battery replacement with power socket EU (AliExpress)</a> 

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DDUCKpH" target="_blank">CR2032 battery replacement with USB (AliExpress)</a>

---

## Cables

### Micro USB power cable

USB-A to micro USB cable to power the ESP.

<a href="https://s.click.aliexpress.com/e/_onj6tZi" target="_blank">
<img src="../esphome/images/micro_usb_cable.jpg" height="150px" alt="Micro USB cable" /><br>
{{imgBasket}}Micro USB cable (AliExpress)</a>

### USB-C power cable

USB-A to USB-C cable to power the ESP.

<a href="https://s.click.aliexpress.com/e/_EHngRGX" target="_blank">
<img src="images_zigbee/usb_c_cable.jpg" height="150px" alt="USB C cable" /><br>
{{imgBasket}}USB-C cable (AliExpress)</a>

### USB-A extension cable

<a href="https://s.click.aliexpress.com/e/_mstQlFs" target="_blank">
<img src="images_zigbee/usb_a_extension_cable.webp" height="150px" alt="battery eliminator" /><br>
{{imgBasket}}USB A Extension Cable Male to Female (AliExpress)</a>

---

## Power

### Adapters

5V USB power adapter to power your USB devices.

<img src="../esphome/images/5v_power_adapter.jpg" alt="5V USB power adapter" width="200px"/>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DBB3Upl" target="_blank">link 1 (AliExpress)</a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DCdi80b" target="_blank">link 2 (AliExpress)</a>

5V USB power adapter to power multiple usb devices, with fast charging and 3.1A.

<a href="https://s.click.aliexpress.com/e/_DeEZ7xD" target="_blank">
<img src="images_diy/usb_power_charger.png" alt="5V USB power adapter" width="200px"/></a>

{{imgBasket}}<a href="https://s.click.aliexpress.com/e/_DeEZ7xD" target="_blank">link 2</a>

---

See [ESPHome DIY sensors buy tips](esphome_diy) for all kinds or hardware buy tips to create your own sensors.