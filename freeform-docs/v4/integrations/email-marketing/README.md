---
title: Craft Freeform 4.x - Email Marketing Integrations
description: Freeform supports some popular email marketing / mailing list integrations.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/integrations/
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

# Email Marketing Integrations <Badge type="pro" text="Pro" />

<div class="hero-lead">

Freeform supports some popular email marketing / mailing list integrations. Inside the [Settings](../../setup/settings/#integrations) area of Freeform, there is an Email Marketing Integration Manager, which allows you to manage your mailing list API integrations. Every integration is a little bit different, so we have detailed instructions for setting up each integration on their own page.

The following Email Marketing integrations are currently available for **Freeform Pro** only (click each one for individual setup instructions):

</div>

<div class="feature-grid feature-api-grid">
    <a href="./activecampaign/">
        <img src="../../../../../images/api/active-campaign.png" alt="Active Campaign">
    </a>
    <a href="./campaign-monitor/">
        <img src="../../../../../images/api/campaign-monitor.png" alt="Campaign Monitor">
    </a>
    <a href="./constant-contact/">
        <img src="../../../../../images/api/constant-contact.png" alt="Constant Contact">
    </a>
    <a href="./craft-campaign/">
        <img src="../../../../../images/api/campaign.png" alt="Craft Campaign plugin">
    </a>
    <a href="./dotmailer/">
        <img src="../../../../../images/api/dotdigital.png" alt="dotdigital">
    </a>
    <a href="./mailchimp/">
        <img src="../../../../../images/api/mailchimp.png" alt="Mailchimp">
    </a>
    <a href="../../guides/custom-integrations/" class="feature-api-grid-muted">
        <img src="../../../../../images/api/make-your-own.png" alt="Make Your Own">
        <h5>Make Your Own</h5>
    </a>
    <a href="/support/premium/" class="feature-api-grid-muted">
        <img src="../../../../../images/api/hire-us.png" alt="Hire Us">
        <h5>Hire Us</h5>
    </a>
</div>

![Email Marketing](../../images/cp_settings-email-marketing.png)

::: guide ../../guides/custom-integrations/
Can I make my own CRM or Email Marketing API integration?
:::

Some important things to know about Email Marketing integrations are:

* Mailing list integrations are globally available to all forms, but are configured per form inside the form builder interface.
* Most - if not all - integrations attempt to map all available fields and custom fields, but some may have limitations if the API is too complex or doesn't allow it.
* Mailing list integrations appear as a checkbox that can be drag and dropped into the form builder interface:
	* Can only be displayed as a single checkbox, or as hidden field (as an automatic opt-in when using specifically for mailing list signups). If you want more than 1 mailing list, you can drag and drop another field into your layout (but the checkboxes cannot be displayed as a group, unless of course you made some manual adjustments to the formatting template).
		* Label of the checkbox is customizable per form.
		* Checkbox can be checked by default.
	* You can specify the mailing list to be used for the mailing list integration.
	* Your form must include an [Email](../../overview/fields.md#email) field type, which must then be assigned to the **Target Email Field** setting.
	* When available, **Field Mapping** setting allows you to map Freeform fields to available mailing list integration fields.
* To get access to all integrations, purchase (or purchase an upgrade to) *Freeform Pro*.

::: warning
While data is passed along to the Email Marketing provider, Freeform does not store whether or not Email Marketing fields were opted in, so CP submission views will not display whether or not the user subscribed.
:::