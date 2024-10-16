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
                    <h1 className='fw-bold'>Locales</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Locales contain all your language localization settings. Taojaa theme engine supports multiple languages using the provided language settings in your theme's <code>locales</code> folder  
                        </p>
                        <p>
                            They are JSON files located inside the locales folder and they supports <Link href={'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON'} target='_blank' className='text-primary'>JSON Standard <FiExternalLink /></Link> syntaxes only.
                        </p>
                    </div>

                    <h4 className='fw-bold'>Location</h4>
                    <div id='Location' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>

                        <div className='mb-5'>
                            <CodeBlock
                                language='bash'
                                value={`.
└── theme
    |   ...
    ├── configs
    |   ...
    ├── locales
    |   ├── en-US.json
    |   ├── en.default.json     // defualt language
    |   ├── fr.json     // French
    ...`} />
                        </div>
                    </div>


                    <h4 className='fw-bold'>Structure</h4>
                    <div id='Structure' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            All localization settings must be placed inside the <code>"general"</code> block in the locale JSON file and will be maded accessible inside across the theme's context.
                        </p>

                        <div className='mb-4'>
                            <CodeBlock
                                language='javascript'
                                value={`  // English en.default.json
{
    "general": {
        "auth": {
            "login_page_header": "Login with username",
        }
        ...
    }
}`} />
                        </div>

                        <p></p>
                        <div className='mb-4'>
                            <CodeBlock
                                language='javascript'
                                value={`  // French fr.json
{
    "general": {
        "auth": {
            "login_page_header": "Connectez-vous avec votre nom d'utilisateur"
        }
        ...
    }
}`} />
                        </div>

                    </div>

                    <h4 className='fw-bold'>Usage</h4>
                    <div id='Usage' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            When building a storefront theme with <Link href={'/docs/dev-tools/affluent'} target='_blank' className='text-primary'>Affluent <FiExternalLink /></Link> base theme, all supported language settings would be installed
                            inside the locales folder.
                        </p>

                        <p>You can access your language localization settings within your theme's HTML files and display them on your storefront, using the <code>general</code> object provided by the Taojaa theme engine which is accessible globally in any of your theme HTML files.</p>

                        <div className='mb-5'>
                            <CodeBlock
                                language='html'
                                value={`<!-- Login section -->
<div class="login-section">
    <div class="login-section-header">
        <h2>{{general.auth.login_page_header}}</h2> <!-- displaying language localization for login header -->
    </div>
    <div class="login-section-body">
        {{#form 'login' 'class="login-section-form" id="login-form"'}}
            <!-- content goes here -->
        {{#/form}}
    </form>
`} />
                        </div>

                    </div>

                    <Route {...routes} />
                </div>
                <div className='col-lg-3 ps-2 d-sm-none d-md-block d-none'>
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