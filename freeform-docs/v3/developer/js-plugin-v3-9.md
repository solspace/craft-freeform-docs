---
title: Craft Freeform 3.x - Developer Javascript Plugin
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/js-plugin/
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

<span class="page-section">Developer</span>

# Freeform Javascript Plugin

If you wish to extend the capabilities of Freeform's front-end Javascript plugin, please refer to the documentation below:

::: tip
**You're viewing the v3.9 version of these docs**. To switch to the v3.10 docs, [click here to view the revised v3.10 documentation](./js-plugin.md) that shows usage of the improved Freeform Javascript plugin.
:::


[[toc]]



## Getting the Plugin Instance

Let's assume you have a form tag with an ID in your HTML like so:

```html
<form id="my-form">
   ...
</form>
```

You can get the plugin instance in two ways, whichever is more convenient to you:

Once you have the form element, you can either use the static `::getInstance()` method on the `Freeform` plugin class, like so:

``` js
const form = document.getElementById("my-form");
const freeform = Freeform.getInstance(form);
```

Or you can access the Freeform JS Plugin instance via the element's `freeform` property, like so:

``` js
const form = document.getElementById("my-form");
const freeform = form.freeform;
```

To hook into the Freeform JS plugin once the plugin has been initialised your form element has to be listening to the `freeform-ready` event:

``` js
const form = document.getElementById("my-form");
form.addEventListener("freeform-ready", function (event) {
    const freeform = event.target.freeform;
    // your custom code here
})
```

## When to call your Custom Scripts

When setting form scripts to be loaded inside forms, the Freeform JS plugin instance will be accessible to scripts that are called inside the footer. Load your custom script in the footer and call the Freeform JS plugin instance directly from the form object, like so:

``` js
  const form = document.getElementById("my-form");
  form.freeform.setOption("successBannerMessage", "This is a custom success message");
```

If you have set the form scripts to be loaded inside the footer, then it's best to attach an event listener to the form object which will execute once the Freeform JS plugin instance has finished initializing. Use this script before the rest of the footer scripts, but after the form has been rendered, like so:

``` js
  const form = document.getElementById("my-form");
  form.addEventListener("freeform-ready", function (event) {
    event.target.freeform.setOption("successBannerMessage", "This is a custom success message");
  });
```

## Loading Freeform JS manually

