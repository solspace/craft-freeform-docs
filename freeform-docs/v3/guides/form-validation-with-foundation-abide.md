---
title: Craft Freeform 3.x - Form Validation with Foundation Abide - Guide
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/guides/form-validation-with-foundation-abide/
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

# Form Validation with Foundation Abide

The [Abide plugin](https://foundation.zurb.com/sites/docs/abide.html) for Zurb [Foundation](https://foundation.zurb.com/) extends native HTML5 form validation. This guide will show you how to implement form validation for your Freeform forms with Abide.

::: tip
This guide assumes you are running [Foundation 6](https://foundation.zurb.com/) and have the [Abide plugin](https://foundation.zurb.com/sites/docs/abide.html) correctly installed on your web page.
:::

You can implement Foundation Abide validation for your form 1 of 2 ways:


[[toc]]


<div class="content-block">

## Inside the Form Builder (CP)
You can add the necessary attributes to your forms with the form builder. Follow the instructions below to see how.

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Open up an existing form inside Freeform and go to the **Form Settings** tab (cog/gear icon).
- At the bottom of the settings tab, there's an area called **Form tag Attributes**. Add `novalidate` in the *Attribute* column and leave the *Value* column empty (or specify `true`). This suppresses default HTML5 browser level validation. Also add `data-abide` in the *Attribute* column and leave the *Value* column empty (or specify `true`). This triggers Abide level validation.
    | Attribute | Value |
    | :--- | :--- |
    | novalidate | |
    | data-abide | |

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

- For the rest of your fields, add attributes to them in the form builder interace as needed. To add attributes to fields, simply click the field in the middle layout column, and in the right side Property Editor column, you'll see an **Input attributes** settings area. For example:
    - Add `required` to the *Attribute* column and leave the *Value* column empty (or specify `true`) to make the field required.
        - Merely checking the *This field is required* checkbox is not sufficient to trigger Abide, as it's intended just for Freeform's own validation.
    - You can also add extra validations like `number` or `email` to trigger more complex [predefined patterns as seen here](https://foundation.zurb.com/sites/docs/abide.html#builtin-patterns-and-validators). Note that some attributes may have blank values, and that's okay.
        | Attribute | Value |
        | :--- | :--- |
        | required | |
        | pattern | email |

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

- Render your form builder-based form in a Twig template as usual.
    ``` twig
    {{ craft.freeform.form("foundationForm").render() }}
    ```

</div>

<div class="step-finished">Finished!</div>

</div>
<div class="content-block">

## At Template Level
You can add the necessary attributes and changes to your forms directly inside your Twig templates with the Freeform `form.renderTag()`. Follow the instructions below to see how.

<div class="step">
<label for="step1b"><input type="checkbox" class="step-check" id="step1b">

### Step 1

</label>

- Add the `novalidate` and `data-abide` attributes to your form using the `renderTag()` method like this:
    ``` twig {2}
    {% set form = craft.freeform.form("foundationForm", {
        formAttributes: { "novalidate": true, "data-abide": true } 
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
    ``` twig {2,9-23}
    {% set form = craft.freeform.form("foundationForm", {
        formAttributes: { "novalidate": true, "data-abide": true } 
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
                    {% set attr = attr|merge({'pattern':'number'}) %}
                {% endif %}
                {{ field.render({
                    inputAttributes: attr
                }) }}
                {% if field.required and field.type == 'number' %}
                    <span class="form-error">
                        This field is required and must be numeric.
                    </span>
                {% endif %}
            </div>
            {% endfor %}
        </div>
        {% endfor %}
    {{ form.renderClosingTag }}
    ```

</div>

<div class="step-finished">Finished!</div>

</div>