---
title: Craft Freeform 5.x - Settings object
description: The Settings object allows you to access all of the form's settings assigned to it in the form builder.
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

<span class="page-section"><a href="/craft/freeform/v5/templates/">Templating</a></span>

# Settings object <Badge type="feature" text="New in 5.0+" />

The Settings object allows you to access all of the form's settings assigned to it in the [form builder](../../forms/builder/).


[[toc]]


## Properties

### `name`
Outputs the name of the form.

### `handle`
Outputs the handle of the form.

### `type`
The type of form, e.g. `Solspace\Freeform\Form\Types\Regular`.

### `formattingTemplate`
The formatting template assigned to the form inside the form builder, e.g. `basic-dark/index.twig`.

### `description`
Outputs the description of the form.

### `color`
Outputs the color hex for the form, e.g. `#135BD7`.

### `submissionTitle`
Outputs the submission title code (unparsed) configured in the form builder.

### `storeData`
A bool variable, which will be `1` if the form is set to store submitted data.

### `defaultStatus`
The default [status](../../configuration/settings/#statuses) ID to be assigned to new form submissions, e.g. `2`.

### `collectIpAddresses`
A bool variable, which will be `1` if the form is set to collect IP addresses.

### `allowUsersToOptIn`
A bool variable, which will be `1` if the form is set to allow users to choose whether the form submission is saved to the database.

### `optInCheckbox`
The field name of the Opt-in Checkbox, if applicable.

### `ajax` <Badge type="feature" text="Renamed in 5.0+" />
A bool variable, which will be `1` if the form has the built-in AJAX setting enabled.

### `showProcessingSpinner` <Badge type="feature" text="Renamed in 5.0+" />
A bool variable, which will be `1` if the form has the **Show Processing Indicator on Submit** setting enabled.

### `showProcessingText` <Badge type="feature" text="Renamed in 5.0+" />
A bool variable, which will be `1` if the form has the **Show Processing Text** setting enabled.

### `processingText` <Badge type="feature" text="Renamed in 5.0+" />
Outputs the custom processing text configured for your form inside the form builder, e.g. `Processing...`.

### `successBehavior`
The chosen behavior to happen after handling the successful submit of the form. Options are:

- `reload` - Reload form with a Success banner above
- `load-success-template` - Replace form with a Success message
- `redirect-return-url` - Redirect to another URL

### `returnUrl`
Outputs the return URL configured for the form when using the **Redirect to another URL** success behavior.

### `successTemplate`
Outputs the [success template](../../configuration/settings/#success-templates) configured for the form when using the **Replace form with a Success message** success behavior, e.g. `my-success-template.twig`.

### `successMessage`
Outputs the custom success message configured for the form when using the **Reload form with a Success banner above** success behavior.

### `errorMessage`
Outputs the custom error message configured for the form inside the form builder.


### `duplicateCheck` <Badge type="feature" text="Renamed and Revised in 5.0+" />
Outputs the option chosen for the **Duplicate Check** setting. You can run a conditional check on this with the following:

- `NULL` - Do not limit (default - no limits applied)
- `no_limit_logged_in_users_only` - Logged in Users Only - No Limit
- `once_per_logged_in_user_only` - Logged in Users Only - Once per Form
- `once_per_email` - Anyone - Once per Email Address
- `once_per_user_or_cookie` - Anyone - Once per Logged in User or Guest Cookie
- `once_per_user_or_ip_cookie` - Anyone - Once per Logged in User or Guest IP or Cookie

### `stopSubmissionsAfter`
The date in which this form will no longer accept new submissions, if configured, e.g. `08/17/2023`.
