"use client";


import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import Route from '@/components/Route';
import { FiExternalLink } from 'react-icons/fi';
import CodeBlock from '@/components/Code';

const HelperSyntaxes = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Affluent',
            url: '/docs/dev-tools/affluent'
        },
        next: {
            name: null,
            url: null
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Devlooper Tools</p>
                        <h1 className='fw-bold' id='Overview'>Affluent Helpers & Syntaxes</h1>

                        <p className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            Taojaa theme engine supports all <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> syntaxes and below you'll find examples of all the additional helpers added to the Taojaa theme engine.
                        </p>

                        <p>This documentation will focus only on Taojaa theme engine additioanal helpers, to see available helpers and syntaxes provided by Handlebars, kindly visit <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> official documentation.</p>

                        <p>
                            The example data below will be used throughout all the explanations on this page
                        </p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock wrapLines={true} language='javascript' value={`{
    "product": {
        "id": 20,
        "vendor_id": 1,
        "name": "Black Maxi Dress New",
        "slug": "black-maxi-dress-new",
        "brand": "",
        "price": "1657.49",
        "discount": 10,
        "quantity": 12,
        "collections": [
            {
                "name": "Fall SS24",
                "slug": "fall-ss24"
            },
            {
                "name": "Jumpsuits",
                "slug": "jumpsuits"
            }
        ],
        "availability": 1,
        "actual_price": "1841.66",
        "image": {
            "id": 20,
            "main": "https://res.cloudinary.com/dp7quxpsq/image/upload/v1716486557/dev/storage/images/pexels-ahmadsalamat-17801152.jpg",
            "cart": null,
            "video": "",
            "gallery": [
                "https://res.cloudinary.com/dp7quxpsq/image/upload/v1716486557/dev/storage/images/pexels-ahmadsalamat-17801152.jpg"
            ],
            "product_id": 20
        },
        "seo": {
            "id": 20,
            "meta_title": "",
            "meta_description": "",
            "meta_keywords": "",
            "product_id": 20
        },
        "inventory": {
            "id": 20,
            "sku": "",
            "barcode": "",
            "description": "<p>Black Maxi Dress</p>",
            "specifications": null,
            "care_information": "",
            "product_id": 20
        },
        "variations": [
            {
                "type": {
                    "id": 2,
                    "name": "Sizes",
                    "vendor_id": null,
                    "is_default": null
                },
                "values": [
                    {
                        "id": 102,
                        "name": "Size 10",
                        "variation_id": 2,
                        "product_id": 20,
                        "index": 0
                    },
                    {
                        "id": 101,
                        "name": "Size 8",
                        "variation_id": 2,
                        "product_id": 20,
                        "index": 1
                    },
                    {
                        "id": 103,
                        "name": "Size 12",
                        "variation_id": 2,
                        "product_id": 20,
                        "index": 2
                    }
                ],
                "index": 0
            }
        ],
        "variation_options": [
            {
                "id": 38,
                "price": 2000,
                "quantity": 10,
                "sku": "",
                "in_stock": true,
                "images": [],
                "product_id": 20,
                "name": "Size12"
            },
            {
                "id": 37,
                "price": 2000,
                "quantity": 9,
                "sku": "",
                "in_stock": true,
                "images": [],
                "product_id": 20,
                "name": "Size10"
            },
            {
                "id": 36,
                "price": 2000,
                "quantity": 10,
                "sku": "",
                "in_stock": true,
                "images": [],
                "product_id": 20,
                "name": "Size8"
            }
        ],
        "default_or_selected_variant": {
            "id": 38,
            "variant": "Size 12",
            "price": 2000,
            "quantity": 10,
            "sku": "",
            "in_stock": true,
            "images": null,
            "product_id": 20
        },
        "default_or_selected_options": [
            "Size 12"
        ],
        "default_or_selected_variant_id": 38,
        "has_variations": true,
        "tags": [],
    }
}`} />
                        </div>

                        <h2 id='RenderingData' className='fw-bold'>Rendering Data & Variables</h2>
                        <p>To display contents on the storefront theme, you can use the <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> simple expressions.</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`<h1>{{ product.title }}</h1>
{{{ product.description }}}         // this would render a html string
<span>{{ product.price }}</span>
`} />
                        </div>

                        <h2 id='Operations-&-Conditional-Helpers' className='fw-bold'>Operations & Conditional Helpers</h2>
                        <p>You can also perform operations within your theme's HTML files using any of the <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> conditional expressions
                            and the additional helpers provided by the Taojaa theme engine.</p>

                        <h5 id='If-Condition' className='fw-bold'>if Condition</h5>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#ifCond product.in_stock '==' true}}
    <!-- content goes here -->
{{/ifCond}}`} />
                        </div>

                        <h5 id='If-Else-Condition' className='fw-bold'>if-else Condition</h5>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#ifCond product.in_stock '==' true}}
    <!-- content goes here -->
{{else}}
    <!-- content goes here -->
{{/ifCond}}`} />
                        </div>

                        <h5 id='Unless-Helper' className='fw-bold'>unless Helper</h5>
                        <p>Unlike the <code>IfCond</code> the <code>unless</code> helper only execute when the express or parameter returns <code>false</code></p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#unless product.available_on_pre_order}}
    <!-- displays content -->
{{/unless}}`} />
                        </div>

                        <h5 id='Includes-Helper' className='fw-bold'>includes Helper</h5>
                        <p>The <code>includes</code> helper checks if an array includes a specific item, it takes 2 parameters which is the array to search in and the value of the item you're trying to check.</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#includes product.sizes 'Small'}}
    <!-- displays content -->
{{/includes}}`} />
                        </div>

                        <h5 id='InCart-Helper' className='fw-bold'>inCart Helper</h5>
                        <p>The <code>inCart</code> helper is a custom helper added by Taojaa to help check if an item of exact type already exist in cart and will be helpful when displaying action buttons, It takes the <code>product</code> object as parameter.</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#inCart product}}
    <!-- displays content -->
{{/inCart}}`} />
                        </div>

                        <h2 id='Loops-&-Iterators' className='fw-bold'>Loops & Iterators</h2>
                        <p>You can perform loops and iterations while rendering contents on your storefront view using any of the <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> iterators
                            and the additional iteration helpers provided by the Taojaa theme engine.</p>

                        <h5 id='Iterate-Helper' className='fw-bold'>iterate Helper</h5>
                        <p>With the <code>iterate</code> helper, you can loop through a list of items/object within your theme's HTML files and display contents based on your list.</p>
                        <p>At every iteration the <code>iterate</code> helper will provide an instance of the current item called <code>current</code></p>
                        <div className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#iterate product.variation_options}}
    <div class="variation-item">
        <h1>{{product.name}}</h1>
        <p>Price: {{current.price}}</p>
        <span>Available Quantity: {{current.quantity}}</span>
    </div>
{{/iterate}}`} />
                        </div>
                        <p>You can also specify a custom name for your iteration item during iteration using the <code>as</code> key just as shown below</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#iterate product.variation_options as="variant"}}
    <div class="variation-item">
        <h1>{{product.name}}</h1>
        <p>Price: {{variant.price}}</p>
        <span>Available Quantity: {{variant.quantity}}</span>
    </div>
{{/iterate}}`} />
                        </div>

                        <h5 id='Variations-Helper' className='fw-bold'>variations Helper</h5>
                        <p>This helper helps iterate over a product variations and provides all the variation information within your loop context, it takes a single parameter which is the product object.</p>
                        <div className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#variations product}}
    <div class="variation-item">
        {{#ifCond type.name '==' 'Sizes'}}
            <span>Available Sizes: </span>
            <!-- list available sizes -->
        {{/ifCond}}
    </div>
{{/variations}}`} />
                        </div>
                        <p>The <code>variations</code> helper also provides a nexted helper within its context called <code>variantOptions</code> to help iterate over the current variant values.</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#variations product}}
    <div class="variation-item">
        {{#ifCond type.name '==' 'Sizes'}}
            <span>Available Sizes: </span>
            <!-- list available sizes using nexted helper -->
            <ul>
                {{#variantOptions this}}
                    <li> 
                        <label> 
                            <input type="checkbox" value="{{id}}" /> <span>{{ name }}</span>
                        <label/>
                    </li>
                {{/variantOptions}}
            </ul>
        {{/ifCond}}
    </div>
{{/variations}}`} />
                        </div>

                        <h5 id='Widgets-Helper' className='fw-bold'>widgets Helper</h5>
                        <p>Unlike other iterators the <code>widgets</code> helper is mainly used to iterate over widgets that are provided in your template sections and makes sure they are accessible while using the theme editor to update your widget settings.</p>
                        <p>The <code>widgets</code> helper takes one required parameter which is the widgets object in your section context, and each widget can be accessed during the interation using <code>widget</code> variable or any name provided using the <code>as</code> key</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#widgets section.widgets}}
    <!-- content goes here -->
{{/widgets}}

<!-- or -->

{{#widgets section.widgets as="mywidgetvariable"}}
    <!-- content goes here -->
{{/widgets}}`} />
                        </div>

                        <h2 id='Forms' className='fw-bold'>Forms</h2>
                        <p>Taojaa theme engine provides a set of form helpers to help create action forms inside your storefront theme, with the <code>form</code> helper you can create
                            an action form to submit specific requests on the storefront.
                        </p>
                        <p>Available form action types <code>`product`,`remove-item`,`newsletter`,`search`,`apply-coupon`,`remove-coupon`,`contact`,`review`,`wishlist`,`login`,`logout`,`forgot-password`,`reset-password`</code></p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={` <!-- Form helper -->
{{#form [type:string] [props:string (optional)]}}
    <!-- content goes here -->
{{/form}}`} />
                        </div>
                        
                        <h5 id='Product-Form' className='fw-bold'>Product Form</h5>
                        <p>Product form type is used to build an add-to-cart action form for specific product on the storefront, which enables storefront users add items to cart on your store.</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={` <!-- This form will add an item to cart -->
{{#form "product" product=product 'id="add-to-cart" class="form"' }}
    <input type="number" name="quantity" id="quantity" value="1" />

    <input type="number" name="variant_id" id="variant_id" 
        value="{{product.default_or_selected_variant_id}}" />

    <button type="submit">
        Add to Cart
    </button>
{{/form}}`} />
                        </div>

                        <h5 id='Remove-Item-Form' className='fw-bold'>Remove Item Form</h5>
                        <p>Remove item form type is used to build a remove-from-cart action form for an item that has been added to cart on the storefront, which enables storefront users remove items from cart on your store.</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={` <!-- this form will remove from cart -->
{{#form "remove-item" item=cart.items[0]}}
    <button type="submit">
        Remove Item
    </button>
{{/form}}`} />
                        </div>

                        <h5 id='Newsletter-Form' className='fw-bold'>Newsletter Form</h5>
                        <p>Newsletter form type helps create a subscribe to newsletter form action on your storefront</p>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`<!-- This form will create a subscribe to newsletter action form -->
{{#form "newsletter"}}
    <input type="email" name="email" id="email" placeholder="Your e-mail" />

    <button type="submit">
        Subscribe
    </button>
{{/form}}`} />
                        </div>


                        <Route {...routes} />
                    </div>
                    <div className='col-lg-3 ps-2 d-sm-none d-md-block d-none'>
                        <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                            <p className='mb-1'>
                                <Link href={"#Overview"}><small style={{ fontSize: 13 }}>Affluent helpers & syntaxes</small></Link>
                            </p>
                            <p className='mb-1'>
                                <Link href={"#RenderingData"}><small style={{ fontSize: 13 }}>Rendering Data & Variable</small></Link>
                            </p>
                            <p className='mb-1'>
                                <Link href={"#Operations-&-Conditional-Helpers"}><small style={{ fontSize: 13 }}>Operations & Conditional Helpers</small></Link>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#If-Condition"}><small style={{ fontSize: 11 }}>If Condition</small></Link>
                                </p>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#If-Else-Condition"}><small style={{ fontSize: 11 }}>If-Else Condition</small></Link>
                                </p>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#Unless-Helper"}><small style={{ fontSize: 11 }}>Unless Helper</small></Link>
                                </p>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#Incudes-Helper"}><small style={{ fontSize: 11 }}>Includes Helper</small></Link>
                                </p>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#InCart-Helper"}><small style={{ fontSize: 11 }}>InCart Helper</small></Link>
                                </p>
                            </p>
                            <p className='mb-1'>
                                <Link href={"#Loops-&-Iterators"}><small style={{ fontSize: 13 }}>Loops & Iterators</small></Link>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#Iterate-Helper"}><small style={{ fontSize: 11 }}>Iterate Helper</small></Link>
                                </p>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#Variations-Helper"}><small style={{ fontSize: 11 }}>Variations Helper</small></Link>
                                </p>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#Widgets-Helper"}><small style={{ fontSize: 11 }}>Widgets Helper</small></Link>
                                </p>
                            </p>
                            <p className='mb-1'>
                                <Link href={"#Forms"}><small style={{ fontSize: 13 }}>Forms</small></Link>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#Product-Form"}><small style={{ fontSize: 11 }}>Product Form</small></Link>
                                </p>
                                <p className='mb-1 ms-3'>
                                    <Link href={"#Remove-Item"}><small style={{ fontSize: 11 }}>Remove Item</small></Link>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HelperSyntaxes;