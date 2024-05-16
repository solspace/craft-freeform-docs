---
title: Craft Freeform 5.x - reCAPTCHA Spam Protection Integration
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

# reCAPTCHA <Badge type="feature" text="Improved in 5.0+" />

<div class="hero-lead">

Freeform includes an integration for Google [reCAPTCHA](https://www.google.com/recaptcha/). Check out the options below.

</div>

[[toc]]


## Overview
All **reCAPTCHA** offerings will be automatically loaded and handled by Freeform (when enabled for the form). The **reCAPTCHA v2 Checkbox** field will be automatically inserted above the Submit button(s).

Each _reCAPTCHA_ integration is managed inside the _Captchas_ area under Settings and then further configurable per form inside the form builder. Every integration is a little bit different, so please follow the detailed instructions for setting up the integration below.


## Supported Types
Below is a list of the _reCAPTCHA_ integrations supported by Freeform and how each of them work.

### reCAPTCHA v2 Checkbox
All users submitting your form must check off the reCAPTCHA checkbox, and in some cases, users will be presented the puzzle to solve to submit the form successfully. This is available in all editions of Freeform.

### reCAPTCHA v2 Invisible <div class="badge-group"><Badge type="lite" text="Lite" /><Badge type="pro" text="Pro" /></div>
Most users will not even know it's automatically validating them, but like the reCAPTCHA v2 Checkbox described above, some users will be presented a modal on the page with the puzzle to solve when they click the submit button.

### reCAPTCHA v3 <div class="badge-group"><Badge type="lite" text="Lite" /><Badge type="pro" text="Pro" /></div>
Users are never presented any puzzle to solve, etc. Instead, users are automatically validated by Google based on a score assigned to them. You have control over that score threshold inside Freeform settings. We suggest starting with something like `0.5` and see how that goes (where a `0.0` score means that it's almost certain a bot and a `1.0` score means it's a user). If the user does not pass this threshold, the submission will follow the behavior you set out for it in the settings (send to spam folder / reject it entirely / show an error to the user, etc). The user has no ability to validate themselves like in **reCAPTCHA v2**.


## Setup Instructions

<div class="step">
<label for="step1a"><input type="checkbox" class="step-check" id="step1a">

### Set up App on reCAPTCHA site

</label>

- Go to the [reCAPTCHA admin site](https://www.google.com/recaptcha/admin) and log into your account.
- If you don't already have an app created, click on the **+** icon button at the top right.
    - Enter a name for it in the **Label** setting.
    - Choose a type in the **reCAPTCHA Type** setting.
    - In the **Domains** section, enter in any domain(s) you plan on using the captcha for, e.g. `mysite.net`.
    - Click the **Submit** button.
    - On the next page, you'll be presented a **Site Key** and **Secret Key**. Copy both of these.
- If you have already created an app, select it from the dropdown at the top left and click on the **cog** settings icon at the top right.
    - In the **Domains** section, enter in any domain(s) you plan on using the captcha for, e.g. `mysite.net`.
    - Click on the **reCAPTCHA Keys** area above and copy the **Site Key** and **Secret Key** values.
    - If you have made any changes to this app, scroll to the bottom and click **Save** button.
- Leave this page open and open a new tab...

</div>

<div class="step">
<label for="step2a"><input type="checkbox" class="step-check" id="step2a">

### Set up Integration on your site

</label>

- Go to the [Captchas section in Freeform Settings](../configuration/settings/#captchas) (**Freeform → Settings → Captchas**).
- Click the **New Integration** button at the top right.
- Select *reCAPTCHA* from the **Service Provider** select dropdown.
- Enter a name and handle for the integration. e.g. `My reCAPTCHA Integration`.
- Choose a reCAPTCHA version and type from the **Captcha Type** select dropdown.
- In the **Site Key** and **Secret Key** settings, paste in the **Site Key** and **Secret Key** values from the reCAPTCHA site.

</div>
<div class="step">
<label for="step3a"><input type="checkbox" class="step-check" id="step3a">

### Additional Configuration

</label>

- Complete the rest of the following optional fields (these will only be the default value when configuring the integration in the form builder later):
    - **Only load Captcha scripts once the user interacts with the form?**
    - **Failure Behavior** - set to `Display Error Message` or `Send to Spam Folder`.
        - **Error Message** - set a custom error message if using `Display Error Message` failure behavior.
    - If using **reCAPTCHA v3**, set the defaults for the following:
        - **Score Threshold** - the minimum score (between `0.0` and `1.0`) required for the Captcha to pass validation.
        - **Action** - the action to use when validating the Captcha, e.g. `submit`.
    - If using **reCAPTCHA v2 Checkbox**, set the defaults for the following:
        - **Theme** - set to `Light` or `Dark`.
        - **Size** - set to `Normal` or `Compact`.
- Click the **Save** button.

</div>

<div class="step">
<label for="step4a"><input type="checkbox" class="step-check" id="step4a">

### Configure the Form

</label>

To use this integration on your form(s), you'll need to configure each form individually.

- Visit the form inside the form builder.
- Click on the **Integrations** tab.
- Click on **reCAPTCHA** in the list of available integrations.
- On the right side of the page:
    - Enable the integration.
    - Adjust any of the settings as needed.

</div>

<div class="step-finished">Finished!</div>
<div class="counter-reset"></div>


## Behavior & Overrides
The following options are available for adjusting the behavior of _reCAPTCHA_ and overriding at the template-level.

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
<div class="custom-class another-class" data-test data-freeform-recaptcha-container>
    <div class="g-recaptcha">
...
```

</div>
</div>

### Load reCAPTCHA JS Manually
If you're loading an entire form via AJAX, you'll need to load the reCAPTCHA JS yourself, since it's considered insecure otherwise and the browser blocks it. You should add this script tag anywhere on your page, preferably the footer:

``` html
<script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=explicit"></script>
```

### Set the Action for reCAPTCHA v3
To set the action of reCAPTCHA v3, add `recaptchaAction: "myaction"` to your `form.renderTag`, like this:

``` twig
{{ form.renderTag({ recaptchaAction: "myaction" }) }}
```

### Hiding the reCAPTCHA floating badge
_reCAPTCHA v2 Invisible_ and _reCAPTCHA v3_ will automatically load a reCAPTCHA icon in the bottom right corner of your site containing the form. This is required by Google's terms of service. There are CSS workarounds if you wish to locate the icon to the left side of the browser page, etc.

If you'd like to hide the reCAPTCHA floating badge (bottom right for _v2 Invisible_ and _v3_), you are allowed to do so as along as you provide reference to reCAPTCHA in the user flow. Quote and example from the [Google reCAPTCHA docs](https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed):

>You are allowed to hide the badge as long as you include the reCAPTCHA branding visibly in the user flow. Please include the following text:
>``` twig
>This site is protected by reCAPTCHA and the Google
><a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
>```
>
>Note: if you choose to hide the badge, please use:
>``` twig
>.grecaptcha-badge { visibility: hidden; }
>```
