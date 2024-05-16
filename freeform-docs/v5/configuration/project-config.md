---
title: Craft Freeform 5.x - Project Config
description: If you wish to manage the configuration of Freeform settings via Craft's Project Config, here's a list of every setting currently available.
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

<span class="page-section"><a href="/craft/freeform/v5/configuration/">Configuration</a></span>

# Project Config

Freeform settings can all be controlled via Craft's [Project Config](https://craftcms.com/docs/5.x/system/project-config.html) file.


## Available Config Settings

If you wish to manage the configuration of Freeform settings via Craft's [Project Config](https://craftcms.com/docs/5.x/system/project-config.html), here's a list of every setting currently available:

<div class="code-sbs">
<div class="code-sbs-code">

``` yaml {2,9,15,18,23,29,35,39,47,51,59,76,85}
freeform:
  # GENERAL INFO
  edition: pro
  enabled: true
  licenseKey: EXAMPLETEST12EXAMPLETEST
  schemaVersion: 5.0.0
  settings:

    # GENERAL SETTINGS
    pluginName: ''
    defaultView: dashboard
    badgeType: all
    sitesEnabled: true

    # ELEMENT FIELD TYPE
    formFieldShowOnlyAllowedForms: false

    # EXPORTING
    removeNewlines: true
    exportLabels: true
    exportHandlesAsNames: false

    # SUBMISSION DATA
    fillWithGet: true
    updateSearchIndexes: true
    purgableSubmissionAgeInDays: '365'
    purgableUnfinalizedAssetAgeInMinutes: 180

    # FORM SUBMIT BEHAVIOR
    formSubmitDisable: true
    autoScrollToErrors: true
    autoScroll: true
    rememberPageSubmitOrder: true

    # FREEFORM SCRIPTS
    scriptInsertLocation: footer
    scriptInsertType: pointers

    # FORM SESSIONS
    sessionContext: payload
    sessionContextSecret: ''
    sessionContextTimeToLiveMinutes: '180'
    sessionContextCount: '100'
    sessionEntryMaxCount: 50
    sessionEntryTTL: 10800

    # SAVE & CONTINUE LATER
    saveFormTtl: '14'
    saveFormSessionLimit: '5'

    # TEMPLATE MANAGER
    formTemplateDirectory: _freeform/formatting/
    emailTemplateDirectory: _freeform/emails/
    emailTemplateStorageType: files_database
    emailTemplateDefault: files
    allowFileTemplateEdit: true
    successTemplateDirectory: _freeform/success/

    # SPAM BLOCKING
    spamProtectionBehavior: simulate_success
    bypassSpamCheckOnLoggedInUsers: false
    spamFolderEnabled: true
    purgableSpamAgeInDays: '60'
    blockedEmails: '*@yahoo.com\n*.ru'
    showErrorsForBlockedEmails: false
    blockedEmailsError: 'Invalid Email Address'
    blockedKeywords: "viagra\ncheesies\ntuna\r\n*Д*"
    showErrorsForBlockedKeywords: false
    blockedKeywordsError: 'Invalid Entry Data'
    blockedIpAddresses: ''
    submissionThrottlingCount: ''
    submissionThrottlingTimeFrame: m
    minimumSubmitTime: '5'
    formSubmitExpiration: ''

    # NOTICES & ALERTS
    displayFeed: true
    alertNotificationRecipients: bob@acmewidgets.net
    digestFrequency: 2
    digestRecipients: harry@acmewidgets.net
    clientDigestFrequency: -1
    clientDigestRecipients: bob@acmewidgets.net
    digestOnlyOnProduction: false

    ## FORM BUILDER DEFAULTS
    defaults:
      previewHtml: true
      twigInHtml: true
      twigIsolation: true
      includeSampleTemplates: true
      notifications:
        admin:
          template:
            value: admin.twig
            locked: true
        conditional:
          template:
            value: conditional.twig
            locked: false
        userSelect:
          template:
            value: admin.twig
            locked: false
        emailField:
          template:
            value: submitter.twig
            locked: true
      settings:
        general:
          formType:
            value: Solspace\Freeform\Form\Types\Regular
            locked: true
          submissionTitle:
            value: '{{ dateCreated|date("Y-m-d H:i:s") }}'
            locked: false
          formattingTemplate:
            value: basic-light/index.twig
            locked: false
        dataStorage:
          storeData:
            value: true
            locked: false
          defaultStatus:
            value: '2'
            locked: true
          collectIp:
            value: true
            locked: false
        processing:
          ajax:
            value: true
            locked: true
          showIndicator:
            value: true
            locked: false
          showText:
            value: true
            locked: false
          processingText:
            value: Processing...
            locked: false
        successAndErrors:
          successBehavior:
            value: reload
            locked: false
          returnUrl:
            value: ''
            locked: false
          successTemplate:
            value: general-success.twig
            locked: false
          successMessage:
            value: 'Form has been submitted successfully!'
            locked: false
          errorMessage:
            value: 'There was an error submitting the form.'
            locked: false
        limits:
          duplicateCheck:
            value: no_limit
            locked: false
```

</div>
<div class="code-sbs-comments">

