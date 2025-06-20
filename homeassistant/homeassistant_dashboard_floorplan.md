---
title: "Home Assistant dashboard: Floor plan"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, floor plan]
image: /homeassistant/images_floorplan/banner2.png
---

# Home Assistant dashboard: Floor plan

<img src="images_floorplan/banner.png" alt="floor plan banner" height="100%">

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

This page explains how to create your own interactive floor plan for Home Assistant.

The main advantage of a floor plan dashboard is the ability to view multiple statuses in a single, comprehensive overview.

You can use a background image of your floor plan and overlay it with icons and sensor values, such as room temperatures, light controls, or motion detection indicators. 
Clicking on an entity allows you to define specific follow-up actions based on your preferences.

---
## Table of Contents
<!-- TOC -->
  * [Introduction](#introduction)
  * [Get inspired](#get-inspired)
  * [Applications](#applications)
    * [Floorplanner.com](#floorplannercom)
    * [Sweet Home 3D](#sweet-home-3d)
  * [Creating your floor plan](#creating-your-floor-plan)
  * [Make it interactive](#make-it-interactive)
    * [Floor plan images](#floor-plan-images)
    * [Entity icons](#entity-icons)
    * [Entity labels](#entity-labels)
    * [Click, Double-click and Long-press actions](#click-double-click-and-long-press-actions)
    * [Rotations](#rotations)
    * [Change icons](#change-icons)
    * [Overlays](#overlays)
    * [Change layer order](#change-layer-order)
<!-- TOC -->

---

## Introduction

The ability to create an interactive floor plan was the main reason I started using Home Assistant.\
Previously, I used an app to control lights and monitor temperatures, alongside Node-RED for automation.\
However, as I added more sensors to my network, it became increasingly difficult to get a quick overview of everything.

Searching for a solution, I discovered videos showcasing the floor plan capabilities of Home Assistant.\
With a floor plan, you can visualize detailed information about each room using icons, colors, and overlays.\
This provides a clear and comprehensive overview of your home, which inspired me to create my own interactive floor plan.

Here’s an example of what it might look like.\
Although it may seem cluttered with icons and labels, it offers a quick overview of all sensors throughout the house.\
Since I know each room and the meaning of every icon, the layout is logical and easy to understand for me.

<a href="images_floorplan/floorplan_appartment.jpg">
<img src="images_floorplan/floorplan_appartment.jpg" alt="floor plan example" width="300px"></a>

You can also choose to use fewer colors.

<a href="images_floorplan/plan_with_less_colors.png">
<img src="images_floorplan/plan_with_less_colors.png" alt="floor plan example black/white" width="300px"></a>

Or only use the room walls and don't add furniture in the floor plan.

<a href="images_floorplan/plan_no_furniture.png">
<img src="images_floorplan/plan_no_furniture.png" alt="floor plan example no furniture" width="300px"></a>

It's all up to you what you prefer!

> Before you start: be aware, this takes a lot of time to create it.\
> But it's worth it!

---
## Get inspired
Before you begin, explore examples of floor plans created by others to find inspiration. 
Choose one that you like and use it as a reference for your own design.

Here are some sites where you can find such examples:
* <a href="https://www.google.com/search?q=floorplan+home+assistant&source=lnms&tbm=isch" target="_blank">Google: floorplan Home Assistant</a>
* <a href="https://www.pinterest.com/search/pins/?q=floorplan%20home%20assistant&rs=typed" target="_blank">Pinterest: floorplan Home Assistant</a>
* <a href="https://github.com/theone11/HomeAssistantConfig" target="_blank">https://github.com/theone11/HomeAssistantConfig</a>

---
## Applications
If you already have a digital version of your floor plans, you can use those (initially).

If you don't have it there are two commonly used applications to create a floor plan.

### Floorplanner.com

<img src="images_floorplan/floorplanner-com.png" alt="floorplanner.com" height="100%">

[Floorplanner.com](https://www.floorplanner.com) is a free online tool to create a 3D model of your house.
It's easy to use, and without any costs you already have a lot of furniture available.
This is also the tool I used for my floor plan.

* You can use it everywhere because it's online
* No installation required

### Sweet Home 3D

<img src="images_floorplan/sweethome3d.png" alt="Sweet Home 3D" height="100%">

[Sweet Home 3D](https://www.sweethome3d.com/) is an application you need to install on your pc. It's available for all desktop platforms.

* You have your own data locally
* It has realistic light effects which you can use as overlay

With this [Home Assistant Floor Plan Generator Plugin](https://github.com/shmuelzon/home-assistant-floor-plan/) you can export images direct in a format which you can directly use in Home Assistant.

---
## Creating your floor plan
When you've chosen an application, you can start.\
The first step is to create a raw digital map of your house. This can be done by drawing the walls, doors and windows. You can already start using this in your interactive floor plan.

It's always possible to create a fancier floor plan with the actual wall colors, floor types and furniture in it.
But this takes a lot of time, but it's worth it. 
Ones you did it your can be proud of yourself and love it every time you use it!

Steps to take:
* Get online inspiration what you want it to look like.  
* The best way to start is to get all the official sizes of each room.
* Then draw all the walls and place the doors and windows in it.
* Then add the furniture to each room.
* Then, as an addition, you can add floors and wall colors.
* Now you can start adding the digital information
  * Start with the light icons
  * Add labels like room temperature

---
## Make it interactive

Your floor plan will be a layered model with the raw floor plan as base, then a layer with entities and on top of it overlays. 

### Floor plan images

The first, bottom layer is the static image of your floor plan.

Use the picture card element and upload the image to the `www` (a.k.a. `/local/`) directory of Home Assistant.

<img src="images_floorplan/base_layer.png" alt="base floor plan image" height="150px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: picture-elements
image: /local/base.png
elements:
  ...
{% endraw %}
```

---

### Entity icons

Entity icons (`state-icon`) show the icon of an entity.\
By default, when you click on it is toggles, or you see the details.

<img src="images_floorplan/entity_icons.png" alt="Entity icons" height="150px">

```yaml
{% raw %}
# Dashboard card code
- type: state-icon
  title: motion
  entity: binary_sensor.motion_occupancy
  style:
    top: 34%
    left: 47%
{% endraw %}
```

---
### Entity labels

Entity labels (`state-label`) show the text value of an entity.

To format a temperature, see [here](homeassistant_dashboard_formatting#rounded-temperature-sensors)

<img src="images_floorplan/entity_labels.png" alt="Entity labels" height="100px">

```yaml
{% raw %}
# Dashboard card code
- type: state-label
  title: temp at room X
  entity: sensor.temp_temperature_rounded
  style:
    top: 6%
    left: 45%
    width: 10px
    text-align: left
    font-size: 0.8em
    font-weight: bold
    color: '#FFF'
{% endraw %}
```

#### Open different view on click

I use rounded temperature values on my map, but when I click on it, I want to see the normal temperature value with decimals.
You need for this the extra HACS module [hass-browser_mod
](https://github.com/thomasloven/hass-browser_mod).

Install it via this button

[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=hass-browser_mod&category=integration)

```yaml
{% raw %}
# Dashboard card code
- type: state-label
    title: Living temperature
    entity: sensor.tempX_temperature_rounded
    tap_action:
      action: fire-dom-event
      browser_mod:
        service: browser_mod.more_info
        data:
          entity: sensor.tempX_temperature
{% endraw %}
```

---
### Click, Double-click and Long-press actions

With click actions (`tap_action`), double-click (`double_tap_action`) and long-press (`hold_action`), or you can ignore it (`none`), toggle (`toggle`) the status, navigate to another card (`navigate`), show more info in a popup (`more-info`) or call a script (`call-service`).

#### Click: No action
```yaml
{% raw %}
tap_action:
  action: none
{% endraw %}
```

#### Click: Toggle status (default)
```yaml
{% raw %}
tap_action:
  action: toggle
{% endraw %}
```
  
#### Click: Navigate to another card
```yaml
{% raw %}
tap_action:
  action: navigate
  navigation_path: /lovelace/weather
{% endraw %}
```

#### Click: More info
```yaml
{% raw %}
tap_action:
  action: more-info
{% endraw %}
```

#### Click: Service call
```yaml
{% raw %}
tap_action:
  action: call-service
  service: script.do_something
{% endraw %}
```

See also https://www.home-assistant.io/dashboards/actions/ for all info.

---
### Rotations

You can rotate the icons at any angle.

<img src="images_floorplan/rotations.png" alt="rotations" height="100px">

```yaml
{% raw %}
style:
  top: 72%
  left: 90%
  rotate: degrees(90)
{% endraw %}
```
or with
```yaml
{% raw %}
- type: state-icon
  entity: binary_sensor.chair_occupied
  style:
    top: 10%
    left: 20%
    transform: rotate(180deg)
{% endraw %}
```

---

### Change icons
You can override the current icon for each entity.

```yaml
{% raw %}
- type: state-icon
  icon: mdi:cctv
{% endraw %}
```

---
### Overlays

With overlays, you can darken a room to indicate no one is there, or no lights are on.

<img src="images_floorplan/entities.png" alt="overlay on" height="150px"> 
&nbsp; &nbsp;
<img src="images_floorplan/entity_icons.png" alt="overlay off" height="150px">

If you use rooms in your floor plan, and have all 90-degree angles, you can use a single small [black](images/black.png) square image to create the semi-transparent overlay.
With the settings, you can scale it to every size. By changing the `style` and `aspect_ratio` values.

In this example, I have a smart plug as entity for the overlay.
When the plug has the state `on` it's full transparent and `off` it's 75% transparent.
Then you still see all the elements but with a dark layer over the room.

The `tap_action` is here disabled. 
You can also choose to control the switch by clicking on the icon.

Sometimes you need to create a binary helper sensor to indicate when the layer must be active. When the lux value is higher than value X.
<details>
  <summary><b>> Click here to see an example of a binary helper sensor >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
binary_sensor:
  - platform: template
    sensors:
      overlay_x:
        friendly_name: "overlay x"
        value_template: >-
          {% if is_state('sensor.motion_illuminance_lux', 1) > 5 %}
             on
          {% else %}
             off
          {% endif %}
{% endraw %}
```
</details>

Overlay based on a smart plug status.
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: image
  entity: binary_sensor.overlay_x
  title: overlay
  tap_action:
    action: none
  image: /local/black.png
  aspect_ratio: 10x8.1
  style:
    top: 54%
    left: 49%
    width: 48%
    height: 2%
  state_filter:
    'on': opacity(0%)
    'off': opacity(75%)
{% endraw %}
```

---

### Change layer order

When you can't click on an entity, you need to change the order in the list.
The higher in your YAML file, the higher in the layers.

---

This is it from my side.
I hope you found this information useful and that it inspires you to create your own interactive floor plan in Home Assistant.

---

[<< See also my other Home Assistant tips and tricks](index)