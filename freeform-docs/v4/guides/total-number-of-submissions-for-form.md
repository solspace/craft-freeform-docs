---
title: Craft Freeform 4.x - Display Total Number of Submissions for a Form - User Guide
description: A guide to display the total number of submissions collected for a form.
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

# Display Total Number of Submissions for a Form

If you wish to display the total number of submissions a Freeform form has received, you can do this by including the `.count` function on the [Submissions Query](../templates/queries/submissions.md).


[[toc]]


## Instructions

Your template code would look as simple as this:

``` twig
{{ craft.freeform.submissions({formId: form.id}).count }}
```

A real-world example might look something like this:

``` twig{9}
{% set forms = craft.freeform.forms %}

<h2>List of All Forms</h2>

{% for form in forms %}
    <div class="form-card">
        <h4>{{ form.name }}</h4>
        <p>{{ form.description }}</p>
        <p>{{ craft.freeform.submissions({formId: form.id}).count }} Submissions</p>
    </div>
{% endfor %}
```

### Spam Count

If you'd like to display the total number of submissions in the spam folder for a form, just add `isSpam: true` to the query:

``` twig
{{ craft.freeform.submissions({formId: form.id, isSpam: true}).count }}
```