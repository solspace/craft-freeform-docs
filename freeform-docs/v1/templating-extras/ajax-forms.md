---
title: Craft Freeform 1.x - AJAX Forms
prev: false
next: false
---

::: version /craft/freeform/v5/templates/ajax-forms/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">1.x</span>
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

# Submitting a form using AJAX

To submit a form using AJAX - pass the serialized form data as the payload when posting to any front-end URL.

::: warning
This solution currently will not work with [multi-page](../overview/multi-page-forms.md) forms.
:::

## Return values

The AJAX request must be a `post` request and it will return a JSON object with the following values:

### On successful single-page form post

* `success` - A boolean value of `true`
* `finished` - A boolean value of `true`
* `returnUrl` - The return URL specified for the form
* `submissionId` - An `int` value of the submission ID if one was generated

### On form error

* `success` - A boolean value of `false`
* `finished` - A boolean value of `false`
* `errors` - An object of field handles as keys and each containing an array of error messages.
	* An example, if the form's `firstName` and `lastName` fields were required, but not filled out, the returning object would be:

``` json
"errors": {
	"firstName": ["This field is required"],
	"lastName": ["This field is required"]
}
```


## Usage in Templates

Here's a fully working Bootstrap form AJAX example:

``` html
<script>
  var form = document.getElementById('my-form');
  form.addEventListener('submit', function (event) {
    let data = new FormData(form);
    let request = new XMLHttpRequest();

    // Safari hack - remove empty file upload inputs
    // Otherwise an ajax call with empty file uploads causes immense lag
    if (navigator.userAgent.indexOf("Safari") > -1) {
      for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type === "file") {
          if (form.elements[i].value === "") {
            var elem = form.elements[i];
            data.delete(elem.name);
          }
        }
      }
    }

    var method = form.getAttribute("method");
    var action = form.getAttribute("action");

    request.open(method, action ? action : window.location.href, true);
    request.setRequestHeader("Cache-Control", "no-cache");

    // Set the AJAX headers
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    request.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");

    request.onload = () => {
      if (request.status === 200) {
        var response = JSON.parse(request.response);
        var success = response.success;
        var finished = response.finished;
        var actions = response.actions ? response.actions : [];
        var errors = response.errors;
        var formErrors = response.formErrors;
        var honeypot = response.honeypot;

        if (!actions.length) {
          if (success && finished) {
            // Reset the form so that the user may enter fresh information
            form.reset();

            // ==================================
            // Perform something after the
            // form saves successfully
            // ==================================

          } else if (errors || formErrors) {

            // ==================================
            // Do something with the errors here
            // ==================================

            console.error(errors, formErrors);
          }
        }

        // ==================================
        // Honeypot update logic
        // ==================================
        if (honeypot) {
          var honeypotInput = form.querySelector("input[name^=freeform_form_handle]");
          if (honeypotInput) {
            honeypotInput.setAttribute("name", honeypot.name);
            honeypotInput.setAttribute("id", honeypot.name);
            honeypotInput.value = honeypot.hash;
          }
        }
      } else {
        console.error(request);
      }
    };

    request.send(data);

    event.stopPropagation();
    event.preventDefault();
    return false;
  });
</script>
```
