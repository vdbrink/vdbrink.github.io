---
title: "Home Assistant dashboard: Mealie Recipe manager"
category: Home Assistant
tags: Home Assistant, dashboard, lovelace, Mealie, recipe manager, meal, planner
---
# Home Assistant dashboard: Mealie Recipe manager


<a href="index"><img src="images/home_assistant_logo.png" style="float: right;margin-right:5px" alt="Home Assistant logo" height="100px"></a>

How do you manage your recipes? Via bookmarks in your browser? And end up with deadlinks to great recipes? Or as printed version with notes with your own improvements?

As Home Assistant enthusiast, I want to store my recipes locally on my home server to use it while preparing the meals. Also show my day- and week meal planning on the HA dashboard.\
I searched for a self-hosting solution and found **Mealie** most suitable for this purpose.

I describe here how I created a dashboard in HA to see my **recipes** and show a meal **day-** and **weekplanner**. 

<img src="images_mealie/mealie1_ha_integration.png" alt="meal planner" width="400px">

With Mealie, you can add recipes manually, but also import via an online url direct into the Mealie structure or place a YouTube video in the description as reference to your current online recipe.

Based on your meals you can also create shopping lists.

<img src="images_mealie/mealie1_overview.png" alt="Result" width="800px">

For more information, check the website: https://docs.mealie.io/

> **_NOTE:_** The code on this page is based on HA 2024.3.0 and Mealie 1.3

