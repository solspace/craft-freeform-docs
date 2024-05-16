---
title: Craft Freeform 3.x - Field
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/templates/objects/field/
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

<span class="page-section">Templating</span>

# Field object

Each field object contains the metadata specified in [Form Builder](../overview/form-builder.md) for the specific form it resides in. It can render its label, input field, instructions and errors out of the box.


[[toc]]



<div class="content-block">

## Properties

### `id`
The ID of the field.

### `handle`
The handle of the field.

### `label`
The label for the field.

### `instructions`
The instructions for the field, if specified in form builder.

### `required: true`
A boolean value. `true` if the field has been set to required in the form builder.

### `errors`
An array of error message strings if any are present after submitting the form.

### `pageIndex`
A number representing the page index this field resides on.

### `customAttributes`
An object of customizable attributes to ease the customizability of `render` methods.

Contains the following properties (each one is `null` if not set):

- `id` - the ID attribute of the HTML input field for `renderInput()`.
	- When used on `renderLabel()`, it will replace the default `for` attribute value.
- `class` - the CLASS attribute of the HTML input field for `renderInput()`.
- `labelClass` - the CLASS attribute of the HTML label field for `renderLabel()`.
- `errorClass` - the CLASS attribute of the errors HTML list for `renderErrors()`.
- `instructionsClass` - the CLASS attribute of the instructions HTML field for `renderInstructions()`.
- `instructionsBelowField` - set to `true` to render instructions below, not above the input field when using the `render()` method.
- `overrideValue` - an override value for the field's `defaultValue` in case you need a context specific default value.
- `inputAttributes` - an object of attributes which will be added to the input field. If the form has `inputAttributes` specified, the attributes will be merged together with field `inputAttributes` taking precedence over form's `inputAttributes`.
	- E.g. `inputAttributes: { "readonly": true, "data-field-id": "test" }`
- `useRequiredAttribute: true` - adds `required` attribute to input fields that have been set to be required in the form builder.
- `idAttribute` - the ID for the field.
	- Considers the `fieldIdPrefix` parameter available to the [freeform.form](../template-functions/freeform.form.md#param-fieldidprefix) function.
- `inputAttributes` - an array of **input** attributes specified for the field input in the Field Attribute table inside the Form Builder at template level.
	- For example, it may look something like this when hardcoding a form field:
	``` twig
	{% for option in field.inputAttributes %}
		{{ option.attribute }}="{{ option.value }}"
	{% endfor %}
	```
- `labelAttributes` - an array of **label** attributes specified for the field label in the Field Attribute table inside the Form Builder at template level.
- `errorAttributes` - an array of **error** attributes specified for the field error in the Field Attribute table inside the Form Builder at template level.
- `instructionAttributes` - an array of **instruction** attributes specified for the instruction input in the Field Attribute table inside the Form Builder at template level.
- `value` - the default or posted value of the field.
	- Can be a string, number or array (it's an array only for checkbox_group and email fields)
- `valueAsString` - the `value` value cast as a string.
	- Array values get joined via a `,` separator.
	- Uses the selected option labels for `checkbox_group` and `radio_group`.
		- Use `getValueAsString(false)` to use selected option values instead.
- `type` type of the field:
	- `text`
	- `textarea`
	- `hidden`
	- `select`
	- `checkbox`
	- `checkbox_group`
	- `radio_group`
	- `email`
	- `dynamic_recipients`
	- `file`
	- `mailing_list`
	- `html`
	- `submit`
	- `number`
	- `rating` <Badge type="pro" text="Pro" /><Badge text="Surveys & Polls" type="addon" />
	- `opinion_scale` <Badge type="pro" text="Pro" /><Badge text="Surveys & Polls" type="addon" />
	- `table` <Badge type="pro" text="Pro" />
	- `signature` <Badge type="pro" text="Pro" />

::: v-pre

- `rulesHtmlData` - parses the necessary code for [Conditional Rules](../overview/conditional-rules.md) feature.
	- Should be used in automated form rendering, placed on the `div` wrapper for each field inside of `{% for field in row %}`.
	- E.g. `<div class="{{ columnClass }}"{{ field.rulesHtmlData }}>`
	- Will render a `data-ff-rule` attribute along with the necessary string to work with Freeform's inserted JS for Rules feature, e.g. `data-ff-rule='{"show":true,"type":"any","criteria":[{"tgt":"firstName","o":"=","val":"Bob"}]}'`.

:::

</div>
<div class="content-block">

## Field Specific Properties

Each field type has their own specific properties available to them. Some are more complex than others. To see all available properties, check out the [Fields documentation](../overview/fields.md).

</div>
<div class="content-block">

## Methods

### `render()`
Use this method to render a predefined, minimal markup html block containing the field's label, input field, instructions and list of errors. It can receive an object of [`customAttributes`](#prop-custom-attributes) as the first and only argument (optional).

When using with HTML blocks or Submit buttons, use the hash value provided in property editor in the Form Builder as the handle. Example code would look like:

```
{{ form.get('Ajx7jNxXL').render }}
```

### `renderLabel()`
Use this method to only render the label html field with the field's label inside. The label class can be overwritten via form's custom attributes or the field's custom attributes.

### `renderInput()`
Use this method to only render the field's html input field. The class can be overwritten via form's custom attributes or the field's custom attributes.

The single **Checkbox** fieldtype has an additional method: `renderSingleInput()` to render the checkbox input without an additional hidden input. However, this is available as a workaround for special use-cases, and could have negative consequences for most regular setups and flows.

### `renderInstructions()`
Use this method to only render the field's html instructions field. (Renders only if there are instructions present). The instructions field class can be overwritten via form's custom attributes or the field's custom attributes.

### `renderErrors()`
Use this method to only render the error message block. (Renders only if there are errors present). The error list class can be overwritten via form's custom attributes or the field's custom attributes.

### `isValid()`
Returns a boolean value of true if the form has been posted and this field doesn't contain any errors.

</div>
<div class="content-block">

## Usage in Templates

Render the whole field (label, input field, instructions and errors) with a single line:

``` twig
{{ field.render() }}
```


Render each part of the field separately:

``` twig
{{ field.renderLabel() }}
{{ field.renderInstructions() }}
{{ field.renderInput() }}
{{ field.renderErrors() }}
```


Fully customize the output of your field:

``` twig
<label data-label class="label">
  {{ field.label }}
  {% if field.instructions %}
    <span class="instructions">{{ field.instructions }}</span>
  {% endif %}
</label>
<input type="text" name="{{ field.handle }}" value="{{ field.valueAsString }}" data-some-value="my_custom_value_here" />
{% if field.errors %}
  {% for errorString in field.errors %}
    <div class="error">{{ errorString }}</div>
  {% endfor %}
{% endif %}
```


Render the whole field but override some of the HTML element classes:

``` twig
{{ field.render({
  class: "freeform-input",
  labelClass: "freeform-label" ~ (field.required ? " freeform-required" : ""),
  errorClass: "freeform-errors",
  instructionsClass: "freeform-instructions",
  instructionsBelowField: true,
  overrideValue: "This is now the new default value",
  inputAttributes: {
    "data-field-id": field.id,
  }
}) }}
```

</div>