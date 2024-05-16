---
title: Craft Freeform 1.x - freeform.submissions function
prev: false
next: false
---

::: version /craft/freeform/v5/templates/queries/submissions/
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

# freeform.submissions function

The *freeform.submissions* template function fetches a list of submissions based on some or no criteria.

![Submissions](../images/templates_submission.png)

## Parameters

::: v-pre

* `form` <a href="#param-form" id="param-form" class="docs-anchor">#</a>
	* Handle of the form, e.g. `"composerForm"`, or an array of handles: `["composerForm", "clientSurvey"]`.
	* Use `"not composerForm"` to select all submissions EXCEPT the ones for **Composer Form** form.
* `formId` <a href="#param-formid" id="param-formid" class="docs-anchor">#</a>
	* An ID of the form, or array of ID's, e.g. `[1, 2, 3]`.
	* If you want to select all form submissions EXCEPT the form with an ID of **1**, use `"not 1"`.
* `limit` <a href="#param-limit" id="param-limit" class="docs-anchor">#</a>
	* Supply an `int` to limit the amount of submissions returned.
* `order` <a href="#param-order" id="param-order" class="docs-anchor">#</a>
	* Use any field handle to order by that value and include the `ASC` or `DESC` parameter in the string, e.g. `order: "firstName ASC"`.
* `status` <a href="#param-status" id="param-status" class="docs-anchor">#</a>
	* Specify status to fetch submissions with a certain status.
	* `status: "open"` if you have a status with a handle `open`.

:::

## Usage in Templates

Display a simple list of submissions:

``` twig
{% set submissions = craft.freeform.submissions({
    order: "firstName ASC, lastName DESC",
    status: ["pending", "closed"],
}) %}

{% for submission in submissions %}
    <div>
        {{ submission.title }} - {{ submission.firstName }}
    </div>
{% endfor %}
```

---

Print out all submissions and check if fields exist for the submitted form, before printing them out:

``` twig
{% set submissions = craft.freeform.submissions({
    order: "firstName ASC, lastName DESC",
    status: ["pending", "closed"],
}) %}

{% for submission in submissions %}
    <div>
        <div>{{ submission.title }} - {{ submission.form.name }}</div>

        {% if submission.firstName is not null %}
            {{ submission.firstName.label }}: {{ submission.firstName }}<br>
        {% endif %}

        {% if submission.lastName is not null %}
            {{ submission.lastName.label }}: {{ submission.lastName }}<br>
        {% endif %}
    </div>
{% endfor %}
```

---

To paginate submissions, use Craft's [Pagination](https://craftcms.com/docs/templating/paginate). Here's an example:

``` twig
{% paginate craft.freeform.submissions({limit: 5}) as pageInfo, submissions %}

{% for submission in submissions %}
    <div>
        <div>{{ submission.title }} - {{ submission.form.name }}</div>
    </div>
{% endfor %}

{% if pageInfo.prevUrl %}
    <a href="{{ pageInfo.prevUrl }}">Previous Page</a>
{% endif %}
{% if pageInfo.nextUrl %}
    <a href="{{ pageInfo.nextUrl }}">Next Page</a>
{% endif %}
```

---

To display a single submission (see [Submission object](../template-objects/submission.md) for more info):

``` twig
{% set submissionId = craft.request.segment(5) %}
{% set submission = craft.freeform.submissions({id: submissionId}).first() %}

{% if submission %}
    {% set form = submission.form %}

    <h3>{{ form.name }} - {{ submission.title }}</h3>

    <table class="table table-striped">
        {% for field in submission.fieldMetadata %}
            <tr>
                <th style="width: 20%;">{{ field.label ? field.label : "no-label" }}</th>
                <td>
                    {% set fieldValue = attribute(submission, field.handle).value %}
                    {% if fieldValue is iterable %}
                        <ul>
                            {% for value in fieldValue %}
                                <li>{{ value }}</li>
                            {% endfor %}
                        </ul>
                    {% else %}
                        {{ fieldValue }}
                    {% endif %}
                </td>
            </tr>
        {% endfor %}
    </table>

{% else %}

    <div class="alert alert-danger">
        <p class="lead">
            Sorry, no submission was found.
        </p>
    </div>

{% endif %}
```

---

The following is an example that shows how to render uploaded [Assets](https://craftcms.com/docs/assets) in your form submissions:

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
                            {% set assetId = attribute(submission, field.handle) %}
                            {% set asset = craft.assets.id(assetId).first() %}
                            {% if asset %}
                                {% if asset.kind == "image" %}
                                    <img src="{{ asset.url }}" />
                                {% else %}
                                    <a href="{{ asset.url }}">{{ asset.filename }}</a>
                                {% endif %}
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
