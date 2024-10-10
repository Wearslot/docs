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
            name: 'Architecture Overview',
            url: '/docs/storefronts/themes/architecture'
        },
        next: {
            name: 'Templates',
            url: '/docs/storefronts/themes/architecture/templates'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Architecture</p>
                    <h1 className='fw-bold'>Layouts</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Layouts are files where <Link href={"/docs/storefronts/themes/architecture/templates"} className='text-primary text-underlined'>templates</Link> are 
                            being rendered after it has been compiled by the theme engine. 
                        </p>
                        <p>
                            They are html files located inside the layouts folder and they supports <Link href={''} className='text-primary'>Handlebars.js <FiExternalLink /></Link> syntaxes
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
    ├── layout
    |   ├── main.html
    |   ...
    ├── templates
    ...`} />
                    </div>
                    </div>


                    <h4 className='fw-bold'>Structure</h4>
                    <div id='Structure' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Layout files should always follow a standard html page structure since it's the container for all templates and can be used to include global contents/assets 
                            aross the entire theme. For example the main stylesheets and scripts, header and footer.
                        </p>

                        
                        <div className='mb-5'>
                            <CodeBlock
                                language='html'
                                value={`<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="{{asset_url}}/global.css" />
    ...
  </head>

  <body>

    {{{ sections "header-group" }}}

    ...
    {{{ content }}}
    ...

    {{{ sections "footer-group" }}}

    <script type="text/javascript" src="{{asset_url}}/global.js" />
  </body>
</html>`} />
                    </div>
                        

                    </div>

                    <h4 className='fw-bold'>Usage</h4>
                    <div id='Usage' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            You can create as many layout files as much as you need inside your theme's layout folder and the way to reference a particular layout in your template is by specifying the name 
                            of the layout file inside your template.
                        </p>
                        
                    <div className='mb-5'>
                            <CodeBlock
                                language='javascript'
                                value={`{
    "layout": "main", // this template will be using the "main.html" layout file 
    "sections": {
        ...
    },
    "order": [],
    "data": {
        ...
    }
}`} />
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