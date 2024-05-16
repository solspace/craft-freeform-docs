---
title: Craft Freeform 2.x - Passing Dynamic Data to Forms
prev: false
next: false
---

::: version /craft/freeform/v5/guides/passing-dynamic-data-to-forms/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">2.x</span>
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

# Passing Dynamic Data to Forms
A common request is how to get dynamic template-level data passed to a Freeform form. Freeform is very capable of handling this thanks to the [overrideValues](../template-functions/freeform.form.md#param-overridevalues) parameter available to `freeform.form()`, `form.render()` or `form.renderTag()`, depending on how you're loading your Freeform form.

Essentially, it allows you to override the value of a Freeform field at the template level, like so:

``` twig{4-8}
{{ craft.freeform.form("composerForm", {
  labelClass: "form-label",
  inputClass: "form-control",
  overrideValues: {
    firstName: currentUser.name,
    myHiddenFieldHandle: entry.id,
    anotherField: "something else",
  }
}).render() }}
```

The parameter allows you to override the value inside Text fields, or even pre-select a default option for multi-option field types (specify option values in this case). E.g.:

* `hiddenFieldHandle: entry.id` - pull in an entry ID from a Craft Entry.
* `stateSelect: "AZ"` - pre-select **Arizona** state in a State select field.
* `availability: ["tue", "thu"]` - pre-check **Tuesday** and **Thursday** checkbox options in a checkbox group field type.
* `firstName: currentUser.name` - pull in the currently logged in user's name into the Name field.
* `myCheckbox: true` - pre-check a checkbox.

Depending on what you're wanting to do with the data, you might have parts of your form pre-selected or pre-filled out for the user based on where the form is loaded (part of a Craft entry, etc) or which user is logged in (preloading their user data). Or, it might be something you want to silently collect in a hidden field, like the current URL they're at when submitting the form, etc.

You can also dynamically send email notifications with the [dynamicNotification](../template-functions/freeform.form.md#param-dynamicnotification) parameter:

``` twig
dynamicNotification: {
  recipients: ["admin@example.com", "support@example.com"],
  template: "test.html"
}
```

Here's a quick cheatsheet for collecting common bits of information dynamically (though you'll need to make sure the context is correct, e.g. a Craft entry is set in the template in order to collect entry data):


[[toc]]


### Logged in User Data
Include data from the logged in user in Freeform form fields:

``` twig
overrideValues: {
  firstName: currentUser.firstName,
  lastName: currentUser.lastName,
  email: currentUser.email,
}
```

### Current URL
Include the current URL in a hidden Freeform field:

``` twig
overrideValues: {
  currentUrl: url(craft.app.request.pathInfo),
}
```

### Entry Data
Include data from a given Craft Entry in Freeform form fields:

``` twig
overrideValues: {
  entryId: entry.id,
  stateSelect: entry.state,
},
dynamicNotification: {
  recipients: entry.contactEmail,
  template: "test.html",
}
```

### Manually Pre-define Options
Manually override field options in your Freeform form:

``` twig
overrideValues: {
  availability: ["tue", "thu"],
  stateSelect: "AZ",
  myCheckbox: true,
},
dynamicNotification: {
  recipients: ["admin@example.com", "support@example.com"],
  template: "test.html",
}
```

### Passing Freeform data to another Template Function
If you need to pass a Freeform field value (such as an ID) into another Craft function like `craft.entries` or `craft.users` in email notification templates or elsewhere, be sure to specify the Freeform field as `myFreeformFieldHandle.value`. So for example:

``` twig
{{ craft.users.id(myFFfieldHandle.value).one().name }}
```

OR

``` twig
{% set item = craft.entries.section(’section').id(myFFfieldHandle.value).one %}
```
