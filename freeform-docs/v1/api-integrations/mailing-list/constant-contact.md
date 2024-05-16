---
title: Craft Freeform 1.x - Constant Contact Mailing List API Integration
prev: false
next: false
---

::: version /craft/freeform/v5/integrations/constant-contact/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">1.x</span>
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

<span class="page-section"></span>

# Constant Contact Mailing List API Integration

This documentation page assumes you have read over the [Mailing List Integration Overview page](README.md). If you have not yet read it, please do so now. We assume that you have a [Constant Contact ](http://constantcontact.com) account already, along with mailing list(s) already created. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

Constant Contact integration includes support for the following:

* Field mapping to standard fields.

## Setup Instructions

Constant Contact API integrations are a little uglier since they include another layer of API calls by using *Mashery* API Management. You essentially have to connect Constant Contact to Mashery, and then Mashery to Freeform. Don't trust your instincts and just follow the steps below closely and it won't be as bad as it looks.

1. Sign up for a *Mashery* API Management account:
	* Constant Contact runs it's API through Mashery, so you will actually not be setting any of this up inside your Constant Contact account.
	* [Visit the Mashery site to sign up for a Mashery account](https://constantcontact.mashery.com/member/register)
		* OR, if you have one already, [log in to your Mashery account](https://constantcontact.mashery.com/login).
	* Fill out the form and then click **Register** button.
	* You'll receive a confirmation email with a link to click to verify your account.
2. Create Mashery API Application:
	* After verifying your account, [create/register a new application](https://constantcontact.mashery.com/apps/register) to begin creating your API app.
	* Fill out the form and click **Register Application** button.
3. Connect Mashery API Application to Constant Contact:
	* Click on the **API tester tab**.
	* In the select dropdown menu, select your app/key from the list and click the **Get Access Token** button.
	* You'll be taken to a Constant Contact page where it asks you to register. Click the **I already have an account** link at the top of the page, and then log into Constant Contact (if not already).
	* Once logged in, you'll be presented an OAuth form, asking if you want to allow access. Click **Allow** button.
	* You'll be shown an access token, but don't worry about making any note of it. Click **Done** button.
	* You have now connected Constant Contact to Mashery.
	* Leave this page open and open a new tab to go to Craft control panel...
4. Prepare your site's end for Integration:
	* Go to the [Mailing Lists section in Freeform Settings](../../setup/settings.md#mailing-lists) (**Freeform > Settings > Mailing Lists**)
	* Click the **New Mailing List Integration** at the top right.
	* Select *Constant Contact* from the **Service Provider** select dropdown.
	* Enter a name and handle for the integration.
		* In the **OAuth 2.0 Return URI** field, a URL will be automatically populated for you. Do not change or adjust this.
	* Copy the URL in the **OAuth 2.0 Return URI** field to your clipboard.
	* Leave this page open.
5. Prepare Mashery's (Constant Contact) end for Integration:
	* Go back to your browser tab with Mashery site in it.
	* Click on **Apps & API Keys** from the navigation options.
	* Click on the **Applications** sub navigation option.
	* Click the **Edit** link for your app.
	* In the **Redirect URI for OAuth calls** field, delete the default value of **http://localhost** and paste the URL you copied from the **OAuth 2.0 Return URI** field in Freeform.
	* Click on the **Save** button.
	* Click on the **Keys** sub navigation option.
	* On this page, it'll display your app's **Key** and **Secret**. You will need to copy each of these values.
6. Prepare the Connection:
	* Go back to your your Craft/Freeform browser tab,
	* Copy the value inside the **Key** field from Mashery (should be a long alphanumeric hash) and paste into **Client ID** field in Freeform.
	* Copy the value inside the **Secret** field from Mashery (should be a long alphanumeric hash) and paste into **Client Secret** field in Freeform.
	* At the top right corner of Freeform page, click **Save** button.
7. Finish the Connection:
	* You will then be presented a Constant Contact OAuth login form.
	* Enter in your Constant Contact (not Mashery) login details and click **Log In** button.
	* Once logged in, you'll be presented an OAuth form, asking if you want to allow access. Click **Allow** button.
	* You should now be returned to the Freeform Mailing List setting page.
	* Confirm that there is green circle with **Authorized** in the middle of the page.
	* That's it! You can now use this integration inside Composer.
