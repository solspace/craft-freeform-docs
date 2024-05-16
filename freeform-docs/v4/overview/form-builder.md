---
title: Craft Freeform 4.x - Form Builder
description: What makes Freeform different from other form plugins is that it gives you full control to create simple or complex multi-page forms, and everything is at your fingertips in our elegant form builder. It has been expertly designed to minimize mouse movement and clicks.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/forms/builder/
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

<span class="page-section"><a href="/craft/freeform/v4/overview/">Overview</a></span>

# Form Builder

<div class="hero-lead">

What makes Freeform different from other form plugins is that it gives you full control to create simple or complex multi-page forms, and everything is at your fingertips in our elegant form builder. It has been expertly designed to minimize mouse movement and clicks. Freeform also features a long list of its own set of robust [field types](../fields).

</div>

<div class="menu-grid">
    <a href="#overview" class="menu-box">
        <img src="../../../../images/icons/clipboard.png" alt="Overview">
        <div class="menu-grid-text">
            <h3>Overview</h3>
            <p>A general overview of the form builder.</p>
        </div>
    </a>
    <a href="#form-settings" class="menu-box">
        <img src="../../../../images/icons/config-page.png" alt="Form Settings">
        <div class="menu-grid-text">
            <h3>Form Settings</h3>
            <p>Variety of settings to control the form behavior.</p>
        </div>
    </a>
    <a href="#validation" class="menu-box">
        <img src="../../../../images/icons/valid-check.png" alt="Validation">
        <div class="menu-grid-text">
            <h3>Validation</h3>
            <p>Set up validation behavior for the form.</p>
        </div>
    </a>
    <a href="#admin-email-notifications" class="menu-box">
        <img src="../../../../images/icons/email-group.png" alt="Admin Notifications">
        <div class="menu-grid-text">
            <h3>Admin Notifications</h3>
            <p>Configure emails to be notified of submissions.</p>
        </div>
    </a>
    <a href="#conditional-rules" class="menu-box">
        <img src="../../../../images/icons/logic.png" alt="Conditional Rules">
        <div class="menu-grid-text">
            <h3>Conditional Rules</h3>
            <p>Set which fields should be shown/hidden.</p>
        </div>
    </a>
    <a href="#element-connections" class="menu-box">
        <img src="../../../../images/icons/content.png" alt="Element Connections">
        <div class="menu-grid-text">
            <h3>Element Connections</h3>
            <p>Configure your form to create other elements.</p>
        </div>
    </a>
    <a href="#crm-integrations" class="menu-box">
        <img src="../../../../images/icons/crm.png" alt="CRM Integrations">
        <div class="menu-grid-text">
            <h3>CRM Integrations</h3>
            <p>Configure a CRM integration with your form.</p>
        </div>
    </a>
    <a href="#stripe-payments" class="menu-box">
        <img src="../../../../images/icons/credit-card.png" alt="Stripe Payments">
        <div class="menu-grid-text">
            <h3>Stripe Payments</h3>
            <p>Configure a Stripe integration for your form.</p>
        </div>
    </a>
</div>


[[toc]]


![Freeform Form Builder](../images/cp/form-builder.png)

::: video 94H5c9T4EHE
Video: Overview of the Form Builder
:::


## Overview
The Freeform form builder is an all-in-one interface that lets you take control of almost every aspect of your forms. Everything is at your fingertips. Before we get started, here's a few notes about the form builder:

