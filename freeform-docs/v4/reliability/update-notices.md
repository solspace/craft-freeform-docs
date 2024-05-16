---
title: Craft Freeform 4.x - Update Notices & Announcements - Reliability
description: This feature keeps you informed about issues that may specifically affect your site.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/configuration/notices-alerts/
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

<span class="page-section"><a href="/craft/freeform/v4/reliability/">Reliability</a></span>

# Update Notices & Announcements

The _Update Notices_ area in the Dashboard keeps you informed about issues that may specifically affect your site. Paired with [Weekly Digest](./digest.md) email notifications, _Update Notices_ is a powerful feature that allows you to run your site on auto-pilot. Every few hours, Freeform will check and see if there are any new updates available, pull the feed and then compare it against your current site environment and setup and only show you notices and warnings that apply specifically to that site. This will ensure you catch issues much sooner and minimize form issues.

Freeform also uses Craft's [Announcements](https://craftcms.com/docs/4.x/control-panel.html#announcements) feature to let you know about new features available in the version you've just updated to. This works automatically and is displayed by clicking the "gift" icon at the top of the page anywhere in the control panel. <Badge type="feature" text="4.0.23+" />


[[toc]]


## Setup

To enable this feature, go to the **Freeform CP -> Settings -> Notices & Alerts** settings page. Toggle on the **Display Update Warnings & Notices** setting. This valuable feature is on by default.

To be provided with more tailored warnings and notices, please manually select any of the additional options in the **Additional Optional Checks** setting that may affect your site. Freeform's update notices check cannot detect template-level things or flows, so by selecting any of these options, Freeform will know to check against these as well and provide you with more robust warnings and alerts.


## How It Works

Every 3 hours, Freeform will check a simple JSON feed on the `api.solspace.com` server to see if there are any new items. If any updates are available, it will pull the feed, compare it against your current site environment and setup, and only show you notices and warnings that apply specifically to your site. As you review and address each issue, you can dismiss them and Freeform will not bother you about them again.

::: tip
We respect your privacy, so this feature only pulls update notices from the Solspace.com site and **does not and cannot send any information back**. Solspace collects **no** information at all. The comparison check happens on your Freeform site environment, not on the Solspace site. This feature can also be disabled in the plugin settings.
:::

Common types of notices you'll receive are:

- Warnings about recently fixed bugs that likely affect your install.
- Warnings about changes or improvements to features your site is likely using.
- Warnings about critical API integration changes and upgrades (e.g. Mailchimp discontinuing v2 of their API and requiring all users to switch to v3, which would be available in a newer release of Freeform).
- Critical security vulnerability bugs.
- Notices about significant new features that have been released in a newer version.

::: tip
Please note that this feature requires any site visitor visit your site in order for the cache (3hrs) and trigger to be refreshed. If for any reason your site receives no traffic at all for an extended period of time, this feature will not update as quickly as it could.
:::

![Update Notices preview](../images/cp/dashboard.png)

![New Feature Announcements preview](../images/cp/plugin-announcements.png)

::: video DoB0OXSzyu0
Video: Overview of Reliability Features
:::