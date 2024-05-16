---
title: Craft Freeform 5.x - Submissions Element Field Type
description: Freeform includes a Freeform Submissions fieldtype, which allows you to assign/relate submissions to other element types such as Craft Entries.
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

# _Submissions_ Element Field Type <div class="badge-group"><Badge type="lite" text="Lite" /><Badge type="pro" text="Pro" /></div>

Freeform includes a *Freeform Submissions* field type (and [Freeform Form](../forms/fieldtype/)), which allows you to assign/relate submissions to other element types such as Craft Entries.

![Freeform Submissions Fieldtype](../images/cp/fieldtype-submissions.png)


[[toc]]


## Overview

When pairing the Freeform Submissions field type with the [Relations](./relations/) feature, Freeform can do extraordinary things like become a tool that let's your users comment on entries, submit ratings and reviews for Commerce products and more! The [Relations](./relations/) feature essentially allows you to feed another Craft Element ID to the form that is attached to the submission(s), and the Freeform submission then becomes attached to the other element the same way an Asset does, etc.

<video autoplay loop muted>
    <source src="../videos/fieldtype-submissions.mp4" type="video/mp4">
    This browser does not display the video tag.
</video>

### Creating the Field
Creating a Freeform Submissions field is done just like any other field type, here's an overview of the process:

<div class="step">
<label for="step1b"><input type="checkbox" class="step-check" id="step1b">

Go to the **Settings** area in Craft control panel. Click on **Fields**.

</label>

Click the **New field** button in the top right corner.

</div>

<div class="step">
<label for="step2b"><input type="checkbox" class="step-check" id="step2b">

Name the field as you wish. For example: *Related Submissions* with a handle of `relatedSubmissions`.

</label>
</div>

<div class="step">
<label for="step3b"><input type="checkbox" class="step-check" id="step3b">

For the **Field Type** option, select *Freeform Submissions* from the list.

</label>

**Selection Label** is the text that will appear on the button which opens the Freeform Submissions selection pop-up dialog.

</div>

<div class="step">
<label for="step4b"><input type="checkbox" class="step-check" id="step4b">

Click the **Save** button in the top right corner to save the new field.

</label>
</div>

<div class="step-finished">Finished!</div>

Your Freeform Submissions field is now available to be assigned to other sections.