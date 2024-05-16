---
title: Craft Freeform 5.x - Page object
description: The Page object contains all of the Rows assigned to it in the form builder.
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

# Page object

The Page object contains all of the [Rows](./row.md) assigned to it in the [form builder](../../forms/builder/). It also contains the index of the page and its label.


[[toc]]


## Properties

### `index`
The index of the page (Starts from `0`).

### `label`
Output the label of the page.


## Methods

### `getRows()`
Use this to iterate over all [Rows](./row.md) in this page. You can also just iterate over the [Page](./page.md) object to yield the same results (examples provided below).


## Usage in Templates

### Page Label & Index
Render the page label and its index:

``` twig
{{ form.currentPage.label }}
{{ form.currentPage.index }}
```

### All Form Pages
Render all form pages and add a class to the currently shown page:

``` twig
<ul>
  {% for page in form.pages %}
    <li>
      {% if form.currentPage.index == page.index %}
        <a href="javascript:;">{{ page.label }}</a>
      {% else %}
        {{ page.label }}
      {% endif %}
    </li>
  {% endfor %}
</ul>
```

### All Fields for Current Page
Iterate through all rows and its fields of the current page:

``` twig
{% for row in form.currentPage %}
  <div class="row">
    {% for field in row %}
      <div class="field">
        {{ field.label }}
      </div>
    {% endfor %}
  </div>
{% endfor %}
```

Iterating over the form yields the same results:

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

### Total Pages in Form
How to display the total number of pages in a form:

``` twig
{{ form.pages|length }}
```
