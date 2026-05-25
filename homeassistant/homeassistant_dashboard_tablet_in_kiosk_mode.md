---
title: "Home Assistant dashboard: on a tablet in Kiosk mode"
description: "Guide how to show your Home Assistant dashboard on a tablet in kiosk mode with Fully Kiosk Browser"
category: Home Assistant
tags: [Home Assistant, dashboard, tablet, fullscreen, app, kiosk, Fully Kiosk Browser]
image: /homeassistant/images_tablet_in_kiosk_mode/ha_on_tablet_in_kiosk_mode1.png
---

# Home Assistant dashboard:<br>on a tablet in Kiosk mode
*With Fully Kiosk Browser*

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>
Home Assistant has multiple ways to show you the dashboard.
It has an Android native app which can be used on an Android tablet or phone, or you can browse to the frontend on any device with a browser.
In all these scenarios, you see all Home Assistant side and top menu items, you can edit all screens and see the browser with its url.

If you want to show only the content of a single dashboard in fullscreen, then you need to define this page in Kiosk mode.

Here you can read how to configure this.

<a href="images_tablet_in_kiosk_mode/ha_on_tablet_in_kiosk_mode1.png">
<img src="images_tablet_in_kiosk_mode/ha_on_tablet_in_kiosk_mode1.png" alt="Home Assistant dashboard in kiosk mode" width="100%">
</a>
<em>Example of a Home Assistant dashboard presented on a tablet.</em>

