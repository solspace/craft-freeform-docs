---
title: Craft Freeform 5.x - Google Tag Manager - Integration
description: A guide to setting up Google Tag Manager with your forms.
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

<span class="page-section"><a href="/craft/freeform/v5/integrations/">Integrations</a></span>

# Google Tag Manager

Freeform includes built-in support for [Google Tag Manager](https://tagmanager.google.com/) if you wish to use that with your forms.

This guide assumes you are familiar with [Google Tag Manager](https://tagmanager.google.com/). We cannot provide any assistance with setting this up, aside from the basics.


[[toc]]


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Enable Google Tag Manager inside Freeform

</label>

- Go to the ['Other' integration section in Freeform Settings](../configuration/settings/#email-marketing) (**Freeform → Settings → Integrations → Other**).
- Click on **Google Tag Manager** in the list.
- Enable it by toggling on the **Enabled** setting.
- If you'd like GTM to be enabled for all forms by default, toggle on the **Enabled by default** setting.
- If you wish to have Freeform insert its own scripts, enter your GTM ID (`GTM-XXXXXX`) in the **Container ID** setting and a custom event name (if applicable) in the **Event Name** setting.
- Save the form.

![GTM Setup inside Freeform](../images/guides/gtm-1.png)

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually. If you toggled on the **Enabled by default** setting in the Freeform Settings, it will automatically be ON for all forms. You can disable them for each form as necessary.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **Google Tag Manager** in the list of available integrations.
- On the right side of the page:
    - Enable (or disable) the integration.
    - Adjust any of the settings as needed.
- Save the form.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Customizing

</label>

To customise what gets sent to the events, you can write your own JS and add an event listener in your template, like this:

``` js
window.addEventListener('freeform-gtm-data-layer-push', function (event) {
    event.payload.myCustomValue = 'something_here';
    event.payload.otherCustomValue = 'other_value';
});
```

This would then attach whatever you add to the payload to the event that is being pushed to GTM.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Submit a Test Submission

</label>

- Visit your form on your site.
- Fill out the form and submit it.
- The data should have been pushed to GTM using the specified event name.

::: tip
The success of this is not observable on your site, as this event goes to GTM via some sockets, so there's nothing in the network tab.
:::

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Check Google Tag Manager

</label>

To see if your test worked correctly, visit the [Google Tag Manager](https://tagmanager.google.com/) website and open your project workspace. Then click on the **PREVIEW** button near the top right side of the page.

![Google Tag Manager](../images/guides/gtm-2.png)

</div>

<div class="step">
<label for="step6"><input type="checkbox" class="step-check" id="step6">

### Troubleshooting

</label>

Google offers a [Tag Assistant](https://tagassistant.google.com/) tool along with a [Tag Assistant Companion](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm) Chrome extension. These help troubleshoot installation of `gtag.js` and **Google Tag Manager**. When the Chrome extension is present, it enables additional features for Tag Assistant including debugging iframes and debugging multiple windows from the same debug session.

</div>

<div class="step-finished">Finished!</div>
