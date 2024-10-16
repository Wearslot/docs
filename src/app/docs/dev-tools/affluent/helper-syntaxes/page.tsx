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
                            Taojaa theme engine supports all <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> syntaxes and below you'll find exmples of all the additional helpers Taojaa has created
                        </p>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='javascript' value={`{
  "product": {
    "title": "Lofty Sneakers",
    "description": "<p>Nice soft sneakers</p>",
    "price": 10.00,
    "in_stock": true
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

                        <h2 id='Conditional-' className='fw-bold'>Operational & Conditional Helpers</h2>
                        <p>You can also perform operations within your theme's HTML files using any of the <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> evaluation expressions
                            and the additional helpers provided by the Taojaa theme engine.</p>

                        <p>We'll focus only on Taojaa theme engine additioanal helpers in this documentation.</p>

                        <h5 className='fw-bold'>If Condition Helper</h5>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#ifCond product.in_stock '==' true}}
    <!-- content goes here -->
{{/ifCond}}`} />
                        </div>

                        <h5 className='fw-bold'>If-else Conditional Helper</h5>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#ifCond product.in_stock '==' true}}
    <!-- content goes here -->
{{else}}
    <!-- content goes here -->
{{/ifCond}}`} />
                        </div>

                        <h5 className='fw-bold'>Unless Conditional Helper</h5>
                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='html' value={`{{#ifCond product.in_stock '==' true}}
    <!-- content goes here -->
{{else}}
    <!-- content goes here -->
{{/ifCond}}`} />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelperSyntaxes;