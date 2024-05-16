---
title: Craft Freeform 3.x - Fule Upload Events
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/events/file-upload/
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

# File Upload Events

To perform manipulations with uploaded form files, use the events below:


[[toc]]



<div class="content-block">

## Before an upload takes place

This event is called before the file is made into a Craft Asset, before it's moved from the temp upload directory. Use this event to do something with the raw file, or do any other operations you might deem necessary.

```php
use Solspace\Freeform\Services\FilesService;
use Solspace\Freeform\Events\Files\UploadEvent;

Event::on(
  FilesService::class,
  FilesService::EVENT_BEFORE_UPLOAD,
  function (UploadEvent $event) {
    $field = $event->getField();

    // get the field handle. this is the handle, by which
    // you can find the file metadata inside the $_FILES
    // global variable
    $handle = $field->getHandle();

    // Assuming that only a single file is uploaded
    // get the info for it
    $file = $_FILES[$handle];
    $tmpPath = $file['tmp_name'];

    // Remove the file before it's processed
    unset($tmpPath);

    // This is just an example, the above action will cause
    // an error when Craft tries to move the now inexistent file
  }
)
```

</div>
<div class="content-block">

## After an upload has finished

This event is called when Craft has moved the file to the appropriate location and created an Asset entry. You could use this event to attach the created Asset ID to some other entry.

```php
use Solspace\Freeform\Services\FilesService;
use Solspace\Freeform\Events\Files\UploadEvent;

Event::on(
  FilesService::class,
  FilesService::EVENT_AFTER_UPLOAD,
  function (UploadEvent $event) {
    $field = $event->getField();

    // Get the uploaded Asset ID
    $assetId = $field->getValue();

    if ($assetId) {
      // Do something with the asset ID
    }
  }
)
```

</div>