---
title: Craft Freeform 5.x - Populate Field Options at Template Level - User Guide
description: A guide to populating a field's options at the template level.
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

# Populate Field Options at Template Level

Sometimes you may need to populate field options such as Dropdown, Checkboxes or Radios dynamically at the template level. Perhaps you're populating the options from a Craft Entry or some other Twig template code in your template. Freeform specifically wasn't designed to handle this, but you can work around it with this guide.

While Freeform does allow for [populating field options with predefined data](../forms/fields/#populating-fields-with-elements-predefined-options) in the control panel, this isn't always enough for every use case. Further to this, Freeform explicitly requires that all options exist for the field in the form builder work with field types like Dropdown, Checkboxes, etc. To work around this, you can create the field as a regular **Text** field instead, and then modify the formatting template to account for it and include your own Twig code to pull in dynamic options. It isn't a perfect solution, but the closest you can get.


[[toc]]


## Instructions

Here's how to make those changes on your site:

<div class="step">
<label for="step1"><input type="checkbox" class="step-check" id="step1">

### Step 1

</label>

Create a new form or edit an existing form as usual. Add a new **Text** field and let's call it **Services** with a handle of `services`, and place it somewhere into your form layout.

</div>

<div class="step">
<label for="step2"><input type="checkbox" class="step-check" id="step2">

### Step 2

</label>

Update your formatting template code...

- Let's assume you're using something that resembles the Solspace sample Flexbox formatting template:
    ``` twig
    {{ form.renderTag }}

    {% for row in rows %}
        {% set width = (12 / (row|length)) %}
        <div{{ form.attributes.row|raw }}>
            {% for field in row %}
                {{ field.render() }}
            {% endfor %}
        </div>
    {% endfor %}

    {{ form.renderClosingTag }}
    ```
- Update it to include a conditional that checks on your new **Services** field:
    ``` twig {7-9,11}
    {{ form.renderTag }}

    {% for row in rows %}
        {% set width = (12 / (row|length)) %}
        <div{{ form.attributes.row|raw }}>
            {% for field in row %}
                {% if field.handle == "services" %}
                    // YOUR CUSTOM CODE HERE
                {% else %}
                    {{ field.render() }}
                {% endif %}
            {% endfor %}
        </div>
    {% endfor %}

    {{ form.renderClosingTag }}
    ```
- Let's say you wanted to populate the **Services** field with options from a Craft Entry that is already loaded into the page, and you want to grab the options of that field (e.g. `companyServices`). The final code might look something like this:
    ``` twig {7-17,19}
    {{ form.renderTag }}

    {% for row in rows %}
        {% set width = (12 / (row|length)) %}
        <div{{ form.attributes.row|raw }}>
            {% for field in row %}
                {% if field.handle == "services" %}
                    {{ field.renderLabel() }}
                    {{ field.renderInstructions() }}
                    <select name="{{ field.handle }}" id="{{ field.idAttribute }}">
                            <option>Please select...</option>
                        {% for option in entry.companyServices %}
                            <option value="{{ option.value }}">{{ option.label }}</option>
                        {% endfor %}
                    </select>
                    {{ field.renderErrors() }}
                {% else %}
                    {{ field.render() }}
                {% endif %}
            {% endfor %}
        </div>
    {% endfor %}

    {{ form.renderClosingTag }}
    ```

</div>

<div class="step-finished">Finished!</div>

Your form will now display options populated by the outside Craft Entry source, and allow you users to submit the form choosing one of those options. The data will then be stored in the **Services** text field as a simple string of text.