``` {2,9,15,18,23,29,35,39,47,51,59,76,85}

GENERAL INFO
← Options are `express`, `lite` and `pro`.





GENERAL SETTINGS
← Custom Plugin Name (Pro).
← Default CP View. Options are 'forms' or 'submissions'.
← Plugin Badge. Options are: '', 'all', 'notices', 'errors', 'submissions', or 'spam'.
← Site Filtering for Forms and Submissions

ELEMENT FIELD TYPE
← Restrict form options in the Form field type to the user's permissions.

EXPORTING
← Remove Newlines from Textareas for Exporting
← Use Option Labels when Exporting
← Use Field Handles for Headings when Exporting

SUBMISSION DATA
← Fill Form Values from the GET Query String
← Enable Search Index Updating on New Submissions
← Automatically Purge Submission Data
← Purge Unfinalized Asset Files (in minutes)

FORM SUBMIT BEHAVIOR
← Disable Submit Button on Form Submit
← Automatically Scroll to Form on Errors and Multipage forms
← Automatically Scroll to top of the Form on AJAX submit
← Remember the Page Order in Multi-page forms (Conditional Rules page skipping)

FREEFORM SCRIPTS
← Freeform Script Insertion Location. Options are 'form', 'footer' or 'manual'.
← Freeform Script Insert Type. Options are: 'pointers' (recommended), 'files' or 'inline'.

FORM SESSIONS
← Freeform Session Context. Options are: 'payload' (recommended), 'session' (PHP) or 'database' (DB Table).
  ← Secret key (Encrypted Payload only). Will use server key if left empty.
  ← Session length in minutes (PHP Sessions & DB Table) - the amount of active forms a user can have.
  ← Amount of active forms per user (PHP Sessions & DB Table) - when the sessions should expire. Set to 0 for unlimited.
  ← PHP Session entry limit
  ← PHP Session timeout (in seconds) - default 3hrs.

SAVE & CONTINUE LATER
← Number of Days to Keep Saved Form Data
← Maximum Number of Saved Forms Per Session

TEMPLATE MANAGER
← Formatting Templates Directory Path
← Email Notification Templates Directory Path
  ← Template Storage Type
  ← Default Email Template Creation Method
  ← Allow File-based Email Templates to be created inside the Control Panel
← Success Templates Directory Path

SPAM PROTECTION
← Spam Protection Behavior. Options are 'simulate_success' (recommended) or 'display_errors'.
← Bypass All Spam Checks for Logged in Users
← Use Spam Folder
  ← Days After Submission Date to Purge
← Block Email addresses. Separate multiples with '\n'.
  ← Show errors under affected fields.
    ← Error message to be shown when a blocked email address is used.
← Block Keywords. Separate multiples with '\n'.
  ← Show errors under affected fields.
    ← Error message to be shown when a blocked keyword is used.
← Block IP addresses. Separate multiples with '\n'.
← Form Submission Throttling (numeric value in minutes or seconds)
  ← Time Measurement for Form Submission Throttling. Options are 'm' (minutes) or 's' (seconds).
← Minimum Submit Time (in seconds)
← Form Submit Expiration (in minutes)

NOTICES & ALERTS
← Display Update Warnings & Notices
← Send Email Alerts for Failed Notifications
← Developer Digest Email Frequency. Options are '-1' (Daily), '0' (Weekly - Sundays), '1' (Weekly - Mondays), etc.
  ← Developer Digest Email Addresses
← Stats Digest Email Frequency. Options are '-1' (Daily), '0' (Weekly - Sundays), '1' (Weekly - Mondays), etc.
  ← Stats Digest Email Addresses
← Send Digest Notifications on Live Environment only

FORM BUILDER DEFAULTS
← NEW IN 5.0+  Set defaults and locks for form builder settings.
  ← Live Render HTML Markup
  ← Allow Twig to be enabled in HTML blocks
  ← Render HTML block Twig in Isolated Mode
  ← Include Freeform's Sample Formatting Templates
  ← EMAIL NOTIFICATION TEMPLATE DEFAULTS
    ← ADMIN

      ← Default template

    ← CONDITIONAL

      ← Default template

    ← USER SELECT

      ← Default template

    ← EMAIL FIELDS

      ← Default template

  ← FORM BUILDER SETTING DEFAULTS


    ← Default Form Type


    ← Default Submission Title


    ← Default Formatting Template



    ← Store Submitted Data for this Form


    ← Default Status


    ← Collect IP Addresses



    ← Use AJAX


    ← Show Processing Indicator on Submit


    ← Show Processing Text on Submit


      ← Processing Text


    ← Success Behavior
      ← Options are 'reload', 'load-success-template'
        and 'redirect-return-url'

      ← Return URL (if using 'redirect-return-url')


      ← Success Template (if using 'load-success-template')


      ← Success Message (if using 'reload')


    ← Error Message


    ← Duplicate Check
      ← Options are 'no_limit', 'no_limit_logged_in_users_only', 'limit_once_per_logged_in_user_only',
        'limit_once_per_email', 'limit_once_per_user_or_cookie', and 'limit_once_per_user_or_ip_or_cookie'.
```

</div>
</div>