---
title: "Home Assistant dashboard: Kitchen board"
date: 2022-06-29
category: Home Assistant
tags: [Home Assistant, dashboard, lovelace, notes, kitchen board]
---
# Home Assistant dashboard: Kitchen board


<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find Home Assistant (lovelace) dashboard with for in the kitchen.

<br/>

---
## Table of Contents

---
## Functionalities

* Week menu (+ max temp + out of freezer)
* Recipes
* Youtube
* Kitchen timer
* Groceries
* Writen notes

---
## Final result


---
## Dashboard elements

---
### Week menu

We do groceries on thursday so our week menu starts on friday.\
When the day is passed I hide that item.

<img src="images_kitchen_board/weekmenu_edit.png" alt="Edit the week menu" width="300px">

<img src="images_kitchen_board/weekmenu_on_dashboard.png" alt="Week menu on the dashboard" width="300px">

```yaml
{% raw %}
# Sourcecode by vdbrink.github.io
# Dashboard card code
type: markdown
content: >-
  <table>
{% for task in state_attr('input_select.week_menu', 'options') -%}
{% set list = task.split(':') %}
{% set day = now().weekday() %}
# Our week menu starts on friday
# I hide if the day is passed
{%- if (loop.index+3 >= day and day > 3) or (loop.index-4 >= day and day < 4)
%}
  <tr><td>{{ list[0]|upper() }}&nbsp;&nbsp;</td><td>{{ list[1] }}</td></tr>{%
  endif %}
{% endfor %}
  </table>
title: week menu
{% endraw %}
```

---
### Recipes

---
### Youtube

---
### Kitchen timer

https://community.home-assistant.io/t/countdown-kitchen-timer/93835/16
https://community.home-assistant.io/t/countdown-kitchen-timer/93835/9
---
### Groceries

---
### Writen notes

---
## Background

---

## Credits

I got the rough idea for this approach from:
* 

---

[<< See also my other Home Assistant pages](index)