---
title: Craft Freeform 3.x - Rendering Form Data as JSON - Guide
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/guides/rendering-form-data-as-json/
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

<span class="page-section">User Guides</span>

# Rendering Form Data as JSON

For convenience, you can render the form data as a JSON string, which comes in handy when you need to get values such as the form hash, CSRF token, honeypot input, etc. You might need to do this when you are caching your forms and want to update these values via a JS API call.

<div class="content-block">

## Instructions

Here's an example in Twig:

```twig
{% set form = craft.freeform.form('myForm') %}
{{ form.json }}
```

Here's the output:

``` json
{
    "hash":"oqpmq7EOZ-qkJrqXQR1-HJxxvibFh9QywmSSP54QHteCo0tqb4BQ5wJ1YN1E",
    "handle":"myForm",
    "ajax":true,
    "disableSubmit":true,
    "disableReset":false,
    "showSpinner":true,
    "showLoadingText":true,
    "loadingText":"Loading...",
    "class":"",
    "method":"post",
    "enctype":"multipart\/form-data",
    "successMessage":"Form has been submitted successfully!",
    "errorMessage":"Sorry, there was an error submitting the form. Please try again.",
    "honeypot":{
        "name":"freeform_form_handle",
        "value":""
    },
    "freeform_payload":"E0QZJ3Yq+j27yM1C9yUdymQ4OTAwZDUxNTdhNWUxZjJmNmRiZDUzOTZjODI4ZjMwODhjYzE4OWJmOTJkYWM2OTg0ZmQ2ZWYwZTA0ZjU5NjcZ\/uhuhfrLZt\/3n\/SNp2+GTQ7P5ngUQvd3I08vjwcQQKnlaWBhvI86XNAu7WrE8SNhx45cNUYdfAwHZujwNJ7x0swTsF8+sBExqRIamNOZCf4NkpiF0zrZJyhml0NcXyc761B0fABI+opRKTBDFwfCDtXaOV+rKp7pRPCfD\/nismR4aBvL+NDUa93qPnhnAgN6hTnryvIP\/cgoleJNdr3wRKxc6JalXahbIZaGiyJ0pXqzOpOHtuZy+rAzNdq4cI4LoAmFtKilOPF\/71Dv2y\/xJhhH9iwj+mVxxLLxYTN2VtdL6EnVn3oY5Sol5KhQM+nzVuLmYHJrl\/1aMpphYCckYx2N9qYv5vCeRWugIDl+peVMFHPraahwu7d+Z13LvIs=",
    "anchor":"8e3132-form-oqpmq7EOZ-qkJrqXQR1-HJxxvibFh9QywmSSP54QHteCo0tqb4BQ5wJ1YN1E",
    "csrf":{
        "name":"CRAFT_CSRF_TOKEN",
        "token":"Ndu_5xjemgxhkC-pl3pna6NaSdlBrF1O0LgfA_BHt85mE-D2qBwJ35FM4h2EGFiGHUDsNzAST2L5Xx8wVnUlR4Icl-CFhciXqRPad-WmMQiM1CANpuXc5bVPKMvVk_iCcLhNoLCuCA8vVECxGbtF-ECj2N5Dp06S74UvUuv66zyOfgr5lWGdcEzU-q1yKoe66kGQYzdjwPWbMAQ4QHoDE31jGQF4LV-d6Sv1X1hML5T9lbs2rLI_CEflTkMEUw7gjN9bsHoY7uniIYI4d234jUaQia9PhqpcMadLnLoVNzzhHDGqEMptBZv3LUa_P937JSaVs89YRu7tKYQktnpstHx43VYJJC1RwDsnAW9FEX-zfqTWtLf48Zp16UOBw1dtuuJGbJLS5dDRLhv85PWeukCILJGEzzpuGicLh1HsHcgQ8--6doohwrjHaSqYq40MxTVFy9Au5Rp5l8_YN03D9ds9oR8TUbnRqgMgASpINVgvGU9XLno05bAagSoeKEbHmM32Bv7cVG8Sgn07cztfpe-SdcYfctyo21jFVxgPr94="
    },
    "action":"freeform\/submit"
}
```

</div>