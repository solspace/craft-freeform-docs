---
title: Craft Freeform 4.x - How to Remove Demo Templates - User Guide
description: A guide to removing the demo templates.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/guides/
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

<span class="page-section">User Guides</span>

# How to Remove Demo Templates

The [Demo Templates](../setup/demo-templates/) are handy when starting out with Freeform or trying to troubleshoot issues, but how do you uninstall them when you're done with them? Just follow the steps below:


[[toc]]


## Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

Go to the Craft **templates** directory and look for the demo templates folder you had it install (e.g. `freeform-demo`). Delete that folder and its contents inside.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

Go to the **assets** directory inside your public web directory and look for a folder with the same name as the templates folder (e.g. `freeform-demo`).

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

Go to the **Routes** area is the Craft control panel (_CP -> Settings -> Routes_) and remove any routes that Freeform installed. They will all have the same path name as the folders you just removed.

![Craft Routes Settings](../images/guides/remove-demo.png)

</div>

<div class="step-finished">Finished!</div>

::: tip
The demo templates should be fully removed now.
:::