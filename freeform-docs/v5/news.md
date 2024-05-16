---
title: Craft Freeform 5.x - News & Roadmap
description: Many of our best ideas come from listening carefully to our customers! Check out below to tell us about features you'd like to see added in Freeform. You can also get a taste of what's on our roadmap and what we're currently working on below.
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

<span class="page-section">User Guides</span>

# News & Roadmap

<div class="hero-lead">

Many of our best ideas come from listening carefully to our customers! Check out below to tell us about features you'd like to see added in Freeform. You can also get a taste of what's on our roadmap and what we're currently working on below.

</div>

<div class="menu-grid">
    <a href="#what-s-new" class="menu-box">
        <img src="../../../images/icons/magic-wand.png" alt="What's New!">
        <div class="menu-grid-text">
            <h3>What's New!</h3>
            <p>Check out what's new with Freeform!</p>
        </div>
    </a>
    <a href="#roadmap" class="menu-box">
        <img src="../../../images/icons/roadmap.png" alt="Roadmap">
        <div class="menu-grid-text">
            <h3>Roadmap</h3>
            <p>Check out what we have planned for the future for Freeform.</p>
        </div>
    </a>
    <a href="#feature-requests" class="menu-box">
        <img src="../../../images/icons/light-bulb.png" alt="Feature Requests">
        <div class="menu-grid-text">
            <h3>Feature Requests</h3>
            <p>We appreciate hearing what our customers have to say!</p>
        </div>
    </a>
</div>


[[toc]]


## What's New!

::: warning
Freeform 5 is now available! Look for many new features and improvements!
:::

### All-new Form Building Experience!
The best form-building experience just got better! The Freeform form builder is an all-in-one interface that lets you take control of almost every aspect of your forms. Everything is at your fingertips. It's been completely redesigned to streamline your experience and give you more power.

<video autoplay loop muted>
    <source src="./videos/builder-feature.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

The form settings have also been reorganized:

<video autoplay loop muted>
    <source src="./videos/builder-settings.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

### Smarter Fields
Fields are no longer global to all forms -- unless you want them to be. Each new form starts fresh with a set of field types you can add to the form layout. If you have common fields, save them as Favorites to easily reuse them in the future. Looking for a field you used on another form somewhere? Use the field search feature to find it and drag it into your form.

<video autoplay loop muted>
    <source src="./videos/builder-overview.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

<video autoplay loop muted>
    <source src="./videos/builder-favorites.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

### Group field type
A new Group field type is available! It allows you to drag other fields into it. This becomes especially powerful when using with [Conditional Rules](./forms/conditional-rules/), as you'll be able create a single rule to show/hide an entire group of fields at once.

<video autoplay loop muted>
    <source src="./videos/group-fields.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

### Stripe Payment Element
Freeform 5 now uses the [Payment Element](https://stripe.com/docs/payments/payment-element) approach from [Stripe](https://stripe.com). The Payment Element is a UI component that accepts 40+ payment methods, validates input, and handles errors. This means that in addition to accepting **credit cards**, it will allow you to enable support for **Stripe Link**, **Apple Pay**, **Google Pay**, **PayPal** (within Europe), **bank payments**, **deferred payments** and many other options. Within minutes you can have anything from a form accepting donations to a [membership registration form](./guides/user-registration-forms/) that has users pay for a subscription at any interval. The possibilities are endless!

<video autoplay loop muted>
    <source src="./videos/stripe-payments.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

### Email Notifications Improved
Email notifications have been improved in Freeform 5! The form builder now has a **Notifications** tab dedicated to configuring all types of email notifications (except for template-level ones).

<video autoplay loop muted>
    <source src="./videos/builder-notifications.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

### Integrations Improved
The form builder has a new dedicated tab to handle the configuration of all integrations for your form.

<video autoplay loop muted>
    <source src="./videos/builder-integrations.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

### Template Overrides
Templating is a breeze with the new template overrides feature!

``` twig {11,17-18,25}
{{ form.render({
    fields: {
        "@global": {
            attributes: {
                input: { class: "form-input form-text" },
                label: { class: "form-label" },
            },
        },
        ":required": {
            attributes: {
                label: { "+class": "form-required" },
            },
        },
        "@dropdown": {
            attributes: {
                input: {
                    "-class": "form-text",
                    "+class": "form-select",
                },
            },
        },
        "@checkbox" : {
            attributes: {
                input: {
                    "=class": "form-check",
                },
            },
        },
    }
}) }}
```


## Roadmap
We have packed our schedule with many exciting updates and additions for Freeform!

### Form Export/Import Utility
Building forms across multiple server environments can be painful. This is why we are working on building a form exporting and importing utility. It will allow you to build a form on your local environment, export it, and then easily import it into your staging or production environment. You can even use this as a way to set up boilerplate forms, and more!

### Limited Users
We've heard your feedback, and we're now working on an update that will allow very granular control over the form-building experience for client users. With these controls, you'll be able to set defaults for most settings and options and choose if the setting should be limited or completely hidden. This will dramatically clean up and improve the client user experience, and prevent them from accessing settings that could easily break forms, etc.

<!--
    - The **Limited Users** feature allows you to easily customize the form builder experience for specific users or groups, ensuring that these users are not overwhelmed by advanced settings and prevent them from accidentally breaking your forms or site.
-->

## Feature Requests

Many of our best ideas come from listening carefully to our customers! If you have any ideas or feedback to provide us about Freeform (or what you're seeing in the upcoming Freeform roadmap), please visit the ["Feature Requests" area in the GitHub Discussions](https://github.com/solspace/craft-freeform/discussions/categories/feature-requests) area of the Freeform repository, where you can see all other requests made and vote up ideas you love!
