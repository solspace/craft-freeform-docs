---
title: Craft Freeform 2.x - ActiveCampaign CRM API Integration
prev: false
next: false
---

::: version /craft/freeform/v5/integrations/activecampaign/
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

# ActiveCampaign CRM API Integration <Badge type="pro" text="Pro" /> <Badge type="feature" text="2.5.25+" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have an [ActiveCampaign](https://www.activecampaign.com) account already setup. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

ActiveCampaign integration includes support for the following:

* Field mapping to all standard and custom fields.
* Duplicate check on *Contact* email address (will update other details if it matches instead of creating a new contact).
* Duplicate check on *Organization* name (will use an existing organization if the value matches instead of creating a new one).

## Setup Instructions

1. Create & get API Key from ActiveCampaign:
	* Go to [ActiveCampaign website](https://www.activecampaign.com) and log into your account.
	* At the bottom left corner, click on the Settings nav menu option / gear icon (above profile icon).
	* On the next page, click the **Developer** subnav option near the middle of the page.
	* Leave this page open and open a new tab to go to Craft control panel...
2. Setup Integration on your site:
	* Go to the [CRM section in Freeform Settings](../../setup/settings.md#api-integrations) (**Freeform > Settings > CRM**).
	* Click the **New CRM Integration** at the top right.
	* Select *ActiveCampaign* from the **Service Provider** select dropdown.
	* Enter a name and handle for the integration.
	* Copy the value in the **URL** field from ActiveCampaign and paste it into the **API URL** field in Freeform.
	* Copy the value in the **Key** field from ActiveCampaign and paste it into the **API Key** field in Freeform.
	* In the **Pipeline** field, enter the name or ID of the ActiveCampaign Pipeline you wish to have *Deal* data sent to, e.g. `My Pipeline`.
	* In the **Stage** field, enter the name or ID of the ActiveCampaign Stage you wish to have *Deal* data sent to, e.g. `To Contact`.
	* In the **Owner** field (optional), enter the username or ID of the ActiveCampaign user to assign as the *Deal* owner.
	* At the top right corner of Freeform page, click **Save** button.
3. Verify Authorization:
	* After the integration is saved, it'll return you to the list of CRM integrations.
	* Click into the newly created integration.
	* Confirm that there is green circle with **Authorized** in the middle of the page.

## Additional info

When setting up the form inside Composer, please be sure to map all required fields for *Deal*:
* Currency, e.g. use a hidden field that contains `usd` or `eur`.
* Owner (ID), e.g. use a hidden field that contains `1`.
* Value ($ amount), e.g. use a hidden field that contains `500.00` or a regular input/select that allows the user to select the value, etc.

If you want the form submitter to automatically (or optionally) be opted into an ActiveCampaign mailing list, use a hidden field or select, radio, checkbox, etc that contains the ID of the mailing list you wish to have them subscribed to. Then map that field to the **Mailing List ID** field under *Contact*.
