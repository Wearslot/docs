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
            name: 'Overview',
            url: '/docs/storefronts/themes/getting-started'
        },
        next: {
            name: 'Customize Existing Theme',
            url: '/docs/storefronts/themes/getting-started/customize-existing-theme'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Getting Started</p>
                    <h1 className='fw-bold'>Building a new storefront theme</h1>

                    <div id='Start' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            You can build a new storefront theme for your store or for the Themes Store and monetize your themes on Taojaa.
                            To start building themes on Taojaa make sure you have the latest version of <Link href={"/dev-tools/cli"} className='text-primary'>Taojaa CLI <FiExternalLink /></Link>&nbsp;
                        </p>
                    </div>

                    <div className=''>

                    </div>

                    <h4 className='fw-bold'>Initialize a new theme</h4>
                    <div id='Initilize' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Once you have setup all your enviroments and your development store, you can then use the <code>taojaa init</code> command to initialize a theme project as shown below.
                        </p>

                        <CodeBlock language='bash' value={`$ taojaa init theme <your-theme-name>`} />

                        <p className='mt-4'>
                            This command would create a folder with your theme name using the <Link href={'/docs/dev-tools/affluent'} target='_blank' className='text-primary'>Affluent <FiExternalLink /></Link> base 
                            theme Architecture.
                        </p>
                        <p className='mt-4'>
                            After a successful theme initialization, you can now cd into your theme folder and run the below command to start your theme in development mode.
                        </p>
                        <CodeBlock language='bash' value={`$ taojaa theme dev --store <dev-store-name>`} />
                        <p className='mt-4'>
                            You development store name is simple the subdomain name of your storefront url. When you setup a store Taojaa provides your a unique storefront domain, for example 
                            a furniture store named Furni will have <Link href={'https://furni.taojaa.shop'} target='_blank' className='text-primary'>furni.taojaa.shop <FiExternalLink /></Link> as
                            it's storefront url while the <code>furni</code> is the development store name.
                        </p>
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