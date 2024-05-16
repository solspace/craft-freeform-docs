---
title: Craft Freeform 4.x - Formatting Template Examples
description: Freeform includes a large number of example formatting templates to choose from. You can use these as a starting point and adjust them to suit your needs, or simply create your own from scratch.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/templates/formatting/
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

<span class="page-section"><a href="/craft/freeform/v4/templates/formatting/">Formatting Templates</a></span>

# Formatting Template Examples

Freeform includes a large number of example [formatting templates](../../overview/formatting-templates.md) to choose from. You can use these as a starting point and adjust them to suit your needs, or simply create your own from scratch. The following formatting templates are located in the `/vendor/solspace/craft-freeform/packages/plugin/src/templates/_defaultFormTemplates/` directory. If you wish to create your own modified version, just copy the code below, or the template file (e.g. **bootstrap-5.twig**) and paste it into your Formatting Templates directory in the specified Craft Templates directory (e.g. **/templates/freeform/**), and rename it to whatever you like.

::: guide ../../guides/troubleshooting-form-issues/
Quick troubleshooting the most commonly reported issues with your form's appearance, behavior, or submission of the form on the front end.
:::


[[toc]]


::: video 78LAmvZ0yoA
Video: Preview of Formatting Template Examples
:::


## Framework Agnostic
Plug-and-play neatly styled basic formatting templates that don't require any frameworks or toolkits, etc.

- [Basic Light](./basic-light.md)
- [Basic Dark](./basic-dark.md)
- [Basic Floating Labels](./basic-floating-labels.md)
    - Displays labels in the center of the inputs and shrinks them to the top-right when clicked and/or contains a value.
- [Conversational](./conversational.md)
    - Displays 1 field at a time, and smoothly scroll down to the next question until complete. It behaves similarly to how _Typeform_ displays forms, and is also a great choice for survey forms.


## Barebones
Barebones starter templates that require additional CSS to complete the styling.

- [Grid](./grid.md)
- [Flexbox](./flexbox.md)


## Popular Frameworks
Formatting templates that are set up to automatically work well with popular frameworks.

### Basic

- [Bootstrap 5](./bootstrap-5.md)
- [Bootstrap 4](./bootstrap-4.md)
- [Bootstrap 3](./bootstrap-3.md)
- [Foundation 6](./foundation-6.md)
- [Tailwind 3](./tailwind-3.md)
- [Materialize](./materialize.md)

### Advanced

- [Bootstrap 5 Dark Mode](./bootstrap-5-dark.md)
    - Set up as a dark theme for Bootstrap 5.
- [Bootstrap 5 Floating Labels](./bootstrap-5-floating-labels.md)
    - Set up to use the floating labels feature in Bootstrap 5.
- [Bootstrap 5 Multipage All Fields](./bootstrap-5-multipage-all-fields.md)
    - Displays ALL fields for a multipage form for the purpose of reviewing/previewing fields on other pages.


## Live Demo

The demo below is a live [demo site](https://demo.solspace.net/craft/freeform-demo/) that shows most of what the Demo Templates include (some sections and data has been limited).

<div class="demo-buttons">
    <a href="https://demo.solspace.net/craft/freeform-demo/" target="_blank">Open in New Window</a>
</div>
<iframe title="App Demo" id="app-demo" src="https://demo.solspace.net/craft/freeform-demo/" scrolling="yes" height="1600px" width="100%" class="app-demo" frameborder="0"></iframe>