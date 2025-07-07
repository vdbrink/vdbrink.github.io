---
title: "Node-RED Pricewatch"
description: "Node-RED Pricewatch"
category: Node-RED
tags: [Node-RED, price, watch, monitor, sales]
---

# Node-RED Pricewatch

<a name="top"></a>
<img style="float: right;margin-left:20px" src="images/node-red_logo.png" height="100px" alt="Node-RED logo">

Let Node-RED check on a daily basis the actual product prices on different websites for you and only send a notification when it meets your desired price.

<img src="images_pricewatch/sales_price_example.png" height="100px" alt="sales price">

<br>

---
## Table of Contents
<!-- TOC -->
  * [How it works](#how-it-works)
  * [Flow explanation](#flow-explanation)
  * [Flows for different sites](#flows-for-different-sites)
    * [Amazon.com / Amazon.de](#amazoncom--amazonde)
    * [Amazon.nl](#amazonnl)
    * [Bol.com](#bolcom)
    * [iBood.com](#iboodcom)
    * [Kruidvat.nl](#kruidvatnl)
  * [Create your own prize checker](#create-your-own-prize-checker)
  * [Price Formatter examples](#price-formatter-examples)
    * [With new lines](#with-new-lines)
    * [Other format?](#other-format)
  * [Define the selector](#define-the-selector)
<!-- TOC -->

---

## How it works

With this flow, it downloads a whole webpage and via HTML and CSS element names it filters out only the price of the product.
Then compare the price with the desired price. If this is lower, it sends a message with the product name, current price and a link to your phone as notification.

<img src="images_pricewatch/notification.jpg" height="150px" alt="notification">

Now you only need to click on the link and order it!

---
## Flow explanation

With this flow, you can check a website for the actual price of a product.

![Node-RED flow](images_pricewatch/node-red_flow_pricewatch.png)

**Explanation of each node:**

* **[inject node]** Trigger this flow every day at 12.00.
    ```
    Repeat     at a specific time
    at         12.00 
    on         (Check all the days to check)
    ```
* **[http request node]** Download the webpage.
    ```
    Method     GET
    URL        (the full url of the webpage)
    ```
    Output msg.payload:
    ```
    <html><head>...<div id="price">20,95</div>...</head></html>
    ```
    Sometimes you can try the other options if there is no data as output of this node. 


* **[html node]** This node filters away all data to only return the actual price on the page. 
  This Selector is different on each page and the hardest part to find.   
  See [CSS Selector](#define-the-selector) how you can define your own required Selector.

    ```
    Property   msg.payload
    Selector   #price
    Output     only the text content of the elements
               as a single message containing an array
               in msg.payload
    
    ```
    Output msg.payload:
    ```
    20,95
    ```

 
* **[change node]** Extract the price to a real number (no cents are used).
    ```
    Set           msg.payload
    to the value  [expression] $number((payload.$split(',')[0]))  
    ```
  Output msg.payload:
    ```
    20
    ```
  See [Price formatter examples](#price-formatter-examples) how you can convert a text to extract only the raw price.


* **[switch node]** Compare the raw price with your desired price.
    ```
    Property   msg.payload 
               '<=' [number] 20     
    ```
    Is your input price smaller or equal (`<=`) then your desired price (for example `20`) then the flow continues otherwise it stops here.

  Output msg.payload:
    ```
    20
    ```

* **[template node]** Create a notification message text.
    ```
    Property    msg.payload
    Template    The fabric softener is on sale! Current price {{payload}}
                https://www.bol.com/nl/p/robijn-puur-zacht-wasverzachter-4-x-18-wasbeurten-voordeelverpakking/9200000108581694/     
    ```
  Output msg.payload:
    ```
    The fabric softener is on sale! Current price 20
    https://www.bol.com/nl/p/robijn-puur-zacht-wasverzachter-4-x-18-wasbeurten-voordeelverpakking/9200000108581694/   
    ```
  * **[delay node]** Only send a notification once per 3 days.
      ```
      Action Rate Limit
             All messages
      Rate  1 [msg(s) per] 3 [Days]
            Drop intermediate messages     
      ```
    The output msg.payload is still the same.


* **[debug node]** Gets only the message when the product has the desired price. This node should be replaced and connected with your own configured notification app.

This is how this message looks like in Telegram.

<img src="images_pricewatch/notification.jpg" height="150px" alt="notification">

---

## Flows for different sites

Here I defined the `Selectors` and `Price formatter` node values for some sites. 
I also add an example flow for each site. 
In the examples, I used high prices to trigger the notification. 

### Amazon.com / Amazon.de

> **_NOTE:_** I have problems getting the content of this page. Please let me know if you have a solution for this.

```
Selector:       .a-price-whole

Price formatter: $number(payload.$split('<')[0])
```

### Amazon.nl

```
Selector:       #corePrice_feature_div > div > div > span.a-price.aok-align-center > span:nth-child(2) > span.a-price-whole

Price formatter: $number(payload.$split(',')[0])
```
[Download an Amazon.nl example flow.](flows/node-red_flow_vdbrink_pricewatch_amazon-nl.json)

### Bol.com

```
Selector:       .buy-block .promo-price

Price formatter: $number((payload.$split('\n')[0]))
```
[Download a Bol.com example flow.](flows/node-red_flow_vdbrink_pricewatch_bol-com.json)

### iBood.com

```
Selector:       ._price_n1pwc_7

Price formatter: $number((payload[0].$split(',')[0]))
```
[Download an iBood example flow.](flows/node-red_flow_vdbrink_pricewatch_ibood-com.json)

<!--
### Coolblue

```
Selector:       .js-product-order-form .sales-price__current

Price formatter: $number((payload.$split(',')[0]))
```
[Download a Coolblue example flow](flows/node-red_flow_vdbrink_pricewatch_coolblue-com.json)
-->

### Kruidvat.nl

```
Selector:       .pricebadge__new-price-decimal

Price formatter: $number(payload[0])
```
[Download a Kruidvat example flow](flows/node-red_flow_vdbrink_pricewatch_kruidvat-nl.json)


> **_NOTE:_** If they change their site structure, this will break. Let me know [here](#remarks-or-suggestions) if one is broken, then I can fix it.

---

## Create your own prize checker

-- does the page work with the http request node?

The HTML node uses [CSS4 and/or jQuery](https://github.com/fb55/css-select#user-content-supported-selectors) to grab the correct CSS element. 
The CSS name is normally used to style the element on the page with size, color, etc.

## Price Formatter examples
 What you need is the raw price, without decimals, and as number. 
 Only with this value, you can compare the price if it matches your desired price.

### With new lines

The price is spread over multiple lines.
```
20
95
```
Convert the values by putting each value in a new array element after each new line (`\n`)
Then only use the data in the first element (`[0]`)
Then convert the value from a string to a number (`$number()`)
```
$number((payload.$split('\n')[0]))
```

### Other format?

Panic? If the above examples don't match your format, Google for it to find out how you can extract the price. 
That's also how I find mine! 
Let me know if you have some additions, then I can add those here.

---
## Define the selector

These steps are needed to take to get the **selector** value to get the price:

* Go to the page <a href="https://try.jsoup.org" target="_blank">try.jsoup.org</a>
* Click on the button **Fetch URL**
* Fill in the url to try
* Click on the button **Fetch**. Now the whole page source is loaded 

---
[Top ^](#top)

[<< See also my other Node-RED pages](index)
