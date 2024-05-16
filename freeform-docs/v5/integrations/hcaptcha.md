---
title: Craft Freeform 5.x - hCaptcha Spam Protection Integration
description: Freeform supports a wide variety of Captchas to protect your forms from spam.
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

# hCaptcha Integration <Badge type="feature" text="Improved in 5.0+" />

<div class="hero-lead">

Freeform includes an integration for [hCaptcha](https://www.hcaptcha.com/). Check out the options below.

</div>

[[toc]]


## Overview
All **hCaptcha** offerings will be automatically loaded and handled by Freeform (when enabled for the form). The **hCaptcha Checkbox** field will be automatically inserted above the Submit button(s).

Each _hCaptcha_ integration is managed inside the _Captchas_ area under Settings and then further configurable per form inside the form builder. Every integration is a little bit different, so please follow the detailed instructions for setting up the integration below.


## Supported Types
Below is a list of the _hCaptcha_ integrations supported by Freeform and how each of them work.

### hCaptcha Checkbox <div class="badge-group"><Badge type="lite" text="Lite" /><Badge type="pro" text="Pro" /></div>
This is based off of _reCAPTCHA_ and works very similarly. All users submitting your form must check off the hCaptcha checkbox, and in some cases, users will be presented the puzzle to solve to submit the form successfully.

### hCaptcha Invisible <div class="badge-group"><Badge type="lite" text="Lite" /><Badge type="pro" text="Pro" /></div>
Most users will not even know it's automatically validating them, but like the hCaptcha Checkbox described above, some users will be presented a modal on the page with the puzzle to solve when they click the submit button.


## Setup Instructions

::: warning
In order for this to work, the site you are connecting the integration to will need to be publicly accessible.
:::

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Get the Secret Key on hCaptcha site

</label>

- Go to the [hCaptcha admin site](https://dashboard.hcaptcha.com/) and log into your account.
- At the top left of the page, click on your profile icon and select **Settings**.
- On the next page, copy the value in the **Secret Key** field.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up App on hCaptcha site

</label>

- If you don't already have an app created, click on the **New Site** icon button at the top right.
    - Enter a name for it in the **Add New Sitekey** setting (optional).
    - In the **Domains** section, enter in any domain(s) you plan on using the captcha for, e.g. `mysite.net`.
    - Choose an option in the **hCaptcha Behavior** setting.
    - Choose an option in the **Passing Threshold** setting.
    - Scroll back to the top and click the **Save** button.
    - On the next page, you'll be presented a **Site Key** for each app. Copy this key.
- If you have already created an app, the app name and **Site Key** will appear in the list of _Sites_.
    - Copy the **Site Key** value.
- Leave this page open and open a new tab...

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Set up Integration on your site

</label>

- Go to the [Captchas section in Freeform Settings](../configuration/settings/#captchas) (**Freeform → Settings → Captchas**).
- Click the **New Integration** button at the top right.
- Select *hCaptcha* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration. e.g. `My hCaptcha Integration`.
- Choose an hCaptcha version and type from the **Captcha Type** select dropdown.
- In the **Site Key** and **Secret Key** settings, paste in the **Site Key** and **Secret Key** values from the hCaptcha site.

</div>
<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Additional Configuration

</label>

- Complete the rest of the following optional fields (these will only be the default value when configuring the integration in the form builder later):
    - **Only load Captcha scripts once the user interacts with the form?**
    - **Failure Behavior** - set to `Display Error Message` or `Send to Spam Folder`.
        - **Error Message** - set a custom error message if using `Display Error Message` failure behavior.
    - If using **hCaptcha Checkbox**, set the defaults for the following:
        - **Theme** - set to `Light` or `Dark`.
        - **Size** - set to `Normal` or `Compact`.
- Click the **Save** button.

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **hCaptcha** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Adjust any of the settings as needed.

</div>

<div class="step-finished">Finished!</div>
<div class="counter-reset"></div>


## Behavior & Overrides
The following options are available for adjusting the behavior of _hCaptcha_ and overriding at the template-level.

### Only load Captcha scripts once the user interacts with the form
If you'd like to have the associated Captcha scripts load only once a user begins filling out the form, enable the corresponding setting inside the **Captchas** settings page. If you'd like your forms to be ready to go at page load, disable this setting.

### Disabling Captchas
To disable Captchas per form at template level, add the `disableCaptcha: true` parameter to the [Form query](../templates/queries/form/).

### Add Attributes to Wrapper <Badge type="feature" text="New in 5.1+" />
You can add attributes to the main Captcha wrapper that is automatically inserted by Freeform.

<div class="code-tabs code-tabs-no-top-padding">

<input type="radio" name="code-tabs-f" tabindex="1" id="code-tab-1f" checked="checked">
<label for="code-tab-1f" class="code-tab-twig">Template Code</label>
<div class="code-tab-panel" tabindex="1">

``` twig
{{ form.render({
    captchas: {
        class: ["custom-class", "another-class"],
        "data-test": true,
    }
}) }}
```

</div>
<input type="radio" tabindex="1" name="code-tabs-f" id="code-tab-2f">
<label for="code-tab-2f" class="code-tab-html">Output</label>
<div class="code-tab-panel" tabindex="1">

``` html
// Output (truncated for example)
...
<div class="custom-class another-class" data-test data-freeform-hcaptcha-container>
    <div class="hcaptcha">
...
```

</div>
</div>