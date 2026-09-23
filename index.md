---
title: vd Brink Home Automations
description: "Home automation projects and guides: Home Assistant, ESPHome, Zigbee, Node-RED, home office and more."
image: /images/banner.jpg
categories: [Home Assistant, ESPHome, Node-RED, idea, Zigbee, desk]
---

<div class="hp-hero" style="background-image:url('/images/banner.jpg');">
<div class="hp-hero-body">
<h1>vd Brink Home Automations</h1>
<div class="hp-hero-actions">
<a class="hp-btn ghost" href="#latest">Latest posts</a>
<a class="hp-btn ghost" href="#popular">Popular pages</a>
<a class="hp-btn ghost" href="#topics">All topics</a>
<a class="hp-btn ghost" href="/buy/smart_home_best_buy_tips">Best buy tips</a>
<a class="hp-btn ghost" href="#merchandise">Merchandise</a>
</div>
</div>
</div>

<p class="hp-lead" style="margin:24px 0 44px;">Welcome to my blog about smart home automations and other tech projects like Home Assistant, ESPHome, Zigbee and my home office.</p>

<div class="hp-section" id="latest">
<div class="hp-section-head">
<div>
<h2>Latest posts</h2>
<p class="hp-lead">My latest 4 posts about my latest projects I work on.</p>
</div>
<a href="/feed.html">All posts &rarr;</a>
</div>

{%- assign sorted_posts = site.posts | sort: "date" | reverse -%}
{%- assign featured = sorted_posts.first -%}
<a class="hp-card hp-feature" href="{{ featured.url | relative_url }}">
<img src="{{ featured.image | default: '/images/logo.png' | relative_url }}" alt="{{ featured.title | remove_first: 'Feed: ' | escape }}">
<div class="hp-feature-body">
<div><span class="hp-chip">New</span> <span class="hp-date">{{ featured.date | date: "%b %d, %Y" }}</span></div>
<strong>{{ featured.title | remove_first: "Feed: " | escape }}</strong>
<p>{{ featured.description | escape }}</p>
<span class="hp-more">Read the post &rarr;</span>
</div>
</a>
<div class="hp-tiles">
{%- for post in sorted_posts offset:1 limit:3 -%}
<a class="hp-card hp-tile" href="{{ post.url | relative_url }}">
<img src="{{ post.image | default: '/images/logo.png' | relative_url }}" alt="{{ post.title | remove_first: 'Feed: ' | escape }}" loading="lazy">
<div class="hp-tile-body">
<span class="hp-date">{{ post.date | date: "%b %d, %Y" }}</span>
<strong>{{ post.title | remove_first: "Feed: " | escape }}</strong>
</div>
</a>
{%- endfor -%}
</div>
</div>

<hr class="hp-divider">

<div class="hp-section" id="popular">
<div class="hp-section-head">
<div>
<h2>Popular pages</h2>
<p class="hp-lead">The most visited pages by other home automation enthusiasts.</p>
</div>
<a href="/sitemap.html">All pages &rarr;</a>
</div>
<div class="hp-tiles">
<a class="hp-card hp-tile" href="/homeassistant/homeassistant_dashboard_weather_nl">
<img src="/homeassistant/images_weather/rain_radar_animated.png" alt="Weather in The Netherlands" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Home Assistant</span><strong>Weather in The Netherlands</strong><p>Rain radar, forecasts and warnings on your dashboard based on NL data.</p></div>
</a>
<a class="hp-card hp-tile" href="/esphome/orcon_mechanic_ventilation">
<img src="/esphome/orcon_images/wires_connected.jpg" alt="Orcon ventilation" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">ESPHome</span><strong>Control an Orcon ventilation system</strong><p>Make an Orcon mechanical ventilation smart with an ESP board.</p></div>
</a>
<a class="hp-card hp-tile" href="/zigbee/zigbee_chair_occupancy_sensor">
<img src="/zigbee/images_chair/pillow_with_sensor.jpg" alt="Chair occupancy sensor" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">DIY Zigbee</span><strong>Chair occupancy sensor</strong><p>Detect when someone sits down, built from a Zigbee sensor.</p></div>
</a>
<a class="hp-card hp-tile" href="/esphome/co2_scd40">
<img src="/esphome/images_scd40/hardware.jpg" alt="SCD40 CO2 sensor" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">ESPHome</span><strong>DIY CO2 sensor (SCD40)</strong><p>Build your own CO2 sensor for Home Assistant.</p></div>
</a>
<a class="hp-card hp-tile" href="/homeassistant/homeassistant_dashboard_tablet_in_kiosk_mode">
<img src="/homeassistant/images_tablet_in_kiosk_mode/ha_on_tablet_in_kiosk_mode1.png" alt="Tablet in kiosk mode" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Home Assistant</span><strong>Dashboard on a tablet in kiosk mode</strong><p>How to create a wall tablet.</p></div>
</a>
<a class="hp-card hp-tile" href="/desk">
<img src="/desk/images/desk_collage1.png" alt="Home office desk setup" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Home office</span><strong>Desk setup and room design with AI</strong><p>How I designed my home office with the help of AI.</p></div>
</a>
<a class="hp-card hp-tile" href="/projects/smart_mailbox">
<img src="/projects/images_mailbox/traditional_mailbox.png" alt="Smart mailbox" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Project</span><strong>Smart traditional mailbox</strong><p>Get a notification when the postman has been.</p></div>
</a>
<a class="hp-card hp-tile" href="/homeassistant/homeassistant_dashboard_floorplan">
<img src="/homeassistant/images_floorplan/banner.png" alt="Floor plan" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Home Assistant</span><strong>Interactive floor plan</strong><p>See your whole home at a glance.</p></div>
</a>
<a class="hp-card hp-tile" href="/zigbee/smart_infrared_transmitter_receiver">
<img src="/zigbee/images_infrared/ceiling_fan_remote.webp" alt="Infrared devices" loading="lazy">
<div class="hp-tile-body"><span class="hp-chip">Zigbee</span><strong>Automate infrared devices</strong><p>Control fans, TVs and AC units with a smart IR controller.</p></div>
</a>
</div>
</div>

