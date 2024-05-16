---
title: Craft Freeform 2.x - CRM Integrations
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

# CRM API Integrations <Badge type="pro" text="Pro" />

Freeform Pro supports some popular CRM (Customer Relationship Management) API integrations. Inside the [Settings](../../setup/settings.md#api-integrations) area of Freeform, there is a CRM API Integration Manager, which allows you to manage your CRM API integrations. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

![CRM API Integrations](../../images/cp_forms-composer-crm.png)

The following CRM integrations are currently available for **Freeform Pro** only (click each one for individual setup instructions):

* [Salesforce Lead](salesforce-lead.md)
* [Salesforce Opportunity](salesforce-opportunity.md)
* [HubSpot](hubspot.md)
* [ActiveCampaign](activecampaign.md)
* [Pipedrive](pipedrive.md)
* [Insightly](insightly.md)
* [SharpSpring](sharpspring.md)

Some important things to know about CRM integrations are:

* CRM integrations are globally available to all forms, but are configured per form inside the Composer interface.
* Most - if not all - integrations attempt to map all available fields and custom fields, but some may have limitations if the API is too complex or doesn't allow it.
* If a CRM integration has been configured, you will see a **CRM** button at the top of the **Property Editor** (right column) in Composer. To configure the CRM for a form, click that button and then select an integration name from the options. You may then map out your Freeform fields to your CRM's fields.

Every integration is a little bit different, so we have detailed instructions for setting up each integration on their own page.
