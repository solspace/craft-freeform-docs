---
title: Craft Freeform 4.x - Freeform API
description: To get any Freeform object, all you have to do is access the right service and use the methods provided within. You can access Freeform services by getting the Freeform plugin instance and then accessing the services directly.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/developer/api/
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

<span class="page-section"><a href="/craft/freeform/v4/developer/">Developer</a></span>

# Freeform API


[[toc]]


## Getting Freeform Forms and Submissions inside your Controller

To get any Freeform object, all you have to do is access the right service and use the methods provided within. You can access Freeform services by getting the Freeform plugin instance and then accessing the services directly:

``` php
$plugin = Freeform::getInstance();

// Most commonly used services

// Solspace\Freeform\Services\FormsService
$plugin->forms;

// Solspace\Freeform\Services\SubmissionsService
$plugin->submissions;

// Solspace\Freeform\Services\HoneypotService
$plugin->honeypot;
```

### Finding Forms

To get a specific form, one would access the `FormsService` and ask for the form providing an ID or a handle:

``` php
// Access a form by ID
$form = Freeform::getInstance()->forms->getFormById($myFormId);
if ($form) {
  // Do something with the form here
}

// Access a form by handle
$form = Freeform::getInstance()->forms->getFormByHandle($myFormHandle);

// Get all forms
$forms = Freeform::getInstance()->forms->getAllForms();
```

### Finding Submissions

There are many ways to fetch a submission. You might use the `SubmissionsService` and fetch a submissions by ID or a token:

``` php
$submission = Freeform::getInstance()->submissions->getSubmissionById($myId);
$submission = Freeform::getInstance()->submissions->getSubmissionByToken($myToken);
```

Or you might use the `SubmissionQuery` to find more than just one submission that matches your criteria:

``` php
use Solspace\Freeform\Elements\Submission;

$submissions = Submission::find()
  ->formId($myFormId)
  ->limit(3)
  ->all();
```


## Refreshing Honeypot with JS Enhancement for Cached pages

When using Freeform's [built-in Honeypot spam protection](../overview/spam-protection.md) paired with the [JS Enhancement](../overview/spam-protection.md#javascript-enhancement) for the Honeypot, there may be times when you need to load a fresh Honeypot instance for your form. Usually this is the case when using cached templates or using _Vue.js_ or _React.js_ to render forms.

In such cases, one should ask for a fresh honeypot using the `HoneypotService`.

``` php
// Get the form model
$formModel = Freeform::getInstance()->forms->getFormById($myFormId);
if (!$formModel) {
  throw new Exception("Did not find a form");
}

// Get the Form object from the model
$form = $formModel->getForm();

// Get a fresh honeypot
$honeypot = Freeform::getInstance()->honeypot->getHoneypot($form);

// Return the honeypot to your front-end view and use javascript to replace the values
return $this->render(
  'my-plugin/my-view',
  ['honeypot' => $honeypot]
);
```

Then in your view file, you can either add a script that handles refreshing the honeypot, or if you're using _Vue.js_ or _React.js_, you could pass those new values to the form somewhere in your flow.

``` html
<script>
  // Locate the form
  var form = document.getElementById("my-form");

  // Find the honeypot input
  var honeypotInput = form.querySelector("input[name^=freeform_form_handle_]");

  // Override its values with fresh honeypot values
  honeypotInput.setAttribute("name", "{{ honeypot.name }}");
  honeypotInput.setAttribute("id", "{{ honeypot.name }}");
  honeypotInput.value = "{{ honeypot.hash }}";

  // Your form is now ready to be submitted.
</script>
```