---
title: Craft Freeform 4.x - Row object
description: The Row object contains all of the Fields assigned to it in the form builder. It can contain up to 4 fields/columns.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/templates/objects/row/
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

<span class="page-section"><a href="/craft/freeform/v4/templates/">Templating</a></span>

# Row object

The Row object contains all of the [Fields](./field) assigned to it in the form builder. It can contain up to 4 fields/columns. The Row object doesn't contain any properties, methods or non render field types such as a [Hidden](../../overview/fields/#hidden) fields. Instead, it's an iterable object where you have to iterate over it to get the [Fields](./field) contained within.


## Usage in Templates

Render all rows and fields of the currently active page within a form:

``` twig
{% for row in form %}
  <div class="row">
    {% for field in row %}
      <div class="field">
        {{ field.label }}
      </div>
    {% endfor %}
  </div>
{% endfor %}
```