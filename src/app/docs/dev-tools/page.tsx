"use client";


import styles from '../../page.module.css';

import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import Route from '@/components/Route';
import { FiExternalLink } from 'react-icons/fi';

const DevTools = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Storefronts',
            url: '/docs/storefronts'
        },
        next: {
            name: 'Authentication',
            url: '/docs/authentication'
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Developer Tools</p>
                        <h1 className='fw-bold'>Taojaa Developer Tools</h1>

                        <div id='Overview' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>
                                Taojaa has provided a set of developers tools that helps make building amazing digital commerce experience simple. Most of these tools are also available
                                on <Link href={''} target='_blank' className='text-primary'><i>Open Source <FiExternalLink /></i> </Link> for contributions and continuous improvement.
                            </p>
                        </div>

                        <div className={`row mt-5 mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>
                            <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <Link href={"/docs/dev-tools/cli"}>
                                        <h4>Taojaa CLI <span>-&gt;</span></h4>
                                        <p>A developer tool that helps run commands, build, manage and deploy Themes and Apps from your terminal.</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <Link href={"/docs/dev-tools/affluent"}>
                                        <h4>Affluent <span>-&gt;</span></h4>
                                        <p>A simple developer base theme for bootstrapping a storefront theme project on Taojaa and also via the Taojaa CLI.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={`row mt-3 mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>
                            <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <Link href={"/docs/dev-tools/partner-account"}>
                                        <h4>Partner Account <span>-&gt;</span></h4>
                                        <p>Partner accounts provides developers all the access needed to the information and resources to start building with Taojaa</p>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <Link href={"/docs/dev-tools/theme-engine"}>
                                        <h4>Theme Engine <span>-&gt;</span></h4>
                                        <p>A flexible JavaScript engine that powers Taojaa themes on the storefront, powered
                                            by <Link href={'https://handlebarsjs.com/'} className='text-primary'>Handlebars.js <FiExternalLink /></Link> for <Link href={'https://nodejs.org/en'} target='_blank' className='text-primary'>NodeJS <FiExternalLink /></Link> applications
                                            and frontend views.
                                        </p>
                                    </Link>
                                </div>
                            </div> */}
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
        </div>
    );
};

export default DevTools;