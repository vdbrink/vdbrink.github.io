---
title: "Home Assistant: Web scraper"
category: Home Assistant
tags: Home Assistant, dashboard, web scraper
---
# Home Assistant: Web Scraper

<a href="index"><img src="images/home_assistant_logo.png" style="float: right;" alt="Home Assistant logo" height="100px"></a>

Here you find how you can scrape data from a webpage and create a Home Assistant sensor which contains this data.

You can use the scraped data to present on your own dashboard or make automations based on it. Like run the washing machine based on low dynamic energy prices.
Or show weather alarms.

Here we get the actual dynamic gas price from a provider and show this on our dashboard.

---

## Table of Contents
<!-- TOC -->
* [How it works](#how-it-works)
* [Define the CSS Selector and Index](#define-the-css-selector-and-index)
* [Configure the scraper in Home Assistant](#configure-the-scraper-in-home-assistant)
* [Check your sensor](#check-your-sensor)
* [Update the sensor](#update-the-sensor)
* [Add it to your dashboard](#add-it-to-your-dashboard)
<!-- TOC -->

---
## How it works

The web scraper integration use underwater the library **Beautiful Soup** to first read a whole website and with the, so called, **CSS Selector** it grabs the correct HTML element type (like an A, P, LI, TD or DIV element). Then find the corresponding **index** which contains the value you want to scrape.
In the scrape integration you can define some extra templating to format and fine-tune the value.

---
## Define the CSS Selector and Index

These steps are needed to take to get the CSS Selector and Index value for the scraper:
1. Get the whole webpage source
1. Paste this on an online evaluate page
1. Find the corresponding CSS Selector for your text
1. Strip the unneeded part from the CSS Selector
1. Find the corresponding index
<br>
In this animation you see the steps in action:
<img src="images_web_scraper/web_scraper_animation.gif" alt="Define the CSS Selector and Index for the Web Scraper" width="100%">

We use, for example, the page https://callmepower.be/nl/energie/gids/tarief/prijs-gas, and we want the current gasprice from 'Eneco Flex'.

### 1. Get the whole webpage source
* Go with your browser to the website, in this case https://callmepower.be/nl/energie/gids/tarief/prijs-gas
* Right click somewhere and choose to show the Page source
* With CTRL+A and then CTRL+C select and copy everything

### 2. Paste this in an online evaluation page

* Go to the page [try.jsoup.org](https://try.jsoup.org), this page will help to find the correct CSS Selector and index.
* With CTRL+V paste the clipboard data into the field **Input HTML**

### 3. Find the corresponding CSS Selector for your text

* Go back to the original site
* Right-click on your text you want as sensor
* Select the menu item Inspect
The source code inspector will open.
* Right-click on the HTML element which contains your text. In this case `<td>4.520000</td>`
* Select the menu item Copy > Copy selector

### 4. Strip the unneeded part from the CSS Selector

* Go back to the evaluation jsoup.org page
* Paste the clipboard content into the field **Query**
* Remove all the data before the last `>` In this case the original Selector value was `#block-agrippa-content > article > div:nth-child(3) > div.table--swap.table--responsive > table > tbody > tr:nth-child(5) > td:nth-child(3)` but keep only `td:nth-child(3)`

#### 5. Find the corresponding index

* Now you see a numbered list which match all the third columns from the table as TD HTML elements
* We need the 5th row which is index **4** (start counting by 0)
<br>
Now we have all the required input data for the scraper, now we can setup the scraper in Home Assistant.

---
## Configure the scraper in Home Assistant

We use the Home Assistant **Scrape** integration for this.

* Go in Home Assistant to the menu items Settings > Devices & Services
* In the bottom right corner select the Add Integration button
* Type `Scrape` and select the integration
* Fill in all the required fields:
  * Tab 1
    * Resource: https://callmepower.be/nl/energie/gids/tarief/prijs-gas 
  * Tab 2
    * Name: **Eneco Flex gas price** (This will also be used for your sensor name)
    * Select: **td:nth-child(3)** (The CSS Selector)
    * Index: **4** (The index)
    * Value Template: `{% raw %}{{ value | float }}{% endraw %}` (This will round the price)
    * Device Class: **Balance**
    * State Class: **No state class**
    * Unit of Measurement: **€cent/kWh**
* Submit to finish the configuration
<br>

Congratulations! You just created a new web scrape sensor!

You don't need to refresh or restart anything, the sensor is direct available.

---
## Check your sensor

Hopefully everything went well. Let's check the result!

* Go in Home Assistant to the menu item Developers Tools
* Go to the State tab
* filter on `eneco_flex_gas_price`

Now you should see your just created scrape sensor which looks like this:

<img src="images_web_scraper/eneco_flex_gas_price_sensor.png" alt="Eneco Flex gas price as sensor" width="100%">

---
## Update the sensor

If you're not totally happy with the result:
* Go to Settings > Devices & Services
* Click on the wheel in the Scrape integration
* Click on Configure behind the url
* Click on Configure sensor
* Make your changes and submit

---
## Add it to your dashboard

Now you can use your new sensor on your dashboard or in an automation.

<img src="images_web_scraper/eneco_flex_gas_price_dashboard.png" alt="Eneco Flex gas price on your dashboard" width="400px">
<br><br>
Happy scraping!

---
> **_NOTE:_** In the old YAML [scrape integration](https://www.home-assistant.io/integrations/scrape/) you can set a `scan_interval` how often you want to scrape the site. I don't see this variable in the graphical version. Do you know how to set this? Please let me know!

---
[^^ Top](#table-of-contents)

[<< See also my other Home Assistant pages](index)