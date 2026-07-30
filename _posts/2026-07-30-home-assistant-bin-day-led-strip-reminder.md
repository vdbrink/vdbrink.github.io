---
layout: default
title: "Feed: Home Automation bin day LED strip reminder"
description: "My Home Automation LED strip reminds me which trash bin needs to be put outside tomorrow by lighting up in its matching color."
date: 2026-07-30
tags: [Home Assistant, Afvalbeheer, bin day, trash, LED strip, Node-RED, Zigbee]
permalink: /home-assistant-bin-day-led-strip-reminder
image: /projects/images_bin_day/bin_day_ledstrip_reminder_banner.png
---

# Feed: My Home Automation bin-day LED strip reminder

<a href="/projects/bin_day_led_strip_reminder">
<img src="/projects/images_bin_day/bin_day_ledstrip_animation.gif" alt="LED strip changing to the colors of the different bins" width="100%" />
</a>

Do you ever remember that it was bin day only after the collection truck has already passed and your bin is still full?

To avoid this, I made an LED strip reminder under my dresser. 
Every evening, my home automation checks the waste-collection schedule and lights up a Zigbee LED strip in the color of the bin that needs to be put outside the next day: green for garden waste, grey for household waste, blue for paper, and orange for plastic.

<a href="/homeassistant/homeassistant_hacs_afvalbeheer">
<img src="/homeassistant/images_afvalbeheer/pres_list_icon_date.png" alt="bin day countdown" width="50%" />
</a>

The automation starts with the Dutch/Belgian Home Assistant [Afvalbeheer integration](/homeassistant/homeassistant_hacs_afvalbeheer).
On my phone and living-room dashboard, I can also see the upcoming collection days and countdowns.
I use Home Assistant templates for a [trash bin day countdown](/homeassistant/homeassistant_templates#trash-bin-day-countdown) and to check [whether tomorrow is a trash bin day](/homeassistant/homeassistant_templates#is-tomorrow-a-trash-bin-day).
Node-RED, my automation tool, checks each day which bin is due the next day and sets the LED strip to the matching color.

I can also send the same reminder from Node-RED to Home Assistant as a [notification to my phone](/node-red/node-red_home-assistant_notifications).

For a smaller visual reminder, I also built a [smart notification light](/projects/smart_notification_light) with a smart GU10 light which can be used for this purpose as well.

<a href="/projects/smart_notification_light">
<img src="/projects/images_noti_light/smart_noti_light_ani.gif" alt="smart notification light for bin day based on a GU10" width="50%" />
</a>

Read the full LED strip setup, including the Home Assistant and Node-RED flow, on the [Bin day LED strip reminder](/projects/bin_day_led_strip_reminder) page.
