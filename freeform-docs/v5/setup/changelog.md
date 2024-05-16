---
title: Craft Freeform 5.x - Changelog
description: Freeform has a proven history of active development filled with countless feature additions, improvements and bug fixes.
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

<span class="page-section"><a href="/craft/freeform/v5/setup/">Installing & Updating</a></span>

# Changelog


[[toc]]


<div class="changelog">

## 5.2.0 <span>2024-05-15</span>

### Additions
- Added optional **Site Filtering** setting for forms and submissions (Pro). This setting allows you to filter form lists by Sites and prevents other admins from accessing forms that belong to Sites they don't have access to.
    - This only controls access to forms and submissions. It does not enable translations per site.
    - If you'd like to apply this change retroactively, you should run the `./craft freeform/submissions/resave` CLI command after enabling this setting.
- Added settings for **Password** field to set a minimum number of characters to be used (_Min Length_) and whether the password should contain at least one number, one lowercase letter, one uppercase letter, and one special character (_Character Variability_).
- Added an integration for **Google Sheets** (Pro).

### Changes
- Updated sample formatting templates to use `novalidate`. It was previously incorrectly applied to inputs instead of `<form>`.

### Fixes
- Fixed a bug where Stripe payment information was unavailable in email notifications.

## 5.1.19.1 <span>2024-05-09</span>

### Fixes
- Fixed a bug where attempting to update to Freeform 5.1.19 could cause the process to crash.
- Fixed input placeholder styles for Bootstrap sample formatting templates.

## 5.1.19 <span>2024-05-08</span>

### Changes
- Updated the **Settings → Statuses** to no longer have conflicting logic to set the default status for new forms. This is now done in the **Settings → Form Builder** area in Freeform 5+.
- Improved integration errors to log more meaningful error messages.

### Fixes
- Fixed a bug where the Update Notices feature for the Freeform dashboard was not working.
- Fixed a bug where clicking the Source type an additional time would clear any option settings you currently have for Options-based field types.
- Fixed a bug where setting `allowedGraphqlOrigins` to `false` in _general.php_ would cause form submissions to crash.

## 5.1.18.1 <span>2024-05-06</span>

::: warning
If you are experiencing visual issues with form layouts and styles on the front end, please update Freeform and ensure you're adding the `|raw` filter to `form.attributes.success` and `form.attributes.errors` in any custom formatting templates you may have when not using AJAX.
:::

### Changes
- Added the `|raw` filter to `form.attributes.success` and `form.attributes.errors` in sample formatting templates as they began parsing with an extra set of quotes around them when not using AJAX.

## 5.1.18 <span>2024-05-06</span>

::: warning
If you are experiencing visual issues with form layouts and styles on the front end, please update Freeform and ensure you're adding the `|raw` filter to `form.attributes.row` in any custom formatting templates you may have.
:::

### Changes
- Added the `|raw` filter to `form.attributes.row` in sample formatting templates as they began parsing with an extra set of quotes around them.

### Fixes
- Fixed a bug where forms would fail when loading if a **Confirm** field was used and the **Duplicate Check** setting was set to _Anyone - Once per Email Address_.
- Fixed a bug where the form builder's field association badges for Checkbox, HTML, and Rich Text fields did not display correctly.

## 5.1.17 <span>2024-05-03</span>

### Additions
- Added **Assets** as an Element source for populating Freeform field options.
- Confirmed compatibility with Craft 5.1.x.

### Changes
- Improved Twig template debugging for formatting templates.
- Updated **Tailwind** formatting template to have instructions below the field label instead of below the input.
- Updated the JSON payload from forms to no longer contain details of the user(s) that created and last updated the form.
- Updated the **Field Type Manager** to store field types set to hidden in the database instead of the Project Config file.

### Fixes
- Fixed a bug where Freeform fields with long handles could cause Craft's search indexing jobs to fail.
- Fixed a bug where Export Notifications would fail if they contained multiple email addresses.
- Fixed a bug where conditional rules were outputted to the browser console.
- Fixed a bug where some integration could fail due to model properties being before EVENT_BEFORE_SAVE.
- Fixed a bug where Notification Persistence would throw errors if the form upsert event has errors.

## 5.1.16.1 <span>2024-04-29</span>

### Fixes
- Fixed a bug where the update migration for 5.1.16 was not automatically being triggered.


## 5.1.16 <span>2024-04-26</span>

### Additions
- Added the ability to set conditional rules that can prematurely fully submit the form if matched.
- Added the ability to set conditional rules on Submit, Back and Save buttons.
- Added support for using conditional rules across different pages, e.g. _Field C_ on _Page 2_ will display if _Field A_ on _Page 1_ is _X_.

### Changes
- Updated the color of submit buttons inside the form builder to dark gray to prevent confusion with actual action buttons.

