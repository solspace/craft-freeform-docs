---
title: Craft Freeform 5.x - Mailchimp Integration
description: The Mailchimp integration setup instructions.
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

# Mailchimp <Badge type="pro" text="Pro" />


This guide assumes you have a [Mailchimp](https://mailchimp.com) account already.


[[toc]]


## Compatibility

Uses OAuth flow on `v3` of the REST API.

### Endpoints
Maps data to the following endpoints:

- **Members** (Contacts)
- **Member Tags** (Contact Tags)
- **Interests** (Contact Groups)

Does your project require something else? &nbsp; <a href="/support/" class="button"><span>Contact Us</span></a>

### Fields
Maps data to the following **Standard** and **Custom** field types:

- **Text**
- **Website**
- **URL**
- **Dropdown**
- **Radio**
- **Date**
- **Zip**
- **[Contact Tags](#contact-tags)**
- **[Contact Groups](#contact-groups)**
- **[GDPR consent / Marketing settings](#gdpr-consent-marketing-settings)**


## Duplicate Check & Update

If a duplicate email address is found in _Mailchimp_, the profile data will be updated with the latest information submitted.


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare your site's end for Integration

</label>

- Go to the [Email Marketing section in Freeform Settings](../configuration/settings/#email-marketing) (**Freeform → Settings → Email Marketing**).
- Click the **New Integration** button at the top right.
- Select *Mailchimp (v3)* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Copy the URL in the **OAuth 2.0 Return URI** field to your clipboard.
- Leave this page open.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Prepare Mailchimp's end for Integration

</label>

- Open up a new browser tab and go to [Mailchimp website](https://mailchimp.com) and log into your account.
- Click on your account avatar at the top right corner and choose **Account & Billing**.
- On the next page, select the **Extras → Registered Apps** sub navigation option.
- Click the **Register an App** button.
- Fill out all of the fields for the app (all are mandatory except _Upload a logo_).
- On the next page, paste the value you copied from Freeform's **OAuth 2.0 Return URI** field into the Mailchimp **Redirect URI** field.
- Click the **Create** button at the bottom to save the app.
- After the page reloads, scroll down to the bottom of the page and copy the following newly created credentials:
    - **Client ID**
    - **Client Secret**

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Prepare the Connection

</label>

- Flip back to the Freeform CP browser tab.
- Paste the Mailchimp **Client ID** value into the **Client ID** field in Freeform.
- Paste the Mailchimp **Client Secret** value into the **Client Secret** field in Freeform.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Finish the Connection

</label>

- Click the **Save** button.
- You will be redirected to a Mailchimp OAuth page to allow permissions.
    - If not currently logged in, fill in your credentials.
    - Click **Allow** when asked for permissions.
- You will then be redirected back to the **Freeform Email Marketing Integration** page.
- Confirm that there is a green circle with **Authorized** in the middle of the page.

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Mailchimp** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Choose a Freeform field to be the target opt-in field.
    - Select a mailing list that new users should be subscribed to.
    - Map Freeform fields to the Mailchimp fields as you wish.
    - Configure *Contact Tags*, *Contact Groups* and *Marketing Permissions* as needed.

</div>

<div class="step-finished">Finished!</div>


## Additional Features

### Contact Tags
To map *Contact Tags*, in the **Contact Tags** field mapping area in the form builder for the form, select a Freeform field that will contain Tag value(s). This could be a select dropdown, checkboxes, radios, hidden field, etc. When specifying multiples, separate by comma.

- By default, the Mailchimp integration will replace/overwrite any existing Contact Tags if it finds an existing contact for the email address in Mailchimp. If you'd like it to append/add to the existing Contact Tags instead, enable the **Append Mailchimp Contact Tags on update instead of overwriting?** setting inside the integration settings.

### Contact Groups
To map a *Contact Interest/Group*, in the **Contact Groups** field mapping area in the form builder for the form, select a Freeform field that will contain an Interest/Group name value(s). This could be a select dropdown, a checkboxes, radios, hidden field, etc.

- Values are case-sensitive and should be entered exactly as it is in Mailchimp, e.g. `My Group Name`.
- It can accept more than one group.

### Marketing Permissions
To map *GDPR consent / Marketing settings* options, in the **Marketing Permissions** field mapping area in the form builder for the form, select the Freeform field(s) which will represent opting into the corresponding options. ANY value included in these will be considered an opt-in (regardless of whether it's `yes` or `y`, etc). You will need to map a field to each setting individually, so you'll likely need to use a separate checkbox field for each.

::: warning
Please note that if you set this up initially on a development environment, you will need to update your callback URL and reauthorize the connection on your production environment. However, your settings and field mappings will remain intact.
:::