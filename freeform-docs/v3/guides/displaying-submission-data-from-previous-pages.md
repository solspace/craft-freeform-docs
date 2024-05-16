---
title: Craft Freeform 3.x - Displaying Submission Data from Previous Pages - Guide
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/guides/displaying-submission-data-from-previous-pages/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">3.x</span>
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

<span class="page-section">User Guides</span>

# Displaying Submission Data from Previous Pages <Badge type="feature" text="3.10+" />
When using multi-page forms, if you'd like to display submission data from previous pages on your last for page (or any page), you can do this by using an HTML block field with some Twig code.


[[toc]]


<div class="content-block">

## Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Go to the [Form Builder Settings](../setup/settings/#form-builder-settings) page in the Freeform settings area.
- To enable Twig for HTML blocks, toggle on the [Allow Twig to be Enabled for each HTML block?](../setup/settings/#allow-twig-to-be-enabled-for-each-html-block) setting. You can also decide now if you need to enable to the **Render HTML block Twig in isolated mode?** setting as well (which when enabled, only allows the Freeform 'form' and 'fields' variables to be available. If you need the rest of Craft's variables available, you'll need to disable this setting).

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

- Go into your form inside the **Form Builder**.
- Add an HTML block field to the last page (or desired page).
- Check off the **Allow Twig** checkbox in the property editor column for that field.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

Insert some code to retrieve the previous pages' field data.

For example:

``` twig
<ul>
    <li>Name: {{ form.get('firstName').value }} {{ form.get('lastName').value }}</li>
    <li>Email: {{ form.get('email').valueAsString }}</li>
    <li>Home Phone: {{ form.get('homePhone').value }}</li>
    <li>My Radio Field: {{ form.get('myRadioField').value }}</li>
</ul>
```

</div>

<div class="step-finished">Finished!</div>

::: tip
This may typically be used as a "Confirmation" page (final page) in a multi-page form before submitting the form. However, these will parse at any point as long as there has been an initial submit (to next page or failed attempt at completing the form).
:::

</div>