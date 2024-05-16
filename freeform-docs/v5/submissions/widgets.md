---
title: Craft Freeform 5.x - Dashboard Widgets
description: There are 4 dashboard widgets available for Freeform.
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

<span class="page-section"><a href="/craft/freeform/v5/submissions/">Submissions</a></span>

# Dashboard Widgets <Badge type="pro" text="Pro" />

_Freeform Pro_ includes a total of 4 dashboard widgets.

![Dashboard Widgets for Freeform](../images/cp/dashboard-widgets.png)


[[toc]]


## Linear Chart widget <Badge type="pro" text="Pro" />
This widget allows you to display a **line** or **bar** chart form your submissions. Chart colors are controlled by the **Form Color** setting inside the form builder for each form (_Settings_ → _General_).

![Linear Chart widget](../images/cp/dashboard-widget-linear-chart.png)

### Configuration

- **Title** - enter a custom widget title, or leave blank to use default.
- **Chart Type** - choose from **Line** or **Bar**.
- **Chart Height** - customize the display height of widget.
- **Date Range**:
    - Last 24 hours
    - Last 7 days
    - Last 30 days
    - Last 60 days
    - Last 90 days
- **Display all Form Data as a Single Combined Line**
    - If enabled, it combines all selected forms into a single value to be displayed as a line/bars.
- **Forms** - choose **All** forms or select which ones you'd like to show submissions from.


## Radial Chart widget <Badge type="pro" text="Pro" />
This widget allows you to display a **pie**, **donut** or **polar area** chart form your submissions. Chart colors are controlled by the **Form Color** setting inside the form builder for each form (_Settings_ → _General_).

![Radial Chart widget](../images/cp/dashboard-widget-radial-chart.png)

### Configuration

- **Title** - enter a custom widget title, or leave blank to use default.
- **Chart Type** - choose from **Pie**, **Donut** or **Polar Area**.
- **Chart Height** - customize the display height of widget.
- **Date Range**:
    - Last 24 hours
    - Last 7 days
    - Last 30 days
    - Last 60 days
    - Last 90 days
- **Forms** - choose **All** forms or select which ones you'd like to show submissions from.


## Recent Submissions widget <Badge type="pro" text="Pro" />
This widget allows you to display a list of the most recent submissions from your form(s).

<img src="../images/cp/dashboard-widget-recent.png" width="798" height="592" style="height: auto" alt="Recent Submissions widget">

### Configuration

- **Title** - enter a custom widget title, or leave blank to use default.
- **Limit** - select the maximum number of submissions to be displayed.
- **Forms** - choose **All** forms or select which ones you'd like to show submissions from.


## Quick Form widget <Badge type="pro" text="Pro" />
This widget allows you to display regular Freeform forms inside the Craft Dashboard. The most common use case would be for setting up a support form for your clients to contact you from if they have any questions or issues.

![Quick Form widget](../images/cp_widget-quick-form.png)

### Configuration

- **Title** - enter a custom widget title, or leave blank to use default.
- **Success Message** - set the message to be displayed to the user when the form has been successfully submitted.
- **Forms** - choose which form to use.

::: warning
This currently will not work with multi-page forms, and some complex forms might have limitations.
:::