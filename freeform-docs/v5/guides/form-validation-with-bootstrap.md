---
title: Craft Freeform 5.x - Form Validation with Bootstrap - User Guide
description: A guide to using Bootstrap form validation with Freeform.
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

# Form Validation with Bootstrap

[Bootstrap](https://getbootstrap.com) is the most widely used HTML framework. It includes a low level of form validation which you can trigger for your forms. This guide will show you how to implement form validation for your Freeform forms with [Bootstrap validation](https://getbootstrap.com/docs/4.1/components./builder/#validation).


[[toc]]


## Overview

This guide assumes that you have a [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/) based website which includes Bootstrap CSS and JS files.

You can implement Bootstrap validation for your form 1 of 2 ways...


## Inside the Form Builder (CP)
You can add the necessary attributes to your forms with the form builder. Follow the instructions below to see how.

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Open up an existing form inside Freeform and go to the **Form Settings** tab (cog/gear icon).
- At the bottom of the settings tab, there's an area called **Form tag Attributes**. Add `novalidate` in the *Attribute* column and leave the *Value* column empty (or specify `true`). This will disable HTML5 form validation in your web pages and allow Bootstrap to take over. Also add a form class like `needs-validation` so you can then trigger validation on your form by targeting this class as below.
    | Attribute | Value |
    | :--- | :--- |
    | novalidate | |
    | class | needs-validation |

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

- Render your form builder-based form in a Twig template as usual.
    ``` twig
    {{ freeform.form("bootstrapForm").render() }}
    ```

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

- At the bottom of your page, add javascript to attach validation to your form(s). Note the example class `needs-validation`. This needs to match the class name you set on your form inside the form builder in the steps above.
    ``` twig
    <script>
    // Example starter Javascript for disabling form submissions if there are invalid fields
    (function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);
    })();
    </script>
    ```

</div>

<div class="step-finished">Finished!</div>


## At Template Level
You can add the necessary attributes and changes to your forms directly inside your Twig templates with the Freeform `form.renderTag()`. Follow the instructions below to see how.

<div class="step">
<label for="step1b"><input type="checkbox" class="step-check" id="step1b">

### Step 1

</label>

- Add the `novalidate` attribute to your form using the `renderTag()` method. This disables HTML5 validation.
- Add a class like `needs-validation` to your form using the `renderTag()` method. You'll target this with JS later. Your code now should look something like this:
    ``` twig {2}
    {% set form = freeform.form("bootstrapForm", {
        formAttributes: { "novalidate": true, 'class': 'needs-validation' } 
    }) %}
    {{ form.renderTag({}) }}
    ...
    {{ form.renderClosingTag }}
    ```
    ::: tip
    You can also set the class for the form with the `class` parameter.
    :::

</div>

<div class="step">
<label for="step2b"><input type="checkbox" class="step-check" id="step2b">

### Step 2

</label>

- To set field level attributes, you can apply them directly to your form field inputs or `field.render`. Usually it's more convenient to set these inside the Freeform control panel form builder area, but you can still control these at the template level if you want. Your template code might look something like this:
    ``` twig {2,9-15}
    {% set form = freeform.form("bootstrapForm", {
        formAttributes: { "novalidate": true, 'class': 'needs-validation' } 
    }) %}
    {{ form.renderTag({}) }}
        {% for row in form %}
        <div>
            {% for field in row %}
            <div>
                {% set attr = {} %}
                {% if field.required %}
                    {% set attr = attr|merge({'required':true}) %}
                {% endif %}
                {{ field.render({
                    inputAttributes: attr
                }) }}
            </div>
            {% endfor %}
        </div>
        {% endfor %}
    {{ form.renderClosingTag }}
    ```

</div>

<div class="step">
<label for="step3b"><input type="checkbox" class="step-check" id="step3b">

### Step 3

</label>

- At the bottom of your page, add javascript to attach validation to your form(s). Note the example class `needs-validation`. This needs to match the class name you set on your form in the steps above.
    ``` twig
    <script>
    // Example starter Javascript for disabling form submissions if there are invalid fields
    (function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);
    })();
    </script>
    ```

</div>

<div class="step-finished">Finished!</div>
