---
title: Craft Freeform 4.x - Passing a Custom Property to a Formatting Template - User Guide
description: A guide to passing a custom property to a formatting template.
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

# Passing a Custom Property to a Formatting Template

Sometimes you may need to dynamically control what is displayed in a formatting template, e.g. toggle display of the form title, etc. This can be done by passing a custom property to the formatting template, eliminating the need to have duplicate, mostly-identical formatting templates.


[[toc]]


## Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

In your custom [formatting template](../overview/formatting-templates/), add in a custom property. For the purpose of this example, we'll set up a conditional around the form title. We'll call that property `showFormTitle`. It can be accessed through `form.properties`.

``` twig
{% if form.properties.showFormTitle %}
    <h2>{{ form.name }}</h2>
{% endif %}
```

In a very basic formatting template, that might look something like this:

``` twig {4-7}
{# Opening <form> tag #}
{{ form.renderTag }}

{# Custom Property #}
{% if form.properties.showFormTitle %}
    <h2>{{ form.name }}</h2>
{% endif %}

{# Display Error banner and general errors if applicable #}
{% if form.hasErrors %}
    <div class="freeform-form-has-errors">
        {{ "Error! Please review the form and try submitting again."|t('freeform') }}

        {% if form.errors|length %}
            <ul>
                {% for error in form.errors %}
                    <li>{{ error }}</li>
                {% endfor %}
            </ul>
        {% endif %}
    </div>
{% endif %}

{# Render form fields #}
{% for row in form %}
<div class="freeform-row {{ form.customAttributes.rowClass }}">
    {% for field in row %}
    {% set columnClass = "freeform-column " ~ form.customAttributes.columnClass %}
    {% if field.type == "submit" %}
        {% set columnClass = columnClass ~ " freeform-column-content-align-" ~ field.position %}
    {% endif %}
    <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>
        {{ field.render({
            class: field.type not in ["submit", "signature"] ? "freeform-input" : "",
            labelClass: "freeform-label" ~ (field.inputOnly ? " freeform-input-only-label" : "") ~ (field.required ? " freeform-required" : ""),
            errorClass: "freeform-errors",
            instructionsClass: "freeform-instructions",
        }) }}
    </div>
    {% endfor %}
</div>
{% endfor %}

{# Closing </form> tag #}
{{ form.renderClosingTag }}
```

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

Inside the template that is calling the form, you can add the new `showFormTitle` custom property into the form payload like this:

``` twig
{{ craft.freeform.form("myFormHandle").render({ showFormTitle: true }) }}
```

OR

``` twig
{{ form.render({ showFormTitle: true }) }}
```

</div>

<div class="step-finished">Finished!</div>

::: tip
You can add as many custom properties as you like, but be sure not to use any reserved words such as `class`, `id`, etc (anything that is already a parameter/property name in the [Form query](../templates/queries/form/)).
:::