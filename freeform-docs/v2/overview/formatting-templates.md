---
title: Craft Freeform 2.x - Formatting Templates
prev: false
next: false
---

::: version /craft/freeform/v5/templates/formatting/
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

# Formatting Templates

While Freeform offers a very intuitive Composer interface to give you a live preview of the form you're building, there of course isn't exactly a magic way to do this on the front end for your templates. However, we have created an automated way for Freeform to figure out as much of this as possible for you.


::: videolink https://craftquest.io/courses/managing-forms-with-solspace-freeform/5204
Watch the **Building a Simple Form with Freeform** Course tutorial on CraftQuest!
:::

Forms can be generated on the front end templates 2 different ways. There is no worse or better way, but here's an overview:

::: v-pre
1. With the [freeform.form](../template-functions/freeform.form.md) template function.
	* Your form formatting code is contain directly within the template that you want the form to appear in.
	* No matter what formatting template your form may have assigned to it in Composer, the form always conforms to the template formatting used in this template.
2. Using [freeform.form render()](../template-functions/freeform.form.md#render) method.
	* Your form formatting code is stored in a separate template, but is very portable / DRY, and works similar to an include.
		* Formatting templates are Twig template files and are stored in a separate directory inside your **craft/templates** directory, so they can still work nicely with version control.
		* Freeform includes several [formatting template examples](../templating-extras/formatting-template-examples.md) for you to start out with as well.
	* In template(s) that you want your form(s) to show up in, you simply just insert 1 line of code: `{{ craft.freeform.form("formHandle").render() }}`
	* You can have as many formatting templates as you wish, and with a couple clicks, you can switch the formatting of a form to use a different template, without ever having to adjust the page the form is placed into.
	* Lends itself well when attaching/relating forms to entries or other element types.
:::

::: warning
Be sure to switch or unassign a formatting template from any/all Forms using it BEFORE deleting the actual formatting template file from your **craft/templates** directory. If you delete the template file while it is still assigned to a form, when loading the form in your template on the front end it'll display an error that needs to be corrected. If you're already experiencing this issue, simple update the form to use a different formatting template and it will resolve the issue.
:::

Formatting templates are optional, and only necessary if using the [render() method](../template-functions/freeform.form.md#render), which essentially allows you to attach/relate a formatting template to a form so that you don't need to include formatting inside the template(s) you place the form inside.

Have a look at [freeform.form function](../template-functions/freeform.form.md) and [Form object](../template-objects/form.md) for a full list of properties and parameters.

::: videolink https://craftquest.io/courses/managing-forms-with-solspace-freeform/5245
Watch the **Rendering a Freeform Form Manually** Course tutorial on CraftQuest!
:::

### Examples

The following is a basic example of what your formatting template can look like to generate form display. A starting template like this (along with CSS) can be generated for you by visiting the [Formatting Templates](../setup/settings.md#formatting-templates) section in Freeform Settings.

``` twig
{{ form.renderTag }}

{% if form.pages|length > 1 %}
  <ul class="freeform-pages">
  {% for page in form.pages %}
    <li>
    {% if form.currentPage.index == loop.index0 %}
      <a href="javascript:;">{{ page.label }}</a>
    {% else %}
      {{ page.label }}
    {% endif %}
    </li>
  {% endfor %}
  </ul>
{% endif %}

{% for row in form %}
  <div class="freeform-row {{ form.customAttributes.rowClass }}">
  {% for field in row %}
    {% set columnClass = "freeform-column " ~ form.customAttributes.columnClass %}
    {% if field.type == "submit" %}
      {% set columnClass = columnClass ~ " freeform-column-content-align-" ~ field.position %}
    {% endif %}
    <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>
      {{ field.render({
        class: field.type != "submit" ? "freeform-input" : "",
        labelClass: "freeform-label" ~ (field.inputOnly ? " freeform-input-only-label" : "") ~ (field.required ? " freeform-required" : ""),
        errorClass: "freeform-errors",
        instructionsClass: "freeform-instructions",
      }) }}
    </div>
  {% endfor %}
  </div>
{% endfor %}

{{ form.renderClosingTag }}
```


A more complex example (accounting for checkbox groups, radios, etc) with Bootstrap formatting may look like this:

``` twig
{{ form.renderTag() }}

{% if form.pages|length > 1 %}
  <ul class="nav nav-tabs">
    {% for page in form.pages %}
      <li class="{{ form.currentPage.index == page.index ? "active" : "disabled" }}">
        {% if form.currentPage.index == page.index %}
          <a href="javascript:;">{{ page.label }}</a>
        {% else %}
          <a href="javascript:;">{{ page.label }}</a>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endif %}

{% if form.hasErrors %}
  <div class="alert alert-danger">
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
  <div class="row {{ form.customAttributes.rowClass }}">
    {% for field in row %}
      {% set width = (12 / (row|length)) %}

      {% set isCheckbox = field.type in ["checkbox","mailing_list"] %}

      {% set columnClass = "form-group" %}
      {% set columnClass = columnClass ~ form.customAttributes.columnClass %}
      {% set columnClass = columnClass ~ " col-sm-" ~ width ~ " col-xs-12" %}

      {% set class = "form-control" ~ (field.hasErrors ? " is-invalid") %}
      {% if field.type == "file" %}
        {% set class = "form-control-file" ~ (field.hasErrors ? " is-invalid") %}
      {% elseif isCheckbox %}
        {% set class = "checkbox" %}
      {% endif %}

      {% set labelClass = (field.required ? " required" : "") %}
      {% set errorClass = "invalid-feedback" %}
      {% set instructionClass = "form-text text-muted" %}

      {% if field.type == "submit" %}
        {% set columnClass = columnClass ~ " submit-align-" ~ field.position %}
      {% endif %}

      <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>
        {% if field.type == "checkbox_group" %}

          {{ field.renderLabel({
            labelClass: labelClass,
            instructionsClass: instructionClass,
            errorClass: errorClass,
          }) }}

          {% for index, option in field.options %}
            <div class="form-check">
              <input type="checkbox"
                   name="{{ field.handle }}[]"
                   value="{{ option.value }}"
                   id="{{ field.idAttribute }}-{{ index }}"
                   class="form-check-input {{ class }}"
                  {{ option.checked ? "checked" : "" }}
              />

              <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors({ errorClass: errorClass }) }}

        {% elseif field.type == "radio_group" %}

          {{ field.renderLabel({
            labelClass: labelClass,
            instructionsClass: instructionClass,
            errorClass: errorClass,
          }) }}

          {% for index, option in field.options %}
            <div class="form-check">
              <input type="radio"
                   name="{{ field.handle }}"
                   value="{{ option.value }}"
                   id="{{ field.idAttribute }}-{{ index }}"
                   class="form-check-input {{ class }}"
                  {{ option.checked ? "checked" : "" }}
              />
              <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

          {{ field.renderLabel({
            labelClass: labelClass,
            instructionsClass: instructionClass,
            errorClass: errorClass,
          }) }}

          {% for index, option in field.options %}
            <div class="form-check">
              <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                   name="{{ field.handle }}[]"
                   value="{{ loop.index0 }}"
                   class="form-check-input {{ class }}"
                   id="{{ field.idAttribute }}-{{ index }}"
                  {{ option.checked ? "checked" : "" }}
              />

              <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type in ["checkbox", "mailing_list"] %}

          <div class="form-check">
            {{ field.renderInput({ class: class ~ " form-check-input" }) }}
            {{ field.renderLabel({ labelClass: "form-check-label" ~ (field.hasErrors ? " is-invalid") }) }}
            {{ field.renderErrors({ errorClass: errorClass }) }}
          </div>

        {% elseif field.type == "submit" %}

          {{ field.render({ class: "btn btn-primary" }) }}

        {% elseif field.type == "cc_details" %}

          {# FOR FREEFORM PAYMENTS #}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {% for layoutRow in field.layoutRows %}
            <div class="row {{ form.customAttributes.rowClass }}">
              {% for layoutField in layoutRow %}
                {% set layoutWidth = (12 / (layoutRow|length)) %}
                {% set columnClass = columnClass|replace(' col-sm-' ~ width) %}
                {% set columnClass = columnClass ~ " col-sm-" ~ layoutWidth %}
                <div class="{{ columnClass }}">
                  {{ layoutField.render({
                    class: isCheckbox ? "checkbox" : "form-control",
                    instructionsClass: "help-block",
                    instructionsBelowField: true,
                    labelClass: (layoutField.required ? " required" : ""),
                    errorClass: "help-block",
                  }) }}
                </div>
              {% endfor %}
            </div>
          {% endfor %}

          {{ field.renderInput({
            instructionsClass: "help-block",
            instructionsBelowField: true,
            labelClass: (field.required ? " required" : ""),
            errorClass: "help-block",
          }) }}

          {{ field.renderInstructions }}
          {{ field.renderErrors }}

        {% else %}

          {{ field.render({
            class: class,
            labelClass: labelClass,
            instructionsClass: instructionClass,
            instructionsBelowField: true,
            errorClass: errorClass,
          }) }}

        {% endif %}
      </div>
    {% endfor %}
  </div>
{% endfor %}


{{ form.renderClosingTag }}
```


Form formatting can also be extremely manual, if that is something you prefer. Here's an example of different levels of manual you can use:

``` twig
{% set form = craft.freeform.form("composerForm") %}

{{ form.renderTag({returnUrl: "contact/success"}) }}

  {% if form.hasErrors %}
    <div class="freeform-form-has-errors">
      {{ "Error! Please review the form and try submitting again."|t('freeform') }}
    </div>
  {% endif %}

  {% set firstName = form.get("firstName") %}
  {% set company = form.get("company") %}
  {% set lastName = form.get("lastName") %}

  <label>{{ firstName.label }}</label>
  <input name="{{ firstName.handle }}" value="{{ firstName.value }}" />
  {{ firstName.renderErrors() }}

  <label>{{ lastName.label }}</label>
  <input name="{{ lastName.handle }}" value="{{ lastName.value }}" />
  {{ lastName.renderErrors() }}

  {{ company.renderLabel() }}
  {{ company.renderInput() }}
  {{ company.renderErrors() }}

  <label>Email Address</label>
  <input name="email" />
  {{ form.get("email").renderErrors() }}

  <label>Phone</label>
  <input name="phone" />
  {% if form.get("phone").hasErrors %}
    This field is required!
  {% endif %}

  <button type="submit">Submit</button>

{{ form.renderClosingTag }}
```


If you'd like to populate a Freeform field with data from another element such as [Craft Entries](https://docs.craftcms.com/v3/sections-and-entries.html#entries), you might introduce a conditional with code that looks something like this:

``` twig
{% elseif field.handle == "myFieldHandle") %}

  <select name="{{ field.handle }}">
  {% for entry in craft.entries.section('news').limit(10) %}
    <option value="{{ entry.handle }}"{% if field.value == entry.handle %} selected{% endif %}>
      {{ entry.title }}
    </option>
  {% endfor %}
  </select>

{% else %}
```
