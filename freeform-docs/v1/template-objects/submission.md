---
title: Craft Freeform 1.x - Submission object
prev: false
next: false
---

::: version /craft/freeform/v5/templates/objects/submission/
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

# Submission

## Properties

::: v-pre

* `id` <a href="#prop-id" id="prop-id" class="docs-anchor">#</a>
	* The event's unique ID, which is also the element ID.
* `incrementalId` <a href="#prop-incrementalid" id="prop-incrementalid" class="docs-anchor">#</a>
	* The unique incremental ID of the submission (not element ID).
* `title` <a href="#prop-title" id="prop-title" class="docs-anchor">#</a>
	* The submission's title.
* `dateCreated` <a href="#prop-date-created" id="prop-date-created" class="docs-anchor">#</a>
	* The DateTime object of when the submission was submitted.
* `status` <a href="#prop-status" id="prop-status" class="docs-anchor">#</a>
	* The submission's status color.
	* To get the status name/handle, you'll need to access the `statusModel` model:
		* `statusModel.name` - the submission's status name.
		* `statusModel.handle` - the submission's status handle.
* `formId` <a href="#prop-form-id" id="prop-form-id" class="docs-anchor">#</a>
	* Related form's ID.
* `form` <a href="#prop-form" id="prop-form" class="docs-anchor">#</a>
	* The Freeform_FormModel.
* `fieldMetadata` <a href="#prop-field-metadata" id="prop-field-metadata" class="docs-anchor">#</a>
	* A list containing all fields who store values (doesn't include HTML fields, submit fields, mailing-list fields).
	* Each of the objects is a [Field](field.md) object, and contains the submitted value.
	* You can access all of the field properties for each field specific to the current submissions related Form.
* You can access any field in the submission's form by the field's handle:
	* If you have a field with a handle `firstName`, you can access its value by calling:
		* `{{ submission.firstName }}` or
		* Get its label `{{ submission.firstName.label }}`
			* Any other property such as `placeholder`, `options`, `defaultValue`, etc is also available.
			* Some properties are field type specific. For example, you wouldn't be able to get `rows` from a `select` field, or `options` from a `textarea` field.

:::

## Usage in Templates

Below is a basic example of how to display a list of submissions for a given form:

``` twig
{% set formHandle = 'yourFormHandle' %}
{% set submissions = craft.freeform.submissions({
    form: formHandle,
}) %}

<h3>Submissions for {{ form.name }}</h3>

{% if submissions is empty %}
    <div>There are no submissions</div>
{% else %}
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                {% for field in (submissions|first).fieldMetadata %}
                    <th>{{ field.label }}</th>
                {% endfor %}
            </tr>
        </thead>
        <tbody>
        {% for submission in submissions %}
            <tr>
                <td>{{ submission.id }}</td>
                <td>
                    <a href="{{ siteUrl }}freeform_demo/bootstrap/{{ form.handle }}/submissions/{{ submission.id }}">
                        {{ submission.title }}
                    </a>
                </td>
                {% for field in submission.fieldMetadata %}
                    <td>
                        {% if field.type == "file" %}
                            {% set assetIds = attribute(submission, field.handle).value %}
                            {% if assetIds %}
                                {% for assetId in assetIds %}
                                    {% set asset = craft.assets.id(assetId).first() %}
                                    {% if asset %}
                                        {% if asset.kind == "image" %}
                                            <img src="{{ asset.url }}" class="img-responsive" />
                                        {% else %}
                                            <a href="{{ asset.url }}">{{ asset.filename }}</a>
                                        {% endif %}
                                    {% endif %}
                                {% endfor %}
                            {% endif %}
                        {% else %}
                            {{ attribute(submission, field.handle) }}
                        {% endif %}
                    </td>
                {% endfor %}
            </tr>
        {% endfor %}
        </tbody>
    </table>
{% endif %}
```

---

Below is a basic example of how to display a single view submission, assuming the submission ID is in the third segment:

``` twig
{% set submission = craft.freeform.submissions({
    form: 'youFormHandle',
    id: craft.request.segment(3),
}).first() %}

<h3>
    {{ form.name }} - {{ submission.title }}
    ({{ submission.statusModel.name }})
</h3>

<table class="table table-striped">
{% for field in submission.fieldMetadata %}
    <tr>
        <th style="width: 20%;">{{ field.label }}</th>
        <td>
        {% if field.type == "file" %}
            {% set assetId = attribute(submission, field.handle) %}
            {% set asset = craft.assets.id(assetId).first() %}
            {% if asset %}
                <img src="{{ asset.url }}" />
            {% endif %}
        {% elseif field.type == "dynamic_recipients" %}
            {{ field.value }}
        {% else %}
            {{ attribute(submission, field.handle) }}
        {% endif %}
        </td>
    </tr>
{% endfor %}
</table>
```
