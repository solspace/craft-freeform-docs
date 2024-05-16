---
title: Craft Freeform 5.x - Preventing Certain Email Addresses - User Guide
description: A guide to preventing certain email addresses from being used.
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

<span class="page-section"><a href="/craft/freeform/v5/guides/">User Guides</a></span>

# Preventing Certain Email Addresses
If you'd like to prevent users from using certain types of email addresses (for example, you don't want them using common free ones like Gmail, Yahoo, etc), you can do this by somewhat "misusing" the [Block Email addresses](../configuration/settings/#spam-protection) feature inside Freeform's Spam Settings area. It's meant to allow you to block common sources of spam, but technically can allow you to prevent legitimate users from using certain email address domains, and you can display an error for them too. Here's how you would set it up:


[[toc]]


## Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Go to **CP** → **Freeform** → **Settings** → **Spam Settings**.
- In the **Block Email addresses** field, add some email address domains with wildcards like:
  - `*@yahoo.com`
  - `*@gmail.com`
  - `*@hotmail.com`
  - `*@aol.com`

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

- Enable the **Display errors about blocked email(s) under each email field?** setting.
- Under that setting, in the **Blocked Emails Error Message** setting, add a message such as `Email not allowed. Please use your company email address.`
- Save settings.

</div>

<div class="step-finished">Finished!</div>

Once that is all applied, any user submitting the form with an email address like `hairylover28@aol.com` will see an error when the form is submitted, and below the Email field it will say:

>Email not allowed. Please use your company email address.