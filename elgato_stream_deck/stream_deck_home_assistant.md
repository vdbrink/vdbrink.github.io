---
title: "Elgato Stream Deck - Home Assistant integration"
description: "Elgato Stream Deck integration with Home Assistant"
category: Projects
tags: [Elgato, Stream Deck, Home Assistant, sensors]
image: /elgato_stream_deck/images/home_assistant/home-assistant_stream_deck_integration.png
---

# Elgato Stream Deck - Home Assistant integration
*With the Home Assistant plugin*

<img src="images/home_assistant/home-assistant_stream_deck_integration.gif" alt="Home Assistant integration" width="100%" />

Control your Home Assistant entities also direct with your Elgator Stream Deck!
This is possible with the [Stream Deck Home Assistant plugin](/elgato_stream_deck/stream_deck_button_actions#home-assistant).

## Lights control

## Power switch control

## Current temperature

## AC control via IR

<a href="images/home_assistant/ir_flow_diagram.png">
<img src="images/home_assistant/ir_flow_diagram.png" alt="Stream Deck to Airco flow diagram" width="100%" />
</a>
<em style="display:block; text-align:center">Stream Deck -> Home Assistant -> Zigbee2MQTT -> Zigbee IR transmitter -> Airco</em>

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard button card code
switch:
  - platform: template
    switches:
      ac_ir:
        friendly_name: "AC"
        icon_template: mdi:air-conditioner
        turn_on:
          action: mqtt.publish
          data:
            topic: zigbee2mqtt/irremote/set
            payload: '{"ir_code_to_send":"<ON_CODE_HERE>"}'
        turn_off:
          action: mqtt.publish
          data:
            topic: zigbee2mqtt/irremote/set
            payload: '{"ir_code_to_send":"<OFF_CODE_HERE>"}'
        value_template: "{{ is_state('input_boolean.ac_state', 'on') }}"
        assumed_state: true
{% endraw %}
```