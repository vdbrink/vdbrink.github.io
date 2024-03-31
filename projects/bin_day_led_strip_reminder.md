---
title: "Bin day - LED strip reminder"
category: Bin day
tags: Home Assistant, afvalbeheer, bin day, led,vstrip 
---

# Bin day - LED strip reminder

[//]: # ()
[//]: # (<img src="images_bin_day/bin_day_ledstrip.png" alt="bin day - LED strip" width="800px">)

<img style="float: right;margin-left:20px" src="../homeassistant/images_afvalbeheer/kliko.jpg" height="250px" alt="Kliko">

I was looking for a way to reminder me about the waste collection schedule.
We have four bins and every bin has different recurring schedules. With bank holidays it changes to another day. A
single notification was not enough, it can easily be swiped away. So I was looking for another nice subtle automation.

I came up with a RBG LED-strip under the dressoir which indicates which bin must be put on the street.

<br>
<br>

<br>

---

## Table of Contents

<!-- TOC -->
  * [Requirements](#requirements)
  * [Installation](#installation)
    * [Waste collection schedule](#waste-collection-schedule)
    * [Zigbee RGB LED strip](#zigbee-rgb-led-strip)
    * [Code to control the LED strip](#code-to-control-the-led-strip)
<!-- TOC -->

---

## Requirements

I have already a running home server with a Zigbee network, that's why I choose for a Zigbee LED strip. This will also
work for a Wifi/bluetooth/other network type but then the control will also be different.

* Waste collection schedule
* [Zigbee RGB 5m LED strip](https://s.click.aliexpress.com/e/_ookcWte) it's available in different versions:
    * Indoor no waterproof (IP20) / Outdoor waterproof (IP65)
    * 5 / 10 meter
    * RGB White or RGB Warm White

    <a href="https://s.click.aliexpress.com/e/_ookcWte" target="_blanc">
    <img src="images_bin_day/zigbee_rgb_led_strip.webp" height="250px" alt="LED strip"></a>
* Code to control the LED strip

---

## Installation

### Waste collection schedule

I live in The Netherlands and we have a HACS integration called Afvalbeheer.\
This integration downloads the waste collection schedule from most of the collection companies, in the Netherlands, and
generates entities in Home Assistant with the next pick-up date for each type of bin.

I create a [separated blog post page](../homeassistant/homeassistant_hacs_afvalbeheer) about this integration and how I
improved it, so I have the days sorted by the pickup days by creating custom countdown helper entities.

---

### Zigbee RGB LED strip

We have four bin types and each bin has his own color.\
I tried to use the color of the bin to light up.

These are my types and the HEX color code I use.

| Bin type  | Bin color | HEX color code |
|-----------|-----------|----------------|
| Garden    | green     | #008018        |
| Household | gray      | #959595        |   
| Paper     | blue      | #0000F9        |
| Plastic   | orange    | #FFA52C        |

---

### Code to control the LED strip

#### Home Assistant helper countdown entities -> Zigbee2MQTT device

I use Node-RED with [Home Assistant integration](../node-red/node-red_home-assistant) to control read Home Assistant entities.

My Zigbee devices are controlled via MQTT.

This is my Node-RED flow.

<img src="images_bin_day/bin_day_node_red_flow.png" alt="bin day - LED strip - Node RED flow" width="800px">

```yaml
{% raw %}
[{"id":"fc4e52ba0fd37927","type":"tab","label":"Bin day","disabled":false,"info":"","env":[]},{"id":"e3786b816eed4c0a","type":"comment","z":"fc4e52ba0fd37927","name":"Bin day LED strip automation by vdbrink.github.io","info":"","x":220,"y":57,"wires":[]},{"id":"31dd9a158d5fd251","type":"template","z":"fc4e52ba0fd37927","name":"Tomorrow plastic bin day","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"Tomorrow plastic bin day","output":"str","x":812,"y":117,"wires":[["5c13a68ef2a01034"]]},{"id":"4c2db0f9d2a8d3c5","type":"inject","z":"fc4e52ba0fd37927","name":"@18:00","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"00 18 * * *","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":125,"y":116,"wires":[["8d61c5da0ffd8ba0","c467b33c0e9eccb3","ee2e5b086d92bb03","c9dcedb72852fd42"]]},{"id":"8d61c5da0ffd8ba0","type":"api-current-state","z":"fc4e52ba0fd37927","name":"","server":"969e9e50.88897","version":3,"outputs":2,"halt_if":"2","halt_if_type":"num","halt_if_compare":"lt","entity_id":"sensor.rest_waste_pickup_countdown","state_type":"str","blockInputOverrides":false,"outputProperties":[{"property":"payload","propertyType":"msg","value":"","valueType":"entityState"},{"property":"data","propertyType":"msg","value":"","valueType":"entity"}],"for":"0","forType":"num","forUnits":"minutes","override_topic":false,"state_location":"payload","override_payload":"msg","entity_location":"data","override_data":"msg","x":440,"y":176,"wires":[["2fb90f2d8e97561a"],[]]},{"id":"2fb90f2d8e97561a","type":"template","z":"fc4e52ba0fd37927","name":"Tomorrow household bin day","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"Tomorrow household bin day","output":"str","x":821,"y":176,"wires":[["a64dc81fde8e9413"]]},{"id":"ee2e5b086d92bb03","type":"api-current-state","z":"fc4e52ba0fd37927","name":"","server":"969e9e50.88897","version":3,"outputs":2,"halt_if":"2","halt_if_type":"num","halt_if_compare":"lt","entity_id":"sensor.gft_waste_pickup_countdown","state_type":"str","blockInputOverrides":false,"outputProperties":[{"property":"payload","propertyType":"msg","value":"","valueType":"entityState"},{"property":"data","propertyType":"msg","value":"","valueType":"entity"}],"for":"0","forType":"num","forUnits":"minutes","override_topic":false,"state_location":"payload","override_payload":"msg","entity_location":"data","override_data":"msg","x":430,"y":237,"wires":[["16e3a70fa22a1cb2"],[]]},{"id":"16e3a70fa22a1cb2","type":"template","z":"fc4e52ba0fd37927","name":"Tomorrow garden bin day","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"Tomorrow garden bin day","output":"str","x":811,"y":236,"wires":[["12468fdfeaf547d1"]]},{"id":"c9dcedb72852fd42","type":"api-current-state","z":"fc4e52ba0fd37927","name":"","server":"969e9e50.88897","version":3,"outputs":2,"halt_if":"2","halt_if_type":"num","halt_if_compare":"lt","entity_id":"sensor.paper_waste_pickup_countdown","state_type":"str","blockInputOverrides":false,"outputProperties":[{"property":"payload","propertyType":"msg","value":"","valueType":"entityState"},{"property":"data","propertyType":"msg","value":"","valueType":"entity"}],"for":"0","forType":"num","forUnits":"minutes","override_topic":false,"state_location":"payload","override_payload":"msg","entity_location":"data","override_data":"msg","x":441,"y":297,"wires":[["6e83f87c97a7230f"],[]]},{"id":"6e83f87c97a7230f","type":"template","z":"fc4e52ba0fd37927","name":"Tomorrow paper bin day","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"Tomorrow paper bin day","output":"str","x":811,"y":296,"wires":[["2f5494f5c3a5aba0"]]},{"id":"a631b9d84c3fc7e5","type":"mqtt out","z":"fc4e52ba0fd37927","name":"ledstrip_bin_day","topic":"zigbee2mqtt/ledstrip_bin_day/set","qos":"0","retain":"false","respTopic":"","contentType":"","userProps":"","correl":"","expiry":"","broker":"7527d055.ed7e2","x":1261,"y":236,"wires":[]},{"id":"2f5494f5c3a5aba0","type":"template","z":"fc4e52ba0fd37927","name":"blue","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\"color\":{\"hex\":\"#0000F9\"},\"state\": \"ON\"}","output":"json","x":1031,"y":296,"wires":[["a631b9d84c3fc7e5"]]},{"id":"12468fdfeaf547d1","type":"template","z":"fc4e52ba0fd37927","name":"green","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\"color\":{\"hex\":\"#008018\"},\"state\": \"ON\"}","output":"json","x":1031,"y":236,"wires":[["a631b9d84c3fc7e5"]]},{"id":"a64dc81fde8e9413","type":"template","z":"fc4e52ba0fd37927","name":"grey","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\"color\":{\"hex\":\"#959595\"},\"state\": \"ON\"}","output":"json","x":1032,"y":176,"wires":[["a631b9d84c3fc7e5"]]},{"id":"5c13a68ef2a01034","type":"template","z":"fc4e52ba0fd37927","name":"orange","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\"color\":{\"hex\":\"#FFA52C\"}, \"state\": \"ON\"}","output":"json","x":1041,"y":117,"wires":[["a631b9d84c3fc7e5"]]},{"id":"15dd3111d2397762","type":"template","z":"fc4e52ba0fd37927","name":"OFF","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\"state\": \"OFF\"}","output":"json","x":1030,"y":357,"wires":[["a631b9d84c3fc7e5"]]},{"id":"f77f773c86c1e577","type":"inject","z":"fc4e52ba0fd37927","name":"@ 0.00","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"00 00 * * *","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":859,"y":357,"wires":[["15dd3111d2397762"]]},{"id":"d194c54c1adfc2f5","type":"inject","z":"fc4e52ba0fd37927","name":"test","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":869,"y":57,"wires":[["5c13a68ef2a01034"]]},{"id":"a4517022c3ccc6fb","type":"link in","z":"fc4e52ba0fd37927","name":"ledstrip_bin_day trigger off","links":[],"x":905,"y":400,"wires":[["15dd3111d2397762"]]},{"id":"c467b33c0e9eccb3","type":"api-current-state","z":"fc4e52ba0fd37927","name":"","server":"969e9e50.88897","version":3,"outputs":2,"halt_if":"1","halt_if_type":"num","halt_if_compare":"is","entity_id":"sensor.plastic_waste_pickup_countdown","state_type":"str","blockInputOverrides":false,"outputProperties":[{"property":"payload","propertyType":"msg","value":"","valueType":"entityState"},{"property":"data","propertyType":"msg","value":"","valueType":"entity"}],"for":"0","forType":"num","forUnits":"minutes","override_topic":false,"state_location":"payload","override_payload":"msg","entity_location":"data","override_data":"msg","x":442,"y":116,"wires":[["31dd9a158d5fd251"],[]]},{"id":"969e9e50.88897","type":"server","name":"Home Assistant","version":5,"addon":false,"rejectUnauthorizedCerts":true,"ha_boolean":"y|yes|true|on|home|open","connectionDelay":false,"cacheJson":true,"heartbeat":false,"heartbeatInterval":"30","areaSelector":"friendlyName","deviceSelector":"friendlyName","entitySelector":"friendlyName","statusSeparator":"at: ","statusYear":"hidden","statusMonth":"short","statusDay":"numeric","statusHourCycle":"h23","statusTimeFormat":"h:m","enableGlobalContextStore":true},{"id":"7527d055.ed7e2","type":"mqtt-broker","name":"","broker":"mosquitto","port":"1883","tls":"bbaa4676.58e4c8","clientid":"node-red-client","autoConnect":true,"usetls":false,"protocolVersion":"5","keepalive":"60","cleansession":false,"autoUnsubscribe":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"userProps":"","sessionExpiry":""},{"id":"bbaa4676.58e4c8","type":"tls-config","name":"","cert":"","key":"","ca":"","certname":"m2mqtt_srv.crt","keyname":"m2mqtt_srv.key","caname":"m2mqtt_ca.crt","servername":"","verifyservercert":false}]
{% endraw %}
```


---

Links to other sections of this blog site.

[Main page](../index) | [Other projects](index) | [Home Assistant](../homeassistant/index) | [ESPHome](../esphome/index) | [Node RED](../node-red/index)