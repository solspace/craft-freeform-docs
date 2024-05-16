---
title: Craft Freeform 3.x - Settings
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/configuration/settings/
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

<span class="page-section">Setup</span>

# Plugin Settings

Freeform includes a wide variety of settings that allow you to customize your form management experience. To adjust your settings, click the **Settings** menu item while in the Freeform plugin, or go to **Settings > Plugins > Freeform** and click the settings link. These can also be configured within your Craft [Project Config](./project-config.md) file.

<div class="menu-grid">
    <a href="#general-settings" class="menu-box">
        <img src="../../../../images/icons/config-page.png" alt="General Settings">
        <div class="menu-grid-text">
            <h3>General Settings</h3>
            <p>Configure Freeform's overall behavior.</p>
        </div>
    </a>
    <a href="#form-behavior" class="menu-box">
        <img src="../../../../images/icons/computer.png" alt="Form Behavior">
        <div class="menu-grid-text">
            <h3>Form Behavior</h3>
            <p>Configure how forms behave in front end templates.</p>
        </div>
    </a>
    <a href="#form-builder" class="menu-box">
        <img src="../../../../images/icons/widgets.png" alt="Form Builder">
        <div class="menu-grid-text">
            <h3>Form Builder</h3>
            <p>Configure Freeform's form builder experience.</p>
        </div>
    </a>
    <a href="#spam-settings" class="menu-box">
        <img src="../../../../images/icons/carrot.png" alt="Spam Settings">
        <div class="menu-grid-text">
            <h3>Spam Settings</h3>
            <p>Configure Freeform's built-in spam controls.</p>
        </div>
    </a>
    <a href="#captchas" class="menu-box">
        <img src="../../../../images/icons/captcha.png" alt="Captchas">
        <div class="menu-grid-text">
            <h3>Captchas</h3>
            <p>Enable and setup reCAPTCHA or hCaptcha for your site.</p>
        </div>
    </a>
    <a href="#formatting-templates" class="menu-box">
        <img src="../../../../images/icons/code.png" alt="Formatting Templates">
        <div class="menu-grid-text">
            <h3>Formatting Templates</h3>
            <p>Configure Formatting Templates path.</p>
        </div>
    </a>
    <a href="#email-templates" class="menu-box">
        <img src="../../../../images/icons/open-letter.png" alt="Email Templates">
        <div class="menu-grid-text">
            <h3>Email Templates</h3>
            <p>Configure Email Notification Templates path and settings.</p>
        </div>
    </a>
    <a href="#success-templates" class="menu-box">
        <img src="../../../../images/icons/valid-check.png" alt="Success Templates">
        <div class="menu-grid-text">
            <h3>Success Templates</h3>
            <p>Configure Success Templates path.</p>
        </div>
    </a>
    <a href="#integrations" class="menu-box">
        <img src="../../../../images/icons/cloud-api.png" alt="Integrations">
        <div class="menu-grid-text">
            <h3>Integrations</h3>
            <p>All integrations available to Freeform.</p>
        </div>
    </a>
    <a href="#statuses" class="menu-box">
        <img src="../../../../images/icons/category.png" alt="Statuses">
        <div class="menu-grid-text">
            <h3>Statuses</h3>
            <p>Manage statuses for your Freeform submissions.</p>
        </div>
    </a>
    <a href="#demo-templates" class="menu-box">
        <img src="../../../../images/icons/starter-templates.png" alt="Demo Templates">
        <div class="menu-grid-text">
            <h3>Demo Templates</h3>
            <p>Install the demo templates to get up and running in seconds.</p>
        </div>
    </a>
    <a href="#notices-alerts" class="menu-box">
        <img src="../../../../images/icons/email-report.png" alt="Notices & Alerts">
        <div class="menu-grid-text">
            <h3>Notices & Alerts</h3>
            <p>Email Alerts, Update Notices, What's New, and Weekly Digest.</p>
        </div>
    </a>
    <a href="#error-log" class="menu-box">
        <img src="../../../../images/icons/folder-attention.png" alt="Error Log">
        <div class="menu-grid-text">
            <h3>Error Log</h3>
            <p>Check out any potential problems Freeform has logged.</p>
        </div>
    </a>
