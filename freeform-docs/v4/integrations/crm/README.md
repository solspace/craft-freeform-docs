---
title: Craft Freeform 4.x - CRM Integrations
description: Freeform supports some popular CRM (Customer Relationship Management) integrations.
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

# CRM Integrations <Badge type="pro" text="Pro" />

<div class="hero-lead">

Freeform Pro supports some popular CRM (Customer Relationship Management) API integrations. Inside the [Settings](../../setup/settings/#integrations) area of Freeform, there is a CRM Integration Manager, which allows you to manage your CRM API integrations. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

The following CRM integrations are currently available for **Freeform Pro** only (click each one for individual setup instructions):

</div>

<div class="feature-grid feature-api-grid">
    <a href="./activecampaign/">
        <img src="../../../../../images/api/active-campaign.png" alt="Active Campaign">
    </a>
    <a href="./freshdesk/">
        <img src="../../../../../images/api/freshdesk.png" alt="Freskdesk">
    </a>
    <a href="./hubspot/">
        <img src="../../../../../images/api/hubspot.png" alt="HubSpot">
    </a>
    <a href="./infusionsoft/">
        <img src="../../../../../images/api/infusionsoft.png" alt="Infusionsoft">
    </a>
    <a href="./insightly/">
        <img src="../../../../../images/api/insightly.png" alt="Insightly">
    </a>
    <a href="./pardot/">
        <img src="../../../../../images/api/pardot.png" alt="Pardot">
    </a>
    <a href="./pipedrive-deals/">
        <img src="../../../../../images/api/pipedrive.png" alt="Pipedrive">
        <h5>Deals</h5>
    </a>
    <a href="./pipedrive-leads/">
        <img src="../../../../../images/api/pipedrive.png" alt="Pipedrive">
        <h5>Leads</h5>
    </a>
    <a href="./salesforce-lead/">
        <img src="../../../../../images/api/salesforce.png" alt="Salesforce">
        <h5>Leads</h5>
    </a>
    <a href="./salesforce-opportunity/">
        <img src="../../../../../images/api/salesforce.png" alt="Salesforce">
        <h5>Opportunity</h5>
    </a>
    <a href="./sharpspring/">
        <img src="../../../../../images/api/sharpspring.png" alt="SharpSpring">
    </a>
    <a href="./zoho-deal/">
        <img src="../../../../../images/api/zoho.png" alt="Zoho">
        <h5>Deals</h5>
    </a>
    <a href="./zoho-lead/">
        <img src="../../../../../images/api/zoho.png" alt="Zoho">
        <h5>Leads</h5>
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

![CRM Integrations](../../images/cp/crm-integration-builder.png)

::: guide ../../guides/custom-integrations/
Can I make my own CRM or Email Marketing API integration?
:::


Some important things to know about CRM integrations are:

* CRM integrations are globally available to all forms, but are configured per form inside the form builder interface.
* Most - if not all - integrations attempt to map all available fields and custom fields, but some may have limitations if the API is too complex or doesn't allow it.
* If a CRM integration has been configured, you will see a **CRM** button at the top of the **Property Editor** (right column) in the form builder. To configure the CRM for a form, click that button and then select an integration name from the options. You may then map out your Freeform fields to your CRM's fields.

Every integration is a little bit different, so we have detailed instructions for setting up each integration on their own page.