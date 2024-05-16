---
title: Craft Freeform 4.x - Notification Events
description: To extend Freeform's Email Notifications feature, use the events listed here.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/developer/events/
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

# Notification Events

To extend Freeform's Email Notifications, use the events listed below:


[[toc]]


## Before saving a notification

```php
use Solspace\Freeform\Services\NotificationsService;
use Solspace\Freeform\Events\Notifications\SaveEvent;

Event::on(
  NotificationsService::class,
  NotificationsService::EVENT_BEFORE_SAVE,
  function (SaveEvent $event) {
    $notificationRecord = $event->getRecord();
    $isNew = $event->isNew();

    // Perform some action here
  }
)
```


## After saving a notification

```php
use Solspace\Freeform\Services\NotificationsService;
use Solspace\Freeform\Events\Notifications\SaveEvent;

Event::on(
  NotificationsService::class,
  NotificationsService::EVENT_AFTER_SAVE,
  function (SaveEvent $event) {
    $notificationRecord = $event->getRecord();
    $isNew = $event->isNew();

    // Perform some action here
  }
)
```


## Before deleting a notification

```php
use Solspace\Freeform\Services\NotificationsService;
use Solspace\Freeform\Events\Notifications\DeleteEvent;

Event::on(
  NotificationsService::class,
  NotificationsService::EVENT_BEFORE_DELETE,
  function (DeleteEvent $event) {
    $notificationRecord = $event->getRecord();

    // Perform some action here
  }
)
```


## After deleting a notification

```php
use Solspace\Freeform\Services\NotificationsService;
use Solspace\Freeform\Events\Notifications\DeleteEvent;

Event::on(
  NotificationsService::class,
  NotificationsService::EVENT_AFTER_DELETE,
  function (DeleteEvent $event) {
    $notificationRecord = $event->getRecord();

    // Perform some action here
  }
)
```