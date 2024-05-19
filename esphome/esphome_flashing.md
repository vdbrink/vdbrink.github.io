---
title: "ESPHome: Flash the config to the ESP"
description: "How to flash the config to the ESP board"
category: ESPHome
tags: [ESP, ESP8266, ESP32, nodeMCU, sensors, install, flash]
image: esphome/images/esphome.png
---

# ESPHome: Flash the config to the ESP

![ESPHome logo](images/esphome.png)

Under contruction.....

# Introduction

The ESP board is a small mini computer with onboard wifi. ESPHome makes it easy to program these boards.

You define for each ESP board the connected sensors in a template. In the template, you define your ESP board and which and how the sensors are connected.
The sensor also automatically register itself to Home Assistant (or sends its data to a MQTT server).

An example of what an ESPHome config file looks like:

```yaml
# Sourcecode by vdbrink.github.io
esphome:
  name: espscd40
  comment: Room Co2 sensor
  platform: ESP8266
  board: nodemcuv2

wifi:
  ssid: "My wifi network SSID"
  password: "My wifi password"

# Home Assistant integration
api:

# pin definition
i2c:
  sda: 4
  scl: 5

# Define which sensors are connected to the board
#  and how the look like in Home Assistant.
sensor:
  - platform: scd4x
    co2:
      name: "SCD40 CO2"
    temperature:
      name: "co2 temperature"
    humidity:
      name: "co2 humidity"
```

![ESP8266 NodeMCU v3](images/esp8266_nodemcu.jpg)

---

* <a href="https://www.python.org/" target="_blank">Python</a> to run ESPHome
* <a href="https://esphome.io/guides/getting_started_command_line.html#first-uploading" target="_blank">ESPHome</a> to flash the ESP
* <a href="https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers" target="_blank">Windows driver chp340</a> to recognize the ESP as connected device

## ESPHome command line

> esphome run file.yaml

## Docker

The file docker-compose.yml:
```yaml
# Sourcecode by vdbrink.github.io
version: '2'
services:

    esphome:
        container_name: esphome
        image: esphome/esphome
        environment:
          - TZ=Europe/Amsterdam
        ports:
          - "6052:6052"
          - "6123:6123"
        restart: unless-stopped
        volumes:
          - /etc/localtime:/etc/localtime:ro
          - ./volumes/esphome/config:/config
```

`http://<docker host>:6052/`

---

## Upload the binary

### ESP web interface




