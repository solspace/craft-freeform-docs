---
title: Craft Freeform 5.x - Form Validation with Parsley - User Guide
description: A guide to using Parsley form validation with Freeform.
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

# Form Validation with Parsley

[Parsley](https://parsleyjs.org) is a very well documented and capable form validation Javascript library. This guide will show you how to implement form validation for your Freeform forms with Parsley.


[[toc]]


## Overview

This guide assumes you are running [Parsley](https://parsleyjs.org) on your web pages. Usually this just means including the `parsley.js` or `parsley.min.js` file in your source code. Parsley relies on [jQuery](https://jquery.com) as well, so be sure that is included in your site as well before you follow the next steps.

You can implement Parsley validation for your form 1 of 2 ways...


## Inside the Form Builder (CP)
You can add the necessary attributes to your forms with the form builder. Follow the instructions below to see how.

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Open up an existing form inside Freeform and go to the **Form Settings** tab (cog/gear icon).
- At the bottom of the settings tab, there's an area called **Form tag Attributes**. Add `data-parsley-validate` in the *Attribute* column and leave the *Value* column empty (or specify `true`). This will trigger the Parsley validation.
    | Attribute | Value |
    | :--- | :--- |
    | data-parsley-validate | |

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

- For the rest of your fields, add attributes to them in the form builder interace as needed. To add attributes to fields, simply click the field in the middle layout column, and in the right side Property Editor column, you'll see an **Input attributes** settings area. For example:
    - Add `required` to the *Attribute* column and leave the *Value* column empty (or specify `true`) to make the field required.
        - Merely checking the *This field is required* checkbox is not sufficient to trigger Parsley, as it's intended just for Freeform's own validation.
    - You can also add extra validations like `data-parsley-maxlength="20"` (`data-parsley-maxlength` in *Attribute* column and `20` in *Value* column) or `data-parsley-type="number"` to trigger more complex [built-in validations as seen here](https://parsleyjs.org/doc/index.html#validators).
        | Attribute | Value |
        | :--- | :--- |
        | required | |
        | data-parsley-type | number |
        | data-parsley-maxlength | 20 |

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

- Render your form builder-based form in a Twig template as usual.
    ``` twig
    {{ freeform.form("parsleyForm").render() }}
    ```

</div>

<div class="step-finished">Finished!</div>


## At Template Level
You can add the necessary attributes and changes to your forms directly inside your Twig templates with the Freeform `form.renderTag()`. Follow the instructions below to see how.

<div class="step">
<label for="step1b"><input type="checkbox" class="step-check" id="step1b">

### Step 1

</label>

- Add the `data-parsley-validate` attribute to your form using the `renderTag()` method like this:
    ``` twig {2}
    {% set form = freeform.form("parsleyForm", {
        formAttributes: { "data-parsley-validate": true } 
    }) %}
    {{ form.renderTag({}) }}
    ...
    {{ form.renderClosingTag }}
    ```

</div>

<div class="step">
<label for="step2b"><input type="checkbox" class="step-check" id="step2b">

### Step 2

</label>

- To set field level attributes, you can apply them directly to your form field inputs or `field.render`. Usually it's more convenient to set these inside the Freeform control panel form builder area, but you can still control these at the template level if you want. Your template code might look something like this:
    ``` twig {2,9-18}
    {% set form = freeform.form("parsleyForm", {
        formAttributes: { "data-parsley-validate": true } 
    }) %}
    {{ form.renderTag({}) }}
        {% for row in form %}
        <div>
            {% for field in row %}
            <div>
                {% set attr = {} %}
                {% if field.required %}
                    {% set attr = attr|merge({'required':true}) %}
                {% endif %}
                {% if field.type == 'number' %}
                    {% set attr = attr|merge({'data-parsley-type':'number'}) %}
                {% endif %}
                {{ field.render({
                    inputAttributes: attr
                }) }}
            </div>
            {% endfor %}
        </div>
        {% endfor %}
    {{ form.renderClosingTag }}
    ```

</div>

<div class="step-finished">Finished!</div>
