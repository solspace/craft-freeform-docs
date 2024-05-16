---
title: Craft Freeform 3.x - Form Model Events
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/events/form-model/
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

<span class="page-section">Developer</span>

# Form Model Events

Use these events to perform actions when the form model is being changed.


[[toc]]



<div class="content-block">

## Before Saving the Form

This event is called when the form is being saved. Use it to manipulate the form data before it's saved.

```php
use Solspace\Freeform\Services\FormsService;
use Solspace\Freeform\Events\Forms\SaveEvent;

Event::on(
  FormsService::class,
  FormsService::EVENT_BEFORE_SAVE,
  function (SaveEvent $event) {
    $formModel = $event->getModel();

    // Force all forms have the same name
    $formModel->name = "A static name";
  }
)
```

</div>
<div class="content-block">

## After Saving the Form

Use this event to perform some task after the form is saved.

```php
use Solspace\Freeform\Services\FormsService;
use Solspace\Freeform\Events\Forms\SaveEvent;

Event::on(
  FormsService::class,
  FormsService::EVENT_AFTER_SAVE,
  function (SaveEvent $event) {
    if ($event->isNew()) {
      // If the form is new
      // Perform some action here
    }
  }
)
```

</div>
<div class="content-block">

## Before Deleting a Form

```php
use Solspace\Freeform\Services\FormsService;
use Solspace\Freeform\Events\Forms\DeleteEvent;

Event::on(
  FormsService::class,
  FormsService::EVENT_BEFORE_DELETE,
  function (DeleteEvent $event) {
    $formModel = $event->getModel();
    $formId = $formModel->id;

    // Delete some db records based on the form ID
  }
)
```

</div>
<div class="content-block">

## After Deleting a Form

```php
use Solspace\Freeform\Services\FormsService;
use Solspace\Freeform\Events\Forms\DeleteEvent;

Event::on(
  FormsService::class,
  FormsService::EVENT_AFTER_DELETE,
  function (DeleteEvent $event) {
    $formModel = $event->getModel();
    $formId = $formModel->id;

    // Delete some db records based on the form ID
  }
)
```

</div>