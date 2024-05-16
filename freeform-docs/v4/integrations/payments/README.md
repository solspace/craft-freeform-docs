---
title: Craft Freeform 4.x - Payments - Stripe Integration
description: Payments in Freeform allow you to easily collect payments and subscriptions from your site users.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/integrations/stripe/
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

<span class="page-section"><a href="/craft/freeform/v4/integrations/">Integrations</a></span>

# Stripe Payments Integration <Badge type="pro" text="Pro" />

![Accept Payments through Stripe](../../images/cp/stripe-payments.png)


[[toc]]


## Overview

::: warning
The Stripe payment gateway requires HTTPS. You can however, use in Testing mode with HTTP.
:::

Payments in Freeform allow you to easily collect payments and subscriptions from your site users. It's available only in the _Pro_ edition. Adding payment processing to forms in Freeform is so intuitive and simple to do. Within minutes you can have anything from a form accepting donations to a [membership registration form](../../guides/user-registration-forms.md) that has users pay for a subscription at any interval level. Currently there is only an integration with Stripe, but we hope to have others in the future.

Freeform Payments accepts two different types of payments: *Single* one-time payments, and recurring *Subscriptions*. The necessary credit card fields will integrate seamlessly into your form and appear like the rest of your fields (and can be styled as such). For an even smoother feel for error handling and validation, try using AJAX with your form.

You are given full control to have a set payment option, allow users to fully customize their payment plan, and anything inbetween! Use regular Freeform fields for regular submission data (e.g. name, email address, etc) and even for setting payment amount, plan choices, interval choices, currency choices. Then use the Payments property editor to map your fields to Stripe accordingly.

Payments data can be displayed in templates and email notifications, as well as viewed inside the Freeform control panel when viewing list of submissions and single submission view. You can view the payment status, selected subscription plan and more. Users can self-cancel subscriptions (from Freeform generated email notifications) and admins can cancel subscriptions directly from the Freeform control panel. As subscriptions are cancelled, admins can view the auto-updated payment status directly inside Freeform as well.

It's important to note that Freeform does not store any sensitive credit card data, except for the last 4 digits of the credit card number.

::: tip
When using the Stripe Payments feature, Freeform will automatically force [AJAX mode](../../templates/ajax-forms.md) on the form in order to work with Stripe's validation.
:::


## Requirements

Freeform Payments has the following requirements:

- [Stripe](https://stripe.com) account (only payment gateway currently)
- All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS)
    - Can be tested in Test Mode while using HTTP however.
- Publicly accessible site to **fully** test or use Stripe.
    - You can forego **webhooks** testing (Payments success/fail email notifications, payment status future updates) if you like however, and use non-public local dev site.

::: tip
If you need to include more than 1 Payments-enabled form inside the same template or page, be sure to apply the `fieldIdPrefix: "myprefix-"` parameter to your forms so that the Stripe fields (and others) have unique ID's on the same page, which is required to work correctly. Freeform Payments will also automatically only load one instance of Stripe JS in the page.
:::


## Strong Customer Authentication (SCA)

![Freeform Payments - SCA](../../images/cp_payments-sca.gif)

