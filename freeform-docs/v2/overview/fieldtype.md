---
title: Craft Freeform 2.x - Element Field Types
prev: false
next: false
---

::: version /craft/freeform/v5/submissions/fieldtype/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">2.x</span>
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

<span class="page-section"></span>

# Elements Field Types

Freeform includes a *Freeform Forms* and *Freeform Submissions* <Badge type="feature" text="2.5.0+" /> fieldtype, which allows you to assign/relate forms and submissions to other element types such as Craft Entries.

Here's an overview on how to use these fieldtypes:


[[toc]]



## Creating a Freeform Form field
Creating a Freeform Form field is done just like any other fieldtype, here's an overview of the process:

1. Go to the **Settings** area in Craft control panel. Click on **Fields**.
2. Click the **New field** button in the top right corner.
3. Name the field as you wish. For example: *Related Form* with a handle of *relatedForm*.
4. For the **Field Type** option, select *Freeform Form* from the list.
6. **Selection Label** is the text that will appear on the button which opens the Freeform Form selection pop-up dialog.
7. Click the **Save** button in the top right corner to save the new field.

Your Freeform Form field is now available to be assigned to other sections.

![Create New Fieldtype](../images/cp_fieldtype-create.png)


## How the Fieldtype works
The Freeform *Form* fieldtype lets the user assign any Freeform form to any element: a section Entry, Categories, Assets, etc.

![Using Fieldtype](../images/cp_fieldtype-entry.png)


## Template Properties

The following are template properties are available for the *Form* fieldtype:

* `name` <a href="#param-name" id="param-name" class="docs-anchor">#</a>
	* Outputs the name of the form
* `handle` <a href="#param-handle" id="param-handle" class="docs-anchor">#</a>
	* Outputs the handle of the form
* `id` <a href="#param-id" id="param-id" class="docs-anchor">#</a>
	* Outputs the unique ID of the form
* `description` <a href="#param-description" id="param-description" class="docs-anchor">#</a>
	* Outputs the description of the form
* `render()` <a href="#param-render" id="param-render" class="docs-anchor">#</a>
	* Outputs the full form, rendering it with the [Formatting Template](./formatting-templates.md) specified in Composer for the form.


## Usage in Templates
An example of template code you would use to display a Freeform form (with field handle of *myFreeformfieldname*) that is attached to a Craft Entry would look something like this:

``` twig
{% for entry in craft.entries.section('news').limit(10) %}
  <div class="entry">
    <h2><a href="{{ entry.url }}">{{ entry.title }}</a></h2>
    {{ entry.summary }}
    {% if entry.myFreeformfieldname is defined and entry.myFreeformfieldname is not empty %}
      <h3>{{ entry.myFreeformfieldname.name }}</h3>
      {{ entry.myFreeformfieldname.render() }}
    {% endif %}
  </div>
{% endfor %}
```


If you'd like to automatically pass content from another element (such as a Craft Entry) into Freeform field(s), you'd have to use the [overrideValues](../template-objects/form.md#prop-custattr-overridevalues) property inside your formatting template.

For example, if you want to pass a title of an entry to a Freeform field, and the entry slug was in the second segment of your URL, you should set that in your formatting template. Also be sure to include a hidden Freeform field in your form (in this case called `entryTitle`). Your formatting template code might look something like this:

``` twig
{% set entry = craft.entries.slug(craft.app.request.getSegment(2)).one() %}

{{ form.renderTag({
  overrideValues: { entryTitle: entry.title }
}) }}
```
