---
title: "Home Assistant - HACS Kleenex Pollen Radar"
description: "Setup Home Assistant Kleenex Pollen Radar integration"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, card, pollen, HACS, berk, trees, weed, grass]
image: /homeassistant/images_kleenex/kleenex_advanced_presentation_high.jpg
---

# Home Assistant -<br>HACS Kleenex Pollen Radar

<a href="images_kleenex/kleenex_advanced_presentation.png">
<img src="images_kleenex/kleenex_advanced_presentation_high.jpg" width="50%" alt="advanced Kleenx pollen">
</a>
<a href="index"><img src="images/home_assistant_logo.png" style="float: right;margin-left:20px" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard examples related to the custom HACS integration **Kleenex Pollen Radar** which you can easily use on your own dashboards.

This integration shows Pollen information for grass, weeds and trees.

It's available for the countries: France, Italy, the Netherlands, the United Kingdom and the United States of America.

Check the git repository to find out all the options: https://github.com/MarcoGos/kleenex_pollenradar

---
## Table of Contents
<!-- TOC -->
  * [Installation](#installation)
  * [Dashboard presentations](#dashboard-presentations)
    * [Alternative icons](#alternative-icons)
    * [Default presentation](#default-presentation)
    * [Mushroom](#mushroom)
    * [Tile card with progress indicator](#tile-card-with-progress-indicator)
    * [Tile card: with an extra clickable link and labels](#tile-card-with-an-extra-clickable-link-and-labels)
    * [Specific subtypes forecast](#specific-subtypes-forecast)
  * [Credits](#credits)
<!-- TOC -->

---

## Installation

Here are the steps to setup this HACS `Kleenex Pollen Radar` integration.

* Use this button to install the [Kleenex pollen radar / Scottex](https://github.com/MarcoGos/kleenex_pollenradar) integration:
 
  [![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=MarcoGos&repository=kleenex_pollenradar&category=Integration)
* Click Add integration
  Now you get one search result.
* Select the Kleenex integration
* Click on the detail page, in the right bottom corner on `Download`
* Click this button to install the integration:

  [![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=kleenex_pollenradar)
* Select your country and press Submit.

  <a href="images_kleenex/kleenex_setup.png">
  <img src="images_kleenex/kleenex_setup.png" alt="setup Kleenex" width="250px">
  </a>

Now you have these five new sensors.

<a href="images_kleenex/kleenex_sensors.png">
<img src="images_kleenex/kleenex_sensors.png" alt="Kleenex sensors" width=250px">
</a>

---

### Sub types in attributes

Each sensor contains also in its `attributes` also extra information about different subtypes and a forecast for the upcoming days.

* Trees
  * Hazelaar (NL), Hazel (EN)
  * Pijnboom (NL), Pine (EN)
  * Populier (NL), Poplar (EN)
  * Plataan (NL), Plane (EN)
  * Cipres (NL), Cypress (EN)
  * Els (NL), Els (EN)
  * Iep (NL), Elm (EN)
  * Berk (NL), Birch (EN)
  * Eik (NL), Oak (EN)
* Grass
  * Poaceae (NL), Poaceae (EN)
* Weeds
  * Bijvoet (NL), Mugwort (EN)
  * Ganzevoet (NL), Goosefoot (EN)
  * Ambrosia (NL), Ambrosia (EN)
  * Brandnetel (NL), Nettle (EN)

To see this forecast data use this button to go to the `Developer tools` and filter the entities on with the keyword `kleenex`.
<br>

[![Open your Home Assistant instance and show your state developer tools.](https://my.home-assistant.io/badges/developer_states.svg)](https://my.home-assistant.io/redirect/developer_states/)

Click on the image to see all the forecast and subtype details which are stored in the `attribute` data. 

<a href="images_kleenex/kleenex_forecast.png">
<img src="images_kleenex/kleenex_forecast.png" alt="Kleenex forecast" width=250px">
</a>

<!--
I created also a [presentation](#) based on these attributes.
-->

---
## Dashboard presentations

I have different examples of how to present this data on your dashboard:
* [Default as list entities](#default-presentation) - no extra modules needed.\
  <a href="#default-presentation"><img src="images_kleenex/kleenex_default_presentation.png" alt="default Kleenex presentation" width="300px"></a>
* [Mushroom template with bigger icons](#mushroom) - extra mushroom modules required.\
  <a href="#mushroom"><img src="images_kleenex/kleenex_mushroom_presentation.jpg" alt="mushroom Kleenex presentation" width="300px"></a>
* [Tile card with level indicator](#tile-card-with-progress-indicator) - extra helpers needed to create. With default Dutch text.\
  <a href="#tile-card-with-progress-indicator"><img src="images_kleenex/kleenex_colored_presentation.png" alt="kleenex presentation with colors" width="300px"></a>
  * [Same as previous but with extra clickable link to Kleenex website and labels](#tile-card-with-an-extra-clickable-link-and-labels)\
    <a href="#tile-card-with-an-extra-clickable-link-and-labels"><img src="images_kleenex/kleenex_advanced_presentation.png" alt="kleenex presentation with colors" width="300px"></a>

---
### Alternative icons

If you want an alternative icon for weeds you can also use `mdi:sprout` or `mdi:flower-pollen`.

<a href="images_kleenex/sprout_icon.jpg">
<img src="images_kleenex/sprout_icon.jpg" alt="alternative icon mdi:sprout" width="150px">
</a>

<a href="images_kleenex/flower-pollen_icon.jpg">
<img src="images_kleenex/flower-pollen_icon.jpg" alt="alternative icon mdi:flower-pollen" width="150px">
</a>

---
### Default presentation

When the installation is complete, you get at least three entities which you can add to your dashboard.

This is a default presentation with the entities card.

<img src="images_kleenex/kleenex_default_presentation.png" alt="default Kleenex presentation" width="400px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Entities Card Configuration
type: entities
entities:
  - sensor.kleenex_pollen_radar_huis_grass
  - sensor.kleenex_pollen_radar_huis_trees
  - sensor.kleenex_pollen_radar_huis_weeds
{% endraw %}
```

---
### Mushroom

This presentation uses English levels and has bigger icons.\
No need to create extra helper sensors.

<a href="images_kleenex/kleenex_mushroom_presentation.jpg">
<img src="images_kleenex/kleenex_mushroom_presentation.jpg" alt="kleenex presentation with mushroom card" width="400px">
</a>

This presentation required the HACS integration [lovelace-mushroom](https://github.com/piitaya/lovelace-mushroom) to create a custom presentation.\
Install it via this button:

[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=piitaya&repository=lovelace-mushroom&category=integration)

<details>
  <summary><b>> Click here to see the corresponding dashboard YAML code >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
type: grid
cards:
  - type: custom:mushroom-template-card
    primary: >-
      Trees: {% set level =
      states('sensor.kleenex_pollen_radar_home_trees')|int(0) %}
      {% if level <= 29 %} Low
      {% elif level <= 60 %} Moderate 
      {% elif level <= 341 %} High
      {% else %} very High
      {% endif %}
    secondary: "{{ states('sensor.kleenex_pollen_radar_home_trees') }} ppm"
    icon: mdi:tree
    icon_color: |-
      {% set trees = states('sensor.kleenex_pollen_radar_home_trees') | int %}
      {% if trees < 25 %}
      #006400
      {% elif trees < 50 %}
      #008000
      {% elif trees < 75 %}
      #90EE90
      {% elif trees < 100 %}
      #FFFF00
      {% elif trees < 125 %}
      #FFD700
      {% elif trees < 149 %}
      #FFA500
      {% elif trees < 250 %}
      #FF8C00
      {% elif trees < 400 %}
      #FF0000
      {% elif trees >= 400 %}
      #8B0000
      {% else %}
      #800080
      {% endif %} 
    layout: vertical
    entity: sensor.kleenex_pollen_radar_home_trees
    multiline_secondary: false
    tap_action:
      action: more-info
    layout_options:
      grid_columns: 1
      grid_rows: 2
    card_mod:
      style: |
        ha-card {
          --icon-size: 60px;
          background-color: hsla(0, 0%, 0%, 0);
        }
  - type: custom:mushroom-template-card
    primary: >-
      Grass: {% set level =
      states('sensor.kleenex_pollen_radar_home_grass')|int(0) %}
      {% if level <= 29 %} Low
      {% elif level <= 60 %} Moderate 
      {% elif level <= 341 %} High
      {% else %} very High
      {% endif %}
    secondary: "{{ states('sensor.kleenex_pollen_radar_home_grass') }} ppm"
    icon: mdi:grass
    icon_color: |-
      {% set grass = states('sensor.kleenex_pollen_radar_home_grass') | int %}
      {% if grass < 25 %}
      #006400
      {% elif grass < 50 %}
      #008000
      {% elif grass < 75 %}
      #90EE90
      {% elif grass < 100 %}
      #FFFF00
      {% elif grass < 125 %}
      #FFD700
      {% elif grass < 149 %}
      #FFA500
      {% elif grass < 250 %}
      #FF8C00
      {% elif grass < 400 %}
      #FF0000
      {% elif grass < 500 %}
      #8B0000
      {% else %}
      #800080
      {% endif %} 
    layout: vertical
    entity: sensor.kleenex_pollen_radar_home_grass
    multiline_secondary: false
    tap_action:
      action: more-info
    layout_options:
      grid_columns: 1
      grid_rows: 2
    card_mod:
      style: |
        ha-card {
          --icon-size: 60px;
          background-color: hsla(0, 0%, 0%, 0);
        }
  - type: custom:mushroom-template-card
    primary: |-
      Weeds:
      {% set level = states('sensor.kleenex_pollen_radar_home_weeds')|int(0) %}
      {% if level <= 29 %} Low
      {% elif level <= 60 %} Moderate 
      {% elif level <= 341 %} High
      {% else %} very High
      {% endif %}
    secondary: "{{ states('sensor.kleenex_pollen_radar_home_weeds') }} ppm"
    icon: mdi:flower-pollen
    icon_color: |-
      {% set weeds = states('sensor.kleenex_pollen_radar_home_weeds') | int %}
      {% if weeds < 25 %}
      #006400
      {% elif weeds < 50 %}
      #008000
      {% elif weeds < 75 %}
      #90EE90
      {% elif weeds < 100 %}
      #FFFF00
      {% elif weeds < 125 %}
      #FFD700
      {% elif weeds < 149 %}
      #FFA500
      {% elif weeds < 250 %}
      #FF8C00
      {% elif weeds < 400 %}
      #FF0000
      {% elif weeds < 500 %}
      #8B0000
      {% else %}
      #800080
      {% endif %} 
    layout: vertical
    entity: sensor.kleenex_pollen_radar_home_weeds
    multiline_secondary: false
    tap_action:
      action: more-info
    layout_options:
      grid_columns: 1
      grid_rows: 2
    card_mod:
      style: |
        ha-card {
          --icon-size: 60px;
          background-color: hsla(0, 0%, 0%, 0);
        }
{% endraw %}
```
</details>

---

### Tile card with progress indicator

Show the entities with matching colors and a level border color.

<a href="images_kleenex/kleenex_colored_presentation.png">
<img src="images_kleenex/kleenex_colored_presentation.png" alt="kleenex presentation with colors" width="400px">
</a>

The entities are clickable which show you the values over time:

<img src="images_kleenex/kleenex_advanced_popup.png" alt="kleenex popup" width="400px">

For this advanced presentation, you also need to add **three new sensors** to divide the ppm number into a textual value.
This value will be used as text, but also be used for different colors and an indication circle of the intensity.
<a name="lovelace-card-mod"/>
And this presentation required the HACS module [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod) to add custom CSS styling like the progress circle.\
Install it via this button:

[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)

#### Helper sensors

You need to add these three helper sensors first.

This can be done to the sensor section in the file `configuration.yaml` with this code.\
Or create them via the [HA helper frontend](#via-the-frontend), see below this code block.

<details>
  <summary><b>> Click here to see the corresponding dashboard YAML code >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# configuration.yaml
- platform: template
  sensors:
    pollen_grass_concentration:
      value_template: >-
        {% set level = states('sensor.kleenex_pollen_radar_huis_grass')|int(0) %}
        {% if level <= 29 %} Laag
        {% elif level <= 60 %} Gemiddeld
        {% elif level <= 341 %} Hoog
        {% else %} Zeer Hoog
        {% endif %}
    pollen_trees_concentration:
      value_template: >-
        {% set level = states('sensor.kleenex_pollen_radar_huis_trees')|int(0) %}
        {% if level <= 29 %} Laag
        {% elif level <= 60 %} Gemiddeld
        {% elif level <= 341 %} Hoog
        {% else %} Zeer Hoog
        {% endif %}
    pollen_weeds_concentration:
      value_template: >-
        {% set level = states('sensor.kleenex_pollen_radar_huis_weeds')|int(0) %}
        {% if level <= 29 %} Laag
        {% elif level <= 60 %} Gemiddeld
        {% elif level <= 341 %} Hoog
        {% else %} Zeer Hoog
        {% endif %}
{% endraw %}
```
</details>

#### Via the frontend

The other way is via the frontend, you can create a new template via the **Settings** menu item,
then go to **Devices and Services** and select **Helpers**.\
This button directly opens the **Helpers** page in your Home Assistant:

[![Open your Home Assistant instance and show your helper entities.](https://my.home-assistant.io/badges/helpers.svg)](https://my.home-assistant.io/redirect/helpers/)

Select the bottom-right button `+ CREATE HELPER`,
select **Template** then one of the option **Template a sensor**

<a href="images_kleenex/kleenex_sensor_create_template_helper.png">
<img src="images_kleenex/kleenex_sensor_create_template_helper.png" alt="kleenex advanced presentation" width="400px">
</a>

Fill the fields like this.
Do this three times also for the `pollen_weeds_concentration` and `pollen_trees_concentration`

<a href="images_kleenex/kleenex_sensor_create_template.png">
<img src="images_kleenex/kleenex_sensor_create_template.png" alt="attribute tree data apexcharts" width="400px">
</a>

Read more how to add a template (via the HA frontend itself) here on my [advanced Templates page](homeassistant_templates#how-to-add-a-template).

#### Dashboard code

This is the corresponding dashboard YAML code for the screenshot. 

<details>
  <summary><b>> Click here to see the corresponding dashboard YAML code >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Horizontal Stack Card Configuration
type: horizontal-stack
cards:
  - entity: sensor.kleenex_pollen_radar_huis_weeds
    name: Onkruid
    type: tile
    vertical: true
    tap_action:
      action: more-info
    card_mod:
      style: |
        .icon-container {
          {% set level = states('sensor.pollen_weeds_concentration') %}
          {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
          {% set level_color = color.get(level,'gray') %}
          {% set circle = {'Laag':'25','Gemiddeld':'50','Hoog':'75','Zeer Hoog':'100'} %}        
          {% set percentage = circle.get(level,'25') %}
          border-radius: 24px;
          background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
          conic-gradient({{level_color}} {{percentage}}% 0%,
          var(--card-background-color) 0% 100%);
        }
        ha-tile-icon {
          {% set level = states('sensor.pollen_weeds_concentration') %}
          {% set color = {'Laag':'green','Gemiddeld':'orange', 'Hoog':'darkorange','Zeer Hoog':'maroon'} %}              
          {% set level_color = color.get(level,'gray') %}
          --tile-color: {{level_color}};
        }
  - entity: sensor.kleenex_pollen_radar_huis_grass
    name: Gras
    type: tile
    vertical: true
    tap_action:
      action: more-info
    card_mod:
      style: |
        .icon-container {
          {% set level = states('sensor.pollen_grass_concentration') %}
          {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
          {% set level_color = color.get(level,'gray') %}
          {% set circle = {'Laag':'25','Gemiddeld':'50','Hoog':'75','Zeer Hoog':'100'} %}        
          {% set percentage = circle.get(level,'25') %}
          border-radius: 24px;
          background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
          conic-gradient({{level_color}} {{percentage}}% 0%,
          var(--card-background-color) 0% 100%)
        }
        ha-tile-icon {
          {% set level = states('sensor.pollen_grass_concentration') %}
          {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
          {% set level_color = color.get(level,'gray') %};
          --tile-color: {{level_color}};
        }
  - entity: sensor.kleenex_pollen_radar_huis_trees
    name: Bomen
    type: tile
    vertical: true
    tap_action:
      action: more-info
    card_mod:
      style: |
        .icon-container {
           {% set level = states('sensor.pollen_trees_concentration') %}
           {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
          {% set level_color = color.get(level,'gray') %}
          {% set circle = {'Laag':'25','Gemiddeld':'50','Hoog':'75','Zeer Hoog':'100'} %}        
          {% set percentage = circle.get(level,'25') %}
          border-radius: 24px;
          background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
          conic-gradient({{level_color}} {{percentage}}% 0%,
          var(--card-background-color) 0% 100%);
        }
        ha-tile-icon {
          {% set level = states('sensor.pollen_trees_concentration') %}
          {% set color = {'Laag':'green','Gemiddeld':'orange', 'Hoog':'darkorange','Zeer Hoog':'maroon'} %}
          {% set level_color = color.get(level,'gray') %};
          --tile-color: {{level_color}};
        }
{% endraw %}
```
</details>

#### Help

If you don't get the progress indicator visible, this could be due to different reasons.
How this works:
* The helper sensors you also need to create converts the numbered value `sensor.kleenex_pollen_radar_huis_grass` to `pollen_grass_concentration` 
that contains a textual value `Laag` (Dutch for low) for example.
* This line converts this text to a color, `Laag` -> `green` etc.\
  ```yaml{% raw %}{% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}{% endraw %}```
* This line defines the progress of the darker circle around the icon.
  ```yaml{% raw %}{% set circle = {'Laag':'25','Gemiddeld':'50','Hoog':'75','Zeer Hoog':'100'} %}{% endraw %}```    
* This CSS code defines the background color and circle.
    ```yaml
    {% raw %}
    border-radius: 24px;
    background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
    conic-gradient({{level_color}} {{percentage}}% 0%,
    var(--card-background-color) 0% 100%);
    {% endraw %}
    ```
* This custom CSS requires the extra HACS integration `lovelace-card-mod`, is this installed? See [earlier on this page](#lovelace-card-mod) how to do this.

---
### Tile card: with an extra clickable link and labels

Show a clickable link to the Kleenex website, the entities with matching colors and colored labels, like this:

<a href="images_kleenex/kleenex_advanced_presentation.png">
<img src="images_kleenex/kleenex_advanced_presentation.png" alt="kleenex advanced presentation" width="400px">
</a>

<details>
  <summary><b>> Click here to see the corresponding dashboard YAML code >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Entities Card Configuration
type: vertical-stack
cards:
  - type: heading
    heading: Pollen in de lucht
    heading_style: title
    card_mod:
      class: class-section-heading
    tap_action:
      action: url
      url_path: https://www.kleenex.nl/pollenradar
  - type: horizontal-stack
    cards:
      - entity: sensor.kleenex_pollen_radar_huis_weeds
        name: Onkruid
        type: tile
        vertical: true
        tap_action:
          action: more-info
        card_mod:
          style: |
            .icon-container {
              {% set level = states('sensor.pollen_weeds_concentration') %}
              {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
              {% set level_color = color.get(level,'gray') %}
              {% set circle = {'Laag':'25','Gemiddeld':'50','Hoog':'75','Zeer Hoog':'100'} %}        
              {% set percentage = circle.get(level,'25') %}
              border-radius: 24px;
              background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
              conic-gradient({{level_color}} {{percentage}}% 0%,
              var(--card-background-color) 0% 100%);
            }
            ha-tile-icon {
              {% set level = states('sensor.pollen_weeds_concentration') %}
              {% set color = {'Laag':'green','Gemiddeld':'orange', 'Hoog':'darkorange','Zeer Hoog':'maroon'} %}              
              {% set level_color = color.get(level,'gray') %}
              --tile-color: {{level_color}};
            }
      - entity: sensor.kleenex_pollen_radar_huis_grass
        name: Gras
        type: tile
        vertical: true
        tap_action:
          action: more-info
        card_mod:
          style: |
            .icon-container {
              {% set level = states('sensor.pollen_grass_concentration') %}
              {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
              {% set level_color = color.get(level,'gray') %}
              {% set circle = {'Laag':'25','Gemiddeld':'50','Hoog':'75','Zeer Hoog':'100'} %}        
              {% set percentage = circle.get(level,'25') %}
              border-radius: 24px;
              background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
              conic-gradient({{level_color}} {{percentage}}% 0%,
              var(--card-background-color) 0% 100%)
            }
            ha-tile-icon {
              {% set level = states('sensor.pollen_grass_concentration') %}
              {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
              {% set level_color = color.get(level,'gray') %};
              --tile-color: {{level_color}};
            }
      - entity: sensor.kleenex_pollen_radar_huis_trees
        name: Bomen
        type: tile
        vertical: true
        tap_action:
          action: more-info
        card_mod:
          style: |
            .icon-container {
               {% set level = states('sensor.pollen_trees_concentration') %}
               {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
              {% set level_color = color.get(level,'gray') %}
              {% set circle = {'Laag':'25','Gemiddeld':'50','Hoog':'75','Zeer Hoog':'100'} %}        
              {% set percentage = circle.get(level,'25') %}
              border-radius: 24px;
              background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
              conic-gradient({{level_color}} {{percentage}}% 0%,
              var(--card-background-color) 0% 100%);
            }
            ha-tile-icon {
              {% set level = states('sensor.pollen_trees_concentration') %}
              {% set color = {'Laag':'green','Gemiddeld':'orange', 'Hoog':'darkorange','Zeer Hoog':'maroon'} %}
              {% set level_color = color.get(level,'gray') %};
              --tile-color: {{level_color}};
            }
  - type: horizontal-stack
    cards:
      - type: markdown
        entity: sensor.pollen_weeds_concentration
        card_mod:
          style: |
            ha-card {
              background: rgb(128,193,177);
              color:
                {% set level = states('sensor.pollen_weeds_concentration') %}
                {% set color = {'Laag':'green','Gemiddeld':'orange', 'Hoog':'darkorange','Zeer Hoog':'maroon'} %}
                {% set level_color = color.get(level,'gray') %}
                {{level_color}};
              font-weight: 800;
              text-align: center;
            }
        content: |
          {{states(config.entity)}}
      - type: markdown
        entity: sensor.pollen_grass_concentration
        card_mod:
          style: |
            ha-card {
              background: rgb(128,193,177);
              color:
                {% set level = states('sensor.pollen_grass_concentration') %}
                {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
                {% set level_color = color.get(level,'gray') %}
                {{level_color}};
              font-weight: 800;
              text-align: center;
            }
        content: |
          {{states(config.entity)}}
      - type: markdown
        entity: sensor.pollen_trees_concentration
        card_mod:
          style: |
            ha-card {
              background: rgb(128,193,177);
              color:
                {% set level = states('sensor.pollen_trees_concentration') %}
                {% set color = {'Laag':'green','Gemiddeld':'orange','Hoog':'darkorange','Zeer Hoog':'maroon'} %}
                {% set level_color = color.get(level,'gray') %}
                {{level_color}};
              font-weight: 800;
              text-align: center;
            }
        content: |
          {{states('sensor.pollen_trees_concentration')}}
{% endraw %}
```
</details>

---

### Specific subtypes forecast

I created a bar graph with all tree data for the upcoming days.
I used for this presentation the HACS [ApexCharts Card](https://github.com/RomRider/apexcharts-card) integration.

Click this button to install the ApexCharts Card:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=RomRider&repository=apexcharts-card&category=module)

<a href="images_kleenex/attribute_tree_data_apexcharts.jpg">
<img src="images_kleenex/attribute_tree_data_apexcharts.jpg" alt="kleenex advanced presentation" width="400px">
</a>


<details>
  <summary><b>> Click here to see the corresponding dashboard YAML code >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Entities Card Configuration
type: custom:apexcharts-card
header:
  show: true
  title: Kleenex Pollen Radar (Huis) - Trees
  show_states: true
  colorize_states: true
now:
  show: true
graph_span: 4d
span:
  start: day
  offset: +1d
series:
  - name: Hazelaar
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#1f77b4" # Blue
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Hazelaar").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Hazelaar").value]));
  - name: Iep
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#ff7f0e" # Orange
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Iep").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Iep").value]));
  - name: Els
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#2ca02c" # Green
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Els").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Els").value]));
  - name: Populier
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#d62728" # Red
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Populier").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Populier").value]));
  - name: Eik
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#9467bd" # Purple
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Eik").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Eik").value]));
  - name: Plataan
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#8c564b" # Brown
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Plataan").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Plataan").value]));
  - name: Berk
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#e377c2" # Pink
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Berk").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Berk").value]));
  - name: Cipres
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#7f7f7f" # Grey
    data_generator: |
      let data = [];
      if (entity.attributes.current) {
        data.push([new Date(entity.attributes.current.date).getTime(), entity.attributes.current.details.find(t => t.name === "Cipres").value]);
      }
      return data.concat(entity.attributes.forecast.map(d => [new Date(d.date).getTime(), d.details.find(t => t.name === "Cipres").value]));
apex_config:
  chart:
    type: bar
  xaxis:
    type: datetime
  plotOptions:
    bar:
      columnWidth: "60%" # Adjust for better visibility
  tooltip:
    enabled: true
  legend:
    show: true
    position: bottom
    markers:
      fillColors:
        - "#1f77b4" # Hazelaar
        - "#ff7f0e" # Iep
        - "#2ca02c" # Els
        - "#d62728" # Populier
        - "#9467bd" # Eik
        - "#8c564b" # Plataan
        - "#e377c2" # Berk
        - "#7f7f7f" # Cipres
  {% endraw %}
```
</details>

<br>

Good luck with the integration!

## Credits

I got the ideas for the presentations from the HA forum:
[[Help request] Pollen sensor Dutch hooikoortsradar.nl](https://community.home-assistant.io/t/help-request-pollen-sensor-dutch-hooikoortsradar-nl/524633)\
If you got any questions you can ask them also here.

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant tips and tricks](index)

[Home Assistant integration: Afvalbeheer >>](homeassistant_hacs_afvalbeheer)

[Home Assistant: Templates >>](homeassistant_templates)
