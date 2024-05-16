---
title: Craft Freeform 4.x - CRM Integration Events
description: Use these events to extend the functionality of Freeform CRM Integrations.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/developer/events/crm-integration/
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

<span class="page-section"><a href="/craft/freeform/v4/developer/events/">Developer Events</a></span>

# CRM Integration Events

Use these events to extend the functionality of Freeform CRM Integrations:


[[toc]]


## Before data is pushed to the CRM

Use this event to manipulate the data that is about to be pushed to the CRM.

```php
use Solspace\Freeform\Services\CrmService;
use Solspace\Freeform\Events\Integrations\PushEvent;

Event::on(
  CrmService::class,
  CrmService::EVENT_BEFORE_PUSH,
  function (PushEvent $event) {
    $integration = $event->getIntegration();
    $values = $event->getValues();

    // Only perform this for the "My Salesforce Intagration" integration
    if ($integration->getName() === 'My Salesforce Integration') {
      // Manually add a desired value for "customSalesforceField" field in Salesforce
      // This value will be pushed along with the rest to the CRM integration
      $event->addValue('customSalesforceField', 1234);
    }
  }
)
```


## After data has been pushed to the CRM

This event allows you to do something right after data has been pushed to the CRM.

::: warning
This event does not contain the response that was received from the CRM. Use the [After Response](#after-the-response-from-the-crm-was-received) event for that.
:::

```php
use Solspace\Freeform\Services\CrmService;
use Solspace\Freeform\Events\Integrations\PushEvent;

Event::on(
  CrmService::class,
  CrmService::EVENT_AFTER_PUSH,
  function (PushEvent $event) {
    $integration = $event->getIntegration();
    $values = $event->getValues();

    // Perform some actions here
  }
)
```


## After the response from the CRM was received

This event contains the Guzzle Response object of the response received after pushing the data to the CRM. Use this to perform other calls to other API endpoints, for instance - relating the created object's ID to some other object in the CRM.

```php
use Solspace\Freeform\Services\CrmService;
use Solspace\Freeform\Events\Integrations\IntegrationResponseEvent;

Event::on(
  CrmService::class,
  CrmService::EVENT_AFTER_RESPONSE,
  function (IntegrationResponseEvent $event) {
    $integration = $event->getIntegration();
    $response = $event->getResponse(); // instance of \Psr\Http\Message\ResponseInterface
    $responseAsString = $event->getResponseBodyAsString(); // Usually a stringified JSON object

    // Perform some actions here
  }
)
```


## Before saving an integration

```php
use Solspace\Freeform\Services\CrmService;
use Solspace\Freeform\Events\Integrations\SaveEvent;

Event::on(
  CrmService::class,
  CrmService::EVENT_BEFORE_SAVE,
  function (SaveEvent $event) {
    $integrationModel = $event->getModel();
    $isNew = $event->isNew();

    // Perform some actions here
  }
)
```


## After saving an integration

```php
use Solspace\Freeform\Services\CrmService;
use Solspace\Freeform\Events\Integrations\SaveEvent;

Event::on(
  CrmService::class,
  CrmService::EVENT_AFTER_SAVE,
  function (SaveEvent $event) {
    $integrationModel = $event->getModel();
    $isNew = $event->isNew();

    // Perform some actions here
  }
)
```


## Before deleting an integration

```php
use Solspace\Freeform\Services\CrmService;
use Solspace\Freeform\Events\Integrations\DeleteEvent;

Event::on(
  CrmService::class,
  CrmService::EVENT_BEFORE_DELETE,
  function (DeleteEvent $event) {
    $integrationModel = $event->getModel();

    // Perform some actions here
  }
)
```


## After deleting an integration

```php
use Solspace\Freeform\Services\CrmService;
use Solspace\Freeform\Events\Integrations\DeleteEvent;

Event::on(
  CrmService::class,
  CrmService::EVENT_AFTER_DELETE,
  function (DeleteEvent $event) {
    $integrationModel = $event->getModel();

    // Perform some actions here
  }
)
```