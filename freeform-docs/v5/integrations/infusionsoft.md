---
title: Craft Freeform 5.x - Infusionsoft Integration
description: The Infusionsoft integration setup instructions.
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

# Infusionsoft <Badge type="pro" text="Pro" />

This guide assumes you have an [Infusionsoft](https://keap.com/infusionsoft) account already.


[[toc]]


## Compatibility

Uses OAuth flow on `v1` of the REST API.

### Endpoints
Maps data to the following endpoints:

- **Contacts**

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Standard**
- **Custom**


## Duplicate Check & Update

- Duplicate detection is based on the email address.


## Setup Instructions
The Infusionsoft API integration includes another layer of API calls by using *Mashery* API Management. Please closely follow the steps below:

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare your site's end for Integration

</label>

- Go to the [CRM section in Freeform Settings](../configuration/settings/#crm) (**Freeform → Settings → CRM**).
- Click the **New Integration** button at the top right.
- Select *Infusionsoft (v1)* from the **Service Provider** select dropdown.
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
- Click the **Save** button.

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

<div class="step">
<label for="step6"><input type="checkbox" class="step-check" id="step6">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Infusionsoft** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Select the API endpoints you wish to map to.
    - Map Freeform fields to the Infusionsoft fields as needed.

</div>

<div class="step-finished">Finished!</div>

::: tip
For mapping to Provinces or States, you'll map to the **Region** field. The **Region** field expects values like `US-CA` for California state in USA, or `CA-MB` for Manitoba province in Canada. When mapping to Regions, it's required you map the Country code as well.

Country code mapping uses 3-digit codes like `USA` for United States of America, `CAN` for Canada, `GBR` for United Kingdom, etc.
:::

::: warning
Please note that if you set this up initially on a development environment, you will need to update your callback URL and reauthorize the connection on your production environment. However, your settings and field mappings will remain intact.
:::