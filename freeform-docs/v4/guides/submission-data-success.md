---
title: Craft Freeform 4.x - Show Submission Data on Success Page - User Guide
description: A guide to show submission data on the success page.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/guides/
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

<span class="page-section">User Guides</span>

# Show Submission Data on Success Page
You cannot display POST data on the success return page because that data is cleared upon submission, which is done because for security reasons and preventing forms from being submitted more than once, etc. You can however, consider another approach.


[[toc]]


## Instructions

Freeform allows you to [display submissions on the front end](../templates/objects/submission.md). It also allows you to set the return URL to include the future submission ID. You can set this either in the **Return URL** field for the form in the form builder, or at template level like:

``` twig
returnUrl: "{{ siteUrl }}your-page/success/{{ submission.id }}"
```

::: warning
Using this approach can be a security risk as site visitors could try out other ID's in the URL and view submission data for those submissions. It's strongly recommended that you refrain from displaying any sensitive data, but instead use this for anonymous polls or something simple like:
:::

``` twig
Thanks {{ submission.firstName }}, we've received your message and will get back to you shortly!
```

However, if you do wish to include sensitive information, you can consider pairing the submission ID with the Freeform token in the URI. See the [token](../templates/objects/submission.md#prop-token) property in the Submission object and the [token](../templates/queries/submissions.md#param-token) parameter in the [Submissions query](../templates/queries/submissions.md) for more information. The resulting code would look like:

``` twig
returnUrl: "{{ siteUrl }}your-page/success/{{ submission.id }}/{{ submission.token }}"
```

Or even just:

``` twig
returnUrl: "{{ siteUrl }}your-page/success/{{ submission.token }}"
```

While the Success return page would contain the following:

``` twig{2-3}
{% set submission = craft.freeform.submissions({
    id: craft.app.request.getSegment(3),
    token: craft.app.request.getSegment(4),
    form: 'myFormHandle',
}).one %}
```

Or with token only:

``` twig{2}
{% set submission = craft.freeform.submissions({
    token: craft.app.request.getSegment(3),
    form: 'myFormHandle',
}).one %}
```

You will also likely need to set up a new template route to handle the extra segment(s) in the URI.