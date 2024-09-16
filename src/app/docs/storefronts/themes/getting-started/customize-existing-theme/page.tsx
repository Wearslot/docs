"use client";

import CodeBlock from '@/components/Code';
import Route from '@/components/Route';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react';

import { FiExternalLink } from 'react-icons/fi';

const page = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Build new theme',
            url: '/docs/storefronts/themes/getting-started/build-new-theme'
        },
        next: {
            name: 'Architecture',
            url: '/docs/storefronts/themes/architecture'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Customize Storefronts</p>
                    <h1 className='fw-bold'>Customize existing storefront theme</h1>

                    <div id='Start' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            For an existing Taojaa Merchant, You can customize your existing storefront themes by cloning these themes using 
                            the <Link href={"/dev-tools/cli"} className='text-primary'>Taojaa CLI <FiExternalLink /></Link> or manually download the theme directly from your store admin.
                        </p>
                    </div>

                    <div className=''>
                        
                    </div>

                    <h4 className='fw-bold'>Clone an existing theme</h4>
                    <div id='Initilize' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            To customize an eisting theme you need to clone it, using the command shown below you can clone your storefront themes on Taojaa to your local machine.
                        </p>

                        <CodeBlock language='bash' value={`$ taojaa clone theme --name <your-theme-name> --store <dev-store-name> --version <theme-version>`} />

                        <p className='mt-4'>
                            The command will clone your specified theme name and the targeted version from your development store to your local machine and your theme folder will be located in your 
                            current working directory.
                        </p>
                        <p className='mt-4'>
                            After successfully cloning an existing theme, you can now cd into your theme folder and run the below command to start your theme in development mode.
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

export default page;