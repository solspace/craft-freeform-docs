---
title: Craft Freeform 4.x - Date Picker Developer Events
description: The Freeform Date & Time field comes packed with a built-in, optional flatpickr instance, which can be customized with via the following events available through the Freeform JS Plugin.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/developer/datepicker/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">4.x</span>
            <span class="pr-v-arrow arrow down"></span>
        </div>
        <ul class="pr-v-list">
            <li><a href="/craft/freeform/v5/">5.x<span class="pr-v-type pr-latest">✓ Latest</span></a></li>
            <li><a href="/craft/freeform/v4/">4.x</a></li>
            <li><a href="/craft/freeform/v3/">3.x<span class="pr-v-type pr-retired">Retired</span></a></li>
            <li><a href="/craft/freeform/v2/">2.x<span class="pr-v-type pr-retired">Retired</span></a></li>
            <li><a href="/craft/freeform/v1/">1.x<span class="pr-v-type pr-retired">Retired</span></a></li>
        </ul>
    </div>
    <div class="pr-buy">
        <a href="https://plugins.craftcms.com/freeform" class="button button-blue"><span class="external-url">Plugin Store</span></a>
    </div>
</div>

<span class="page-section"><a href="/craft/freeform/v4/developer/">Developer</a></span>

# Date Picker Events

The Freeform [Date & Time](../overview/fields.md) field comes packed with a built-in, optional [flatpickr](https://flatpickr.js.org/) instance. The _flatpickr_ instance can be customized with via the following events available through the [Freeform JS Plugin](./js-plugin.md):

::: tip
To get started with what's available for Flatpickr overrides, check out the available [Flatpickr Config Options documentation](https://flatpickr.js.org/options/) as well as the [Flatpickr Examples documentation](https://flatpickr.js.org/examples/).
:::


[[toc]]


## Before initialization event

This event is fired right before a [flatpickr](https://flatpickr.js.org/) instance is created, allowing you to extend the options that are being passed to the [flatpickr](https://flatpickr.js.org/) instance:

``` js
document.addEventListener("flatpickr-before-init", (event) => {
  // event.options object contains the whole options object that will be
  // passed to the flatpickr intance

  event.options.static = true;
  event.options.clickOpens = false;
  event.options.defaultHour = 8; // starts the time picker at 8:00 am
  event.options.minuteIncrement = 15; // moves the time picker in 15 minute increments instead of 1
  event.options.disable = [
    // disables Sundays and Saturdays from being available options in datepicker
    function(date) {
      return (date.getDay() === 0 || date.getDay() === 6);
    }
  ];
  flatpickr.l10ns.default.firstDayOfWeek = 1; // sets first day of week to Monday
})
```


## On flatpickr instance ready event

This event is called right after the [flatpickr](https://flatpickr.js.org/) instance is created. You can access it via the `event.flatpickr` property of the `event` object:

``` js
document.addEventListener("flatpickr-ready", (event) => {
  // Get the flatpickr instance
  var instance = event.flatpickr;

  // Get the input field
  var input = instance.input;

  // Add bootstrap css classes to the parent element
  // to be able to use "static: true" flatpickr config option
  input.parentNode.classList.add("form-control");
  input.classList.remove("form-control");
  input.style.border = "none";
  input.style.margin = "0px";
  input.style.padding = "0px";
  input.style.width = "100%";
  input.style.outline = "none";
})
```