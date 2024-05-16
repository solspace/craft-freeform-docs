---
title: Craft Freeform 5.x - Rendering Form Data as JSON - User Guide
description: A guide to rendering form data as JSON.
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

# Rendering Form Data as JSON

If you need to render form data as a JSON string, you can use the `json_encode` filter. This is particularly useful when you need to get values like the form hash, CSRF token, honeypot input, etc. You might need to do this when caching your forms and updating these values through a JS API call.


## Instructions

Here's an example in Twig:

```twig
{{ freeform.form('myForm') | json_encode }}
```

Here's the output:

``` json
{
  "id": 8,
  "hash": "a2mMY1M6j-WgED8KMGv-tVjFt4HGVMwXGMhb1MOqKPvACr9Jl1Ue7dvgJ68M",
  "name": "My Form",
  "handle": "myForm",
  "class": "Solspace\\Freeform\\Form\\Types\\Regular",
  "enctype": "application/x-www-form-urlencoded",
  "properties": {
    "hash": "a2mMY1M6j-WgED8KMGv-tVjFt4HGVMwXGMhb1MOqKPvACr9Jl1Ue7dvgJ68M",
    "init-time": 1714581258,
    "secret": "PdVVUyyRBQT2ToblNUTF"
  },
  "attributes": {
    "form": {},
    "row": {},
    "success": {},
    "errors": {}
  },
  "settings": {
    "behavior": {
      "ajax": true,
      "showProcessingSpinner": true,
      "showProcessingText": true,
      "processingText": "Processing...",
      "successBehavior": "reload",
      "successTemplate": null,
      "returnUrl": "",
      "successMessage": "Form has been submitted successfully!",
      "errorMessage": "Sorry, there was an error submitting the form. Please try again.",
      "duplicateCheck": "no_limit",
      "stopSubmissionsAfter": null
    },
    "general": {
      "name": "Tester",
      "handle": "manualTest",
      "type": "Solspace\\Freeform\\Form\\Types\\Regular",
      "submissionTitle": "{{ dateCreated|date(\"Y-m-d H:i:s\") }}",
      "formattingTemplate": "basic-light/index.twig",
      "description": "",
      "color": "#A916AC",
      "attributes": {
        "form": {},
        "row": {},
        "success": {},
        "errors": {}
      },
      "storeData": true,
      "defaultStatus": 1,
      "collectIpAddresses": true,
      "allowUsersToOptIn": false,
      "optInCheckbox": null
    }
  },
  "freeform_payload": "9b8Q0cskfYwuNgWcruicRzk0N2FlMmY1MTE2MjMzNjE2ZDdjZmRjY2Q0YjJmMDYxMDEzMTFmYzE1ZGQ5ZmM2N2EyNjFhMWQyOTY2YjVhOGL6nxMjDBSUi7dR7QIlSiqv9c4PGE/EgGMzVSNUqvrnMKmh/kHLSuStK5FLylyd2wOw6WpBtd7ZBkxf+O5k4nIw4D2e6zK2R2YY54FLss27/Tn+/SVTauKcGmL5geyxJ2Kx7D+O2kP0MSrp0oQcOpWNUWXMBrUf34ZVMCjHUFFyGYYeZd0Vrsf1NgYOnLVc4snXCICAf90ks6GBwe1atQkOZqszoaQrPcEfHE5e1eDLVxmwSbjbZvDCDJq/2LWNvWdXF5XSiUUEfQEVZZOzCzqcccDDV5tNG3s19YoCK24EtAswz/dM6N1g5kSeWZyl4c0=",
  "anchor": "f3d43b-form-a2mMY1M6j-WgED8KMGv-tVjFt4HGVMwXGMhb1MOqKPvACr9Jl1Ue7dvgJ68M",
  "csrf": {
    "name": "CRAFT_CSRF_TOKEN",
    "token": "GAwwPrDhJpONN7NHmHlQyMUisuc2vLBJRTRQ734op25VPsmcC5RBWTyAXm1ahdJrnxy-_l14hVVBFXLufT012v-z9H_Oiy2xtrzsYfjMM1FhvwhT5IL7siLY1SfcniE1woLHjZA47k8jbc7gNG9bR7iloUkKB8ruDIiqqqZ6v3Kwnp03hpXMWHiGO_MCeJqVx0x6WzxkccWPacnkW9YN1g59uaNX2pJG-MUbAwUThyRO1ysTaJHPb-EZNEDmPw5osbQNp32MzmROvG13IRONHwhW652LxRqq707XgdrUUZmtAmNS2T9hgLvD0Bu77RS9_RUC87fzvahe3X0QLv60exo1COLMzSxASb3Dfe7fwtMK-wfi2Kx07s-qKD3AbatRHO_NqjBL"
  },
  "action": "freeform/submit",
  "jsTest": {
    "name": "freeform_check"
  },
  "honeypot": {
    "name": "freeform_form_handle",
    "value": ""
  }
}
```