### Fixes
- Fixed a bug where saving any Freeform settings would clear the Form Builder "defaults" settings.
- Fixed a bug where submissions flagged as spam would still send data off to integrations instead of being queued.
- Fixed some potential issues with submitting Checkbox fields.


## 5.1.15 <span>2024-04-24</span>

### Changes
- Updated GraphQL to include HTML and Rich Text field types.

### Fixes
- Fixed a bug where the _Export Profiles_ page in the CP would display an error in Craft 5 when any profiles exist.
- Fixed a bug where Stripe Payment submissions were still processed when flagged as spam by Freeform.
- Fixed a bug where the form builder included two labels for Checkbox fields.
- Fixed a bug where creating a new Site and setting it to be the Primary site (at the same time) would fail due to Freeform.
- Fixed a bug where the old approach of `FreeformField_Submit` and `FreeformField_Save` were still showing under `fields` in the GraphQL explorer.


## 5.1.14 <span>2024-04-19</span>

### Additions
- Added `freeform/submissions/generate` CLI command to allow the creation of fake submission data into forms. Useful for testing and troubleshooting some issues.
- Added support for searching into specific fields in the CP Submission element search bar (e.g. `firstName:bob`). You may need to run `./craft freeform/submissions/resave --update-search-index` once for this to work.


## 5.1.13.1 <span>2024-04-18</span>

### Fixes
- Fixed an issue with the **Dotdigital** integration.


## 5.1.13 <span>2024-04-17</span>

### Additions
- Added Craft element search support for submissions. You may need to run `./craft freeform/submissions/resave --update-search-index` once for this to work.
- Added `freeform/submissions/resave` CLI command to resave all existing submissions.
- Added `freeform/submissions/fix-titles` CLI command to fix the migration of Element titles for sites that have upgraded from Craft 4 to Craft 5. This command needs to be run once after the migration.

### Fixes
- Fixed a visual issue with the Quick Export modal styles in Craft 5.
- Fixed a bug where the Express Forms migration utility would not work if there were no fields in a form.
- Fixed a race condition issue where refreshing the browser in the form builder would sometimes show stale or invalid data on section tabs.


## 5.1.12 <span>2024-04-12</span>

### Changes
- Changed all `PUT` requests to `POST` requests for sites with strict method allowlists.
- Updated the form builder to include the Craft notice banner for successes and errors when saving the form.
- Updated success/error notices throughout the plugin.
- Updated breadcrumbs throughout the plugin.

### Fixes
- Fixed a bug where error validation was not working correctly in the form builder.


## 5.1.11 <span>2024-04-11</span>

### Changes
- Refactored Captcha loaders and added lazy load support.
- Improved Failure Behavior settings for Captchas inside the form builder.
- Improved display of **HTML**, **Rich Text**, **Hidden** and **Invisible** field types in the form builder.
- Updated the `fields` and `lists` limits in the **ActiveCampaign** integration.
- Updated the `stripe/stripe-php` dependencies to include `^13.0`.
- Updated the `symfony/property-access`, `symfony/finder`, `symfony/filesystem` and `symfony/expression-language` dependencies to remove `2.8|^3.0|^4.0`.
- Updated the `symfony/serializer` dependency to include `^5.0` and `^7.0`.
- Updated the `hashids/hashids` dependency to include `^5.0` and remove `^2.0`.
- Removed the `composer/composer` dependency requirement.

### Fixes
- Fixed an issue with the **Dotdigital** integration.
- Fixed a deprecation error when viewing the CP Submissions index in Craft 5.
- Fixed an alignment issue with the Submit buttons in the CP Submission and Spam detail pages.
- Fixed a bug where Element integration field mapping was not reliably loading and saving data.
- Fixed a bug where Email Marketing integrations could fail when field mapping is updated.
- Fixed a bug in which the form's **Updated** date was not correctly updated.
- Fixed a bug where the Javascript Test was loading inside the CP Submission detail page.
- Fixed a bug where an element query could execute before Craft loaded.


## 5.1.10 <span>2024-04-04</span>

### Changes
- Updated the `symfony/property-access`, `symfony/finder`, `symfony/filesystem` and `symfony/expression-language` dependencies to include `^7.0`.
- Updated the `nesbot/carbon` dependency to include `^3.0.0"`.


## 5.1.9 <span>2024-04-03</span>

### Additions
- Added an updated **Dotdigital** email marketing integration.
- Added an `EVENT_UPDATE_PAYMENT_METADATA` developer event for modifying Stripe metadata.

### Changes
- Refactored the form submit and submit button lock process to work reliably when more complex features and flows are active (e.g. Stripe, Captchas, File Drag & Drop, etc).
- Updated the domain extension length maximum from `6` to `15` for **Website** fields.
- Exposed the **Maximum Length** field setting for GraphQL.

