---
title: Craft Freeform 1.x - Multi-Page Forms
prev: false
next: false
---

::: version /craft/freeform/v5/forms/builder/#multi-page-forms
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">1.x</span>
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

# Multi-Page Forms

![Composer - Multi-page](../images/cp_forms-composer-multipage.png)
![Form](../images/templates_form-multipage.png)

Freeform allows for true *multi-page* forms (a POST submit per page). Here's some important information to know about them:

* Each page is submitted through POST
	* There is no unique URI segment per page at this time.
	* Users cannot jump ahead to different pages, only forward and backward 1 page.
* Sessions for incomplete submissions are stored for 3hrs, and then are removed after that.
* Users can go backward in forms (if enabled).
	* Any data entered into the current page that has NOT yet been submitted "forward" will not be saved when clicking **Previous** submit button. As in, clicking the Previous button will not save any changes you made to that form page.
* If an earlier page contains file upload field(s), files will actually be uploaded before the form is officially submitted.
	* If the form is never completed, the submission clearing (described above) will remove the file after 3hrs.
