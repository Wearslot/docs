# Syntax

To render data & variables

##### Example Data

```
{
    product: {
        title: "Lofty Sneakers"
        description: "<p>Nice soft sneakers</p>"
    }
}
```

```
{{ product.title }}
{{{ product.description }}}     // html string
```

<br></br>

For control flows such as loops and conditional operations

<b>If statement</b>

```
{{#ifCond product.title '==' 'Lofty Sneakers'}}
    // code goes here
{{/ifCond}}
```

<b>If/else statement</b>

```
{{#ifCond product.title '==' 'Lofty Sneakers'}}
    // code goes here
{{else}}
    // code goes here
{{/ifCond}}
```

<br></br>

<b>Loops/iteration</b>

##### Example Data

```
{
    products: [
        {
            title: "Lofty Sneakers"
            pagination: "<p>Nice soft sneakers</p>"
        },
        {
            title: "Air Jordan"
            pagination: "<p>Nice basketball sneakers</p>"
        }
    ]
}
```

```
{{#iterate products}}
    <h1>{{ current.title }}</h1>
    <p>{{{ current.description }}}</p>
{{/iterate}}

// using specific name for items during iteration
{{#iterate products }}
    // code goes here
{{/iterate}}
```