[Here](#create-a-tablet-dashboard) you can go directly to the Home Assistant dashboard section on this page.

---
## Table of Contents
<!-- TOC -->
  * [What is Kiosk mode?](#what-is-kiosk-mode)
  * [Set Home Assistant in Kiosk mode](#set-home-assistant-in-kiosk-mode)
    * [Hide side toolbar](#hide-side-toolbar)
    * [Hide top toolbar](#hide-top-toolbar)
      * [Swipe to other dashboard view](#swipe-to-other-dashboard-view)
  * [Set a tablet in Kiosk mode](#set-a-tablet-in-kiosk-mode)
    * [Fullscreen browser](#fullscreen-browser)
    * [Android tablet](#android-tablet)
    * [iOS iPad tablet](#ios-ipad-tablet)
  * [Configure Fully Kiosk Browser](#configure-fully-kiosk-browser)
    * [Enable remote admin](#enable-remote-admin)
    * [Auto screen on](#auto-screen-on)
    * [Auto screen off](#auto-screen-off)
    * [Only charge tablet battery when needed](#only-charge-tablet-battery-when-needed)
  * [Create a tablet dashboard](#create-a-tablet-dashboard)
    * [What's on my dashboard](#whats-on-my-dashboard)
      * [Basic elements](#basic-elements)
      * [Optional elements](#optional-elements)
        * [YAML how to make elements conditional](#yaml-how-to-make-elements-conditional)
      * [Fullscreen camera stream](#fullscreen-camera-stream)
<!-- TOC -->

---
## What is Kiosk mode?

<img src="images_tablet_in_kiosk_mode/kiosk.jpg" alt="kiosk example" style="float:right;margin-left:20px" height="200px">
A kiosk is a standalone computer with a touchscreen (also like a tablet) which runs a single website.
It has only limited functionality.

An example of a kiosk is to order a meal in a fast-food restaurant.\
This is in the background just a website or application with payment functionality attached to it.
When it's in a public place, it's also restricted, without access to the rest of the computer or browser.

In the scope of Home Assistant, we want to have access to a single overview dashboard without menu items.

---
## Set Home Assistant in Kiosk mode

By default, you only want to show a single page on the tablet without the default toolbars to navigate to other dashboards.

### Hide side toolbar

It's a setting for the user to hide the side menu by default.
Select in the side toolbar the last item, the current logged-in user.
This shows a list of settings and one of them is `Always hide the sidebar`.

The best way is to create a custom user for your tablet and enable the feature to hide the sidebar.
Use on your desktop and phone a different user to still show here all the default menu items.

<img src="images_tablet_in_kiosk_mode/hide_sidebar.png" alt="hide sidebar in Home Assistant" height="200px" />

### Hide top toolbar

We want to hide this top menu by default.
This can be achieved with the integration **kiosk-mode**.

<img src="images_layout_stretch/hide_top_menu.png" alt="hide top menu" width="400px" />

Install the **kiosk-mode** integration via this button\
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=NemesisRE&repository=kiosk-mode&category=integration)

Once installed, some dashboard properties have to be set in the raw dashboard editor.

To set these properties, select the three dots in the top right corner of the dashboard in edit-mode and select `Raw configuration editor`.

<img src="images_layout_stretch/raw_config_editor.png" alt="Raw configuration editor" height="200px" />
<img src="images_tablet_in_kiosk_mode/hide_header.png" alt="hide header in Home Assistant" height="200px" />

See all possible configuration parameters at [https://github.com/NemesisRE/kiosk-mode](https://github.com/NemesisRE/kiosk-mode)

To hide the top bar, only define `hide_header: true` is enough.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Raw configuration editor
kiosk_mode:
  hide_header: true
views:
  ...
{% endraw %}
```

<br>

To show the top toolbar again, add `?disable_km=` to the url.

#### Swipe to other dashboard view

It's possible if you still want to swipe left/right to go to other defined views on the same dashboard without using the extra top toolbar.

With the HACS integration `Swipe Navigation`

Repo: [https://github.com/zanna-37/hass-swipe-navigation](https://github.com/zanna-37/hass-swipe-navigation)

Install this integration, via this button, into your own Home Assistant instance.\
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=zanna-37&repository=hass-swipe-navigation&category=integration)

---
## Set a tablet in Kiosk mode

To show a dashboard on a tablet, you can open a browser and go to the Home Assistant dashboard url and have this as dashboard.
The downside is that you lose a lot of space on your screen to the OS- and browser controls.
Better is to show only the content of the page in fullscreen.

### Fullscreen browser

Browsers also support kiosk mode by themselves.
From a single website, you can create a (Progressive Web) App from every website which hides the browser menus and url.

In Chrome, open the page you want to convert to a single app.
Go to the menu, select `Cast, save and share`, then select `Install page as app...`.

<a href="images_tablet_in_kiosk_mode/chrome_create_app_from_url.png">
<img src="images_tablet_in_kiosk_mode/chrome_create_app_from_url.png" alt="create an app from a page" height="300px" />
</a>

<em>How to create in Chrome an app from a single page.</em>

Now, you only have a small topbar.
And even this can be removed by choosing the `Full screen` option.

<a href="images_tablet_in_kiosk_mode/chrome_run_url_as_app.png">
<img src="images_tablet_in_kiosk_mode/chrome_run_url_as_app.png" alt="hide sidebar in Home Assistant" height="200px" />
</a>

<em>Page as app in fullscreen</em>

This app can also be cast to a TV!

### Android tablet

If you want to show a page in fullscreen on an Android tablet,
the app [Fully Kiosk Browser](#configure-fully-kiosk-browser) can do this (and much more useful things).

There is a free version with a watermark and has limited functionality.
For [&euro; 7,90 + VAT](https://www.fully-kiosk.com/en/#license) you can buy an unlimited lifetime single pc license.

It's full of features, I use these:
* Define a url to load on startup:
  * Automatically load the latest state of the page on start up.
* Light detection via the camera:
  * Disable the screen if the room is completely dark.
* Nearby detection:
  * Enable the screen when someone is nearby.
* Remote screen on/off via an API call:
  * Enable the screen when someone enters the room.
  * Disable the screen at a certain time or without presence.
* Monitor the battery level:
  * Control a smart socket to load only the battery from 20 to 80%.

<br>
It has tons of more features!
[See here the full list of features.](https://www.fully-kiosk.com/en/#configuration)

### iOS iPad tablet

For the iPad, the app [Kiosker: Fullscreen Web Kiosk](https://apps.apple.com/nl/app/kiosker-fullscreen-web-kiosk/id1481691530)
can be used to define a page as a single page to run in kiosk mode.

Do you have better ways for iOS? Please let me know!

---
## Configure Fully Kiosk Browser

The Android app [Fully Kiosk Browser](https://www.fully-kiosk.com/en/#main) can be used to control the tablet from remote.

<a href="images_tablet_in_kiosk_mode/fully_remote_admin_settings.png">
<img src="images_tablet_in_kiosk_mode/fully_remote_admin_settings.png" alt="Fully Kiosk Browser change settings" height="200px" />
</a> &nbsp;
<a href="images_tablet_in_kiosk_mode/fully_remote_admin_commands.png">
<img src="images_tablet_in_kiosk_mode/fully_remote_admin_commands.png" alt="Fully Kiosk Browser trigger commands" height="200px" style="text-align:left"/>
</a>

### Enable remote admin

<a href="images_tablet_in_kiosk_mode/fully_remote_admin.png">
<img src="images_tablet_in_kiosk_mode/fully_remote_admin.png" alt="Fully Kiosk Browser remote admin" height="200px" />
</a>

### Auto screen on

With the API GET call `http://192.168.1.x:2323/?cmd=screenOn&password=<password>`
it is possible to turn the screen on.

### Auto screen off

With the API GET call `http://192.168.1.x:2323/?cmd=screenOff&password=<password>`
it is possible to turn the screen off.

### Only charge tablet battery when needed

I have a smart plug connected to my tablet.
To avoid damaging the battery I only charge it when needed.
If the battery level becomes lower than 15%, it will charge it until it's at least 80% and then turn the power off again.
Now it's always charged with enough power, but not all day long charging.

Fully Kiosk can push tablet and other Kiosk state data to the MQTT topic `fully/deviceInfo/<hash>`
one of those properties is `batteryLevel`, based on this value I trigger an automation to control the smart socket to charge the tablet.

---
## Create a tablet dashboard

Before you start with your dashboard ask yourself the next questions:

* Horizontal or vertical?
* How many data do you want to show, what resolution do you need/have?
* Two, three, more columns?
* Do you want to show data conditional?
* Which data do you want to show?
  * Date and time
  * Weather: current, forecast, alarms, temperatures, air pressure
  * Important house states: open doors, windows, CO2 levels, temperatures
  * Camera views
  * Calendar: Trash, birthdays, appointments
  * Latest news
<br>
Check [here](/homeassistant/homeassistant_dashboard_examples_overview) or [here](/homeassistant/homeassistant_dashboard_stretch_layout#dashboard-elements)
for copy-paste examples in these categories.
<br>
Or continue to see also more examples.

---
### What's on my dashboard

#### Basic elements

This screenshot is an interactive, clickable image of my dashboard.
You can click on a dashboard element and you get redirected to the card details.

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/maphilight/1.4.0/jquery.maphilight.min.js"></script>

<map name="my-dashboard">
  <area
    shape="rect"
    coords="40,0,200,40"
    href="/homeassistant/homeassistant_dashboard_date_time#time-and-date"
    alt="time" />
  <area
    shape="rect"
    coords="30,45,200,75"
    href="/homeassistant/homeassistant_dashboard_date_time#time-and-date"
    alt="date" />
 <area
    shape="rect"
    coords="0,75,230,95"
    href="/homeassistant/homeassistant_dashboard_card_mushroom"
    alt="mushrooms" />
<area
    shape="rect"
    coords="0,95,230,200"
    href="/homeassistant/homeassistant_dashboard_latest_news#news-headline-nunl"
    alt="news headline" />
<area
    shape="rect"
    coords="0,200,230,240"
    href="/homeassistant/homeassistant_dashboard_hacs#birthday-reminder-card"
    alt="upcoming birthdays" />
<area
    shape="rect"
    coords="0,240,230,310"
    href="/homeassistant/homeassistant_hacs_afvalbeheer"
    alt="bin days countdown" />
<!-- second column -->
<area
    shape="rect"
    coords="230,0,460,110"
    href="/homeassistant/homeassistant_dashboard_stretch_layout#flexible-horseshoe-card"
    alt="outside temperature" />
<area
    shape="rect"
    coords="230,110,460,210"
    href="/homeassistant/homeassistant_dashboard_stretch_layout#room-temperature"
    alt="air pressure" />
<area
    shape="rect"
    coords="230,210,350,320"
     href="/homeassistant/homeassistant_dashboard_stretch_layout#flexible-horseshoe-card"
    alt="temp inside" />
<area
    shape="rect"
    coords="350,210,460,320"
    href="/homeassistant/homeassistant_dashboard_stretch_layout#room-temperature"
    alt="CO2" />
<area
    shape="rect"
    coords="230,320,460,400"
    href="/homeassistant/homeassistant_dashboard_card_mushroom#welcome-text-and-weather-forecast-for-today-dutch"
    alt="textual weather" />
<!-- third column -->
<area
    shape="rect"
    coords="460,0,700,140"
    href="/homeassistant/homeassistant_dashboard_weather_nl#weeronline"
    alt="weather forecast" />
<area
    shape="rect"
    coords="460,140,700,310"
    href="/homeassistant/homeassistant_dashboard_weather_nl#rain-radar-animated"
    alt="buienradar" />
</map>
<img usemap="#my-dashboard" src="images_tablet_in_kiosk_mode/ha_on_tablet_in_kiosk_mode1.png" alt="Home Assistant dashboard in kiosk mode" width="100%" class="maparea" />
<em>Clickable dashboard: each element is linked to the corresponding code</em>

#### Optional elements

On my dashboard I also have elements which are by default hidden and only visible when it's relevant.

My optional elements are:
* [Rain prediction graph](/homeassistant/homeassistant_dashboard_weather_nl#neerslag-app), only if [rain is expected](/homeassistant/homeassistant_templates#any-rain-expected) the upcoming hours
* [Trash can reminder, if it's tomorrow pickup day](/homeassistant/homeassistant_hacs_afvalbeheer)
* [Weather alert text](/homeassistant/homeassistant_dashboard_weather_nl#conditional-weather-alarm-1), only if [there is a weather alarm](/homeassistant/homeassistant_dashboard_weather_nl#conditional-weather-alarm-1)
* [Camera stream](/homeassistant/homeassistant_dashboard_frigate#show-live-rtsp-streams), only if [someone is detected](/homeassistant/homeassistant_dashboard_frigate#front-door-detection-mode) at the front door
* [Upcoming birthdays](/homeassistant/homeassistant_dashboard_hacs#birthday-reminder-card), only if someone has their birthday within X days
* Mushrooms:
    * [Bigger trash can icon](/homeassistant/homeassistant_dashboard_card_mushroom#bigger-icon), if [tomorrow is bin day](/homeassistant/homeassistant_templates#is-tomorrow-a-trash-bin-day)
    * [CO2 level](/esphome/co2_scd40#dashboard-graphic-with-levels), if it's too high
    * [Amount of open windows](/homeassistant/homeassistant_templates#count-the-number-of-open-windows)
    * [Package delivered](/projects/packages-mailbox-allux-600) in my package box
    * [Mail delivered](/projects/smart_mailbox), in the [last 30 minutes](/homeassistant/homeassistant_templates#mail-delivered-in-the-last-30-minutes)
    * [water/leak detected!](/homeassistant/homeassistant_templates#diy-sink-leak-status)
    * Rain amount fallen, if there is any rain fallen today
    * Is it nice to sit outside?, based on many [outdoor weather station sensor values](/buy/zigbee_outdoor#weather-stations) (temperature, humidity, wind, UV index)
    * Text if there must be meat or fish out of the freezer for the dish of tomorrow, based on the [meal planner](/homeassistant/homeassistant_dashboard_mealie#out-of-the-freezer-the-evening-before), only show after 21.00

<br>

<map name="my-dashboard-conditional">
  <area
    shape="rect"
    coords="40,0,200,55"
    href="/homeassistant/homeassistant_dashboard_date_time#time-and-date"
    alt="time" />
  <area
    shape="rect"
    coords="30,50,200,90"
    href="/homeassistant/homeassistant_dashboard_date_time#time-and-date"
    alt="date" />
 <area
    shape="rect"
    coords="35,85,85,145"
    href="/homeassistant/homeassistant_dashboard_card_mushroom#bigger-icon"
    alt="mushrooms" />
<area
    shape="rect"
    coords="0,145,230,300"
    href="/homeassistant/"
    alt="rain expected" />
<area
    shape="rect"
    coords="0,300,230,460"
    href="/homeassistant/homeassistant_dashboard_latest_news#news-headline-nunl"
    alt="news headline" />
<!-- second column -->
<area
    shape="rect"
    coords="230,5,460,115"
    href="/homeassistant/homeassistant_dashboard_stretch_layout#flexible-horseshoe-card"
    alt="outside temperature" />
<area
    shape="rect"
    coords="230,115,460,220"
    href="/homeassistant/homeassistant_dashboard_stretch_layout#room-temperature"
    alt="air pressure" />
<area
    shape="rect"
    coords="230,220,350,330"
     href="/homeassistant/homeassistant_dashboard_stretch_layout#flexible-horseshoe-card"
    alt="temp inside" />
<area
    shape="rect"
    coords="350,220,460,330"
    href="/homeassistant/homeassistant_dashboard_stretch_layout#room-temperature"
    alt="CO2" />
<area
    shape="rect"
    coords="230,330,460,410"
    href="/homeassistant/homeassistant_dashboard_card_mushroom#welcome-text-and-weather-forecast-for-today-dutch"
    alt="textual weather" />
<!-- third column -->
<area
    shape="rect"
    coords="460,0,700,135"
    href="/homeassistant/homeassistant_dashboard_weather_nl#weeronline"
    alt="weather forecast" />
<area
    shape="rect"
    coords="460,135,700,220"
    href="/homeassistant/homeassistant_dashboard_weather_nl#conditional-weather-alarm-2"
    alt="weather alarm" />
<area
    shape="rect"
    coords="460,220,700,400"
    href="/homeassistant/homeassistant_dashboard_weather_nl#rain-radar-animated"
    alt="buienradar" />
</map>
<img usemap="#my-dashboard-conditional" src="images_tablet_in_kiosk_mode/ha_on_tablet_optional_elements.jpg" alt="Home Assistant dashboard in kiosk mode" width="100%" class="maparea" />
<em>Clickable dashboard: each element is linked to the corresponding code</em>

##### YAML how to make elements conditional

For each condition you need a sensor with a state you can toggle on when the element should be visible.
If this doesn't exist yet, you can create this with a template sensor.
I have a page with many examples of how to create these sensors: [Home Assistant templates](/homeassistant/homeassistant_templates).

This is how you can define a conditional **Mushroom** element to show only the large bin icon when tomorrow is a bin day.

You need to have the boolean sensor [waste_tomorrow](/homeassistant/homeassistant_templates#is-tomorrow-a-trash-bin-day) created for this condition.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: custom:mushroom-chips-card
  chips:
    - type: conditional
      conditions:
        - entity: sensor.waste_tomorrow
          state: "true"
      chip:
        type: template
        entity: sensor.cyclus_gft
        icon: mdi:trash-can-outline
        content: ""
{% endraw %}
```
<br>

This is how you can define a conditional **camera stream** element to show only the live stream feed if an extra helper sensor is set to state "on".
This can be set manually with a toggle on the dashboard (to activate if you expect someone) or activate when someone is detected on the camera.

You need the boolean helper sensor [frontdoor_detection_mode](/homeassistant/homeassistant_dashboard_frigate#front-door-detection-mode) for this condition.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: conditional
  conditions:
      - condition: state
        entity: input_boolean.frontdoor_detection_mode
        state: "on"
  card:
    type: custom:webrtc-camera
    url: rtsp://....
{% endraw %}
```

#### Fullscreen camera stream

If you want to show a fullscreen overlay popup when a person is detected on a camera.
Take a look at the page
[Home Assistant dashboard: Fullscreen camera stream](/homeassistant/homeassistant_dashboard_fullscreen_camera_stream) how to set this up.

---

See also my [other examples of dashboard elements](/homeassistant/homeassistant_dashboard_examples_overview).

---

I hope these elements are also useful for you!
Any tips or suggestions are always welcome.

<script>
$(function() {
    $('.maparea').maphilight();
});
</script>
