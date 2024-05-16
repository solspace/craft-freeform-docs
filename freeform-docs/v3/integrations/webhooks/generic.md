---
title: Craft Freeform 3.x - Generic Webhooks
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/integrations/generic-webhook/
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

# Generic Webhooks <Badge type="feature" text="3.2.0+" /> <Badge type="pro" text="Pro" />
Freeform's Generic Webhooks feature allows you to generate and POST the JSON from the Freeform submission data off to your own custom endpoint. It also contains a few form identifying entries.

This documentation resource assumes you are familiar with what is necessary to connect Freeform data with a webhook from an external service, whether it's third party service or your own custom one, etc. For that matter, we cannot provide any assistance with setting this up, aside from the basics, and letting you know what kind of data to expect.


[[toc]]



<div class="content-block">

## Setup Instructions

1. Setup the Webhook on your site:
	* Go to the [Webhooks section in Freeform Settings](../../setup/settings.md#integrations) (**Freeform > Settings > Webhooks**)
	* Click the **New Webhook** button at the top right.
	* For *Type*, select **Generic**.
	* Enter a name for the **Webhook Name** field.
	* Add the webhook URL from your external source into the **Webhook URL** field in Freeform.
	* Select the form(s) you want this Webhook to apply to in the **Forms** field.
	* At the top right corner of Freeform page, click **Save** button.
2. Verify the Webhook:
	* Try submitting one of your forms that use this webhook, and check if Freeform posts successfully to your custom endpoint.

</div>
<div class="content-block">

## Example Output

``` json
{
  "form": {
    "id": 7,
    "name": "My Form",
    "handle": "myForm",
    "color": "#807447",
    "description": "",
    "returnUrl": ""
  },
  "id": 618,
  "dateCreated": {
    "date": "2019-07-09 08:05:22.000000",
    "timezone_type": 3,
    "timezone": "America\/Los_Angeles"
  },
  "uid": "1880fb76-d616-4c37-ac02-fc0c1765f349",
  "token": "nzkfa6VCY0YzOwnIkHMyJ8pEEHx2qu8llRCdL9u8wGLr7iMrokPypRp8F0lQwfm6zLibTXKKihdCJ1V4Iq5uprtyajz7MGtXVUq2",
  "firstName": "Bob",
  "lastName": "Smith",
  "email": "bob@smith.test",
  "acceptTerms": "1"
}
```

</div>