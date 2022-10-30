---
title: "Node-RED Cheat Sheet - Basic Nodes"
category:  Node-RED
tags:  Node-RED Cheat Sheet
---
{% capture imgHeight %}50{% endcapture %}
# Node-RED Cheat Sheet - Basic Nodes

Node-RED examples of basic actions to convert data from one to another format can be found here.

More advanced examples with the function node can be found [here](node-red_cheatsheet-function_node)

---

## Table of Contents
<!-- TOC -->
* [Extract value from json](#extract-value-from-json)
* [Round a comma value to an integer value](#round-a-comma-value-to-an-integer-value)
* [String to Integer](#string-to-integer)
* [Strip topic name](#strip-topic-name)
<!-- TOC -->

---

## Extract value from json
Pass a single entity value, in this case the temperature, from a json message.
<div class="nodered">

|                                                                              |                                                                   |        |
|:-----------------------------------------------------------------------------|-------------------------------------------------------------------|-------:|
| {<br>"battery" : 100, <br>"temperature" : 24.53,<br>"linkquality" : 60<br>}  | <img src="images/nodes/node_change.png" height="{{imgHeight}}px"> |  24.53 |

</div>

```
Set [msg].payload
    [msg].payload.temperature
```
---
## Round a comma value to an integer value
Round a comma value, like temperature, to a rounded integer value.

<div class="nodered">

|      |                                                                   |     |
|:-----|-------------------------------------------------------------------|----:|
| 25,3 | <img src="images/nodes/node_change.png" height="{{imgHeight}}px"> |  25 |
| 25,6 | <img src="images/nodes/node_change.png" height="{{imgHeight}}px"> |  26 |

</div>

```
Set [msg].payload
    $round(payload, 0)
```
---
## String to Integer
Convert a string value to an integer.
<div class="nodered">

|         |                                                                   |       |
|:--------|-------------------------------------------------------------------|------:|
| "24.01" | <img src="images/nodes/node_change.png" height="{{imgHeight}}px"> | 24.01 |
</div>

```
Set [msg].payload
    $number(payload)
```
---
## Strip topic name
Get only the last part after the '/' from a topic.
<div class="nodered">

|                        |                                                                   |            |
|:-----------------------|-------------------------------------------------------------------|-----------:|
| "zigbee2mqtt/contact1" | <img src="images/nodes/node_change.png" height="{{imgHeight}}px"> | "contact1" |
</div>

```
Set [msg.]measurement
    [expression]msg.topic.$split('/')[1]
```

---
[Table of Content ^](#table-of-contents)

[<< See also my other Node-RED pages](index)

[Sponsor me](../sponsor_me)
