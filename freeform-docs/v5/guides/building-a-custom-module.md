---
title: Craft Freeform 5.x - Building a Custom Module - User Guide
description: A guide to building a custom module to extend Freeform's capabilities.
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

<span class="page-section"><a href="/craft/freeform/v5/guides/">User Guides</a></span>

# Building a Custom Module

Freeform has a wide variety of [developer events](../developer/events/) and is very customizable, allowing you to easily extend Freeform for all of your needs! This guide assumes you have some level of PHP and Craft custom development experience.


[[toc]]


## Instructions

In the example below, we'll be making a [Craft module](https://craftcms.com/docs/5.x/extend/module-guide.html) that sends an email notification to a recipient, based upon the selection of a Dropdown/Checkboxes/Radios fields' options. This will be done using the [`EVENT_AFTER_SUBMIT`](../developer/events/form/#after-submitting) event.

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

Create a new file named `MyFreeformModule.php` inside of the Craft `modules` directory:

``` php
<?php

namespace modules;

use Solspace\Freeform\Events\Submissions\SubmitEvent;
use Solspace\Freeform\Freeform;
use Solspace\Freeform\Services\SubmissionsService;
use yii\base\Event;

class MyFreeformModule extends Module
{
    public function init()
    {
        parent::init();

        // Subscribe to the AFTER_SUBMIT event
        Event::on(
            SubmissionsService::class,
            SubmissionsService::EVENT_AFTER_SUBMIT,
            function (SubmitEvent $event) {
                // ===============================
                // Set the notification ID here
                // This is the notification ID from the database
                // ===============================
                $notificationId = 5;

                $form = $event->getForm();
                $submission = $event->getSubmission();

                // Skip all other forms except "my-form-handle" form
                if ($form->getHandle() !== 'my-form-handle') {
                    return;
                }

                // Get the submitted value by which we'll be gathering recipients
                $selectedStates = $submission->state->getValue();
                if (!is_array($selectedStates)) {
                    $selectedStates = [$selectedStates];
                }

                $recipients = [];
                foreach ($selectedStates as $selectedState) {
                    switch ($selectedState) {
                        // Assign "first@recipient.com" if any of the following states is selected
                        case 'AL':
                        case 'CA':
                        case 'ID':
                        case 'IL':
                            $recipients[] = 'first@recipient.com';
                            break;

                        // Assign two recipients if some other states are selected
                        case 'MI':
                        case 'NE':
                        case 'NV':
                            $recipients[] = 'second@recipient.com';
                            $recipients[] = 'third@recipient.com';
                            break;

                        // Assign these recipients if ANY OTHER state is selected from the ones listed above
                        default:
                            $recipients[] = 'first@recipient.com';
                            $recipients[] = 'fourth@recipient.com';
                            break;
                    }
                }

                // Send the notification
                Freeform::getInstance()->mailer->sendEmail(
                    $form,
                    $recipients,
                    $notificationId,
                    $form->getLayout()->getFields(),
                    $submission
                );
            }
        );
    }
}
```

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

Enable the module in the `config/app.php` config file:

```php
<?php

return [
    'modules' => [
        // Make the module available in Craft
        'my-freeform-module' => \modules\MyFreeformModule::class,
    ],
    'bootstrap' => [
        // Initialize the module on every craft request
        'my-freeform-module',
    ],
];
```


</div>

<div class="step-finished">Finished!</div>