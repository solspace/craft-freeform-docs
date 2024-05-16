---
title: Craft Freeform 4.x - Mailchimp Email Marketing Integration
description: The Mailchimp email marketing integration setup instructions.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/integrations/mailchimp/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">4.x</span>
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

<span class="page-section"><a href="/craft/freeform/v4/integrations/">Integrations</a></span>

# Mailchimp Integration <Badge type="pro" text="Pro" />

This documentation page assumes you have read over the [Email Marketing Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Mailchimp](http://mailchimp.com) account already, along with mailing list(s) already created. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

::: video xeMdWeIG1N4
Video: Setting up a Mailchimp integration
:::


[[toc]]


## Compatibility

Mailchimp integration includes support for field mapping to standard and custom fields of the following types:

- Text
- Website
- URL
- Dropdown
- Radio
- Date
- Zip
- Tags ([see below for details](#additional-features))
- Interests/Groups ([see below for details](#additional-features))
- GDPR consent / Marketing settings ([see below for details](#additional-features))


## Additional Features

The Mailchimp email marketing integration also allows support for *Contact Tags*, individual *Interests/Groups* and *GDPR consent / Marketing settings*.

- To map *Contact Tags*, in the **Tags** field mapping area in the form builder for the form, select a Freeform field that will contain Tag value(s). This could be a select dropdown, a checkbox group, radio field, hidden field, etc. When specifying multiples, separate by comma.
    - By default, the Mailchimp integration will replace/overwrite any existing Contact Tags if it finds an existing contact for the email address in Mailchimp. If you'd like it to append/add to the existing Contact Tags instead, enable the **Append Mailchimp Contact Tags on update instead of overwriting?** setting inside the integration settings. <Badge type="feature" text="4.0.24+" />
- To map a *Contact Interest/Group*, in the **Group or Interest** field mapping area in the form builder for the form, select a Freeform field that will contain an Interest/Group name value(s). This could be a select dropdown, a checkbox group, radio field, hidden field, etc.
    - Values are case-sensitive and should be entered exactly as it is in Mailchimp, e.g. `My Group Name`.
    - It can accept more than one group. <Badge type="feature" text="4.1.4+" />
- To map *GDPR consent / Marketing settings* options, in the **GDPR** field mapping area in the form builder for the form, select the Freeform field(s) which will represent opting into the corresponding options. ANY value included in these will be considered an opt-in (regardless of whether it's `yes` or `y`, etc). You will need to map a field to each GDPR setting individually, so you'll likely need to use a separate checkbox field for each.


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Create & get API Key from Mailchimp

</label>

- Open a new tab and go to [Mailchimp website](https://mailchimp.com) and log into your account.
- Click on your account avatar at bottom left corner and choose **Account & Billing**.
- On the next page, select the **Extras > API keys** sub navigation option.
- Click the **Create New Key** button at the bottom of the page.
- After the page reloads, copy the newly created key under the **API key** column.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up Integration on your site

</label>

- Go to the [Email Marketing section in Freeform Settings](../../setup/settings.md#email-marketing) (**Freeform > Settings > Email Marketing**).
- Click the **New Email Marketing Integration** at the top right.
- Select *Mailchimp* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration.
- Paste the Mailchimp API key into the **API Key** field in Freeform.
- At the top right corner of Freeform page, click **Save** button.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Verify Authorization

</label>

- After the integration is saved, it'll return you to the list of mailing list integrations.
- Click into the newly created integration.
- Confirm that there is green circle with **Authorized** in the middle of the page.

</div>

<div class="step-finished">Finished!</div>