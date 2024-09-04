"use client";


import styles from '../../page.module.css';

import React, { useContext } from 'react';
import { menus } from '../page';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import Route from '@/components/Route';

const Storefront = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Getting Started',
            url: '/docs/getting-started'
        },
        next: {
            name: 'Developer Tools',
            url: '/docs/dev-tools'
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} menus={menus} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Storefronts</p>
                        <h1 className='fw-bold'>Taojaa Storefronts</h1>

                        <div id='Overview' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>
                                Taojaa enables you to build storefronts for your online stores which allows you to personalize your brand and customers experiences.
                            </p>
                            <p>
                                By building themes using Taojaa developer tools or go Headless with our RESTful APIs.
                            </p>
                        </div>

                        <div className={`row mt-3 mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>
                            <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <Link href={"/docs/storefronts/themes"}>
                                        <h4>Build Storefront Themes <span>-&gt;</span></h4>
                                        <p>Create themes for your stores or build themes for others and publish to Taojaa themes store.</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <Link href={"/docs/storefronts/headless"}>
                                        <h4>Build with Headless API <span>-&gt;</span></h4>
                                        <p>Go headless with any framework such as Next.js, Gatsby, Vue and others using storefront APIs.</p>
                                    </Link>
                                </div>
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
        </div>
    );
};

export default Storefront;