- The form builder is divided into 3 columns:
	- **Fields** (left column) contains all of the available fields and special fields you can add to your form.
		- New fields can be created in the main field creation area (**Freeform > Fields > New Field**) as well as directly within the form builder interface by clicking the **Add New Field** button. [Fields](../fields) created here are available globally as well (they do not just exist for that form).
		- If you have configured an [Email Marketing integration](../../setup/settings#integrations), you'll see a list for Email Marketing integrations at th bottom left corner. There will be 1 displayed per connection, but you can include the mailing list sign up field as many times as you wish, as long as each uses a different list for that integration.
	- **Layout** (center column) is where you actively see an interactive live preview of what your form will look like.
		- You can click or drag any of the fields from the **Fields** (left column) into the Layout area to add them. Drag them around to move them. Freeform will auto-split rows into columns to fit your fields beside each other, if you wish (to a maximum of 4 columns).
		- Clicking anywhere on any field will open up the **Property Editor** (right column) where you can adjust and configure settings for your field such as label, options, making field required, editing HTML, mapping fields, etc. Changes will apply instantly (not necessary to click save before you do something else).
		- To remove a field from the layout, simply click the delete (minus) icon that shows up on top right when you hover over a field.
		- Freeform also allows for true [multi-page](../multi-page-forms) forms (POST submit per page). To add more pages to your form, simply click the plus (**+**) button at the top of the Layout area next to the page tabs. To edit the name of the page, change the value in the **Property Editor** (right column). To remove a page, make sure you're on the page you'd like to remove, and then click the delete (minus) icon on the page tab. There is a limit of 100 pages for each form.
			- If you wish to rearrange pages, simply drag and drop the tabs. If you need to move a field from one page to another, drag and drop the field onto the page tab you'd like it to be moved to. It will then appear at the top of that page, and you can finish placing it where it should be on that page.
	- **Property Editor** (right column) is where all of the form and field configuration will happen. Clicking on any field, page tab or settings tab inside the form builder layout area will load its configuration options here.
		- For all fields, there is a **Reset** button at the top right of the Property Editor if you wish to have your field options and labels, etc be reset/updated to what is set for the "default" field in **Freeform** -> **Fields** area.
- The form builder applies changes to fields instantly (no need to click save before you move on to adjust the next thing). We've also made the **Quick Save** (save and continue editing) button and **⌘S** option conveniently accessible for you (vs clicking dropdown to find the option).

The form builder's settings tabs (top right of builder):

* [Form Settings](#form-settings)
* [Validation](#validation)
* [Admin Email Notifications](#admin-email-notifications)
* [Conditional Rules](#conditional-rules) <Badge type="pro" text="Pro" />
* [Element Connections](#element-connections) <Badge type="pro" text="Pro" />
* [CRM Integrations](#crm-integrations) <Badge type="pro" text="Pro" />
* [Stripe Payments](#stripe-payments) <Badge type="pro" text="Pro" />


## Form Settings
The **Form Settings** tab (cog icon) handles the overall settings for the form. It will also display and handle editing of settings for [fields](../fields) and [multi-page page tabs](../multi-page-forms).

- **Name** - the name for your form to identify it easier.
- **Handle** - the unique identifier for the form used in your regular templates calling the form.
- **Form Type** - the type of form this is. Will only show when other form types add-ons are installed.
	- When additional form types are installed, you can choose a different form type that enables special behaviors.
- **Submission Title** - the variable(s) you place here will establish the title of each form submission to be displayed in the Submissions list.
	- May include any Freeform field variables (`fieldName`) as well as `form.name`, `form.id`, `form.handle` and `dateCreated` as long as they are wrapped in curly braces (`{{` and `}}`).
- **Success Behavior** - set how you'd like the success return of this form to be handled. Some of these may also conflict with template-level approaches to controlling the form behavior, most typically [JS Overrides](../../templates/ajax-forms).
	- Options are:
		- **Reload Form with Success Message** - upon successful submit of the form, Freeform will reload the form again and display a success banner above the form.
			- If you wish to customize the success message, be sure to visit the _Validation_ tab to specify the **Success Message**.
		- **Load Success Template** - upon successful submit of the form, Freeform will stay on the same page but replace the form contents with the contents of the _Success Template_ that you specify. Please note that this will not work when manually rendering form formatting directly inside a regular template (not using a [Formatting Template](../formatting-templates)).
			- **Success Template** - specify which [Success Template](../../setup/settings#success-templates) you'd like to be used for this form.
		- **Use Return URL** - upon successful submit of the form, Freeform will redirect the user to the URL specified in the _Return URL_ setting.
			- **Return URL** - the URL that the form will redirect to after successful submit.
				- May contain:
					- `form.handle` - handle of form.
					- `submission.token` - secure token created for the submission.
					- `submission.id` - newly created unique submission ID in the URL. This would allow you to use the [Submissions query](../../templates/queries/submissions) to display some or all of the users' submission on the success page.
- **Default Status** - the default status to be used when users submit the form, unless overwritten at template level.
	- See [Statuses documentation](../../setup/settings#statuses) for managing statuses.
- **Formatting Template** (optional) - if using the [render() method](../../templates/queries/form#render), this essentially allows you to "attach" a formatting template to a form so that you don't need to include formatting inside the template(s) you place the form inside.
	- Select from an existing sample or custom template, or create a new one.
		- If creating a new one, a new template file will automatically be created for you in your [Formatting Template Directory](../../setup/settings#form-template-directory) containing sample template code that you can adjust later.
		- Users/groups need to have permissions access for **Settings** to create new formatting templates.
- **Enable AJAX** - enables Freeform's [built-in automated AJAX submit support](../../templates/ajax-forms). Once enabled, Freeform will handle the rest (as long as you're using standard template formatting - very custom formatting templates may not work properly).
- **Collect IP Addresses** - allows you to specify whether or not the form should collect IP addresses from submitters.
	- It's important to note that this likely isn't a complete solution for [GDPR Compliance](../../setup/gdpr-compliance) if that is why you are using this feature. Please read our official [Guide to GDPR Compliance with Freeform](../../setup/gdpr-compliance) for more information.
- **Store Submitted Data** - allows you to specify whether the submission data for this form should be stored in the database.
	- Typical use-cases for not storing submission data on your site would be if you just wanted the [email notification](../email-notifications) and/or wanted the data submitted over to an [Email Marketing](../../integrations/email-marketing) or [CRM](../../integrations/crm) integration.
	- It's important to note that this likely isn't a complete solution for [GDPR Compliance](../../setup/gdpr-compliance) if that is why you are using this feature. Please read our official [Guide to GDPR Compliance with Freeform](../../setup/gdpr-compliance) for more information.
- **Opt-In Data Storage Checkbox** - allows the submitter to choose whether or not they want their submission data stored on your site. In the select dropdown, select a **Checkbox** fieldtype you want to be the designated opt-in field, or choose **Disabled** to not use this feature.
	- This setting will still send off data to [integrations](../../integrations) and [email notifications](../email-notifications).
	- It's important to note that this likely isn't a complete solution for [GDPR Compliance](../../setup/gdpr-compliance) if that is why you are using this feature. Please read our official [Guide to GDPR Compliance with Freeform](../../setup/gdpr-compliance) for more information.
- **Google Tag Manager** - allows you to enable Google Tag Manager to push successful form submission events to the data layer (when AJAX enabled).
	- **Event Name** - specify a custom event name that you wish to assign to a successful form submission.
	- **GTM Account ID** - add this if you want Google Tag Manager scripts added to your page by Freeform. Leave blank if you are adding your own GTM scripts.
- **Form tag Attributes** - add any `<form>` tag attributes for the form here, e.g. `novalidate`, `data-my-attribute` and `autocomplete="on"`.
- **Form Color** - used for features like charts in Freeform dashboard widgets.
- **Description** - a description for the form to store notes or help identify what it's used for, etc.
- **POST Forwarding** <Badge type="pro" text="Pro" /> - if you need to have the POST data of this form submitted to an external API, provide that custom URL here.
	- **POST Forwarding Error Trigger** - provide a keyword or phrase Freeform should check for in the output of the external POST URL to know if and when there's an error to log, e.g. `error` or `an error occurred`.
	- See [POST Forwarding documentation](../../integrations/post-forwarding) for more information about this feature.


## Validation
Freeform's **Validation** tab (lock icon) is where you can configure certain form-specific behaviors such as messages and submit button indicators.

- **Success Message** - the text to be shown at the top of the form if the submit is successful (AJAX), or load in your template with `form.successMessage`.
- **Error Message** - the text to be shown at the top of the form if there are any errors upon submit (AJAX), or load in your template with `form.errorMessage`.
- **Show Loading Indicator on Submit** - show a loading indicator on the submit button upon submittal of the form.
- **Show Loading Text**
	- Enabling this will change the submit button's label to the text of your choice.
	- **Loading Text** - enter the custom value you'd like to be displayed when the form is processing.
- **Limit Form Submission Rate** <Badge type="pro" text="Pro" /> - allows you to limit the number of times a user can submit the form.
	- Options are:
		- *Do not limit*
		- *Logged in Users only (no limit)*
		- *Once per Cookie only*
		- *Once per IP/Cookie combo*
		- *Once per logged in Users only*
		- *Once per logged in User or Guest Cookie only*
		- *Once per logged in User or Guest IP/Cookie combo*
	- Please see [Submission Limits](../submission-limits) documentation for more information about available options, including setting limits for the entire form.
- **Stop Submissions After** (date) - allows you to prevent new submissions of the form after the set date.


## Admin Email Notifications
Freeform allows you to send an email to admins (or other predefined email addresses) 2 different ways:

- With the [Dynamic Recipients](../fields#dynamic-recipients) field type, allowing the user to select from a few different predefined options to direct their email notification to.
- As a hard coded option set for the form.

To use the latter approach, click the **Admin Notifications** tab (envelope icon) to set up admin email notifications. Select the email notification template (or quickly create a new one - users/groups need to have permissions access for **Email Notifications** to create new notification templates), and then enter the admin email address(es), each on a new line, you wish to receive an email notification upon users successfully submitting the form.

Additionally, you can use Twig code inside the Admin Recipients textarea field, which allows you to perform conditional checks on fields that would send an email notification to a different email address, etc.

For example, you could use something like this:

``` twig
{% if myRadioField == "option1" %}
bigbob@acmewidgets.net 
{% elseif myRadioField  == "option2" %}
fuzzypants@acmewidgets.net 
{% else %}
hotsauce@acmewidgets.net 
{% endif %}
```

OR

``` twig
{{ firstName == 'Bob' ? 'some@email.com' : 'other@email.com' }}
```

For more email notification options, please see the [Types of Email Notifications](../email-notifications#types-of-email-notifications) documentation.


## Conditional Rules <Badge type="pro" text="Pro" />
The **Conditional Rules** tab (lines icon) is where you can configure fields to **show or hide** based on the contents/selection of other fields, and even **skip pages** or submit the form based on the contents/selection of fields on a previous page.

Please see the [Conditional Rules](./conditional-rules/) documentation for more information about this feature.


## Element Connections <Badge type="pro" text="Pro" />
The **Element Connections** tab (chain icon) is where you can connect and map Freeform submission data to other Craft Elements such as [Craft Entries](https://craftcms.com/docs/4.x/entries.html) and [Craft Users](https://craftcms.com/docs/4.x/users.html).

The possibilities are endless when you consider that it essentially allows you to easily create complex user registration forms or accept guest submitted content that maps to Craft entries for further management by site admins for publishing... or whatever else you can dream up!

Please see the [Element Connections](../../integrations/elements/) documentation for more information about this feature.

![Map Submission Data to Craft Elements - User Registration form](../images/cp/user-registration.png)


## CRM Integrations <Badge type="pro" text="Pro" />
The **CRM Integrations** tab (cloud icon) is where you configure any [CRM integrations](../../integrations/crm) you may have on a per-form level. Simply choose an integration name and then map out your Freeform fields to your CRM's fields. This tab will only show if you have any CRM integrations configured.

![CRM Integrations](../images/cp/crm-integration-builder.png)


## Stripe Payments <Badge type="pro" text="Pro" />
The **Payments** tab (dollar sign icon) is where you configure a [Stripe Payments](../../integrations/payments/) integration on a per-form level. Simply choose the Payment integration name and then configure the form and map out your Freeform fields to your Stripe fields. This tab will only show if you have a Payment integration configured. You will also need to add a [Credit Card](../fields#credit-card) special field to the form layout.

![Accept Payments through Stripe](../images/cp/stripe-payments.png)