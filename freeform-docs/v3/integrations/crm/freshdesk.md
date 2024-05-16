---
title: Craft Freeform 3.x - Freshdesk CRM Integration
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/integrations/freshdesk/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">3.x</span>
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

<span class="page-section">Integrations</span>

# Freshdesk CRM Integration <Badge type="feature" text="3.1.0+" /> <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Freshdesk](https://freshdesk.com) account already. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.


[[toc]]


<div class="content-block">

## Compatibility

- Field mapping to standard and most custom fields.
- Maps data to [Tickets](https://developers.freshdesk.com/api/#tickets) endpoint.

</div>
<div class="content-block">

## Duplicate Check & Update

- Duplicate detection will automatically be applied to the email address and a Contact will be created or updated automatically by Freshdesk.

</div>
<div class="content-block">

## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Create & get API Key from Freshdesk

</label>

- Go to your [Freshdesk](https://freshdesk.com) account (e.g. `https://yourcompany.freshdesk.com`) and login.
- At the top right corner, click on the profile icon and select **Profile Settings**.
- On the next page, toward the top right side you'll see an input labelled **Your API Key**.
- Copy that API key to your clipboard.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- Go to the [CRM section in Freeform Settings](../../setup/settings.md#crm) (**Freeform > Settings > CRM**).
- Click the **New CRM Integration** at the top right.
- Select *Freshdesk* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Paste the API Key from Freshdesk into the **API Key** field in Freeform.
- In the **Domain** field, enter your Freshdesk helpdesk domain, e.g. `https://yourcompany.freshdesk.com`.
- Complete the rest of the following optional fields:
    - **Default Type** - set the default **Type** for tickets, e.g. `Question`.
    - **Default Priority** - set the default **Priority** for tickets, e.g. `1` (low).
    - **Default Status** - set the default **Status** for tickets, e.g. `2` (open).
    - **Default Source** - set the default **Source** for tickets, e.g. `1` (email), `2` (portal), etc.
- At the top of the page, click the **Save** button.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Verify Authorization

</label>

- After the integration is saved, it'll return you to the list of CRM integrations.
- Click into the newly created integration.
- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step-finished">Finished!</div>

</div>