</div>


[[toc]]


<div class="content-block">

## General Settings
Configure general settings for Freeform.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![General Settings](../images/cp_settings-general.png)

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Custom Plugin Name** | `pluginName: 'Forms'` | Override the plugin name by specifying your own here. | | <span class="orange">✓</span>
**Default view** | `defaultView: dashboard` | Allows you to specify which Freeform page should be loaded by default when clicking the Freeform navigation link. Options are: _Dashboard_ (default), _Forms_, _Submissions_ | ✓ | <span class="orange">✓</span>
**Plugin Badge** <Badge type="feature" text="3.9+" /> | `badgeType: all` | Select the options you'd like to be included in the plugin badge count (when applicable). Options are: _Don't Show_, _Update Notices, What's New, Logged Errors_ (default), _Update Notices only_, _Logged Errors only_, _Submission Count_, _Spam Folder Count_ | ✓ | <span class="orange">✓</span>
**Hide 'Install Demo' alert message?** | `hideBannerDemo: '1'` | Hides the alert message suggesting to install demo templates when this setting is enabled. | ✓ | <span class="orange">✓</span>
**Restrict Form options in Form Field Type to User permissions?** <Badge type="feature" text="3.11+" /> | `formFieldShowOnlyAllowedForms: ''` | Enable this to only show forms the user or group has permissions to manage in the list of options for the Form Element Field Type (relating forms in Entries, etc). | ✓ | <span class="orange">✓</span>
**Enable Search Index Updating on New Submissions?** <Badge type="feature" text="3.10.9+" /> | `updateSearchIndexes: '1'` | Enable this to have Craft update search indexes whenever a new submission is created. | ✓ | <span class="orange">✓</span>
**Remove Newlines from Textareas for Exporting** | `removeNewlines: '1'` | Enable this to have newlines removed from Textarea fields in submissions when exporting. | ✓ | <span class="orange">✓</span>
**Use Option Labels when Exporting** <Badge type="feature" text="3.12.13+" /> | `exportLabels: '1'` | Enable this to have fields with options use the submission's option labels instead of values when exporting. | ✓ | <span class="orange">✓</span>
**Use Field Handles for Headings when Exporting** <Badge type="feature" text="3.13.11+" /> | `exportHandlesAsNames: false` | Enable this to use field handles as headings instead of field labels when exporting submissions. | ✓ | <span class="orange">✓</span>
**Automatically Purge Submission Data** | `purgableSubmissionAgeInDays: '365'` | Enable and specify the number of days after submissions have been submitted for Freeform to begin automatically purging. | | <span class="orange">✓</span>

::: warning
Enabling the **Purge Submissions** feature and saving this settings page will result in purging feature beginning, and cannot be undone (it may not happen immediately, and may take a couple hours before the next process runs). This process will only run every hour, and only when Freeform is accessed on the front end in templates or in the control panel.
:::

</div>
<div class="content-block">

