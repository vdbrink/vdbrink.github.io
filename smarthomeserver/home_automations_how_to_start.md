---
title: "Home automations: How to start?"
category: Smart Home Server
tags: [smart home, start, how, begin, newbie]
---

# Home automations: How to start?

## Introduction

On different social media platforms, I see many questions about people who heard about "a smart home" or "Home Assistant" and also want to start with it. 
But then the question is, where to start?!

On this page, I describe MY PERSONAL journey and I give you tips on how you could also start with your own Smart Home setup.

There is no paved path to follow, there are all kinds of different ways to approach this. 
Everybody has different experiences, different hardware, and different wishes.

Maybe some tips are open doors but are important to enjoy the journey. 

---

## Table of Contents
<!-- TOC -->
  * [My golden rules](#my-golden-rules)
    * [1. Iterate in small steps](#1-iterate-in-small-steps)
    * [2. Make automatic backups](#2-make-automatic-backups)
    * [3. Note improvements](#3-note-improvements)
  * [Online resources](#online-resources)
    * [Youtube](#youtube)
    * [Social media](#social-media)
    * [Forums](#forums)
<!-- TOC -->

---

## My golden rules

### 1. Iterate in small steps
The say goes: "Rome wasn't built in one day".\
This also applies to your smart home automations.\
Start with a small project, get it working, and then expand. 
And don't forget to setup first rule 2!

A personal example:
> I had the idea to control the lights in the living room based on occupancy and light from outside.

These are the steps I took to get there:
* first, I bought two Zigbee bulbs and a remote I could pair together.
* My first project was a simple automation to turn on the lights in the living room when the sun goes down.
* Then I added a presence sensor to turn on the lights only when someone is really in the room.
* Then I added a light sensor to turn on the lights only when it's dark outside.
* Then I increased the light level inside based on the light level outside. Now the light brightness inside increase gradually when it's getting darker outside. You don't notice it now that the lights goes on due to a constant brightness of light in the room. 
* Then I extended the automation when it's dark for a certain time, to avoid the lights turning on and off when a dark cloud pass by.

### 2. Make automatic backups
You don't want to lose your settings, automations, and integrations where you spend so many hours on to get it to the state where it is now. 
For that reason, it's important to make backups.
It happened to me already that I had to restore a part of a backup because of an error while updating an application which came in an error state where was no going back.
With the every-nightly backup, I could restore it quickly to the state of last night for this application.
But you can also lose it by a hacker or hardware failure due to a corrupt hard disk, a fire, or a flood in your house.

My own backup strategy is:
Every night I create a **snapshot data backup** which is stored offside, in Google Drive and this contains only the data, like application databases and config file.
Not the OS or applications.
All my applications are installed via Docker, which means I can download them again from the internet when needed.

I also have one backup with a **full clone of my hard disk** which is stored in a safe place.
I make this backup every four months.
I use this in case of a hardware failure of my original hard disk.
I can swap the hard disk and restore the latest snapshot data backup and I'm up and running again in no-time!

### 3. Note improvements
You don't always have the time to improve your automations direct.
When I have an automation which doesn't work perfectly as expected, I note it down somewhere.
But when I have time to improve my automations, I take this list and start with the items on it.
When I have improved it, I mark it as resolved, test it for a few days, and when it works as expected, I remove it from the list.
This way I can't forget any improvements I want to make.

### 4. Manual overwrite the controls
..

### 5. No cloud dependencies
..

---

## Online resources

### Youtube

### Social media

### Forums