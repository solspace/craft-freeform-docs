---
title: Craft Freeform 5.x - Passing Dynamic Data to Forms - User Guide
description: A guide to passing dynamic data to form fields.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">5.x</span>
            <span class="pr-v-type pr-latest">✓ Latest</span>
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

<span class="page-section"><a href="/craft/freeform/v5/guides/">User Guides</a></span>

# Passing Dynamic Data to Forms
A common request is how to get dynamic template-level data passed to a Freeform form. Freeform is very capable of handling this thanks to the [Template Overrides](../formatting/#template-overrides) feature available to automatic rendering methods such as `form.render()`, `form.renderTag()` or `field.render()`, depending on how you're loading your Freeform form.



[[toc]]


## Overview
The [Template Overrides](../formatting/#template-overrides) feature allows you to override the value inside Text fields, or even pre-select a default option for multi-option field types (specify option values in this case).

Depending on what you want to do with the data, you might have parts of your form pre-selected or pre-filled out for the user based on where the form is loaded (part of a Craft entry, etc) or which user is logged in (preloading their user data). Or, it might be something you want to silently collect in a hidden field, like the current URL they're at when submitting the form, etc.

### At Form level

``` twig {6}
{{ freeform.form("myFormHandle", {
    fields: {
        "myFieldHandle": {
            label: "My Field Label Override",
            instructions: "My field instructions override.",
            value: "my field value override",
            attributes: {
                container: {
                    "data-my-input-container": true,
                },
                input: {
                    id: "my-field",
                    class: "big-text",
                },
            },
        },
    },
}).render() }}
```

### At Field level

``` twig {4}
{{ field.render({
    label: "My Field Label Override",
    instructions: "My field instructions override.",
    value: "my field value override",
    attributes: {
        container: {
            class: "container",
        },
        input: {
            "data-field": true,
            class: "input-element",
        },
        label: {
            class: "label",
        },
        instructions: {
            class: "instructions",
        },
        error: {
            class: "error-block",
        },
    }
}) }}
```

## Examples
Here's a quick cheatsheet for collecting common bits of information dynamically (though you'll need to make sure the context is correct, e.g. a Craft entry is set in the template to collect entry data, etc).

### Various Overrides
Below is a general example of various overrides:

``` twig
{{ freeform.form("myFormHandle", {
    fields: {
        "hiddenFieldHandle": {
            value: entry.id,
        },
        "stateSelect": {
            value: "AZ",
        },
        "availability": {
            value: ["tue", "thu"],
        },
        "firstName": {
            value: currentUser.name,
        },
        "myCheckbox": {
            value: true,
        },
    },
}).render() }}
```

### Logged in User Data
Include data from the logged-in user in your Freeform fields:

``` twig
{{ freeform.form("myFormHandle", {
    fields: {
        "firstName": {
            value: currentUser.firstName,
        },
        "lastName": {
            value: currentUser.lastName,
        },
        "email": {
            value: currentUser.email,
        },
    },
}).render() }}
```

### Current URL
Include the current URL in a hidden Freeform field:

``` twig
{{ freeform.form("myFormHandle", {
    fields: {
        "currentUrl": {
            value: url(craft.app.request.pathInfo),
        },
    },
}).render() }}
```

### Craft Entry Data
Include data from a given Craft Entry in your Freeform fields:

``` twig
{{ freeform.form("myFormHandle", {
    fields: {
        "entryId": {
            value: entry.id,
        },
        "stateSelect": {
            value: entry.state,
        },
    },
    dynamicNotification: {
        recipients: entry.contactEmail,
        template: "my-notification-template.twig",
    }
}).render() }}
```

### URL Tracking Parameters
Store UTM URL tracking parameters in your form submissions, where `utm_campaign`, `utm_source`, and `utm_medium` are the handle names of [Hidden](../forms/fields/#hidden) fields added to your form layout, and assuming your URL looks something like: `https://mysite.net/contact?utm_campaign=my_campaign&utm_source=google_jobs_apply&utm_medium=organic`

``` twig
{{ freeform.form("myFormHandle", {
    fields: {
        "utm_campaign": {
            value: craft.app.request.getQueryParam('utm_campaign'),
        },
        "utm_source": {
            value: craft.app.request.getQueryParam('utm_source'),
        },
        "utm_medium": {
            value: craft.app.request.getQueryParam('utm_medium'),
        },
    },
}).render() }}
```

### Set Default Options
Set default selected option(s) for your Freeform form fields:

``` twig
{{ freeform.form("myFormHandle", {
    fields: {
        "stateSelect": {
            value: "AZ",
        },
        "availability": {
            value: ["tue", "thu"],
        },
        "myCheckbox": {
            value: true,
        },
    },
}).render() }}
```

### Dynamic Notification Emails
You can also dynamically send email notifications with the [dynamicNotification](../templates/queries/form/#dynamicnotification) parameter:

``` twig
{{ freeform.form("myFormHandle", {
    dynamicNotification: {
        recipients: ["admin@example.com", "support@example.com"],
        template: "my-notification-template.twig"
    }
}).render() }}
```

You could also include data from a given Craft Entry:

``` twig
{{ freeform.form("myFormHandle", {
    dynamicNotification: {
        recipients: entry.contactEmail,
        template: "my-notification-template.twig",
    }
}).render() }}
```

## Passing Freeform data to another Template Function
If you need to pass a Freeform field value (such as an ID) into another Craft function like `craft.entries` or `craft.users` in email notification templates or elsewhere, be sure to specify the Freeform field as `myFreeformFieldHandle.value`. So for example:

``` twig
{{ craft.users.id(myFreeformFieldHandle.value).one().name }}
```

OR

``` twig
{% set item = craft.entries.section('section').id(myFreeformFieldHandle.value).one %}
```
