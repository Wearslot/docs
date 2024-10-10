"use client";

import CodeBlock from '@/components/Code';
import Route from '@/components/Route';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Page= () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Sections',
            url: '/docs/storefronts/themes/architecture/sections'
        },
        next: {
            name: 'Assets',
            url: '/docs/storefronts/themes/architecture/assets'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Architecture</p>
                    <h1 className='fw-bold'>Components</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Components are sets of reusable HTML files that contains smaller snippets and can be used to render a smaller part of a section and can be updated after an action or event has been completed.
                        </p>
                        <p>
                            They are located inside the components folder and subfolders and they the HTML files that supports <Link href={''} className='text-primary'>Handlebars.js <FiExternalLink /></Link> syntaxes
                            and additional helpers that are provided by the Taojaa theme engine. 
                        </p>
                    </div>

                    <h4 className='fw-bold'>Location</h4>
                    <div id='Location' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>

                        <div className='mb-5'>
                            <CodeBlock
                                language='bash'
                                value={`.
└── theme
    ├── assets
    ├── components
    |   ├── cart-item.html
    |   ├── loader.json
    |   ├── payment-buttons.html
    ├── ...
    ├── layouts
    ...`} />
                        </div>
                    </div>


                    <h4 className='fw-bold'>Structure</h4>
                    <div id='Structure' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Components files should always contain a standard HTML elements with <Link href={''} className='text-primary'>Handlebars.js <FiExternalLink /></Link> syntaxes or
                            any custom helper function that are provided by the Taojaa theme engine.
                        </p>

                        <div className='mb-4'>
                            <CodeBlock
                                language='html'
                                value={`<!-- Total Cart Price Component -->
<bdi>
    <span class="taojaa-Price-currencySymbol">{{currency}}</span>{{total_amount}}
</bdi>`} />
                        </div>
                        <div className='mb-4'>
                            <CodeBlock
                                language='html'
                                value={`<!-- Loader Component -->
<link rel="stylesheet" href="{{asset_url}}/css/loader.css" type="text/css"/>

<div class="loading__spinner hidden">
    <div class="loader-02"></div>
</div>`} />
                        </div>
                    </div>

                    <h4 className='fw-bold'>Usage</h4>
                    <div id='Usage' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Taojaa theme engine provides a helper function the enables you render components within your section HTML files. 
                        </p>
                        <p>
                            Components can be placed directly inside the components folder or in a subfolder inside the components folder and can be rendered using <code>{`{{{ component "<component-name>" }}}`}</code> helper
                            function within your section file as shown below.
                        </p>

                        <div className='mb-3'>
                            <CodeBlock
                                language='html'
                                value={`<div class="bg-dark" cart-item="{{item.id}}">
    {{#form "remove-item" item=item}}

    <button type="submit" class="qodef-e-remove remove remove_from_cart_button"
        aria-label="Remove this item">
        <span class="qodef-icon-elegant-icons icon_close button_text"></span>
        {{{component 'loader'}}} <!-- Rendering a loader component -->
    </button>

    {{/form}}
    ...
</div>`} />
                        </div>
                        <p>
                            You can also pass down custom data down into your components by specifying the name and the value when referencing the component. 
                        </p>
                        <div className='mb-5'>
                            <CodeBlock
                                language='html'
                                value={`<tr class="order-total">
    <th>Total</th>
    <td data-title="Total">
        <strong>
            <span class="taojaa-Price-amount amount cart-total-amount">
                {{{component 
                    "cart-total-amount" 
                    currency="$" 
                    total_amount=1000.00
                }}} <!-- Rendering a cart total amount component -->
            </span>
        </strong>
    </td>
</tr>`} />
                        </div>
                        <h5 className='fw-bold'>Re-rendering/Updating Components after an action.</h5>
                        <p>
                            Components can be updated/re-rendered after an event has been triggered without re-loading the entire website. This can be achieved by specifying the list of affected components 
                            you want to update when making an action call using your javascript functions. 
                        </p>
                        <p>
                            When making an action call/request to any the storefront action handler specify the list of components you want to update using the <code>components</code> key in your payload and passing 
                            a stringified array of affected components as value. 
                        </p>
                        <div className='mb-5'>
                            <CodeBlock
                                language='javascript'
                                value={` const payload = {
    product_id,
    quantity,
    components: JSON.stringify(['cart-items', 'cart-total-amount'])
};

// Make a request to an add to cart action handler
fetch('/add-to-cart', { 
    method: "POST",
    headers: {
        Accept: "application/json",
    }, 
    body: JSON.stringify(payload)
}).then(response => response.json())
    .then(response => {
        // perform logic using action response
    }).catch((error) => {
        // handle error from action 
    });
`} />
                        </div>
                    </div>

                    <Route {...routes} />
                </div>
                <div className='col-lg-3 ps-2'>
                    <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                        <Link href={"#Overview"}><small style={{ fontSize: 13 }}>Overview</small></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;