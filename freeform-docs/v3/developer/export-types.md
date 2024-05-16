---
title: Craft Freeform 3.x - Export Types
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/events/export-types/
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

# Export Types

Extend Freeform Exporting capabilities by adding your own export types:

<div class="content-block">

## Registering Custom Export Types <Badge type="feature" text="3.11+" />

Use this event to attach your own export types.

First, create your own export type, which extends the Export Interface:

```php
<?php

namespace My\Exporter;

use Solspace\Freeform\Library\Export\ExportInterface;
use Solspace\Freeform\Library\Composer\Components\Form;

class CustomExport implements ExportInterface
{
    private $submissionData;

    public function __construct(Form $form, array $submissionData)
    {
        $this->submissionData = $submissionData;
    }

    public static function getLabel(): string
    {
        return 'Custom Export';
    }

    public function getMimeType(): string
    {
        return 'text/html';
    }

    public function getFileExtension(): string
    {
        return 'html';
    }

    public function export()
    {
        return '<html><body><pre>'.json_encode($this->submissionData).'</pre></body></html>';
    }
}

```

Then register your exporter:

```php
use Solspace\Freeform\Services\ExportProfilesService;
use Solspace\Freeform\Events\ExportProfiles\RegisterExporterEvent;
use My\Exporter\CustomExport;

Event::on(
  ExportProfilesService::class,
  ExportProfilesService::EVENT_REGISTER_EXPORTER,
  function (RegisterExporterEvent $event) {
    $event->addExporter(
      'custom_export', 
      CustomExport::class
    );
  }
);
```

You should now see your custom export type available in the export profiles view and in the quick export pop-up.

</div>