---
title: Craft Freeform 4.x - Common Issues & Questions
description: Check out this documentation resource to troubleshoot common problems or find answers to common questions.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/common-issues/
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

# Common Issues & Questions
Check out this documentation resource to troubleshoot common problems or find answers to common questions.

::: guide ../guides/troubleshooting-form-issues/
Quick troubleshooting the most commonly reported issues with your form's appearance, behavior, or submission of the form on the front end.
:::


[[toc]]


<h2>On this page</h2>
<div class="inline-toc">

[[toc]]

</div>
<div class="common-issues">

## 404 Errors for `freeform/plugin.js`
Some fields and other JS in my form is not working correctly. I'm also seeing this error in the browser console: `freeform/plugin.js net::ERR_ABORTED 404 (Not Found)`.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

If the JS in your form is not working and you're seeing an error like `freeform/plugin.js net::ERR_ABORTED 404 (Not Found)` in the browser console, it's almost certainly due to your site having server rules you have applied to JS and CSS files to see if they are actual files. The default for Freeform is to load its scripts as **Static URLs**, which becomes a problem in this case. To resolve this issue, you can switch the _Freeform Script Insert Type_ setting (_Craft CP -> Freeform -> Settings -> Form Behavior_) to **As Files** instead.

- **As Static URLs** offers built-in browser caching and a static endpoint that delivers the latest Freeform scripts, but are not physical files and therefore cannot have server rules applied.
- **As Files** (recommended if having issues with _Static URLs_) are actual physical files generated inside of the `cpresources` folder by Craft's asset manager with no caching.
- **Inline** will add the scripts as inline scripts and may be useful as a workaround if the other 2 options are not working. This doesn't allow for caching, and pollutes the source code.

::: tip
If you're experiencing this issue only in one environment (like production), it's perfectly safe to just set all environments to use **As Files** without issue.
:::

![Freeform Script Insert Type setting](./images/common-issues_plugin-js-400.png)

</div>


## How do I transfer local `dev` changes to `production`?
I have a made a number of updates and changes to my Freeform setup on my local dev environment. I'd like to move that over to the staging/production environments. Is this possible?

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

If you're wondering how to independently carry over changes/additions to forms, fields, submissions, etc from one environment to another, this is not currently possible. The issue is that Freeform submissions are technically Craft elements and therefore, things are intertwined within the Craft `elements`, `elements_sites`, and `content` database tables. Freeform forms are stored as JSON in the `freeform_forms` database table, but the fields within are also attached to the `freeform_fields` and `freeform_submissions` database tables, complicating it further. And finally, if form data and layouts were stored inside the Craft _project config_, it would mean that forms could not be created and edited on sites that use the `allowAdminChanges` setting in Craft. This might work for some customers, but definitely not everyone.

<secret>A future version of Freeform will eventually include an import/export utility that will solve this issue.</secret>

</div>


## Emails not sending
How come email notifications are not sending out when a form is submitted?

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

The most common issue users run into is email notifications not sending out properly. Most commonly, this is due to a syntax error in their notification template, or an email server configuration issue. Here's a checklist to go through and see if any of them might be at play:

