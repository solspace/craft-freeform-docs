---
title: Craft Freeform 5.x - ActiveCampaign Integration
description: The ActiveCampaign integration setup instructions.
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

# ActiveCampaign <Badge type="pro" text="Pro" />

This guide assumes you have an [ActiveCampaign](https://www.activecampaign.com) account already.

::: tip
The _ActiveCampaign_ integration includes both a CRM type and Email Marketing (mailing list subscribe) type. Please take note of that in the instructions below.
:::


[[toc]]


## Compatibility

Uses `v3` of the REST API.

### Endpoints
Maps data to the following endpoints:

- **Deals** (CRM)
- **Contact** (CRM & Email Marketing)
- **Contact Tags** (Email Marketing)
- **Account** (CRM)

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Standard**
- **Custom**


## Duplicate Check & Update

- Duplicate check on **Contact** (CRM & Email Marketing) email address (will update other details if it matches instead of creating a new contact).
- Duplicate check on **Account** (CRM) name (will use an existing account if the value matches instead of creating a new one).


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Create & get API Key from ActiveCampaign

</label>

- Go to the [ActiveCampaign website](https://www.activecampaign.com) and log into your account.
- At the bottom left corner, click on the Settings nav menu option / gear icon (above the profile icon).
- On the next page, click the **Developer** subnav option near the middle of the page.
- Copy the values in the **API URL** and **API Key** fields.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- Go to the [CRM](../configuration/settings/#crm) or [Email Marketing](../configuration/settings/#email-marketing) section in Freeform Settings (**Freeform → Settings → Integrations**).
- Click the **New Integration** button at the top right.
- Select *ActiveCampaign (v3)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Paste the **API URL** value from ActiveCampaign into the **API URL** field in Freeform.
- Paste the **API Key** value from ActiveCampaign into the **API Key** field in Freeform.

</div>
<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Additional Configuration (CRM only)

</label>

- In the **Pipeline** field, enter the name or ID of the ActiveCampaign Pipeline you wish to have *Deal* data sent to, e.g. `My Pipeline`.
- In the **Stage** field, enter the name or ID of the ActiveCampaign Stage you wish to have *Deal* data sent to, e.g. `To Contact`.
- In the **Owner** field (optional), enter the username or ID of the ActiveCampaign user to assign as the *Deal* owner.
- Click the **Save** button.

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
- Click on **ActiveCampaign** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Choose a Freeform field to be the target opt-in field. (Email Marketing only)
    - Select a mailing list that new users should be subscribed to. (Email Marketing only)
    - Select the API endpoints you wish to map to.
    - Map Freeform fields to the ActiveCampaign fields as needed.

</div>

<div class="step-finished">Finished!</div>

#### CRM Notes

::: tip
When setting up the form inside the form builder, please be sure to map all required fields for *Deal*:
- Currency, e.g. use a hidden field that contains `usd` or `eur`.
- Owner (ID), e.g. use a hidden field that contains `1`.
- Value ($ amount), e.g. use a hidden field that contains `500.00` or a regular input/select that allows the user to select the value, etc.

If you want the form submitter to automatically (or optionally) be opted into an ActiveCampaign mailing list, use a hidden field or dropdown, radioes, checkbox, etc that contains the ID of the mailing list you wish to have them subscribed to. Then map that field to the **Mailing List ID** field under *Contact*.
:::

#### Email Marketing Notes

::: tip
When mapping to **Contact Tags**, you can use any type of Freeform field you like, allowing for the most flexibility for all workflows. If you wish to have the user select their own tags, Freeform will automatically map over option value(s) from option fields such as checkboxes, dropdown fields, etc. If you wish to have tags forced upon submitters, you can include a Hidden or Invisible field type and include tag(s) in the value in the form builder.

When specifying multiples, separate each with a semi-colon (`;`), e.g. `basic;premium;premium plus;preferred`.
:::
