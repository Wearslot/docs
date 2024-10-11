"use client";

import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";
import Route from '@/components/Route';

const GettingStarted = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Introduction',
            url: '/docs'
        },
        next: {
            name: 'Storefronts',
            url: '/docs/storefronts'
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Getting Started</p>
                        <h1>Overview</h1>

                        <div id='Overview' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>Let's walk you through the simple steps on how to start building with Taojaa storefront and developer tools.</p>
                        </div>

                        <h2>Set up your enviroments</h2>

                        <div id='SettingUp' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>Follow these simple steps below to start setting up you development environment and resources.</p>

                            <ol>
                                <li>
                                    <b>Developer/Partner's Account on Taojaa. </b> <Link href={'https://partners.taojaa.com'} target='_blank' className='text-primary'><i>Create Account <FiExternalLink /></i> </Link>
                                    <p>This provides the right access to resources and tools to build and publish themes and apps for the Taojaa store in development mode without any charges.</p>
                                </li>
                                <li>
                                    <b>Setup a Development Store. </b> <Link href={'https://partners.taojaa.com/resources/setting-up-a-development-store'} target='_blank' className='text-primary'><i>Setup Store <FiExternalLink /></i> </Link>
                                    <p>Create a free development store on your partners dashboard for your theme/app development and set it up with your sample products and store details. This can be converted to a live store when ready to go live.</p>
                                </li>
                                <li>
                                    <b>Start Building. </b>
                                    <p>Now you are set and let's start building amazing digital commerce experiences.</p>
                                    <p><Link href={'/docs/storefront/themes'} className='text-primary'><i>Build Storefront Themes <FiExternalLink /></i> </Link></p>
                                    <p><Link href={'/docs/storefront/headless'} className='text-primary'><i>Build Headless Storefronts <FiExternalLink /></i> </Link></p>
                                </li>
                            </ol>
                        </div>

                        <Route {...routes} />
                    </div>
                    <div className='col-lg-3 ps-2 d-sm-none d-md-block d-none'>
                        <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                            <Link href={"#Authentication"}><small style={{ fontSize: 13 }}>Authentication</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingStarted;