---
title: Craft Freeform 3.x - Post Forwarding
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/developer/events/post-forwarding/
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

# Post Forwarding


<div class="content-block">

## Modify the POST payload

Use this event to add/remove things to the posted payload or make modifications to the Guzzle Client and Request objects.

```php
use Solspace\Freeform\Bundles\Form\PayloadForwarding\PayloadForwarding;
use Solspace\Freeform\Events\PayloadForwarding\PayloadForwardEvent;

Event::on(
    PayloadForwarding::class,
    PayloadForwarding::EVENT_POST_FORWARDING,
    function (PayloadForwardEvent $event) {
        // Get the existing payload
        $payload = $event->getPayload();

        // Add something to it
        $payload['addedThing'] = 'This is an added thing';
        
        // Remove several of the default items from it
        unset(
            $payload['submission-id'], 
            $payload['submission-token'],
            $payload['submission-title']
        );

        // Persist our new changes in the event
        $event->setPayload($payload);
    }
);
```

</div>