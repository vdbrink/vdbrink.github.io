---
title: vd Brink Home Automations
categories: [Home Assistant, ESPHome, Node-RED, idea, Zigbee, desk]
image: /images/banner.jpg
---

# vd Brink Home Automations

![Banner](images/banner.jpg)

Welcome to my blog about Home Automations and other tech projects.

Here you can find projects I worked on related to Home Assistant, ESP, electronics, Zigbee and my home office.

---

## Updates
My latest 5 posts:
<div id="posts-list" class="project-links">
    {% assign sorted_posts = site.posts | sort: "date" | reverse %}
    {% for post in sorted_posts limit:5 %}
    <a class="project-card" href="{{ post.url | relative_url }}">
        <img src="{{ post.image | default: '/images/logo.png' | relative_url }}" alt="{{ post.title | remove_first: 'Feed: ' | escape }}">
        {%- assign date_format = site.minima.date_format | default: "%b %d, %Y" -%}
        <span>{{ post.title | remove_first: "Feed: " | escape }}<br><em>{{ post.date | date: date_format }}</em></span>
    </a>
    {% endfor %}
</div>
See <a href="/feed.html">here</a> all previous posts.

---

## Highlights
My most visited and interrested pages on this site:
<div class="project-links">
    <a class="project-card" href="homeassistant/homeassistant_dashboard_weather_nl">
        <img src="homeassistant/images_weather/rain_radar_animated.png" alt="Home Assistant dashboard: Weather in The Netherlands">
        <span>Home Assistant - Weather in The Netherlands</span>
    </a>
    <a class="project-card" href="esphome/orcon_mechanic_ventilation">
        <img src="esphome/orcon_images/wires_connected.jpg" alt="Control an Orcon mechanic ventilation system from Home Assistant">
        <span>ESPHome - Control an Orcon mechanic ventilation system from Home Assistant</span>
    </a>
    <a class="project-card" href="zigbee/zigbee_chair_occupancy_sensor">
        <img src="zigbee/images_chair/pillow_with_sensor.jpg" alt="DIY Zigbee chair occupancy sensor">
        <span>DIY Zigbee - Chair occupancy sensor</span>
    </a>
    <a class="project-card" href="esphome/co2_scd40">
        <img src="esphome/images_scd40/hardware.jpg" alt="ESPHome - DIY CO2 (model SCD40) sensor">
        <span>ESPHome - DIY CO2 (model SCD40) sensor</span>
    </a>
    <a class="project-card" href="/desk">
        <img src="desk/images/desk_collage1.png" alt="Home office - Desk setup and room design with AI">
        <span>Home office - Desk setup and room design with AI</span>
    </a>
    <a class="project-card" href="homeassistant/homeassistant_dashboard_tablet_in_kiosk_mode">
        <img src="homeassistant/images_tablet_in_kiosk_mode/ha_on_tablet_in_kiosk_mode1.png" alt="Home Assistant - Dashboard on a tablet in kiosk mode">
        <span>Home Assistant - Dashboard on a tablet in kiosk mode</span>
    </a>
    <a class="project-card" href="/projects/smart_mailbox">
        <img src="projects/images_mailbox/traditional_mailbox.png" alt="Projects - Smart traditional mailbox">
        <span>Projects - Smart traditional mailbox</span>
    </a>
    <a class="project-card" href="/homeassistant/homeassistant_hardware">
        <img src="homeassistant/images_hardware/ha_hardware_banner.png" alt="Home Assistant - Which hardware to run Home Assistant on?">
        <span>Home Assistant - Which hardware to run Home Assistant on?</span>
    </a>
    <a class="project-card" href="/homeassistant/homeassistant_dashboard_floorplan">
        <img src="homeassistant/images_floorplan/banner.png" alt="Home Assistant - Floor plan">
        <span>Home Assistant - Floor plan</span>
    </a>
    <a class="project-card" href="zigbee/smart_infrared_transmitter_receiver">
        <img src="zigbee/images_infrared/ceiling_fan_remote.webp" alt="Home Assistant - Automate infrared-controlled devices">
        <span>Home Assistant - Automate infrared-controlled devices</span>
    </a>
    <a class="project-card" href="homeassistant/homeassistant_templates">
        <img src="homeassistant/images_templates/ha_templates_banner.png" alt="Home Assistant - Templates">
        <span>Home Assistant - Templates</span>
    </a>
    <a class="project-card" href="homeassistant/homeassistant_dashboard_hacs">
        <img src="homeassistant/images/home_assistant_logo.png" alt="Home Assistant - Useful HACS custom elements">
        <span>Home Assistant - Useful HACS custom elements</span>
    </a>
    <a class="project-card" href="buy/smart_home_best_buy_tips">
        <img src="buy/images_zigbee/zigbee_banner.png" alt="Buy - Smart Home Best Buy Tips">
        <span>Buy - Smart Home Best Buy Tips</span>
    </a>
