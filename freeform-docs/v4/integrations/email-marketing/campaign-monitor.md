---
title: Craft Freeform 4.x - Campaign Monitor Email Marketing Integration
description: The Campaign Monitor email marketing integration setup instructions.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/integrations/campaign-monitor/
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

<span class="page-section"><a href="/craft/freeform/v4/integrations/">Integrations</a></span>

# Campaign Monitor Integration <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [Email Marketing Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Campaign Monitor](http://campaignmonitor.com) account already, along with mailing list(s) already created. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.


[[toc]]


## Compatibility

- Field mapping to standard and custom fields of the following types:
    - Text
    - Number
    - Multiple Options (can only select one)
    - Multiple Options (can select many)
    - Date


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Create & get API Key from Campaign Monitor

</label>

- Go to [Campaign Monitor website](https://campaignmonitor.com) and log into your account.
- At the top right corner, click on the profile icon and select **Manage Account**.
- On the next page, click the **API keys** link near the bottom of the page.
- After the page reloads, click the **Show API Key** link to reveal your API key.
- Leave this page open and open a new tab to go to Craft control panel...

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- Go to the [Email Marketing section in Freeform Settings](../../setup/settings.md#email-marketing) (**Freeform > Settings > Email Marketing**).
- Click the **New Email Marketing Integration** at the top right.
- Select *Campaign Monitor* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Copy the value in the **API Key** field from Campaign Monitor and paste it into the **API Key** field in Freeform.
- Copy the value in the **Client ID** field from Campaign Monitor and paste it into the **Client ID** field in Freeform.
- At the top right corner of Freeform page, click **Save** button.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Verify Authorization

</label>

- After the integration is saved, it'll return you to the list of Email Marketing integrations.
- Click into the newly created integration.
- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step-finished">Finished!</div>