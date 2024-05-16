---
title: Craft Freeform 5.x - Miscellaneous Events
description: View the miscellaneous events here to extend Freeform further.
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

# Miscellaneous Events


[[toc]]


## Adding Attributes to Injected JS and CSS Scripts

You can use this event if you need to attach any attributes to the `<script>` and `<style>` tags which are added by Freeform.

```php
use Solspace\Freeform\Events\Forms\RegisterRenderObjectOptionsEvent;
use Solspace\Freeform\Library\DataObjects\FormRenderObject\AbstractFormRenderObject;
use yii\base\Event;

Event::on(
    AbstractFormRenderObject::class,
    AbstractFormRenderObject::EVENT_REGISTER_OPTIONS,
    function (RegisterRenderObjectOptionsEvent $event) {
        $nonce = 'abc'; // Get your nonce here
        $event->addOption('nonce', $nonce);
    }
);
```


## Altering the Honeypot Markup

If you need to change something on the honeypot markup which is added by Freeform, use this event.

```php
use Solspace\Freeform\Services\HoneypotService;
use Solspace\Freeform\Events\Honeypot\RenderHoneypotEvent;

Event::on(
    HoneypotService::class,
    HoneypotService::EVENT_RENDER_HONEYPOT,
    function (RenderHoneypotEvent $event) {
        $output = $event->getOutput();

        $output = str_replace(
            ' class="',
            ' nonce="my-nonce" class="',
            $output
        );

        $event->setOutput($output);
    }
);
```