</div>

---

## Topics

Topics on this site per category:

|                                                                                                                                          | Subjects                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="homeassistant/index"><img src="homeassistant/images/home_assistant_logo.png" alt="Home Assistant logo" height="100px"></a>      | [Home Assistant](homeassistant/index) related information, examples, integrations etc...                                                                                                                                                                                                            |
| <a href="zigbee/index"><img src="zigbee/images/zigbee.jpg" alt="Zigbee logo" height="50px"></a>                                          | [Zigbee: Why choose it?<br>Create your own Zigbee sensors](zigbee/index)                                                                                                                                                                                                                            |
| <a href="buy/smart_home_best_buy_tips"><img src="buy/images_zigbee/zigbee_banner.png" alt="Smart Home Best Buy Tips" height="100px"></a> | * [Smart Home - Best Buy Tips](buy/smart_home_best_buy_tips)<br>* [Zigbee Outdoor - Best Buy Tips](buy/zigbee_outdoor)<br>* [Home server - Best Buy Tips](homeassistant/homeassistant_hardware)<br><br>* [ESP DIY - Best Buy Tips](buy/esphome_diy)<br>* [Batteries - Best Buy Tips](buy/batteries) |
| <a href="esphome/index"><img src="esphome/images/esphome.png" alt="ESPHome logo" height="50px"></a>                                      | [ESPHome: <br>Create your own sensors and actuators](esphome/index)                                                                                                                                                                                                                                 |
| <a href="ideas/home_automation_ideas"><img src="ideas/images/idea.png" alt="Home automation ideas" height="100px"></a>                   | [Home automation ideas](ideas/home_automation_ideas)<br><br>[Home automation videos](ideas/home_automation_videos)                                                                                                                                                                                  |
| <a href="projects/index"><img src="projects/images_allux-600/sticker_package_box.jpg" alt="Package mailbox" height="100px"></a>          | [Random automated projects](projects/index)<br>Package mailbox, ventilation system, Christmas deco etc..                                                                                                                                                                                            |
| <a href="node-red/index"><img src="node-red/images/node-red_logo.png" alt="Node-RED logo" height="100px"></a>                            | [Node-RED: <br>Graphical programming tool to create every automation](node-red/index)                                                                                                                                                                                                               |
| <a href="docker/index"><img src="docker/images/docker-logo.png" alt="Docker logo" height="100px"></a>                                    | [Docker: <br>Run applications](docker/index)                                                                                                                                                                                                                                                        |

---

<br>
<div width="100%" style="text-align: center;">
    <a href="https://quote-shirt-shop.myspreadshop.net/" target="_blank">
        🛒 Check out this Shop: Nerdy famous quotes on T-shirts, Hoodies, Mugs, Stickers &amp; more!
        <br>
        <img src="/shop/images/banner3.png" alt="Computer says no" height="150px" />
    </a>
</div>
<br>

---

## Background

Hi, since I was a little kid, I was always interested in home automation and years later still it's my passion to
automate my home!

With the introduction of the ESP boards, with wifi support, it all became easier to create your own sensors.
Manufacturers started to create products that are now more affordable and easier to connect to each other.
Software projects like Zigbee2MQTT, Home Assistant and Node-RED popped up, more users adopted these projects and so did I.
With this as your base, you can connect hardware devices together and let them work together via software, the
possibilities are endless.

LET THE FUN BEGIN!

It started with activating the lights based on darkness, getting notifications when you received (snail) mail or the washing machine was done.
For most projects, it starts with an idea of something I want to automate.\
Then I start to look for similar projects on all kinds of sources, search the internet, follow forums and groups.
I also get inspired by others with new ideas which I can use for my own setup.

Here you can find examples and configurations which I created and gathered over the years.
I want to share and inspire other people, so they can improve their own home automation projects.
