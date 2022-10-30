# Node-RED Cheat Sheet - Function Node

Examples of javascript code which you can use in Node-RED function nodes.

![](images/nodes/node_function.png)

## Table of Contents
- [Log to debug panel](#log-to-debug-panel)
- [Use global variable](#use-global-variable)
- [Use flow variable](#use-flow-variable)
- [Send (multiple) output message](#send-multiple-output-message)
- [New json message](#new-json-message)
- [Convert String to Integer](#convert-string-to-integer)
- [Send to a dynamic topic](#send-to-a-dynamic-topic)
---
## Log to debug panel
```
node.error("Log line");
```
---
## Use global variable
```
global.set('rain', true); 
```
```
global.get('rain'); 
```
---
## Use flow variable
```
flow.set('rain', true); 
```
```
flow.get('rain'); 
```
---
## Send (multiple) output message
```
node.send({ payload : true });
```
---
## New json message
Create a new json message based on the input json message.
```
var temp = msg.payload;
msg.payload = {
	"volt": temp.voltage,
	"power": temp.power,
	"state": temp.status,
	"device": "smartplug"
}
return msg;
```
---
## Convert String to Integer
"20" -> 20
```
var intValue = parseInt("20");
```
---
## Send to a dynamic topic
Define the MQTT topic name in code. 
```
var deviceId = "bulb1";
msg = {}
msg.payload = action === "aan" ? "ON" : "OFF";
msg.topic = "zigbee2mqtt/" + deviceId + "/set";
return msg;
```

---
[Table of Content ^](#table-of-contents)

[<< See also my other Node-RED pages](index)

[Sponsor me](../sponsor_me)
