---
title: Craft Freeform 5.x - Can I make my own integrations and fields? - User Guide
description: A guide to building your own custom fields or other integration for Freeform.
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

<span class="page-section"><a href="/craft/freeform/v5/guides/">User Guides</a></span>

# Can I make my own integrations or fields?

If our current offering of [Fields](../forms/fields/) and [Integrations](../integrations/) does not include a service you require, you have a few options available:


[[toc]]


## Development Guides
For your convenience, we have included several guides to help you build your own custom fields and integrations:

<div class="menu-grid">
    <a href="../../developer/field-types/" class="menu-box">
        <img src="../../../../images/icons/field-text.png" alt="Custom Field Types">
        <div class="menu-grid-text">
            <h3>Custom Field Types <Badge type="feature" text="New!" /></h3>
            <p>Easily create your own custom field types.</p>
        </div>
    </a>
    <a href="../../developer/email-marketing/" class="menu-box">
        <img src="../../../../images/icons/megaphone.png" alt="Custom Email Marketing">
        <div class="menu-grid-text">
            <h3>Custom Email Marketing</h3>
            <p>Create your own email marketing and add it to Freeform.</p>
        </div>
    </a>
    <a href="../../developer/webhooks/" class="menu-box">
        <img src="../../../../images/icons/webhook.png" alt="Custom Webhooks">
        <div class="menu-grid-text">
            <h3>Custom Webhooks</h3>
            <p>Create your own webhook and add it to Freeform.</p>
        </div>
    </a>
</div>


## Other Options

### Reverse-engineer an Existing Integration
Reverse-engineer an existing integration available to see how it was done, and build your own. We highly recommend you follow the [development guides](#development-guides) mentioned above, if available.

### Developer Events
Use the [Developer Events](../developer/events/) to build a custom module to handle any custom behavior your project needs.

### POST Forwarding
Depending on your project's needs, you may be able to use the [POST Forwarding](../integrations/post-forwarding/) feature, which is theoretically a simplistic but fast way to pass off your submission data to the CRM or Email Marketing service if they have an endpoint that can be posted to.

### Custom Software Development Services
Finally, we also offer [custom software development services](/support/premium/). If you need a custom solution built for you, our team is capable of building something for your needs. Just [reach out to us](/support/) and we can discuss further.