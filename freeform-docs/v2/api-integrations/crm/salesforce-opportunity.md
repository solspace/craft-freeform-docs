---
title: Craft Freeform 2.x - Salesforce Opportunity CRM API Integration
prev: false
next: false
---

::: version /craft/freeform/v5/integrations/salesforce/
Freeform
:::

<div id="pr-heading">
    <img src="https://docs.solspace.com/extras/icons/products/freeform-icon.png" alt="Freeform" class="pr-image">
    <span class="pr-name">Freeform</span>
    <span class="pr-category">for Craft</span>
    <div class="pr-v-wrapper">
        <div class="pr-v">
            <span class="pr-v-v">2.x</span>
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

# Salesforce Opportunity CRM API Integration <Badge type="pro" text="Pro" /> <Badge type="feature" text="2.5.0+" />

This documentation page assumes you have read over the [CRM Integration Overview page](README.md). If you have not yet read it, please do so now. We also assume that you have a [Salesforce](https://www.salesforce.com) account already. This integration requires that you have *Freeform Pro*. If you currently have Freeform Lite, you can purchase an upgrade to Freeform Pro.

::: tip
This documentation page is for the *Opportunity* version of the Salesforce integration. [Click here if you're looking for the Salesforce *Lead* integration.](salesforce-lead.md)
:::

Salesforce *Opportunity* integration includes support for the following:

* Field mapping to standard and custom *Opportunity*, *Account* and *Contact* object fields.
	* There are some limitations to types of fields that can be mapped, such as **Lookup** fields.
* Freeform performs a duplicate check on records in the following way:
	1. Check mapped Freeform field against *Account* **Name** field.
		* If no match, create a new Salesforce Account.
	2. Check mapped Freeform fields against *Contact* **First Name**, **Last Name** and **Email** fields.
		* If email address exists in Salesforce Contact, update the existing Contact with other details.
		* If no email address match, check if first name and last name exist in Salesforce Contact, then update the existing Contact with all other values including the new email address.
		* If no matches at all, create a new Salesforce Contact.
		* If *Account* **Name** matched, assign the new Contact to the existing Salesforce Account.
	3. Create new *Opportunity*.
		* Attach Opportunity to existing or newly created Salesforce Account.
* Freeform will create an *Account* with the **First Name** and **Last Name** mapped to the *Contact* if you leave the *Account* **Name** field empty.
	* This is helpful if you are dealing with customers not necessarily belonging to a company or organization, and just wish to have a Salesforce Account matching the Contact.


## Setup Instructions

1. Prepare Salesforce's end for Integration:
	* Open another browser tab and go to [Salesforce website](https://login.salesforce.com) and log into your account.
	* On the left navigation menu, click on **Apps**, then click **App Manager**.
	* At the top right corner of the page, click the **New Connected App** button.
	* Fill out the fields in the **Basic Information** section.
	* In the **API (Enable OAuth Settings)** section, click the **Enable OAuth Settings** checkbox.
	* More fields will appear. In the **Callback URL** field, enter any valid URL that begins with **https** (it could even be **https://google.com**, as we don't use this part).
	* In the **Selected OAuth Scopes** field, select the following permissions from the list and click **Add** arrow button:
		* **Allow access to your unique identifier (openid)**
		* **Perform requests on your behalf at any time (refresh_token, offline_access)**
	* You shouldn't need to fill out any further fields, and then click **Save** button.
	* You will be taken to a new page that lists info about your newly created app, including **Consumer Key** and **Consumer Secret** values. You will need to copy each of these values.
		* Salesforce gets tricky to navigate, so do yourself a favor and copy and paste these 2 values into a text editor for now, being sure to label each too. You'll save yourself some extra steps later on.
	* At the top middle of the page, click on the **Manage** button.
	* At the top middle of the next page, click the **Edit Policies** button.
	* Under the **OAuth policies** section, adjust the following settings:
		* In the **Permitted Users** field, be sure that it is set to **All users may self-authorize**.
		* In the **IP Relaxation** field, change the setting to **Relaxed IP restrictions**.
		* Click **Save** button at bottom of page.
	* If you copy and pasted the **Consumer Key** and **Consumer Secret** values in a text editor, you can skip these next couple steps:
		* To go back to your app to see these values, click on the **App Manager** navigation item (under **Apps**)
		* Find your app in the list. Then in the right column, click the down arrow, and then click **View**.
2. Setup Integration on your site:
	* Go to the [CRM section in Freeform Settings](../../setup/settings.md#api-integrations) (**Freeform > Settings > CRM**)
	* Click the **New CRM Integration** at the top right.
	* Select *Salesforce Opportunity* from the **Service Provider** select dropdown.
	* Enter a name and handle for the integration.
	* Enter Salesforce credentials in the next 4 fields:
		* Paste the Salesforce **Consumer Key** value into the **Client ID** field in Freeform.
		* Paste the Salesforce **Consumer Secret** value into the **Client Secret** field in Freeform.
		* Enter your Salesforce account username/email address into the **Username** field in Freeform.
		* Enter your Salesforce account password into the **Password** field in Freeform.
	* Additional configuration:
		* **Close Date** - Enter a relative textual date string for the Close Date of the newly created Opportunity (e.g. `7 days`).
		* **Stage Name** - Enter the Stage Name the newly created Opportunity should be assigned to (e.g. `Prospecting`).
		* **Sandbox Mode** - Enable this if your Salesforce account is in Sandbox mode.
	* At the top right corner of Freeform page, click **Save** button.
3. Verify Authorization:
	* After the integration is saved, it'll return you to the list of CRM integrations.
	* Click into the newly created integration.
	* Confirm that there is green circle with **Authorized** in the middle of the page.
	* That's it! You can now use this integration inside Composer.
