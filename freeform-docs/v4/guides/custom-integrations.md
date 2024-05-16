---
title: Craft Freeform 4.x - Can I make my own CRM or Email Marketing API integration? - User Guide
description: A guide to building your own CRM or Email Marketing API integration for Freeform.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/guides/
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

<span class="page-section">User Guides</span>

# Can I make my own CRM or Email Marketing API integration?

If our current offering of [CRM](../integrations/crm/) and [Email Marketing](../integrations/email-marketing/) integrations does not include a service you require, you have a few options available:


[[toc]]


## Options

### Reverse-engineer an Existing Integration
Reverse-engineer an existing integration available in the _Pro_ edition to see how it was done, and build your own. This would have the benefits of potentially being easier to build and allow for use of the form builder field mapping UI per form, etc. The major disadvantage here would be that this would need to be an additional file you include with the core Freeform package after every future update to Freeform. But if the integration is built well enough, you could send it to us to review and consider including it in a future release of Freeform.

### Developer Events
se the [Developer Events](../developer/events/) to build your own custom module to handle the behavior. The downside here is that it would not include the usage of the form builder field mapping interface, and may take a little more work to build. However, being a separate module, you wouldn't need to keep reapplying a fix after every update as you would in the first option.

### POST Forwarding
Depending on what your CRM offers, you may be able to use the [POST Forwarding](../integrations/post-forwarding/) feature, which is theoretically a simplistic but fast way to pass off your submission data to the CRM or Email Marketing service if they have an endpoint that can be POSTed to.

### Custom Software Development Services
Finally, we also offer custom software development services. If you need a custom solution built for you, our team is capable of building something for your needs. Just [reach out to us](../support.md#create-a-support-ticket) and we can discuss further.