### Fixes
- Fixed a bug where Freeform fields could not map to Salesforce Checkbox fields.
- Fixed an issue with Stripe subscriptions and empty product names. Also added a failsafe for the product name.
- Fixed a bug where the Page tab label editor in the builder was broken when a scrollbar was present (lots of pages).
- Fixed a bug where the **Max Length** setting was not present for applicable fields.
- Fixed a bug where deleting **Group** fields could delete other fields that share its row in the builder.
- Fixed a bug where the **reCAPTCHA v2 Checkbox** was not being validated if left empty on a form with Stripe.
- Fixed a bug where the Submit button was prematurely becoming active again before the Stripe payment form was fully processed.
- Fixed a bug where Captchas were loaded inside the CP submission detail page when enabled.


## 5.1.8 <span>2024-03-27</span>

### Additions
- All _reCAPTCHA_ and _hCaptcha_ versions are now available for the **Lite** edition (as well as **Pro**).

### Changes
- Updated the delete icon display and behavior for managing page tabs in the builder.

### Fixes
- Fixed a bug where the form submit button was not always locking correctly with forms using Stripe or File Upload fields.
- Fixed a bug where deleting Group fields in the builder was not also removing the fields inside.
- Fixed a visual issue when editing page tab names in the builder when using the Safari and Firefox browsers.
- Fixed a visual issue for field blocks in the builder when using the Microsoft Edge browser.
- Fixed a bug where long field labels overlapped other field labels in the builder.
- Fixed a bug where conditional rules for forms might not always migrate correctly from Freeform 4.


## 5.1.7 <span>2024-03-22</span>

### Fixes
- Fixed a bug where reCAPTCHA would conflict with forms using Stripe Payments.
- Fixed a bug where mapping a field with a handle of `name` would break the Stripe integration.
- Fixed a bug where running the migration from Freeform 3.x could trigger a `Base table or view already exists` error.
- Fixed some Safari browser stying issues with the horizontal scrollbar for page tabs.


## 5.1.6 <span>2024-03-20</span>

### Additions
- Added a **Not Like** option for filtering on field values in Export Profiles.

### Changes
- Improved the form builder so it doesn't prematurely close the property editor when a click and drag happens beyond it (e.g. selecting a value in a text input field to clear and replace it).

### Fixes
- Fixed a bug where fields could have conditional rules for each other and cause an infinite loop.
- Fixed a bug where removing conditional rules did not always remove the correct rule set.
- Fixed a bug where using multiple Stripe fields from multiple Stripe accounts in the same form would not work correctly.


## 5.1.5.1 <span>2024-03-20</span>

### Fixes
- Fixed a bug where a change for setting `nocache` headers in Freeform 5.1.5 broke the Craft CLI.


## 5.1.5 <span>2024-03-19</span>

### Changes
- Updated the CSRF input to send `nocache` headers when rendering. 
- Adjusted the Diagnostics page to include PHP 8.2 and 8.3 compatibility.

### Fixes
- Fixed a bug where Freeform was opening unnecessary sessions.
- Fixed a bug where page tabs would become inaccessible when the number of tabs exceeds the width of the browser window.
- Fixed a bug where mapping to the _Enabled_ setting on Craft Entry element integrations was not working.
- Fixed a bug where user group selection in the User element integration did not allow multiple choice.
- Fixed a bug where files were not being uploaded for regular File Upload fields when not using AJAX.
- Fixed a bug where the User element integration was not always working when used in _edit_ mode.
- Fixed a bug where changes to email notifications in the form builder were not sticking if you switched to another tab.
- Fixed a bug where the default theme option for Stripe was incorrectly named `default` instead of `stripe`, causing console errors in the browser.


## 5.1.4 <span>2024-03-14</span>

### Additions
- Added the ability to add attributes to Captcha containers at the template level.

### Changes
- Reverted the Campaign Monitor to API tokens (instead of OAuth) to address several complications.

### Fixes
- Fixed a bug where the Freeform 4 to 5 migration could fail when creating submission database tables in some circumstances.
- Added clarity to the **Activate Users** setting for the User element integration.


## 5.1.3 <span>2024-03-11</span>

### Fixes
- Fixed a bug where Dynamic Recipient fields could sometimes fail in the Freeform 4 to 5 migration.
- Fixed a bug where saving submissions via console commands would fail on the saved notes feature.
- Fixed a bug where the Calculations field type was not triggering the Stripe element refresh when set as the dynamic amount field while set as _Plain Text_.
- Fixed a bug where the Empty Option Label feature was showing on fields other than Dropdowns.


## 5.1.2 <span>2024-03-07</span>

### Fixes
- Fixed a bug where Success Templates were not being mapped in the Freeform 4 to 5 migration.
- Fixed a bug where the Calculations field type was not triggering the Stripe element refresh when set as the dynamic amount field.
- Fixed a bug where changing a form's Form Type had no effect.
- Fixed a bug in conditional rules logic that prevented fields with handles beginning with a number from working correctly.


