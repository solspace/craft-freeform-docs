---
title: Craft Freeform 2.x - Craft Campaign plugin Mailing List Integration
prev: false
next: false
---

::: version /craft/freeform/v5/integrations/campaign/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">2.x</span>
            <span class="pr-v-type pr-retired">Retired</span>
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

<span class="page-section"></span>

# Craft Campaign plugin Mailing List Integration <Badge type="feature" text="2.0.0+" />

This documentation page assumes you have read over the [Mailing List Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have the [Craft Campaign plugin](https://craftcampaign.com) installed and setup already. This integration will work with both *Lite* and *Pro* editions of Freeform.

Craft Campaign integration includes support for the following:

* Field mapping to regular text field types.

## Setup Instructions
Freeform will detect if Craft Campaign is installed and then show it as an option to use. Because it's a Craft plugin, setup is much simpler:

1. Setup Integration on your site:
	* Go to the [Mailing Lists section in Freeform Settings](../../setup/settings.md#api-integrations) (**Freeform > Settings > Mailing Lists**)
	* Click the **New Mailing List Integration** at the top right.
	* Select *Craft Campaign* from the **Service Provider** select dropdown.
	* Enter a name and handle for the integration.
	* At the top right corner of Freeform page, click **Save** button.
2. Proceed to Composer to setup form.
