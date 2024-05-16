---
title: Craft Freeform 5.x - Field object
description: Each field object contains the metadata specified in form builder for the specific form it resides in. It can render its label, input field, instructions and errors out of the box.
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

# Field object <Badge type="feature" text="Revised in 5.0+" />

Each field object contains the metadata specified in the [form builder](../../forms/builder/). It can automatically render its container, label, input field, instructions and errors.


[[toc]]


## Customization <Badge type="feature" text="Improved in 5.0+" />
Fields can now be controlled in a variety of ways using the new [Template Overrides](../formatting/#template-overrides) feature.

::: warning
This replaces the old custom attributes approach (e.g. `class`, `labelClass`, `inputAttributes`, etc).
:::

- [At Form level](#at-form-level)
- [At Field level](#at-field-level)
- [Inside Form Builder](#inside-form-builder)

### At Form level
The advantage of this approach is that you can set overrides that apply to all fields as well as target specific types of fields so you don't need to repeat yourself.

::: tip
Please see the [Template Overrides](../formatting/#template-overrides) documentation for detailed instructions.
:::

``` twig
{{ freeform.form("myFormHandle", {
    attributes: {
        novalidate: true,
        row: {
            class: "row",
        },
    },
    fields: {
        "@global": {
            attributes: {
                input: { class: "input-class" },
                label: { class: "label-class" },
            },
        },
        "@dropdown": {
            attributes: {
                input: { "+class": "select fullwidth" },
            },
        },
        "@checkboxes, @multiple-select": {
            instructions: "Select all that apply.",
        },
        ":required": {
            attributes: {
                label: { "+class": "form-required" },
            },
        },
    },
}).render() }}
```

### At Field level
The advantage of this approach is that you can fine-tune overrides that apply to a specific field or types of fields.

::: tip
Please see the [Template Overrides](../formatting/#template-overrides) documentation for detailed instructions.
:::

``` twig
{{ field.render({
    label: "My Field Label Override",
    instructions: "My field instructions override.",
    value: "my field value override",
    attributes: {
        container: {
            class: "container",
        },
        input: {
            "data-field": true,
            class: "input-element",
        },
        label: {
            class: "label",
        },
        instructions: {
            class: "instructions",
        },
        error: {
            class: "error-block",
        },
    }
}) }}
```

### Inside Form Builder
Inside the form builder, there is an attributes editor for each field in the form layout. This is a handy place for one-off things that need to be set for a specific field. Simply click on the field to open the property editor, and then click on the **Attributes** area to get started. You can then add any attributes for the field and its container here, e.g. `novalidate`, `data-my-attribute`, `id`, etc.

::: tip
Anything you add here should automatically work as long as you're using Freeform's built-in `render` helpers, e.g. `form.render`, `field.render`, `field.renderInput`, etc.
:::

![Field Attributes Editor](../../images/cp/field-attribute-editor.png)


## Properties

### `id`
The ID of the field.

### `handle`
The handle of the field.

### `label`
The label for the field.

### `instructions`
The instructions for the field, if specified in form builder.

### `required`
A boolean value. `true` if the field has been set to required in the form builder.

### `errors`
An array of error message strings if any are present after submitting the form.

### `pageIndex`
A number representing the page index this field resides on.

### `value`
The default or posted value of the field. Can be a string, number or array.

### `valueAsString`
The `value` value rendered as a string. Array values get joined via a `,` separator.

### `labels` <Badge type="feature" text="New in 5.0+" />
The default or posted option label of the field. Can be a string, number or array. For use with option-based fields such as [Dropdowns](../../forms/fields/#dropdown), [Radios](../../forms/fields/#radios) and [Checkboxes](../../forms/fields/#checkboxes).

### `labelsAsString` <Badge type="feature" text="New in 5.0+" />
The `labels` value rendered as a string. Array values get joined via a `,` separator. For use with option-based fields such as [Dropdowns](../../forms/fields/#dropdown), [Radios](../../forms/fields/#radios) and [Checkboxes](../../forms/fields/#checkboxes).

### `type`
The type of the field, e.g. `textarea`, `dropdown`, `rating`, etc.

### Template Overrides <Badge type="feature" text="New in 5.0+" />

The form and each field have the ability to control **attributes**, **values** and more at the template level. Each one of them is entirely optional. There are several namespaces:

- `attributes` - whatever you specify here will be set as an attribute on the form.
- `buttons` - controls the output of the [Submit button(s)](../../forms/fields/#submit-buttons).
- `fields` - controls the output of all [Fields](../../forms/fields/).
- `captchas` - add attributes to the main Captcha wrapper automatically inserted by Freeform when using [reCAPTCHA](../../integrations/recaptcha/) or [hCaptcha](../../integrations/hcaptcha/).

::: tip
Please see the [Template Overrides](../formatting/#template-overrides) documentation for detailed instructions.
:::

::: guide ../../../guides/passing-custom-property-to-formatting-template/
Need to pass a custom property to a formatting template, e.g. toggle display of the form title, etc?
:::


## Field Specific Properties

Each field type has their own specific properties available to them. Some are more complex than others. To see all available properties, check out the [Fields documentation](../../forms/fields/).


## Methods

### `render()`
Renders the complete field block containing its container, label, input field, instructions and list of errors. To customize this, please see the [Template Overrides](../formatting/#template-overrides) for fields.

### `renderLabel()`
Renders only the field's label inside `<label>` HTML.

### `renderInput()`
Renders only the field's `<input>` HTML.

The single **Checkbox** field type has an additional `renderSingleInput()` method to render the checkbox input without an additional hidden input. However, this is available as a workaround for special use cases and could have negative consequences for most regular setups and flows.

### `renderInstructions()`
If instructions are present for the field, this renders only the field's instructions inside HTML.

### `renderErrors()`
If errors are present for the field, this renders only the field's error message block inside HTML.

### `isValid()`
Returns a boolean value of `true` if the form has been posted and this field doesn't contain any errors.


## Usage in Templates

### Simple Render
Render the whole field (container, label, input field, instructions and errors) with a single line:

``` twig
{{ field.render() }}
```

### Render Each Part Separately
Render each part of the field separately:

``` twig
{{ field.renderLabel() }}
{{ field.renderInstructions() }}
{{ field.renderInput() }}
{{ field.renderErrors() }}
```

### Customize Output
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

### Override Classes & Values
Render the whole field but override any part of it:

``` twig
{{ field.render({
    label: "My Field Label Override",
    instructions: "My field instructions override.",
    value: "my field value override",
    attributes: {
        container: {
            class: "container",
        },
        input: {
            "data-field": true,
            class: "input-element",
        },
        label: {
            class: "label",
        },
        instructions: {
            class: "instructions",
        },
        error: {
            class: "error-block",
        },
    }
}) }}
```