## 5.1.1 <span>2024-03-06</span>

### Additions
- Added compatibility with Craft 5 beta (in addition to Craft 4.x).
- Added back support for an optional Empty Option Label for Dropdown fields that are populated by Elements or Predefined options.
- Added support for Automatic Spam Purging in the **Lite** edition of Freeform.

### Changes
- Refactored the Submission Purge functionality to use the Craft queue.
- Updated the Stripe dynamic amount field setting to accept Calculation fields.

### Fixes
- Fixed a bug where the default Status set inside the builder was not being respected.
- Fixed a bug where only the first File Upload field would work if using multiple File Upload fields in the form.
- Fixed a bug where the Freeform 4 to 5 migration was setting the Success Behavior setting to _Reload_ for all forms instead of matching what was set in Freeform 4.
- Fixed a bug where converting a field with Array data to a different field type without (e.g. _Checkboxes_ to _Dropdown_) would trigger an error.
- Fixed a bug where the Calculation field was not being added to the Special field group on migration.


## 5.1.0 <span>2024-03-01</span>

### Additions
- Added a Calculation field type, which allows you to perform dynamic calculations based on user-input values within forms.
- Added a migration from the Express Forms plugin. It will import forms and fields, submissions, and notification templates.
- Added ability to set dynamic notifications using GraphQL.

### Fixes
- Fixed a bug where page buttons were not translatable.


## 5.0.16 <span>2024-02-28</span>

### Fixes
- Fixed a bug where the Stripe payments field would not load correctly when logged out.


## 5.0.15 <span>2024-02-27</span>

### Changes
- Updated all sample formatting templates to include complete Stripe appearance API customization.

### Fixes
- Fixed a bug where connecting to new integrations using OAuth 2.0 were not working due to the redirect URI being empty.


## 5.0.14.1 <span>2024-02-23</span>

### Fixes
- Fixed some remaining issues related to the migration from Freeform 4.


## 5.0.14 <span>2024-02-23</span>

### Changes
- Updated the reserved words list to make exceptions for `name`, `type`, and `username` as they are more likely to be used and don't appear to cause any issues.

### Fixes
- Fixed a bug where Confirm fields were present in email notifications.
- Fixed a bug where the Page Skipping feature for Conditional Rules was not working correctly.
- Fixed a bug where forms would error when Freeform Date fields were mapping to Craft date fields (e.g. Post Date, Expiry Date, etc) in Element integrations.
- Fixed a bug where setting a template override for the submission status was not working.


## 5.0.13 <span>2024-02-23</span>

### Additions
- Added a reserved word validator using Craft's reserved words to check against field handles.
- Added the ability to map directly to the **Full Name** in the Craft User element integration.

### Changes
- Updated Confirm fields to no longer store data when targeting a Password field.

### Fixes
- Fixed a bug where creating new forms with special or foreign characters would cause the form not to be created due to an invalid form handle.
- Fixed a bug where the _Fill Form Values from the GET Query String_ setting was not being respected.
- Fixed a bug where editing existing users via the Craft User element integration in a Freeform form did not affect **First Name** and **Last Name** fields.
- Fixed a bug where the Page Skipping feature for Conditional Rules was not working at all.
- Fixed a bug where the Stripe Payments field was not working with the Tailwind sample formatting template (and potentially some custom templates).
- Fixed a bug where some sample formatting templates showed unnecessary styling wrappers around Stripe Payments fields.


## 5.0.12 <span>2024-02-19</span>

### Additions
- Added support for querying conditional rules for fields and pages in GraphQL.

### Fixes
- Fixed a bug where migrated forms with a Dynamic Recipients field (not User Select) would trigger an error loading/submitting the form.
- Fixed a bug where Regex fields were triggering an error if left empty when submitting the form.


## 5.0.11 <span>2024-02-16</span>

### Additions
- Added a setting to allow users to enable dashes in field handle names.

### Fixes
- Fixed several issues related to the migration from Freeform 4, including table prefixes and field handles that are too long getting corrupted.
- Fixed an issue where table prefixes were not being respected on fresh installs.
- Fixed the precedence order for overriding attributes in formatting templates. Overrides in the template loading the form now take precedence over the formatting template overrides within it.
- Fixed a bug where editing/saving a submission inside the control panel could sometimes error about a user ID being `0`.
- Fixed a bug where the Stripe Webhook URL was incorrectly including a CP admin path. Any existing Stripe integrations will need to be manually adjusted.
- Adjusted the JS in a few of the sample templates.


## 5.0.10 <span>2024-02-08</span>

### Additions
- Added PKCE (Proof Key for Code Exchange) implementation for integrations using the OAuth2.0 flow.
- Added support for PKCE (Proof Key for Code Exchange) in the Salesforce integration.

