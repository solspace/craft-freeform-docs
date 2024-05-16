---
title: Craft Freeform 5.x - Stripe Payment Events
description: To extend Freeform's Stripe Payments integration, use the events listed here.
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

<span class="page-section"><a href="/craft/freeform/v5/developer/">Developer</a></span>

# Stripe Payment Events

To extend Freeform's Stripe Payments, use the events listed below:

[[toc]]

## When updating Payment metadata <Badge type="feature" text="5.1.9+" />

This event lets you add your own data that gets sent to Stripe for Payment Intents and Subscriptions:

```php
use Solspace\Freeform\Integrations\PaymentGateways\Stripe;
use Solspace\Freeform\Integrations\PaymentGateways\Events\UpdateMetadataEvent;

Event::on(
  Stripe::class,
  Stripe::EVENT_UPDATE_PAYMENT_METADATA,
  function (UpdateMetadataEvent $event) {
    $event->addData('description', 'My custom payment intent description');
    $event->addData('custom metadata entry', 'Some more data to be persisted in metadata');
  }
)
```
