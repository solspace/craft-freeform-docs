---
title: Craft Freeform 4.x - Infusionsoft CRM Integration
description: The Infusionsoft CRM integration setup instructions.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/integrations/infusionsoft/
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

# Infusionsoft CRM Integration <Badge type="pro" text="Pro" />
This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have an [Infusionsoft](https://keap.com/infusionsoft) account already. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.


[[toc]]


## Compatibility

- Field mapping to standard and custom fields in *Contacts*.


## Duplicate Check & Update

- Duplicate detection is based on the email address.


## Setup Instructions
The Infusionsoft API integration is a little uglier since they include another layer of API calls by using *Mashery* API Management. Don't trust your instincts and just follow the steps below closely and it won't be as bad as it looks. Please follow the steps below:

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare your site's end for Integration

</label>

- Go to the [CRM section in Freeform Settings](../../setup/settings.md#crm) (**Freeform > Settings > CRM**).
- Click the **New CRM Integration** at the top right.
- Select *Infusionsoft* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
    - In the **OAuth 2.0 Return URI** field, a URL will be automatically populated for you. Do not change or adjust this.
- Copy the URL in the **OAuth 2.0 Return URI** field to your clipboard.
- Leave this page open.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Sign up for a Mashery API Management account

</label>

- Infusionsoft runs it's API through Mashery, so you will need to sign up or log into a Mashery account inside the Infusionsoft Developers site.
- [Visit the Infusionsoft Developers site site to sign up for or log into a Mashery account](https://keys.developer.infusionsoft.com/apps/myapps)
- Fill out the form and then click **Register** button.
- You'll receive a confirmation email with a link to click to verify your account.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Create Mashery API Application

</label>

- After verifying your account, click the [create a new application](https://keys.developer.infusionsoft.com/apps/register) button to begin creating your API app.
- Fill out the form, and paste the **OAuth 2.0 Return URI** value from Freeform into the **Register Callback URL** field in Mashery.
- Then click the **Register Application** button.
- You'll be returned to a page that shows you your `client_id` and `client_secret`. Please take note of these and/or leave the browser tab open.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Prepare the Connection

</label>

- Go back to your your Craft/Freeform browser tab.
- Copy the `client_id` value from Infusionsoft and paste it into the the **Client ID** field in Freeform.
- Copy the `client_secret` value from Infusionsoft and paste it into the the **Client Secret** field in Freeform.
- At the top right corner of Freeform page, click **Save** button.

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Finish the Connection

</label>

- You will then be presented an Infusionsoft OAuth login form.
- If not already logged in, enter in your Infusionsoft login details and click **Log In** button.
- Once logged in, you'll be presented an OAuth form, asking if you want to allow access. Click **Allow** button.
- You should now be returned to the Freeform CRM setting page.
- Confirm that there is a green circle with **Authorized** in the middle of the page.

</div>

<div class="step-finished">Finished!</div>

::: tip
There are some odd things with Infusionsoft to note (hopefully this save you some time and frustration when setting up):

- For mapping to Provinces or States, you'll map to the **Region** field. The **Region** field expects values like `US-CA` for California state in USA, or `CA-MB` for Manitoba province in Canada. When mapping to Regions, it's required you map the Country code as well.
- Country code mapping uses 3-digit codes like `USA` for United States of America, `CAN` for Canada, `GBR` for United Kingdom, etc.
:::