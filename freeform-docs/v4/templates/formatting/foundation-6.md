---
title: Craft Freeform 4.x - Foundation 6 - Example Formatting Template
description: A Foundation formatting template example.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/templates/formatting/foundation-6/
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

<span class="page-section"><a href="/craft/freeform/v4/templates/formatting/">Formatting Templates</a></span>

# Foundation 6

The following example assumes you're including necessary [Foundation 6](https://get.foundation/) JS and CSS. You can place the additional CSS and JS inside the formatting template or add to your site's CSS / JS files.


[[toc]]


## Preview

![Foundation 6 Example](../../images/formatting/foundation-6.png)

::: video 78LAmvZ0yoA/?start=338
Video: Preview of Formatting Template Examples
:::


## Formatting

``` twig
{# Opening <form> tag #}
{{ form.renderTag }}

{# Display page tabs if Multi-page form #}
{% if form.pages|length > 1 %}
    <ul class="menu freeform-page-tabs">
        {% for page in form.pages %}
            <li class="menu-text{{ form.currentPage.index == page.index ? ' is-active' : '' }}">
                {{ page.label }}
            </li>
        {% endfor %}
    </ul>
    <br />
{% endif %}

{# Display Error banner and general errors if applicable #}
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

{# Render form fields #}
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
                        <label for="{{ field.idAttribute }}-{{ index }}">{{ option.label('freeform')|raw }}</label>

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
                        <label for="{{ field.idAttribute }}-{{ index }}">{{ option.label|t('freeform')|raw }}</label>

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
                        <label for="{{ field.idAttribute }}-{{ index }}">{{ option.label|t('freeform')|raw }}</label>

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
                        class: isCheckbox ? "checkbox" : "",
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

{# Closing </form> tag #}
{{ form.renderClosingTag }}
```


## CSS
The following CSS is a supplemental starting point to get forms appearing robustly.

``` css
button[type=submit].ff-loading {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
}
button[type=submit].ff-loading:before {
    content: "";
    display: block;
    flex: 1 0 11px;
    width: 11px;
    height: 11px;
    margin-right: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: transparent transparent #fff #fff;
    border-radius: 50%;
    animation: ff-loading .5s linear infinite;
}
@keyframes ff-loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(1turn);
    }
}
<style>
input,
textarea,
select {
    margin-bottom: 0 !important;
}
.radio input[type="radio"],
.checkbox input[type="checkbox"] {
    margin: 0;
}
input[type="radio"] + label,
input[type="checkbox"] + label {
    margin: 0 15px 0 3px;
}
.ff-fieldtype-rating input[type="radio"] + label {
    margin: 0 3px 0 0;
}
label.required:after {
    content: "*";
    margin-left: 3px;
    color: red;
}
.freeform-page-tabs {
    border-bottom: 1px solid gray;
}
.freeform-page-tabs li {
    font-weight: normal !important;
    color: gray !important;
}
.freeform-page-tabs li.is-active {
    font-weight: bold !important;
    color: black !important;
    border: 1px solid gray;
    border-bottom: none;
    background: lightgray;
}
.grid-margin-x {
    padding: 7px 0;
}
.errors {
    color: red;
    margin-bottom: 0 !important;
}
.help-text {
    color: gray;
    margin-top: 0;
}
.has-error {
    border-color: red;
}
.submit {
    margin-top: 15px;
}
.submit-align-left {
    text-align: left;
}
.submit-align-left button:not(:first-of-type) {
    margin-left: 5px;
}
.submit-align-center {
    text-align: center;
}
.submit-align-center button:not(:first-of-type) {
    margin-left: 5px;
}
.submit-align-right {
    text-align: right;
}
.submit-align-right button:not(:first-of-type) {
    margin-left: 5px;
}
.submit-align-spread button:first-child {
    float: left;
}
.submit-align-spread button:last-child {
    float: right;
}
.form-rating-field-wrapper label {
    margin-left: 0;
    margin-right: 0;
}
```


## JS
The following JS is a supplemental starting point to handle additional elements in the form.

``` js
// Styling for AJAX responses
document.addEventListener("freeform-ready", function (event) {
    var freeform = event.target.freeform;
    freeform.setOption("errorClassBanner", ["callout", "alert", "form-errors"]);
    freeform.setOption("errorClassList", ["errors"]);
    freeform.setOption("errorClassField", "has-error");
    freeform.setOption("successClassBanner", ["callout", "success"]);
})
// Styling for Stripe Payments field
document.addEventListener("freeform-stripe-styling", function (event) {
    event.detail.base = {
        fontSize: "16px",
        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
    }
})
```


## CDN Links
The following CDN links for Foundation are for v6.7.5, which may no longer be the latest version. Please see official [Foundation documentation](https://get.foundation/sites/docs/installation.html#cdn-links) for latest versions and CDN links.

``` html
<!-- Compressed CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css" crossorigin="anonymous">

<!-- Compressed JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/js/foundation.min.js" crossorigin="anonymous"></script>
```