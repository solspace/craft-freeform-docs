---
title: Craft Freeform 5.x - Errors object
description: The Errors object contains all special and general error handling, typically used to display at the top of the form.
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

<span class="page-section"><a href="/craft/freeform/v5/templates/">Templating</a></span>

# Errors object

The Errors object contains all special and general error handling, typically used to display at the top of the form. Common examples would be using to display [Spam-related](../../forms/spam-protection.md) errors or even custom errors in cases where a custom plugin is extending Freeform's functionality.


[[toc]]


## Properties

### `error`
Returns the special or general error.


## Usage in Templates

When used in conjunction with the [hasErrors](./form/#hasErrors) variable, the following code will render a list of special or general errors within a form:

``` twig
{% if form.hasErrors %}
  <div class="freeform-form-has-errors">
    {{ "There was an error submitting this form"|t }}

    {% if form.errors|length %}
      <ul>
        {% for error in form.errors %}
          <li>{{ error }}</li>
        {% endfor %}
      </ul>
    {% endif %}
  </div>
{% endif %}
```
