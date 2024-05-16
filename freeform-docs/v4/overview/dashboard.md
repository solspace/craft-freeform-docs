---
title: Craft Freeform 4.x - Dashboard
description: Freeform contains its own dashboard page that gives you convenient insights and an overview of your forms, submissions, and any logged errors or update warnings and notices.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/forms/
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

# Freeform Dashboard

Freeform contains its own dashboard page that gives you convenient insights and an overview of your forms, submissions, and any logged errors or update warnings and notices. The data displayed here will respect all [Permissions](../setup/permissions.md) set for users / user groups.


[[toc]]


![Freeform Dashboard](../images/cp/dashboard.png)


## Errors
Conveniently let's you know if something is wrong by displaying a banner (not shown in screenshot above) indicating the number of errors that Freeform logged, if available.


## Important Update Notices
The [Important Update Notices](../reliability/update-notices.md) area keeps you informed about issues that may specifically affect your site.

::: tip
We respect your privacy, so this feature only pulls update notices from the Solspace.com site and **does not and cannot send any information back**. Solspace collects **no** information at all. The comparison check happens on your Freeform site environment, not on the Solspace site. This feature can also be disabled in the plugin settings.
:::


## Submissions
A chart with submissions for the last 60 days will show here. You can customize the zoom on the data by dragging the left and right circles at the top. Clicking form names in the legend on the right will toggle them including their submission data in the chart.


## Forms
All available forms will display here as cards. You can manage and reorder them here as well.

Each form card displays the following:

- Form name, handle and description.
- Stats:
    - Number of submissions
    - Number of spam submissions (if spam folder disabled, this will be the blocked count... and button to reset it)
- Exporting of all submissions for the form:
    - `CSV` for both _Lite_ and _Pro_ editions.
    - Additionally `Excel`, `JSON`, `XML` and `Text` for _Pro_ edition.
- Right side of card (on hover) includes:
    - Delete form
    - Duplicate form
    - Reorder form

Clicking on the name of the form will bring you into the form builder interface that allows you to setup and configure the form.