### Fixes
- Fixed a bug where the CP Submission detail pages were not handling conditional rule logic correctly.
- Fixed a bug where the **Send Digest Email** job was added to the Craft queue even when turned off.
- Fixed a bug where the Stripe Payments field would not load in the form when the **Freeform Script Insertion Location** setting was set to _Page Header_.
- Fixed a bug where the **Use Option Labels when Exporting** setting was causing exports to fail.
- Fixed a bug where the Freeform was causing _Element query executed before Craft is fully initialized_ errors to be logged in the Craft logs.


## 5.0.9 <span>2024-02-07</span>

### Fixes
- Fixed a bug where the Mailchimp integration was only showing one audience/mailing list.
- Fixed a bug where the `fieldIdPrefix` parameter was not working.
- Fixed a bug where the Conditional Rules value input was not being hidden for empty condition rule types.


## 5.0.8 <span>2024-02-06</span>

### Changes
- Implemented better cache busting for loading script pointers.
- Implemented a unified entry point for loading scripts based on current settings.
- Implemented a single Stripe script loader and mutation observer.
- Updated dropdown settings to have a clearer distinction between mapped/unmapped items.

### Fixes
- Fixed a bug where the Stripe Payment field would sometimes not load on the front end.
- Fixed a bug where all old integrations were not being cleared during the migration from Freeform 4.


## 5.0.7 <span>2024-02-02</span>

### Additions
- Added support for querying page Submit buttons in GraphQL.

### Changes
- Updated the HubSpot integration to use v3 of the API and the private app token approach instead of OAuth flow.

### Fixes
- Fixed a bug where hyphens were allowed in form and field handles.
- Fixed a bug where the GraphQL cache was not resetting after making form updates.
- Fixed a bug where `maxLength` was included in Text and Textarea field types in GraphQL when not applicable.


## 5.0.6.1 <span>2024-02-01</span>

### Fixes
- Fixed a bug where integration settings pages were not being displayed in the navigation when `allowAdminChanges` was set to `false`.
- Fixed a bug where the Dynamic Template Notifications feature was not working correctly.


## 5.0.6 <span>2024-01-31</span>

### Additions
- Added the ability to manually render Submit buttons in forms.

### Changes
- Adjusted the _Manual Form_ extra template in the demo templates to use the new manual Submit button approach.

### Fixes
- Fixed a bug where the **replace** syntax for template overrides (e.g. `=class`) was not working correctly.
- Fixed a bug where `0` was not considered a valid value for a Number field with the `required` validator.
- Fixed a bug where regular File Upload fields were not working correctly if the field was set to be required.
- Fixed a bug where field values/default values were not returning correctly in GraphQL queries.
- Fixed a bug where some sample formatting templates did not correctly style the File Upload Drag & Drop fields.


## 5.0.5 <span>2024-01-30</span>

### Changes
- Updated form rendering to work when iterating over rows directly in the `form` object for better backward compatibility with the Freeform 4.x approach.
- Updated `form.successMessage`, `form.errorMessage` and `field.rulesHtmlData` to have fallbacks (that are empty) to prevent hard errors in old formatting templates that use them.

### Fixes
- Fixed a bug where user permissions were not correctly being considered on form cards on the Forms dashboard page.
- Fixed a bug where the weekly/daily email Digest feature was not always working correctly.
- Fixed a visual bug where the breadcrumbs in the form builder would formulate incorrectly when refreshing the browser.


## 5.0.4 <span>2024-01-29</span>

### Additions
- Added a _Page Header_ option for the **Freeform Javascript Insertion Location** setting.

### Fixes
- Fixed a bug where sites using Postgres would fail during migration.
- Fixed a bug where an error about `includeAttachments` on notification templates could occur for some sites.
- Fixed a bug where Captchas would display on all pages instead of just the last page.
- Fixed a bug where misconfigured options fields could crash the Freeform 4 migration.
- Fixed a visual bug where the breadcrumbs in the form builder could formulate incorrectly when saving the form.


## 5.0.3 <span>2024-01-26</span>

### Changes
- Updated the weekly/daily email Digest to use Craft's queue jobs.
- Updated form rendering to not hard error if `form.customAttributes` is used in an older formatting template. It now logs a notice to the Craft deprecation warning log.

### Fixes
- Fixed a bug where manually coded forms were not having the form method being set automatically.
- Fixed a bug where rendering a form through the Freeform Form field on another element could trigger an error.
- Fixed a bug where multi-option fields were not working correctly with Conditional Rule values.
- Fixed a bug where File Upload Drag & Drop fields were not working correctly if the field was set to be required.
- Fixed a bug where mandatory attributes were showing up in the form builder attribute editor.
- Fixed the `extras/manual-form` demo template to work correctly with Freeform 5.

## 5.0.2 <span>2024-01-25</span>

### Additions
- Verified compatibility with Craft 4.7.

