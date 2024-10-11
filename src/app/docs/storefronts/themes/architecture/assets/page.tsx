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
            name: 'Components',
            url: '/docs/storefronts/themes/architecture/components'
        },
        next: {
            name: 'Configs',
            url: '/docs/storefronts/themes/architecture/configs'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Architecture</p>
                    <h1 className='fw-bold'>Assets</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Assets consist all your themes static files including stylesheets, JavaScript, Images and other static files which can be referenced anywhere inside your theme HTML files.
                        </p>
                        <p>
                            All asset files/folders must be placed inside the assets folder in your theme directory in order to be accessible in public by the theme and for external use cases.
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
    |   ├── main.css
    |   ├── main.js
    |   ├── favicon.png
    |   ├── plugins
    |   |   ├── livechat-plugins.js
    ├── ...
    ├── layouts
    ...`} />
                        </div>
                    </div>


                    <h4 className='fw-bold'>Usage</h4>
                    <div id='Usage' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            To access and reference an asset file from the assets folder, Taojaa theme engine has provided an <code>{`{{asset_url}}`}</code> helper
                            function which is to locate the asset directory and adding the path to the asset file you want to reference.
                        </p>
                        <div className='mb-3'>
                            <CodeBlock
                                language='html'
                                value={`<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="shortcut icon" href="{{asset_url}}/favicon.png">
    <link rel="stylesheet" href="{{asset_url}}/main.css" />
    ...
  </head>

  <body>

    ...

    <script type="text/javascript" src="{{asset_url}}/main.js" />
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