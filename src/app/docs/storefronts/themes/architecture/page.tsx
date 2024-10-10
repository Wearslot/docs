"use client";

import CodeBlock from '@/components/Code';
import Route from '@/components/Route';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const Page= () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Customize Existing Theme',
            url: '/docs/storefronts/themes/getting-started/customize-existing-theme'
        },
        next: {
            name: 'Layouts',
            url: '/docs/storefronts/themes/architecture/layouts'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Architecture</p>
                    <h1 className='fw-bold'>Theme Architecture</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Themes are structured and organized in folder with each folder containing specific related files and resources that are compactible with the Taojaa theme engine.
                        </p>
                    </div>

                    <div className='mb-5'>
                        <CodeBlock
                            language='bash'
                            value={`.
├── assets
├── components
├── configs
├── layouts
├── locales
├── sections
└── templates
    └── customers`} />
                    </div>

                    <h4 className='fw-bold'>Folder structure and supported files</h4>
                    <div id='Initilize' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Taojaa theme engine supports HTML, CSS, JS, and others asset types for content rendering and JSON for theme settings, data access and page configurations. These files are located
                            inside their respective folders below which are their supported locations.
                        </p>

                        <ol>
                            <li>
                                <p>
                                    <Link href={'#layouts'} target='_blank' className='text-primary text-underline'><b>Layouts</b></Link> -
                                    consist HTML files that are used as page layouts for the templates and they mostly includes the header and footer sections, while using the <code>{'{{{ content }}}'}</code> helper to add each page's template.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href={'#components-and-sections'} target='_blank' className='text-primary text-underline'><b>Components and Sections</b></Link> -
                                    consist HTML files used in rendering page contents, sections are used to render sections using the theme settings JSON
                                    and the components are used to render tiny parts of a section which can be reused and updated after an action.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href={'#templates-and-configs'} target='_blank' className='text-primary text-underline'><b>Templates and Configs</b></Link> -
                                    consist JSON files that are used in building pages and configuring your themes. The templates JSON files are used in setting up how contents is 
                                    rendered on the page, while the JSON files located in the configs are used to set global configurations which can be accessed across your theme.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href={'#assets'} target='_blank' className='text-primary text-underline'><b>Assets</b></Link> -
                                    this is where all your static files such as CSS, JavaScript, images files and others should be placed and will be accessible in your project using 
                                    the file name with the <code>{'{{ asset_url }}'}</code> helper as shown below. 
                                </p>
                                <p>
                                    <CodeBlock language='html' value={`<link rel="stylesheet" type="text/css" href="{{asset_url}}/main.css">\n<script type="text/javascript" src="{{asset_url}}/main.js"></script>`}/>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href={'#locales'} target='_blank' className='text-primary text-underline'><b>Locales</b></Link> -
                                    this folder consist JSON configurations files for localization settings including language tranlations.
                                </p>
                            </li>
                        </ol>
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