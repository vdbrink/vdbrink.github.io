---
title: "Home Assistant dashboard: Examples"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace]
---

# Home Assistant dashboard: Examples

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;padding-left:20px" alt="Home Assistant logo" height="100px"></a>

Here you find some random Home Assistant (lovelace) dashboard examples which you can easily add to your own dashboards.

<br>
<br>

---
## Table of Contents
<!-- TOC -->
* [News headline (nu.nl)](#news-headline-nunl)
* [Create a new custom sensor: chair occupancy](#create-a-new-custom-sensor-chair-occupancy)
<!-- TOC -->

---

## News headline (nu.nl)
Show the most important news headline.<br>
With clickable arrows to open the news site.

![News nu.nl](images/news_headline.png)

Get every 15 minutes the latest news headline from the new site nu.nl.\
For other sites, check my [Web Scraper](homeassistant_web_scraper) page how to show website content (like news) inside your dashboard.

Add the news site scraper with the [internal Home Assistant Scrape](https://www.home-assistant.io/integrations/scrape/) integration 
[![Open your Home Assistant instance and show the app store.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=scrape)

Most fields can be skipped, only these are required.\
The default scrape interval time is 600 seconds (5 minutes). I couldn't find an override in the UI config.

| Field    | Value                        | Tab |
|:---------|:-----------------------------|-----|
| Resource | https://www.nu.nl            | 1   |
| Name     | nu.nl headline               | 2   |
| Select   | `.title.fluid:first-of-type` | 2   | 


Or add it manually via the `configuration.yaml`.\
Here you can override the scan interval time.
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: scrape
  resource: https://www.nu.nl
  select: ".title.fluid:first-of-type"
  name: "nu.nl headline"
  scan_interval: 900
{% endraw %}
```


Use a Markdown card to present the news on the dashboard.
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
 - type: markdown
        content: |
          {{ states('sensor.nu_nl_headline') }} [>>](http://nu.nl)
{% endraw %}
```

---
## Create a new custom sensor: chair occupancy

By default, the contact status is inverted as preferred.
With this addition to configuration.yaml you can create a new sensor that shows the correct status in your dashboard.
```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
binary_sensor:
  - platform: template
    sensors:
      chair:
        friendly_name: "chair"
        value_template: >-
          {% if is_state('binary_sensor.contact1_contact', 'off') %}
             on
          {% else %}
             off
          {% endif %}

homeassistant:
  customize: 
    binary_sensor.chair:
      icon: mdi:chair-rolling
{% endraw %}
```

---

[<< See also my other Home Assistant tips and tricks](index)