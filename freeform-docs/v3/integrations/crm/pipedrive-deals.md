---
title: Craft Freeform 3.x - Pipedrive CRM Integration
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/integrations/pipedrive/
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

# Pipedrive Deals CRM Integration <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Pipedrive](http://pipedrive.com) account already. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

::: tip
This documentation page is for the *Deals* version of the Pipedrive integration. [Click here if you're looking for the Pipedrive *Leads* integration.](pipedrive-leads.md)
:::


[[toc]]


<div class="content-block">

## Compatibility

- Field mapping to standard and custom fields.
- Maps data to [Deals](https://developers.pipedrive.com/docs/api/v1/#!/Deals), [Persons](https://developers.pipedrive.com/docs/api/v1/#!/Persons), [Organizations](https://developers.pipedrive.com/docs/api/v1/#!/Organizations) and [Notes](https://developers.pipedrive.com/docs/api/v1/#!/Notes) endpoints.

</div>
<div class="content-block">

## Duplicate Check & Update

- Duplicate detection on Persons email address (and updating contact info if matches).

</div>
<div class="content-block">

## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Create & get API Key from Pipedrive

</label>

- Go to [Pipedrive](http://pipedrive.com) and log into your account.
- At the top right corner, click on the profile icon and select **Personal Preferences**.
- On the next page near the top right of the secondary navigation menu, click the **API** option.
- Click the **Generate new token** link and copy the newly created token.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- Go to the [CRM section in Freeform Settings](../../setup/settings.md#crm) (**Freeform > Settings > CRM**).
- Click the **New Integration** at the top right.
- Select *Pipedrive Deals* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Paste the Pipedrive API token into the **API Token** field in Freeform.
- At the bottom of the page, click the **Save** button.

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

::: tip
If you want to specify which user and/or deal stage the leads go into, you can specify the unique ID's for each of those in the **User ID** and **Stage ID** fields, but this is optional. There seems to be no visual way in Pipedrive to see what the ID's are, so you'll likely need to do something like right-clicking on a Stage name / User name link to view the ID in a URL. So for example, to get the Stage ID, go to the **Settings** area and click on **Pipelines**. Right-click on a stage name and copy the link. You'll get something like (where `3` is the stage ID in this case):

`https://yourcompany.pipedrive.com/stages/edit/3.json`

The stage ID is unique, so Pipedrive will automatically know which pipeline you're referring to when you specify the stage ID.
:::

</div>