<hr class="hp-divider">

<div class="hp-section" id="topics">
<div class="hp-section-head">
<div>
<h2>All topics</h2>
<p class="hp-lead">Browse the site by subject. Click a topic to see all its articles, or jump straight to one of the highlighted pages listed below it.</p>
</div>
<a href="/sitemap.html">All pages &rarr;</a>
</div>
<div class="hp-topic-grid">
{%- assign n = site.pages | where_exp: "p", "p.path contains 'homeassistant/'" | size -%}
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/homeassistant/index"><img src="/homeassistant/images/home_assistant_logo.png" alt=""><strong>Home Assistant</strong><span>{{ n }} articles</span></a>
<ul class="hp-topic-links">
<li><a href="/homeassistant/homeassistant_hardware">Which hardware?</a></li>
<li><a href="/homeassistant/homeassistant_templates">Templates</a></li>
<li><a href="/homeassistant/homeassistant_dashboard_floorplan">Floor plan</a></li>
</ul>
</div>
{%- assign n = site.pages | where_exp: "p", "p.path contains 'esphome/'" | size -%}
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/esphome/index"><img src="/esphome/images/esphome.png" alt=""><strong>ESPHome</strong><span>{{ n }} articles</span></a>
<ul class="hp-topic-links">
<li><a href="/esphome/co2_scd40">CO2 sensor (SCD40)</a></li>
<li><a href="/esphome/co2_senseair_s8_sensor">CO2 sensor (SenseAir S8)</a></li>
<li><a href="/esphome/orcon_mechanic_ventilation">Orcon ventilation</a></li>
</ul>
</div>
{%- assign n = site.pages | where_exp: "p", "p.path contains 'zigbee/'" | size -%}
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/zigbee/index"><img src="/zigbee/images/zigbee.jpg" alt=""><strong>Zigbee</strong><span>{{ n }} articles</span></a>
<ul class="hp-topic-links">
<li><a href="/zigbee/index#why-i-chose-zigbee">Why Zigbee as protocol?</a></li>
<li><a href="/zigbee/zigbee_chair_occupancy_sensor">Chair occupancy sensor</a></li>
<li><a href="/zigbee/smart_infrared_transmitter_receiver">Infrared devices</a></li>
</ul>
</div>
{%- assign n = site.pages | where_exp: "p", "p.path contains 'node-red/'" | size -%}
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/node-red/index"><img src="/node-red/images/node-red_logo.png" alt=""><strong>Node-RED</strong><span>{{ n }} articles</span></a>
<ul class="hp-topic-links">
<li><a href="/node-red/index">Graphical automations</a></li>
<li><a href="/node-red/node-red_home-assistant">Node-RED with Home Assistant</a></li>
</ul>
</div>
{%- assign n = site.pages | where_exp: "p", "p.path contains 'projects/'" | size -%}
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/projects/index"><img src="/projects/images_allux-600/sticker_package_box.jpg" alt=""><strong>Projects</strong><span>{{ n }} articles</span></a>
<ul class="hp-topic-links">
<li><a href="/projects/smart_mailbox">Smart mailbox</a></li>
<li><a href="/projects/automate_christmas_decorations">Automate Christmas decorations</a></li>
<li><a href="/zigbee/smart_infrared_transmitter_receiver">Automate infrared devices</a></li>
</ul>
</div>
{%- assign n = site.pages | where_exp: "p", "p.path contains 'desk/'" | size -%}
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/desk"><img src="/desk/images/desk_collage1.png" alt=""><strong>Home office</strong><span>{{ n }} articles</span></a>
<ul class="hp-topic-links">
<li><a href="/desk">Room design with AI</a></li>
<li><a href="/desk/desk_setup_hardware">Desk setup hardware</a></li>
<li><a href="/desk/office_accessories">Accessories</a></li>
</ul>
</div>
{%- assign n = site.pages | where_exp: "p", "p.path contains 'elgato_stream_deck/'" | size -%}
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/elgato_stream_deck/"><img src="/elgato_stream_deck/images/products/stream_deck_xl.jpg" alt=""><strong>Stream Deck</strong><span>{{ n }} articles</span></a>
<ul class="hp-topic-links">
<li><a href="/elgato_stream_deck/">Stream Deck for developers</a></li>
<li><a href="/elgato_stream_deck/stream_deck_button_actions">Button actions to download</a></li>
<li><a href="/elgato_stream_deck/stream_deck_home_assistant">Home Assistant integration</a></li>
</ul>
</div>
<div class="hp-card hp-topic">
<a class="hp-topic-head" href="/ideas/home_automation_ideas"><img src="/ideas/images/idea.png" alt=""><strong>Ideas</strong><span>Get inspired</span></a>
<ul class="hp-topic-links">
<li><a href="/ideas/home_automation_ideas">Home automation ideas</a></li>
<li><a href="/ideas/home_automation_videos">Home automation videos</a></li>
</ul>
</div>
</div>
</div>