[Strong Customer Authentication (SCA)](https://stripe.com/docs/strong-customer-authentication) is a **rule that came into effect on September 14, 2019**, as part of PSD2 regulation in Europe, will require changes to how your European customers authenticate online payments. Card payments will require a different user experience, namely 3D Secure, in order to meet SCA requirements. Transactions that don't follow the new authentication guidelines may be declined by your customers' banks.


## Setting up the Payment Gateway

::: tip
To fully test or use the **webhooks** part of Stripe payment gateway (Payments success/fail email notifications, payment status future updates), your site needs to be accessible publicly. If you're using a local dev machine, you can work around this by using a service like **[ngrok](https://ngrok.com/product)**. You can still access your site via the local dev URL, as long as the public version is working and Stripe is aware of it.
:::

The following instructions assume you already have a Stripe account. You can add the Stripe integration by doing the following:

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

- Go to the *Payments* section under Freeform Settings (**Freeform** -> **Settings** -> **Payments**). Click on the **New Payment Integration** button at the top right.
- For **Service Provider**, select *Stripe*. Provide your integration a name in the **Name** and **Handle** fields.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

Open up another browser tab and go to your Stripe account:

- On the left nav menu, click on **Developer**, then click **API Keys**.
- Copy the LIVE token for **Publishable key** (e.g. `pk_live_fs7f6f8g8dfg68g68d76dgd8`) and paste into the **Public Key (Live)** field inside Freeform.
- Copy the LIVE token (click *Reveal live key token* button to reveal) for **Secret key** (e.g. `sk_live_af7fa7gfdo78g6ddfg6d8d87`) and paste into the **Secret Key (Live)** field inside Freeform.
- Toggle the *View test data* link at the bottom left corner in Stripe account area (or top right in API Key page) to allow testing your setup. Stripe will provide you with a **different** set of keys for testing mode.
- Copy the TEST token for **Publishable key** (e.g. `pk_test_fs7f6f8g8dfg68g68d76dgd8`) and paste into the **Public Key (Test)** field inside Freeform.
- Copy the TEST token (click *Reveal live key token* button to reveal) for **Secret key** (e.g. `sk_test_af7fa7gfdo78g6ddfg6d8d87`) and paste into the **Secret Key (Test)** field inside Freeform.
- Enable the *LIVE mode* toggle whenever you are ready to have your Payment forms go live. Freeform Payments will then switch to using the LIVE Stripe API tokens.

</div>

<div class="step">
<label for="step3"><input type="checkbox" class="step-check" id="step3">

### Step 3

</label>

- Save the integration inside Freeform. Then, reopen the integration you just created by clicking on it in Freeform.
- Copy the URL value inside the **Webhook URL** field in Freeform (e.g. `http://my-precio.us/freeform/payment-webhooks/stripe?id=1`).

</div>

<div class="step">
<label for="step4"><input type="checkbox" class="step-check" id="step4">

### Step 4

</label>

Switch back to your Stripe account browser tab:

- On the left nav menu, click on **Developer**, then click **Webhooks**.
- Under the *Endpoints receiving events from your account* section (you may see more endpoint options), click the **+ Add endpoint** button.
- Paste the webhook URL you copied from Freeform into the modal window that pops up.
- You can likely use **latest** or **default** option for *Webhook version* without any consequence.
- Select **Send all event types** option for *Filter event* setting. Specifically, these are the 4 that Freeform actually just needs:
    - `customer.subscription.created`
    - `customer.subscription.deleted`
    - `invoice.payment_failed`
    - `invoice.payment_succeeded`
- Click **Add Endpoint** button to save it.
- On the next page inside Stripe account, click on the newly created Endpoint URL.
- At the bottom of the next page, you'll see a section titled **Signing secret**.
- Click on the **Click to reveal** button, and then copy the token (e.g. `whsec_dsf87d876sdf7g876fd8fasd9f7dsasd`).

</div>

<div class="step">
<label for="step5"><input type="checkbox" class="step-check" id="step5">

### Step 5

</label>

- Switch back to the Payment integration inside Freeform, and paste the Signing secret token into the **Webhook Secret** setting.
- Save the integration again, and it should be ready.

</div>

<div class="step-finished">Finished!</div>

::: tip
Freeform will still record failed payment attempts as submissions in the database, as well as send out email notifications and trigger API integrations. You may want to consider adding Payment-specific information in the email notification templates to indicate if the payment was successful or if it failed. Additionally, you can suppress this behavior by toggling the **Suppress Email Notifications & Integrations when Payments Fail** setting for the Payment Gateway.
:::

::: tip
When having the **Send Success Email from Stripe to Submitter** setting enabled, be sure to require the Email field that is mapped to the Stripe Email field otherwise it could result in an error if not filled in by the user.
:::

### Testing the Webhook Connection

You can test to see if the Webhook connection is valid by clicking on the **Send test webhook** button inside the Webhooks section of Stripe (**Stripe** -> **Developer** -> **Webhooks** click your **Endpoint** URL). Under the **Event type** dropdown, keep it on something Freeform Payments doesn't use like *account.application.authorized*, and then click **Send test webhook** button at bottom left. It should display `Test webhook sent successfully` at bottom, along with `Response: None`.


## Setting up the Form

Setting up your form to collect payments will generally consist of the following:

<div class="step">
<label for="step1b"><input type="checkbox" class="step-check" id="step1b">

### Step 1

</label>

- Set up the form with all the regular fields you need.
- At the top left, drag and drop the *Credit Card* special field into your form.
    - Specify layout type (2 rows or 3 rows).
    - Adjust any labels and placeholders as necessary.

</div>

<div class="step">
<label for="step2b"><input type="checkbox" class="step-check" id="step2b">

### Step 2

</label>

- At the top right of the page, click on the *Payments* (*$*) button.
- Select a gateway from the **Payment Gateway** dropdown.
- In the **Payment Type** dropdown, select one of the following:
    - **Single payment** - collect a single payment from the user
    - **Predefined subscription plan** - subscribe the user to a subscription payment plan
    - **Customer defined subscription plan** - allow the user to create their own subscription plan

</div>

<div class="step">
<label for="step3b"><input type="checkbox" class="step-check" id="step3b">

### Step 3

</label>

- In the **Payment Field Mapping** table, you'll see options depending on which Payment Type selected.
    - **Amount** (applies to 'Single payment' and 'Customer defined subscription plan' options)
        - Select a regular Freeform field of the *Select* or *Radio* fieldtype with predefined options for the user to choose an amount.
            - Predefined option values should contain an integer only, e.g. `49` or `89.95`.
        - Select a regular Freeform field of the *Number* fieldtype for the user to enter their own amount.
            - Option values should contain an integer only, e.g. `49` or `89.95`.
        - Select **Fixed** if you wish to have a single predefined value for users to pay.
            - In the **Fixed Amount** field below, enter an integer value, e.g. `49` or `89.95`.
    - **Currency** (applies to 'Single payment' and 'Customer defined subscription plan' options)
        - Select a regular Freeform field of the *Select* or *Radio* fieldtype with predefined options for the user to choose a currency.
            - Predefined option values should contain 3 letter lower case currency code, e.g. `usd` or `eur`.
        - Select **Fixed** if you wish to have a single predefined currency option.
            - In the **Fixed Currency** field below, select a currency for your form, e.g. `USD`.
    - **Interval** (applies to 'Customer defined subscription plan' option only)
        - Select a regular Freeform field of the *Select* or *Radio* fieldtype with predefined options for the user to choose payment frequency.
            - Predefined option values should contain a valid interval value only, e.g. `biweekly` or `monthly`. Valid options are:
                - `daily`
                - `weekly`
                - `biweekly`
                - `monthly`
                - `annually`
        - Select **Fixed** if you wish to have a single predefined payment interval.
            - In the **Fixed Interval** field below, select a payment interval, e.g. `Monthly`.
    - **Plan** (applies to 'Predefined subscription plan' option only)
        - Select a regular Freeform field of the *Select* or *Radio* fieldtype with predefined payment plans as options for the user to choose.
            - Predefined option values should contain a valid subscription ID name value only, e.g. `plan_DNVlbcZQCtNzOs` or `freeform_userRegistration_100_usd_biweekly`.
        - Select **Fixed** if you wish to have a single predefined subscription plan.
            - In the **Fixed Subscription Plan** field below, select a subscription from the list.
        - If you wish to create a new plan directly from Freeform, click the *Add new plan* button.
- In the **Payment Description** setting, enter custom wording for the description of the payment to show up on Stripe's end. Using `{id}` will include the ID of the submission. All other Freeform fields are available as variables well here. Default value if left blank is: `Payment for FF Subsmission #XX`.
- In the **Customer Field Mapping** table, map Freeform fields to the payment gateway's fields.
    - It's not required to map to all fields.
    - Choose **Full Name** if you use a single Freeform field to collect customer names. Choose **First Name** and **Last Name** if you use two different Freeform fields to collect customer names. Do not map to both, Freeform will figure things out if you choose 1 approach only.

</div>

<div class="step">
<label for="step4b"><input type="checkbox" class="step-check" id="step4b">

### Step 4

</label>

- Set up the payment gateway email notifications (optionally trigger notifications to the email address entered into the Freeform field that is mapped to the payment gateway **Email** field in the **Customer Field Mapping** table):
    - **Subscription Created Email** (Subscription type only) - notification of successful subscription
    - **Subscription Ended Email** (Subscription type only) - notification of subscription being cancelled
    - **Payment Succeeded Email** - notification of successful payment
        - For subscriptions, this will be sent for each subsequent successful transaction at the scheduled interval.
    - **Payment Failed Email** - notification of unsuccessful payment
        - For subscriptions, this will be sent for any unsuccessful subsequent transaction at the scheduled interval.
    - Email notifications can still be sent to the submitter the traditional way too - by clicking on the **Email** field and setting up an email notification template for it in the property editor.

</div>

<div class="step-finished">Finished!</div>


## Usage in Templates & Notifications

The following properties are available for use inside email notification templates and front end templates (Submission object):

::: v-pre
* `payments.amount` <a href="#prop-amount" id="prop-amount" class="docs-anchor">#</a>
    - Outputs the amount paid/subscribed to for the submission, e.g. `49.95`.
* `payments.interval` (subscription only) <a href="#prop-interval" id="prop-interval" class="docs-anchor">#</a>
    - Outputs the payment interval subscribed to for the submission, e.g. `biweekly`.
* `payments.currency` <a href="#prop-currency" id="prop-currency" class="docs-anchor">#</a>
    - Outputs the currency used for the submission, e.g. `usd`.
* `payments.type` <a href="#prop-type" id="prop-type" class="docs-anchor">#</a>
    - Outputs the payment type for the submission, e.g. `single` or `subscription`.
* `payments.status` <a href="#prop-status" id="prop-status" class="docs-anchor">#</a>
    - Outputs the payment status to for the submission, e.g. `paid`, `active`, `failed`.
* `payments.errorMessage` <a href="#prop-errormessage" id="prop-errormessage" class="docs-anchor">#</a>
    - Outputs the payment error message for the submission, e.g. `Your card was declined.`.
    `{% if payments.errorMessage|length %}{{ payments.errorMessage }}{% endif %}`
* `payments.card` <a href="#prop-card" id="prop-card" class="docs-anchor">#</a>
    - Outputs the last 4 digits of the users credit card used for payment in the submission, e.g. `4242`.
* `payments.planName` (subscription only) <a href="#prop-planname" id="prop-planname" class="docs-anchor">#</a>
    - Outputs the subscription plan name subscribed to for the submission, e.g. `Enterprise Plan`.
* `payments.id` <a href="#prop-id" id="prop-id" class="docs-anchor">#</a>
    - Outputs the Freeform payment ID for the submission, e.g. `142`.
* `payments.resourceId` <a href="#prop-resource-id" id="prop-resource-id" class="docs-anchor">#</a>
    - Outputs the Gateway payment ID for the submission, e.g. `ch_1Cx4JHKLrxLeQvTQ5y4ei1K8`.
* `payments.gateway` <a href="#prop-gateway" id="prop-gateway" class="docs-anchor">#</a>
    - Outputs the name of the integration for the payment gateway used for the submission, e.g. `My Stripe Integration`.
* `payments.unsubscribeUrl` (subscription only) <a href="#prop-unsubscribe-url" id="prop-unsubscribe-url" class="docs-anchor">#</a>
    - Outputs an unsubscribe URL for the user to self-unsubscribe from a subscription, e.g. `http://my-precio.us/freeform/payment-subscription/37/cancel/2ba40891782393e3ff1ae9c3b2b6786d5318eabc`.
:::

### Example usage in Templates

For displaying the **submission data**, your code may look something like this:

``` twig
{% set submissionId = craft.app.request.segment(3) %}
{% set payments = craft.freeform.payments(submissionId) %}
{% if payments %}
  <h2>Payment Information</h2>
  <ul>
    <li>Amount: ${{ payments.amount }} {{ payments.currency }}</li>
    <li>Card ending in: •••• {{ payments.card }} ({{ payments.status }}{% if payments.errorMessage|length %} - {{ payments.errorMessage }}{% endif %})</li>
  {% if payments.type == "subscription" %}
    <li>{{ payments.planName }} ({{ payments.interval }})</li>
  {% endif %}
  </ul>
{% endif %}
```

For rendering the **Credit Card fields inside your form**, you'll need to include something like the following:

``` twig
{% if field.layoutRows is defined %}
  {% for layoutRow in field.layoutRows %}
    <div class="freeform-row {{ form.customAttributes.rowClass }}">
      {% for layoutField in layoutRow %}
        <div class="{{ columnClass }}">
          {{ layoutField.render({
            class: "freeform-input",
            labelClass: "freeform-label" ~ (layoutField.inputOnly ? " freeform-input-only-label" : "") ~ (layoutField.required ? " freeform-required" : ""),
            errorClass: "freeform-errors",
            instructionsClass: "freeform-instructions",
          }) }}
        </div>
      {% endfor %}
    </div>
  {% endfor %}
{% endif %}
```

You can also perform a check with `{% elseif field.type == "cc_details" %}`.

#### STYLING STRIPE FIELDS

For styling the Stripe credit card fields in the form, you'll need to use the [Freeform JS Plugin](../../developer/js-plugin.md) to control it, specifically adding a listener for the `freeform-stripe-styling` event like this (example for Bootstrap):

``` html
<script>
    document.addEventListener("freeform-stripe-styling", function (event) {
        event.detail.base = {
            fontSize: "16px",
            color: "#adb5bd",
            fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
        },
        event.detail.invalid = {
            color: '#dc3545',
        }
    });
</script>
```

Some styling might need to be done with a typical CSS approach targeting the `.StripeElement` class, e.g.

``` css
.StripeElement {
    padding: 8px 10px !important;
    background: #1a1d20;
    height: 36px;
}
```

#### DISPLAYING CREDIT CARD ICON

If you wish to display the credit card icon in the Credit Card Number field, you can do this by including the following override in your template:

``` html
<script>
    document.addEventListener('freeform-stripe-styling', function (event) => {
        event.showCardIcon = true;
    });
</script>
```

#### CUSTOM RETURN URL

If you need to control a custom return on the form, you would do that with the following code implemented with the [Freeform JS Plugin](../../developer/js-plugin.md) like this:

``` js
<script>
    // Do something on a successful ajax submit
    document.addEventListener('freeform-ajax-success', function(event) {
    // Redirect the user
        if (event.response.finished) {
            window.location.href = event.response.returnUrl;
        }
    })
    document.addEventListener("freeform-render-success", function (event) {
    // Stop the default success message rendering
        event.preventDefault();
    });
</script>
```

### Example usage in Notifications

``` twig
<p>The following submission came in on {{ dateCreated|date('l, F j, Y \\a\\t g:ia') }}.</p>
<h2>Customer Information</h2>
<ul>
{% for field in allFields %}
  <li>{{ field.label }}: {{ field.getValueAsString() }}</li>
{% endfor %}
</ul>
<hr />
{% if payments %}
  <h2>Payment Information</h2>
  <ul>
    <li>Amount: ${{ payments.amount }} {{ payments.currency }}</li>
    <li>Card ending in: •••• {{ payments.card }} ({{ payments.status }}{% if payments.errorMessage|length %} - {{ payments.errorMessage }}{% endif %})</li>
  {% if payments.type == "subscription" %}
    <li>{{ payments.planName }} ({{ payments.interval }})</li>
  {% endif %}
  </ul>
{% endif %}
```


## Testing

It's best practice to test out your form and Payments implementation to ensure it works correctly and as expected. Please visit the [Stripe Testing documentation](https://stripe.com/docs/testing) for a full reference of how to test your forms and get a feel for how it handles failures, etc. Also be sure to toggle the *View test data* link at the bottom left corner in Stripe account area for testing, as Stripe will provide you with a **different** set of keys for testing mode. When you switch back to live, be sure to update your Freeform integration with the LIVE Stripe API tokens.

For *quick reference*, here is some general testing data:

### Testing successful purchases

- Card: `4242424242424242`
- Expiry Date: (anything in future, e.g. `242`)
- CVC: (any 3 digits, e.g. `242`)

### Testing for errors and responses

- Card: `4000000000000002` - Charge is declined with a card_declined code.
- Card: `4100000000000019` - Results in a charge with a risk level of highest. The charge is blocked as it's considered fraudulent.
- Card: `4000002760003184` - Test for [Strong Customer Authentication (SCA)](#strong-customer-authentication-sca).
    - A full list of card numbers for more scenarios can be found in the [Stripe documentation](https://stripe.com/docs/testing#regulatory-cards).

### Troubleshooting

When viewing Payment individual submissions in the control panel, the right side of the page will display a more detailed error for failed payments. If you think there might be an issue with Freeform or your implementation, this may help you look for patterns and troubleshoot.


## Mapping Payments Data to CRM

Freeform Payments data is available to map to [CRM integrations](../crm/README.md) as well. The following options will be available to map to your CRM fields:

* Amount
* Interval
* Interval Count
* Card Token
* Card Last 4
* Card Type
* Stripe Charge ID
* Stripe Customer ID
* Stripe Transaction Hash