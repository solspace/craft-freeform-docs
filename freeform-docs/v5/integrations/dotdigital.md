---
title: Craft Freeform 5.x - Dotdigital Integration
description: The Dotdigital integration setup instructions.
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

# Dotdigital <Badge type="pro" text="Pro" />

This guide assumes you have a [Dotdigital](http://dotdigital.com) account already.


[[toc]]


## Compatibility

Uses `v2` of the REST API.

### Endpoints
Maps data to the following endpoints:

- **Contacts**

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following field types:

- **Standard**
- **Custom**


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Create & get API Key from Dotdigital

</label>

- Go to the [Dotdigital website](https://dotdigital.com) and log into your account.
- At the bottom left corner, click on the profile with cog icon, then click **Access** menu option.
- Click on the **API Users** tab, and then click **New User** button.
- Enter and confirm a password and take note of it for yourself.
- After the page reloads, copy the auto generated API connector email address under the **Email** column.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- Go to the [Email Marketing section in Freeform Settings](../configuration/settings/#email-marketing) (**Freeform → Settings → Email Marketing**).
- Click the **New Integration** button at the top right.
- Select *Dotdigital (v2)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Paste the Dotdigital API connector email address into the **API User Email** field in Freeform.
- Enter the chosen password for that API user in the **API User Password** field in Freeform.
- Configure additional settings:
    - **Email Opt In Type** - choose one of the following:
        - _Single_
        - _Double_
        - _Verified Double_
        ::: tip
        Setting this to _Verified Double_ will result in a double opt-in confirmation email sent to the contact. The result will state that the contact's Opt-In Type is _Double_ and the Status is _Pending Opt-In_. These will only update to _Verified Double_ and _Subscribed_, respectively, once the contact has clicked the link in the confirmation email, at which point they will be added to the account.

        It is possible to update an existing contact using this operation. A duplicate contact will _not_ be created. If the contact already exists, then any data provided in your request that is already held for the contact will be overwritten and updated in the system.
        :::
    - **Email Type** - choose one of the following:
        - _Plain Text_
        - _HTML_
- Click the **Save** button.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Verify Authorization

</label>

- After the integration is saved, it'll return you to the list of mailing list integrations.
- Click into the newly created integration.
- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Dotdigital** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Choose a Freeform field to be the target opt-in field.
    - Select a mailing list that new users should be subscribed to.
    - Map Freeform fields to the Dotdigital fields as you wish.

</div>

<div class="step-finished">Finished!</div>

## Testing
For testing or troubleshooting purposes, you can try using Dotdigital's [demo login credentials](https://developer.dotdigital.com/docs/testing-and-examples):

- Username: `demo@apiconnector.com`
- Password: `demo`