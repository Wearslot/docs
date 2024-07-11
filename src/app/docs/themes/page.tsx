"use client";

import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react';

import pStyles from "../../page.module.css"

const page = () => {

    const { theme } = useContext(AppProvider);

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Build Taojaa Themes</p>
                    <h1 className='fw-bold'>Overview</h1>

                    <div id='Overview' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Build storefront themes on Taojaa with <Link href={"/dev-tools/cli"} className='text-primary'>Taojaa CLI</Link>&nbsp;
                            and <Link href={'/docs/themes/dev-tools/affluent'} className='text-primary'>Affluent</Link> a default developer theme on Taojaa for
                            building storefront themes.
                        </p>
                        <p>
                            <Link href={'/dev-tools/affluent'} className='text-primary'>Affluent</Link> is built and powered by <Link href={''} className='text-primary'>Handlebars.js </Link>
                            for <Link href={''} className='text-primary'>NodeJS </Link> applications and frontend views.
                        </p>
                    </div>

                    <div id='Affluent-Achitecture' className={`mt-5`}>
                        <div className={pStyles.grid}>
                            <Link
                                href="/docs/themes/dev-tools/affluent"
                                className={pStyles.card}
                            >
                                <h2 className='fs-3'>
                                    Affluent Architecture <span>-&gt;</span>
                                </h2>
                                <p>See details on affluent folder structure, sections, components, syntax and configs.</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 ps-2'>
                    <div className={`border-start ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                        <Link href={"#Overview"}><small style={{ fontSize: 13 }}>Overview</small></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;