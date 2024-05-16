---
title: Craft Freeform 3.x - freeform.submissions
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/templates/queries/submissions/
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

# freeform.submissions function

The *freeform.submissions* template function fetches a list of submissions based on some or no criteria.

![Submissions](../images/templates_submission.png)


[[toc]]



<div class="content-block">

## Parameters

* `id` <a href="#param-id" id="param-id" class="docs-anchor">#</a>
	* An ID of a submission, or array of ID's, e.g. `[54, 62, 68]`.
* `form` <a href="#param-form" id="param-form" class="docs-anchor">#</a>
	* Handle of the form, e.g. `"myForm"`.
* `formId` <a href="#param-formid" id="param-formid" class="docs-anchor">#</a>
	* An ID of the form, e.g. `2`.
* `limit` <a href="#param-limit" id="param-limit" class="docs-anchor">#</a>
	* Supply an `int` to limit the amount of submissions returned.
* `orderBy` <a href="#param-orderby" id="param-orderby" class="docs-anchor">#</a>
	* Use any field handle to order by that value and include the `ASC` or `DESC` parameter in the string, e.g. `orderBy: "firstName ASC"` or `orderBy: "rand()"`.
* `status` <a href="#param-status" id="param-status" class="docs-anchor">#</a>
	* Specify status to fetch submissions with a certain status.
	* `status: "open"` if you have a status with a handle `open`.
* `token` <a href="#param-token" id="param-token" class="docs-anchor">#</a>
	* Specify a token to more securely fetch a specific submission.
	* A common use-case would be when you want to display submission data in a success page, by loading the newly created token in the return URL.
	* Can be used in conjunction with or in place of `id`.
* `fieldSearch` <a href="#param-field-search" id="param-field-search" class="docs-anchor">#</a>
    * Specify an object of field handles as keys and search parameters as values to search the submissions that contain specific field values.
      * Please use the original field handle name for searches, e.g. if you reused a field named `firstName` and renamed it to just `name`, make sure your search query uses `firstName`.
    * You can use a wildcard `*` to search for values that contain different values. For example `*car` or `doc*`.
    * When searching on fields that store data as arrays (including Email fields), please wrap wildcards (`*`) around the values, e.g. `email: "*name@domain.com*"`.
    * See [searching example](#searching-example) below.

</div>
<div class="content-block">

## Usage in Templates

Display a simple list of submissions:

``` twig
{% set submissions = craft.freeform.submissions({
  orderBy: "firstName ASC, lastName DESC",
  status: ["pending", "closed"],
}) %}

{% for submission in submissions %}
  <div>
    {{ submission.title }} - {{ submission.firstName }}
  </div>
{% endfor %}
```

Print out all submissions and check if fields exist for the submitted form, before printing them out:

``` twig
{% set submissions = craft.freeform.submissions({
  orderBy: "firstName ASC, lastName DESC",
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

To paginate submissions, use Craft's [Pagination](https://craftcms.com/docs/3.x/dev/tags.html#paginate). Here's an example:

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

To display a single submission (see [Submission object](../template-objects/submission.md) for more info):

``` twig
{% set submissionId = craft.app.request.segment(5) %}
{% set submission = craft.freeform.submissions({id: submissionId}).one() %}

{% if submission %}
  {% set form = submission.form %}

  <h3>{{ form.name }} - {{ submission.title }}</h3>

  <table class="table table-striped">
    {% for field in submission %}
      <tr>
        <th style="width: 20%;">{{ field.label ? field.label : "no-label" }}</th>
        <td>
          {% set fieldValue = submission[field.handle].value %}
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


The following is an example that shows how to render uploaded [Assets](https://craftcms.com/docs/3.x/assets.html) in your form submissions:

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
          <a href="{{ siteUrl }}freeform_demo/bootstrap/{{ form.handle }}/submissions/{{ submission.id }}">
            {{ submission.title }}
          </a>
        </td>
        {% for field in submission %}
          <td>
            {% if field.type == "file" %}
              {% set assetId = submission[field.handle] %}
              {% set asset = craft.assets.id(assetId).one() %}
              {% if asset %}
                {% if asset.kind == "image" %}
                  <img src="{{ asset.url }}" />
                {% else %}
                  <a href="{{ asset.url }}">{{ asset.filename }}</a>
                {% endif %}
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

#### Loop Through Field Options

If you wish to loop through multi-option fields such as Selects, Checkbox Groups, Radios, etc, to show all options and then highlight which options were selected, you can use `submission[field.handle].options` to loop through the values and `option.checked` to indicate which options were selected.

``` twig
<ul>
{% for option in submission[field.handle].options %}
    <li{% if option.checked %} class="selected"{% endif %}>{{ option.value }}</li>
{% endfor %}
</ul>
```

If you wish to omit the empty options, you can do something like this instead:


``` twig
{#
    Create empty array
    Add the checked items to array
    Only show field label and values if array|length
#}
{% set opts = [] %}
{% for option in item[field.handle].options %}
    {% if option.checked %}{% set opts = opts|merge([option.value]) %}{% endif %}
{% endfor %}
{% if opts|length %}
    {{ field.label }}:
    {% for key in opts %}{{ key }}, {% endfor %}
{% endif %}
```

#### Searching Example

Only select submissions that have `Bill` as the first name and has their favorite food end with `pie`.

``` twig {4-7}
{% set submissions = craft.freeform.submissions({
  orderBy: "firstName ASC, lastName DESC",
  status: ["pending", "closed"],
  fieldSearch: {
    firstName: "Bill",
    favoriteFood: "*pie",
  }
}) %}

{% for submission in submissions %}
  <div>
    <div>{{ submission.title }} - {{ submission.form.name }}</div>
  </div>
{% endfor %}
```

</div>