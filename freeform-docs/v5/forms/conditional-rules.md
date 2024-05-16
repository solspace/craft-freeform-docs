---
title: Craft Freeform 5.x - Conditional Rules for Fields and Pages
description: This feature allows you to effortlessly set fields to show or hide based on the contents/selection of other fields, and even **skip pages** for multi-page forms based on the contents/selection of fields on a previous page.
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

<span class="page-section"><a href="/craft/freeform/v5/forms/">Forms & Fields</a></span>

# Conditional Rules <Badge type="pro" text="Pro" /><Badge type="feature" text="Improved in 5.0+" />

Freeform Pro edition includes Conditional Rules logic that can be added to forms. This feature allows you to effortlessly set fields and groups to **show or hide** based on the contents/selection of other fields, and even **skip pages** or submit the form based on the contents/selection of fields on a previous page.

To begin adding rules to your form, click on the **Rules** tab in the form builder and follow the options.

::: guide ../../guides/troubleshooting-form-issues/
Quick troubleshooting the most commonly reported issues with your form's appearance, behavior, or submission of the form on the front end.
:::


[[toc]]


<video autoplay loop muted>
    <source src="../videos/builder-rules.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>


## Overview

### Field Layout Map <Badge type="feature" text="New in 5.0+" />
For added convenience, Freeform includes a field map along with visual cues. This makes configuration faster and less confusing.

- A **dark gray background** shows the field or page that is currently being configured (in the right column).
- A **green border** means that the field, group or page has conditional rules configured for it.
- A **green corner border** at the top left means that the field, group or page is implicated in another field's conditional rules.
    - E.g. If the _Company Name_ field is configured to only show when the _Type_ field is set to `Business`, the _Type_ field will display a green corner border.

### Adding Rules
Configuring rules for fields, groups and pages is straightforward:

- To set rules for a field, click on the field name in the left column.
- To set rules for a [Group](./fields/#group) field, click on the group field name in the left column.
- To set rules for a page, click on the page name in the left column.

::: warning
Please be cautious about the order of your rules, and be careful not to make any complicated rules that contradict each other.
:::

### Available Conditions <Badge type="feature" text="Improved in 5.0+" />
The following conditions are available for each field/page:

- `is equal to`
- `does not equal`
- `greater than`
- `greater than or equal to`
- `less than`
- `less than or equal to`
- `contains`
- `does not contain`
- `starts with`
- `ends with`
- `is empty`
- `is not empty`

::: tip
#### Additional Notes

- Wildcards can be set for criteria values with the asterisk character (`*`), e.g. `cat*` will match `cat`, `cats`, `cat litter`, etc.
- Criteria values/options will automatically display as the following:
    - Text input (where you type out the criteria) for basic text/number field types.
    - Select dropdown (where you select a predefined option as criteria) for multi-option field types such as Checkboxes, Radios, Dropdowns, etc.
    - Checkbox (where you check the checkbox) for single Checkbox field types.
:::

### Page Skipping
It is possible to **skip pages** or **submit the form** based on the contents/selection of fields on a previous page when using [multi-page forms](../builder/#multi-page-forms).

Simply configure page skipping the same way you configure fields and groups. If you wish to have the form **fully submitted** based on some criteria, click on the **Submit Form** button at the bottom left of the **Rules** page.

::: warning
Rules cannot be delayed in any way. For example, you can't have a page skip rule on Page 1 that lets you through to Page 2 and Page 3, but skips page 4. The skip is always immediate.
If you have **Previous** buttons enabled for your pages and you have rules that skip pages, the user will technically be able to see skipped pages if they click the **Previous** button to go back pages.
:::

### Eligible Field Types

**All field types are eligible to be shown/hidden** based on the contents of other field(s). However, some fields cannot be **set as criteria**:

- Groups (fields inside of Groups can be set as criteria, but not the group itself)
- File Upload
- File Upload Drag & Drop
- Table
- Signature
- Stripe Payment
- HTML
- Rich Text


## Quick Setup Guide

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

Click the **Rules** tab in the form builder. Then choose a field, group or page from the field layout map on the left.

</label>
</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

The field, group or page you selected will then load in the right column. Click the **Add rules** button and configure which field(s) will affect whether the selected field will be **shown or hidden**, based on the criteria set for each.

</label>
</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

If you wish to add more than one condition for a field, click the **Add a Condition** button. If you have more than one condition for a field, you may also set whether **all** or **any** of the conditions need to be met.

</label>
</div>

<div class="step-finished">Finished!</div>


## Templating
Freeform will automatically add the necessary attributes and JS to the rendered form. Due to the complex nature of this feature and its reliance on automation, it generally assumes you're automating the render (rather than manually hardcoding each field, etc). All of the Solspace demo templates and sample default formatting templates include this already (and work out of the box).

If you're customizing a formatting template or creating a form template manually, the key is to ensure your field `div` wrapper contains the `data-field-container` attribute with the field handle as the value.

There are 3 different approaches you can take:

| Approach | Benefits | Drawbacks |  |
| --- | --- | --- | --- |
| `myFieldHandle.renderContainerOpeningTag()` <Badge type="recommended" text="Recommended" /> | Automatically generates the field wrapper `div`. Field attributes can still be applied to it. Maximum compatibility with attributes specified in the form builder and template overrides, etc. | A bit uglier to look at. | [Example](#rendercontaineropeningtag) |
| `myFieldHandle.attributes.container` | Automatically generates the field wrapper attributes specified in the form builder and template overrides, etc. | If the form builder or template overrides contain any of the already hard-coded attributes, it will have no way of knowing and ruin one of the definitions. For example, you hard code in `class="form-field"`, if there are any additional classes specified for the field inside the form builder, it will render as an additional `class` attribute which will cause issues. | [Example](#attributes-container) |
| `data-field-container="myFieldHandle"` | Minimal template code and looks cleaner. | Any attributes set in the form builder or template overrides will not show up. | [Example](#data-field-container) |


### renderContainerOpeningTag <Badge type="recommended" text="Recommended" />

``` twig{4,8,10,14}
{% set company = form.get("company") %}
{% set email = form.get("email") %}

{{ company.renderContainerOpeningTag({ attributes: { class: "form-field" } }) }}
    {{ company.renderLabel() }}
    {{ company.renderInput() }}
    {{ company.renderErrors() }}
{{ company.renderContainerClosingTag }}

{{ email.renderContainerOpeningTag({ attributes: { class: "form-field" } }) }}
    <label>Email Address</label>
    <input name="email" value="{{ email.value }}" />
    {{ email.renderErrors() }}
{{ email.renderContainerClosingTag }}
```

### attributes.container

``` twig{4,10}
{% set company = form.get("company") %}
{% set email = form.get("email") %}

<div class="form-field" {{ company.attributes.container }}>
    {{ company.renderLabel() }}
    {{ company.renderInput() }}
    {{ company.renderErrors() }}
</div>

<div class="form-field" {{ email.attributes.container }}>
    <label>Email Address</label>
    <input name="email" value="{{ email.value }}" />
    {{ email.renderErrors() }}
</div>
```

### data-field-container

``` twig{4,10}
{% set company = form.get("company") %}
{% set email = form.get("email") %}

<div class="form-field" data-field-container="company">
    {{ company.renderLabel() }}
    {{ company.renderInput() }}
    {{ company.renderErrors() }}
</div>

<div class="form-field" data-field-container="email">
    <label>Email Address</label>
    <input name="email" value="{{ email.value }}" />
    {{ email.renderErrors() }}
</div>
```