::: v-pre
<div class="checklist">
    <label><input type="checkbox"><span>Are you 100% certain the email notification is not in a spam folder?</span></label>
    <label><input type="checkbox"><span>Is the email address correct?</span></label>
    <label><input type="checkbox"><span>Is the form successfully being submitted? You can verify this by checking for submissions in the Freeform control panel. If you have the <b>Store Submitted Data</b> setting disabled for the form, consider enabling it temporarily to confirm this.</span></label>
    <label><input type="checkbox"><span>Have you checked the Freeform <a href="../setup/settings/#error-log">Error Log</a> page (<i>Freeform</i> -> <i>Settings</i> -> <i>Error Log</i>)? The Freeform error log is physically located in the same place as the Craft logs (<code>/storage/logs/freeform.log</code>). If there are no logged errors, the Error Log page will not show any errors, and you will likely not see the Freeform error log file.</span></label>
    <label><input type="checkbox"><span>Are you using <b>SMTP</b> or a service that uses SMTP (like <i>Sendgrid</i>, etc)? If so, please make sure that the email address you have configured in the <b>From Email</b> setting for the email notification exactly matches what you have set in the Craft <b>Email Settings</b> area. If you wish to use the submitters email address as the "From" email, use the <b>Reply-to Email</b> setting instead.</span></label>
    <label><input type="checkbox"><span>Have you assigned an email notification template to the <i>Email</i> field, <i>Dynamic Recipients</i> field, or admin <i>Notify</i> area inside the form builder for the given form? For all types of email notifications, they are assigned to fields or the form itself inside the Property Editor column (right side) in the form builder.</span></label>
    <label><input type="checkbox"><span>If using the <a href="../templates/queries/form/#dynamicnotification">dynamicNotification parameter</a> at template level, be sure to have the proper syntax and the proper email notification template name (with <code>.html</code> file extension if using HTML file).</span></label>
    <label><input type="checkbox"><span>Verify that your email notification template is using the correct syntax. Using incorrect syntax will result in a silent error and failure of the email notification sending. For all inputs such as <b>Subject</b> and <b>From Name</b>, as well as the <b>Email Body</b> area, the syntax is as follows:
        <ul style="margin-left: 20px;margin-top: 5px;">
            <li>
                All custom Freeform fields are <code>{{ fieldName }}</code><ul>
                <li>E.g. <code>{{ firstName }}</code>, <code>{{ email }}</code></li>
                <li>Do not prefix the properties with <code>form.</code>, as that refers to info about the form itself (see below)...</li></ul>
            </li>
            <li>
                Anything related to <b>info</b> about the form itself is as follows:<ul>
                <li><code>{{ form.name }}</code> - the Name of the form</li>
                <li><code>{{ form.handle }}</code> - the Handle for the form</li>
                <li><code>{{ form.id }}</code> - the ID of the form</li></ul>
            </li>
        </ul>
    </span></label>
    <label><input type="checkbox"><span>Verify that the fields you're manually calling (if applicable) actually exist for the form and contain data. For example, if you include a field such as <code>{{ fullName }}</code> in the <b>From Name</b> input field, but your form uses something like <code>{{ firstName }}</code> and <code>{{ lastName }}</code> instead, it will result in a silent error and failure of the email notification sending.</span></label>
    <label><input type="checkbox"><span>If using HTML files for your email notification templates, <a href="../setup/settings/#email-templates">verify that your Directory Path setting is correct</a>. This can be a common issue if you're switching between dev/staging/production environments.</span></label>
    <label><input type="checkbox"><span>Have you tried testing this inside the demo templates that come included with Freeform? This will at least help narrow things down to possibly an error in your template code if applicable.</span></label>
    <label><input type="checkbox"><span>Are you sending <b>to</b> and <b>from</b> the same email address or email address domain? For example, sending FROM <i>bob@my-precio.us</i> TO <i>bob@my-precio.us</i>, OR FROM <i>bob@my-precio.us</i> TO <i>larry@my-precio.us</i>. Sometimes the email server has very aggressive spam protection and knows that the email is not actually coming from that email address, and blocks the email altogether.</span></label>
    <label><input type="checkbox"><span>Can you send email with Craft's Email Testing feature? Freeform uses Craft's Email service, so if that doesn't work, then Freeform won't either. To check this, in the Control Panel go to <b>Settings</b> -> <b>Email</b>, then scroll down to the bottom of the page and click the <i>Test</i> button. You can read more about <a href="https://craftcms.com/knowledge-base/troubleshooting-email-errors">troubleshooting email errors on Craft's documentation page</a>.</span></label>
    <label><input type="checkbox"><span>To be extra thorough, you can also try sending notifications with Craft's simple <a href="https://github.com/craftcms/contact-form">Contact Form</a> plugin.</span></label>
    <label><input type="checkbox"><span>Are you getting redirected correctly after form submission? Be sure that you don't have any routes or .htaccess rewrites that conflict with the form submission.</span></label>
