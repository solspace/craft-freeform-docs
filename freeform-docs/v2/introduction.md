---
title: Craft Freeform 2.x - Introduction
prev: false
next: false
---

::: version /craft/freeform/v5/getting-started/
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

# Introduction to Freeform

This page provides you with an overview of how Freeform works without going into to much detail about each feature so it's easy to digest. You can of course click the links to learn more about each feature. Be sure to check out the [Getting Started](./getting-started.md) documentation after reading this page.

Freeform centers itself around the idea of letting admins and/or clients enjoy the experience of building and managing simple or complex forms in an intuitive interface that lets you see a live preview of the forms you're building. We call this [Composer](./overview/forms-composer.md), where almost everything is at your fingertips as it aims to stay out of your way and let you do as much as possible without having to move around to other areas in the control panel. At the same time, Freeform is very powerful and flexible, so there is also a wide variety of other features, settings and options.

::: videolink https://craftquest.io/courses/managing-forms-with-solspace-freeform
Watch the **Managing Forms with Solspace Freeform** Course tutorial on CraftQuest!
:::


[[toc]]


## Forms

When [creating forms](./overview/forms-composer.md), you sometimes need to look at things backwards. It often helps to prepare fields, email notification templates and other things BEFORE beginning to create your form. However, you don't have to do it this way. Freeform Composer allows you to do this directly inside the Composer form interface as well (but limited approach for it). Freeform also comes with several common fields preinstalled for you, so that should get you started.

Be sure to review the settings in the **Form Settings** area to adjust things such as form name and handle, formatting template, default status and return URL.

Freeform also allows for true [multi-page forms](./overview/multi-page-forms.md), and has its own built in [spam protection](./overview/spam-protection.md) service.


## Fields

Freeform uses its own set of [fields and field types](./overview/fields-field-types.md). Fields are global and available to all forms, but they can also be overwritten per form. This allows you to save time reusing existing fields when making other forms, but also gives you flexibility to make adjustments to them when needed. So to clarify, you can create fields with labels and options that are common to all forms, but also override those on each form.

Fields can be created and managed in the main field creation area (**Freeform > Fields > New Field**) and can also be created directly within the *Composer* interface as well.

The following field types are available in the Lite edition of Freeform:

