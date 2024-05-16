---
title: Craft Freeform 4.x - Multiple Instances of the Same Form - User Guide
description: A guide for best practices when displaying multiple instances of the same form.
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

# Multiple Instances of the Same Form

You certainly can have more than 1 Freeform form loaded in the same page. However, in some cases you may run into issues when doing so, such as [AJAX](../templates/ajax-forms.md) not working correctly or some special fields not loading correctly.


[[toc]]


## Instructions

If you experience any issues (or would like to prevent any from potentially occuring), you can do so by following these best practices:

- Be sure to specify the [id](../templates/queries/form.md#param-id) parameter for the _Form query_ in your template with unique values.
- Be sure to use the [fieldIdPrefix](../templates/queries/form.md#param-fieldidprefix) parameter for the _Form query_ in your template with unique values. This will automatically insert unique prefix values to field ID's rendered with _field.render_ so you don't have to manually do this.

### Example

``` twig {5-8,11-14}
<html>
<head></head>
<body>
    <h1>First Instance of Form</h1>
    {{ craft.freeform.form("myFormHandle").render({
        id: "form-one",
        fieldIdPrefix: "form-one-"
    }) }}

    <h1>Second Instance of Form</h1>
    {{ craft.freeform.form("myFormHandle").render({
        id: "form-two",
        fieldIdPrefix: "form-two-"
    }) }}
</body>
</html>
```