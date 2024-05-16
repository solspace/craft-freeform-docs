---
title: Craft Freeform 5.x - Form object
description: The Form object contains its metadata and field objects.
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

# Form object

The Form object contains its metadata and field objects. You can either render the form using the pre-selected formatting template by calling `form.render()` or achieve a more fine-grained control over it by iterating over its rows and fields and using `form.renderTag` and `form.renderClosingTag` methods.

::: tip
Freeform will automatically insert javascript in the footer of the page for features such as [Spam Protection](../../forms/spam-protection.md), Submit disable on click, and other special fieldtypes. If you prefer to have this load inside the `<form></form>` tags, you can adjust the [Freeform Javascript Insertion Location](../../configuration/settings.md#scripts-location) setting.
:::


[[toc]]


## Properties

### `name`
Outputs the name of the form.

### `handle`
Outputs the handle of the form.

### `id`
Outputs the unique ID of the form.

### `description`
Outputs the description of the form.

### `submissionTitleFormat`
Outputs the submission title format used when creating new submissions based on this form.

### `returnUrl`
Outputs the return URL of the form.

### `successMessage`
Outputs the custom success message configured in the Validation tab for your form inside the form builder.

### `errorMessage`
Outputs the custom error message configured in the Validation tab for your form inside the form builder.

### `hasErrors`
A bool variable, which will be `true` if there are any errors in any of the fields or the form. It might be `true` even if `form.errors` list is empty, (e.g. if one or more fields have an error). This can be used in conjunction with the [Errors object](./errors.md) for displaying special and general errors.

### `pages`
Returns a list of [Page objects](./page.md) each containing its label and index.

### `currentPage`
Returns the current [Page object](./page.md) containing its label and index.

### `duplicate` <Badge type="feature" text="Renamed and Revised in 5.0+" />
A bool variable, which will be `true` if the form has the **Duplicate Check** setting enabled ([duplicate submission check](../../submissions/overview/#submission-limits#per-user)) and the user has already submitted the form.

### Template Overrides <Badge type="feature" text="New in 5.0+" />

The form and each field have the ability to control **attributes**, **values** and more at the template level. Each one of them is entirely optional. There are several namespaces:

- `attributes` - whatever you specify here will be set as an attribute on the form.
- `buttons` - controls the output of the [Submit button(s)](../../forms/fields/#submit-buttons).
- `fields` - controls the output of all [Fields](../../forms/fields/).
- `captchas` - add attributes to the main Captcha wrapper automatically inserted by Freeform when using [reCAPTCHA](../../integrations/recaptcha/) or [hCaptcha](../../integrations/hcaptcha/).

::: tip
Please see the [Template Overrides](../../templates/formatting/#template-overrides) documentation for detailed instructions.
:::

::: guide ../../../guides/passing-custom-property-to-formatting-template/
Need to pass a custom property to a formatting template, e.g. toggle display of the form title, etc?
:::


## Usage in Templates

### Simple Render
A basic implementation might look like this:

``` twig
{% set form = freeform.form("myFormHandle") %}

{{ form.render() }}
```

### Override Classes & Values
Once [Template Overrides](../../templates/formatting/#template-overrides) have been implemented, your code might look something like this:

``` twig
{% set form = freeform.form("myFormHandle") %}

{{ form.render({
    attributes: {
        novalidate: true,
        class: "my-form-class",
    },
    buttons: {
        attributes: {
            submit: { class: "form-field-button blue" },
            back: { class: "form-field-button gray" },
        },
    },
    fields: {
        "@global": {
            attributes: {
                input: {
                    class: "form-field-input",
                },
                label: {
                    class: "form-field-label",
                },
            },
        },
        ":required": {
            attributes: {
                label: { "+class": "form-field-required" },
            },
        },
        ":errors": {
            attributes: {
                input: { "+class": "form-field-is-invalid" },
            },
        },
        "@dropdown": {
            attributes: {
                container: {
                    "data-select-container": true,
                },
                input: {
                    "+class": "form-field-select fullwidth",
                },
            },
        },
        "@checkboxes, @radios" : {
            attributes: {
                input: {
                    "+class": "form-field-options",
                },
            },
        },
        "myFieldHandle": {
            value: entry.id,
        },
    },
}) }}
```

### Manually Iterate
Manually iterate through form fields inside your regular template:

``` twig
{# Set the form #}
{% set form = freeform.form("myFormHandle") %}

{# Render the opening form tag #}
{{ form.renderTag({
    attributes: {
        row: { class: "freeform-row" },
        success: { class: "freeform-form-success" },
        errors: { class: "freeform-form-errors" },
        novalidate: true,
    },
    buttons: {
        attributes: {
            container: { class: "freeform-button-container" },
            column: { class: "freeform-button-column" },
            buttonWrapper: { class: "freeform-button-wrapper" },
            submit: { class: "freeform-button-submit" },
            back: { class: "freeform-button-back" },
            save: { class: "freeform-button-save" },
        },
    },
    fields: {
        "@global": {
            attributes: {
                container: { class: "freeform-column" },
                input: {
                    "data-field": true,
                    class: "freeform-input",
                },
                label: { class: "freeform-label" },
                instructions: { class: "freeform-instructions" },
                error: { class: "freeform-errors" },
            },
        },
        ":required": {
            attributes: {
                label: { "+class": "freeform-required" },
            },
        },
        ":errors": {
            attributes: {
                input: { "+class": "is-invalid has-validation" },
            },
        },
        "@group": {
            attributes: {
                label: { "+class": "group-label" },
            },
        },
        "@signature": {
            attributes: {
                input: { "-class": "freeform-input" },
            },
        }
    },
}) }}

{# Success and error message handling for non-AJAX forms #}
{% if not form.settings.ajax %}
    {% if form.submittedSuccessfully %}
        <div{{ form.attributes.success|raw }}>
            <p>{{ form.settings.successMessage | t('freeform') }}</p>
        </div>
    {% endif %}
    {% if form.hasErrors %}
        <div{{ form.attributes.errors|raw }}>
            <p>{{ form.settings.errorMessage | t('freeform') }}</p>

            {% if form.errors|length %}
                <ul>
                    {% for error in form.errors %}
                        <li>{{ error }}</li>
                    {% endfor %}
                </ul>
            {% endif %}
        </div>
    {% endif %}
{% endif %}

{# Render page tabs if multi-page #}
{% if form.pages|length > 1 %}
    <ul class="freeform-pages">
        {% for page in form.pages %}
            <li {% if form.currentPage.index == page.index %}class="active"{% endif %}>
                {% if form.currentPage.index == page.index %}
                    <b>{{ page.label }}</b>
                {% else %}
                    {{ page.label }}
                {% endif %}
            </li>
        {% endfor %}
    </ul>
{% endif %}

{# Build form rows and fields #}
{% macro renderRows(form, rows) %}
    {% for row in rows %}
        {% set width = (12 / (row|length)) %}
        <div{{ form.attributes.row|raw }}>
            {% for field in row %}
                {% do field.setParameters({
                    attributes: {
                        container: { class: [
                            "freeform-column-" ~ width,
                            "freeform-fieldtype-" ~ field.type,
                        ]},
                    },
                }) %}
                {% if field.type == "group" %}
                    <div class="freeform-group">
                        <label{{ field.attributes.label }}>
                            {{ field.label }}
                        </label>
                        <div>
                            {{ _self.renderRows(form, field.layout) }}
                        </div>
                    </div>
                {% else %}
                    {{ field.render }}
                {% endif %}
            {% endfor %}
        </div>
    {% endfor %}
{% endmacro %}

{# Display form field rows and columns #}
{{ _self.renderRows(form, form.rows) }}

{# Render the closing form tag #}
{{ form.renderClosingTag }}
```

### Success Flash
When not using AJAX, the session success flash message (displays only once) when the form is successfully submitted:

``` twig {3-5}
{% set form = freeform.form("myForm") %}

{% if form.submittedSuccessfully %}
    <div>You've successfully submitted this form!</div>
{% endif %}

{{ form.render }}
```

### Error when Duplicate
Display a message when the submission is a [duplicate](../../submissions/overview/#submission-limits#per-user):

``` twig {3-6}
{% set form = freeform.form("myForm") %}

{% if form.duplicate %}
    <div class="alert alert-warning duplicate">
        You've already submitted this form!
    </div>
{% else %}
    {{ form.render }}
{% endif %}
```
