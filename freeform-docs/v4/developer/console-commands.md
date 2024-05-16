---
title: Craft Freeform 4.x - Console Commands
description: Freeform includes several console commands to allow you to run cleanup tasks and other tasks.
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: new /craft/freeform/v5/developer/console-commands/
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

<span class="page-section"><a href="/craft/freeform/v4/developer/">Developer</a></span>

# Console Commands

Freeform includes several console commands to allow you to run cleanup tasks and other tasks.


[[toc]]


## Resave Submissions <Badge type="feature" text="4.1.16+" /> 
If you need to resave all Freeform submissions, you can do so with the following CLI command: `./craft freeform/submissions/resave`. Most of the arguments available to Craft's `resave/entries` command are available here too, so if you need to also update the Craft Search Index, be sure to add `--update-search-index`.

``` sh command-line
php craft freeform/submissions/resave --update-search-index
```


## Purge Commands

### Purge Submissions <Badge type="pro" text="Pro" />
Allows you to purge all submissions older than a specific number of days. Freeform automatically attempts to execute this service based on the specified number of days for the **Automatically Purge Submission Data** setting.

``` sh command-line
./craft freeform/purge/submissions --age-in-days=30
```

### Purge Spam
Allows you to purge all spam submissions older than a specific number of days. Freeform automatically attempts to execute this service based on the specified number of days for the **Automatically Purge Spam Submissions** setting.

``` sh command-line
./craft freeform/purge/spam --age-in-days=30
```

### Purge Unfinalized Assets
Allows you to purge all unfinalized assets older than a specific number of minutes. Freeform automatically attempts to execute this service every 3 hours by default.

``` sh command-line
./craft freeform/purge/unfinalized-assets --age-in-minutes=180
```


## Field Commands

### Create Fields
Allows you to create new fields from the command line.

- `--label="My Field"` - the name of the field to be created. Handles will automatically be converted as camel case to match, e.g. `myField`.
- `--iterations=5` (optional) - the number of fields you'd like created as this type and set. Additional fields will be automatically suffixed with numbers, e.g. `My Field, My Field 1, My Field 2`.
- `--type=select` - the field type you'd like the new field to be created as. Options are:
    - `checkbox`
    - `checkbox_group`
    - `datetime`
    - `dynamic_recipients`
    - `email`
    - `file`
    - `file_drag_and_drop`
    - `hidden`
    - `invisible`
    - `multiple_select`
    - `number`
    - `opinion_scale`
    - `phone`
    - `radio_group`
    - `rating`
    - `regex`
    - `select`
    - `signature`
    - `table`
    - `text`
    - `textarea`
    - `website`


``` sh command-line
./craft freeform/fields/create --label="My Field" --iterations=5 --type=select
```