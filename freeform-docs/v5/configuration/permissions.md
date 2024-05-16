---
title: Craft Freeform 5.x - Permissions
description: Freeform ties into regular Craft User Group Permissions. Simply visit the permissions page for the applicable user group(s) to grant/edit/remove permissions to Freeform.
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

# Permissions
Freeform supports granular access and management permissions for forms, submissions and settings. Simply visit the permissions page for users or user groups (**Settings → Users → User Groups**) to configure these permissions.

<video autoplay loop muted>
    <source src="../videos/permissions.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>


[[toc]]


## General

### Access Freeform
Required for users to access Freeform at all.


## Freeform

### Access Submissions
Access to the Submissions list page.

- **Read All Submissions** - can view all submissions.
    - Checking this option supercedes all _Read Submissions by Form_ options.
- **Read Submissions by Form** - individually set permissions by form.
    - _My Form Name_ - can view submissions for this form.
    - If you'd like to give users access to read only some forms' submissions, check off the ones here. These selections will be overridden by the _Read All Submissions_ checkbox. _Manage_ permissions will also override any _Read_ permissions.
- **Manage All Submissions** - can view, edit or delete any submission.
    - Checking this option supercedes all _Manage Submissions by Form_ options and supercedes any _Read_ permissions (above).
- **Manage Submissions by Form** - individually set permissions by form.
    - _My Form Name_ - can view, edit or delete submissions for this form. Checking a form supercedes all individal _Read_ permissions (above).
    - If you'd like to give users access to manage only some forms' submissions, check off the ones here. These selections will be overridden by the _Manage All Submissions_ checkbox. _Manage_ permissions will also override any _Read_ permissions.

### Access Forms
Access to the Forms list page.

- **Create New Forms** - can create new forms.
    - Any forms created by a user will automatically be given access to manage that particular form if they don't already have _Manage All Forms_ enabled.
- **Delete Forms** - can delete forms.
- **Manage All Forms** - can edit any and all forms.
    - Checking this option supercedes all form checkboxes below.
- **Manage Forms Individually** - individually set permissions by form.
    - _My Form Name_ - can edit this particular form.
    - If you'd like to give users access to only some forms, check off the ones here. These selections will be overridden by the _Manage All Forms_ checkbox.

### Access Email Templates
Access to the Email Templates list page.

- **Manage Email Templates** - can create, edit or delete email notification templates.

### Access Quick Exporting <Badge type="pro" text="Pro" />
Access to the _Quick Export_ tool and _Export as CSV_ option in the CP Submissions index page.

::: tip
Users will need to have access to _read_ or _manage_ any of the forms they wish to export data for.
:::

### Access Export Profiles <Badge type="pro" text="Pro" />
Access to the Export Profiles list page and running of exports.

- **Manage Export Profiles** - can create, edit or delete export profiles.

### Access Export Notifications <Badge type="pro" text="Pro" />
Access to the Export Notifications list page and running of exports.

- **Manage Export Notifications** - can create, edit or delete export notifications.

### Access Settings
Can access and update settings area for Freeform as well as access [Error Log](./settings.md#error-log) page.

### Limited User <Badge type="pro" text="Pro" /><Badge type="feature" text="New in 5.0+" />
If this permission is applied to the user or user group, their form builder experience will be limited to what is configured in the [Limited Users](../configuration/limited-users/) feature settings.