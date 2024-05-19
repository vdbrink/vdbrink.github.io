---
title: "Node-RED Server migration"
category:  Node-RED
tags:  Node-RED Migration
---

# Node-RED Server migration

Node-RED migration to go from one version or server to another one with keeping the same flows.

---

## Table of Contents
<!-- TOC -->
<!-- TOC -->

---

## Missing nodes

Copy the whole `node_modules` directory from the old environment to the new one.


## Flow credentials cannot be decrypted

The credentialsSecret value is used to encrypt/decrypt the credentials you have entered into any of the nodes when you set them up after dragging them onto the canvas.

Credentials are stored a file called flows_creds.json along side the flows.json

It is not used as part of any communication with any remote system.

If you do not add a credentialsSecret to your settings.js then Node-RED will generate one and store it in a file called .config.runtime.json in your userDir (~/,node-red). Node-RED will then show a warning at startup about this.

If you then add a credentialsSecret to settings.js and restart Node-RED, the next time you do a deploy it will use the old generated secret to decrypt the current credentials file and re-encrypt it using the newly added credentialSecret. You can only do this automatic migration once. This will then remove the warning on later restarts.

## Create a login user


---
[Table of Content ^](#table-of-contents)

[<< See also my other Node-RED pages](index)
