"use client";

import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react';

import pStyles from "../../../page.module.css"
import { FiExternalLink } from 'react-icons/fi';
import Route from '@/components/Route';

const page = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        next: {
            name: 'Getting Started',
            url: '/docs/storefronts/themes/getting-started'
        },
        previous: {
            name: null,
            url: null
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Stoefront Themes</p>
                    <h1 className='fw-bold'>Overview</h1>

                    <div id='Overview' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            You can build new storefront themes or customize an existing storefront themes that has been installed on your Taojaa store using <Link href={"/dev-tools/cli"} className='text-primary'>Taojaa CLI <FiExternalLink /></Link>&nbsp;
                            and <Link href={'/docs/dev-tools/affluent'} className='text-primary'>Affluent <FiExternalLink /></Link> a default developer theme on Taojaa for
                            building storefront themes.
                        </p>
                        <p>
                            <Link href={'/docs/dev-tools/affluent'} target='_blank' className='text-primary'>Affluent <FiExternalLink /></Link> is built using HTML, CSS, JavaScript & JSON, and powered 
                            by <Link href={''} className='text-primary'>Handlebars.js <FiExternalLink /></Link> for <Link href={''} className='text-primary'>NodeJS <FiExternalLink /></Link> applications and frontend views.
                        </p>
                    </div>

                    <div id='ThemeTypes' className={`mt-5`}>
                        <div className={pStyles.grid}>
                            <Link
                                href="/docs/storefronts/themes/getting-started/build-new-theme"
                                className={pStyles.card}>
                                <h2 className='fs-3'>
                                    Build new theme <span>-&gt;</span>
                                </h2>
                                <p>Intialize a new theme for your storefront using Affluent base theme.</p>
                            </Link>
                            <Link
                                href="/docs/storefronts/themes/getting-started/customize-existing-theme"
                                className={pStyles.card}>
                                <h2 className='fs-3'>
                                    Customize a Theme <span>-&gt;</span>
                                </h2>
                                <p>Manage, and customize an existing storefront theme for your store.</p>
                            </Link>
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

export default page;