</div>
:::

</div>


## Form not submitting
When I submit my form, it errors unexpectedly or doesn't do anything.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

A common issue customers run into is their forms not submitting successfully. There's a variety of reasons this might be. Here's a checklist to go through and see if any of them might be at play:

<div class="checklist">
    <label><input type="checkbox"><span>Are you sure the form is not being successfully submitted? You can verify this by checking for submissions in the Freeform control panel. If you have the <b>Store Submitted Data</b> setting disabled for the form, consider enabling it temporarily to confirm this.</span></label>
    <label><input type="checkbox"><span>Have you checked the Freeform <a href="../setup/settings/#error-log">Error Log</a> page (<i>Freeform</i> -> <i>Settings</i> -> <i>Error Log</i>)? The Freeform error log is physically located in the same place as the Craft logs (<code>/storage/logs/freeform.log</code>). If there are no logged errors, the Error Log page will not show any errors, and you will likely not see the Freeform error log file.</span></label>
    <label><input type="checkbox"><span>Have you tried testing this inside the demo templates that come included with Freeform? This will at least help narrow things down to possibly an error in your template code if applicable. If your form doesn't work inside the demo templates, try creating an additional form that is simple (e.g. Name, Email, and Message fields), and try submitting again.</span></label>
    <label><input type="checkbox"><span>Do you have caching on your template and/or site? Heavy caching will prevent the Craft CSRF token and Freeform hash from reloading and stop the form from working. If you need to cache your page/site, you'll need to find a way to manually refresh these for each page load.</span></label>
    <label><input type="checkbox"><span>Do you have a rewrite rule for trailing slashes to be removed for <i>.htaccess</i> or <i>Nginx</i>? Try temporarily removing or disabling that and see if it resolves the issue. If using Nginx, you may want to <a href="https://craftcms.stackexchange.com/a/23872/4496">check out this article</a>.</span></label>
    <label><input type="checkbox"><span>Do you have Javascript enabled for your browser? If you don't, and you're using Freeform's built in <a href="../overview/spam-protection/">Spam Protection</a> feature, it won't submit the form successfully.</span></label>
    <label><input type="checkbox"><span>Is the form part of an entry and/or page that is generated by a <b>disabled</b> Craft entry (URL includes token like <code>?token=ay2ZFhCPSSvNLLjWxV1QnxO823JjHB-z</code>)? Freeform forms will be blocked from working on pages that are disabled this way.</span></label>
    <label><input type="checkbox"><span>Have a look at the <b>Blocked Spam</b> count for your form in the <i>CP</i> -> <i>Freeform</i> -> **Forms** list. If the count is increasing each time you attempt to submit the form, Freeform's <a href="../overview/spam-protection/">Spam Protection</a> feature is blocking your submissions.</span></label>
    <label><input type="checkbox"><span>Try disabling the <a href="../overview/spam-protection/">Spam Honeypot</a> feature (<i>CP</i> -> <i>Freeform</i> -> <i>Settings</i> -> <i>Spam Settings</i> and set <b>Spam Protection</b> setting to disabled) and test again.</span></label>
    <label><input type="checkbox"><span>Are you getting redirected correctly after form submission? Be sure that you don't have any routes or .htaccess rewrites that conflict with the form submission.</span></label>
    <label><input type="checkbox"><span>To be extra thorough, you can also try submitting Craft's simple <a href="https://github.com/craftcms/contact-form">Contact Form</a> plugin.</span></label>
</div>

</div>


## All Submissions Flagged as Spam
All of my submissions are being flagged or blocked as spam.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