### Fixes
- Fixed a few compatibility issues with PHP 8.0.
- Fixed a bug where the migration could potentially convert a couple of the default fields incorrectly in the first form.


## 5.0.1 <span>2024-01-23</span>

### Fixes
- Fixed an `instanceof` check issue on the Freeform 5 migration.
- Fixed a bug where default form success/error messages were not being added if empty.


## 5.0.0 <span>2024-01-22</span>

::: warning
If upgrading from Freeform 4, please see the special [upgrade guide](./updating-freeform-4/) before proceeding.
:::

### Additions
- **Form Builder**
    - Fields can be saved as **Favorites** for quick use in other forms.
    - Fields from other forms can be **searched** and reused in your form.
    - A **Field Type Manager** has been added to the form builder. It allows you to show/hide field types, arrange them into groups, and color code them.
    - Created/Updated dates and author information are now stored for each form and visible inside the form builder.
    - Configure email notifications in the form builder using complex conditional rules based on field data.
    - A wide range of form builder settings can now have default values set for them, and can also be locked to that value. For example, you can force the Tailwind 3 formatting template to be used for every form.
- **Fields**
    - The **Group** field type allows you to nest multiple fields inside. Additionally, conditional rules can be applied to Group fields.
    - Fields being populated with **Element** or **Predefined** data can now have the data converted to **Custom** options so they can be modified, added to, removed, reordered, etc.
    - Fields can now be individually encrypted.
    - **Custom field types** are available to be created now.
- **Email Notifications**
    - Configure email notifications in the form builder using complex conditional rules based on field data.
- **Integrations**
    - Captchas now include a setting inside the form builder to force a country code, e.g. `en`, `de`, etc. If left blank, the locale will be auto-detected.
- **Templating**
    - The **Template Overrides** feature enables modification of attributes for the form, fields, and buttons, as well as overriding field labels, values, and instructions at the template level.
    - The **Settings** object allows you to access all of the form's settings assigned to it in the form builder, e.g. `form.settings.errorMessage`.
    - The **Multipage All Fields** formatting template replaces the **Bootstrap 5 Multipage All Fields** template.
    - The `labels` and `labelsAsString` methods are now available for all _option_ field types. This allows you to choose between displaying option labels instead of values when loading submission data in the front end or email notifications.
    - The `implements` method is available to all fields for Twig-friendly implementation checks, e.g. `field.implements('options')`.
    - The global `freeform` variable allows shorthand for template queries, e.g. `freeform.form` instead of `craft.freeform.form`.
- **Stripe Payments**
    - The Pro edition now includes fresh support for the newer **Stripe Payment Element**.
    - Support for **Stripe Link**, **Apple Pay**, **Google Pay**, **PayPal** (within Europe), **bank payments**, **deferred payments** and many other options.
    - Ability to include more than one Stripe payment element field in a form. When used with conditional rules, you can show/hide one Stripe element at a time (e.g. use a dropdown field to allow the user to choose between one-time or recurring payments).
- **Surveys & Polls**
    - The _Freeform Surveys & Polls_ plugin features are now included in the _Pro_ edition of Freeform. Please see the special [upgrade guide](./updating-freeform-4/) before proceeding.

### Changes
- **Control Panel**
    - The **Dashboard** and **Forms** pages have been combined and redesigned.
    - The **Email Notifications** subnav menu item has been renamed to **Notifications**.
    - All settings and references of `behaviour` have been updated to `behavior`.
- **Form Builder**
    - Completely redesigned the form builder.
        - Settings and other features are now in full-page tabs to allow for lots of room to configure.
        - Fields are specific to forms and added by dragging fresh field types into the layout.
    - Reorganized all form settings and behaviors into multiple subsections of a unified **Settings** tab.
    - Reorganized **Email Marketing**, **CRM**, **Element**, **Stripe**, **Captcha**, **POST Forwarding** and **Google Tag Manager** settings into multiple subsections of a unified **Integrations** tab.
    - The **Conditional Rules** tab has been greatly improved to include a field map along with visual cues, making configuration faster and less confusing.
    - Some of the option values for the **Duplicate Check** (formerly _Limit Form Submission Rate_) setting have been changed.
