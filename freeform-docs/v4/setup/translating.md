---
title: Craft Freeform 4.x - Translating
description: All of the Freeform control panel is translatable. Front end template translating of fields and error messages is also available.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/configuration/translating/
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

<span class="page-section"><a href="/craft/freeform/v4/setup/">Setup</a></span>

# Translating

All of the Freeform control panel is translatable. Front end template translating of fields and error messages is also available.


[[toc]]


## Overview

To make a translation, follow Craft's instructions for [Translating Static Text](https://craftcms.com/docs/4.x/sites.html#static-message-translations). Then continue with this Freeform-specific guide.

### Control Panel

To translate the Freeform control panel, you can simply duplicate the *freeform.php* file inside the Freeform plugin located at the **./vendor/solspace/craft-freeform/packages/plugin/src/translations/en-US** folder. Then move it into the language ID folder (e.g. `de`) of your Craft **./translations/** directory. If the *translations* directory does not yet exist, you'll need to create it (e.g. `./translations/de/freeform.php`). You can then update those language keys inside your Freeform translation file.

### Front End Template Translations

It's important to note that you have full control over what and how it's translated. You need to make sure you're consistent with applying `|t` or `|t('freeform')` as that will dictate whether the translation needs to happen inside a file named `site.php` or `freeform.php`, respectively.

To see how all parts of form formatting templates are translated, [have a look at the examples we've included](../templates/formatting/). When using `render` helpers, Freeform will generally handle the translation (`|t('freeform')`) setting for you. However, once you go manual or semi-manual, for example, radio and checkbox field options should look something like this in your templates:

``` twig {21}
{% elseif field.type == "radio_group" %}

    {{ field.renderLabel({
        labelClass: labelClass,
        instructionsClass: instructionClass,
        errorClass: errorClass,
    }) }}

    {{ field.oneLine ? "<div>"|raw }}

    {% for index, option in field.options %}
        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
            <input type="radio"
                    name="{{ field.handle }}"
                    value="{{ option.value }}"
                    id="{{ field.idAttribute }}-{{ index }}"
                    class="form-check-input{{ field.hasErrors ? " is-invalid" }}"
                    {{ option.checked ? "checked" : "" }}
            />
            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                {{ option.label|t|raw }}
            </label>
        </div>
    {% endfor %}

    {{ field.oneLine ? "</div>"|raw }}

    {{ field.renderInstructions() }}
    {{ field.renderErrors() }}
```

Some parts are handled with JS and therefore need to be translated differently. Specifically, if you're using the [built-in AJAX feature](../templates/ajax-forms.md) and need to translate the success/error banner, you'll need to override the [Freeform JS Plugin](../developer/js-plugin.md) and translate those with:

``` js
freeform.setOption('successBannerMessage', 'My custom success message');
freeform.setOption('errorBannerMessage', 'My custom error message');
```

That _might_ look something like the below example, but **depending on several factors**, _please_ see the [AJAX Forms documentation guide](../templates/ajax-forms.md) for more information about how to use this and where to place it, etc:

``` js {3-4}
const form = document.getElementById("my-form");
form.addEventListener("freeform-ready", function (event) {
  event.target.freeform.setOption("successBannerMessage", "This is a custom success message.");
  event.target.freeform.setOption("errorBannerMessage", "This is a custom error message.");
});
```

Please visit the Craft documentation for more information about [Setting Up a Localized Site](https://craftcms.com/docs/4.x/sites.html#setting-up-a-localized-site).

### Share a Translation

If you'd like to share your translation with others, [send us an email](../support/) with a link to the translation file, and we'll consider including it in the main Solspace Freeform plugin package.