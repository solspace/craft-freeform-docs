---
title: Craft Freeform 3.x - Pardot CRM Integration
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/integrations/pardot/
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

# Pardot CRM Integration <Badge type="feature" text="Added 3.6.8+, Revised 3.11.7+" /> <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Pardot](https://www.pardot.com) account already. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.


[[toc]]


<div class="content-block">

## Compatibility

- Field mapping to standard and most custom *Prospect* object fields. There may be some limitations on types of fields that can be mapped.

</div>
<div class="content-block">

## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare Freeform's end for Integration

</label>

- Go to the [CRM section in Freeform Settings](../../setup/settings.md#crm) (**Freeform > Settings > CRM**).
- Click the **New CRM Integration** at the top right.
- Select *Pardot (v5)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration. e.g. `My Pardot Integration`
- Copy the URL value generated in the **OAuth 2.0 Return URI** field, e.g. `https://mysite.net/admin/freeform/settings/crm/myPardotIntegration`.
- Leave this page open and open a new tab to go to the Salesforce site...

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Prepare Pardot/Salesforce's end for Integration

</label>

- Open another browser tab and go to [Salesforce website](https://login.salesforce.com) and log into your account.
- On the left navigation menu, click on **Apps**, then click **App Manager**.
- At the top right corner of the page, click the **New Connected App** button.
- Fill out the fields in the **Basic Information** section.
- In the **API (Enable OAuth Settings)** section, click the **Enable OAuth Settings** checkbox.
- More fields will appear. In the **Callback URL** field, paste the value you copied from the **OAuth 2.0 Return URI** field inside Freeform.
- In the **Selected OAuth Scopes** field, select the following permissions from the list and click **Add** arrow button:
    - **Perform requests on your behalf at any time (refresh_token, offline_access)**
    - **Access Pardot services**
- You shouldn't need to fill out any further fields, and then click **Save** button.
- You will be taken to a new page that lists info about your newly created app, including **Consumer Key** and **Consumer Secret** values. You will need to copy each of these values.
    - Salesforce gets tricky to navigate, so do yourself a favor and copy and paste these 2 values into a text editor for now, being sure to label each too. You'll save yourself some extra steps later on.
- At the top middle of the page, click on the **Manage** button.
- At the top middle of the next page, click the **Edit Policies** button.
- Under the **OAuth policies** section, adjust the following settings:
    - In the **Permitted Users** field, be sure that it is set to **All users may self-authorize**.
    - In the **IP Relaxation** field, change the setting to **Relaxed IP restrictions**.
    - Click **Save** button at bottom of page.
- If you copy and pasted the **Consumer Key** and **Consumer Secret** values in a text editor, you can skip these next couple steps:
    - To go back to your app to see these values, click on the **App Manager** navigation item (under **Apps**)
    - Find your app in the list. Then in the right column, click the down arrow, and then click **View**.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Finish the Integration on your site

</label>

- Flip back to the Freeform CP browser tab.
- Enter Salesforce credentials in the next 2 fields:
    - Paste the Salesforce **Consumer Key** value into the **Client ID** field in Freeform.
    - Paste the Salesforce **Consumer Secret** value into the **Client Secret** field in Freeform.
- Enter your Pardot Business ID into the **Pardot Business Unit ID** field.
    - To find the Pardot Business Unit ID, go to *Marketing Setup*, in the *Quick Find* box, enter `Pardot`, and then select *Pardot Account Setup*. Copy the business unit ID for the Pardot instance you want to use.
- At the top right corner of Freeform page, click **Save** button.
- You will be redirected to a Salesforce login page.
    - Fill in your credentials.
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

<div class="step-finished">Finished!</div>

</div>