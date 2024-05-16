---
title: Craft Freeform 2.x - Translating
prev: false
next: false
---

::: version /craft/freeform/v5/configuration/translating/
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

# Translating

All of the Freeform control panel is translatable. Front end template translating of fields and error messages is also available.

To make a translation, follow Craft's instructions for [Translating Static Text](https://docs.craftcms.com/v3/static-translations.html), and then check out the Freeform-specific guide below:

* Duplicate the *freeform.php* file inside the Freeform plugin located at the **./vendor/solspace/craft3-freeform/src/translations/en-US** folder, and move it into the language ID folder (e.g. `de`) of your Craft **./translations/** directory. If the *translations* directory does not yet exist, you'll need to create it (e.g. `./translations/de/freeform.php`). You can then update those language keys inside your Freeform translation file.
* If you also have [Freeform Payments](../api-integrations/payments/README.md), duplicate the *freeform-payments.php* file inside the Freeform Payments plugin located at the **./vendor/solspace/craft3-freeform-payments/src/translations/en-US** folder, and add it into your Craft **./translations/** directory (e.g. `./translations/de/freeform-payments.php`). You can then update those language keys inside the file.

Visit the Craft documentation for more information about [Setting Up a Localized Site](https://docs.craftcms.com/v3/localization.html).

If you'd like to share your translation with others, [send us and email](../support.md) with a link to the translation file, and we'll consider including it in the main Solspace Freeform plugin package.
