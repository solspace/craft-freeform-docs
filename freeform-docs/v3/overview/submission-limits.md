---
title: Craft Freeform 3.x - Submission Limits
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/submissions/overview/#submission-limits
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

<span class="page-section">Overview</span>

# Submission Limits <Badge type="pro" text="Pro" />
If you need to set limits on the number of submissions a form may receive or who can submit the form, a few options are available.


[[toc]]



<div class="content-block">

## Per User <Badge type="pro" text="Pro" />

Inside the [Validation](./form-builder.md#validation) tab (lock icon) in the [form builder](./form-builder.md), an option exists to allow you to limit the number of times a user can submit the form. Look for this setting:

- **Limit Form Submission Rate**
	- *Do not limit*
    - *Logged in Users only (no limit)* <Badge type="feature" text="3.13+" />
    - *Once per Cookie only*
    - *Once per IP/Cookie combo*
    - *Once per logged in Users only* <Badge type="feature" text="3.13+" />
    - *Once per logged in User or Guest Cookie only* <Badge type="feature" text="3.13+" />
    - *Once per logged in User or Guest IP/Cookie combo* <Badge type="feature" text="3.13+" />

</div>
<div class="content-block">

## Per Form <Badge type="pro" text="Pro" /> <Badge type="feature" text="3.12+" />

Freeform includes the ability to set a limit on the maximum number of submissions a form may receive, and the reject any additional ones. You can also include a template-based condition check and display an alternate message without ever presenting the form to the user in the event it's reached it's limit.

The key is applying the `submissionLimit` parameter to the [freeform.form](../template-functions/freeform.form.md) function and feeding it a number value. This could be hardcoded or you could grab this value from somewhere else such as another element or global variable, etc. Here's an example of what that may look like:

``` twig
{# Replace 'myForm' with your form handle. #}
{% set form = craft.freeform.form("myForm") %}

{# Specify the submission limit here (or grab this value from somewhere else such as another element or global variable, etc) #}
{% set submissionLimit = 50 %}

{# This optional conditional checks if the form has reached its submission limit set above #}
{% if craft.freeform.submissionCount(form) >= submissionLimit %}

    <p class="alert">Submission Limit Reached!</p>

{% else %}

    <p class="notice">
        This form has a limit of {{ submissionLimit }} submissions.
        There are currently {{ craft.freeform.submissionCount(form) }} submissions for this form.
    </p>

    {{ form.render({
        submissionLimit: submissionLimit,
    }) }}

{% endif %}
```

</div>
<div class="content-block">

## Stop Submissions After Date <Badge type="feature" text="3.13+" />

Inside the [Validation](./form-builder.md#validation) tab (lock icon) in the [form builder](./form-builder.md), an option exists to allow you to prevent new submissions of the form after the set date.

</div>