---
## Table of Contents
<!-- TOC -->
  * [Installation](#installation)
    * [Docker](#docker)
      * [Hass.io Add-on](#hassio-add-on)
  * [Add recipes](#add-recipes)
  * [Dashboard integration](#dashboard-integration)
  * [Create a week meal planner](#create-a-week-meal-planner)
    * [Meal for tonight](#meal-for-tonight)
      * [Store today meal data as a sensor](#store-today-meal-data-as-a-sensor)
      * [Create today meal image](#create-today-meal-image)
      * [Card element](#card-element)
    * [Meal planning for this week as a list](#meal-planning-for-this-week-as-a-list)
      * [Store meal planning data as a sensors](#store-meal-planning-data-as-a-sensors)
      * [Markdown element](#markdown-element)
  * [FAQ](#faq)
<!-- TOC -->

---

## Installation

### Docker

You can run Mealie as single Docker container.

The website and API (available under /docs) will be available on the server via the url http://< ip-adress >:9925

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# docker-compose.yaml
version: '2'
services:
  mealie-recipes:
    container_name: mealie-recipes
    image: ghcr.io/mealie-recipes/mealie:latest
    restart: always
    volumes:
      - ./volumes/mealie-recipes:/app/data/
    ports:
      - "9925:9000"
    environment:
      PUID: 1000
      PGID: 1000
      TZ: Europe/Amsterdam
  
      # Default Recipe Settings
      RECIPE_PUBLIC: 'true'
      RECIPE_SHOW_NUTRITION: 'false'
      RECIPE_SHOW_ASSETS: 'true'
      RECIPE_LANDSCAPE_VIEW: 'true'
      RECIPE_DISABLE_COMMENTS: 'true'
      RECIPE_DISABLE_AMOUNT: 'false'
      ALLOW_SIGNUP: 'true'
      MAX_WORKERS: 1
      WEB_CONCURRENCY: 1
{% endraw %}
```

#### Hass.io Add-on

Or you can install and run Mealie as Hass.io Add-on direct in Home Assistant.

Check this page for the details https://github.com/alexbelgium/hassio-addons/tree/master/mealie#installation

---
## Add recipes

When you access your local Mealie website, you're in read-only modus. Click in the right top corner to login with the default credentials changeme@email.com / MyPassword

Now you can click in the left menu on the plus button to add meals manually or import them from a website. Not all recipe websites provide their data in a correct way Mealie can import them, then you have to copy-paste it yourself.

---
## Dashboard integration

To integrate Mealie as view in Home Assistant, you have to create a new dashboard and use these settings:

<img src="images_mealie/create_dashboard.png" alt="Create dashboard" width="400px">

<br/>

<br/>

On the dashboard, add only an iframe card and use these settings:

<img src="images_mealie/iframe_card.png" alt="iFrame Card" width="600px">

This is how it will look like, integrated in Home Assistant.

<img src="images_mealie/mealie1_overview.png" alt="Result" width="600px">

---
## Create a week meal planner

To use the functionality to show a week planner in HA, you need to create a meal plan.

In the side menu choose for the Meal planner option, use the top Edit menu item to start editing the planning.
Use the + icon to select a meal for a day.

<img src="images_mealie/mealie1_create_weekmenu.png" alt="Create week plan" width="600">

---
### Meal for tonight

Now a week planning is made we can use this data.

All data inside Mealie is also accessible through API calls.
We can use this to get the meal for today and present that on a dashboard in a card.

<img src="images_mealie/picture_element_meal1_tonight.png" alt="meal planner" width="400px">

#### Store today meal data as a sensor
First, a scraper is needed to get the data from the Mealie API and store it as a sensor in Home Assistant.
This code creates a sensor `mealie_todays_meal` with the state like `Poffertjes`. This meal id is needed to grab the corresponding photo.

To call the API, you need a secret Bearer token. Check the [FAQ](#faq) how to create one.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
rest:
  - scan_interval: 3600
  resource: "http://< ip-address >:9925/api/groups/mealplans/today"
  headers:
    Authorization: Bearer !secret mealie_bearer
  sensor:
    - name: "Mealie todays meal ID"
      value_template: "{{ value_json[0].recipe.id }}"
      force_update: true
    - name: "Mealie todays meal"
      value_template: "{{ value_json[0].recipe.name }}"
      force_update: true
{% endraw %}
```

#### Create today meal image

To get the image for today you need to add a `Generic Camera` via Settings, Devices & Services, Add Integration, and search for the generic camera entity.

<img src="images_mealie/mealie1_image_as_camera.png" alt="Square picture" width="400px">

The only field you need to fill in is the `Still Image URL`.

You can use the internal docker link:
```
http://mealie-recipes:9000/api/media/recipes/{{states('sensor.mealie_todays_meal_id')}}/images/min-original.webp
```

or the outside host url (replace `< ip-address >` with your ip-address):
```
http://< ip-address >:9925/api/media/recipes/{{states('sensor.mealie_todays_meal_id')}}/images/min-original.webp
```

#### Card element
Now we have stored the name of the meal for today and the corresponding image we can use it to add it to our HA as card, like this.

<img src="images_mealie/picture_element_meal1_tonight.png" alt="Square picture" width="400px">

Add a Picture element to the dashboard with this code.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: picture-entity
  entity: sensor.mealie_todays_meal
  camera_image: camera.mealie_recipes
  name: avond eten
  show_state: true
  show_name: true
  tap_action:
    action: navigate
    navigation_path: /lovelace-dashboard/mealie
{% endraw %}
```

I set the `tap_action`, when I click on the card I navigate direct to the Mealie integration iframe.

---
### Meal planning for this week as a list

It's possible to show the complete meal planning for the whole week as a list on your dashboard!

<img src="images_mealie/mealie1_ha_weekmenu.png" alt="Result" width="400px">

#### Store meal planning data as a sensors

First create a scraper sensor in configuration.yaml.

It will get the meal planning ordered by date and start with the meal for today.
Then it creates for the next 7 days, for each day two sensors, one with the name of the meal and the other one with the corresponding date (in the format YYYY-MM-DD).

<img src="images_mealie/mealie_sensors_per_day.png" alt="2 sensors per day" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- scan_interval: 3600
  resource: "http://< ip-address >:9925/api/groups/mealplans?orderBy=date&orderDirection=asc"
  headers:
    Authorization: Bearer !secret mealie_bearer
  params:
    start_date: >
      {{ now().strftime('%Y-%m-%d') }}
  sensor:
    - name: "Mealie day0 name"
      value_template: "{{ value_json['items'][0].recipe.name }}"
      force_update: true
    - name: "Mealie day0 date"
      value_template: "{{ value_json['items'][0].date }}"
      force_update: true
    - name: "Mealie day1 name"
      value_template: "{{ value_json['items'][1].recipe.name }}"
      force_update: true
    - name: "Mealie day1 date"
      value_template: "{{ value_json['items'][1].date }}"
      force_update: true
    - name: "Mealie day2 name"
      value_template: "{{ value_json['items'][2].recipe.name }}"
      force_update: true
    - name: "Mealie day2 date"
      value_template: "{{ value_json['items'][2].date }}"
      force_update: true
    - name: "Mealie day3 name"
      value_template: "{{ value_json['items'][3].recipe.name }}"
      force_update: true
    - name: "Mealie day3 date"
      value_template: "{{ value_json['items'][3].date }}"
      force_update: true
    - name: "Mealie day4 name"
      value_template: "{{ value_json['items'][4].recipe.name }}"
      force_update: true
    - name: "Mealie day4 date"
      value_template: "{{ value_json['items'][4].date }}"
      force_update: true
    - name: "Mealie day5 name"
      value_template: "{{ value_json['items'][5].recipe.name }}"
      force_update: true
    - name: "Mealie day5 date"
      value_template: "{{ value_json['items'][5].date }}"
      force_update: true
    - name: "Mealie day6 name"
      value_template: "{{ value_json['items'][6].recipe.name }}"
      force_update: true
    - name: "Mealie day6 date"
      value_template: "{{ value_json['items'][6].date }}"
      force_update: true
{% endraw %}
```

#### Markdown element

Now we have stored the names of all the meals for the upcoming days we can use it to add it to our HA as card, like this.

<img src="images_mealie/mealie1_ha_weekmenu.png" alt="Week menu" width="400px">

In your dashboard, add a Markdown card with this code.
The date will be formatted to the short notation for the day of the week.

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
- type: markdown
    content: |-
      <table> {% for i in range(7) %}
       {% set index = i|string %}
       {% set meal_date = states("sensor.mealie_day" + index + "_date") %}
       {% set meal_name = states("sensor.mealie_day" + index + "_name") %}
       {% if meal_date != 'unknown' %} 
       <tr>
       <td>{{ ['ma','di','wo','do','vr','za','zo'][strptime(meal_date, "%Y-%m-%d").weekday()] }}</td> 
       <td>{{ meal_name }} </td>
       {% endif %}
       {% endfor %}
      </table>
    title: week menu
{% endraw %}
```
Enjoy using Mealie!

---
## FAQ

**Q: What are the default user credentials?**\
A: Username: changeme@email.com\
Password: MyPassword

**Q: How to set a different locale?**\
A: In the side menu go to settings, here you can change the locale.

**Q: How can to create a Bearer token?**\
A: See [API Key Generation](https://docs.mealie.io/documentation/getting-started/api-usage/#getting-a-token)

**Q: Can I add a YouTube recipe instruction movie to my recipe?**\
A: Yes, you can with this code block in the description.
```yaml
{% raw %}
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{% endraw %}
```

**Q: Where can I find more info about Mealie**\
A: Checkout the [website](https://hay-kot.github.io/mealie/) or via [Discord](https://discord.gg/QuStdQGSGK)

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)