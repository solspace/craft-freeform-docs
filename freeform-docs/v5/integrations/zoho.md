---
title: Craft Freeform 5.x - Zoho CRM Integration
description: The Zoho CRM integration setup instructions.
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

# Zoho CRM <Badge type="pro" text="Pro" /><Badge type="feature" text="Revised in 5.0+" />

This guide assumes you have a [Zoho CRM](https://www.zoho.com/crm/) account already.

[[toc]]


## Compatibility

Uses OAuth flow on `v2` of the REST API.

### Endpoints
Maps data to the following modules:

- **Leads**
- **Deals**
- **Contacts**
- **Accounts**

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Standard**
- **Custom**


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare Freeform's end for Integration

</label>

- Go to the [CRM section in Freeform Settings](../configuration/settings/#crm) (**Freeform → Settings → CRM**).
- Click the **New Integration** button at the top right.
- Select *Zoho (v2)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration. e.g. `My Zoho Integration`
- Leave this page open and open a new tab to go to the Zoho site...

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Prepare Zoho's end for Integration

</label>

- Go to the Zoho *Developer Console* website ([accounts.zoho.com/developerconsole](https://accounts.zoho.com/developerconsole)).
- Click the **Add Client** button to begin:
  - Choose the **Server-based Applications** card
    - For **Client Name**, enter whatever you like, e.g. `My Website`.
    - For **Homepage URL**, enter the URL of the website you're using this one, e.g. `https://my-precio.us`.
    - For **Authorized Redirect URIs**, enter the automatically generated **OAuth 2.0 Return URI** from the **Freeform CRM Integration** page. e.g. `https://my-precio.us/admin/freeform/settings/crm/myZohoIntegration`
    - Then click **Create** to save the new Client ID.
- On the next page, take note and copy the *Client ID* and *Client Secret* tokens and paste into your Freeform CP integration page (flip back to your other browser tab) in the *Client ID* and *Client Secret* fields respectively.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Finish the Integration

</label>

- Flip back to the Freeform CP browser tab, and click **Save** at the top right corner of Freeform page.
- You will be redirected to a Zoho OAuth page to allow permissions.
    - If not currently logged in, fill in your credentials.
    - Click **Allow** when asked for permissions.
- You will then be redirected back to the **Freeform CRM Integration** page.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Verify Authorization

</label>

- After the integration is saved, it'll return you to the list of CRM integrations.
- Click into the newly created integration.
- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Zoho** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Select the API endpoints you wish to map to.
    - Map Freeform fields to the Zoho CRM fields as needed.

</div>

<div class="step-finished">Finished!</div>

::: warning
Please note that if you set this up initially on a development environment, you will need to update your callback URL and reauthorize the connection on your production environment. However, your settings and field mappings will remain intact.
:::