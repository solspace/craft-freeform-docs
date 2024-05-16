---
title: Craft Freeform 4.x - Alternate Success Markup from a Template or Existing Div after AJAX Submit - User Guide
description: A guide to displaying success markup from a template or existing div after AJAX submit of the form.
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

# Alternate Success Markup from a Template or Existing Div after AJAX Submit
When using the Freeform built-in [AJAX](../templates/ajax-forms.md) feature, if you wish to override the default AJAX success message and instead load alternate success markup from a template or existing `div`, follow the instructions below:


[[toc]]


## From Existing Div

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

Create a new form or edit an existing one as usual. Be sure to check off the **Enable AJAX** checkbox inside the form settings area in the form builder.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

Add a `div` to hold the success contents inside your existing template that contains the form, e.g. `custom-content`:

``` twig
<div id="custom-content">
    <h3>Thank you!</h3>
    <p>
        We have received your submission. You may now
        <a href="{{ siteUrl('path-to/file.pdf') }}">download the PDF guide</a>.
    </p>
</div>
```

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

Wrap your existing form render with a `div` to make it easier to swap out with the custom success `div`, e.g. `form-wrapper`:

``` twig
<div id="form-wrapper">
    {{ craft.freeform.form('myContactForm').render }}
</div>
```

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Step 4

</label>

In the footer of the template that will contain the form, be sure to include something like this in the footer area:

``` js
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript">
    document.addEventListener('freeform-render-success', function (event) {
        // Disable the default success rendering
        event.preventDefault();

        // We locate the 'form-wrapper' DIV element which contains our form
        // and we swap its contents (the whole form) with the HTML that we
        // fetch from any other element already present on the page
        $('#form-wrapper').html($('#custom-content').html());
    });
</script>
```

</div>

<div class="step-finished">Finished!</div>


## From a Template

<div class="step">
<label for="step1b"><input type="checkbox" class="step-check" id="step1b">

### Step 1

</label>

Create a new form or edit an existing one as usual. Be sure to check off the **Enable AJAX** checkbox inside the form settings area in the form builder.

</div>

<div class="step">
<label for="step2b"><input type="checkbox" class="step-check" id="step2b">

### Step 2

</label>

Create a new template to hold the success contents, e.g. named `ajax-success.html` with content of:

``` twig
<h3>Thank you!</h3>
<p>
    We have received your submission. You may now
    <a href="{{ siteUrl('path-to/file.pdf') }}">download the PDF guide</a>.
</p>
```

</div>

<div class="step">
<label for="step3b"><input type="checkbox" class="step-check" id="step3b">

### Step 3

</label>

Wrap your existing form render with a `div` to make it easier to swap out with the success template, e.g. `form-wrapper`:

``` twig
<div id="form-wrapper">
    {{ craft.freeform.form('myContactForm').render }}
</div>
```

</div>

<div class="step">
<label for="step4b"><input type="checkbox" class="step-check" id="step4b">

### Step 4

</label>

In the footer of the template that will contain the form, be sure to include something like this in the footer area:

``` js
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript">
    // Find the form element, can be a specific ID or just look for any forms
    var form = $('form[data-id]');
    form.on('freeform-render-success', function (event) {
        // Disable the default success rendering
        event.preventDefault();

        // We locate the 'form-wrapper' DIV element which contains our form
        // and we swap its contents (the whole form) with the HTML that we
        // fetch from the "/freeform-demo/ajax-success" template
        $('#form-wrapper').load('/freeform-demo/ajax-success');
    });
</script>
```

</div>

<div class="step-finished">Finished!</div>