<hr class="hp-divider">

<div class="hp-section">
<div class="hp-section-head">
<div>
<h2>Best buy tips</h2>
<p class="hp-lead"><img src="/buy/images/basket.png" alt="" style="height:1.1em; width:auto; vertical-align:middle; margin-right:5px;">Devices I have myself and use on a daily base and devices I advice to use are listed here.</p>
</div>
</div>
<div class="hp-buy-strip">
<a class="hp-card" href="/buy/smart_home_best_buy_tips"><span>🏠</span>Smart Home hardware</a>
<a class="hp-card" href="/buy/zigbee_outdoor"><span>🌳</span>Zigbee Outdoor</a>
<a class="hp-card" href="/homeassistant/homeassistant_hardware"><span>🖥️</span>Home server machines</a>
<a class="hp-card" href="/buy/esphome_diy"><span><img src="/esphome/images/esp32.webp" alt="" style="height:1.1em; width:auto; vertical-align:middle;"></span>ESP DIY sensors</a>
<a class="hp-card" href="/buy/batteries"><span>🔋</span>Batteries</a>
</div>
</div>

<hr class="hp-divider">

<h2 id="merchandise">Merchandise</h2>
<p class="hp-lead">Looking for a birthday present for a fellow nerd, a mug for on your desk or a cool T-shirt? Just take a look around the shop, maybe there's something for you.</p>
<br>
<div style="text-align:center;">
<a href="https://quote-shirt-shop.myspreadshop.net/" target="_blank">
<img src="/buy/images/basket.png" alt="" style="height:1.1em; width:auto; vertical-align:middle; margin-right:5px;">
Shop here for tech T-shirts, hoodies, mugs, stickers &amp; more!<br>
<img src="/shop/images/banner3.png" alt="Computer says no" height="150px" />
</a>
</div>

<hr class="hp-divider">

<h2>About me</h2>
<div class="hp-section">
<div class="hp-about">
<img src="/images/avatar_square.jpg" alt="Ronald">
<div>
<p><strong>Hi, I'm Ronald.</strong> Home automation has always been my passion. 
It started with lights that switch on when it gets dark and a notification when the washing machine is done.
And it never stopped with creating new automations.</p>
<p>On this website I share examples and configurations I created over the years, so you can easily improve your own smart home based on my projects.</p>
<a href="https://github.com/vdbrink">GitHub</a> · <a href="https://www.facebook.com/brinkhomeautomations">Facebook</a> · <a href="/feed.xml">RSS feed</a>
</div>
</div>
</div>
