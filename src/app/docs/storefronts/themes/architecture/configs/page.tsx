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
            name: 'Assets',
            url: '/docs/storefronts/themes/architecture/assets'
        },
        next: {
            name: 'Locales',
            url: '/docs/storefronts/themes/architecture/locales'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Architecture</p>
                    <h1 className='fw-bold'>Configs</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Configs folder consist only just the <code>settings.json</code> file which contains globally accessible settings across your theme templates and HTML files, which might include
                            your color scheme, fonts and others. These settings are also available for update via the theme editor for users to manage while customizing the theme.
                        </p>
                    </div>

                    <h4 className='fw-bold'>Location</h4>
                    <div id='Location' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>

                        <div className='mb-5'>
                            <CodeBlock
                                language='bash'
                                value={`.
└── theme
    ├── ...
    ├── configs
    |   ├── settings.json
    ├── ...
    ├── templates
    ...`} />
                        </div>
                    </div>

                    <h4 className='fw-bold'>Structure</h4>
                    <div id='Structure' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            The <code>settings.json</code> configuration file consist two major blocks, the <code>preset</code> which is the default configuration by the theme developer and the <code>custom</code> which
                            are the changes made by the theme user from the theme editor.
                        </p>

                        <div className='mb-4'>
                            <CodeBlock
                                language='javascript'
                                value={`{
    "preset": {
        ... // default settings and configurations. 
    },
    "custom": {
        ... // latest version of the preset settings from the theme editor changes. [optional]
    }
}`} />
                        </div>

                        <p>
                            <b className='text-primary'>Preset - </b> the preset block is defined by the theme developer and can be used to restore theme to default settings after changes are being made using the theme editor.
                        </p>
                        <p>
                            <b className='text-primary'>Custom - </b> consist the latest version of the theme settings when changes are made via the theme editor by the user.
                        </p>
                    </div>

                    <h4 className='fw-bold'>Usage</h4>
                    <div id='Usage' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            You can access these configuration settings anywhere in your theme HTML files or JSON templates files using the <code>settings</code> object that has been provided by the Taojaa theme engine.
                        </p>
                        <div className='mb-5'>
                            <CodeBlock
                                language='javascript'
                                value={`{
    "preset": {
        body_background_color: "#e4c4de",
        display_newsletter_popup: true,
        ...
    }
}`} />
                        </div>
                        <h5 className='fw-bold'>Accessing Settings in Layouts, Sections and Components HTML Files.</h5>
                        <p>
                            You can access these configuration settings anywhere in your theme HTML files or JSON templates files using the <code>settings</code> object that has been provided by the Taojaa theme engine.
                        </p>
                        <div className='mb-5'>
                            <CodeBlock
                                language='html'
                                value={`<!DOCTYPE html>
<html>
  <head>
    ...
  </head>

  <!-- using the body_background_color settings from the theme config settings -->
  <body style="background-color:{{settings.body_background_color}}"> 

    <!-- checking the newsletter display status from the config settings -->
    {{#ifCond settings.display_newsletter_popup '==' true}}
        {{{render 'newsletter-popup'}}}
    {{/ifCond}}

  </body>
</html>`} />
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