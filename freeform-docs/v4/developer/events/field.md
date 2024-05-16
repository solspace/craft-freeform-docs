---
title: Craft Freeform 4.x - Field Events
description: To extend Freeform Field functionality, use the events listed here.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/developer/events/field/
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

# Field Events

To extend Freeform Field functionality use the following events:


[[toc]]


## Parsing a `POST` value

This event is called when a `POST` value is being assigned to a field. Use this event to transform a value before it is set for the field. Freeform uses this event to handle Drag & Drop file upload values transforming their UID's to ID's.

```php
use Solspace\Freeform\Library\Composer\Components\FieldInterface;
use Solspace\Freeform\Events\Fields\TransformValueEvent;
use Solspace\Freeform\Fields\TextField;

Event::on(
  FieldInterface::class,
  FieldInterface::EVENT_BEFORE_VALIDATE,
  function (TransformValueEvent $event) {
    $form = $event->getForm();
    $field = $event->getField();
    
    // Only transform text field values
    if (!$field instanceof TextField) {
        return;
    }

    // Make all posted text field values always uppercase
    $event->setValue(
      strtoupper($event->getValue())
    );
  }
)
```


## Before a field is validated

This event is fired for every active Freeform field right before it's being validated when a form is submitted. Use this event to attach your own validators for fields.

```php
use Solspace\Freeform\Services\FieldsService;
use Solspace\Freeform\Events\Fields\ValidateEvent;

Event::on(
  FieldsService::class,
  FieldsService::EVENT_BEFORE_VALIDATE,
  function (ValidateEvent $event) {
    $form = $event->getForm();
    $field = $event->getField();

    // Only perform extra field validation on our trusty "specificFormHandle" form
    if ($form->getHandle() !== 'specificFormHandle') {
      return;
    }

    // Add special extra validation for the "firstName" field
    if ($field->getHandle() === 'firstName' && $field->getValue() === 'John') {
      $field->addError("Sorry, John, we didn't make the rules.");
    }
  }
)
```


## After a field is validated

This event is fired for every active Freeform field right after it has been validated.

```php
use Solspace\Freeform\Services\FieldsService;
use Solspace\Freeform\Events\Fields\ValidateEvent;

Event::on(
  FieldsService::class,
  FieldsService::EVENT_AFTER_VALIDATE,
  function (ValidateEvent $event) {
    $form = $event->getForm();
    $field = $event->getField();

    // Perform some actions here
  }
)
```


## Before saving a field

This event is fired before a field is saved.

```php
use Solspace\Freeform\Services\FieldsService;
use Solspace\Freeform\Events\Fields\SaveEvent;

Event::on(
  FieldsService::class,
  FieldsService::EVENT_BEFORE_SAVE,
  function (SaveEvent $event) {
    $fieldModel = $event->getModel();
    $isNew = $event->isNew();

    // Perform some actions here
  }
)
```


## After saving a field

This event is fired after a field is saved.

```php
use Solspace\Freeform\Services\FieldsService;
use Solspace\Freeform\Events\Fields\SaveEvent;

Event::on(
  FieldsService::class,
  FieldsService::EVENT_AFTER_SAVE,
  function (SaveEvent $event) {
    $fieldModel = $event->getModel();
    $isNew = $event->isNew();

    // Perform some actions here
  }
)
```


## Before deleting a field

```php
use Solspace\Freeform\Services\FieldsService;
use Solspace\Freeform\Events\Fields\DeleteEvent;

Event::on(
  FieldsService::class,
  FieldsService::EVENT_BEFORE_DELETE,
  function (DeleteEvent $event) {
    $form = $event->getForm();
    $field = $event->getField();

    // Perform some actions here
  }
)
```


## After deleting a field

```php
use Solspace\Freeform\Services\FieldsService;
use Solspace\Freeform\Events\Fields\DeleteEvent;

Event::on(
  FieldsService::class,
  FieldsService::EVENT_AFTER_DELETE,
  function (DeleteEvent $event) {
    $form = $event->getForm();
    $field = $event->getField();

    // Perform some actions here
  }
)
```