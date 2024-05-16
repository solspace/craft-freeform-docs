---
title: Craft Freeform 5.x - Constant Contact Integration
description: The Constant Contact integration setup instructions.
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

# Constant Contact <Badge type="pro" text="Pro" />

This guide assumes you have a [Constant Contact ](https://www.constantcontact.com) account already.


[[toc]]


## Compatibility

Uses OAuth flow on `v3` of the REST API.

### Endpoints
Maps data to the following endpoints:

- **Contact Lists**

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Standard**
- **Custom**


## Duplicate Check & Update

If a duplicate email address is found in _Constant Contact_, the profile data will be updated with the latest information submitted.


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare your site's end for Integration

</label>

- Go to the [Email Marketing section in Freeform Settings](../configuration/settings/#email-marketing) (**Freeform → Settings → Email Marketing**).
- Click the **New Integration** button at the top right.
- Select *Constant Contact (v3)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Copy the URL in the **OAuth 2.0 Return URI** field to your clipboard.
- Leave this page open.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Prepare Constant Contact's end for Integration

</label>

- Open up a new browser tab and go to Constant Contact's API [*My Applications* website](https://app.constantcontact.com/pages/dma/portal/).
- Log into your Constant Contact account there.
- Go to the **My Applications** page (click at top nav menu).
- Click on the **New Application** button at top right.
- Enter a name for the application in the modal window that pops up, and click **Save**. Leave the other 2 settings as they are defaulted.
- On the next page, paste the value you copied from Freeform's **OAuth 2.0 Return URI** field into the Constant Contact **Redirect URI** field.
- Fill out the rest of the form if you like, and then click the **Save** button at the top right.
- On the **My Applications** list page, click on your newly created application.
- Copy the `API Key` value from Constant Contact.
- Click the **Generate Secret** button beside the API Key field, and then copy the `App Secret` value from Constant Contact.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Prepare the Connection

</label>

- Go back to your Craft/Freeform browser tab.
- Paste the `API Key` value from Constant Contact into the the **API Key** field in Freeform.
- Paste the `App Secret` value from Constant Contact into the the **App Secret** field in Freeform.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Finish the Connection

</label>

- Click the **Save** button.
- You will be redirected to a Constant Contact OAuth page to allow permissions.
    - If not currently logged in, fill in your credentials.
    - Click **Allow** when asked for permissions.
- You will then be redirected back to the **Freeform Email Marketing Integration** page.
- Confirm that there is a green circle with **Authorized** in the middle of the page.

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Constant Contact** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Choose a Freeform field to be the target opt-in field.
    - Select a mailing list that new users should be subscribed to.
    - Map Freeform fields to the Constant Contact fields as you wish.

</div>

<div class="step-finished">Finished!</div>

::: warning
Please note that if you set this up initially on a development environment, you will need to update your callback URL and reauthorize the connection on your production environment. However, your settings and field mappings will remain intact.
:::