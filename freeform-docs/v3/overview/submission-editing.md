---
title: Craft Freeform 3.x - Submission Editing
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/submissions/overview/#submission-editing
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

# Submission Editing <Badge type="pro" text="Pro" />

Freeform allows you to edit submissions via the front end templates as well. Currently, this feature has no user/author check, and requires you use/provide the `submission.token` to work (as opposed to the ID). A future version will likely include ability to check on authors, etc. The editing uses the same `freeform.form` function, but knows you're in **edit mode** when you feed the `submissionToken` parameter a valid value.

::: warning
There are currently some limitations with this feature. Please note that:
- Not all types of forms can be intuitively edited (e.g. [Payment](../integrations/payments/README.md) forms, some complex ones, etc).
- Editing [Payment](../integrations/payments/README.md) forms will NOT update payment details, but instead will make a new submission/charge.
- Editing forms with [Element Connections](../integrations/elements/README.md) will NOT update the corresponding element, but just create a new one instead (so currently no editing of user profile data, etc).
:::


[[toc]]



<div class="content-block">

## Overview

When linking to the form edit, you might use something like this inside the `freeform.submissions` function:

``` twig
{% if currentUser and currentUser.admin %}
    <a href="{{ siteUrl }}page/{{ form.handle }}/edit/{{ submission.token }}">
        {{ "Edit"|t("freeform") }}
    </a>
{% endif %}
```

Then in your template that includes the `freeform.form`, be sure that the `submissionToken` parameter is included and checking the URL for a value:

``` twig{1,5}
{% set submissionToken = craft.app.request.segment(4) %}

{% set form = craft.freeform.form('myForm', {
    returnUrl: "{{ siteUrl }}page/{{ form.handle }}/submission/{{ submission.id }}/success",
    submissionToken: submissionToken|default(null),
}) %}
```

You can also check out the example in the [demo templates](../setup/demo-templates.md) if you wish to see it in action.

### Suppression of Notifications and more

You can apply the `suppress` parameter to the [freeform.form](../template-functions/freeform.form.md) and `render` functions, which allows you to suppress email notifications, API integrations and [Element Connections](../integrations/elements/) for a form by passing an object of suppressions you wish to enable, typically used for editing submissions, e.g.:

* `adminNotifications: true` - suppress [Admin notifications](../overview/email-notifications.md#admin-notifications)
* `dynamicRecipients: true` - suppress [Dynamic Recipient notifications](../overview/email-notifications.md#dynamic-recipients)
* `submitterNotifications: true` - suppress [Submitter email notifications](../overview/email-notifications.md#user-submitter-notifications)
* `api: true` - suppress [CRM](../integrations/crm/README.md) and [Email Marketing](../integrations/email-marketing/README.md) integrations
* `connections: true` - suppress [Element Connections](../integrations/elements/README.md)
* `payments: true` - suppress [Payment](../integrations/payments/README.md) integrations

You can also just set this to `true` (`suppress: true`) to enable all suppressions at once.

### Examples

``` twig {5-10}
{% set form = craft.freeform.form("myForm", {
	id: "myform",
	class: "form-class",
    submissionToken: submissionToken|default(null),
    suppress: {
        adminNotifications: true,
        dynamicRecipients: true,
        submitterNotifications: true,
        api: true
    }
}) %}
```

OR

``` twig {5}
{% set form = craft.freeform.form("myForm", {
	id: "myform",
	class: "form-class",
    submissionToken: submissionToken|default(null),
    suppress: true
}) %}
```

</div>