## Form Behavior
Configure the front end form behavior.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Form Behavior Settings](../images/cp_settings-form-behavior.png)

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Fill Form Values from the GET Query String** | `fillWithGet: '1'` | Enable this to be able to fill form field values from a GET query string in URI. To use this feature, make sure that the query in the URI matches the handle of the field(s) in the form, e.g. `?firstName=Bob&myRatingField=3`. | ✓ | <span class="orange">✓</span>
**Disable Submit Button on Form Submit?** | `formSubmitDisable: '1'` | Enable this to automatically disable the form's submit button when the user submits the form. This will prevent the form from double-submitting. | ✓ | <span class="orange">✓</span>
**Automatically Scroll to Form on Errors and Multipage forms?** | `autoScrollToErrors: '1'` | Enable this to have Freeform use JS to automatically scroll the page down to the form upon submit when there are errors or the form is continuing to the next page in multipage forms. | ✓ | <span class="orange">✓</span>
**Automatically Scroll to top of the Form on AJAX submit?** <Badge type="feature" text="3.12+" /> | `autoScroll: '1'` | Enable this when using AJAX to have Freeform use JS to automatically scroll the top of the form on submit. This is especially beneficial when you have longer forms and success/error messages at the top of the form become out of sight. | ✓ | <span class="orange">✓</span>
**Remember the Page Order in Multi-page forms?** <Badge type="feature" text="3.11+" /> | `rememberPageSubmitOrder: '1'` | When enabled, Freeform will take into account Conditional Rules page skipping when the user clicks the 'Previous' button on multi-page forms. | ✓ | <span class="orange">✓</span>
**Freeform Javascript Insertion Location** | `scriptInsertLocation: footer` | The location of where you want Freeform to insert it's scripts for form and field functionality (such as spam protection and advanced field types). Options are: _Page Footer_, _Inside Form_, _None_ (manually load the JS instead). [More info](#freeform-javascript-insertion-location) | ✓ | <span class="orange">✓</span>
**Freeform Script Insert Type** | `scriptInsertType: pointers` | Specify the way Freeform scripts are inserted. Options are: _As Static URLs (recommended)_, _As Files_, _Inline_. [More info](#freeform-script-insert-type) | ✓ | <span class="orange">✓</span>
**Freeform Session Context** <Badge type="feature" text="3.12+" /> | `sessionContext: payload` | Choose the way form context is passed between form submits. [More info](#freeform-session-context) | ✓ | <span class="orange">✓</span>
**Number of Days to Keep Saved Form Data** <Badge type="feature" text="3.12+" /> | `saveFormTtl: '14'` | The number of days to store saved form progress in the database before clearing for Save & Continue Later feature. | ✓ | <span class="orange">✓</span>
**Maximum Number of Saved Forms Per Session** <Badge type="feature" text="3.12+" /> | `saveFormSessionLimit: '5'` | The maximum number of saved forms per session for Save & Continue Later feature. | ✓ | <span class="orange">✓</span>

::: tip
The **Automatically Scroll to Form on Errors and Multipage forms?** feature can have its behavior can been manipulated with the [Autoscroll Events](../developer/js-plugin.md#autoscroll-events). <Badge type="feature" text="3.10.8+" />
:::

### Freeform Javascript Insertion Location
The location of where you want Freeform to insert it's scripts for form and field functionality (such as spam protection and advanced field types).

- **Page Footer**
- **Inside Form**
- **None** (manually load the JS instead) <Badge type="feature" text="Revised 3.11+" />
	* If you choose this option, please be sure to manually load Freeform's JS with `/freeform/plugin.js` and CSS with `/freeform/plugin.css` (optional, as it's currently just for the Opinion field type handling) in your template(s). See [Freeform JS plugin](../developer/js-plugin.md#loading-freeform-js-manually) documentation for more information.

### Freeform Script Insert Type
Specify the way Freeform scripts are inserted.

- **As Static URLs (recommended)** - offers built-in browser caching and a static endpoint that delivers the latest Freeform scripts, but are not physical files and therefore cannot have server rules applied.
- **As Files** - (recommended if having issues with Static URLs) are actual physical files generated inside of the 'cpresources' folder by Craft's asset manager with no caching.
- **Inline** - will add the scripts as inline scripts and may be useful as a workaround if the other 2 options are not working. This doesn't allow for caching, and pollutes the source code.

### Freeform Session Context <Badge type="feature" text="3.12+" />
Choose the way form context is passed between form submits.

- **As an encrypted payload** (recommended)
  - The key benefits are that it never stores anything anywhere, has no impact on the server, and can be cached out-of-the-box.
- **Using PHP's sessions**
  - The key benefits are that it stores the context in memory and everything per session ID.
  - The problems with this approach are that it expires eventually with no way to persist this for longer periods of time. It's also unreliable due to _garbage collection_ on most servers which typically runs every 24 min­utes by default.
- **Using a database table**
  - The key benefits are that the context is stored in the database reliably for as long as you wish, offering more control if you have large forms that take a very long time to complete.
  - The problems with this approach is that high traffic sites may run into performance issues as the database table fills up and attempts to clear regularly, etc.

</div>
<div class="content-block">

## Form Builder
Control Freeform's form builder experience.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Form Builder Settings](../images/cp_settings-form-builder.png)

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Display Order of Fields in the Form Builder** | `fieldDisplayOrder: type` | The display order for the list of available fields in the Form Builder: _Field type, Field name (alphabetical)_, _Field name (alphabetical)_ | ✓ | <span class="orange">✓</span>
**Render HTML inside the Form Builder & Submissions view?** | `renderFormHtmlInCpViews: '1'` | Live rendering HTML in HTML blocks, field labels and option labels inside the Form Builder interface can sometimes conflict with Freeform's display of the form preview inside the control panel. In cases like these, you'll need to disable this setting to prevent HTML from rendering automatically. | ✓ | <span class="orange">✓</span>
**Allow Twig to be Enabled for each HTML block?** <Badge type="feature" text="3.10+" /> | `twigInHtml: '1'` | When enabled, you'll see a checkbox that lets you allow the inclusion of Twig code inside your HTML block fields inside the form builder. | ✓ | <span class="orange">✓</span>
**Render HTML block Twig in isolated mode?** <Badge type="feature" text="3.10+" /> | `twigInHtmlIsolatedMode: ''` | When enabled, only the Freeform 'form' and 'fields' variables will be available, the rest of Craft's variables will not be included. | ✓ | <span class="orange">✓</span>
**AJAX Enabled for Forms by Default** | `ajaxByDefault: '1'` | By default, the **Enable AJAX** feature checkbox will be checked for new forms. | ✓ | <span class="orange">✓</span>
**Default Formatting Template** | `formattingTemplate: bootstrap-5.html` | The default formatting template for new forms. All newly created forms will have this formatting template selected by default. | ✓ | <span class="orange">✓</span>
**Include Default Freeform Formatting Templates** | `defaultTemplates: '1'` | Disable this to hide the default Freeform formatting templates in the Formatting Template options list inside the Form Builder. | ✓ | <span class="orange">✓</span>
**Show Form Builder Tutorial** | `showTutorial: ''` | Enable this to show the interactive tutorial again in the Form Builder. This setting disables again when the tutorial is completed or skipped. | ✓ | <span class="orange">✓</span>

</div>
<div class="content-block">

## Formatting Templates
Formatting templates are predefined templates that you can specify for forms to handle simplified rendering of the form on the front end. You can have as many as you wish, and customize them however you like.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Formatting Templates](../images/cp_settings-formatting-templates.png)

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Directory Path** | `formTemplateDirectory: freeform_formatting/` | When using custom formatting templates for your forms, you'll need to specify where your Twig-based templates are stored. Provide a relative path to craft root to your custom form templates directory, e.g. `freeform_formatting_templates`. To add a starter example template, click the "Add a sample template" button, and then edit the template after. | ✓ | <span class="orange">✓</span>

</div>
<div class="content-block">

## Email Templates
This area is for users that wish to use Twig-based HTML template files for email notifications. See [Email Notifications](../overview/email-notifications.md) documentation for more information about implementation.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Email Templates](../images/cp_settings-email-templates.png)

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Directory Path** | `emailTemplateDirectory: freeform_emails/` | Provide a relative path to craft root to your custom form templates directory, e.g. `freeform_notifications`. To add a starter example template, click the "Add a sample template" button, and then edit the template after. | ✓ | <span class="orange">✓</span>
**Default Email Notification Creation Method** | `emailTemplateStorage: template` | Select which storage method to use when creating new email notifications with **Add New Notification** option in the Form Builder. | ✓ | <span class="orange">✓</span>

::: tip
If you wish to create advanced notification templates, please note that any additional template files (e.g. `_layout.twig`, `_footer.html`, etc) must NOT be stored inside of this directory, as Freeform expects that every file in here is a complete email notification template and will choke on any additional files.
:::

::: warning
As of Freeform 3.11, **database-based email notification templates are deprecated**. They will continue to work throughout the Freeform v3.x major version, but will likely be removed in v4. Freeform 3.11 introduces the ability to create and update file-based email notification templates directly inside the control panel, thus making the database-style notification template approach redundant. Freeform 3.11+ includes a utility to convert all existing database-style email notification templates over to file-based ones at your convenience (see below).
:::

### Migrate from Database Email Templates to File Email Templates <Badge type="feature" text="3.11+" />
This is a utility that allows you to migrate your existing database email templates over to file-based email templates (you can continue to edit these from the CP). The utility will also update all existing forms to use the new file version of the email template. If you wish to have Freeform clean up and remove the old database email templates after, check the checkbox as well.

</div>
<div class="content-block">

## Success Templates <Badge type="feature" text="3.13+" />
Success templates are predefined templates that you can specify for your forms to display when a form has been successfully submitted. Instead of redirecting to a return URL or reloading the form, it'll display the contents of this template. You can have as many as you wish, and customize them however you like. To use these, be sure to select the **Load Success Template** option for the **Success Behavior** setting in the form builder for each form.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Directory Path** | `successTemplateDirectory: freeform_success/` | When using custom formatting templates for your forms, you'll need to specify where your Twig-based templates are stored. Provide a relative path to craft root to your custom form templates directory, e.g. `freeform_success`. To add a starter example template, click the "Add a sample template" button, and then edit the template after. | ✓ | <span class="orange">✓</span>

Your success template might look something like this:

``` twig
<div id="freeform-success">
    <h3>Thank you!</h3>
    <p>We have successfully received your submission.</p>
</div>
```

Things like `form.id`, `form.handle` and `form.name` are available for use here as well.

</div>
<div class="content-block">

## Statuses
This area allows you to manage and create new statuses for your forms. You can set the default status to be set for all forms here.

::: tip
This page and its settings all remain accessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Statuses](../images/cp_settings-status-list.png)

