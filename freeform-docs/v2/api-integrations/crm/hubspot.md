---
title: Craft Freeform 2.x - HubSpot CRM API Integration
prev: false
next: false
---

::: version /craft/freeform/v5/integrations/hubspot/
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

# HubSpot CRM API Integration <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [HubSpot](http://hubspot.com) account already. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

HubSpot integration includes support for the following:

* Field mapping to standard and custom fields from all 3 endpoints listed below (of text/number string type only).
* Maps data to [Deals](http://developers.hubspot.com/docs/methods/deals/deals_overview) (optional), [Contacts](http://developers.hubspot.com/docs/methods/contacts/contacts-overview) and [Companies](http://developers.hubspot.com/docs/methods/companies/companies-overview) API endpoints. <Badge type="feature" text="Improved in 2.2.1+" />

## Setup Instructions

1. Create & get API Key from HubSpot:
	* Go to [HubSpot](http://hubspot.com) and log into your account.
	* At the top right corner, click on the profile icon and select **Integrations**.
	* On the next page, click the **Get your HubSpot API Key** link at the bottom left.
	* Click the **Generate New Key** button in the middle of the page.
	* After the page reloads, copy the newly created key.
2. Setup Integration on your site:
	* Go to the [CRM section in Freeform Settings](../../setup/settings.md#api-integrations) (**Freeform > Settings > CRM**)
	* Click the **New CRM Integration** at the top right.
	* Select *HubSpot* from the **Service Provider** select dropdown.
	* Enter a name and handle for the integration.
	* Paste the HubSpot API key into the **API Key** field in Freeform.
	* At the top right corner of Freeform page, click **Save** button.
3. Verify Authorization:
	* After the integration is saved, it'll return you to the list of CRM integrations.
	* Click into the newly created integration.
	* Confirm that there is green circle with **Authorized** in the middle of the page.
	* That's it! You can now use this integration inside Composer.

If you want to have the user's IP address sent over to the Contact in HubSpot, you can specify the custom HubSpot Contact field handle to receive it in the **IP Address Field** field, but this is optional.
