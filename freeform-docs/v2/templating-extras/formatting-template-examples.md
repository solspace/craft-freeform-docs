---
title: Craft Freeform 2.x - Formatting Template Extras
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

# Formatting Template Examples

Freeform includes several example [formatting templates](../overview/formatting-templates.md) to choose from. You can use these as a starting point and adjust them to suit your needs, or simply create your own from scratch. The following formatting templates are located in the `/vendor/solspace/craft3-freeform/src/templates/_defaultFormTemplates/` directory. If you wish to create your own modified version, just copy the code below, or the template file (ex: **foundation.html**) and paste it into your Formatting Templates directory in the specified Craft Templates directory (ex: **/templates/freeform/**), and rename it to whatever you like.


[[toc]]


## Bootstrap 3

The following example assumes you're including necessary [Bootstrap 3](https://getbootstrap.com) JS and CSS:

``` twig
<style>label.required:after{content:"*";color:#d00;margin-left:5px}.submit-align-left{text-align:left}.submit-align-right{text-align:right}.submit-align-center{text-align:center}.submit-align-center button:not(:first-of-type),.submit-align-left button:not(:first-of-type),.submit-align-right button:not(:first-of-type){margin-left:5px}.submit-align-spread button:first-child{float:left}.submit-align-spread button:last-child{float:right}</style>

{{ form.renderTag }}

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

      {% set columnClass = isCheckbox ? "checkbox" : "form-group" %}
      {% set columnClass = columnClass ~ (field.errors|length ? " has-error" : "") %}
      {% set columnClass = columnClass ~ form.customAttributes.columnClass %}
      {% set columnClass = columnClass ~ " col-sm-" ~ width ~ " col-xs-12" %}

      {% if field.type == "submit" %}
        {% set columnClass = columnClass ~ " submit-align-" ~ field.position %}
      {% endif %}

      <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>

        {% if field.type == "checkbox_group" %}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {% for option in field.options %}
            <div class="checkbox">
              <label>
                <input type="checkbox"
                     name="{{ field.handle }}[]"
                     value="{{ option.value }}"
                    {{ option.checked ? "checked" : "" }}
                />
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type == "radio_group" %}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {% for option in field.options %}
            <div class="radio">
              <label>
                <input type="radio"
                     name="{{ field.handle }}"
                     value="{{ option.value }}"
                    {{ option.checked ? "checked" : "" }}
                />
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {% for option in field.options %}
            <div class="radio">
              <label>
                <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                     name="{{ field.handle }}[]"
                     value="{{ loop.index0 }}"
                    {{ option.checked ? "checked" : "" }}
                />
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type == "submit" %}

          {{ field.render() }}

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
            class: isCheckbox ? "checkbox" : "form-control",
            instructionsClass: "help-block",
            instructionsBelowField: true,
            labelClass: (field.required ? " required" : ""),
            errorClass: "help-block",
          }) }}

        {% endif %}
      </div>
    {% endfor %}
  </div>
{% endfor %}


{{ form.renderClosingTag }}
```


## Bootstrap 4

The following example assumes you're including necessary [Bootstrap 4](https://getbootstrap.com) JS and CSS:

``` twig
<style>label.required:after{content:"*";color:#d00;margin-left:5px}ul.errors{display:block!important}.is-invalid{color:#dc3545}.submit-align-left{text-align:left}.submit-align-right{text-align:right}.submit-align-center{text-align:center}.submit-align-center button:not(:first-of-type),.submit-align-left button:not(:first-of-type),.submit-align-right button:not(:first-of-type){margin-left:5px}.submit-align-spread button:first-child{float:left}.submit-align-spread button:last-child{float:right}</style>

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
      {% set columnClass = columnClass ~ " col-sm-" ~ width ~ " col-12" %}

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


## Foundation

The following example assumes you're including necessary [Foundation](https://foundation.zurb.com) JS and CSS:

``` twig
<style>label.required:after{content:"*";color:#d00;margin-left:5px;font-size:12px;font-family:serif;font-weight:700}.submit{margin-top:15px}.submit-align-left{text-align:left}.submit-align-right{text-align:right}.submit-align-center{text-align:center}.submit-align-center button:not(:first-of-type),.submit-align-left button:not(:first-of-type),.submit-align-right button:not(:first-of-type){margin-left:5px}.submit-align-spread button:first-child{float:left}.submit-align-spread button:last-child{float:right}</style>

{{ form.renderTag }}

{% if form.pages|length > 1 %}

  <ul class="menu pagemenu">
    {% for page in form.pages %}
      <li class="{{ form.currentPage.index == page.index ? "active" : "" }}">
        {% if form.currentPage.index == page.index %}
          <a href="javascript:;" class="is-active">{{ page.label }}</a>
        {% else %}
          <a href="javascript:;">{{ page.label }}</a>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endif %}

{% if form.hasErrors %}
  <div class="callout alert">
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

      {% set columnClass = "" %}
      {% set columnClass = columnClass ~ form.customAttributes.columnClass %}
      {% set columnClass = columnClass ~ " medium-" ~ width ~ " columns" %}

      {% if field.type == "submit" %}
        {% set columnClass = columnClass ~ " submit submit-align-" ~ field.position %}
      {% endif %}

      <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>

        {% if field.type == "checkbox_group" %}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-text",
          }) }}

          {% for option in field.options %}
            <div class="checkbox">
              <label>
                <input type="checkbox"
                     name="{{ field.handle }}[]"
                     value="{{ option.value }}"
                    {{ option.checked ? "checked" : "" }}
                />
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type == "radio_group" %}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-text",
          }) }}

          {% for option in field.options %}
            <div class="radio">
              <label>
                <input type="radio"
                     name="{{ field.handle }}"
                     value="{{ option.value }}"
                    {{ option.checked ? "checked" : "" }}
                />
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-text",
          }) }}

          {% for option in field.options %}
            <div class="radio">
              <label>
                <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                     name="{{ field.handle }}[]"
                     value="{{ loop.index0 }}"
                    {{ option.checked ? "checked" : "" }}
                />
                {{ option.label|t|raw }}
              </label>
            </div>
          {% endfor %}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}

        {% elseif field.type == "cc_details" %}

          {# FOR FREEFORM PAYMENTS #}

          {{ field.renderLabel({
            labelClass: (field.required ? " required" : ""),
            instructionsClass: "help-text",
          }) }}

          {% for layoutRow in field.layoutRows %}
            <div class="row {{ form.customAttributes.rowClass }}">
              {% set layoutWidth = (12 / (layoutRow|length)) %}
              {% set columnClass = columnClass|replace(' medium-' ~ width) %}
              {% set columnClass = columnClass ~ " medium-" ~ layoutWidth %}
              {% for layoutField in layoutRow %}
                <div class="{{ columnClass }}">
                  {{ layoutField.renderLabel({
                    labelClass: (layoutField.required ? " required" : ""),
                    instructionsClass: "help-text",
                  }) }}

                  {{ layoutField.renderInput({
                    instructionsClass: "help-block",
                    instructionsBelowField: true,
                    labelClass: (layoutField.required ? " required" : ""),
                    errorClass: "help-block",
                    inputAttributes: {type: "text"},
                  }) }}

                  {{ layoutField.renderInstructions() }}
                  {{ layoutField.renderErrors() }}
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

        {% elseif field.type == "submit" %}

          {{ field.render({ class: "button" }) }}

        {% else %}

          {{ field.render({
            class: isCheckbox ? "checkbox" : "form-control",
            instructionsClass: "help-text",
            instructionsBelowField: true,
            labelClass: (field.required ? " required" : ""),
          }) }}

        {% endif %}
      </div>
    {% endfor %}
  </div>
{% endfor %}


{{ form.renderClosingTag }}
```


## Materialize

The following example assumes you're including necessary [Materialize](https://materializecss.com) JS and CSS:

``` twig
{{ form.renderTag }}

{% if form.pages|length > 1 %}
  <ul class="pagination">
    {% for page in form.pages %}
      <li class="{{ form.currentPage.index == loop.index0 ? "active" : "disabled" }}">
        <a href="javascript:;">{{ page.label }}</a>
      </li>
    {% endfor %}
  </ul>
{% endif %}

{% if form.hasErrors %}
  <div class="alert alert-danger errors">
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

      {% set columnClass = field.type in ["radio_group", "checkbox_group"] ? "" : "input-field" %}
      {% set columnClass = columnClass ~ (field.errors|length ? " has-error" : "") %}
      {% set columnClass = columnClass ~ form.customAttributes.columnClass %}
      {% set columnClass = columnClass ~ " col m" ~ width ~ " s12" %}

      {% if field.type == "submit" %}
        {% set columnClass = columnClass ~ " submit-align-" ~ field.position %}
      {% endif %}

      {% if field.type == "checkbox_group" %}

        <div class="{{ columnClass }}" style="margin-bottom: 20px;"{{ field.rulesHtmlData }}>

          {{ field.renderLabel({
            labelClass: " active" ~ (field.required ? " required"),
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {% for option in field.options %}
            <p>
              <input type="checkbox"
                   id="{{ form.hash ~ field.handle ~ option.value }}"
                   name="{{ field.handle }}"
                   value="{{ option.value }}"
                  {{ option.value in field.value ? "checked" : "" }}
              />
              <label for="{{ form.hash ~ field.handle ~ option.value }}">{{ option.label|t|raw }}</label>
            </p>
          {% endfor %}

          {{ field.renderInstructions }}
          {{ field.renderErrors }}
        </div>

      {% elseif field.type == "radio_group" %}

        <div class="{{ columnClass }}" style="margin-bottom: 20px;"{{ field.rulesHtmlData }}>

          {{ field.renderLabel({
            labelClass: " active" ~ (field.required ? " required"),
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {% for option in field.options %}
            <p>
              <input type="radio"
                   id="{{ form.hash ~ field.handle ~ option.value }}"
                   name="{{ field.handle }}"
                   value="{{ option.value }}"
                  {{ option.value in field.value ? "checked" : "" }}
              />
              <label for="{{ form.hash ~ field.handle ~ option.value }}">{{ option.label|t|raw }}</label>
            </p>
          {% endfor %}

          {{ field.renderInstructions }}
          {{ field.renderErrors }}
        </div>

      {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

        <div class="{{ columnClass }}" style="margin-bottom: 20px;"{{ field.rulesHtmlData }}>

          {{ field.renderLabel({
            labelClass: " active" ~ (field.required ? " required"),
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {% for option in field.options %}
            <p>
              <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                   id="{{ form.hash ~ field.handle ~ option.value }}"
                   name="{{ field.handle }}[]"
                   value="{{ loop.index0 }}"
                  {{ option.value in field.value ? "checked" : "" }}
              />
              <label for="{{ form.hash ~ field.handle ~ option.value }}">{{ option.label|t|raw }}</label>
            </p>
          {% endfor %}

          {{ field.renderInstructions }}
          {{ field.renderErrors }}
        </div>

      {% elseif field.type == "textarea" %}

        <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>
          {{ field.renderInput({
            class: 'materialize-textarea'
          }) }}
          {{ field.renderLabel }}

          {{ field.renderInstructions }}
          {{ field.renderErrors }}
        </div>

      {% elseif field.type == "checkbox" %}

        <div class="{{ columnClass|replace('input-field', '') }}"{{ field.rulesHtmlData }}>

          {{ field.renderInput }}
          {{ field.renderLabel({
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}
        </div>

      {% elseif field.type == "mailing_list" %}

        <div class="{{ columnClass|replace('input-field', '') }}"{{ field.rulesHtmlData }}>

          {{ field.renderInput|replace('<label>', '')|replace('</label>', '')|replace(field.label, '')|raw }}
          {{ field.renderLabel({
            instructionsClass: "help-block",
            errorClass: "help-block",
          }) }}

          {{ field.renderInstructions() }}
          {{ field.renderErrors() }}
        </div>

      {% elseif field.type == "submit" %}

        <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>
          {{ field.render({
            class: "btn btn-large waves-effect waves-light"
          }) }}
        </div>

      {% elseif field.type == "html" %}

        <div class="{{ columnClass }}">
          {{ field.renderInput }}
        </div>

      {% elseif field.type == "file" %}

        <div class="{{ columnClass|replace('input-field', '') }} file-field input-field"{{ field.rulesHtmlData }}>
          <div class="btn">
            <span>File</span>
            {{ field.renderInput }}
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate"
                 type="text"
                 placeholder="{{ field.label }}"
            />
          </div>

          {{ field.renderInstructions }}
          {{ field.renderErrors }}
        </div>

      {% elseif field.type == "cc_details" %}

        {# FOR FREEFORM PAYMENTS #}

        <div class="{{ columnClass|replace('input-field', '') }}"{{ field.rulesHtmlData }}>
          {{ field.renderLabel }}

          {% for layoutRow in field.layoutRows %}
            <div class="row {{ form.customAttributes.rowClass }}">
              {% set layoutWidth = (12 / (layoutRow|length)) %}
              {% set columnClass = columnClass|replace(' m' ~ width) %}
              {% set columnClass = columnClass ~ " m" ~ layoutWidth %}
              {% for layoutField in layoutRow %}
                <div class="{{ columnClass }}">
                  {{ layoutField.renderInput({
                    class: " select-wrapper chips",
                    instructionsClass: "help-block",
                    instructionsBelowField: true,
                    errorClass: "help-block",
                    inputAttributes: { style: "padding-top: 1rem" },
                  }) }}
                  {{ layoutField.renderLabel({labelClass: " select-label" ~ (layoutField.required ? " required" : "")}) }}

                  {{ layoutField.renderInstructions }}
                  {{ layoutField.renderErrors }}
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
        </div>

      {% else %}

        <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>
          {{ field.renderInput({
            instructionsClass: "help-block",
            instructionsBelowField: true,
            labelClass: (field.required ? " required" : ""),
            errorClass: "help-block",
          }) }}
          {{ field.renderLabel }}

          {{ field.renderInstructions }}
          {{ field.renderErrors }}
        </div>

      {% endif %}
    {% endfor %}
  </div>
{% endfor %}

{{ form.renderClosingTag }}
```


## Grid

``` twig
<style>.freeform-pages{padding:0;margin:0 0 10px;list-style:none}.freeform-pages:after{content:"";display:table;clear:both}.freeform-pages li{float:left;margin:0 10px 0 0}.freeform-row{display:block;margin:0 -15px}.freeform-row:after{content:"";display:table;clear:both}.freeform-row .freeform-column{display:block;padding:10px 15px;float:left;box-sizing:border-box}.freeform-row .freeform-column:after{content:"";display:table;clear:both}.freeform-row .freeform-column>.freeform-row:first-child{margin-top:-10px}.freeform-row .freeform-column label{display:block}.freeform-row .freeform-column .freeform-label{font-weight:bold}.freeform-row .freeform-column .freeform-label.freeform-required:after{content:"*";margin-left:5px;color:red}.freeform-row .freeform-column .freeform-input{width:100%;display:block;box-sizing:border-box}.freeform-row .freeform-column .freeform-input[type=checkbox],.freeform-row .freeform-column .freeform-input[type=radio]{width:auto;display:inline;margin-right:5px}.freeform-row .freeform-column .freeform-input.StripeElement{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield;border:1px solid;padding-top:5px;height:26px}.freeform-row .freeform-column .freeform-input-only-label{font-weight:normal}.freeform-row .freeform-column .freeform-input-only-label>.freeform-input{display:inline-block;width:auto;margin-right:5px}.freeform-row .freeform-column .freeform-errors{list-style:none;padding:0;margin:5px 0 0}.freeform-row .freeform-column .freeform-errors>li{color:red}.freeform-row .freeform-column .freeform-instructions{margin:0 0 5px;font-size:13px;color:#ABA7A7}.freeform-row .freeform-column.freeform-column-content-align-left{text-align:left}.freeform-row .freeform-column.freeform-column-content-align-left button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-center{text-align:center}.freeform-row .freeform-column.freeform-column-content-align-center button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-right{text-align:right}.freeform-row .freeform-column.freeform-column-content-align-right button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-spread button:first-child{float:left}.freeform-row .freeform-column.freeform-column-content-align-spread button:last-child{float:right}.freeform-row .freeform-column-1{width:8.33333%}.freeform-row .freeform-column-2{width:16.66667%}.freeform-row .freeform-column-3{width:25%}.freeform-row .freeform-column-4{width:33.33333%}.freeform-row .freeform-column-5{width:41.66667%}.freeform-row .freeform-column-6{width:50%}.freeform-row .freeform-column-7{width:58.33333%}.freeform-row .freeform-column-8{width:66.66667%}.freeform-row .freeform-column-9{width:75%}.freeform-row .freeform-column-10{width:83.33333%}.freeform-row .freeform-column-11{width:91.66667%}.freeform-row .freeform-column-12{width:100%}.freeform-form-has-errors{color:red}</style>

{{ form.renderTag }}

{% if form.pages|length > 1 %}
  <ul class="freeform-pages">
    {% for page in form.pages %}
      <li>
        {% if form.currentPage.index == page.index %}
          <a href="javascript:;">{{ page.label }}</a>
        {% else %}
          {{ page.label }}
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endif %}

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
  <div class="freeform-row {{ form.customAttributes.rowClass }}">
    {% for field in row %}
      {% set columnClass = "freeform-column " ~ form.customAttributes.columnClass %}
      {% set columnClass = columnClass ~ " freeform-column-" ~ (12 / (row|length)) %}
      {% if field.type == "submit" %}
        {% set columnClass = columnClass ~ " freeform-column-content-align-" ~ field.position %}
      {% endif %}
      <div class="{{ columnClass }}"{{ field.rulesHtmlData }}>

        {{ field.render({
          class: field.type != "submit" ? "freeform-input" : "",
          labelClass: "freeform-label" ~ (field.inputOnly ? " freeform-input-only-label" : "") ~ (field.required ? " freeform-required" : ""),
          errorClass: "freeform-errors",
        }) }}

        {# FOR FREEFORM PAYMENTS #}
        {% if field.layoutRows is defined %}
          {% for layoutRow in field.layoutRows %}
            <div class="freeform-row {{ form.customAttributes.rowClass }}">
              {% set layoutWidth = (12 / (layoutRow|length)) %}
              {% set columnClass = columnClass|replace(' col-lg-' ~ (row|length)) %}
              {% set columnClass = columnClass ~ " col-lg-" ~ layoutWidth %}
              {% for layoutField in layoutRow %}
                <div class="{{ columnClass }}">
                  {{ layoutField.render({
                    class: "freeform-input",
                    labelClass: "freeform-label" ~ (layoutField.inputOnly ? " freeform-input-only-label" : "") ~ (layoutField.required ? " freeform-required" : ""),
                    errorClass: "freeform-errors",
                  }) }}
                </div>
              {% endfor %}
            </div>
          {% endfor %}
        {% endif %}

      </div>
    {% endfor %}
  </div>
{% endfor %}

{{ form.renderClosingTag }}
```


## Flexbox

``` twig
<style>.freeform-pages{display:-ms-flexbox;display:flex;padding:0;margin:0 0 10px;list-style:none}.freeform-pages li{margin:0 10px 0 0}.freeform-row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 -15px}.freeform-row .freeform-column{-ms-flex:1 0 auto;flex:1 0 auto;padding:10px 0;margin:0 15px;box-sizing:border-box}.freeform-row .freeform-column>.freeform-row:first-child{margin-top:-10px}.freeform-row .freeform-column label{display:block}.freeform-row .freeform-column .freeform-label{font-weight:bold}.freeform-row .freeform-column .freeform-label.freeform-required:after{content:"*";margin-left:5px;color:red}.freeform-row .freeform-column .freeform-input{width:100%;display:block;box-sizing:border-box}.freeform-row .freeform-column .freeform-input[type=checkbox],.freeform-row .freeform-column .freeform-input[type=radio]{width:auto;display:inline;margin-right:5px}.freeform-row .freeform-column .freeform-input.StripeElement{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield;border:1px solid;padding-top:5px;height:26px}.freeform-row .freeform-column .freeform-input-only-label{font-weight:normal}.freeform-row .freeform-column .freeform-input-only-label>.freeform-input{display:inline-block;width:auto;margin-right:5px}.freeform-row .freeform-column .freeform-errors{list-style:none;padding:0;margin:5px 0 0}.freeform-row .freeform-column .freeform-errors>li{color:red}.freeform-row .freeform-column .freeform-instructions{margin:0 0 5px;font-size:13px;color:#ABA7A7}.freeform-row .freeform-column.freeform-column-content-align-left{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}.freeform-row .freeform-column.freeform-column-content-align-left>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-center{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.freeform-row .freeform-column.freeform-column-content-align-center>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-right{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.freeform-row .freeform-column.freeform-column-content-align-right>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-spread{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.freeform-row .freeform-column.freeform-column-content-align-spread>button:not(:first-of-type){margin-left:5px}.freeform-form-has-errors{color:red}</style>

{{ form.renderTag }}

{% if form.pages|length > 1 %}
  <ul class="freeform-pages">
    {% for page in form.pages %}
      <li>
        {% if form.currentPage.index == page.index %}
          <a href="javascript:;">{{ page.label }}</a>
        {% else %}
          {{ page.label }}
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endif %}

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

        {# FOR FREEFORM PAYMENTS #}
        {% if field.layoutRows is defined %}
          {% for layoutRow in field.layoutRows %}
            <div class="freeform-row {{ form.customAttributes.rowClass }}">
              {% for layoutField in layoutRow %}
                <div class="{{ columnClass }}">
                  {{ layoutField.render({
                    class: "freeform-input",
                    labelClass: "freeform-label" ~ (layoutField.inputOnly ? " freeform-input-only-label" : "") ~ (layoutField.required ? " freeform-required" : ""),
                    errorClass: "freeform-errors",
                    instructionsClass: "freeform-instructions",
                  }) }}
                </div>
              {% endfor %}
            </div>
          {% endfor %}
        {% endif %}

      </div>
    {% endfor %}
  </div>
{% endfor %}

{{ form.renderClosingTag }}
```
