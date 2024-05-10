---
title: "Home Assistant Aurora Borealis integration"
category: Home Assistant
tags: Home Assistant, dashboard, lovelace, aurora
image: /homeassistant/images_aurora/northernlight.jpg
---

# Home Assistant: Aurora Borealis integration

## Introduction

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>
Since I caught my first northern light (Aurora Borealis) on camera, here in the Netherlands, I was looking for a way for an own automation which informs me when the change is available to catch it again! I already had an app for that, but I want to integrate it to my own home server and send my own alert messages. Then I can remove that app again.

After a post on a forum I was informed about a default Home Assistant integration, called: NOAA Aurora Sensor. This does exact what I want. Set a threshold which sets a sensor value on `On` when I have the change to see it.  

<img src="images_aurora/northernlight.jpg" height="250px" alt="My first northern light photo">
<br>

More info at [www.home-assistant.io/integrations/aurora](https://www.home-assistant.io/integrations/aurora)


---
## Home Assistant integration: NOAA Aurora Sensor

Go to integrations and search for `noaa aurora`
<img src="images_aurora/aurora_integration.png" alt="">

This Aurora integration uses the NOAA Aurora Forecast service to let you know if an aurora might be visible at your home location in the next 30 minutes, based on the current solar flare activity.

This service adds two sensors, one contains a number 0-100 representing the current likelihood in percentage of visible auroras at your latitude/longitude.

<img src="images_aurora/aurora_sensors.png" alt="" width="250px">

By default, this sensor is set up to trigger when the reported likelihood for your location is > 75.

It updates every 5 minutes.

Now you can make an alert for it.

