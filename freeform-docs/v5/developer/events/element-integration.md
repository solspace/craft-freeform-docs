---
title: Craft Freeform 5.x - Element Integration Events
description: If you have to perform any special checks or extra steps when validating or connecting Freeform submissions with Craft Elements, be sure to check out the events listed here.
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

# Element Integration Events

If you have to perform any special checks or extra steps when validating or connecting Freeform submissions with Craft Elements, be sure to check out the events listed below:

[[toc]]

## Before an Element is validated

This event lets you add your own validations to the element validation process.

```php
use Solspace\Freeform\Events\Integrations\ElementIntegrations\ValidateEvent;
use Solspace\Freeform\Library\Integrations\Types\Elements\ElementIntegrationInterface;

Event::on(
  ElementIntegrationInterface::class,
  ElementIntegrationInterface::EVENT_BEFORE_VALIDATE,
  function (ValidateEvent $event) {
    $form = $event->getForm();
    $integration = $event->getIntegration();
    $element = $event->getElement();

    // Attach an error for the title field
    // This example will always invalidate every connection
    $element->addError('title', 'There are no good titles');

    // This error will only show up in a freeform form
    // if the attribute has been mapped to a form field.
  }
);
```

## After an Element is validated

```php
use Solspace\Freeform\Events\Integrations\ElementIntegrations\ValidateEvent;
use Solspace\Freeform\Library\Integrations\Types\Elements\ElementIntegrationInterface;

Event::on(
  ElementIntegrationInterface::class,
  ElementIntegrationInterface::EVENT_AFTER_VALIDATE,
  function (ValidateEvent $event) {
    $form = $event->getForm();
    $integration = $event->getIntegration();
    $element = $event->getElement();

    if (empty($element->getErrors())) {
      // Do something if the element passes validation
    }
  }
);
```

## Before an element is connected

This event is fired before the created and validated Element is saved.

```php
use Solspace\Freeform\Events\Integrations\ElementIntegrations\ConnectEvent;
use Solspace\Freeform\Library\Integrations\Types\Elements\ElementIntegrationInterface;

Event::on(
  ElementIntegrationInterface::class,
  ElementIntegrationInterface::EVENT_BEFORE_CONNECT,
  function (ConnectEvent $event) {
    $form = $event->getForm();
    $integration = $event->getIntegration();
    $element = $event->getElement();

    // Perform some actions here
  }
);
```

## After an element is connected

This event is fired before after the validated Element has been saved successfully.

```php
use Solspace\Freeform\Events\Integrations\ElementIntegrations\ConnectEvent;
use Solspace\Freeform\Library\Integrations\Types\Elements\ElementIntegrationInterface;

Event::on(
  ElementIntegrationInterface::class,
  ElementIntegrationInterface::EVENT_BEFORE_CONNECT,
  function (ConnectEvent $event) {
    $form = $event->getForm();
    $integration = $event->getIntegration();
    $element = $event->getElement();

    // Perform some actions here
  }
);
```