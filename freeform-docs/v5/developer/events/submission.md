---
title: Craft Freeform 5.x - Submission Events
description: Hook into Submission events to attach your own logic for when submissions are being created, edited or deleted.
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

# Submission Events

Hook into Submission events to attach your own logic for when submissions are being created, edited or deleted.


[[toc]]


## Before a submission is submitted

This event is called right before the submission is saved to the database.

```php
use Solspace\Freeform\Services\SubmissionsService;
use Solspace\Freeform\Events\Submissions\SubmitEvent;

Event::on(
  SubmissionsService::class,
  SubmissionsService::EVENT_BEFORE_SUBMIT,
  function (SubmitEvent $event) {
    $form = $event->getForm();
    $submission = $event->getSubmission();

    // Perform manipulations here
  }
)
```


## After a submission is submitted

This event is called right after the submission is saved to the database.

```php
use Solspace\Freeform\Services\SubmissionsService;
use Solspace\Freeform\Events\Submissions\SubmitEvent;

Event::on(
  SubmissionsService::class,
  SubmissionsService::EVENT_AFTER_SUBMIT,
  function (SubmitEvent $event) {
    $form = $event->getForm();
    $submission = $event->getSubmission();

    // Perform some actions here
  }
)
```


## Before a submission is updated in CP

```php
use Solspace\Freeform\Controllers\SubmissionsController;
use Solspace\Freeform\Events\Submissions\UpdateEvent;

Event::on(
  SubmissionsController::class,
  SubmissionsController::EVENT_BEFORE_UPDATE,
  function (UpdateEvent $event) {
    $submission = $event->getSubmission();
  }
)
```


## After a submission is updated in CP

```php
use Solspace\Freeform\Controllers\SubmissionsController;
use Solspace\Freeform\Events\Submissions\UpdateEvent;

Event::on(
  SubmissionsController::class,
  SubmissionsController::EVENT_AFTER_UPDATE,
  function (UpdateEvent $event) {
    $submission = $event->getSubmission();
  }
)
```