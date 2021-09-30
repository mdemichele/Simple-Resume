---
layout: post 
title: "Visualizing Tesla Stock Prices with d3"
category: Data Visualization
---

Here I'm just experimenting around with using d3. I took a dataset of Tesla stock prices from July 2010, when Tesla first went public, to June 2011 and analyzed it a few different ways.

First, I plotted them as a Candlestick Chart. 

<div class="d3-work-area">
  <svg id="svg-1"></svg>
</div>

From this chart, I could see visually that Tesla stock in its first full year on the market was pretty volatile. In fact, I wanted to find out exactly how volatile. Using the dataset, we find:

<div id="tesla-deviation-1"></div>

We can also find the mean price of Tesla stock over the period:

<div id="tesla-mean-1"></div>

This data is interesting in itself, but what if we compare it to Tesla's stock prices from a different year to give it a little bit of historical contextualization. For this comparison, I took Tesla's stock prices from July 2015 to June 2016 and plotted them in the same way. 

<div class="d3-work-area">
  <svg id="svg-2"></svg>
</div>

For the period between July 2015 and June 2016, we find that the volatility of Tesla stock was:

<div id="tesla-deviation-2"></div>

We also find that the mean price in this period was:

<div id="tesla-mean-2"></div>




<script src="/js/d3-simple.js"></script>
<script src="/vendors/papaparse.min.js"></script>
