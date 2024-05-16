---
title: Craft Freeform 1.x - Translating
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
            <span class="pr-v-v">1.x</span>
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

Currently, all of the Freeform control panel area except for the Composer interface, is translatable. Support for translations of field names, etc inside Composer will come in a future release.

Front end template translating of fields and error messages is also available.

To make a translation, you can do this in a variety of ways:

* **Recommended**:
	* Follow Craft's instructions for [Translating Static Text](https://docs.craftcms.com/v2/static-translations.html).
		* Copy the contents inside the Solspace Freeform *en.php* file located at the **/craft/plugins/freeform/translations** folder, and paste those language keys inside your translation file(s) located at **/craft/translations**.

---

* **Alternate Options** (will get overwritten when performing updates):
	* Duplicate the *en.php* file inside the **/craft/plugins/freeform/translations** folder and rename the file to the 2-letter country/language code (e.g. **German** = *de*), and begin translating.
	* Copy the contents inside the Solspace Freeform *en.php* file located at the **/craft/plugins/freeform/translations** folder, and paste those language keys inside your alternate translation file(s) located at **/craft/app/translations**.
		* In either case above, be sure to make backups of your translations before updating Craft or Freeform.

Visit the Craft documentation for more information about [Setting Up a Localized Site](https://docs.craftcms.com/v2/localization-guide.html).

If you'd like to share your translation with others, [send us and email](../support.md) with a link to the translation file, and we'll consider including it in the main Solspace Freeform plugin package.