- **Fields**
    - Fields are now created and specific to each form (vs. being global to all forms).
    - Fields can be saved as Favorites or searched upon to be reused in other forms.
    - Fields can now be changed to other field types at any point, but be aware that data loss could occur when switching incompatible field types.
    - The **Checkbox Group** field type has been renamed to **Checkboxes** (and `checkboxes` in formatting templates).
    - The **Radio Group** field type has been renamed to **Radios** (and `radios` in formatting templates).
    - The **Select** field type has been renamed to **Dropdown** (and `dropdown` in formatting templates).
    - The field type handles of `cc_details`, `confirmation`, `file_drag_and_drop`, `multiple_select`, `opinion_scale`, and `rich_text` have been renamed to `stripe`, `confirm`, `file-dnd`, `multiple-select`, `opinion-scale`, and `rich-text`, respectively.
    - The **Dynamic Recipients** field type has been replaced with the **User Select** feature, which provides the ability to assign a notification layer to any Dropdown, Checkboxes, Radios, or Multi-Select field types.
    - The **Email Marketing**/**Mailing List** special field type has been replaced with the ability to assign the Email Marketing integration to any existing Checkbox or Hidden field. This will also allow you to keep a record in Freeform of whether the mailing list was subscribed to by the user.
    - The **reCAPTCHA v2 Checkbox** and **hCaptcha Checkbox** special fields are now inserted into the form automatically (before the Submit button).
    - The **Submit** and **Save & Continue Later** buttons are now automatically inserted at the end of each form page.
    - The **Opinion Scale** field type markup for manual templating has been adjusted slightly.
- **Email Notifications**
    - The form builder now has a **Notifications** tab dedicated to configuring all types of email notifications (except for template-level ones).
- **Integrations**
    - The **Element Connections** feature is now referred simply to **Element** integrations.
    - **Element** integrations are now set up in the Freeform settings area and then configured per form.
    - **Webhook** integrations are now configured per form (but still set up initially in the Freeform settings area).
    - Integrations with more than one type have been unified with expanded functionality:
        - _Salesforce Leads_ and _Salesforce Opportunities_ are now in a single _Salesforce_ integration.
        - _Pipedrive Leads_ and _Pipedrive Deals_ are now in a single _Pipedrive_ integration.
        - _Zoho Leads_ and _Zoho Deals_ are now in a single _Zoho_ integration.
    - Integrations that map to more than one endpoint allow more flexibility when choosing which endpoints to map to.
    - The Salesforce integration has been changed to OAuth validation (instead of username/password).
    - The Pipedrive integration has been changed to OAuth validation.
    - The **dotmailer** integration has been updated and renamed to **Dotdigital**.
    - All **MailingList**/**mailing_list**, etc, references in the code and database have been renamed to **EmailMarketing**/**email_marketing**, etc.
- **Settings**
    - The _Formatting Templates_, _Email Templates_ and _Success Templates_ settings pages have all been combined into a single **Template Manager** settings page.
    - Reorganized and adjusted settings pages.
    - The **Limit Form Submission Rate** setting has been renamed to **Duplicate Check**. Available options have been revised and renamed for clarity as well.
- **Spam Protection**
    - The **Freeform Honeypot** and **Javascript Test** features have been decoupled, overhauled, and set up as integrations. They can now be enabled/disabled and configured per form. The Javascript Test is now a simpler approach that will streamline use with caching or headless implementations.
    - The **Javascript Enhancement** feature has been renamed to **Javascript Test**.
    - **Captchas** are now stored as integrations, can have multiple configured per site, and can be turned on/off and further configured at the form level inside the form builder, e.g. stricter settings, different behavior, etc.
    - The **reCAPTCHA v2 Checkbox** and **hCaptcha Checkbox** special fields are now inserted into the form automatically (before the Submit button).
- **Templating**
    - The `suppress` parameter (for suppressing email notifications and integrations when editing submissions on the front end) has been renamed to `disable` and has had the `dynamicRecipients`, `submitterNotifications`, `connections` parameter names changed to `userSelectNotifications`, `emailFieldNotifications`, and `elements`, respectively. An additional `conditionalNotifications` parameter has been added to account for the new _Conditional Notifications_ feature.
    - All formatting templates have been updated and improved.
    - The **Bootstrap 5 Multipage All Fields** formatting template has been transitioned to a "Basic" non-Bootstrap version, now called **Multipage All Fields**.
    - Form settings and behaviors can now all be accessed in templates via `freeform.settings.settingName`.
    - The `option.checked` property has been updated to an approach that compares `option.value` to `field.value`.
    - The `disableRecaptcha` parameter is now `disableCaptcha`.
    - All references to `loading` (text and/or spinner indicator displayed on the submit button) are now `processing`.
    - All references to `spinner` (spinner indicator displayed on submit button) are now `processingSpinner`, etc.
    - The `limitSubmissions` parameter has been renamed to `duplicateCheck` and the values have been renamed for clarity.
    - The `submissionLimitReached` property in the Form object has been renamed to `duplicate`.
    - All references to `freeform-file-drag-and-drop` for CSS overrides have been updated to `freeform-file-dnd`.
- **Javascript**
    - The defaults for `errorClassBanner`, `errorClassList`, `errorClassField` and `successClassBanner` plugin options for JS overrides have been adjusted to `freeform-form-errors`, `freeform-errors`, `freeform-has-errors` and `freeform-form-success`, respectively (`ff-` changed to `freeform-`).
- **GraphQL**
    - The `FreeformFormInterface` fields `showSpinner`, `showLoadingText` and `loadingText` have been renamed to `showProcessingSpinner`, `showProcessingText` and `processingText` respectively.

### Deprecations
- The _PHP Sessions_ and _Database Table_ options for the Freeform Session Context setting are deprecated and are planned to be removed in Freeform 6. Encrypted Payload continues to be the assumed and recommended approach, but can still be overridden to PHP Sessions or Database Table in project config.

### Removals
- **Control Panel**
    - The **Field Manager** area (**Freeform → Fields**) has been removed, as fields are no longer globally shared unless they are saved as Favorites.
    - The **Dashboard** page has been removed in favor of a redesigned **Forms** page.
    - Exporting "shortcuts" from the Dashboard is no longer available with the removal of the **Dashboard** page, but many other exporting options are available.
    - The **What's New** feature has been removed in favor of using Craft's Announcements feature.
    - The **Resources** area inside the Freeform control panel has been removed.
    - The **Form Builder Tutorial** and **Install Demo Banner** settings have been removed.
    - The **Stats** widget has been removed as it isn't very relevant anymore.
    - The **Form Values** widget has been removed.
- **Settings**
    - The **Access Fields** and **Manage Fields** permissions have been removed as they are no longer applicable.
    - The **Display Order of Fields in the Form Builder** setting has been removed as it is no longer applicable.
    - The following **Project Config** items have been removed due to the improvements to Form Builder defaults:
        - `defaultTemplates` - use `includeSampleTemplates: true` under `defaults:` instead.
        - `renderFormHtmlInCpViews` - use `previewHtml: true` under `defaults:` instead.
        - `twigInHtml` - use `twigInHtml: true` under `defaults:` instead.
        - `twigInHtmlIsolatedMode`. - use `twigIsolation: true` under `defaults:` instead.
        - `formattingTemplate` - use `value: basic-light/index.twig` under `defaults:` → `settings:` → `general:` → `formattingTemplate:` instead.
        - `ajaxByDefault` - - use `value: '1'` under `defaults:` → `settings:` → `processing:` → `ajax:` instead.
    - The `freeformHoneypot`, `freeformHoneypotEnhancement`, `customHoneypotName`, `customErrorMessage`, `recaptchaBehaviour`, `recaptchaEnabled`, `recaptchaErrorMessage`, `recaptchaKey`, `recaptchaSecret`, `recaptchaLazyLoad`, `recaptchaMinScore`, `recaptchaSize`, `recaptchaTheme` and `recaptchaType` settings have been removed from **Project Config**, as Honeypot and Captchas are stored as integrations now.
    - The **Additional Optional Checks** setting for the **Update Warnings & Notices** feature has been removed.
    - The **Freeform Session Context** setting has been removed. _Encrypted Payload_ continues to be the assumed and recommended approach, but can still be overrided to _PHP Sessions_ or _Database Table_ deprecated options in project config.
    - The `freeform_lock` database table has been removed as it is no longer used.
- **Templating**
    - The **Bootstrap 3**, **Bootstrap 4**, **Bootstrap 5 Multipage All Fields** and **Tailwind 1** formatting templates have been removed.
    - The `overrideValues` parameter for Form queries has been removed. Please use the `value` parameter in the new **Template Overrides** feature.
    - The `option.checked` property has been removed. Please use and compare `option.value` to `field.value`.
    - The `disableRecaptcha` template parameter has been removed. Please use `disableCaptcha` instead.
    - The `limitFormSubmissions` property has been removed from the `form` object. Please use `form.settings.limitSubmissions` instead.
    - The `freeform/fields/create` field creation console command has been removed as it is no longer applicable.
    - The following attribute control parameters have been removed and replaced by accessing them via the new `attributes` object: `inputClass`, `submitClass`, `rowClass`, `columnClass`, `labelClass`, `errorClass`, `instructionsClass`, `class`, `id`, `name`, `method`, `action` and `useRequiredAttribute`.
    - The `instructionsBelowField` parameter has been removed. You can simply use the individual field render methods instead (`field.renderLabel`, `field.renderInput`, `field.renderInstructions`, `field.renderErrors`) and place them in the desired order. If your site relies on this feature, please review your custom formatting templates and update as necessary. 
- **GraphQL**
    - The `extraPostUrl`, `extraPostTriggerPhrase`, `gtmId`, and `gtmEventName` fields have been removed from `FreeformFormInterface` in GraphQL. Please use the new interface instead (TBD).
    - The `inputAttributes`, `labelAttributes`, `errorAttributes`, and `instructionAttributes` fields have been removed from `FreeformFormInterface` in GraphQL. Please use the `FreeformAttributesInterface` instead.
    - The `hash` field has been removed from `FreeformFieldInterface` in GraphQL as it is no longer relevant.
- **Stripe Payments**
    - The **Stripe Payment** feature has been removed and replaced by all-new support for the newer Stripe Payment Element.

</div>