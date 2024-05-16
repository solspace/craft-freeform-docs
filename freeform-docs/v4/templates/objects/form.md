---
title: Craft Freeform 4.x - Form object
description: The Form object contains its metadata and field objects.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/templates/objects/form/
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

# Form object

The Form object contains its metadata and field objects. You can either render the form using the pre-selected formatting template by calling `form.render()` or achieve a more fine-grained control over it by iterating over its rows and fields and using `form.renderTag` and `form.renderClosingTag` methods.

::: tip
Freeform will automatically insert javascript in the footer of the page for features such as [Spam Protection](../../overview/spam-protection.md), Submit disable on click, and other special fieldtypes. If you prefer to have this load inside the `<form></form>` tags, you can adjust the [Freeform Javascript Insertion Location](../../setup/settings.md#scripts-location) setting.
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

### `showSpinner`
A bool variable, which will be `true` if the form has the **Show Loading Indicator on Submit** setting enabled in the Validation tab for your form inside the form builder.

### `showLoadingText`
A bool variable, which will be `true` if the form has the **Show Loading Text** setting enabled in the Validation tab for your form inside the form builder.

### `loadingText`
Outputs the custom loading/processing text configured in the Validation tab for your form inside the form builder.

### `hasErrors`
A bool variable, which will be `true` if there are any errors in any of the fields or the form. It might be `true` even if `form.errors` list is empty, (e.g. if one or more fields have an error). This can be used in conjunction with the [Errors object](./errors.md) for displaying special and general errors.

### `pages`
Returns a list of [Page objects](./page.md) each containing its label and index.

### `currentPage`
Returns the current [Page object](./page.md) containing its label and index.

### `ajaxEnabled`
A bool variable, which will be `true` if the form has the built-in AJAX setting enabled.

### `limitFormSubmissions`
A bool variable, which will be `true` if the form has the submit limit setting enabled.

You can run a conditional check on this with the following:

- `auth_unlimited` - Logged in Users only (no limit)
- `cookie` - Once per Cookie only
- `ip_cookie` - Once per IP/Cookie combo
- `auth` - Once per logged in Users only
- `auth_cookie` - Once per logged in User or Guest Cookie only
- `auth_ip_cookie` - Once per logged in User or Guest IP/Cookie combo

### `submissionLimitReached` <Badge type="feature" text="4.0.9+" />
A bool variable, which will be `true` if the form has the **Limit Form Submission Rate** setting enabled ([duplicate submission check](../../overview/submission-limits.md#per-user)) and the user has already submitted the form.

### **Custom Attributes** (`customAttributes`)
The following properties are available to ease the customizability of field rendering if set as parameters (each one is `null` if not set):

- `id` - the ID attribute of the HTML form tag.
- `class` - the CLASS attribute of the HTML form tag.
- `method` - the METHOD attribute for the form tag.
- `action` - the ACTION attribute for the form tag.
- `status` - the status ID or handle.
- `returnUrl` - allows overriding the return URL of the form upon successful submit.
	::: v-pre
	- You can override the return URL manually with a hidden field or checkbox, etc named `formReturnUrl`, allowing for a more dynamic return URL dependent on the user's choice or action, as long as you hash the value (e.g. `<input type="checkbox" name="formReturnUrl" value="{{ 'whatever/my-url'|hash }}" />`).
	:::
- `rowClass` - the CLASS attribute of all HTML row tags.
- `columnClass` - the CLASS attribute of all HTML column tags.
- `submitClass` - the CLASS attribute of submit field input elements.
- `inputClass` - the CLASS attribute of all HTML input fields.
- `labelClass` - the CLASS attribute of all HTML label fields.
- `errorClass` - the CLASS attribute of all HTML error lists.
- `instructionsClass` - the CLASS attribute of all instruction fields.
- `instructionsBelowField` - set to true to render instructions below, not above the input field.
- `overrideValues` - allows you to override the value inside Text fields, or pre-select a default option for multi-option field types (specify option values in this case).
	- Specify the field `handle` as key, and provide the custom value override as its value.
	- If a [Field](field.md) uses an `overrideValue` attribute, it will take precedence over the value specified in this attribute.
	- E.g.:
		- `hiddenFieldHandle: entry.id` - pull in an entry ID from a Craft Entry.
		- `stateSelect: "AZ"` - pre-select **Arizona** state in a State select field.
		- `availability: ["tue", "thu"]` - pre-check **Tuesday** and **Thursday** checkbox options in a checkbox group field type.
		- `firstName: currentUser.name` - pull in the currently logged in user's name into the Name field.
- `formAttributes` - an object of attributes which will be added to the form.
	- E.g. `formAttributes: { "novalidate": true, "data-form-id": "test" }`
- `inputAttributes` - an object of attributes which will be added to all input fields.
	- E.g. `inputAttributes: { "readonly": true, "data-field-id": "test" }`
- `useRequiredAttribute: true` - adds `required` attribute to input fields that have been set to be required in the form builder.

::: tip
If displaying the exact same form more than once in a single template, some of the `<form>` tag attributes set on one form may carry over to other ones. To work around this, you can unset the attribute on the other forms (unless they have their own attributes set). For example, if one form has `class: 'something'`, it may end up applying to other instances of the form, but you can add `class: null` to those others to work around it.
:::

When iterating over the form, you will iterate through [Row](./row.md) objects for the currently active [Page](./page.md), each [Row](./row.md) can be iterated over to get [Field](./field.md) objects. Check the [Field](./field.md) documentation to see available parameters for those objects.

::: guide ../../../guides/passing-custom-property-to-formatting-template/
Need to pass a custom property to a formatting template, e.g. toggle display of the form title, etc?
:::


## Usage in Templates

### Simple Render
Render the form using its formatting template:

``` twig
{{ form.render() }}
```

### Override Classes & Values
Render the form using its formatting template, but overriding some classes and default values:

``` twig
{{ form.render({
    labelClass: "form-label",
    inputClass: "form-control",
    instructionsBelowField: true,
    submitClass: "btn btn-success",
    overrideValues: {
        hiddenFieldHandle: entry.id,
        stateSelect: "AZ",
        availability: ["tue", "thu"],
    },
    formAttributes: {
        "novalidate": true,
        "data-form-id": "whatever",
    },
    inputAttributes: {
        "readonly": true,
        "data-field-id": field.id,
    }
}) }}
```

### Manually Iterate
Manually iterate through form fields:

``` twig
{{ form.renderTag({rowClass: "sample-row-class"}) }}

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

{% for row in form %}
    <div class="{{ form.customAttributes.rowClass }}">
        {% for field in row %}
            {% set columnClass = "sample-column " ~ form.customAttributes.columnClass %}
            {% if field.type == "submit" %}
                {% set columnClass = columnClass ~ " submit-column" %}
            {% endif %}

            <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>
                {{ field.render({
                    class: field.type != "submit" ? "freeform-input" : "",
                    labelClass: "sample-label" ~ (field.required ? " required" : ""),
                    errorClass: "sample-errors",
                    instructionsClass: "sample-instructions",
                }) }}
            </div>
        {% endfor %}
    </div>
{% endfor %}

{{ form.renderClosingTag }}
```

### Iterate over `layout.fields`
You can also iterate over fields directly with `layout.fields` instead of [Row objects](./row.md):

``` twig {3-5}
{% set form = craft.freeform.form("myForm") %}

{% for field in form.layout.fields %}
    <div>{{ field.label }}</div>
{% endfor %}
```

### Success Flash
Use session success flash message variable (displays only once) for when form is successfully submitted:

``` twig {3-5}
{% set form = craft.freeform.form("myForm") %}

{% if form.submittedSuccessfully %}
    <div>You've successfully submitted this form!</div>
{% endif %}

{{ form.render }}
```

### Error when Limit Reached
Display a message when form [submission limit (per user)](../../overview/submission-limits.md#per-user) is reached:

``` twig {3-6}
{% set form = craft.freeform.form("myForm") %}

{% if form.submissionLimitReached %}
    <div class="alert alert-warning submission-limit-reached" role="alert">
        You've already submitted this form!
    </div>
{% else %}
    {{ form.render }}
{% endif %}
```