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

Here you find Home Assistant (lovelace) dashboard examples related to the custom HACS integration **Kleenex Pollen Radar** which you can easily add to your own dashboard.

This integration shows Pollen information for grass, trees and weeds.

It's available for the countries: The Netherlands, France, Italy, the United Kingdom and the United States of America.\
Check the git repository to find out all options: https://github.com/MarcoGos/kleenex_pollenradar

**Alternative integration**

If your country isn't in the list, 
or you want to try another data provider, 
you can also look at the [Google Pollen](https://github.com/svenove/home-assistant-google-pollen#home-assistant-google-pollen) integration.

> **_UPDATE -  23 March 2025:_** Since version [1.1.3 released at 17 March 2025](https://github.com/MarcoGos/kleenex_pollenradar/releases/tag/v1.1.3) the data structure is changed. 
> I updated this manual afterwards and is now compatible with version 1.1.6

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
    * [Subtypes values](#subtypes-values)
    * [Specific subtypes forecast](#specific-subtypes-forecast)
  * [Credits](#credits)
<!-- TOC -->

---

## Installation

Here are the steps to install this HACS `Kleenex Pollen Radar` integration.

* Use this button to add the [Kleenex pollen radar / Scottex](https://github.com/MarcoGos/kleenex_pollenradar) integration:
 
  [![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=MarcoGos&repository=kleenex_pollenradar&category=Integration)
* Click `Add integration`\
  Now you get one search result.
* Select the Kleenex integration
* Click on the detail page, in the right bottom corner on `Download`

Now is the integration added, but not yet installed. 
* Click this button to install the integration:

  [![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=kleenex_pollenradar)
* Select your country and press the `Submit` button.

  <a href="images_kleenex/kleenex_setup.png">
  <img src="images_kleenex/kleenex_setup.png" alt="setup Kleenex" width="250px">
  </a>

Now you have these five new sensors.

<a href="images_kleenex/kleenex_sensors.png">
<img src="images_kleenex/kleenex_sensors.png" alt="Kleenex sensors" width=250px">
</a>

---

### Subtypes in attributes

Each sensor contains also in it's `attribute` value extra information about different subtypes and a forecast for the upcoming days.\
These subtypes are possible:

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

To see this subtype and forecast data use this button to go to the `Developer tools` and filter the entities on with the keyword `kleenex`.
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
* [Sub types](#subtypes-values) - two tree subtype examples.\
  <a href="#subtypes-values"><img src="images_kleenex/attribute_tree_data_tile.jpg" alt="subtypes" width="300px"></a>
* [Sub types forecast graph](#specific-subtypes-forecast) - trees forecast.\
  <a href="#specific-subtypes-forecast"><img src="images_kleenex/attribute_tree_data_apexcharts.jpg" alt="forecast trees" width="300px"></a>
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

This presentation required the HACS integration [lovelace-mushroom](https://github.com/piitaya/lovelace-mushroom) to create this custom presentation.\
Install the integration via this button:

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
      {% if level == 0 %} None
      {% elif level <= 95 %} Low
      {% elif level <= 207 %} Moderate 
      {% elif level <= 703 %} High
      {% else %} very High
      {% endif %}
    secondary: "{{ states('sensor.kleenex_pollen_radar_home_trees') }} ppm"
    icon: mdi:tree
    icon_color: |-
      {% set trees = states('sensor.kleenex_pollen_radar_home_trees') | int %}
      {% if trees == 0 %}
      #FFFFFF
      {% elif trees < 80 %}
      #006400
      {% elif trees < 96 %}
      #008000
      {% elif trees < 120 %}
      #90EE90
      {% elif trees < 170 %}
      #FFFF00
      {% elif trees < 250 %}
      #FFD700
      {% elif trees < 330 %}
      #FFA500
      {% elif trees < 500 %}
      #FF8C00
      {% elif trees =< 704 %}
      #FF0000
      {% elif trees > 704 %}
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
      {% if level == 0 %} None
      {% elif level <= 29 %} Low
      {% elif level <= 60 %} Moderate 
      {% elif level <= 341 %} High
      {% else %} very High
      {% endif %}
    secondary: "{{ states('sensor.kleenex_pollen_radar_home_grass') }} ppm"
    icon: mdi:grass
    icon_color: |-
      {% set grass = states('sensor.kleenex_pollen_radar_home_grass') | int %}
      {% if grass == 0 %}
      #FFFFFF
      {% elif grass < 25 %}
      #006400
      {% elif grass < 29 %}
      #008000
      {% elif grass < 61 %}
      #90EE90
      {% elif grass < 100 %}
      #FFFF00
      {% elif grass < 180 %}
      #FFD700
      {% elif grass < 250 %}
      #FFA500
      {% elif grass < 342 %}
      #FF8C00
      {% elif grass > 341 %}
      #FF0000
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
      {% if level == 0 %} None
      {% elif level <= 20 %} Low
      {% elif level <= 77 %} Moderate 
      {% elif level <= 266 %} High
      {% else %} very High
      {% endif %}
    secondary: "{{ states('sensor.kleenex_pollen_radar_home_weeds') }} ppm"
    icon: mdi:flower-pollen
    icon_color: |-
      {% set weeds = states('sensor.kleenex_pollen_radar_home_weeds') | int %}
      {% if weeds == 0 %}
      #FFFFFF
      {% elif weeds < 15 %}
      #006400
      {% elif weeds < 21 %}
      #008000
      {% elif weeds < 45 %}
      #90EE90
      {% elif weeds < 60 %}
      #FFFF00
      {% elif weeds < 100 %}
      #FFD700
      {% elif weeds < 150 %}
      #FFA500
      {% elif weeds < 200 %}
      #FF8C00
      {% elif weeds < 267 %}
      #FF0000
      {% elif weeds > 266 %}
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

This presentation shows the entities with matching colors and a level border color.

<a href="images_kleenex/kleenex_colored_presentation.png">
<img src="images_kleenex/kleenex_colored_presentation.png" alt="kleenex presentation with colors" width="400px">
</a>

The entities are clickable which show you the values over time:

<img src="images_kleenex/kleenex_advanced_popup.png" alt="kleenex popup" width="400px">

<a name="lovelace-card-mod"/>

This presentation required the HACS module [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod) to add custom CSS styling like the progress circle.\
Install it via this button:

[![Open your Home Assistant instance and show the add-on store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=integration)

#### Dashboard code

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
          {% set level = states('sensor.kleenex_pollen_radar_huis_weeds_level') %}
          {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
          {% set level_color = color.get(level,'gray') %}
          {% set circle = {'none','0','low':'25','moderate':'50','high':'75','very-high':'100'} %}        
          {% set percentage = circle.get(level,'25') %}
          border-radius: 24px;
          background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
          conic-gradient({{level_color}} {{percentage}}% 0%,
          var(--card-background-color) 0% 100%);
        }
        ha-tile-icon {
          {% set level = states('sensor.kleenex_pollen_radar_huis_weeds_level') %}
          {% set color = {'none','white','low':'green','moderate':'orange', 'high':'darkorange','very-high':'maroon'} %}              
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
          {% set level = states('sensor.kleenex_pollen_radar_huis_grass_level') %}
          {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
          {% set level_color = color.get(level,'gray') %}
          {% set circle = {'none','0','low':'25','moderate':'50','high':'75','very-high':'100'} %}        
          {% set percentage = circle.get(level,'25') %}
          border-radius: 24px;
          background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
          conic-gradient({{level_color}} {{percentage}}% 0%,
          var(--card-background-color) 0% 100%)
        }
        ha-tile-icon {
          {% set level = states('sensor.kleenex_pollen_radar_huis_grass_level') %}
          {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
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
           {% set level = states('sensor.kleenex_pollen_radar_huis_trees_level') %}
           {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
          {% set level_color = color.get(level,'gray') %}
          {% set circle = {'none','0','low':'25','moderate':'50','high':'75','very-high':'100'} %}        
          {% set percentage = circle.get(level,'25') %}
          border-radius: 24px;
          background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
          conic-gradient({{level_color}} {{percentage}}% 0%,
          var(--card-background-color) 0% 100%);
        }
        ha-tile-icon {
          {% set level = states('sensor.kleenex_pollen_radar_huis_trees_level') %}
          {% set color = {'none','white','low':'green','moderate':'orange', 'high':'darkorange','very-high':'maroon'} %}
          {% set level_color = color.get(level,'gray') %};
          --tile-color: {{level_color}};
        }
{% endraw %}
```
</details>

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
              {% set level = states('sensor.kleenex_pollen_radar_huis_weeds_level') %}
              {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
              {% set level_color = color.get(level,'gray') %}
              {% set circle = {'none','0','low':'25','moderate':'50','high':'75','very-high':'100'} %}        
              {% set percentage = circle.get(level,'25') %}
              border-radius: 24px;
              background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
              conic-gradient({{level_color}} {{percentage}}% 0%,
              var(--card-background-color) 0% 100%);
            }
            ha-tile-icon {
              {% set level = states('sensor.kleenex_pollen_radar_huis_weeds_level') %}
              {% set color = {'none','white','low':'green','moderate':'orange', 'high':'darkorange','very-high':'maroon'} %}              
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
              {% set level = states('sensor.kleenex_pollen_radar_huis_grass_level') %}
              {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
              {% set level_color = color.get(level,'gray') %}
              {% set circle = {'none','0','low':'25','moderate':'50','high':'75','very-high':'100'} %}        
              {% set percentage = circle.get(level,'25') %}
              border-radius: 24px;
              background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
              conic-gradient({{level_color}} {{percentage}}% 0%,
              var(--card-background-color) 0% 100%)
            }
            ha-tile-icon {
              {% set level = states('sensor.kleenex_pollen_radar_huis_grass_level') %}
              {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
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
               {% set level = states('sensor.kleenex_pollen_radar_huis_trees_level') %}
               {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
              {% set level_color = color.get(level,'gray') %}
              {% set circle = {'none','0','low':'25','moderate':'50','high':'75','very-high':'100'} %}        
              {% set percentage = circle.get(level,'25') %}
              border-radius: 24px;
              background: radial-gradient(var(--card-background-color) 60%,transparent calc(60% + 1px)),
              conic-gradient({{level_color}} {{percentage}}% 0%,
              var(--card-background-color) 0% 100%);
            }
            ha-tile-icon {
              {% set level = states('sensor.kleenex_pollen_radar_huis_trees_level') %}
              {% set color = {'none','white','low':'green','moderate':'orange', 'high':'darkorange','very-high':'maroon'} %}
              {% set level_color = color.get(level,'gray') %};
              --tile-color: {{level_color}};
            }
  - type: horizontal-stack
    cards:
      - type: markdown
        entity: sensor.kleenex_pollen_radar_huis_weeds_level
        card_mod:
          style: |
            ha-card {
              background: rgb(128,193,177);
              color:
                {% set level = states('sensor.kleenex_pollen_radar_huis_weeds_level') %}
                {% set color = {'none','white','low':'green','moderate':'orange', 'high':'darkorange','very-high':'maroon'} %}
                {% set level_color = color.get(level,'gray') %}
                {{level_color}};
              font-weight: 800;
              text-align: center;
            }
        content: |
          {{states(config.entity)}}
      - type: markdown
        entity: sensor.kleenex_pollen_radar_huis_grass_level
        card_mod:
          style: |
            ha-card {
              background: rgb(128,193,177);
              color:
                {% set level = states('sensor.kleenex_pollen_radar_huis_grass_level') %}
                {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
                {% set level_color = color.get(level,'gray') %}
                {{level_color}};
              font-weight: 800;
              text-align: center;
            }
        content: |
          {{states(config.entity)}}
      - type: markdown
        entity: sensor.kleenex_pollen_radar_huis_trees_level
        card_mod:
          style: |
            ha-card {
              background: rgb(128,193,177);
              color:
                {% set level = states('sensor.kleenex_pollen_radar_huis_trees_level') %}
                {% set color = {'none','white','low':'green','moderate':'orange','high':'darkorange','very-high':'maroon'} %}
                {% set level_color = color.get(level,'gray') %}
                {{level_color}};
              font-weight: 800;
              text-align: center;
            }
        content: |
          {{states('sensor.kleenex_pollen_radar_huis_trees_level')}}
{% endraw %}
```
</details>

---
### Subtypes values

I filtered from the tree attributes the values from the `Hazelaar` (Hazel) and `Berk` (Birch).

<a href="images_kleenex/attribute_tree_data_tile.jpg">
<img src="images_kleenex/attribute_tree_data_tile.jpg" alt="subtype data" width="400px">
</a>

<details>
  <summary><b>> Click here to see the corresponding dashboard YAML code >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Entities Card Configuration
type: horizontal-stack
cards:
  - type: tile
    entity: sensor.kleenex_pollen_radar_huis_trees
    name: Hazelaar
    grid_options:
      columns: 3
      rows: 2
    vertical: true
    features_position: bottom
    card_mod:
      style:
        ha-tile-icon: >
          {% set input_name = 'Hazelaar' %} 
          {% set details = state_attr('sensor.kleenex_pollen_radar_huis_trees', 'details') %} 
          {% set item = details | selectattr('name', 'eq', input_name) | first() %} 
          {% set level = item.level | default('N/A') %}  
          {% set color_map = {'none','white', 'low':'green', 'moderate': 'orange', 'high': 'darkorange', 'very high': 'maroon'} %} 
          {% set level_color = color_map.get(level, 'gray') %}

          ha-state-icon {
            conic-gradient({{ level_color }} var(--card-background-color) 0% 100%);
          }

          ha-tile-icon {
             --tile-color: {{level_color}};
          }
        ha-tile-info$: >
          {% set input_name = 'Hazelaar' %}  
          {% set details = state_attr('sensor.kleenex_pollen_radar_huis_trees', 'details') %} 
          {% set item = details | selectattr('name', 'eq', input_name) | first() %}

          .secondary state-display {
            display: none;
          }

          .secondary::after {
            content: "{{ item.value }} ppm";
            display: block;
            text-align: center;
          }
  - type: tile
    entity: sensor.kleenex_pollen_radar_huis_trees
    name: Berk
    grid_options:
      columns: 3
      rows: 2
    vertical: true
    features_position: bottom
    card_mod:
      style:
        ha-tile-icon: >
          {% set input_name = 'Berk' %} 
          {% set details = state_attr('sensor.kleenex_pollen_radar_huis_trees', 'details') %} 
          {% set item = details | selectattr('name', 'eq', input_name) | first() %} 
          {% set level = item.level | default('N/A') %}  
          {% set color_map = {'none':'white', 'low':'green', 'moderate': 'orange', 'high': 'darkorange', 'very high': 'maroon'} %} 
          {% set level_color = color_map.get(level, 'gray') %}

          ha-state-icon {
            conic-gradient({{ level_color }} var(--card-background-color) 0% 100%);
          }

          ha-tile-icon {
             --tile-color: {{level_color}};
          }
        ha-tile-info$: >
          {% set input_name = 'Berk' %}  
          {% set details = state_attr('sensor.kleenex_pollen_radar_huis_trees', 'details') %} 
          {% set item = details | selectattr('name', 'eq', input_name) | first() %}

          .secondary state-display {
            display: none;
          }

          .secondary::after {
            content: "{{ item.value }} ppm";
            display: block;
            text-align: center;
          }
{% endraw %}
```

</details>

---
### Specific subtypes forecast

#### ApexCharts

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
now:
  show: true
graph_span: 3d
span:
  start: day
  offset: +2d
all_series_config:
  show:
    legend_value: false
series:
  - name: Hazelaar
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#1f77b4"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Hazelaar").value]);
  - name: Iep
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#ff7f0e"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Iep").value]);
  - name: Els
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#2ca02c"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Els").value]);
  - name: Populier
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#d62728"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Populier").value]);
  - name: Eik
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#9467bd"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Eik").value]);
  - name: Plataan
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#8c564b"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Plataan").value]);
  - name: Berk
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#e377c2"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Berk").value]);
  - name: Cipres
    entity: sensor.kleenex_pollen_radar_huis_trees
    type: column
    color: "#7f7f7f"
    data_generator: >
      return entity.attributes.forecast.map(d => [new
      Date(d.date).getTime(), d.details.find(t => t.name === "Cipres").value]);
apex_config:
  chart:
    type: bar
  xaxis:
    type: datetime
  plotOptions:
    bar:
      columnWidth: 70%
  tooltip:
    enabled: true
  legend:
    labels:
      useSeriesColors: true
{% endraw %}
```
</details>

---
#### Markdown table

I created a table, based on a Markdown Card, with all tree data for today.

<a href="images_kleenex/attribute_tree_data_table.jpg">
<img src="images_kleenex/attribute_tree_data_table.jpg" alt="kleenex table presentation" width="400px">
</a>

<details>
  <summary><b>> Click here to see the corresponding dashboard YAML code >></b></summary>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Markdown Card Configuration
type: markdown
content: >-
  <table width="100%">
    <thead>
      <tr>
        <th align="left">Tree</th>
        <th align="left">Value</th>
        <th align="left">Level</th>
      </tr>
    </thead>
    <tbody>
  {% set pollen =
  state_attr('sensor.kleenex_pollen_radar_huis_trees','details') %}{%
  for tree in pollen %}
    <tr>
      <td>{{ tree.name }}</td>
      <td>{{ tree.value }}</td>
      <td>{{ tree.level }}</td>
    </tr>
  {% endfor %}
    </tbody>
  </table>
card_mod:
  style: |
    ha-card {
      font-size: 14px;
      th {
        text-align:left;
      }
    }
{% endraw %}
```
</details>

---
<br>

Good luck with the integration!

Any questions or suggestions?\
Please let me know then I can improve this page for the next reader.

---

## Credits

I got some ideas for the presentations from this HA forum:
[[Help request] Pollen sensor Dutch hooikoortsradar.nl](https://community.home-assistant.io/t/help-request-pollen-sensor-dutch-hooikoortsradar-nl/524633)\
If you got any questions you can also ask them here.

---

[<< See also my other Home Assistant tips and tricks](index)

[Home Assistant integration: Afvalbeheer >>](homeassistant_hacs_afvalbeheer)

[Home Assistant: Templates >>](homeassistant_templates)
