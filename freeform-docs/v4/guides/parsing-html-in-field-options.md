---
title: Craft Freeform 4.x - Parsing HTML in Field Options - User Guide
description: A guide to parsing HTML in a field's options.
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

# Parsing HTML in Field Options

If you like, you can enter basic HTML (`<b>`, `<i>`, `<a>`, etc) into Freeform field labels and option labels while inside the form builder. This is especially handy if you want to add emphasis to an option or add a link to an option (e.g. link a checkbox label for Terms & Conditions page).


## Instructions

The demo and sample templates will likely handle the HTML in the form rendering automatically, but in cases where it doesn't, you may need to apply the `raw` Twig filter:

``` twig {15}
{{ field.renderLabel({
    labelClass: (field.required ? " required" : ""),
    instructionsClass: "help-block",
    errorClass: "help-block",
}) }}

{% for option in field.options %}
    <div class="checkbox">
        <label>
            <input type="checkbox"
                name="{{ field.handle }}[]"
                value="{{ option.value }}"
                {{ option.value in field.value ? "checked" : "" }}
            />
            {{ option.label|raw }}
        </label>
    </div>
{% endfor %}
```