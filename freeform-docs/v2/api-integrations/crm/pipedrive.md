---
title: Craft Freeform 2.x - Pipedrive CRM API Integration
prev: false
next: false
---

::: version /craft/freeform/v5/integrations/pipedrive/
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

# Pipedrive CRM API Integration <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Pipedrive](http://pipedrive.com) account already. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

Includes support for the following:

* Field mapping to standard and custom fields.
* Maps data to [Deals](https://developers.pipedrive.com/docs/api/v1/#!/Deals), [Persons](https://developers.pipedrive.com/docs/api/v1/#!/Persons), [Organizations](https://developers.pipedrive.com/docs/api/v1/#!/Organizations) and [Notes](https://developers.pipedrive.com/docs/api/v1/#!/Notes) endpoints.

## Setup Instructions

1. Create & get API Key from Pipedrive:
	* Go to [Pipedrive](http://pipedrive.com) and log into your account.
	* At the top right corner, click on the profile icon and select **Settings**.
	* On the next page, under the **Personal** navigation option, click the **API** option from the secondary navigation menu near the bottom on the left.
	* Click the **Generate new token** link and copy the newly created token.
2. Setup Integration on your site:
	* Go to the [CRM section in Freeform Integrations area](README.md) (**Freeform > Integrations > CRM**)
	* Click the **New Integration** at the top right.
	* Select *Pipedrive* from the **Service Provider** select dropdown.
	* Enter a name and handle for the integration.
	* Paste the Pipedrive API token into the **API Token** field in Freeform.
	* At the bottom of the page, click the **Save** button.
3. Verify Authorization:
	* After the integration is saved, it'll return you to the list of CRM integrations.
	* Click into the newly created integration.
	* Confirm that there is green circle with **Authorized** in the middle of the page.
	* That's it! You can now use this integration inside Composer.

If you want to specify which user and/or deal stage the leads go into, you can specify the unique ID's for each of those in the **User ID** and **Stage ID** fields, but this is optional. There seems to be no visual way in Pipedrive to see what the ID's are, so you'll likely need to do something like right-clicking on a Stage name / User name link to view the ID in a URL. So for example, to get the Stage ID, go to the **Settings** area and click on **Pipelines**. Right-click on a stage name and copy the link. You'll get something like:
`https://yourcompany.pipedrive.com/stages/edit/3.json` (where `3` is the stage ID in this case). The stage ID is unique, so Pipedrive will automatically know which pipeline you're referring to when you specify the stage ID.
