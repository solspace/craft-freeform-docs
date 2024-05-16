---
title: Craft Freeform 2.x - Mailing List Integrations
prev: false
next: false
---

::: version /craft/freeform/v5/integrations/
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

# Mailing List Integrations <Badge type="pro" text="Pro" />

Freeform supports some popular mailing list integrations. Inside the [Settings](../../setup/settings.md#api-integrations) area of Freeform, there is a Mailing List API Integration Manager, which allows you to manage your mailing list API integrations.

![Connect Mailing List](../../images/cp_settings-mailinglist-create.png)

The following Mailing List integrations are currently available for **Freeform Pro** only (click each one for individual setup instructions):

* [MailChimp](mailchimp.md)
* [Constant Contact](constant-contact.md)
* [Campaign Monitor](campaign-monitor.md)
* [ActiveCampaign](activecampaign.md)
* [dotmailer](dotmailer.md)
* [Craft Campaign plugin](craft-campaign.md) (available for *Lite* edition)

Some important things to know about Mailing List integrations are:

* Mailing list integrations are globally available to all forms, but are configured per form inside the Composer interface.
* Most - if not all - integrations attempt to map all available fields and custom fields, but some may have limitations if the API is too complex or doesn't allow it.
* Mailing list integrations appear as a checkbox that can be drag and dropped into the Composer interface:
	* Can only be displayed as a single checkbox, or as hidden field <Badge type="feature" text="2.3.0+" /> (as an automatic opt-in when using specifically for mailing list signups). If you want more than 1 mailing list, you can drag and drop another field into your layout (but the checkboxes cannot be displayed as a group, unless of course you made some manual adjustments to the formatting template).
		* Label of the checkbox is customizable per form.
		* Checkbox can be checked by default.
	* You can specify the mailing list to be used for the mailing list integration.
	* Your form must include an [Email](../../overview/fields-field-types.md#fields-email) field type, which must then be assigned to the **Target Email Field** setting.
	* When available, **Field Mapping** setting allows you to map Freeform fields to available mailing list integration fields.
* To get access to all integrations, purchase (or purchase an upgrade to) *Freeform Pro*.

::: warning
While data is passed along to the Mailing List provider, Freeform does not store whether or not Mailing List fields were opted in, so CP submission views will not display whether or not the user subscribed.
:::

Every integration is a little bit different, so we have detailed instructions for setting up each integration on their own page.
