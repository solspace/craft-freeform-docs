---
title: Craft Freeform 4.x - ClickDimensions POST Forwarding
description: Freeform's POST Forwarding feature allows you to integrate your forms with ClickDimensions for Microsoft Dynamics.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/integrations/clickdimensions/
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
<span class="page-section"><a href="/craft/freeform/v4/integrations/">Integrations</a></span>

# ClickDimensions POST Forwarding <Badge type="pro" text="Pro" />
Freeform's [POST Forwarding](../../integrations/post-forwarding/README.md) feature allows you to integrate your forms with [ClickDimensions](https://clickdimensions.com/) for Microsoft Dynamics.

This documentation resource assumes you are familiar with [ClickDimensions](https://clickdimensions.com/). We cannot provide any assistance with setting this up, aside from the basics.


## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Go into your form inside the Freeform form builder interface, and under the **Form Settings** tab, scroll to the very bottom.
- In the **POST Forwarding** setting, add your custom action URL there. Freeform will make an extra POST submit to that URL once it has successfully validated the form submission, etc.
- In the **POST Forwarding Error Trigger** setting, enter a value like `error` (assuming the error page contains that word, and success wouldn't). When Freeform detects that word (or phrase) in the success/error page from the custom ClickDimensions POST URL, it'll assume it's an error and then log the error(s) to the Freeform error log.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

Add the _ClickDimensions_ script, and then add this AFTER it:

``` js
var match = document.cookie.match(new RegExp('(^| )cuvid=([^;]+)'));
if (match) {
    var cuvid = match[2];
    document.querySelector('input[name=cd_visitorkey]').value = cuvid;
}
```

Include any additional fields as hidden fields inside Freeform, such as:

- A field with handle `cd_visitorkey` and the key as the value.
- A field with handle `form_friendly_id` and an applicable value, e.g. `ContactUs`.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

Be sure to name/rename all Freeform field handles to match the ClickDimensions field names, e.g. `txtFirstName`, etc.

</div>

<div class="step-finished">Finished!</div>