* **Text** - a simple input field.
* **Textarea** - a simple multi-line input field.
* **Email** - an input field that is flagged in Freeform to expect an email address value as well as possibility for receiving email notifications.
* **Number** - an input field that is validated to contain numbers only, based on several configuration options.
* **Hidden** - a hidden field.
* **Select** - a select dropdown menu field.
* **Checkbox** - a single checkbox field.
* **Checkbox Group** - a group of checkboxes.
* **Radio Group** - a group of radio options.
* **File Upload** - a single file upload field, using [Craft Assets](https://docs.craftcms.com/v3/assets.html).
* **Dynamic Recipients** - a select dropdown menu field that contains protected email addresses and labels for each.
* **Confirmation** - a special field type that allows you to force a user to enter a matching value for another field (e.g. "Confirm Email Address").

Additionally, you may also insert **HTML** areas into your form for you to type or paste your code into. The HTML will also be live parsed in the Composer layout area.

The *Freeform Pro* edition includes [additional field types](./overview/fields-field-types.md#pro-field-types):

* **Date & Time** - a complex date and/or time field. Can be used as Date only, Time only, or both.
* **Phone** - an input field that is validated to contain phone numbers only, based on pattern configured.
* **Rating** - a special field that allows for star ratings using Freeform's built in CSS and JS.
* **Regex** - an input field that is validated based on the specified regex pattern (e.g. `/^[a-zA-Z0-9]*$/`).
* **Website** - a simple input field that checks to see if the URL specified has valid syntax (`http://`, `https://`, `ftp://`, etc).
* **reCAPTCHA** - built in support for [reCAPTCHA](https://www.google.com/recaptcha). See [reCAPTCHA documentation](./overview/spam-protection.md#recaptcha) for more information.


## Email Notifications

[Email notifications](./overview/email-notifications.md) are global and can be reused for multiple forms, saving you time when you are managing many forms. Email templates can be managed within Craft control panel (saved to database), or as HTML template files. Database entry templates are created and customized at **Freeform > Email Notifications**. They can also be created directly at form level within Composer. Email notification templates that are created within Composer will contain basic default content, and should be checked and updated once finished building your form.

Freeform allows you to send email notifications upon submittal of a form 5 different ways, each with their own content/template:

* To admin email address(es) for the form.
* To a predefined select menu/radios of email addresses (and labels) for the user to choose ([Dynamic Recipients](./overview/fields-field-types.md#fields-dynamic-recipients) field type).
* To the user submitting the form, with the email addresses specified/selected in the [Email](./overview/fields-field-types.md#fields-email) field type.
* To a user-defined email address (e.g Tell-a-Friend form), with the email addresses specified/selected in the [Email](./overview/fields-field-types.md#fields-email) field type.
* At template level with the [dynamicNotification](./template-functions/freeform.form.md#param-dynamicnotification) parameter.


## Formatting Templates

Freeform attempts to do all the heavy lifting when it comes to templating. Our looping templating approach allows you to automate all or almost all of your form formatting. This can be achieved by building [formatting templates](./overview/formatting-templates.md) for your forms.

Forms can be generated on the front end templates 2 different ways:

::: v-pre
1. By coding the formatting directly within the template that you want the form to appear in, using the [freeform.form](./template-functions/freeform.form.md) template function.
2. By assigning one of an unlimited number of predefined formatting templates (stored as a regular Twig template in **craft/templates** directory) inside Composer and using the [freeform.form render()](./template-functions/freeform.form.md#render) method. This approach is very portable / DRY, and works similar to an include. Then simply just insert 1 line of code: `{{ craft.freeform.form("formHandle").render() }}` in the template you want your form to load in.
:::


## Mailing List API Integrations

Freeform supports some popular [Mailing List API integrations](./api-integrations/mailing-list/README.md). The following mailing list integrations are currently available in **Freeform Pro** only:

* [MailChimp](./api-integrations/mailing-list/mailchimp.md)
* [Constant Contact](./api-integrations/mailing-list/constant-contact.md)
* [Campaign Monitor](./api-integrations/mailing-list/campaign-monitor.md)
* [ActiveCampaign](./api-integrations/mailing-list/activecampaign.md)
* [dotmailer](./api-integrations/mailing-list/dotmailer.md)
* [Craft Campaign plugin](./api-integrations/mailing-list/craft-campaign.md)


## CRM API Integrations

Freeform supports some popular [CRM (Customer Relationship Management) API integrations](./api-integrations/crm/README.md). The following CRM integrations are currently available in **Freeform Pro** only:

* [Salesforce Lead](./api-integrations/crm/salesforce-lead.md)
* [Salesforce Opportunity](./api-integrations/crm/salesforce-opportunity.md)
* [HubSpot](./api-integrations/crm/hubspot.md)
* [ActiveCampaign](./api-integrations/crm/activecampaign.md)
* [Pipedrive](./api-integrations/crm/pipedrive.md)
* [Insightly](./api-integrations/crm/insightly.md)
* [SharpSpring](./api-integrations/crm/sharpspring.md)

## Templating

As for templating, we strived to make things as flexible as possible, while also coming up with templating that can automate much of the handling of parsing your forms. Freeform is capable of figuring out as much of this as possible for you. This can be achieved by building [formatting templates](./overview/formatting-templates.md) for your forms, or simply building forms directly within the page template(s) you're placing your forms into:

* [freeform.form template function](./template-functions/freeform.form.md) - for displaying/parsing your forms.
* [freeform.submissions template function](./template-functions/freeform.submissions.md) - for displaying an individual submission or list of them.

Freeform also includes a complete set of [demo templates](./setup/demo-templates.md). These demo templates let you have a fully functioning area on your website with just a couple clicks! Further to this, it allows you to see real world examples of the template code in action, which will help you get acquainted with Freeform quicker.


## Submissions

Similar to Craft Entries, every time a user submits a form, we refer to those as [submissions](./overview/submissions.md). Currently, submissions can be viewed and edited in the control panel, and displayed on the front end in templates as a list and individually. Within the control panel, you can filter the view by form (or show across all forms), search into submissions, adjust which field columns are shown, and click into any of the submissions to edit them.
