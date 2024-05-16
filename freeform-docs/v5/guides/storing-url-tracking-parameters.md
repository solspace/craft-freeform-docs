---
title: Craft Freeform 5.x - Storing URL Tracking Parameters - User Guide
description: A guide to storing URL tracking parameters in forms.
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

<span class="page-section"><a href="/craft/freeform/v5/guides/">User Guides</a></span>

# Storing URL Tracking Parameters

In the event you'd like to store URL tracking parameters (e.g. `utm_source`, `utm_medium`, etc) in your form submissions, this can easily be done. Just follow the steps below:


[[toc]]


## Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Open up an existing form in Freeform. For the purpose of this example, let's assume it's called `Contact`.
- Create and add 3 new [Hidden](../forms/fields.md#hidden) fields to your form layout with the handles of:
    - `utm_campaign`
    - `utm_source`
    - `utm_medium`
    ::: tip
    The field names/handles do not have to match the query parameter names, but we've done it that way for this example.
    :::

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

- In the regular template where you are loading the form, you'll need to add the [values](../templates/queries/form/#values) parameter and grab the values from the URL with `craft.app.request.getQueryParam('')`:
    ``` twig
    {{ freeform.form("myFormHandle", {
        fields: {
            "utm_campaign": {
                value: craft.app.request.getQueryParam('utm_campaign'),
            },
            "utm_source": {
                value: craft.app.request.getQueryParam('utm_source'),
            },
            "utm_medium": {
                value: craft.app.request.getQueryParam('utm_medium'),
            },
        },
    }).render() }}
    ```
- Assuming your URL looks something like the following, Freeform will then grab those values and plug them into the corresponding hidden fields:
    - `https://mysite.net/contact?utm_campaign=my_campaign&utm_source=google_jobs_apply&utm_medium=organic`

</div>

<div class="step-finished">Finished!</div>

::: guide ../passing-dynamic-data-to-forms/
Check out our other guide for passing along other types of data to Freeform form fields.
:::