If you wish to manually load the Freeform JS elsewhere in your template (rather than having Freeform automatically insert it inside the Freeform form or in the page footer), be sure to select the `None` option for the [Freeform Javascript Insertion Location](../setup/settings.md#general-settings) setting. Then, you'll need to add the `freeform.loadFreeformScripts()` function to your template where you'd like it to insert the JS and pass it the form handle.

Here's a simple example of how this may look in your template:

``` twig {5}
{% set form = craft.freeform.form('myForm') %}

{{ form.render }}

{{ craft.freeform.loadFreeformScripts(form) }}
```

If you happen to be caching your form, the randomly generated form anchor would be incorrect. To get around this, you'll need to also insert a small script that replaces the form anchor with the current one (similar to how you would have to replace the CSRF token, etc). You would need to place the `freeform.loadFreeformScripts()` function anywhere after the `cache` tag closes.

``` twig {9-14}
{% set form = craft.freeform.form('myForm') %}

{% cache %}
  <div class="container">
    {{ form.render }}
  </div>
{% endcache %}

<script>
  // Replace all form anchors with the current one. If you have more than one Freeform form on the page, you would have to use ID's to find the form you wish to run this replacement on.
  document.querySelector('form[data-id]').dataset.id = "{{ form.anchor }}";
</script>

{{ craft.freeform.loadFreeformScripts(form) }}
```

## Adding callbacks

Once you have the plugin instance, you can attach callbacks to it to perform the things you intend to perform:

### On Submit callback

To perform something when the form is being submitted and decide whether it should finish submitting or stop, use `::addOnSubmitCallback(callback)` method. It lets you add a callback function to the stack of callback functions which will run before the form is submitted. Returning `false` in the callback, will prevent the form from being submitted. The callback function receives two arguments - the form element and the freeform plugin's options.

``` js
const form = document.getElementById('my-form');
form.addEventListener('freeform-ready', function(event) {
  const freeform = event.target.freeform;
  freeform.addOnSubmitCallback((formElement, options, isBackButtonPressed) => {
    if (isBackButtonPressed) {
      // Skip any processes if the back button is pressed
      return true;
    }

    return formElement.dataset.myDataItem !== 'not-what-im-looking-for';
  });
});
```

### AJAX callbacks

If the form has *AJAX* enabled, a couple more callbacks can be added to the form.

``` js
const form = document.getElementById('my-form');
form.addEventListener('freeform-ready', function(event) {
  const freeform = event.target.freeform;
  freeform.addOnSuccessfulAjaxSubmit((event, form, response) => {
    // Do something on a successful ajax submit
  })
});
```

``` js
const form = document.getElementById('my-form');
form.addEventListener('freeform-ready', function(event) {
  const freeform = event.target.freeform;
  freeform.addOnFailedAjaxSubmit((event, form, response) => {
    // Do something on a failed ajax submit
  })
});
```

``` js
const form = document.getElementById('my-form');
form.addEventListener('freeform-ready', function(event) {
  const freeform = event.target.freeform;
  freeform.addOnAfterAjaxSubmit((event, form, response) => {
    // Do something after every ajax submit is completed, regardless of it being successful or not
  })
});
```

### Plugin Options

The Freeform JS Plugin has several options that let you override the way it works. Mainly, the options are for rendering AJAX form success or failure messages.

You can override the options by using the `::setOption(name, value)` method:

``` js
const form = document.getElementById('my-form');
form.addEventListener('freeform-ready', function(event) {
  const freeform = event.target.freeform;

  // Enable AJAX. This happens automatically if you enable AJAX via the form builder
  freeform.setOption('ajax', true);

  // Attach a custom function that handles message removal, if you need custom logic.
  freeform.setOption('removeMessages', function() {
    // This is bound to the Freeform instance
    this.form.querySelectorAll('.ff-errors').remove();
    this.form.querySelectorAll('.ff-form-success').remove();
  });
});
```

The available options are:

* `successBannerMessage` - a string containing the success message you want to see if the AJAX form has been successfully posted.
* `errorBannerMessage` - a string containing the error message you want to see if the AJAX form has failed.
* `errorClassBanner` - a string containing the class name of the banner that contains form error messages.
* `errorClassList` - a string containing the class name of the error message list element under invalid fields.
* `errorClassField` - a string containing the class name of input elements that contain errors.
* `successClassBanner` - a string containing the class name of the banner that contains the success message.
* `removeMessages` - a function that handles removing all error and success messages from a form.
* `renderSuccess` - a function that creates and displays the success banner.
* `renderFormErrors` - a function that creates and displays the form error message banner. Receives `messages` as the first argument.
* `renderFieldErrors` - a function that creates and displays the field error messages. Receives `messages` as the first argument.

Examples:

``` js
const form = document.getElementById('my-form');
form.addEventListener('freeform-ready', function(event) {
  const freeform = event.target.freeform;

  freeform.setOption('successBannerMessage', 'My custom success message');
  freeform.setOption('errorBannerMessage', 'My custom error message');

  freeform.setOption('errorClassBanner', 'my-custom-error-banner');
  freeform.setOption('errorClassList', 'my-custom-errors-list');
  freeform.setOption('errorClassField', 'this-field-has-errors');
  freeform.setOption('successClassBanner', 'my-custom-success-banner');

  freeform.setOption('removeMessages', function() {
    this.form.querySelectorAll('.my-custom-error-banner').remove();
    this.form.querySelectorAll('.my-custom-success-banner').remove();
    this.form.querySelectorAll('.my-custom-errors-list').remove();
  });

  freeform.setOption('renderSuccess', function() {
    const successMessage = document.createElement("div");
    successMessage.classList.add("my-custom-success-banner");
    successMessage.appendChild(document.createTextNode("Form submitted successfully"));

    this.form.insertBefore(successMessage, this.form.childNodes[0]);
  });

  freeform.setOption('renderFormErrors', function(errors) {
    const errorBlock = document.createElement("div");
    errorBlock.classList.add("my-custom-errors-banner");

    const paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode("Form contains errors!"));
    errorBlock.appendChild(paragraph);

    if (errors.length) {
      const errorsList = document.createElement("ul");
      for (let messageIndex = 0; messageIndex < errors.length; messageIndex++) {
        const message = errors[messageIndex];
        const listItem = document.createElement("li");

        listItem.appendChild(document.createTextNode(message));
        errorsList.appendChild(listItem);
      }

      errorBlock.appendChild(errorsList);
    }

    this.form.insertBefore(errorBlock, this.form.childNodes[0]);
  });

  freeform.setOption('renderFieldErrors', function(errors) {
    for (const key in errors) {
      if (!errors.hasOwnProperty(key) || !key) {
        continue;
      }

      const messages = errors[key];
      const errorsList = document.createElement("ul");
      errorsList.classList.add("my-custom-errors-list");

      for (let messageIndex = 0; messageIndex < messages.length; messageIndex++) {
        const message = messages[messageIndex];
        const listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(message));
        errorsList.appendChild(listItem);
      }

      const inputList = this.form.querySelectorAll("*[name=" + key + "], *[name='" + key + "[]']");
      for (let inputIndex = 0; inputIndex < inputList.length; inputIndex++) {
        const input = inputList[inputIndex];
        input.classList.add("this-field-has-errors");
        input.parentElement.appendChild(errorsList);
      }
    }
  });
});
```

## Stripe Payments Events

To style the Freeform Stripe credit card fields, you'll need to add a listener for the `freeform-stripe-styling` event like this (example for Bootstrap):

``` js {2-7}
const form = document.getElementById('my-form');
  form.addEventListener("freeform-stripe-styling", function (event) {
    event.detail.base = {
  	  fontSize: "16px",
  	  fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
    }
  })
});
```

## Date Picker Events

The Freeform [Date & Time](../overview/fields.md) field comes packed with a built-in, optional [flatpickr](https://flatpickr.js.org/) instance. Check out the [Date Picker Events](./datepicker.md) documentation for full customization options of the _flatpickr_ instance.