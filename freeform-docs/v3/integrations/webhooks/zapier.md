---
title: Craft Freeform 3.x - Zapier Integration
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/integrations/zapier/
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

<span class="page-section">Integrations</span>

# Zapier Integration <Badge type="feature" text="3.2.0+" /> <Badge type="pro" text="Pro" />
The Zapier Webhooks integration allows you to map Freeform submission data off to virtually every popular service available such as Slack, Trello, Google Docs, Salesforce, Mailchimp, and more! You can setup as many as you like.

We will assume you already have a [Zapier](https://zapier.com/) account and some general knowledge about how to use it. While it seems just about anything is available with the free version of Zapier, having many *Zaps* and/or complex *workflows* will require [purchasing a paid plan](https://zapier.com/pricing).

![Zapier to Slack Webhook Integration](../../images/cp_settings-slack-app.png)

<div class="content-block">

## Setup Instructions

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Prepare Integration on your site

</label>

- Go to the [Webhooks section in Freeform Settings](../../setup/settings.md#integrations) (**Freeform > Settings > Webhooks**)
- Click the **New Webhook** button at the top right.
- For *Type*, select **Zapier**.
- Enter a name for the **Webhook Name** field.
- Pause here and open a new browser tab...

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Create a new <i>Zap</i>

</label>

- Go to the [Zapier website](https://zapier.com/app/zaps) and create a new *Zap* (by clicking the bright orange *Make a Zap!* button at the top of the page).
- For the *Choose App* option, select **Webhooks by Zapier**.
- For the *Choose Trigger Event* option, select **Catch Hook**.
- Proceed to the next step, and then you'll be presented the webhook URL (e.g. `https://hooks.zapier.com/hooks/catch/9654665/fg8767d/`)
- Pause here and copy the *Custom Webhook URL* and switch back to your Freeform tab.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Finish Integration on your site

</label>

- Paste the *Custom Webhook URL* you copied earlier into the **Webhook URL** field in Freeform.
- Select the form(s) you want this Webhook to apply to in the **Forms** field.
- At the top right corner of Freeform page, click **Save** button.

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Send test data to Zapier

</label>

- In order for Zapier to know that Freeform exists and what data is available to it, you need to submit a test submission for the form(s) that will be using the webhook/Zap. Go to your form in the front end and submit the form with as much sample data as possible. Zapier will then be listening for the data... 

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Finish creating the new <i>Zap</i>

</label>

- Switch back to the Zapier browser tab.
- Click the **Refresh Fields** button.
- Click on the next step, and choose an example submit Zapier sniffed from your test submission.
- Proceed to the next step and setup your output "Do this..." section as necessary (can be anything, so we can't fully provide steps for this part).
- Once all done, save the Zap and be sure to switch the **OFF** toggle to **ON** before trying to use the *Zap*.

</div>

<div class="step">
<label for="step6"><input type="checkbox" class="step-check" id="step6">

### Verify the Webhook

</label>

- Try submitting one of your forms that use this webhook, and check if Freeform posts successfully to it and Zapier maps correctly.
- If there are any issues on Freeform's end, you'll see errors in the Freeform error log. If there's an issue on Zapier's end, you'll see errors inside Zapier.

</div>

<div class="step-finished">Finished!</div>

</div>