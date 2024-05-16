---
title: Craft Freeform 4.x - Zoho Lead CRM Integration
description: The Zoho Lead CRM integration setup instructions.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/integrations/zoho/
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

# Zoho Lead CRM Integration <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Zoho CRM](https://crm.zoho.com) account already. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

::: tip
This documentation page is for the *Lead* version of the Zoho integration. [Click here if you're looking for the Zoho *Deal* integration.](zoho-deal.md)
:::


[[toc]]


## Compatibility

- Field mapping to standard and custom fields.
- Maps data to Leads module only.


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare Freeform's end for Integration

</label>

- Go to the [CRM section in Freeform Settings](../../setup/settings.md#crm) (**Freeform > Settings > CRM**).
- Click the **New CRM Integration** at the top right.
- Select *Zoho Lead* from the **Service Provider** select dropdown.
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
- You will be redirected to a Zoho login page
    - Fill in your credentials
    - Click **Allow** when asked for permissions
- You will then be redirected back to the **Freeform CRM Integration** page

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Verify Authorization

</label>

- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step-finished">Finished!</div>