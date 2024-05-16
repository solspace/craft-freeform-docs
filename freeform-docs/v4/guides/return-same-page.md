---
title: Craft Freeform 4.x - Returning Submit to Same Page - User Guide
description: A guide to returning a submit of the form to the same page.
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

# Returning Submit to Same Page
Aside from the obvious of using [AJAX](../templates/ajax-forms.md), you can achieve this by adding a query in the success URL instead of an additional segment, etc.


## Instructions

``` twig{1-3,6}
{% if craft.app.request.getQueryParam('success') == 1 %}
  <div class="callout success">Your message has been sent.</div>
{% endif %}

  {{ craft.freeform.form("contactForm", {
      returnUrl: "/contact?success=1",
      submitClass: "button",
    }
  ).render() }}

{% endif %}
```

Or a different option, simply redirecting to `/contact?success`:

``` twig
{% set successParam = craft.app.request.getParam('success') %}
{% if successParam is not null %}
  <p>Success!!</p>
{% endif %}
```

And in case you're looking for a dynamic way of setting a return URL with combining several segments:

``` twig
{% set returnUrlPath = siteUrl ~ "get-quote/" ~ craft.app.request.getSegment(2) ~ "?success=1" %}
```