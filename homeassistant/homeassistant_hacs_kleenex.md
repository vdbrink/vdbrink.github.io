---
title: "Home Assistant - HACS Kleenex Pollen Radar"
description: "Setup Home Assistant Kleenex Pollen Radar integration"
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, card, pollen, HACS, berk, trees, weed, grass]
image: /homeassistant/images_kleenex/kleenex_advanced_presentation.png
---

# Home Assistant -<br>HACS Kleenex Pollen Radar

<a href="images_kleenex/kleenex_advanced_presentation.png">
<img src="images_kleenex/kleenex_advanced_presentation.png" width="50%" alt="advanced Kleenx pollen">
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
  * [HA presentations](#ha-presentations)
    * [Default presentation](#default-presentation)
    * [Advanced: with colors](#advanced-with-colors)
    * [Advanced: with a clickable link, colors and labels](#advanced-with-a-clickable-link-colors-and-labels)
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

Each sensor contains also in its `attributes` also extra information about different subtypes and a forecast for the upcoming days.

Use this button to go to the `Developer tools` and filter the entities on `kleenex`.

[![Open your Home Assistant instance and show your state developer tools.](https://my.home-assistant.io/badges/developer_states.svg)](https://my.home-assistant.io/redirect/developer_states/)

<a href="images_kleenex/kleenex_forecast.png">
<img src="images_kleenex/kleenex_forecast.png" alt="Kleenex forecast" width=250px">
</a>

---
## HA presentations

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

### Advanced: with colors

#### Result

Show the entities with matching colors and a level border color.

<a href="images_kleenex/kleenex_colored_presentation.png">
<img src="images_kleenex/kleenex_colored_presentation.png" alt="kleenex presentation with colors" width="400px">
</a>

The entities are clickable which show you the values over time:

<img src="images_kleenex/kleenex_advanced_popup.png" alt="kleenex popup" width="400px">

For the advanced presentation, you need to add three new sensors to divide the ppm number into a textual value.
This value will be used as text, but also be used for different colors and an indication circle of the intensity.

#### Helper sensors

You need to add these three helper sensors first.

This can be done to the sensor section in the file `configuration.yaml` with this code.\
Or create them via the HA helper frontend, see below this code block.

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
<img src="images_kleenex/kleenex_sensor_create_template.png" alt="kleenex advanced presentation" width="400px">
</a>

Read more how to add a template (via the HA frontend itself) here on my [advanced Templates page](homeassistant_templates#how-to-add-a-template).

#### Dashboard code

This is the corresponding dashboard YAML code for the screenshot. 

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

---
### Advanced: with a clickable link, colors and labels

Show a clickable link to the Kleenex website, the entities with matching colors and colored labels, like this:

<a href="images_kleenex/kleenex_advanced_presentation.png">
<img src="images_kleenex/kleenex_advanced_presentation.png" alt="kleenex advanced presentation" width="400px">
</a>

This is the corresponding code:

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
        entity: sensor.pollen_trees_concentratie
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

---

### Specific subtypes forecast

Work in progress ...

<br>

Good luck with the integration!

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant tips and tricks](index)

[Home Assistant integration: Afvalbeheer >>](homeassistant_hacs_afvalbeheer)

[Home Assistant: Templates >>](homeassistant_templates)