![Create a Status](../images/cp_settings-status-edit.png)

</div>
<div class="content-block">

## Demo Templates
Allows you to install the [Demo Templates](./demo-templates.md) to get Freeform up and running on the front end with just a couple clicks!

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Demo Templates settings](../images/cp_settings-demo-templates.png)

</div>
<div class="content-block">

## Spam Settings
For more information about Freeform's spam protection features, visit the [Spam Protection documentation](../overview/spam-protection.md).

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Spam Settings](../images/cp_settings-spam.png)

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Freeform Honeypot** | `freeformHoneypot: '1'` | Freeform includes its own Honeypot spam protection feature. This is enabled by default, but can be disabled here. | ✓ | <span class="orange">✓</span>
**Javascript Enhancement** | `freeformHoneypotEnhancement: ''` | Enable this to use Freeform's built-in Javascript enhancement for the Honeypot feature. This will require users have JS enabled for their browser and help fight spambots more aggressively. | ✓ | <span class="orange">✓</span>
**Custom Honeypot Field Name** | `customHoneypotName: ''` | If you wish to change the default name of the Freeform Honeypot field, specify a value here. Default (if left empty) is `freeform_form_handle`. | ✓ | <span class="orange">✓</span>
**Custom Honeypot Failed Error Message** | `customErrorMessage: 'No thanks!'` | If the form fails upon submit due to Spam protection measures AND the _Spam Protection Behavior_ setting is set to 'Display Errors', show this error message instead of the default. | ✓ | <span class="orange">✓</span>
**Spam Protection Behavior** | `spamProtectionBehaviour: simulate_success` | Select the behavior you'd like Freeform to take when it detects a submission as being spam: _Simulate Success_ (recommended), _Display Errors_ (for debugging). | ✓ | <span class="orange">✓</span>
**Bypass All Spam Checks for Logged in Users** <Badge type="feature" text="3.13+" /> | `bypassSpamCheckOnLoggedInUsers: false` | When enabled, Freeform will not run any spam protection measures for logged in users. | ✓ | <span class="orange">✓</span>
**Use Spam Folder** | `spamFolderEnabled: '1'` | When enabled, all submissions caught by the honeypot or blocked email addresses, keywords and IP addresses will be flagged as spam and stored in the database, but available to manage in a separate menu inside Freeform. When paired with a Captcha service and its _Failure Behavior_ setting set to **Send to Freeform Spam Folder**, failed submissions will also end up in the Spam Folder. | ✓ | <span class="orange">✓</span>
**Automatically Purge Spam Submissions** | `purgableSpamAgeInDays: '14'` | Enable and specify the number days that should pass after a spammy submission is received before Freeform automatically purges it. Enabling this and saving this settings page will begin the purging of submissions flagged as spam, and cannot be undone. | ✓ | <span class="orange">✓</span>
**Block Email addresses** | `blockedEmails: "*.ru\r\n*@hotmail.com"` | Enter email addresses you would like blocked from being used in Email fields. Use `*` for wildcard, and separate multiples on new lines. | ✓ | <span class="orange">✓</span>
**Display errors about blocked email(s) under each email field?** | `showErrorsForBlockedEmails: ''` | Enable this if you'd like field-based errors to display under the email field(s) that the user has entered blocked emails for. Not recommended for regular use, but helpful if trying to troubleshoot submission issues. | ✓ | <span class="orange">✓</span>
**Block Keywords** | `blockedKeywords: "cryptocurrency\r\n*Д*\r\n*cialis*"` | Enter keywords you would like blocked from being used in all text and textarea fields. Use `*` for wildcard, and separate multiples on new lines. | ✓ | <span class="orange">✓</span>
**Display errors about blocked keyword(s) under each text/textarea field?** | `showErrorsForBlockedKeywords: ''` | Enable this if you'd like field-based errors to display under the field(s) that the user has entered blocked keywords for. Not recommended for regular use, but helpful if trying to troubleshoot submission issues. | ✓ | <span class="orange">✓</span>
**Block IP addresses** | `blockedIpAddresses: ''` | Enter IP addresses you would like blocked. Separate multiples on new lines. | ✓ | <span class="orange">✓</span>
**Form Submission Throttling** | `submissionThrottlingCount: ''`<br />`submissionThrottlingTimeFrame: m` | Globally (affecting all users) prevent spam or attacks by limiting the number of times all forms can be submitted within a given timeframe. | ✓ | <span class="orange">✓</span>
**Minimum Submit Time** | `minimumSubmitTime: ''` | The minimum amount of time (in seconds) that has to go by since loading the form for the user to be able to submit the form successfully. Otherwise the submission will be flagged as spam and the Spam Protection Behavior setting will take effect. | ✓ | <span class="orange">✓</span>
**Form Submit Expiration** | `formSubmitExpiration: ''` | The maximum amount of time (in minutes) a user has to submit the form before the form expires and the Spam Protection Behavior setting will take effect. This still has to be less than the Craft CSRF token expiry and PHP Session limit set for your server. | ✓ | <span class="orange">✓</span>

