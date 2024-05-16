---
title: Craft Freeform 4.x - Submission object
description: The Submission object allows you to retrieve data from your form submissions.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/templates/objects/submission/
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

# Submission object

The `submission` object allows you to retrieve data from your form submissions.


[[toc]]


## Properties

### `id`
The event's unique ID, which is also the element ID.

### `incrementalId`
The unique incremental ID of the submission (not element ID).

### `title`
The submission's title.

### `dateCreated`
The DateTime object of when the submission was submitted.

### `author`
The author of the submission, when submitted by a logged in user. Includes access to all aspects of user data such as `submission.author.id` and `submission.author.fullName`, etc.

### `statusModel`
The status of the submission. Includes access to all aspects of the status information:

- `statusModel.name` - the submission's status name.
- `statusModel.handle` - the submission's status handle.
- `statusModel.color` - the submission's status color.

### `formId`
The ID of the form the submission belongs to.

### `form`
The Freeform_FormModel.

### `ip`
The IP address of the submitter, if [collection of IP addresses is enabled](../../overview/form-builder.md#form-settings).

### `token`
The token generated for the submission. A common use-case for tokens would be when you want to have a more secure URL for accessing and displaying submission data, or allowing users to [delete their own submission](../queries/deleting-submissions-by-token.md) and not requiring any login, etc.

Also required if you wish to allow [editing of submissions on front end](../../overview/submission-editing.md).

### `submission[field.handle]`
A way to access all submitted field values, excluding HTML fields, submit fields, email-marketing fields. You can automate accessing all field data by using markup like this:

``` twig
<ul>
	{% for field in submission %}
		<li>{{ field.label }}: {{ submission[field.handle] }}</li>
	{% endfor %}
</ul>
```

You can access any field in the submission's form by the field's handle. If you have a field with a handle `firstName`, you can access its value by calling `submission.firstName` or get its label `submission.firstName.label`. Any other property such as `placeholder`, `options`, `defaultValue`, etc is also available.

Some properties are field type specific. For example, you wouldn't be able to get `rows` from a `select` field, or `options` from a `textarea` field.

::: guide ../../../guides/total-number-of-submissions-for-form/
Need to display the total number of submissions for the form?
:::


## Usage in Templates

### Basic List
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
				{% for field in (submissions|first) %}
					<th>{{ field.label }}</th>
				{% endfor %}
			</tr>
		</thead>
		<tbody>
		{% for submission in submissions %}
			<tr>
				<td>{{ submission.id }}</td>
				<td>
					<a href="{{ siteUrl }}freeform-demo/bootstrap/{{ form.handle }}/submissions/{{ submission.id }}">
						{{ submission.title }}
					</a>
				</td>
				{% for field in submission %}
					<td>
					{% if field.type == "file" %}
						{% set assetIds = submission[field.handle].value %}
						{% if assetIds %}
							{% for assetId in assetIds %}
								{% set asset = craft.assets.id(assetId).one() %}
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
						{{ submission[field.handle] }}
					{% endif %}
					</td>
				{% endfor %}
			</tr>
		{% endfor %}
		</tbody>
	</table>
{% endif %}
```

### Basic Single
Below is a basic example of how to display a single view submission, assuming the submission ID is in the third segment:

``` twig
{% set submission = craft.freeform.submissions({
	form: 'yourFormHandle',
	id: craft.app.request.segment(3),
}).one() %}

<h3>
	{{ form.name }} - {{ submission.title }}
	({{ submission.statusModel.name }})
</h3>

<table class="table table-striped">
{% for field in submission %}
	<tr>
		<th style="width: 20%;">{{ field.label }}</th>
		<td>
		{% if field.type == "file" %}
			{% set assetId = submission[field.handle] %}
			{% set asset = craft.assets.id(assetId).one() %}
			{% if asset %}
				<img src="{{ asset.url }}" />
			{% endif %}
		{% elseif field.type == "dynamic_recipients" %}
			{{ field.value }}
		{% else %}
			{{ submission[field.handle] }}
		{% endif %}
		</td>
	</tr>
{% endfor %}
</table>
```