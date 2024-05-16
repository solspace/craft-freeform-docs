---
title: Craft Freeform 3.x - Formatting Template Extras
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/templates/formatting/
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

# Formatting Template Examples

Freeform includes several example [formatting templates](../overview/formatting-templates.md) to choose from. You can use these as a starting point and adjust them to suit your needs, or simply create your own from scratch. The following formatting templates are located in the `/vendor/solspace/craft-freeform/packages/plugin/src/templates/_defaultFormTemplates/` directory. If you wish to create your own modified version, just copy the code below, or the template file (ex: **foundation.html**) and paste it into your Formatting Templates directory in the specified Craft Templates directory (ex: **/templates/freeform/**), and rename it to whatever you like.


[[toc]]



<div class="content-block">

## Bootstrap 5 <Badge type="feature" text="3.12+" />
The following example assumes you're including necessary [Bootstrap 5](https://getbootstrap.com) JS and CSS. You can keep the inline CSS inside the formatting template or move it to your page's `<head></head>` tags of course.

``` twig
<style>button[type=submit].ff-loading{display:inline-flex;flex-wrap:nowrap;align-items:center}button[type=submit].ff-loading:before{content:"";display:block;flex:1 0 11px;width:11px;height:11px;margin-right:10px;border-style:solid;border-width:2px;border-color:transparent transparent #fff #fff;border-radius:50%;animation:ff-loading .5s linear infinite}@keyframes ff-loading{0%{transform:rotate(0)}100%{transform:rotate(1turn)}}label.required:after{content:"*";color:#d00;margin-left:5px}ul.errors{display:block !important}.is-invalid{color:#dc3545}.submit-align-left{text-align:left}.submit-align-right{text-align:right}.submit-align-center{text-align:center}.submit-align-center button:not(:first-of-type),.submit-align-left button:not(:first-of-type),.submit-align-right button:not(:first-of-type){margin-left:5px}.submit-align-spread button:first-child{float:left}.submit-align-spread button:last-child{float:right}</style>

{{ form.renderTag() }}

{% if form.pages|length > 1 %}
    <ul class="nav nav-tabs">
    {% for page in form.pages %}
        <li class="nav-item">
            <span class="nav-link{{ form.currentPage.index == page.index ? ' font-weight-bold active' : ' disabled' }}">{{ page.label }}</span>
        </li>
    {% endfor %}
    </ul>
{% endif %}

{% if form.hasErrors %}
    <div class="alert alert-danger">
        {{ form.errorMessage | t }}

        {% if form.errors|length %}
            <ul class="mb-0">
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

            {% set columnClass = "mb-3" %}
            {% set columnClass = columnClass ~ form.customAttributes.columnClass %}
            {% set columnClass = columnClass ~ " col-sm-" ~ width ~ " col-12" %}

            {% set class = "form-control" ~ (field.hasErrors ? " is-invalid has-validation") %}
            {% if field.type == "file" %}
                {% set class = "form-control-file" ~ (field.hasErrors ? " is-invalid") %}
            {% elseif field.type == "select" %}
                {% set class = "form-select" %}
            {% elseif field.type == "signature" %}
                {% set class = "btn btn-light" %}
            {% elseif field.type == "table" %}
                {% set class = "table" %}
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

                    {{ field.oneLine ? "<div>"|raw }}

                    {% for index, option in field.options %}
                        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
                            <input type="checkbox"
                                   name="{{ field.handle }}[]"
                                   value="{{ option.value }}"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                   class="form-check-input{{ field.hasErrors ? " is-invalid" }}"
                                    {{ option.checked ? "checked" : "" }}
                            />

                            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                                {{ option.label|t|raw }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.oneLine ? "</div>"|raw }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors({ errorClass: errorClass }) }}

                {% elseif field.type == "radio_group" %}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    {{ field.oneLine ? "<div>"|raw }}

                    {% for index, option in field.options %}
                        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
                            <input type="radio"
                                   name="{{ field.handle }}"
                                   value="{{ option.value }}"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                   class="form-check-input{{ field.hasErrors ? " is-invalid" }}"
                                    {{ option.checked ? "checked" : "" }}
                            />
                            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                                {{ option.label|t|raw }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.oneLine ? "</div>"|raw }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    {{ field.oneLine ? "<div>"|raw }}

                    {% for index, option in field.options %}
                        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
                            <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                                   name="{{ field.handle }}[]"
                                   value="{{ loop.index0 }}"
                                   class="form-check-input"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                    {{ option.checked ? "checked" : "" }}
                            />

                            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                                {{ option.label|t|raw }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.oneLine ? "</div>"|raw }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type in ["checkbox", "mailing_list"] %}

                    <div class="form-check">
                        {{ field.renderInput({ class: class ~ " form-check-input" ~ (field.hasErrors ? " is-invalid") }) }}
                        {{ field.renderLabel({ labelClass: "form-check-label" ~ (field.hasErrors ? " is-invalid") ~ (field.required ? " required") }) }}
                        {{ field.renderErrors({ errorClass: errorClass }) }}
                    </div>

                {% elseif field.type == "submit" %}

                    {{ field.render({ class: "btn btn-primary" }) }}

                {% elseif field.type == "table" %}

                    {{ field.render({
                        class: class,
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        instructionsBelowField: true,
                        errorClass: errorClass,
                        addButtonLabel: "Add +",
                        addButtonClass: "btn btn-sm btn-primary",
                        removeButtonLabel: "x",
                        removeButtonClass: "btn btn-sm btn-danger",
                        tableTextInputClass: "form-control",
                        tableSelectInputClass: "form-select",
                        tableCheckboxInputClass: "form-check-input"
                    }) }}

                {% elseif field.type == "cc_details" %}

                    {# FOR FREEFORM PAYMENTS #}

                    {{ field.renderLabel({
                        labelClass: (field.required ? " required" : ""),
                        instructionsClass: "help-block",
                        errorClass: "help-block",
                    }) }}

                    {% for layoutRow in field.layoutRows %}
                        <div class="row mb-3{{ form.customAttributes.rowClass }}">
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

<script>
  var form = document.querySelector('[data-id="{{ form.anchor }}"]');
  if (form) {
    form.addEventListener("freeform-ready", function (event) {
      var freeform = event.target.freeform;

      freeform.setOption("errorClassBanner", ["alert", "alert-danger", "errors"]);
      freeform.setOption("errorClassList", ["help-block", "errors", "invalid-feedback"]);
      freeform.setOption("errorClassField", ["is-invalid", "has-error"]);
      freeform.setOption("successClassBanner", ["alert", "alert-success", "form-success"]);
    })

    form.addEventListener("freeform-stripe-styling", function (event) {
      event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      }
    })
  }
</script>
```

</div>
<div class="content-block">

## Bootstrap 4
The following example assumes you're including necessary [Bootstrap 4](https://getbootstrap.com) JS and CSS. You can keep the inline CSS inside the formatting template or move it to your page's `<head></head>` tags of course.

``` twig
<style>button[type=submit].ff-loading{display:inline-flex;flex-wrap:nowrap;align-items:center}button[type=submit].ff-loading:before{content:"";display:block;flex:1 0 11px;width:11px;height:11px;margin-right:10px;border-style:solid;border-width:2px;border-color:transparent transparent #fff #fff;border-radius:50%;animation:ff-loading .5s linear infinite}@keyframes ff-loading{0%{transform:rotate(0)}100%{transform:rotate(1turn)}}label.required:after{content:"*";color:#d00;margin-left:5px}ul.errors{display:block !important}.is-invalid{color:#dc3545}.submit-align-left{text-align:left}.submit-align-right{text-align:right}.submit-align-center{text-align:center}.submit-align-center button:not(:first-of-type),.submit-align-left button:not(:first-of-type),.submit-align-right button:not(:first-of-type){margin-left:5px}.submit-align-spread button:first-child{float:left}.submit-align-spread button:last-child{float:right}</style>

{{ form.renderTag() }}

{% if form.pages|length > 1 %}
    <ul class="nav nav-tabs">
    {% for page in form.pages %}
        <li class="nav-item">
            <span class="nav-link{{ form.currentPage.index == page.index ? ' font-weight-bold active' : ' disabled' }}">{{ page.label }}</span>
        </li>
    {% endfor %}
    </ul>
{% endif %}

{% if form.hasErrors %}
    <div class="alert alert-danger">
        {{ "Error! Please review the form and try submitting again."|t('freeform') }}

        {% if form.errors|length %}
            <ul class="mb-0">
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
            {% elseif field.type == "signature" %}
                {% set class = "btn btn-light" %}
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

                    {{ field.oneLine ? "<div>"|raw }}

                    {% for index, option in field.options %}
                        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
                            <input type="checkbox"
                                   name="{{ field.handle }}[]"
                                   value="{{ option.value }}"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                   class="form-check-input{{ field.hasErrors ? " is-invalid" }}"
                                    {{ option.checked ? "checked" : "" }}
                            />

                            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                                {{ option.label|t|raw }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.oneLine ? "</div>"|raw }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors({ errorClass: errorClass }) }}

                {% elseif field.type == "radio_group" %}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    {{ field.oneLine ? "<div>"|raw }}

                    {% for index, option in field.options %}
                        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
                            <input type="radio"
                                   name="{{ field.handle }}"
                                   value="{{ option.value }}"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                   class="form-check-input{{ field.hasErrors ? " is-invalid" }}"
                                    {{ option.checked ? "checked" : "" }}
                            />
                            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                                {{ option.label|t|raw }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.oneLine ? "</div>"|raw }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    {{ field.oneLine ? "<div>"|raw }}

                    {% for index, option in field.options %}
                        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
                            <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                                   name="{{ field.handle }}[]"
                                   value="{{ loop.index0 }}"
                                   class="form-check-input"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                    {{ option.checked ? "checked" : "" }}
                            />

                            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                                {{ option.label|t|raw }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.oneLine ? "</div>"|raw }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type in ["checkbox", "mailing_list"] %}

                    <div class="form-check">
                        {{ field.renderInput({ class: class ~ " form-check-input" ~ (field.hasErrors ? " is-invalid") }) }}
                        {{ field.renderLabel({ labelClass: "form-check-label" ~ (field.hasErrors ? " is-invalid") ~ (field.required ? " required") }) }}
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

<script>
  var form = document.querySelector('[data-id="{{ form.anchor }}"]');
  if (form) {
    form.addEventListener("freeform-ready", function (event) {
      var freeform = event.target.freeform;

      freeform.setOption("errorClassBanner", ["alert", "alert-danger", "errors"]);
      freeform.setOption("errorClassList", ["help-block", "errors", "invalid-feedback"]);
      freeform.setOption("errorClassField", ["is-invalid", "has-error"]);
      freeform.setOption("successClassBanner", ["alert", "alert-success", "form-success"]);
    })

    form.addEventListener("freeform-stripe-styling", (event) => {
      event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      }
    })
  }
</script>
```

</div>
<div class="content-block">

## Bootstrap 3
The following example assumes you're including necessary [Bootstrap 3](https://getbootstrap.com) JS and CSS. You can keep the inline CSS inside the formatting template or move it to your page's `<head></head>` tags of course.

``` twig
<style>button[type=submit].ff-loading{display:inline-flex;flex-wrap:nowrap;align-items:center}button[type=submit].ff-loading:before{content:"";display:block;flex:1 0 11px;width:11px;height:11px;margin-right:10px;border-style:solid;border-width:2px;border-color:transparent transparent #fff #fff;border-radius:50%;animation:ff-loading .5s linear infinite}@keyframes ff-loading{0%{transform:rotate(0)}100%{transform:rotate(1turn)}}label.required:after{content:"*";color:#d00;margin-left:5px}.submit-align-left{text-align:left}.submit-align-right{text-align:right}.submit-align-center{text-align:center}.submit-align-center button:not(:first-of-type),.submit-align-left button:not(:first-of-type),.submit-align-right button:not(:first-of-type){margin-left:5px}.submit-align-spread button:first-child{float:left}.submit-align-spread button:last-child{float:right}</style>

{{ form.renderTag }}

{% if form.pages|length > 1 %}
    <ul class="nav nav-tabs">
    {% for page in form.pages %}
        <li class="nav-item">
            <span class="nav-link{{ form.currentPage.index == page.index ? ' font-weight-bold active' : ' disabled' }}">{{ page.label }}</span>
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

                    {% if field.oneLine %}
                        <div>
                            {% for option in field.options %}
                                <label class="checkbox-inline">
                                    <input type="checkbox"
                                           name="{{ field.handle }}[]"
                                           value="{{ option.value }}"
                                            {{ option.checked ? "checked" : "" }}
                                    />
                                    {{ option.label|t|raw }}
                                </label>
                            {% endfor %}
                        </div>
                    {% else %}
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
                    {% endif %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "radio_group" %}

                    {{ field.renderLabel({
                        labelClass: (field.required ? " required" : ""),
                        instructionsClass: "help-block",
                        errorClass: "help-block",
                    }) }}

                    {% if field.oneLine %}
                        <div>
                            {% for option in field.options %}
                                <label class="radio-inline">
                                    <input type="radio"
                                           name="{{ field.handle }}"
                                           value="{{ option.value }}"
                                            {{ option.checked ? "checked" : "" }}
                                    />
                                    {{ option.label|t|raw }}
                                </label>
                            {% endfor %}
                        </div>
                    {% else %}
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
                    {% endif %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

                    {{ field.renderLabel({
                        labelClass: (field.required ? " required" : ""),
                        instructionsClass: "help-block",
                        errorClass: "help-block",
                    }) }}

                    {% if field.oneLine %}
                        <div>
                            {% for option in field.options %}
                                <label class="{{ field.showAsRadio ? "radio" : "checkbox" }}-inline">
                                    <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                                           name="{{ field.handle }}[]"
                                           value="{{ loop.index0 }}"
                                            {{ option.checked ? "checked" : "" }}
                                    />
                                    {{ option.label|t|raw }}
                                </label>
                            {% endfor %}
                        </div>
                    {% else %}
                        {% for option in field.options %}
                            <div class="{{ field.showAsRadio ? "radio" : "checkbox" }}">
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
                    {% endif %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "signature" %}

                    {{ field.render({ class: "btn btn-light" }) }}

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

<script>
  var form = document.querySelector('[data-id="{{ form.anchor }}"]');
  if (form) {
    form.addEventListener("freeform-ready", function (event) {
      var freeform = event.target.freeform;

      freeform.setOption("errorClassBanner", ["alert", "alert-danger", "errors"]);
      freeform.setOption("errorClassList", ["help-block", "errors", "has-error"]);
      freeform.setOption("errorClassField", "has-error");
      freeform.setOption("successClassBanner", ["alert", "alert-success", "form-success"]);
    })

    form.addEventListener("freeform-stripe-styling", (event) => {
      event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      }
    })
  }
</script>
```

</div>
<div class="content-block">

## Foundation
The following example assumes you're including necessary [Foundation](https://foundation.zurb.com) JS and CSS. You can keep the inline CSS inside the formatting template or move it to your page's `<head></head>` tags of course.

``` twig
<style>button[type=submit].ff-loading{display:inline-flex;flex-wrap:nowrap;align-items:center}button[type=submit].ff-loading:before{content:"";display:block;flex:1 0 11px;width:11px;height:11px;margin-right:10px;border-style:solid;border-width:2px;border-color:transparent transparent #fff #fff;border-radius:50%;animation:ff-loading .5s linear infinite}@keyframes ff-loading{0%{transform:rotate(0)}100%{transform:rotate(1turn)}}label.required:after{content:"*";color:#d00;margin-left:5px;font-size:12px;font-family:serif;font-weight:700}.submit{margin-top:15px}.submit-align-left{text-align:left}.submit-align-left button:not(:first-of-type){margin-left:5px}.submit-align-center{text-align:center}.submit-align-center button:not(:first-of-type){margin-left:5px}.submit-align-right{text-align:right}.submit-align-right button:not(:first-of-type){margin-left:5px}.submit-align-spread button:first-child{float:left}.submit-align-spread button:last-child{float:right}.form-rating-field-wrapper label{margin-left:0;margin-right:0}</style>

{{ form.renderTag }}

{% if form.pages|length > 1 %}
    <ul class="menu">
        {% for page in form.pages %}
            <li class="menu-text{{ form.currentPage.index == page.index ? ' is-active' : '' }}">
                {{ page.label }}
            </li>
        {% endfor %}
    </ul>
    <br />
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

<div class="grid-container">
{% for row in form %}
    <div class="grid-x grid-padding-x {{ form.customAttributes.rowClass }}">
        {% for field in row %}
            {% set width = (12 / (row|length)) %}

            {% set isCheckbox = field.type in ["checkbox","mailing_list"] %}

            {% set columnClass = "" %}
            {% set columnClass = columnClass ~ form.customAttributes.columnClass %}
            {% set columnClass = columnClass ~ " medium-" ~ width ~ " columns" %}

            {% if field.type == "submit" %}
                {% set columnClass = columnClass ~ " submit submit-align-" ~ field.position %}
            {% endif %}

            <div class="{{ columnClass }} cell"{{ field.rulesHtmlData }}>

                {% if field.type == "checkbox_group" %}

                    {{ field.renderLabel({
                        labelClass: (field.required ? " required" : ""),
                        instructionsClass: "help-text",
                    }) }}

                    {% for index, option in field.options %}
                        {{ not field.oneLine ? '<div class="checkbox">'|raw }}

                        <input type="checkbox"
                               name="{{ field.handle }}[]"
                               value="{{ option.value }}"
                               id="{{ field.idAttribute }}-{{ index }}"
                                {{ option.checked ? "checked" : "" }}
                        />
                        <label for="{{ field.idAttribute }}-{{ index }}">{{ option.label|t|raw }}</label>

                        {{ not field.oneLine ? '</div>'|raw }}
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "radio_group" %}

                    {{ field.renderLabel({
                        labelClass: (field.required ? " required" : ""),
                        instructionsClass: "help-text",
                    }) }}

                    {% for index, option in field.options %}
                        {{ not field.oneLine ? '<div class="radio">'|raw }}

                        <input type="radio"
                               name="{{ field.handle }}"
                               value="{{ option.value }}"
                               id="{{ field.idAttribute }}-{{ index }}"
                                {{ option.checked ? "checked" : "" }}
                        />
                        <label for="{{ field.idAttribute }}-{{ index }}">{{ option.label|t|raw }}</label>

                        {{ not field.oneLine ? '</div>'|raw }}
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "dynamic_recipients" and (field.showAsRadio or field.showAsCheckboxes) %}

                    {{ field.renderLabel({
                        labelClass: (field.required ? " required" : ""),
                        instructionsClass: "help-text",
                    }) }}

                    {% for index, option in field.options %}
                        {{ not field.oneLine ? '<div class="radio">'|raw }}

                        <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                               name="{{ field.handle }}[]"
                               value="{{ loop.index0 }}"
                               id="{{ field.idAttribute }}-{{ index }}"
                                {{ option.checked ? "checked" : "" }}
                        />
                        <label for="{{ field.idAttribute }}-{{ index }}">{{ option.label|t|raw }}</label>

                        {{ not field.oneLine ? '</div>'|raw }}
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
                        <div class="grid-x grid-padding-x {{ form.customAttributes.rowClass }}">
                            {% set layoutWidth = (12 / (layoutRow|length)) %}
                            {% set columnClass = columnClass|replace(' medium-' ~ width) %}
                            {% set columnClass = columnClass ~ " medium-" ~ layoutWidth %}
                            {% for layoutField in layoutRow %}
                                <div class="{{ columnClass }} cell">
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

                {% elseif field.type == "signature" %}

                    {{ field.render({ class: "button" }) }}

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
</div>

{{ form.renderClosingTag }}

<script>
  var form = document.querySelector('[data-id="{{ form.anchor }}"]');
  if (form) {
    form.addEventListener("freeform-ready", function (event) {
      var freeform = event.target.freeform;

      freeform.setOption("errorClassBanner", ["callout", "alert", "form-errors"]);
      freeform.setOption("errorClassList", ["errors"]);
      freeform.setOption("errorClassField", "has-error");
      freeform.setOption("successClassBanner", ["callout", "success"]);
    })

    form.addEventListener("freeform-stripe-styling", (event) => {
      event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      }
    })
  }
</script>
```

</div>
<div class="content-block">

## Tailwind CSS
The following example assumes you're including necessary [Tailwind CSS](https://tailwindcss.com). Due to the nature of Tailwind, this likely won't be useable as-is for most customers, but will serve as a good starting point for creating your own.

``` twig
<style>.required::after{content:"*";color:#d00;margin-left:5px}</style>

{{ form.renderTag({class: "w-full"}) }}

{# Set styling for Ajax responses #}
<script>
  var form = document.querySelector('[data-id="{{ form.anchor }}"]');
  if (form) {
    form.addEventListener("freeform-ready", function (event) {
      var freeform = event.target.freeform;

      freeform.setOption("errorClassBanner", ["bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "mb-4"]);
      freeform.setOption("errorClassList", ["errors", "text-red-500", "text-xs", "italic"]);
      freeform.setOption("errorClassField", ["border-red-500"]);
      freeform.setOption("successClassBanner", ["bg-green-100", "border", "border-green-500", "text-green-700", "px-4", "py-3", "rounded", "relative", "mb-4"]);
    })

    form.addEventListener("freeform-stripe-styling", function (event) {
      event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      }
    })
  }
</script>

{# Render tabs for pages #}
{% if form.pages|length > 1 %}
    <ul class="flex border-b">
        {% for page in form.pages %}
            <li class="mr-1">
                <a class="{{ form.currentPage.index == page.index ? 'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold' : 'bg-white inline-block py-2 px-4 text-gray-400 font-semibold disabled' }}">{{ page.label }}</a>
            </li>
        {% endfor %}
    </ul>
{% endif %}

{# Render errors #}
{% if form.hasErrors %}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong class="font-bold">{{ "Error! Please review the form and try submitting again."|t('freeform') }}</strong>
        {% if form.errors|length %}
            <ul class="mb-0 ">
                {% for error in form.errors %}
                    <li>{{ error }}</li>
                {% endfor %}
            </ul>
        {% endif %}
    </div>
{% endif %}

{# Define standard field classes #}
{% set standardFieldClasses = "appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" %}
{% set selectFieldClasses = "block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" %}
{% set checkboxFieldClasses = "bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" %}
{% set fileFieldClasses = "appearance-none block w-full text-gray-700 py-3 px-4 leading-tight" %}
{% set tableFieldClasses = "appearance-none w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" %}
{% set signatureFieldClasses = "bg-gray-200 hover:bg-gray-400 text-black font-normal py-1 px-2 rounded mr-1" %}
{% set standardLabelsClasses = "tracking-wide text-gray-700 text-xs font-bold mb-2" %}

{# Render form rows #}
{% for row in form %}
    <div class="flex flex-wrap -mx-3 mb-6 {{ form.customAttributes.rowClass }}">
        {% for field in row %}

            {# Calculate column class based on columns count #}
            {% set columnCount = row|length %}
            {% set columnClass = "w-full px-3 mb-6 md:mb-0" %}
            {% set columnClass = columnClass ~ form.customAttributes.columnClass %}

            {% if columnCount > 1 %}
                {% set columnClass = columnClass ~ " md:w-1/" ~ columnCount ~ " lg:w-1/" ~ columnCount ~ " xl:w-1/" ~ columnCount %}
            {% else %}
                {% set columnClass = columnClass ~ " md:w-full lg:w-full xl:w-full" %}
            {% endif %}

            {# Set a custom column class for the submit button #}
            {% if field.type == "submit" %}
                {% set columnClass = columnClass ~ " text-" ~ field.position %}
            {% endif %}

            {# Set field class based on field type #}
            {% set fieldClass = standardFieldClasses %}

            {% switch field.type %}
                {% case "select" %}
                    {% set fieldClass = selectFieldClasses %}
                {% case "checkbox" %}
                    {% set fieldClass = checkboxFieldClasses %}
                {% case "mailing_list" %}
                    {% set fieldClass = checkboxFieldClasses %}
                {% case "file" %}
                    {% set fieldClass = fileFieldClasses %}
                {% case "table" %}
                    {% set fieldClass = tableFieldClasses %}
                {% case "signature" %}
                    {% set fieldClass = signatureFieldClasses %}
            {% endswitch %}

            {% set fieldClass = fieldClass ~ (field.hasErrors ? " border-red-500") %}

            {# Set label class #}
            {% set labelClass = standardLabelsClasses ~ " block uppercase" %}
            {% set labelClass = labelClass ~ (field.required ? " required" : "") %}

            {# Set error class #}
            {% set errorClass = "text-red-500 text-xs italic" %}

            {# Set instructions class #}
            {% set instructionClass = "text-gray-600 text-xs italic" %}


            {# Create a column except when creating Freeform Payments columns #}
            {% if field.type != 'cc_details' %}
            <div class="main-column-class {{ columnClass }}"{{ field.rulesHtmlData }} style="overflow: hidden;">
            {% endif %}
                {% if field.type == "checkbox_group" %}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    {% for index, option in field.options %}
                        <div>
                            <input type="checkbox"
                                   name="{{ field.handle }}[]"
                                   value="{{ option.value }}"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                   class="form-check-input{{ field.hasErrors ? " border-red-500" }}"
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
                        <div>
                            <input type="radio"
                                   name="{{ field.handle }}"
                                   value="{{ option.value }}"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                   class="form-check-input{{ field.hasErrors ? " border-red-500" }}"
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

                    {{ field.oneLine ? "<div>"|raw }}

                    {% for index, option in field.options %}
                        <div class="form-check{{ field.oneLine ? " form-check-inline" }}">
                            <input type="{{ field.showAsRadio ? "radio" : "checkbox" }}"
                                   name="{{ field.handle }}[]"
                                   value="{{ loop.index0 }}"
                                   class="form-check-input"
                                   id="{{ field.idAttribute }}-{{ index }}"
                                    {{ option.checked ? "checked" : "" }}
                            />

                            <label class="form-check-label" for="{{ field.idAttribute }}-{{ index }}">
                                {{ option.label|t|raw }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.oneLine ? "</div>"|raw }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "dynamic_recipients" and (field.showAsSelect) %}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    <div class="relative">
                        <select name="{{ field.handle }}" id="{{ field.idAttribute }}" class="{{ fieldClass }}">
                        {% for index, option in field.options %}
                            <option value="{{ loop.index0 }}"{{ option.checked ? "selected" : "" }}>{{ option.label|t|raw }}</option>
                        {% endfor %}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type == "select" %}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    <div class="relative">
                        <select name="{{ field.handle }}" id="{{ field.idAttribute }}" class="{{ fieldClass }}">
                        {% for option in field.options %}
                            <option value="{{ option.value }}"{{ option.checked ? "selected" : "" }}>{{ option.label|t|raw }}</option>
                        {% endfor %}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}

                {% elseif field.type in ["checkbox", "mailing_list"] %}

                    <div class="form-check">
                        {{ field.renderInput({ class: fieldClass ~ (field.hasErrors ? " border-red-500") }) }}
                        {{ field.renderLabel({ labelClass: (field.hasErrors ? " border-red-500") }) }}
                        {{ field.renderErrors({ errorClass: errorClass }) }}
                    </div>

                {% elseif field.type == "submit" %}

                    {{ field.render({ class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" }) }}

                {% elseif field.type == "table" %}

                    {{ field.render({
                        class: fieldClass,
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        instructionsBelowField: true,
                        errorClass: errorClass,
                        addButtonLabel: "Add +",
                        addButtonClass: "bg-green-500 hover:bg-green-700 text-white font-normal py-2 px-4 rounded m-4",
                        removeButtonLabel: "x",
                        removeButtonClass: "bg-red-500 hover:bg-red-700 text-white font-normal py-2 px-4 rounded ml-2",
                        tableTextInputClass: standardFieldClasses ~ " my-2",
                        tableSelectInputClass: selectFieldClasses,
                        tableCheckboxInputClass: checkboxFieldClasses ~ " m-1",
                        tableLabelsClass: standardLabelsClasses
                    }) }}

                {% elseif field.type == "cc_details" %}

                    {# FOR FREEFORM PAYMENTS #}

                    {{ field.renderLabel({
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        errorClass: errorClass,
                    }) }}

                    {% for layoutRow in field.layoutRows %}

                        {% set columnCount = layoutRow|length %}

                        {% set columnClass = "w-full px-3 mb-6 md:mb-0" %}
                        {% set columnClass = columnClass ~ form.customAttributes.columnClass %}

                        {% if columnCount > 1 %}
                            {% set columnClass = columnClass ~ " md:w-1/" ~ columnCount ~ " lg:w-1/" ~ columnCount ~ " xl:w-1/" ~ columnCount %}
                        {% else %}
                            {% set columnClass = columnClass ~ " md:w-full lg:w-full xl:w-full" %}
                        {% endif %}

                        {% for layoutField in layoutRow %}

                            {% set fieldClass = "appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" ~ (field.hasErrors ? " border-red-500") %}

                            <div class="payments-column-class {{ columnClass }}">
                            {{ layoutField.render({
                                class: (loop.parent.loop.last ? fieldClass: fieldClass ~ " mb-6"),
                                instructionsClass: instructionClass,
                                instructionsBelowField: true,
                                labelClass: labelClass,
                                errorClass: errorClass,
                            }) }}
                            </div>

                        {% endfor %}
                    {% endfor %}

                    {{ field.renderInput({
                        instructionsClass: instructionClass,
                        instructionsBelowField: true,
                        labelClass: labelClass,
                        errorClass: errorClass,
                    }) }}

                    {{ field.renderInstructions }}
                    {{ field.renderErrors }}

                {% else %}

                    {{ field.render({
                        class: fieldClass,
                        labelClass: labelClass,
                        instructionsClass: instructionClass,
                        instructionsBelowField: true,
                        errorClass: errorClass,
                    }) }}

                {% endif %}

            {# Close a column except when creating Freeform Payments columns #}
            {% if field.type != 'cc_details' %}
            </div>
            {% endif %}
        {% endfor %}
    </div>
{% endfor %}

{{ form.renderClosingTag }}
```

</div>
<div class="content-block">

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

</div>
<div class="content-block">

## Grid
The Grid implementation includes a lot more CSS to style it correctly. You can keep this CSS inside the formatting template or move it to your page's `<head></head>` tags of course.

``` twig
<style>button[type=submit].ff-loading{display:inline-flex;flex-wrap:nowrap;align-items:center}button[type=submit].ff-loading:before{content:"";display:block;flex:1 0 11px;width:11px;height:11px;margin-right:10px;border-style:solid;border-width:2px;border-color:transparent transparent #fff #fff;border-radius:50%;animation:ff-loading .5s linear infinite}@keyframes ff-loading{0%{transform:rotate(0)}100%{transform:rotate(1turn)}}.freeform-pages{padding:0;margin:0 0 10px;list-style:none}.freeform-pages:after{content:"";display:table;clear:both}.freeform-pages li{float:left;margin:0 10px 0 0}.freeform-row{display:block;margin:0 -15px}.freeform-row:after{content:"";display:table;clear:both}.freeform-row .freeform-column{display:block;padding:10px 15px;float:left;box-sizing:border-box}.freeform-row .freeform-column:after{content:"";display:table;clear:both}.freeform-row .freeform-column>.freeform-row:first-child{margin-top:-10px}.freeform-row .freeform-column label{display:block}.freeform-row .freeform-column .input-group-one-line label{display:inline-block;padding-right:10px}.freeform-row .freeform-column .freeform-label{font-weight:bold}.freeform-row .freeform-column .freeform-label.freeform-required:after{content:"*";margin-left:5px;color:red}.freeform-row .freeform-column .freeform-input{width:100%;display:block;box-sizing:border-box}.freeform-row .freeform-column .freeform-input[type=checkbox],.freeform-row .freeform-column .freeform-input[type=radio]{width:auto;display:inline;margin-right:5px}.freeform-row .freeform-column .freeform-input.StripeElement{padding:4px 2px;border:1px solid #ccc;height:30px}.freeform-row .freeform-column .freeform-input-only-label{font-weight:normal}.freeform-row .freeform-column .freeform-input-only-label>.freeform-input{display:inline-block;width:auto;margin-right:5px}.freeform-row .freeform-column .freeform-errors,.freeform-row .freeform-column .ff-errors{list-style:none;padding:0;margin:5px 0 0}.freeform-row .freeform-column .freeform-errors>li,.freeform-row .freeform-column .ff-errors>li{color:red}.freeform-row .freeform-column .freeform-instructions{margin:0 0 5px;font-size:13px;color:#aba7a7}.freeform-row .freeform-column.freeform-column-content-align-left{text-align:left}.freeform-row .freeform-column.freeform-column-content-align-left button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-center{text-align:center}.freeform-row .freeform-column.freeform-column-content-align-center button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-right{text-align:right}.freeform-row .freeform-column.freeform-column-content-align-right button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-spread button:first-child{float:left}.freeform-row .freeform-column.freeform-column-content-align-spread button:last-child{float:right}.freeform-row .freeform-column-1{width:8.3333333333%}.freeform-row .freeform-column-2{width:16.6666666667%}.freeform-row .freeform-column-3{width:25%}.freeform-row .freeform-column-4{width:33.3333333333%}.freeform-row .freeform-column-5{width:41.6666666667%}.freeform-row .freeform-column-6{width:50%}.freeform-row .freeform-column-7{width:58.3333333333%}.freeform-row .freeform-column-8{width:66.6666666667%}.freeform-row .freeform-column-9{width:75%}.freeform-row .freeform-column-10{width:83.3333333333%}.freeform-row .freeform-column-11{width:91.6666666667%}.freeform-row .freeform-column-12{width:100%}.ff-form-errors{padding:15px;border:1px solid #f5c6cb;background:#f8d7da;border-radius:5px;color:#721c24}.ff-form-errors>p{margin:0}.freeform-form-has-errors{color:red}</style>

{{ form.renderTag }}

{% if form.pages|length > 1 %}
    <ul class="freeform-pages">
        {% for page in form.pages %}
            <li>
                {% if form.currentPage.index == page.index %}
                    <b>{{ page.label }}</b>
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
                    class: field.type not in ["submit", "signature"] ? "freeform-input" : "",
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

<script>
  var form = document.querySelector('[data-id="{{ form.anchor }}"]');
  if (form) {
    form.addEventListener("freeform-stripe-styling", (event) => {
      event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      }
    })
  }
</script>
```

</div>
<div class="content-block">

## Flexbox
The Flexbox implementation includes a lot more CSS to style it correctly. You can keep this CSS inside the formatting template or move it to your page's `<head></head>` tags of course.

``` twig
<style>button[type=submit].ff-loading{display:inline-flex;flex-wrap:nowrap;align-items:center}button[type=submit].ff-loading:before{content:"";display:block;flex:1 0 11px;width:11px;height:11px;margin-right:10px;border-style:solid;border-width:2px;border-color:transparent transparent #fff #fff;border-radius:50%;animation:ff-loading .5s linear infinite}@keyframes ff-loading{0%{transform:rotate(0)}100%{transform:rotate(1turn)}}.freeform-pages{display:flex;padding:0;margin:0 0 10px;list-style:none}.freeform-pages li{margin:0 10px 0 0}.freeform-row{display:flex;justify-content:space-between;margin:0 -15px}.freeform-row .freeform-column{flex:1 0;padding:10px 0;margin:0 15px;box-sizing:border-box}.freeform-row .freeform-column>.freeform-row:first-child{margin-top:-10px}.freeform-row .freeform-column label{display:block}.freeform-row .freeform-column .input-group-one-line{display:flex;flex-wrap:wrap}.freeform-row .freeform-column .input-group-one-line label{padding-right:10px}.freeform-row .freeform-column .freeform-label{font-weight:bold}.freeform-row .freeform-column .freeform-label.freeform-required:after{content:"*";margin-left:5px;color:red}.freeform-row .freeform-column .freeform-input{width:100%;display:block;box-sizing:border-box}.freeform-row .freeform-column .freeform-input[type=checkbox],.freeform-row .freeform-column .freeform-input[type=radio]{width:auto;display:inline;margin-right:5px}.freeform-row .freeform-column .freeform-input.StripeElement{padding:4px 2px;border:1px solid #ccc;height:30px}.freeform-row .freeform-column .freeform-input-only-label{font-weight:normal}.freeform-row .freeform-column .freeform-input-only-label>.freeform-input{display:inline-block;width:auto;margin-right:5px}.freeform-row .freeform-column .freeform-errors,.freeform-row .freeform-column .ff-errors{list-style:none;padding:0;margin:5px 0 0}.freeform-row .freeform-column .freeform-errors>li,.freeform-row .freeform-column .ff-errors>li{color:red}.freeform-row .freeform-column .freeform-instructions{margin:0 0 5px;font-size:13px;color:#aba7a7}.freeform-row .freeform-column.freeform-column-content-align-left{display:flex;justify-content:flex-start}.freeform-row .freeform-column.freeform-column-content-align-left>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-center{display:flex;justify-content:center}.freeform-row .freeform-column.freeform-column-content-align-center>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-right{display:flex;justify-content:flex-end}.freeform-row .freeform-column.freeform-column-content-align-right>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-spread{display:flex;justify-content:space-between}.freeform-row .freeform-column.freeform-column-content-align-spread>button:not(:first-of-type){margin-left:5px}.ff-form-errors{padding:15px;border:1px solid #f5c6cb;background:#f8d7da;border-radius:5px;color:#721c24}.ff-form-errors>p{margin:0}.freeform-form-has-errors{color:#721c24}</style>

{{ form.renderTag }}

{% if form.pages|length > 1 %}
    <ul class="freeform-pages">
        {% for page in form.pages %}
            <li>
                {% if form.currentPage.index == page.index %}
                    <b>{{ page.label }}</b>
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
            class: field.type not in ["submit", "signature"] ? "freeform-input" : "",
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

<script>
  var form = document.querySelector('[data-id="{{ form.anchor }}"]');
  if (form) {
    form.addEventListener("freeform-stripe-styling", (event) => {
      event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      }
    })
  }
</script>
```

</div>