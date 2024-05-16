---
title: Craft Freeform 3.x - Status Events
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/events/status/
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

# Status Events

To extend Freeform Form submission Statuses, use the events listed below:


[[toc]]



<div class="content-block">

## Before saving a status

```php
use Solspace\Freeform\Services\StatusesService;
use Solspace\Freeform\Events\Statuses\SaveEvent;

Event::on(
  StatusesService::class,
  StatusesService::EVENT_BEFORE_SAVE,
  function (SaveEvent $event) {
    $statusModel = $event->getModel();
    $isNew = $event->isNew();

    // Perform some action here
  }
)
```

</div>
<div class="content-block">

## After saving a status

```php
use Solspace\Freeform\Services\StatusesService;
use Solspace\Freeform\Events\Statuses\SaveEvent;

Event::on(
  StatusesService::class,
  StatusesService::EVENT_AFTER_SAVE,
  function (SaveEvent $event) {
    $statusModel = $event->getModel();
    $isNew = $event->isNew();

    // Perform some action here
  }
)
```

</div>
<div class="content-block">

## Before deleting a status

```php
use Solspace\Freeform\Services\StatusesService;
use Solspace\Freeform\Events\Statuses\DeleteEvent;

Event::on(
  StatusesService::class,
  StatusesService::EVENT_BEFORE_DELETE,
  function (DeleteEvent $event) {
    $statusModel = $event->getModel();

    // Perform some action here
  }
)
```

</div>
<div class="content-block">

## After deleting a status

```php
use Solspace\Freeform\Services\StatusesService;
use Solspace\Freeform\Events\Statuses\DeleteEvent;

Event::on(
  StatusesService::class,
  StatusesService::EVENT_AFTER_DELETE,
  function (DeleteEvent $event) {
    $statusModel = $event->getModel();

    // Perform some action here
  }
)
```

</div>