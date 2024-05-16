---
title: Craft Freeform 2.x - Form
prev: false
next: false
---

::: version /craft/freeform/v5/templates/objects/form/
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

# Form object

The Form object contains its metadata and field objects. You can either render the form using the pre-selected formatting template by calling `form.render()` or achieve a more fine-grained control over it by iterating over its rows and fields and using `form.renderTag` and `form.renderClosingTag` methods.

::: videolink https://craftquest.io/courses/managing-forms-with-solspace-freeform/5245
Watch the **Rendering a Freeform Form Manually** Course tutorial on CraftQuest!
:::

::: tip
Freeform will automatically insert javascript in the footer of the page for features such as [Spam Protection](../overview/spam-protection.md), Submit disable on click, and other special fieldtypes. If you prefer to have this load inside the `<form></form>` tags, you can adjust the [Freeform Javascript Insertion Location](../setup/settings.md#scripts-location) setting.
:::

## Properties

* `name` <a href="#prop-name" id="prop-name" class="docs-anchor">#</a>
	* Outputs the name of the form.
* `handle` <a href="#prop-handle" id="prop-handle" class="docs-anchor">#</a>
	* Outputs the handle of the form.
* `id` <a href="#prop-id" id="prop-id" class="docs-anchor">#</a>
	* Outputs the unique ID of the form.
* `description` <a href="#prop-description" id="prop-description" class="docs-anchor">#</a>
	* Outputs the description of the form.
* `submissionTitleFormat` <a href="#prop-submissionTitleFormat" id="prop-submissionTitleFormat" class="docs-anchor">#</a>
	* Outputs the submissionTitleFormat used when creating new submissions based on this form.
* `returnUrl` <a href="#prop-returnUrl" id="prop-returnUrl" class="docs-anchor">#</a>
	* Outputs the returnUrl of the form.
* `hasErrors` <a href="#prop-hasErrors" id="prop-hasErrors" class="docs-anchor">#</a>
	* A bool variable, which will be `true` if there are any errors in any of the fields or the form.
	* Might be `true` even if `form.errors` list is empty, (e.g. if one or more fields have an error).
	* Can be used in conjunction with the [Errors object](./errors.md) for displaying special and general errors.
* `pages` <a href="#prop-pages" id="prop-pages" class="docs-anchor">#</a>
	* Returns a list of [Page objects](./page.md) each containing its label and index.
* `currentPage` <a href="#prop-currentPage" id="prop-currentPage" class="docs-anchor">#</a>
	* Returns the current [Page object](./page.md) containing its label and index.
* **Custom Attributes** (`customAttributes`) <a href="#prop-custom-attributes" id="prop-custom-attributes" class="docs-anchor">#</a>
	* The following properties are available to ease the customizability of field rendering if set as parameters (each one is `null` if not set):
		* `id` <a href="#prop-custattr-id" id="prop-custattr-id" class="docs-anchor">#</a>
			* The ID attribute of the HTML form tag.
		* `class` <a href="#prop-custattr-class" id="prop-custattr-class" class="docs-anchor">#</a>
			* The CLASS attribute of the HTML form tag.
		* `method` <a href="#prop-custattr-method" id="prop-custattr-method" class="docs-anchor">#</a>
			* The METHOD attribute for the form tag.
		* `action` <a href="#prop-custattr-action" id="prop-custattr-action" class="docs-anchor">#</a>
			* The ACTION attribute for the form tag.
		* `status` <a href="#prop-custattr-action" id="prop-custattr-action" class="docs-anchor">#</a>
			* The status ID or Handle.
		* `returnUrl` <a href="#prop-custattr-returnurl" id="prop-custattr-returnurl" class="docs-anchor">#</a>
			* Allows overriding the return URL of the form upon successful submit.
			::: v-pre
			* You can override the return URL manually with a hidden field or checkbox, etc named `formReturnUrl`, allowing for a more dynamic return URL dependent on the user's choice or action, as long as you hash the value as of Freeform 2.5.27+ (e.g. `<input type="checkbox" name="formReturnUrl" value="{{ 'whatever/my-url'|hash }}" />`).
			:::
		* `rowClass` <a href="#prop-custattr-rowclass" id="prop-custattr-rowclass" class="docs-anchor">#</a>
			* The CLASS attribute of all HTML row tags.
		* `columnClass` <a href="#prop-custattr-columnclass" id="prop-custattr-columnclass" class="docs-anchor">#</a>
			* The CLASS attribute of all HTML column tags.
		* `submitClass` <a href="#prop-custattr-submitclass" id="prop-custattr-submitclass" class="docs-anchor">#</a>
			* The CLASS attribute of submit field input elements.
		* `inputClass` <a href="#prop-custattr-inputclass" id="prop-custattr-inputclass" class="docs-anchor">#</a>
			* The CLASS attribute of all HTML input fields.
		* `labelClass` <a href="#prop-custattr-labelclass" id="prop-custattr-labelclass" class="docs-anchor">#</a>
			* The CLASS attribute of all HTML label fields.
		* `errorClass` <a href="#prop-custattr-errorclass" id="prop-custattr-errorclass" class="docs-anchor">#</a>
			* The CLASS attribute of all HTML error lists.
		* `instructionsClass` <a href="#prop-custattr-instructionsclass" id="prop-custattr-instructionsclass" class="docs-anchor">#</a>
			* The CLASS attribute of all instruction fields.
		* `instructionsBelowField` <a href="#prop-custattr-instructionsbelowfield" id="prop-custattr-instructionsbelowfield" class="docs-anchor">#</a>
			* A boolean value. Set to true to render instructions below, not above the input field.
		* `overrideValues` <a href="#prop-custattr-overridevalues" id="prop-custattr-overridevalues" class="docs-anchor">#</a>
			* Allows you to override the value inside Text fields, or pre-select a default option for multi-option field types (specify option values in this case). E.g.:
				* `hiddenFieldHandle: entry.id` - pull in an entry ID from a Craft Entry.
				* `stateSelect: "AZ"` - pre-select **Arizona** state in a State select field.
				* `availability: ["tue", "thu"]` - pre-check **Tuesday** and **Thursday** checkbox options in a checkbox group field type.
				* `firstName: currentUser.name` - pull in the currently logged in user's name into the Name field.
			* Specify the field `handle` as key, and provide the custom value override as its value.
			* If a [Field](field.md) uses an `overrideValue` attribute, it will take precedence over the value specified in this attribute.
		* `formAttributes` <a href="#prop-custattr-formattributes" id="prop-custattr-formattributes" class="docs-anchor">#</a>
			* An object of attributes which will be added to the form.
			* Ex: `formAttributes: { "novalidate": true, "data-form-id": "test" }`
		* `inputAttributes` <a href="#prop-custattr-inputattributes" id="prop-custattr-inputattributes" class="docs-anchor">#</a>
			* An object of attributes which will be added to all input fields.
			* Ex: `inputAttributes: { "readonly": true, "data-field-id": "test" }`
		* `useRequiredAttribute: true` <a href="#prop-custattr-userequiredattribute" id="prop-custattr-userequiredattribute" class="docs-anchor">#</a>
			* Adds `required` attribute to input fields that have been set to be required in Composer.

::: tip
If displaying the exact same form more than once in a single template, some of the `<form>` tag attributes set on one form may carry over to other ones. To work around this, you can unset the attribute on the other forms (unless they have their own attributes set). For example, if one form has `class: 'something'`, it may end up applying to other instances of the form, but you can add `class: null` to those others to work around it.
:::

When iterating over the form, you will iterate through [Row](./row.md) objects for the currently active [Page](./page.md), each [Row](./row.md) can be iterated over to get [Field](./field.md) objects. Check the [Field](./field.md) documentation to see available parameters for those objects.


## Usage in Templates

Render the form using its formatting template:

``` twig
{{ form.render() }}
```


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


Use session success flash message variable (displays only once) for when form is successfully submitted:

``` twig
{% set form = craft.freeform.form("composerForm") %}

{% if form.submittedSuccessfully %}
  <div>You've successfully submitted this form!</div>
{% endif %}

{{ form.render }}
```
