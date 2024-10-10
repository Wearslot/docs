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
            name: 'Layouts',
            url: '/docs/storefronts/themes/architecture/layouts'
        },
        next: {
            name: 'Sections',
            url: '/docs/storefronts/themes/architecture/sections'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Architecture</p>
                    <h1 className='fw-bold'>Templates</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Templates are the view page configurations files use in structuring how contents are being rendered on the storefront and to also retrieve data that would be needed for each temaplate view.
                        </p>
                        <p>
                            They are JSON files located inside the templates folder and subfolders and they supports <Link href={''} className='text-primary'>JSON Standard <FiExternalLink /></Link> syntaxes only.
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
    |   ...
    ├── templates
    |   ├── customer
    |   |   ├── orders.json
    |   ├── home.json
    ...`} />
                        </div>
                    </div>


                    <h4 className='fw-bold'>Structure</h4>
                    <div id='Structure' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Template files consist of four major blocks which are <code>"layout", "sections", "orders"</code> and <code>"data"</code> with each block having their own unique functionality
                            and use cases for every templates as stated below.
                        </p>

                        <div className='mb-4'>
                            <CodeBlock
                                language='javascript'
                                value={`{
    "layout": "main", // used in specifying the template's layout

    "sections": {
        ... // Consist all section objects and their settings for sections you want to render. 
    },

    "order": [], // To specify in which order the sections are to be rendered

    "data": {
        ... // To specify the data you want to make available for the page. [optional]
    }
}`} />
                        </div>

                        <p>
                            <b className='text-primary'>Layout - </b> is used to specify the name of the layout file the template will be rendered in and they are located inside the layouts folder.
                        </p>
                        <p>
                            <b className='text-primary'>Sections - </b> are set of objects that are used in customizing the contents to be rendered by your templates and all section requires a <code>"type"</code> key, which is used to specify
                            the section file to be rendered by the particular section.
                        </p>
                        <p>
                            <b className='text-primary'>Order - </b> this is used to specify the order in which the sections are being rendered on your theme. It's an array of strings which takes the section names has values.
                        </p>
                        <p>
                            <b className='text-primary'>Data - </b> by default Taojaa provides specific datas tailored to each templates features but in order to build any ecommerce experience you desire, Taojaa theme engine has provided
                            a means to request for specific datas you might need in your template using the <code>"data"</code> block in your template and can customize how you want to receive these datas with paginations and filtering features.
                            <br /><br /> To see the list of datas you can request for, reference the <Link href={'/docs/storefronts/themes/datas'} target='_blank' className='text-primary'>Storefront Datas <FiExternalLink /></Link> guide.
                        </p>

                    </div>

                    <h4 className='fw-bold'>Usage</h4>
                    <div id='Usage' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            When building a storefront theme with <Link href={'/docs/dev-tools/affluent'} target='_blank' className='text-primary'>Affluent <FiExternalLink /></Link> base theme, default templates would be installed
                            inside your templates folder, you can add new templates to your theme, making sure you follow the Taojaa Theme Standards your template will be automatically mapped it's respective route/path.
                        </p>

                        <p>
                            If you create a new template called <code>custom-experience.json</code> or using a subfolder <code>lookbooks/summer-{new Date().getFullYear()}.json</code> whenever storefront visitors
                            navigates to <code>/custom-experience</code> Taojaa will map this path to your <code>custom-experience.json</code> template and the same when users visits <code>/lookbooks/summer-{new Date().getFullYear()}</code>
                        </p>

                        <div className='mb-5'>
                            <CodeBlock
                                language='javascript'
                                value={`{
    "layout": "main",
    "sections": {
        "hero_section" : {
            "type": "hero-slideshow", // The name of the html section file to be rendered by this section
            "settings": {
                "padding": "20px"
            },
            "widgets": {
                "slide_1_heading": {
                    "type": "h1",
                    "text": "Best online shopping website"
                },
                ...
            }
        },
        "offers_section": {
            "type": "promotion-and-offers",
            "settings": {
                "heading": "We've got the best offers for you",
                "sub_heading": "Get 30% off all orders using this coupon."
            },
            "widget": {
                "categories": {
                    "type": "navigation",
                    "handle": "special_offers" // a navigation handle from the list of store navigations
                }
            }
        }
    },
    "order": [
        "hero_section",
        "offers_section"
    ],
    "data": {
        "products": {
            "pagination": {
                "per_page": 10
            }
        },
        "featured_collections": true
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