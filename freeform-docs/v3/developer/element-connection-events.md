---
title: Craft Freeform 3.x - Element Connection Events
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/events/element-connection/
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

# Element Connection Events

If you have to perform some special checks or extra steps when validating or connecting Freeform submissions with Craft Elements, be sure to check out the events listed below:


[[toc]]



<div class="content-block">

## Before a connection is validated

This event lets you add your own validations to the element connection validation process.

```php
use Solspace\Freeform\Library\Connections\AbstractConnection;
use Solspace\Freeform\Events\Connections\ValidateEvent;

Event::on(
  AbstractConnection::class,
  AbstractConnection::EVENT_BEFORE_VALIDATE,
  function (ValidateEvent $event) {
    $form = $event->getForm();
    $connection = $event->getConnection();
    $element = $event->getSubmission();

    // Attach an error for the title field
    // This example will always invalidate every connection
    $element->addError('title', 'There are no good titles');

    // This error will only show up in a freeform form
    // if the attribute has been mapped to a form field.
  }
)
```

</div>
<div class="content-block">

## After a connection is validated

```php
use Solspace\Freeform\Library\Connections\AbstractConnection;
use Solspace\Freeform\Events\Connections\ValidateEvent;

Event::on(
  AbstractConnection::class,
  AbstractConnection::EVENT_AFTER_VALIDATE,
  function (ValidateEvent $event) {
    $form = $event->getForm();
    $connection = $event->getConnection();
    $element = $event->getSubmission();

    if (empty($element->getErrors())) {
      // Do something if the element passes validation
    }
  }
)
```

</div>
<div class="content-block">

## Before an element is connected

This event is fired before the created and validated Element is saved.

```php
use Solspace\Freeform\Library\Connections\AbstractConnection;
use Solspace\Freeform\Events\Connections\ConnectEvent;

Event::on(
  AbstractConnection::class,
  AbstractConnection::EVENT_BEFORE_CONNECT,
  function (ConnectEvent $event) {
    $form = $event->getForm();
    $connection = $event->getConnection();
    $element = $event->getSubmission();

    // Perform some actions here
  }
)
```

</div>
<div class="content-block">

## After an element is connected

This event is fired before after the validated Element has been saved successfully.

```php
use Solspace\Freeform\Library\Connections\AbstractConnection;
use Solspace\Freeform\Events\Connections\ConnectEvent;

Event::on(
  AbstractConnection::class,
  AbstractConnection::EVENT_AFTER_CONNECT,
  function (ConnectEvent $event) {
    $form = $event->getForm();
    $connection = $event->getConnection();
    $element = $event->getSubmission();

    // Perform some actions here
  }
)
```

</div>