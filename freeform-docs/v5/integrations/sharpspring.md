---
title: Craft Freeform 5.x - SharpSpring Integration
description: The SharpSpring integration setup instructions.
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

# SharpSpring <Badge type="pro" text="Pro" />

This guide assumes you have a [SharpSpring](https://sharpspring.com) account already.


[[toc]]


## Compatibility

Uses `v1.2` of the REST API.

### Endpoints
Maps data to the following endpoints:

- **Contacts**

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Standard**
- **Custom**


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Create & get API Key from SharpSpring

</label>

- Go to [SharpSpring](https://sharpspring.com) and log into your account.
- At the top right corner, click on the profile icon and select **Settings**.
- On the next page, on the left side Settings panel, under **SharpSpring API**, click the **API Settings** link.
- You'll then see your keys for SharpSpring API under Account ID and Secret Key. Click the **Generate New API Keys** button if you wish to generate new ones (optional).
- Copy the Account ID and Secret Key.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- Go to the [CRM section in Freeform Settings](../configuration/settings/#crm) (**Freeform → Settings → CRM**).
- Click the **New Integration** button at the top right.
- Select *SharpSpring (v1.2)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Paste the SharpSpring **Account ID** and **Secret Key** into the **Account ID** and **Secret Key** field, respectively, in Freeform.
- Click the **Save** button.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Verify Authorization

</label>

- After the integration is saved, it'll return you to the list of CRM integrations.
- Click into the newly created integration.
- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **SharpSpring** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Select the API endpoints you wish to map to.
    - Map Freeform fields to the SharpSpring fields as needed.

</div>

<div class="step-finished">Finished!</div>
