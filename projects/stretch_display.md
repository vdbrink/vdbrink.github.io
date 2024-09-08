---
title: "Stretch display"
description: "A stretched display to show Home Assistant dashboard on"
category: Projects
tags: [display, stretch, long, weather, station, Home Assistant, raspberry, rpi, kiosk]
#image:
---

# Stretch display
*With a Home Assistant dashboard*

---
## Introduction

<a href="index"><img src="images_stretch_display/basic_weather_station.jpg" style="float: right;margin-left:15px" alt="Old weather station" height="150px"></a>
I had for years a basic weather station with a radio receiver to see the in- and outside weather data (temperature, humidity and pressure). Now with Home Assistant, and my local weather station, I have so much more weather data available that I want to replace my old weather station display for something new, based on the data in Home assistant.

I was also looking for a small display to show the actual Co2 and temperature data in my home office.
I found out when the Co2 was too high and/or the temperature is above 23 degrees, the concentration drops.

---
## My solutions

I created two Home Assistant dashboards: one for my office climate and the other as my weather data display.

<img src="images_stretch_display/office_display1.png" alt="HA office display" width="150px">&nbsp;
<img src="images_stretch_display/weather_display1.png" alt="HA office display" width="150px">

[//]: # (I considered just using a normal tablet, but for me, it was quite big.)

---

## Table of Contents
<!-- TOC -->
  * [Introduction](#introduction)
  * [My solutions](#my-solutions)
  * [Required hardware](#required-hardware)
  * [Required software](#required-software)
  * [Display PC configuration](#display-pc-configuration)
    * [Install Raspberry OS Desktop](#install-raspberry-os-desktop)
    * [Auto-load browser in kiosk mode on boot](#auto-load-browser-in-kiosk-mode-on-boot)
    * [Home Assistant auto login user](#home-assistant-auto-login-user)
    * [Energy saving](#energy-saving)
  * [Home Assistant dashboard](#home-assistant-dashboard)
    * [Weather station stretch display](#weather-station-stretch-display)
    * [Office stretch display](#office-stretch-display)
  * [Future improvements](#future-improvements)
<!-- TOC -->

---

## Required hardware

It's always good to use parts which you still have lying around, but otherwise you can buy these products as well to create this project yourself.\
Also affiliate links are used here.

These hardware components (or alternatives) are required:

### Device with a web browser

A small device with an OS which can run a web browser on it.\
I had a <a href="https://s.click.aliexpress.com/e/_DeRuI2X" target="blank">Raspberry 3B</a> (AliExpress) lying around which I could use. I bought a black <a href="https://s.click.aliexpress.com/e/_Dmj5kZp" target="blank">case</a> (AliExpress) for it.\
You can also buy a cheaper <a href="https://s.click.aliexpress.com/e/_Dd3Z9UJ" target="blank">Raspberry Pi Zero W</a> (AliExpress), a faster <a href="https://s.click.aliexpress.com/e/_DBzV3yf" target="blank">Raspberry Pi Zero 2 W</a> (AliExpress) or use an old mobile phone. For a mobile phone, I recommend to remove the battery and hack an USB power plug to it.

<a href="https://s.click.aliexpress.com/e/_DeRuI2X" target="blank"><img src="images_stretch_display/raspberry_3b.webp" alt="Raspberry 3B" width="30%"/></a>
<a href="https://s.click.aliexpress.com/e/_Dd3Z9UJ" target="blank"><img src="images_stretch_display/raspberry_pi_zero_w.jpg" alt="Raspberry Pi zerro" width="30%"/></a>
<img src="images_stretch_display/old_phone.jpg" alt="Old phone" width="30%"/>

#### Micro SD-card

<a href="https://s.click.aliexpress.com/e/_DlQd1i3" target="blank">SD card</a> to install the OS on, such as Raspberry Pi OS desktop. An 8 GB version is already enough. Speed is not an issue for this card, it only boots and then doesn't need to read and write once it's booted.

<a href="https://s.click.aliexpress.com/e/_DlQd1i3" target="blank"><img src="images_stretch_display/sdcard.webp" alt="SD card" height="100px"/></a>

#### Power

To power the Raspberry 3B it requires at least 5V with 3A, otherwise you get the message "Low voltage warning" in Raspberry OS.
To also power the display, I use <a href="https://s.click.aliexpress.com/e/_DEeGxaf" target="_blank">this adapter</a>.

<a href="https://s.click.aliexpress.com/e/_DEeGxaf" target="_blank">
<img src="../buy/images_diy/usb_power_charger.png" alt="5V USB power adapter" width="180px"/></a>

An <a href="https://s.click.aliexpress.com/e/_DEOs79d" target="_blank">USB cable</a> type A to micro USB to power the RPI 3.

<a href="https://s.click.aliexpress.com/e/_DEOs79d" target="_blank">
<img src="../buy/images_diy/usb_cable_micro_usb.avif" alt="USB cable" width="180px"/></a>

<a href="/buy/esphome_diy" target="_blank">alternative links</a>

---

### Stretch Display

For my project, I use option 1.

#### Option 1

<a href="https://s.click.aliexpress.com/e/_DEfuj8B" target="blank">Stretch Display 1</a> ~ &euro; 50,- (AliExpress)
* 8.8 Inch 
* Resolution 1920 * 480
* NO touchscreen
* Comes with power and HDMI cable

  <a href="https://s.click.aliexpress.com/e/_DeEXehl" target="blank"><img src="images_stretch_display/stretch_display.webp" alt="Stretch display with touchscreen" width="30%"/></a>

#### Option 2

<a href="https://s.click.aliexpress.com/e/_DEfuj8B" target="blank">Stretch Display 2</a> ~ &euro; 90,- (AliExpress)
* Same size and resolution but a better version as above
* WITH IPS touchscreen
* Brighter colors
* Raspberry mount on the back

  <a href="https://s.click.aliexpress.com/e/_DDB5WBt" target="blank"><img src="images_stretch_display/stretch_display_touchscreen.webp" alt="Stretch display with touchscreen" width="30%"/></a>

#### Option 3

Of course, any other display can also be used!

### Display holder

<a href="https://s.click.aliexpress.com/e/_Dek5V2b">Display holder</a> (AliExpress) An adjustable version in width and height to position the display in the right height and angle.
 This display fits exactly between the claws and the cable fits through it. Which gives it a smooth design. 
  
<img src="images_stretch_display/display_holder.webp" alt="Display holder" height="180px"/>

---

### Smart socket

<a href="../buy/smart_home_best_buy_tips#smart-socket">Zigbee smart plug</a> (AliExpress), to only run the PC and display only when someone is nearby otherwise it can automatically be turned off to save energy.

  <a href="../buy/smart_home_best_buy_tips#smart-socket"><img src="../esphome/orcon_images/blitzwolf_shp-15_zigbee_socket.jpg" alt="BlitzWolf SHP-15 smart socket" height="150px"/></a>

---

### USB Keyboard

Optional USB keyboard to install the Raspberry. Once installed, it can be controlled via SSH.

<img src="images_stretch_display/usb_keyboard.webp" alt="" height="180px"/>

---

## Required software

 https://www.raspberrypi.com/software/operating-systems/

Home Assistant

---

## Display PC configuration

### Install Raspberry OS Desktop



### Auto load browser in kiosk mode on boot

### Home Assistant auto login user

### Home Assistant hide header toolbar

https://github.com/NemesisRE/kiosk-mode

### Energy saving - auto boot/shutdown

---

## Home Assistant dashboard

### Weather station stretch display

### Office stretch display


---

## Future improvements

[//]: # ()
[//]: # (* Auto switch tabs )

[//]: # (* Custom boot logo)

[//]: # (* Nice casing)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (RPI OS 64 bit )

[//]: # (activate wifi)

[//]: # ()
[//]: # (activate SSH)

[//]: # ()
[//]: # (Raspberry Pi Kiosk mode)

[//]: # ()
[//]: # (Auto boot with full screen Home Assistant url in a Chrome window.)

[//]: # ()
[//]: # (sudo raspi-config)

[//]: # ()
[//]: # (wayland RPI 4 + 5)

[//]: # (https://www.raspberrypi.com/tutorials/how-to-use-a-raspberry-pi-in-kiosk-mode/)

[//]: # ()
[//]: # (X11 RPI 3)

[//]: # (sudo apt-get install matchbox-window-manager xautomation unclutter)

[//]: # ()
[//]: # ()
[//]: # (vim /home/pi/.config/lxsession/LXDE-pi/autostart)

[//]: # ()
[//]: # (```yaml)

[//]: # ({% raw %})

[//]: # (@xset s off)

[//]: # (@xset -dpms)

[//]: # (@xset s noblank)

[//]: # (@chromium-browser --kiosk -disable-translate --hide-scrollbars -enable-features=OverlayScrollbar,OverlayScrollbarFlashAfterAnyScrollUpdate,OverlayScrollbarFlashWhenMouseEnter --app=http://192.168.1.100:8123/stretch-display/0)

[//]: # (@unclutter -idle 0)

[//]: # ({% endraw %})

[//]: # (```)

[//]: # ()
[//]: # (https://www.espboards.dev/blog/raspberry-lcd-screen-homeassistant/)

[//]: # (ander 3 maanden actieve login )

[//]: # ()
[//]: # (---)

[//]: # ()

---

Links to other sections of this blog site.

[Main page](../index) | [Other projects](index) | [Home Assistant](../homeassistant/index) | [ESPHome](../esphome/index) | [Node RED](../node-red/index)