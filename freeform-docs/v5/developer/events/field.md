---
title: Craft Freeform 5.x - Field Events
description: To extend Freeform Field functionality, use the events listed here.
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

# Field Events

To extend Freeform Field functionality use the following events:

[[toc]]

## Adding field attributes <Badge type="feature" text="New in 5.0+" />

To add attributes to field components, you need to extend this event and modify the `attributes` object on it.

```php
use Solspace\Freeform\Library\Composer\Components\FieldInterface;
use Solspace\Freeform\Events\Fields\FieldRenderEvent;
use Solspace\Freeform\Fields\TextField;

Event::on(
  FieldInterface::class,
  FieldInterface::EVENT_COMPILE_ATTRIBUTES,
  function (CompileFieldAttributesEvent $event) {
    $field = $event->getField();
    $attributes = $event->getAttributes();

    // Attach a "data-foo" attribute to all container elements
    $attributes->getContainer()->set('data-foo', 'bar');

    // Append a green border rule to any existing input styles, if present, or create if not present
    $attributes->getInput()->append('style', 'border: 2px solid green;');

    // Add a "required" attribute to all text fields
    // Make labels for those fields green
    // Set a class for the label
    if ($field instanceof TextField) {
      $attributes->getInput()->set('required', 'required');
      $attributes
        ->getLabel()
        ->append('style', 'color: green;')
        ->set('class', 'label-class')
      ;
    }
  }
)
```

## Parsing a `POST` value

This event is called when a `POST` value is being assigned to a field. Use this event to transform a value before it is set for the field. Freeform uses this event to handle Drag & Drop file upload values transforming their UID's to ID's.

```php
use Solspace\Freeform\Library\Composer\Components\FieldInterface;
use Solspace\Freeform\Events\Fields\TransformValueEvent;
use Solspace\Freeform\Fields\TextField;

Event::on(
  FieldInterface::class,
  FieldInterface::EVENT_TRANSFORM_FROM_POST,
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
  FieldsService::EVENT_VALIDATE,
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