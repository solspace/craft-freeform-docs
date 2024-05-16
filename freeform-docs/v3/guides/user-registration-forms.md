---
title: Craft Freeform 3.x - User Registration Forms - Guide
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/guides/user-registration-forms/
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

<span class="page-section">User Guides</span>

# Creating User Registration Forms <Badge type="pro" text="Pro" />
Freeform allows you to easily create and manage beautiful [User](https://craftcms.com/docs/3.x/user-management.html#public-registration) registration forms in only minutes! Using the [Element Connections](../integrations/elements/#craft-users) feature, you can enhance your forms with 1-click to enable AJAX, set [conditional field logic](../overview/conditional-rules.md) to show and hide fields, confirm emails and passwords, add Captchas and send custom email notifications! Pair with [Payments](../integrations/payments/README.md) and you can even accept one time or recurring subscription payments for membership! _Leave the heavy lifting to Freeform!_

![Form Builder - User Registration Forms](../images/cp_forms-composer-connections-users2.png)


[[toc]]


<div class="content-block">

## Instructions

::: tip
This feature requires a **Craft Pro** license in order to work, as Users are a Craft Pro feature.
:::

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare the Form

</label>

- Create a new form in Freeform. We'll call it `User Registration`.
- Use existing Freeform fields and create a new ones as you see fit. Drag and drop them into place in the center Layout column of the form builder. A common registration form might have the following (but not limited to):
    - _First Name_
    - _Last Name_
    - _Username_
    - _Email Address_
    - _Confirm Email Address_
        - Use the [Confirm](../overview/fields/#confirm) special field to set this up.
    - _Password_
        - Use the [Password](../overview/fields/#password) special field for this. It will NOT save any password data in the Freeform database tables.
    - _Confirm Password_
        - Use the [Confirm](../overview/fields/#confirm) special field to set this up.
    - _Photo_
        - Use a Freeform [File Upload](../overview/fields/#file-upload) fieldtype to set this to map to the User Photo.
    - A _checkbox_ to agree to terms and conditions
    - _Submit_ button

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Set up the Connection

</label>

- Click on the chain icon button in the Property Editor column at the top right.
- For the **Type** dropdown, select *Users*.
- For the **User Group** checkboxes, select the user group(s) you'd like to map to.
    - All user groups (including ones with access to CP) will show here. Exercise extreme caution if allowing users to self-register for accounts that can access the Craft CP!
- If you'd like new users created from Freeform submissions to not yet be activated (and receive the Craft User Activation email) when submitted, check the **Activate users?** checkbox. If you'd like to manually approve registrations _**(please see warning below)**_ and suppress the email notification to users, uncheck the **Send activation email?** checkbox.
    ::: danger
    When using a manual Admin approving approach, it's still possible for a **Pending** user to circumvent this process if a [Forgot Password](https://craftcms.com/knowledge-base/front-end-user-accounts#reset-password-forms) form is available to them, as Craft currently does not have a concept of Admin approval only, and allows users to verify their account either through an email notification or using a *Forgot Password* form.
    :::
    - If you wish to have users automatically logged in upon success, please be sure to use the `'autoLoginAfterAccountActivation' => true,` config item in your Craft config file, and check the **Activate users?** checkbox.
- Map compatible Craft fields to Freeform fields in the **Field mapping** table.
    - There are some obvious limitations with field mapping, as Freeform does not have anything like a Matrix or Table field, etc. Most traditional fields that are similar to each other should be able to correctly map to each other however. We'll likely have an official list of mapping abilities in the near future.

Once that's all finished, you'll have something that looks like the screenshots above. Check out your form in the Freeform demo templates and see if everything works correctly.

</div>

<div class="step-finished">Finished!</div>

::: tip

#### Important Notes

- Freeform submissions can map to sections with autogenerated titles. Just make sure to set the fields you're using to map to Craft fields that populate the title field to be required on Freeform's end, otherwise the submission likely won't generate the Craft Entry if data for the title is missing.
- Freeform attempts to route User-based errors to the mapped fields. In some cases you might see more than 1 error for a Freeform field because of this. The fields that are mapped to essential fields like **username**, **email** and **password** will mention that "Email cannot be blank", etc.
- While multipage forms do appear to map correctly to **users**, you may see some slightly unusual behavior. For example, if you have your **Password** field placed in the second page, when submitting from the first page to the second page, the second page will highlight the field mapped to the **Password** field highlighted with an error. The whole process still works, but there's that visual issue.
- If the submission is blocked or flagged as spam, there's currently no way to retroactively map submission data to Users. The best option for avoiding this would be using [Captchas](../overview/fields/#captcha).

:::

</div>