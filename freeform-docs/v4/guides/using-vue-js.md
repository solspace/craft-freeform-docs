---
title: Craft Freeform 4.x - Using Vue.js - User Guide
description: A guide to get Vue.js working with Freeform.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/guides/
Freeform
:::

::: version /craft/freeform/v4/headless/vuejs/
the Vue.js implementation
:::

<div id="breadcrumbs">
    <a href="/">Docs</a>
    <div class="breadcrumb-cms-wrapper">
        <a href="/craft/">Craft</a>
        <ul class="breadcrumb-cms">
            <li class="breadcrumb-switch">Switch to</li>
            <li><a href="/expressionengine/">ExpressionEngine</a></li>
        </ul>
    </div>
    <div class="breadcrumb-product-wrapper">
        <a href="/craft/freeform/">Freeform</a>
        <ul class="breadcrumb-product">
            <li class="breadcrumb-switch">Switch to</li>
            <li><a href="/craft/calendar/">Calendar</a></li>
            <li><a href="/craft/express-forms/">Express Forms</a></li>
        </ul>
    </div>
    <div class="breadcrumb-version-wrapper">
        <a href="/craft/freeform/v4/">4.x</a>
        <ul class="breadcrumb-version">
            <li class="breadcrumb-switch">Switch to</li>
            <li><a href="/craft/freeform/v5/">5.x</a></li>
            <li><a href="/craft/freeform/v3/">3.x</a></li>
            <li><a href="/craft/freeform/v2/">2.x<span class="pr-v-type pr-retired">Retired</span></a></li>
            <li><a href="/craft/freeform/v1/">1.x<span class="pr-v-type pr-retired">Retired</span></a></li>
        </ul>
    </div>
    <a href="../">User Guides</a>
</div>

<span class="page-section">User Guides</span>

# Using Vue.js

::: warning
This is now deprecated as of Freeform 4.1+. Please see the improved approach and examples available on the [Vue.js Implementation](../headless/vuejs/) guide.
:::


## Instructions

To use Freeform with [Vue.js](https://vuejs.org/) you'll need access to the `form` instance, which will provide you with the form's `hash` for identification. When building out the form's state manually, handling the validation in *Vue.js* and doing an AJAX request for saving the form, be sure to:

* Set the request headers to use Craft's AJAX request:
  ```
  request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  request.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
  ```
* Set the request payload to include `action`, and have it point to `freeform/submit`, which will handle form validation, submission saving and any other processes.
* If using **Encrypted Payload**, add `freeform_payload` to the request with the form instance's `payload` property.
* Add `formHash` to the request payload that contains the form instance's `hash` property. This is for identifying the target form's ID and page and other information.
* If you're using the Freeform built-in [Honeypot](../overview/spam-protection.md#freeform-honeypot) feature, be sure to add the correct honeypot data to the request's payload as well.
  * If you're using the [Javascript Enhancement](../overview/spam-protection.md#javascript-enhancement) for the Freeform honeypot, you'll need to access the honeypot service and provide your form. In twig it is: `craft.freeform.getHoneypot(myFormInstance)`, which will return a honeypot object that has the honeypot name and value.
  * If you're using the basic honeypot, just provide the honeypot name (`freeform_form_handle` by default) with an empty value.

Below is a simple example of a basic form rendered with *Vue.js*:

``` html
{# Load the form for later access #}
{% set form = craft.freeform.form('myForm') %}

{# Load Vue.js #}
<script src="https://unpkg.com/vue"></script>

{# Add some minor styles #}
<style>
    .errors { color: red; }
    label { display: block; font-weight: bold; }
    form div { margin-bottom: 10px; }
</style>

<div id="app">
    {# Create a form and attach an onSubmit method #}
    <form v-on:submit="onSubmit">
        <div>
            <label>First Name</label>
            <input type="text" v-model="firstName" v-on:blur="() => validate('firstName')"/>
            <ul v-if="getErrors('firstName').length" class="errors">
                <li v-for="error in getErrors('firstName')">
                    ${ error }
                </li>
            </ul>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" v-model="lastName" v-on:blur="() => validate('lastName')"/>
            <ul v-if="getErrors('lastName').length" class="errors">
                <li v-for="error in getErrors('lastName')">
                    ${ error }
                </li>
            </ul>
        </div>
        <div>
            <label>Message</label>
            <textarea v-model="message" v-on:blur="() => validate('message')"></textarea>
            <ul v-if="getErrors('message').length" class="errors">
                <li v-for="error in getErrors('message')">
                    ${ error }
                </li>
            </ul>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>

<script>
  new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
      firstName: '',
      lastName: '',
      message: '',
      errors: [],
    },
    methods: {
      getErrors: function (property) {
        const errors = [];
        if (!this.errors.length) {
          return errors;
        }
        for (let i = 0; i < this.errors.length; i++) {
          if (this.errors[i].key === property) {
            errors.push(this.errors[i].message);
          }
        }
        return errors;
      },
      validate: function (property) {
        if (!property) {
          this.errors = [];
        } else {
          this.errors = this.errors.filter((item) => item.key !== property);
        }
        if ((!property || property === 'firstName') && !this.firstName) {
          this.errors.push({ key: 'firstName', message: 'This field is required' });
        }
        if ((!property || property === 'lastName') && !this.lastName) {
          this.errors.push({ key: 'lastName', message: 'This field is required' });
        }
        if ((!property || property === 'message') && !this.message) {
          this.errors.push({ key: 'message', message: 'This field is required' });
        }
      },
      onSubmit: function (evt) {
        this.validate();
        if (this.errors.length) {
          evt.stopPropagation();
          evt.preventDefault();
          return false;
        }
        const form = evt.target;
        const data = new FormData(form);
        const request = new XMLHttpRequest();

        // Add Honeypot field
        data.append('freeform_form_handle', '');

        // Add action which handles freeform validation
        data.append('action', 'freeform/submit');

        // Add the form's payload (when using Encrypted Payload)
        data.append('freeform_payload', '{{ form.payload }}');

        // Add the form's hash, so that it gets recognized by the form service
        data.append('formHash', '{{ form.hash }}');

        // Add the CSRF token if it's enabled for the site
        data.append(
          '{{ craft.app.config.general.csrfTokenName }}',
          '{{ craft.app.request.csrfToken }}',
        );

        // Append the data
        data.append('firstName', this.firstName);
        data.append('lastName', this.lastName);
        data.append('message', this.message);

        // Create a request
        request.open('POST', window.location.href, true);
        request.setRequestHeader("Cache-Control", "no-cache");

        // Add the AJAX headers specific to Craft CMS
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");

        // Attach the response handler callback
        request.onload = () => {
          if (request.status === 200) {
            const response = JSON.parse(request.response);
            const { success, finished, errors, formErrors } = response
            if (success && finished) {
              // Reset the form so that the user may enter fresh information
              form.reset();
              alert('success');
            } else if (errors || formErrors) {
              alert('error');
              console.error(errors, formErrors);
            }
          } else {
            console.error(request);
          }
        };

        // Send the request
        request.send(data);

        evt.stopPropagation();
        evt.preventDefault();
        return false;
      },
    },
  });
</script>
```