::: tip
If using the **Custom Honeypot Field Name** setting, be careful when choosing a custom name, as it's possible the user's browser auto-fill settings may accidentally fill out the field unbeknownst to them (e.g. `email_address2`).
:::

::: tip
Enabling the **Spam Folder** feature will not retroactively bring back any previously blocked spam submissions. Any submissions that have been blocked in the past (without Spam Folder setting on) are never recorded in the database.
:::

::: warning
Enabling the **Purge Submissions** feature and saving this settings page will result in purging feature beginning, and cannot be undone (it may not happen immediately, and may take a couple hours before the next process runs). This process will only run every hour, and only when Freeform is accessed on the front end in templates or in the control panel.
:::

::: tip
When attempting to block individual characters (e.g. Russian letters) or partial words or strings with the **Block Keywords** setting, be sure to make good use of the wildcard `*` character! E.g.: `*й*`, `*Д*`, `*url=http*`, etc.
:::

</div>
<div class="content-block">

## Captchas
Freeform currently supports several options of _reCAPTCHA_ and _hCaptcha_ <Badge type="feature" text="3.12.9+" />.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Captchas Settings](../images/cp_settings-recaptcha.png)

Setting | Project Config | Description | Lite | Pro
--- | --- | --- | --- | ---
**Use Captchas on Forms?** | `recaptchaEnabled: '1'` | Enable this setting and fill in the Captcha *Site Key* and *Secret Key* to enable a Captcha service for Freeform. Visit [Google reCAPTCHA site](https://www.google.com/recaptcha) to register your site and get your *Site Key* and *Secret Key*. | ✓ | <span class="orange">✓</span>
**Captcha type** | `recaptchaType: v2_checkbox` | Choose which Captcha service and type you wish to use:<br /><ul><li>_reCAPTCHA v2 Checkbox_</li><li>_reCAPTCHA v2 Invisible_ <Badge type="pro" text="Pro" /></li><li>_reCAPTCHA v3_ <Badge type="pro" text="Pro" /></li><li>_hCaptcha Checkbox_ <Badge type="pro" text="Pro" /></li><li>_hCaptcha Invisible_ <Badge type="pro" text="Pro" /></li></ul> | ✓ | <span class="orange">✓</span>
**Captcha Site Key** | `recaptchaKey: XXXXX` | The Site Key provided by the Captcha service. | ✓ | <span class="orange">✓</span>
**Captcha Secret Key** | `recaptchaSecret: XXXXX` | The Secret Key provided by the Captcha service. | ✓ | <span class="orange">✓</span>
**Only load Captcha scripts once the user interacts with the form?** <Badge type="feature" text="3.11+" /> | `recaptchaLazyLoad: '1'` | If you'd like to have the associated Captcha scripts load only once a user begins filling out the form, enable this setting. If you'd like your forms to be ready to go at page load, disable this setting. | ✓ | <span class="orange">✓</span>
**Failure Behavior** (reCAPTCHA v2 Invisible, reCAPTCHA v3 and hCaptcha Invisible only) | `recaptchaBehaviour: spam` | The behavior Freeform should take if the validation fails. Options are: _Display error_ (an error saying the Captcha is required) or _Send to Freeform Spam Folder_ (any failed attempt at completing the Captcha will allow the submission through, but flag it as spam and it'll end up in the Freeform Spam Folder). |  | <span class="orange">✓</span>
**reCAPTCHA v2 Checkbox Theme** <Badge type="feature" text="3.9+" /> | `recaptchaTheme: light` | The theme to be used for the reCAPTCHA checkbox. Options are: _Light_ (default) and _Dark_ | ✓ | <span class="orange">✓</span>
**reCAPTCHA v2 Checkbox Size** <Badge type="feature" text="3.9+" /> | `recaptchaSize: normal` | The size to be used for the reCAPTCHA checkbox. Options are: _Normal_ (default) and _Compact_ | ✓ | <span class="orange">✓</span>
**Error Message** <Badge type="feature" text="3.9+" /> | `recaptchaErrorMessage: 'Try again!'` | Set a custom error message here, e.g. `Please verify that you are not a robot.` | ✓ | <span class="orange">✓</span>
**Minimum Score** (reCAPTCHA v3 only) | `recaptchaMinScore: '0.7'` | Enter the minimum score needed to pass the reCAPTCHA v3 test. We recommend starting with `0.5` and see how that goes. A `0.0` score means that it's almost certain a bot, while a `1.0` score means it's a user. | | <span class="orange">✓</span>

::: tip
To add the **reCAPTCHA v2 Checkbox** or **hCaptcha Checkbox** to your forms, open up each form in the Form Builder and drag over the **Captcha** special field anywhere you like into your form layout.

**reCAPTCHA v2 Invisible** and **reCAPTCHA v3** will automatically load a _reCAPTCHA_ icon in the bottom right corner of your site containing the form. This is required by Google's terms of service. There are CSS workarounds if you wish to locate the icon to the left side of the browser page, etc.
:::

</div>
<div class="content-block">

## Integrations

::: tip
All integration pages and their settings remain accessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

### Email Marketing <Badge type="pro" text="Pro" />
The Email Marketing area allows you to manage your mailing list API integrations. Email Marketing integrations are set up here and are globally available to all forms, but are configured per form inside the form builder interface. To connect to an Email Marketing API, click the **New Email Marketing Integration** at the top right.

* View the [Email Marketing Integration](../integrations/email-marketing/README.md) documentation for more information about setting up and configuring.

![Email Marketing](../images/cp_settings-email-marketing.png)

### CRM <Badge type="pro" text="Pro" />
The CRM area allows you to manage your CRM (Customer Relationship Management) API integrations. CRM integrations are set up here and are globally available to all forms, but are configured per form inside the Form Builder interface. To connect to a CRM API, click the **New CRM Integration** at the top right.

* View the [CRM Integration](../integrations/crm/README.md) documentation for more information about setting up and configuring.

![CRM](../images/cp_settings-crm.png)

### Payments <Badge type="pro" text="Pro" />
This area allows you to configure and manage Stripe Payments for your forms. The Stripe Payments integration is set up here and are globally available to all forms, but are configured per form inside the Form Builder interface. To create a new Stripe payment setup, click the **New Payment Integration** at the top right.

* View the [Payments API Integration](../integrations/payments/README.md) documentation for more information about setting up and configuring.

![Payments](../images/cp_settings-payments.png)

### Webhooks <Badge type="pro" text="Pro" />
This area allows you to configure and manage **Slack**, **Zapier** and **generic** Webhooks for your forms. The Webhooks integrations are set up and completely managed here. You specify which form(s) each Webhook applies to, etc. To create a new Webhook, click the **New Webhook** at the top right.

* View the [Slack API Integration](../integrations/webhooks/slack.md) documentation for more information about setting up and configuring.
* View the [Zapier API Integration](../integrations/webhooks/zapier.md) documentation for more information about setting up and configuring.

![Slack Webhooks](../images/cp_settings-slack.png)

</div>
<div class="content-block">

## Notices & Alerts
Freeform is committed to being the most robust and reliable form plugin for Craft CMS. Freeform has been carefully and meticulously developed and tested over many years and is in use across tens of thousands of websites. However, one other crutial piece of the puzzle in reliability is how your specific site and environment are performing. Because of this, Freeform includes an extensive error logging feature, email issue alerts, an Update Notices feature to alert you of important fixes and changes, and a weekly digest email to keep your finger on the pulse of your website.

::: tip
This page and its settings all become inaccessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

Check out the options below to learn more about each:

- [Weekly Digest](../reliability/digest.md)
- [Update Notices](../reliability/update-notices.md)
- [Email Alerts](../reliability/email-alerts.md)

![Notices & Alerts](../images/cp_settings-notices-alerts.png)

![Update Notices preview](../images/cp_dashboard-update-notices.png)

</div>
<div class="content-block">

## Error Log
In as many cases as possible, Freeform attempts to write errors and issues to its own error log. The file is physically located in the same place as the Craft logs (`/storage/logs/freeform.log`), but can be conveniently viewed inside the *Error Log* page inside Freeform Settings area (**Freeform** -> **Settings** -> **Error Log**). If there are no logged errors, the Error Log page will not show any errors, and you will likely not see the Freeform error log file.

::: tip
This page remains accessible when the Craft `allowAdminChanges` config setting is set to `false`.
:::

![Error Log](../images/cp_settings-error-log.png)

</div>