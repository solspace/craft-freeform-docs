---
title: Craft Freeform 3.x - Multi-Page Forms
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/forms/builder/#multi-page-forms
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">3.x</span>
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

<span class="page-section">Overview</span>

# Multi-Page Forms

![Form Builder - Multi-page](../images/cp_forms-composer-multipage.png)

![Form](../images/templates_form-multipage.png)


[[toc]]



<div class="content-block">

## Overview

Freeform allows for true *multi-page* forms (a POST submit per page). Here's some important information to know about them:

* Each page is submitted through POST
	* There is no unique URI segment per page at this time.
	* Users cannot jump ahead to different pages, only forward and backward 1 page.
	* Multi-page forms work with the built-in AJAX feature. <Badge type="feature" text="3.10.0+" />
		::: tip
		In versions prior to **Freeform 3.10.0**, AJAX will not work with multi-page forms.
		:::
		::: warning
		Please note that **editing** existing submissions via the front end in multi-page AJAX forms will currently not work correctly. We hope to be able to resolve this issue in an upcoming release.
		:::
* Sessions for incomplete submissions are stored for 3 hours, and then are removed after that.
	::: warning
	Multi-page forms **cannot** be started, stopped and returned to again at a later time to finish. The process has to be a continuous one, but the user has 3 hours before the form will timeout the submission.
	:::
* Users can go backward in forms (if enabled).
	::: tip
	In versions prior to **Freeform 3.8.0**, you will experience the following behavior (if using an older version of Freeform, please upgrade to the latest to resolve this issue):
	* Any data entered into the current page that has NOT yet been submitted "forward" will not be saved when clicking **Previous** submit button. As in, clicking the Previous button will not save any changes you made to that form page.
	* Multi-page forms will not go backward when using in conjunction with reCAPTCHA v2 Invisible and reCAPTCHA v3 (it works fine with reCAPTCHA v2 Checkbox).
	<br /><br />
	:::
* If an earlier page contains file upload field(s), files will actually be uploaded before the form is officially submitted.
	* If the form is never completed, the submission clearing (described above) will remove the file after 3 hours.

### Rearranging Pages and Fields
When editing forms in the Form Builder interface inside the control panel, if you wish to rearrange pages, simply drag and drop the tabs. If you need to move a field from one page to another, drag and drop the field onto the page tab you'd like it to be moved to. It will then appear at the top of that page, and you can finish placing it where it should be on that page.

</div>