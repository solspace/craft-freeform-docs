---
title: Craft Freeform 5.x - Pipedrive Integration
description: The Pipedrive integration setup instructions.
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

# Pipedrive <Badge type="pro" text="Pro" /><Badge type="feature" text="Revised in 5.0+" />

This guide assumes you have a [Pipedrive](http://pipedrive.com) account already.


[[toc]]


## Compatibility

Uses OAuth flow on `v1` of the REST API.

### Endpoints
Maps data to the following endpoints:

- **Leads**
- **Deals**
- **Persons**
- **Organizations**
- **Notes**

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Standard**
- **Custom**


## Duplicate Check & Update

- Duplicate detection on **Persons** email address (and updating contact info if matches).


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare your site's end for Integration

</label>

- Go to the [CRM section in Freeform Settings](../../configuration/settings/#email-marketing) (**Freeform → Settings → CRM**).
- Click the **New Integration** button at the top right.
- Select *Pipedrive (v1)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Copy the URL in the **OAuth 2.0 Return URI** field to your clipboard.
- Leave this page open.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Create & get API Key from Pipedrive

</label>

- Open a new tab and visit the [Pipedrive Developer Hub](https://developers.pipedrive.com/) site.
    - If you don't already have a developer account, create one here. Otherwise, login.
- Click on the **Create an App** button at the top right and choose _Create Private App_.
- In the _Basic Info_ page, enter a unique app name and paste the Freeform OAuth URL in the **Callback URL** field.
- In the _OAuth & Access Scopes_ page, enable the following:
    - **Deals**
        - **Full Access**
    - **Contacts**
        - **Full Access**
    - **Leads**
        - **Full Access**
    - The **Installation URL** field can be left blank.
- Copy the value in the **Client ID** setting.
- Copy the value in the **Client Secret** setting.
- Save the new app.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Install the App on Production Pipedrive Account

</label>

::: tip
If you wish to work with your app in Sandbox/Dev mode, you can skip this step for now.
:::

- Inside of the [Pipedrive Developer Hub](https://developers.pipedrive.com/) site, click on your newly created app and click the **Change to Live** button at the top right corner.
    ::: warning
    In order for this to work, the site (and its callback URL) you are connecting the integration to will need to be publicly accessible.
    :::
- Visit your [regular Pipedrive account](https://pipedrive.com).
- In the **Marketplace** area, install your new app.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Prepare the Connection

</label>

- Flip back to the Freeform CP browser tab.
- Enter Pipedrive credentials in the next 2 fields:
    - Paste the Pipedrive **Client ID** value into the **Client ID** field in Freeform.
    - Paste the Pipedrive **Client Secret** value into the **Client Secret** field in Freeform.

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Additional Configuration

</label>

#### Leads
If you plan to use the _Leads_ endpoint, the following setting is available:

- **User ID** (optional) - specify which user ID the leads go into.

::: tip
There seems to be no visual way in Pipedrive to see what the ID's are, so you'll likely need to do something like right-clicking on a User name link to view the ID in a URL.
:::

<br />

#### Deals
If you plan to use the _Deals_ endpoint, the following settings are available:

- **User ID** (optional) - specify which user ID the leads go into.
- **Stage ID** (optional) - specify which stage ID the leads go into.

::: tip
There seems to be no visual way in Pipedrive to see what the ID's are, so you'll likely need to do something like right-clicking on a Stage name / User name link to view the ID in a URL. So for example, to get the Stage ID, go to the **Settings** area and click on **Pipelines**. Right-click on a stage name and copy the link. You'll get something like (where `3` is the stage ID in this case):

`https://yourcompany.pipedrive.com/stages/edit/3.json`

The stage ID is unique, so Pipedrive will automatically know which pipeline you're referring to when you specify the stage ID.
:::

</div>

<div class="step">
<label for="step6"><input type="checkbox" class="step-check" id="step6">

### Finish the Integration

</label>

- Click the **Save** button.
- You will be redirected to a Pipedrive OAuth page to allow permissions.
    - If not currently logged in, fill in your credentials.
    - Click **Allow & Install** when asked for permissions.
- You will then be redirected back to the **Freeform CRM Integration** page.

</div>

<div class="step">
<label for="step7"><input type="checkbox" class="step-check" id="step7">

### Verify Authorization

</label>

- After the integration is saved, it'll return you to the list of CRM integrations.
- Click into the newly created integration.
- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step">
<label for="step8"><input type="checkbox" class="step-check" id="step8">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Pipedrive** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Select the API endpoints you wish to map to.
    - Map Freeform fields to the Pipedrive fields as needed.

</div>

<div class="step-finished">Finished!</div>

::: warning
Please note that if you set this up initially on a development environment, you will need to update your callback URL and reauthorize the connection on your production environment. However, your settings and field mappings will remain intact.
:::