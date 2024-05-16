---
title: Craft Freeform 4.x - Submission Limits
description: If you need to set limits on the number of submissions a form may receive or who can submit the form, a few options are available.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/submissions/overview/#submission-limits
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

<span class="page-section"><a href="/craft/freeform/v4/overview/">Overview</a></span>

# Submission Limits <Badge type="pro" text="Pro" />

<div class="hero-lead">

If you need to set limits on the number of submissions a form may receive or who can submit the form, a few options are available:

</div>

<div class="menu-grid">
    <a href="#per-user" class="menu-box">
        <img src="../../../../images/icons/user.png" alt="Requirements">
        <div class="menu-grid-text">
            <h3>Per User</h3>
            <p>Limit the number of times a specific user can submit the form.</p>
        </div>
    </a>
    <a href="#per-form" class="menu-box">
        <img src="../../../../images/icons/stop.png" alt="Installation">
        <div class="menu-grid-text">
            <h3>Per Form</h3>
            <p>Set a maximum number of submissions a form may receive.</p>
        </div>
    </a>
    <a href="#stop-after-date" class="menu-box">
        <img src="../../../../images/icons/hourglass.png" alt="Updating">
        <div class="menu-grid-text">
            <h3>Stop After Date</h3>
            <p>Prevent new submissions of the form after a specified date.</p>
        </div>
    </a>
</div>


[[toc]]


## Per User <Badge type="pro" text="Pro" />

Inside the [Validation](./form-builder.md#validation) tab (lock icon) in the [form builder](./form-builder.md), an option exists to allow you to limit the number of times a specific user can submit the form. Look for this setting:

- **Limit Form Submission Rate**
	- *Do not limit*
    - *Logged in Users only (no limit)*
    - *Once per Cookie only*
    - *Once per IP/Cookie combo*
    - *Once per logged in Users only*
    - *Once per logged in User or Guest Cookie only*
    - *Once per logged in User or Guest IP/Cookie combo*
    - *Once per Email Address only* <Badge type="feature" text="4.0.24+" />
        - This will check any *Email* field type for a matching email address (across all Email fields if using more than one in the same form).

### Templating <Badge type="feature" text="4.0.9+" />

Freeform includes validation to prevent duplicate submissions (when the user tries to submit the form again), but if you wish to prevent users from even being able to see the form (and display an error/notice in its place), you can use `submissionLimitReached` ([form object](../templates/objects/form.md)) as a conditional. It's a bool variable, which will be `true` if the form has the **Limit Form Submission Rate** setting enabled and the user has already submitted the form.

``` twig {4-5}
{# Replace 'myForm' with your form handle. #}
{% set form = craft.freeform.form("myForm") %}

{# Check if user has already submitted the form #}
{% if form.submissionLimitReached %}

    {# Hide form and display error message #}
    <p class="alert">You've already submitted this form!</p>

{% else %}
    
    {# Display form if not yet submitted by the user #}
    {{ form.render }}

{% endif %}
```


## Per Form <Badge type="pro" text="Pro" />

Freeform includes the ability to set a limit on the maximum number of submissions a form may receive, and the reject any additional ones. You can also include a template-based condition check and display an alternate message without ever presenting the form to the user in the event it's reached it's limit.

### Templating

The key is applying the `submissionLimit` parameter to the [fForm query](../templates/queries/form.md) and feeding it a number value. This could be hardcoded or you could grab this value from somewhere else such as another element or global variable, etc. Here's an example of what that may look like:

``` twig {4-8}
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


## Stop After Date

Inside the [Validation](./form-builder.md#validation) tab (lock icon) in the [form builder](./form-builder.md), an option exists to allow you to prevent new submissions of the form after the specified date.