If all of your form submissions are being blocked as spam or appearing in your Freeform control panel [Spam Folder](./overview/spam-protection/#spam-folder), try going through the following checklist:

<div class="checklist">
    <label><input type="checkbox"><span>Have you tried testing this inside the demo templates that come included with Freeform? This will at least help narrow things down to possibly an error in your template code if applicable. If your form doesn't work inside the demo templates, try creating an additional form that is simple (e.g. Name, Email, and Message fields), and try submitting again.</span></label>
    <label><input type="checkbox"><span>Do you have caching on your template and/or site? Heavy caching will prevent the Craft CSRF token and Freeform hash from reloading and stop the form from working. If you need to cache your page/site, you'll need to find a way to manually refresh these for each page load.</span></label>
    <label><input type="checkbox"><span>Do you have a rewrite rule for trailing slashes to be removed for <i>.htaccess</i> or <i>Nginx</i>? Try temporarily removing or disabling that and see if it resolves the issue. If using Nginx, you may want to <a href="https://craftcms.stackexchange.com/a/23872/4496">check out this article</a>.</span></label>
    <label><input type="checkbox"><span>Do you have Javascript enabled for your browser? If you don't, and you're using Freeform's built in <a href="../overview/spam-protection/">Spam Protection</a> feature, it won't submit the form successfully.</span></label>
</div>

</div>


## 500 Error - No form ID specified OR The request response is empty

When trying to save my form in the form builder, I get a `No form ID specified` OR `The request response is empty` error.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

If you're seeing either of these errors or something similar when trying to save your form in the CP form builder or submit the form in front end template, it's very likely related to your site having a rewrite rule for trailing slashes to be added or removed for _.htaccess_ or _Nginx_. Try temporarily removing or disabling that and see if it resolves the issue. If using Nginx, you may want to [check out this article](https://craftcms.stackexchange.com/a/23872/4496).

The easiest way around this might be to just try excluding the `admin` directory from the rewrite:

##### _.htaccess_

``` nginx{5-6}
# Append a trailing slash
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !/$
# Exclude Admin directory
RewriteCond %{REQUEST_URI} !^/admin/
RewriteRule . %{REQUEST_URI}/ [R=301,L]
```

##### _Nginx_

``` nginx
# Redirect URLs with trailing slash, exclude Admin directory
rewrite ^/(?!admin)(.*)/$ /$1 permanent;
```

Also be sure that you don't have any agressive security settings enabled on your server such as **ModSecurity** / **SQL injection detection**.

</div>


## Unable to verify your data submission
When submitting my forms, I am getting an `Unable to verify your data submission` error.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

This is almost always because Craft's CSRF token is invalid or expired. The most common causes of this are:

- **Form/template/website is cached**  - if using cache, please see the [Cacheable Forms](./templates/caching/) documentation guide to see how you will need to manually refresh the Craft CSRF token.
- **Browser left open too long** - if the user leaves the page open for a while and revisits later, or spends too much time to complete the form (2-3 hours), the Craft CSRF token will expire. This is a limitation of the current PHP Session limit setting for your server. You may be able to extend it for a greater length of time if you contact your webhost/web admin, however.
- **Loading Freeform onto a different website/domain** - this should work by default, but if you have the `sameSiteCookieValue` [Craft config](https://craftcms.com/docs/4.x/config/config-settings.html#samesitecookievalue) setting set to `strict` or `lax`, it may cause an issue. You'll need to remove the setting line or set it to `null` in order for it to work correctly.

</div>


## Multiple emails being sent for Dynamic Recipients field
When using the [Dynamic Recipients](./overview/email-notifications/#dynamic-recipients) field type, I sometimes am receiving duplicate email notifications when the form is submitted.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

This is likely because you've specified more than one option with the same email address value. This is a current limitation of Freeform, as Freeform will perceive the user submitting all of the matching options at once, sending off emails as many times as there are duplicate options.

There are a few workaround for this:

1. Create an email address alias for each option so that each option in the Dynamic Recipients field type settings will be unique.
2. Add sub-address tags to the affected email addresses so their values are unique. For example: `joe+whatever@example.com`, `joe+somethingelse@example.com`, etc.
3. [Build a custom module](./guides/building-a-custom-module/) that sends an email notification to a recipient based upon the selection of a Select/Checkbox Group/Radio fields' option using the `EVENT_AFTER_SUBMIT` event. We've created [a guide](./guides/building-a-custom-module/) that will get you 99% of the way there.

<secret>A future version of Freeform (v5) will resolve this issue entirely.</secret>

</div>


## Error when loading form in templates
I am getting an error when trying to load a form in my template. It looks like this:

>Solspace\Freeform\Library\Exceptions\FreeformException: Form template 'some-template.html' not found in /PATH/freeform/src/Services/FormsService.php:343

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

This is very likely because you assigned a custom **Formatting Template** to your form, and then at some point did one of the following:

- Renamed the formatting template file.
- Deleted the formatting template file.
- Specified an incorrect Formatting Template directory path in your settings.
- Switched environments and the Formatting Template directory path setting is incorrect.

To correct this issue, ensure that:

<div class="checklist">
    <label><input type="checkbox"><span>The path to your Formatting Templates directory path is correct.</span></label>
    <label><input type="checkbox"><span>The formatting template the form was assigned (at some point) exists.</span></label>
</div>

::: tip
If you want to change the name of the formatting template file while it is already in use for form(s), you should:

1. Assign the form(s) a different formatting template
2. Rename the original formatting template file (when no forms are using it)
3. Reassign the newly renamed formatting template to the form(s) it should belong to.
:::

</div>


## Error when deleting submissions
I am getting an error like `Class 'Freeform_Submission' not found` while trying to delete submissions in the control panel.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

This is very likely due to a migration from Freeform for _Craft 2_ missing this part on old submissions. This will need to be resolved manually by updating all instances of `Freeform_Submission` (Craft 2 style) in the **type** column of your Craft **elements** database to `Solspace\Freeform\Elements\Submission` (Craft 3+ style). Be sure to back up your database first.

</div>


## Errors about missing files/pages in Freeform CP
I'm seeing an error in the Freeform control panel area saying that a file or page doesn't exist / is missing, (e.g. when attempting to create a new email notification template, etc).

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

This is usually a result of the file actually being missing on the site, or being blocked for some reason. Make sure that your server, site, or FTP client is not ignoring or excluding certain files and/or directories for any reason (e.g. an **.htaccess** rewrite rule that manipulates URL's can interfere with Freeform's POST to `/save` by redirecting it to `/save/`, etc). In all known cases of this, the aforementioned solutions always resolved the issue. Also be sure that you don't have any agressive security settings enabled on your server such as **ModSecurity** / **SQL injection detection**.

</div>


## Javascript Errors in Safari when using reCAPTCHA
I'm seeing JS errors that say `"The source list for Content Security Policy directive 'script-src' contains an invalid source: "strict-dynamic". It will be ignored.` on forms using reCAPTCHA in Safari.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

This is out of our control as it is a [known issue with Google and Safari](https://github.com/google/google-api-javascript-client/issues/397). It technically does not interfere with the form functioning correctly, but they are choosing not to address the issue for some reason.

</div>


## Data not sending to API integrations
My submission data is not being sent to the API integration I have selected and mapped out.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

The most common reason why data doesn't get sent to an API integration is because of a field mapping error, whether it's a required field on the API integration side that isn't being fulfilled on the Freeform submission, or the data formatting not matching expectations, etc. Try going through the following checklist:

<div class="checklist">
    <label><input type="checkbox"><span>Have you checked the Freeform <a href="../setup/settings/#error-log">Error Log</a> page (<i>Freeform</i> -> <i>Settings</i> -> <i>Error Log</i>)? The Freeform error log is physically located in the same place as the Craft logs (<code>/storage/logs/freeform.log</code>). If there are no logged errors, the Error Log page will not show any errors, and you will likely not see the Freeform error log file.</span></label>
    <label><input type="checkbox"><span>Have you tried testing this inside the demo templates that come included with Freeform? This will at least help narrow things down to possibly an error in your template code if applicable. If your form doesn't work inside the demo templates, try creating an additional form that is simple (e.g. Name, Email, and Message fields), and try submitting again.</span></label>
    <label><input type="checkbox"><span>Is the field type / data formatting supported in the API integration? Not all field types are supported for each integration. This is usually noted near the top of the page of each API integration setup documentation page.</span></label>
</div>

</div>


## Issues with Salesforce API connection
I am seeing errors displayed or logged in the Freeform error log for my Salesforce integration.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

One reason is that Salesforce usually disables the API access entirely with their Trial version. If you're using the Trial version, you will need to contact Salesforce support to manually enable it for you.

If you're seeing any errors as follows:

> Client error response [status code] 400 [reason phrase] Bad Request [url] https://login.salesforce.com/services/oauth2/token'

- This is because Salesforce runs differently when in Sandbox mode, so be sure to enable the **Sandbox Mode** option inside the CRM integration setting in the Freeform control panel.

> No 'refresh_token' present in auth response for SalesforceLead. Enable offline-access for your app.

- Make sure that the **Perform requests on your behalf at any time (refresh_token, offline_access)** setting is added to the **Selected OAuth Scopes** field for your app in Salesforce.

</div>


## How many sites can I use Freeform on?

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

Each license purchase of Freeform entitles you to use it on one site, which includes all dev/staging versions of the site as well - these do NOT require additional licenses. For any additional separate site you wish to use Freeform on, you'll need to purchase an additional license.

</div>


## Does the Trial version limit Freeform features?

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

The trial versions of Solspace plugins are not limited in any way. They are the complete versions, and let you do the same things as a purchased license. However, if you attempt to use a trial version on a production site, Craft will display a red banner at the top of your control panel alerting you to purchase a license.

</div>


## How do I show textarea line breaks in email notifications or submissions?

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

Textarea data is stored in the database as newlines, which obviously don't parse as line breaks when trying to display in email notifications or on front end with Submissions object. To make this happen, use the `nl2br` Twig filter:

``` twig
{{ myFieldHandle|nl2br }}
```

</div>


## Submission data in fields showing HTML entities

When rendering submission data in email notifications or the front end, several characters such as `'` are parsing as `&#39;`, e.g. `You&#39;re a wizard Harry!`.

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

In rare circumstances, some customers have reported this issue happening. A solution for this would be adding the `|raw` filter to the field property, or wrapping `{% autoescape false %}` around it:

``` twig
{{ message.value|raw }}
```

OR

``` twig
{% autoescape false %}
   {{ ​message.value }}​
{% endautoescape %}
```

</div>


## Can I parse basic HTML in field labels?

<div class="answer">
<div class="circle">
    <div class="checkmark"></div>
</div>
<h4>Answer</h4>

If you like, you can enter basic HTML into field labels and option labels while inside the form builder. This is especially handy if you want to add emphasis to an option or add a link to an option (e.g. link a checkbox label for Terms & Conditions page).

The demo and sample templates will likely handle the HTML in the form rendering automatically, but in cases where it doesn't, you may need to apply the `raw` Twig filter:

Getting HTML (`b`, `i`, etc) to parse for field option labels:

``` twig{15}
{{ field.renderLabel({
    labelClass: (field.required ? " required" : ""),
    instructionsClass: "help-block",
    errorClass: "help-block",
}) }}

{% for option in field.options %}
    <div class="checkbox">
        <label>
            <input type="checkbox"
                name="{{ field.handle }}[]"
                value="{{ option.value }}"
                {{ option.value in field.value ? "checked" : "" }}
            />
            {{ option.label|raw }}
        </label>
    </div>
{% endfor %}
```

</div>
</div>