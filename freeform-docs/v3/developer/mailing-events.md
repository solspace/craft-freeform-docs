---
title: Craft Freeform 3.x - Mailing Events
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/events/mailing/
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

# Mailing Events

You can extend the Mailer service functionality to manipulate emails that are sent out to users after form submissions:


[[toc]]



<div class="content-block">

## Before email values are parsed with Twig

This event is called before all notification values are parsed with Twig. Use this event to add your own values or manipulate the existing ones.

```php
use Solspace\Freeform\Services\MailerService;
use Solspace\Freeform\Events\Mailer\RenderEmailEvent;

Event::on(
  MailerService::class,
  MailerService::EVENT_BEFORE_RENDER,
  function (RenderEmailEvent $event) {
    $form = $event->getForm();
    $notification = $event->getNotification();
    $fieldValues = $event->getFieldValues();
    $submission = $event->getSubmission();

    // Attach a custom value to the field values array
    // thus getting access to "{{ myCustomValue }}" in your notification twig template
    $fieldValues['myCustomValue'] = 'test';

    $event->setFieldValues($fieldValues);
  }
)
```

</div>
<div class="content-block">

## Before an email is sent

Use this event to change the emails that are sent out, or perform any other tasks that need to be done before emails are sent out.

```php
use Solspace\Freeform\Services\MailerService;
use Solspace\Freeform\Events\Mailer\SendEmailEvent;

Event::on(
  MailerService::class,
  MailerService::EVENT_BEFORE_SEND,
  function (SendEmailEvent $event) {
    $message = $event->getMessage();
    $form = $event->getForm();
    $notification = $event->getNotification();
    $fieldValues = $event->getFieldValues();
    $submission = $event->getSubmission();

    // Manipulate the message object to send to a Bcc recipient
    $message->setBcc(['stealthy@email.com']);
  }
)
```

</div>
<div class="content-block">

## After an email is sent

This event is fired right after an email is sent out. You might use this event to log the sent out email somewhere.

```php
use Solspace\Freeform\Services\MailerService;
use Solspace\Freeform\Events\Mailer\SendEmailEvent;

Event::on(
  MailerService::class,
  MailerService::EVENT_AFTER_SEND,
  function (SendEmailEvent $event) {
    $message = $event->getMessage();
    $form = $event->getForm();
    $notification = $event->getNotification();
    $fieldValues = $event->getFieldValues();
    $submission = $event->getSubmission();

    // Perform some action here
  }
)
```

</div>