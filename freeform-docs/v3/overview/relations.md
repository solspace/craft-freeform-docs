---
title: Craft Freeform 3.x - Relating Submissions to Elements
prev: false
next: false
---

<meta property="og:image" content="https://docs.solspace.com/extras/social/craft/freeform/freeform.png" />

::: version /craft/freeform/v5/submissions/relations/
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

<span class="page-section">Overview</span>

# Relating Submissions to Elements <Badge type="feature" text="3.2.0+" /> <Badge type="pro" text="Pro" />

Freeform Relations become a suitable replacement for Comments, Ratings, Product Reviews, simple sign-up forms for Calendar events and more!


[[toc]]



<div class="content-block">

## Overview

Freeform allows you to intuitively relate form submissions to any other Craft (or third party) Element. This is done by feeding the Craft Element ID to Freeform's `relations` parameter in the [freeform.form](../template-functions/freeform.form.md) function, thus allowing you to use Freeform forms to do anything such as allow users to submit comments on [Craft Entries](https://craftcms.com/docs/3.x/entries.html), post ratings and reviews for Entries or [Commerce Products](https://craftcms.com/docs/commerce/2.x/products.html), relate submissions to [Users](https://craftcms.com/docs/3.x/users.html) and more!

</div>
<div class="content-block">

## How it Works

When pairing the [Freeform Submissions element fieldtype](../overview/fieldtypes.md#freeform-submissions) with the `relations` parameter in the [freeform.form](../template-functions/freeform.form.md) function, you can automate attaching/relating of Freeform submissions to other Craft elements when the form is submitted. The submission(s) are then attached to the other element and appear visually in those elements the same way as [Assets](https://craftcms.com/docs/3.x/assets.html) do in the control panel, and more importantly, can then be used to easily display those submissions tied to the Craft Element inside your templates.

</div>
<div class="content-block">

## How to Setup

See the options below for some examples to get you started quickly:

* [Simple Setup](#simple-setup)
* [Relating More Than One Element](#relating-more-than-one-element)
* [Displaying Related Submissions](#displaying-related-submissions)

### Simple Setup

Here's instructions for setting up a simple relation of Freeform submissions to Craft Entries. A common use-case might be allowing comments or reviews for a product (being a Craft Entry). Let's assume you're on a single entry page.

1. First, create a new Craft field inside the Craft CP with a field handle of `productReviews`, using the **Freeform Submissions** field type. Then be sure to add it to the relevant Craft Entry channel/section.
2. Now, for the templating part. To start, you might be pulling your Entry data like the following:
    ``` twig
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>
    ```
3. Let's add a simple form to the page template using the Freeform simple `render` approach now:
    ``` twig {5}
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>

    {{ craft.freeform.form("productReviewsForm").render() }}
    ```
4. And here's the special sauce... this is where we add the `relations` parameter and feed it the Entry ID to allow attaching the submission to the Entry:
    ``` twig {6-8}
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>

    {{ craft.freeform.form("productReviewsForm").render({
        relations: {
            productReviews: entry.id,
        },
    }) }}
    ```
5. Submit the form, and you'll see that the Freeform submissions should now be relating to the `productReviews` field of the Craft Entries (can see/confirm this inside the control panel by viewing the Craft Entry).

### Relating More Than One Element

Let's take the above example a little further. The following guide will show you how to relate Freeform submissions to Craft Entries and the currently logged in user. A common use-case might be allowing comments or reviews for a product (being a Craft Entry) and also tying them to the currently logged in user. Let's assume you're on a single entry page again...

1. First, create a new Craft field inside the Craft CP with a field handle of `productReviews`, using the **Freeform Submissions** field type. Then be sure to add it to the relevant Craft Entry channel/section.
2. Second, we'll create another Craft field with a handle of `userReviews`, using the **Freeform Submissions** field type. Then be sure to add it to the Craft Users field layout.
3. Now, for the templating part. To start, you might be pulling your Entry data like the following:
    ``` twig
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>
    ```
4. Let's add a simple form to the page template using the Freeform simple `render` approach now:
    ``` twig {5}
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>

    {{ craft.freeform.form("productReviewsForm").render() }}
    ```
5. And now let's relate the form submissions to both the current Craft Entry and the currently logged in User by feeding those ID's to the `relations` parameter:
    ``` twig {6-9}
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>

    {{ craft.freeform.form("productReviewsForm").render({
        relations: {
            productReviews: entry.id,
            userReviews: currentUser.id,
        },
    }) }}
    ```
6. Submit the form, and you'll see that the Freeform submissions should now be relating to the `productReviews` field of the Craft Entries as well as the `userReviews` field for the User that submitted the form.

### Displaying Related Submissions

If you'd like to display submissions that are related to any given Craft Element, you would do this by calling the **Freeform Submissions** field in your element, and using the ID(s) it contains to populate a [freeform.submissions](../template-functions/freeform.submissions.md) function.

Let's work off of the [Relating More Than One Element](#relating-more-than-one-element) example above. If you used the [Simple Setup](#simple-setup) example, just ignore the *Users* part of this guide. Again, we're assuming you have a **Freeform Submissions** field with a handle of `productReviews` for Craft Entries, and another **Freeform Submissions** field with a handle of `userReviews` for Craft Users.

1. To start, you might be pulling your Entry data like the following:
    ``` twig
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>
    ```
2. And with the Freeform form using the Freeform simple `render` approach and the `relations` parameter setup:
    ``` twig {5-10}
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>

    {{ craft.freeform.form("productReviewsForm").render({
        relations: {
            productReviews: entry.id,
            userReviews: currentUser.id,
        },
    }) }}
    ```
3. Now let's pull Freeform submissions that have been related to the Craft Entry, and also use the related User ID to populate User data about the user that submitted the review (submission):
    ``` twig {12-35}
    <h2>{{ entry.title }}</h2>
    <p>Posted on {{ entry.postDate.format('F d, Y') }}</p>
    <p>{{ entry.description }}</p>

    {{ craft.freeform.form("productReviewsForm").render({
        relations: {
            productReviews: entry.id,
            userReviews: currentUser.id,
        },
    }) }}

    {% if entry.productReviews|length %}

        <h3>Reviews</h3>

        {% set submissions = craft.freeform.submissions({
            id: entry.productReviews.ids(),
            orderBy: "dateCreated DESC",
            status: "open"
        }) %}

        <div class="reviews">
        {% for submission in submissions.all() %}
            <div class="review">
                <h4>{{ submission.title }}</h4>
                <p>
                    {% set relatedUser = craft.users().relatedTo(submission.id).one() %}
                    <i>Submitted by: <a href="{{ url('profiles/'~relatedUser.username) }}">{{ relatedUser.name }}</a></i>
                </p>
                <p>{{ submission.message }}</p>
            </div>
        {% endfor %}
        </div>

    {% endif %}
    ```

</div>
<div class="content-block">

## Email Notifications

To display the Craft element(s) you have related the Freeform submission to inside of an email notification, you can do that with the following code inside your email notification template:

``` twig
<ul>
{% for element in craft.entries.relatedTo(submission.id).all %}
    <li>{{ element.title }}</li>
{% endfor %}
</ul>
```

</div>