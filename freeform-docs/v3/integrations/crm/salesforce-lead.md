---
title: Craft Freeform 3.x - Salesforce Lead CRM Integration
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/integrations/salesforce/
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

# Salesforce Lead CRM Integration <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Salesforce](https://www.salesforce.com) account already. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

::: tip
This documentation page is for the *Lead* version of the Salesforce integration. [Click here if you're looking for the Salesforce *Opportunity* integration.](salesforce-opportunity.md)
:::

::: video KVAmqTVqxo0
Video: Setting up a Salesforce integration
:::


[[toc]]


<div class="content-block">

## Compatibility

Salesforce *Lead* integration includes support for the following:

- Field mapping to standard and custom *Lead* object fields:
    - **Text** fields: String, Textarea, Email, URL, Address, Picklist, Multipicklist, Date/Time fields
    - **Numeric** fields: Number, Phone, Currency
    - **Other** fields: Reference/relationship
    - There are some limitations to types of fields that can be mapped, such as **Lookup** fields.
- Available fields are pulled from the *Lead* object in Salesforce, which is located at:
    1. **Setup** (top right)
    2. **Objects & Fields** (left nav)
    3. **Object Manager**
    4. **Lead**
    5. **Fields & Relationships** (top middle menu)

</div>
<div class="content-block">

## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare Salesforce's end for Integration

</label>

::: warning
This integration will not work with the _Salesforce **Essentials**_ plan as it does not have access to the API.
:::

- Open another browser tab and go to [Salesforce website](https://login.salesforce.com) and log into your account.
- On the left navigation menu, click on **Apps**, then click **App Manager**.
- At the top right corner of the page, click the **New Connected App** button.
- Fill out the fields in the **Basic Information** section.
- In the **API (Enable OAuth Settings)** section, click the **Enable OAuth Settings** checkbox.
- More fields will appear. In the **Callback URL** field, enter any valid URL that begins with **https** (it could even be **https://google.com**, as we don't use this part).
- In the **Selected OAuth Scopes** field, select the following permissions from the list and click **Add** arrow button:
    - **Allow access to your unique identifier (openid)**
    - **Perform requests on your behalf at any time (refresh_token, offline_access)**
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
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- If you wish to use a config file for Salesforce credentials instead, please see [Alternate Config File Setup](#alternate-config-file-setup) documentation further below.
- Go to the [CRM section in Freeform Settings](../../setup/settings.md#crm) (**Freeform > Settings > CRM**).
- Click the **New CRM Integration** at the top right.
- Select *Salesforce Lead* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Enter Salesforce credentials in the next 4 fields:
    - Paste the Salesforce **Consumer Key** value into the **Client ID** field in Freeform.
    - Paste the Salesforce **Consumer Secret** value into the **Client Secret** field in Freeform.
    - Enter your Salesforce account username/email address into the **Username** field in Freeform.
    - Enter your Salesforce account password into the **Password** field in Freeform.
- Additional configuration options:
    - **Assign Lead Owner?** - Enabling this will make Salesforce assign a lead owner based on lead owner assignment rules in Salesforce.
    - **Sandbox Mode** - Enable this if your Salesforce account is in Sandbox mode.
    - **Using custom URL?** - Enable this if you connect to your Salesforce account with a custom company URL such as `mycompany.my.salesforce.com`.
- At the top right corner of Freeform page, click **Save** button.

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
<div class="content-block">

## Alternate Config File Setup
The Salesforce Lead integration allows you the choice of entering your API keys and credentials via a config file instead if you wish. For more information about Freeform's config overrides, please see [Project Config](../../setup/project-config.md) documentation. A brief overview is below:

- Copy and paste the following code into a new file named `freeform.php` and place it into your Craft `/config/` directory:
    ``` php
    <?php

    return [
        "salesforce_client_id"     => null,
        "salesforce_client_secret" => null,
        "salesforce_username"      => null,
        "salesforce_password"      => null,
    ];
    ```
- Replace the `null` value for **salesforce_client_id** with the Salesforce **Consumer Key** value.
- Replace the `null` value for **salesforce_client_secret** with the Salesforce **Consumer Secret** value.
- Replace the `null` value for **salesforce_username** with your Salesforce account username/email address.
- Replace the `null` value for **salesforce_password** with your Salesforce account password.
- Save the changes in the **freeform.php** file.
- Your final file should look something like this:
    ``` php
    <?php

    return [
        "salesforce_client_id"     => "7SDf7GFDG6O76sd798FdG98s9897F9G7dSFDF9G7sd980G8dfG9FG_aSD650g8dsh7D98g79Fs98ds0788Ps",
        "salesforce_client_secret" => "1234567890123456789",
        "salesforce_username"      => "you@youremail.com",
        "salesforce_password"      => "yourSalesforcePassword",
    ];
    ```

</div>