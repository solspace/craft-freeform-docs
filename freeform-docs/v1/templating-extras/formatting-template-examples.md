---
title: Craft Freeform 1.x - Formatting Template Examples
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
            <span class="pr-v-v">1.x</span>
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

Freeform includes several example [formatting templates](../overview/formatting-templates.md) to choose from. You can use these as a starting point and adjust them to suit your needs, or simply create your own from scratch. The following formatting templates are located in the **/freeform/templates/\_defaultFormTemplates/** directory. If you wish to create your own modified version, just copy the code below, or the template file (ex: **foundation.html**) and paste it into your Formatting Templates directory in the specified Craft Templates directory (ex: **/craft/templates/freeform/**), and rename it to whatever you like.


[[toc]]


## Bootstrap

The following example assumes you're including necessary Bootstrap JS and CSS:

``` twig
<style>
    label.required:after {
        content:"*";
        color:#d00;
        margin-left:5px;
    }
    .submit-align-left {
        text-align:left;
    }
    .submit-align-right {
        text-align:right;
    }
    .submit-align-center {
        text-align:center;
    }
    .submit-align-center button:not(:first-of-type),
    .submit-align-left button:not(:first-of-type),
    .submit-align-right button:not(:first-of-type) {
        margin-left:5px;
    }
    .submit-align-spread button:first-child {
        float:left;
    }
    .submit-align-spread button:last-child {
        float:right;
    }
</style>

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
        {{ "There was an error submitting this form"|t }}
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
            {% set columnClass = columnClass ~ " col-lg-" ~ width ~ " col-xs-12" %}

            {% if field.type == "submit" %}
                {% set columnClass = columnClass ~ " submit-align-" ~ field.position %}
            {% endif %}

            {% if field.type == "checkbox_group" %}

                <div class="{{ columnClass }}">
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
                                {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "radio_group" %}

                <div class="{{ columnClass }}">
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
                                {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "dynamic_recipients" and field.showAsRadio %}

                <div class="{{ columnClass }}">
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
                                    value="{{ loop.index0 }}"
                                    {{ option.checked ? "checked" : "" }}
                                />
                                {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "submit" %}

                <div class="{{ columnClass }}">
                    {{ field.render() }}
                </div>

            {% else %}

                <div class="{{ columnClass }}">
                    {{ field.render({
                        class: isCheckbox ? "checkbox" : "form-control",
                        instructionsClass: "help-block",
                        instructionsBelowField: true,
                        labelClass: (field.required ? " required" : ""),
                        errorClass: "help-block",
                    }) }}
                </div>

            {% endif %}
        {% endfor %}
    </div>
{% endfor %}

{{ form.renderClosingTag }}
```

## Foundation

The following example assumes you're including necessary Foundation JS and CSS:

``` twig
<style>
    label.required:after {
        content:"*";
        color:#d00;
        margin-left:5px;
        font-size:12px;
        font-family:serif;
        font-weight:700;
    }
    .submit {
        margin-top:15px;
    }
    .submit-align-left {
        text-align:left;
    }
    .submit-align-right {
        text-align:right;
    }
    .submit-align-center {
        text-align:center;
    }
    .submit-align-center button:not(:first-of-type),
    .submit-align-left button:not(:first-of-type),
    .submit-align-right button:not(:first-of-type) {
        margin-left:5px;
    }
    .submit-align-spread button:first-child {
        float:left;
    }
    .submit-align-spread button:last-child {
        float:right;
    }
</style>

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
        {{ "There was an error submitting this form"|t }}
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

            {% if field.type == "checkbox_group" %}

                <div class="{{ columnClass }}">
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
                                {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "radio_group" %}

                <div class="{{ columnClass }}">
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
                                {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "dynamic_recipients" and field.showAsRadio %}

                <div class="{{ columnClass }}">
                    {{ field.renderLabel({
                        labelClass: (field.required ? " required" : ""),
                        instructionsClass: "help-text",
                    }) }}

                    {% for option in field.options %}
                        <div class="radio">
                            <label>
                                <input type="radio"
                                    name="{{ field.handle }}"
                                    value="{{ loop.index0 }}"
                                    {{ option.checked ? "checked" : "" }}
                                />
                                {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "submit" %}

                <div class="{{ columnClass }}">
                    {{ field.render({ class: "button" }) }}
                </div>

            {% else %}

                <div class="{{ columnClass }}">
                    {{ field.render({
                        class: isCheckbox ? "checkbox" : "form-control",
                        instructionsClass: "help-text",
                        instructionsBelowField: true,
                        labelClass: (field.required ? " required" : ""),
                    }) }}
                </div>

            {% endif %}
        {% endfor %}
    </div>
{% endfor %}

{{ form.renderClosingTag }}
```

## Materialize

The following example assumes you're including necessary Materialize JS and CSS:

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
        {{ "There was an error submitting this form"|t }}
    </div>
{% endif %}


<div class="row {{ form.customAttributes.rowClass }}">
    {% for row in form %}
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

                <div class="{{ columnClass }}" style="margin-bottom: 20px;">

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
                            <label for="{{ form.hash ~ field.handle ~ option.value }}">{{ option.label|raw }}</label>
                        </p>
                    {% endfor %}

                    {{ field.renderInstructions }}
                    {{ field.renderErrors }}
                </div>

            {% elseif field.type == "radio_group" %}

                <div class="{{ columnClass }}" style="margin-bottom: 20px;">

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
                            <label for="{{ form.hash ~ field.handle ~ option.value }}">{{ option.label|raw }}</label>
                        </p>
                    {% endfor %}

                    {{ field.renderInstructions }}
                    {{ field.renderErrors }}
                </div>

            {% elseif field.type == "dynamic_recipients" and field.showAsRadio %}

                <div class="{{ columnClass }}" style="margin-bottom: 20px;">

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
                                   value="{{ loop.index0 }}"
                                    {{ option.value in field.value ? "checked" : "" }}
                            />
                            <label for="{{ form.hash ~ field.handle ~ option.value }}">{{ option.label|raw }}</label>
                        </p>
                    {% endfor %}

                    {{ field.renderInstructions }}
                    {{ field.renderErrors }}
                </div>

            {% elseif field.type == "textarea" %}

                <div class="{{ columnClass }}">
                    {{ field.renderInput({
                        class: 'materialize-textarea'
                    }) }}
                    {{ field.renderLabel }}

                    {{ field.renderInstructions }}
                    {{ field.renderErrors }}
                </div>

            {% elseif field.type == "checkbox" %}

                <div class="{{ columnClass|replace('input-field', '') }}">

                    {{ field.renderInput }}
                    {{ field.renderLabel({
                        instructionsClass: "help-block",
                        errorClass: "help-block",
                    }) }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "mailing_list" %}

                <div class="{{ columnClass|replace('input-field', '') }}">

                    {{ field.renderInput|replace('<label>', '')|replace('</label>', '')|replace(field.label, '')|raw }}
                    {{ field.renderLabel({
                        instructionsClass: "help-block",
                        errorClass: "help-block",
                    }) }}

                    {{ field.renderInstructions() }}
                    {{ field.renderErrors() }}
                </div>

            {% elseif field.type == "submit" %}

                <div class="{{ columnClass }}">
                    {{ field.render({
                        class: "btn btn-large waves-effect waves-light"
                    }) }}
                </div>

            {% elseif field.type == "html" %}

                <div class="{{ columnClass }}">
                    {{ field.renderInput }}
                </div>

            {% elseif field.type == "file" %}

                <div class="{{ columnClass|replace('input-field', '') }} file-field input-field">
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

            {% else %}

                <div class="{{ columnClass }}">
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
    {% endfor %}
</div>

{{ form.renderClosingTag }}
```

## Grid

``` twig
<style>.freeform-pages{padding:0;margin:0 0 10px;list-style:none}.freeform-pages:after{content:"";display:table;clear:both}.freeform-pages li{float:left;margin:0 10px 0 0}.freeform-row{display:block;margin:0 -15px}.freeform-row:after{content:"";display:table;clear:both}.freeform-row .freeform-column{display:block;padding:10px 15px;float:left;box-sizing:border-box}.freeform-row .freeform-column:after{content:"";display:table;clear:both}.freeform-row .freeform-column label{display:block}.freeform-row .freeform-column .freeform-label{font-weight:bold}.freeform-row .freeform-column .freeform-label.freeform-required:after{content:"*";margin-left:5px;color:red}.freeform-row .freeform-column .freeform-input{width:100%;display:block;box-sizing:border-box}.freeform-row .freeform-column .freeform-input[type=checkbox],.freeform-row .freeform-column .freeform-input[type=radio]{width:auto;display:inline;margin-right:5px}.freeform-row .freeform-column .freeform-input-only-label{font-weight:normal}.freeform-row .freeform-column .freeform-input-only-label>.freeform-input{display:inline-block;width:auto;margin-right:5px}.freeform-row .freeform-column .freeform-errors{list-style:none;padding:0;margin:5px 0 0}.freeform-row .freeform-column .freeform-errors>li{color:red}.freeform-row .freeform-column .freeform-instructions{margin:0 0 5px;font-size:13px;color:#ABA7A7}.freeform-row .freeform-column.freeform-column-content-align-left{text-align:left}.freeform-row .freeform-column.freeform-column-content-align-left button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-center{text-align:center}.freeform-row .freeform-column.freeform-column-content-align-center button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-right{text-align:right}.freeform-row .freeform-column.freeform-column-content-align-right button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-spread button:first-child{float:left}.freeform-row .freeform-column.freeform-column-content-align-spread button:last-child{float:right}.freeform-row .freeform-column-1{width:8.33333%}.freeform-row .freeform-column-2{width:16.66667%}.freeform-row .freeform-column-3{width:25%}.freeform-row .freeform-column-4{width:33.33333%}.freeform-row .freeform-column-5{width:41.66667%}.freeform-row .freeform-column-6{width:50%}.freeform-row .freeform-column-7{width:58.33333%}.freeform-row .freeform-column-8{width:66.66667%}.freeform-row .freeform-column-9{width:75%}.freeform-row .freeform-column-10{width:83.33333%}.freeform-row .freeform-column-11{width:91.66667%}.freeform-row .freeform-column-12{width:100%}.freeform-form-has-errors{color:red}</style>

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
        {{ "There was an error submitting this form"|t }}
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
            <div class="{{ columnClass }}">
                {{ field.render({
                    class: field.type != "submit" ? "freeform-input" : "",
                    labelClass: "freeform-label" ~ (field.inputOnly ? " freeform-input-only-label" : "") ~ (field.required ? " freeform-required" : ""),
                    errorClass: "freeform-errors",
                }) }}
            </div>
        {% endfor %}
    </div>
{% endfor %}

{{ form.renderClosingTag }}


## Flexbox

<style>.freeform-pages{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0;margin:0 0 10px;list-style:none}.freeform-pages li{margin:0 10px 0 0}.freeform-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0 -15px}.freeform-row .freeform-column{-webkit-box-flex:1;-ms-flex:1 0 0;flex:1 0 0;padding:10px 0;margin:0 15px;box-sizing:border-box}.freeform-row .freeform-column label{display:block}.freeform-row .freeform-column .freeform-label{font-weight:bold}.freeform-row .freeform-column .freeform-label.freeform-required:after{content:"*";margin-left:5px;color:red}.freeform-row .freeform-column .freeform-input{width:100%;display:block;box-sizing:border-box}.freeform-row .freeform-column .freeform-input[type=checkbox],.freeform-row .freeform-column .freeform-input[type=radio]{width:auto;display:inline;margin-right:5px}.freeform-row .freeform-column .freeform-input-only-label{font-weight:normal}.freeform-row .freeform-column .freeform-input-only-label>.freeform-input{display:inline-block;width:auto;margin-right:5px}.freeform-row .freeform-column .freeform-errors{list-style:none;padding:0;margin:5px 0 0}.freeform-row .freeform-column .freeform-errors>li{color:red}.freeform-row .freeform-column .freeform-instructions{margin:0 0 5px;font-size:13px;color:#ABA7A7}.freeform-row .freeform-column.freeform-column-content-align-left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.freeform-row .freeform-column.freeform-column-content-align-left>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.freeform-row .freeform-column.freeform-column-content-align-center>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.freeform-row .freeform-column.freeform-column-content-align-right>button:not(:first-of-type){margin-left:5px}.freeform-row .freeform-column.freeform-column-content-align-spread{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.freeform-row .freeform-column.freeform-column-content-align-spread>button:not(:first-of-type){margin-left:5px}.freeform-form-has-errors{color:red}</style>

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
        {{ "There was an error submitting this form"|t }}
    </div>
{% endif %}

{% for row in form %}
    <div class="freeform-row {{ form.customAttributes.rowClass }}">
        {% for field in row %}
            {% set columnClass = "freeform-column " ~ form.customAttributes.columnClass %}
            {% if field.type == "submit" %}
                {% set columnClass = columnClass ~ " freeform-column-content-align-" ~ field.position %}
            {% endif %}
            <div class="{{ columnClass }}">
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
