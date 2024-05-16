---
title: Craft Freeform 5.x - Campaign plugin Integration
description: The Campaign plugin integration setup instructions.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">5.x</span>
            <span class="pr-v-type pr-latest">✓ Latest</span>
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

<span class="page-section"><a href="/craft/freeform/v5/integrations/">Integrations</a></span>

# Campaign plugin <Badge type="pro" text="Pro" />

This guide assumes you have the [Campaign plugin](https://putyourlightson.com/plugins/campaign) installed and set up already.


[[toc]]


## Compatibility

Compatible with the `v2` version of the plugin.

### Endpoints
Maps data to the following endpoints:

- **Mailing Lists** (including all Sites)

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Regular Text Fields**


## Setup Instructions
Freeform will detect if the _Campaign_ plugin is installed and then show it as an option to use. Because it's a Craft plugin, the setup is much simpler:

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Setup Integration on your site

</label>

- Go to the [Email Marketing section in Freeform Settings](../configuration/settings/#email-marketing) (**Freeform → Settings → Email Marketing**).
- Click the **New Integration** button at the top right.
- Select *Campaign plugin (v2)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Click the **Save** button.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Campaign** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Choose a Freeform field to be the target opt-in field.
    - Select a mailing list that new users should be subscribed to.
    - Map Freeform fields to the Campaign fields as you wish.

</div>

<div class="step-finished">Finished!</div>
