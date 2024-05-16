---
title: Craft Freeform 5.x - Browser Validation with Required Attribute - User Guide
description: A guide to browser validation on fields using the 'required' attribute.
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

# Browser Validation with Required Attribute
A guide to browser validation on fields using the `required` attribute. If you prefer to have the browser validate that a required field contains a value, there is an automated way to do this with the [Template Overides](../templates/formatting/#template-overrides) feature.


## Instructions
In previous versions of Freeform, there was a parameter to control this (`useRequiredAttribute`), but that is no longer available.

To apply a `required` attribute to all fields that are marked as required in the form builder, you can access it with `":required"` via the `fields` namespace in the [Template Overides](../templates/formatting/#template-overrides) feature.

A barebones example (without any other overrides in place) would look something like this:

``` twig {3-8}
{{ form.render({
    fields: {
        ":required": {
            attributes: {
                label: { "+class": "label-required" },
                input: { "required": true },
            },
        },
    }
}) }}
```
