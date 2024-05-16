---
title: Craft Freeform 3.x - Submissions
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/submissions/overview/
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

# Submissions

Similar to Craft Entries, every time a user submits a form, we refer to those as submissions. Currently, submissions can be viewed and edited in the control panel, and displayed on the front end in templates as a list and individually.


[[toc]]



<div class="content-block">

## In the Control Panel

The list of submissions in the control panel appears very similar to how regular Craft Entries are displayed. You can filter the view by form (or show across all forms), search into submissions, adjust which field columns are shown, and click into any of the submissions to edit them. 

Additionally, you can keep track of changes or make private notes by using the **Notes** feature in the right column of the single submission view inside the CP (similar to older versions of Craft). <Badge type="feature" text="3.3.0+" />

Freeform also includes a chart that gives you a quick visual of how many form submissions your site is receiving.

::: warning
Currently, only Freeform submission titles can be searched upon inside the control panel. This is due to the way things are set up with Freeform having its own field architecture and using the Craft Element Index for displaying submission data. As a workaround, you may wish to set up your submission Titles to include some of the main fields' data. This has been addressed in Freeform 4 and 5, however.
:::

![Submissions](../images/cp_submissions.png)
![Edit Submissions](../images/cp_submissions-edit.png)

</div>
<div class="content-block">

## Exporting Submissions

Freeform includes 3 options for exporting (2 of which are Pro only). Please refer to the [Exporting](./exporting.md) documentation for more information.

</div>
<div class="content-block">

## In Front End Templates

One common use-case might be displaying the contents of the form submission to the user that submitted it right after they have successfully submitted the form, allowing them to review what they submitted. Of course, be aware that there are security implications here if the submissions contain sensitive content.

If the information is not sensitive, and meant to be public - like comments, you can also display submissions in a paginated (or not) list.

For more information about this, please visit the [freeform.submissions](../template-functions/freeform.submissions.md) template function documentation.

</div>
<div class="content-block">

## Editing Submissions <Badge type="pro" text="Pro" />

Freeform allows you to edit submissions via the front end templates as well. Currently, this feature has no user/author check, and requires you use/provide the `submission.token` to work (as opposed to the ID). A future version will likely include ability to check on authors, etc. The editing uses the same `freeform.form` function, but knows you're in **edit mode** when you feed the `submissionToken` parameter a valid value.

Please see the [Submission Editing](./submission-editing.md) documentation for more information.

</div>