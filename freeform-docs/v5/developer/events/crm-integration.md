---
title: Craft Freeform 5.x - CRM Integration Events
description: Use these events to extend the functionality of Freeform CRM Integrations.
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

# CRM Integration Events

Use these events to extend the functionality of Freeform CRM Integrations:


[[toc]]


## Before data is pushed to the CRM

Use this event to manipulate the data that is about to be pushed to the CRM.

```php
use Solspace\Freeform\Events\Integrations\PushEvent;
use Solspace\Freeform\Library\Integrations\Types\CRM\CRMIntegrationInterface;

Event::on(
  CRMIntegrationInterface::class,
  CRMIntegrationInterface::EVENT_ON_PUSH,
  function (PushEvent $event) {
    $integration = $event->getIntegration();
    $category = $event->getCategory();
    $values = $event->getValues();

    // Only perform this for the "My Salesforce Intagration" integration
    if ($integration->getName() === 'My Salesforce Integration') {
      // Manually add a desired value for "customSalesforceField" field in Salesforce
      // This value will be pushed along with the rest to the CRM integration
      $event->addValue('customSalesforceField', 1234);
    }
  }
);
```

</div>


## After the response from the CRM was received

This event contains the Guzzle Response object of the response received after pushing the data to the CRM. Use this to perform other calls to other API endpoints, for instance - relating the created object's ID to some other object in the CRM.

```php
use Solspace\Freeform\Events\Integrations\IntegrationResponseEvent;
use Solspace\Freeform\Library\Integrations\Types\CRM\CRMIntegrationInterface;

Event::on(
  CRMIntegrationInterface::class,
  CRMIntegrationInterface::EVENT_AFTER_RESPONSE,
  function (IntegrationResponseEvent $event) {
    $integration = $event->getIntegration();
    $category = $event->getCategory(); // A string representing the object that was pushed
    $response = $event->getResponse(); // instance of \Psr\Http\Message\ResponseInterface
    $responseAsString = $event->getResponseBodyAsString(); // Usually a stringified JSON object

    // Perform some actions here
  }
);
```