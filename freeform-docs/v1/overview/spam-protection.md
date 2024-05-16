---
title: Craft Freeform 1.x - Spam Protection
prev: false
next: false
---

::: version /craft/freeform/v5/forms/spam-protection/
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

# Spam Protection

Freeform includes its own Javascript-based honeypot spam protection. This is enabled by default, but can be disabled in the [Freeform Settings](../setup/settings.md#spam-settings).

* Each time a form is loaded, it stores a unique honeypot per session, which has a timestamp, unique name and unique hash value.
  * Both name and hash must match to successfully submit the form or advance to the next page.
  * A user is allowed 100 honeypot values per user session (highly unnecessary but in case your site has a form in a common place like a footer, etc it'll help prevent unwanted blocking of legitimate users).
  * Honeypots are stored in the session for 3 hours, and then are removed.
    * Because this uses the session, this limit is also dependent on the server configuration for [session.gc_maxlifetime()](http://php.net/manual/en/session.configuration.php#ini.session.gc-maxlifetime) in `php.ini`. Typically the default might be `1440` seconds (24 minutes), but it's possible the default has been altered to something else.
* When the form opens, the value is wrong by default, and then javascript swaps in the correct value.
  * If the submission fails the honeypot test, the form will appear to submit successfully, but will not store the data. An error is not displayed so as not to give away the spam controls.
    * To troubleshoot, you can view the [Freeform Stats Widget](widgets.md#stats) and see if the spam block count is incrementing.
* The honeypot is not a hidden field, but is positioned absolutely with height `0` and width `0`, so the field is not visible.
* This spam protection method requires javascript be enabled for the user's browser, otherwise it will fail.
  * Freeform will automatically insert javascript in the footer of the page. If you prefer to have this load inside the `<form></form>` tags (for purposes of caching, etc), you can disable the [Include Freeform Scripts in the Page Footer](../setup/settings.md#scripts-footer) setting.

If you wish to use *reCAPTCHA* for your forms (Pro edition), enable the [reCAPTCHA](../setup/settings.md#spam-recaptcha) setting and fill in the reCAPTCHA *Site Key* and *Secret Key*. To add reCAPTCHA to your forms, open up and edit each form and drag over the **reCAPTCHA** special field anywhere you like into your form layout.
