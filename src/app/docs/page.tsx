"use client";

import styles from '../page.module.css';

import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import React, { useContext } from 'react';
import Link from 'next/link';
import Route from '@/components/Route';

export const menus = [
    {
        title: "Introduction",
        path: "/docs",
    },
    {
        title: "Getting Started",
        path: '/docs/getting-started',
    },
    {
        title: "Storefronts",
        path: "/docs/storefronts",
    },
    {
        title: "Developer Tools",
        path: "/docs/dev-tools",
        subs: [
            {
                title: "Overview",
                path: "",
            },
            {
                title: "Taojaa CLI",
                path: "/cli",
            },
            {
                title: "Theme Engine",
                path: "/theme-engine",
            },
            {
                title: "Affluent",
                path: "/affluent",
            },
            {
                title: "Partner Account",
                path: "/partner-account",
            },
        ],
    },
    {
        title: "Authentication",
        path: "/docs/authentication",
    },
];

export default function DocsPage() {

    const { theme } = useContext(AppProvider);

    const routes = {
        next: {
            name: 'Getting Started',
            url: '/docs/getting-started'
        },
        previous: {
            name: null,
            url: null
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} menus={menus} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Welcome to Taojaa Developer Documentation</p>
                        <h1>Introduction</h1>

                        <div id='Introduction' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>This developer guide will help you kickstart your journey to start building amazing e-commerce experiences using Taojaa.</p>
                            <p>We have provided tools to help simplify how you build digital commerce experiences for your clients and their customers, let's build amazing experiences together.</p>
                        </div>

                        <div className="row mt-3 mb-5">
                            <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <Link href={"/dashboard/create-development-store"}>
                                        <h4>Create Dev Store</h4>
                                        <p>You can start building storefronts using dev stores, it's relatively free to use and helps bootstrap your development process</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${styles.card} p-3 rounded-2`}>
                                    <h4>Build for Theme Store</h4>
                                    <p>Create storefront themes for Taojaa theme store using Affluent, default developer theme and the Taojaa CLI tool.</p>
                                </div>
                            </div>
                        </div>

                        <h2>Quick Links</h2>
                        <div id='QuickLinks' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>

                        </div>

                        <Route {...routes} />
                    </div>
                    <div className='col-lg-3 ps-2'>
                        <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                            <Link href={"#Introduction"}><small style={{ fontSize: 13 }}>Introduction</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};