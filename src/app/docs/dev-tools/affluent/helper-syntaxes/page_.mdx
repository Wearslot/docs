# Syntax

To render data & variables

<b>Example Data</b>

```json

```

```hbs

```

<br/>

For control flows such as loops and conditional operations

## Conditional statement

<b>If statement</b>

```hbs
<!-- Code example -->

{{#ifCond product.title "==" "Lofty Sneakers"}}
  // code goes here
{{/ifCond}}
```

<b>If-else statement</b>

```hbs
<!-- Code example -->

{{#ifCond product.title "==" "Lofty Sneakers"}}
  // code goes here
{{else}}
  // code goes here
{{/ifCond}}
```

<br/>

## Loops/iterations

<b>Example Data</b>

```json
{
  "products": [
    {
      "title": "Lofty Sneakers",
      "pagination": "<p>Nice soft sneakers</p>"
    },
    {
      "title": "Air Jordan",
      "pagination": "<p>Nice basketball sneakers</p>"
    }
  ]
}
```

```hbs
<!-- Code Example -->

{{#iterate products}}
  <h1>{{current.title}}</h1>
  <p>{{{current.description}}}</p>
{{/iterate}}

<!-- using specific name for items during iteration -->

{{#iterate products as="product"}}
  <h1>{{product.title}}</h1>
  <p>{{{product.description}}}</p>
{{/iterate}}

<!-- using specify the limit for an iteration, this will stop the -->
<!-- iteration after the number of specified iteration -->

{{#iterate products limit=1}}
  <h1>{{current.title}}</h1>
  <p>{{{current.description}}}</p>
{{/iterate}}
```

<br/>

## Rendering Sections & Components

<b>Sections</b>
All section files must be located inside the `sections` folder in the theme base directory. To render sections users can use the `render` helper for `.html` section files and the `sections` helper for `.json` grouped sections available on the display taojaa display engine.

```hbs
sections 
    | - sidebar.html 
    | - header-group.json
```

```hbs
{{{render "sidebar"}}}
{{{sections "header-group"}}}
```

<br/>

<b>Components</b>
All component files must be located inside the `components` folder in the theme base directory. To render components users can use the `component` helper available on the display taojaa display engine.

```hbs
components 
    | - cart-drawer.html 
    | - cart-count.html
```

```hbs
{{{component "cart-count"}}}
{{{component "cart-drawer"}}}
```

<br/>

<b>Injecting data down into partial files</b>

```hbs
{{{render "sidebar" padding="10px" display=false}}}
{{{component "cart-drawer" items=cart.items}}}
```

<br/>

## Forms

Form helpers are used to create actions form on the theme views to perform specific http requests on submit.

To open a action form user can use the `form` helper available in the view engine and specify the action type from the list of available form actions.

Available form action types `product`,`remove-item`,`newsletter`,`search`,`apply-coupon`,`remove-coupon`,`contact`,`review`,`wishlist`,`customer-login`,`customer-logout`,`password-reset`.

```hbs
<!--  Example -->

{{#form type:string key=value [props:string] }}
    // code goes here
{{/form}}
```

<br/>

```hbs
<!-- This form will create an add-to-cart action form -->

{{#form "product" product=product "id="product-form" class="form" }}
    <input type="number" name="quantity" id="quantity" value="1" />
    <input type="number" name="variant_id" id="variant_id" value="{{product.default_or_selected_variant_id}}" />
    <button type="submit">
        Add to Cart
    </button>
{{/form}}
```

<br/>

```hbs
<!-- This form will create a remove-from-cart action form -->

{{#form "remove-item" item=cart.items[0]}}
    <button type="submit">
        Remove Item
    </button>
{{/form}}
```

<br/>

```hbs
<!-- This form will create a subscribe to newsletter action form -->

{{#form "newsletter"}}
  <input type="email" name="email" id="email" placeholder="Your e-mail" />
  <button type="submit">
    Subscribe
  </button>
{{/form}}
```

<br/>

```hbs
<!-- This form will create a search action form -->

{{#form "search"}}
  <input type="text" name="keywords" id="keywords" placeholder="Search" />
  <button type="submit">
    Search
  </button>
{{/form}}
```

<br/>

```hbs
<!-- This form will create an apply-coupon action form -->

{{#form "apply-coupon"}}
  <input type="text" name="coupon" id="coupon" placeholder="Coupon code" />
  <button type="submit" name="apply_coupon">
    Apply Coupon
  </button>
{{/form}}
```

<br/>

```hbs

```

## Widgets

Widgets are set of objects used in building blocks on theme and can also be customized using the usign the editor. Taojaa theme engine has 2 major widget helpers which are `widgets` and `widget`

#### Widgets Helper

Widgets provides the ability to loop through a list of available widgets within a secion.

<b>Template: home.json</b>

```json
{
    ...
    "sections": {
        "about": {
            ...
            "widgets": {
                "banner": {
                    "type": "image",
                    "settings": {
                        "image": "about.jpg",
                    }
                },
                "details": {
                    "type": "block",
                    "settings": {
                        "title": "About Us",
                        "description": "We also help with digital marketing"
                    }
                },
                "button": {
                    "type": "link",
                    "settings": {
                        "url": "/about-us",
                        "label": "Learn More"
                    }
                },
                ...
            }
        }
    }
}
```

<br/>

<b>Section: sections\about.html</b>

```hbs
<!-- Code example -->

{{#widgets section.widgets}}

    {{#ifCond widget.type '==' 'image'}}
        <div class="about-banner">
        <image src="{{ widget.settings.image }}" alt="About Us">
        </div>
    {{/ifCond}}

    {{#ifCond widget.type '==' 'block'}}
        <div class="about-detils">
            <h1>{{ widget.settings.title }}</h1>
            <p>{{ widget.settings.description }}</p>

            <!-- Button widget -->
        </div>
    {{/ifCond}}
{{/widgets}}
```

#### Widget Helper

The widget helper unlike the widget(s) helper provides access to only a single widget within the list of available widgets in a secion by specifying the key/name of the widget.

```hbs
<!-- This will provide access to the button widget -->

{{#widget name="button"}}
  <a href="{{widget.settings.url}}">{{widget.settings.label}}</a>
{{/widget}}
```

Now back to out about section. Where we want the button widget to be part of the block widget and the editable via the editor.

```hbs
<!-- About Us Section -->

{{#widgets section.widgets}}

    {{#ifCond widget.type '==' 'image'}}
        <div class="about-banner">
        <image src="{{ widget.settings.image }}" alt="About Us">
        </div>
    {{/ifCond}}

    {{#ifCond widget.type '==' 'block'}}
        <div class="about-detils">
            <h1>{{ widget.settings.title }}</h1>
            <p>{{ widget.settings.description }}</p>

            <!-- Button widget -->
            {{#widget name='button' as='button'}}
                <a href="{{button.settings.url}}">{{button.settings.label}}</a>
            {{/widget}}
        </div>
    {{/ifCond}}
{{/widgets}}
```

