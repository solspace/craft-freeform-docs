---
title: Craft Freeform 4.x - Line Breaks in Textarea Fields - User Guide
description: A guide to converting line breaks in textarea fields to BR when displaying submission data.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/guides/
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

<span class="page-section">User Guides</span>

# Line Breaks in Textarea Fields

Textarea fields store data in the database as newlines. When displaying submission data in [email notifications](../overview/email-notifications.md) or on the front end with a [Submissions query](../templates/queries/submissions.md), the newlines will not be respected and render as a single clump of text with Twig.


[[toc]]


## Instructions

To get textarea fields to display correctly with the line breaks, you can use the `nl2br` Twig filter:

```
{{ myFieldHandle|nl2br }}
```

```
{{ submission[field.handle]|nl2br }}
```

### Email Notifications
How this may look when displaying submission data in an [email notification](../overview/email-notifications.md) template when iterating through all fields:

``` twig{4-6}
<p>Submitted on: {{ dateCreated|date('l, F j, Y \\a\\t g:ia') }}</p>
<ul>
{% for field in allFields %}
    {% if field.type == "textarea" %}
        {{ field.value|nl2br }}
    {% else %}
        <li>{{ field.label }}: {{ field.valueAsString }}</li>
    {% endif %}
{% endfor %}
</ul>
```

### Submissions on Front End
How this may look when displaying submission data for a single submission [on the front end](../templates/queries/submissions.md) (assuming the ID is in 3rd segment) when iterating through all fields:

``` twig{11-13}
{% set submissionId = craft.app.request.segment(3) %}
{% set submission = craft.freeform.submissions({id: submissionId}).one() %}

{% if submission %}
    <h3>{{ submission.title }}</h3>
    <table class="table table-striped">
    {% for field in submission %}
        <tr>
            <th>{{ field.label ? field.label : "no-label" }}</th>
            <td>
            {% if field.type == "textarea" %}
                {{ submission[field.handle]|nl2br }}
            {% else %}
                {{ submission[field.handle] }}
            {% endif %}
            </td>
        </tr>
    {% endfor %}
    </table>
{% endif %}
```