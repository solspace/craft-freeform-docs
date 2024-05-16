---
title: Craft Freeform 2.x - Deleting Submissions By Token
prev: false
next: false
---

::: version /craft/freeform/v5/templates/queries/deleting-submissions-by-token/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">2.x</span>
            <span class="pr-v-type pr-retired">Retired</span>
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

<span class="page-section"></span>

# Deleting Submissions By Token

::: v-pre
Freeform includes a way for users to delete their own submissions. This can be done with the **token** feature. A typical setup might have you include a link inside an email notification sent to a user that filled out a form. You would include `{{ submission.token }}` in the URL you generate that is linked to a template with the below example code to allow the user to delete their own submission.
:::

``` twig
{% set token = craft.app.request.segment(4) %}

{% if craft.freeform.deleteSubmissionByToken(token) %}
  Removed successfully
{% else %}
  Nothing to remove
{% endif %}
```
