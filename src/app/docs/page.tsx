"use client";

import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import React, { useContext } from 'react';

const DocsPage = () => {

    const { theme } = useContext(AppProvider);

    const menus = [
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
            path: "/docs/storefronts"
        },
        {
            title: "Developer Account",
            path: "/docs/developer-account"
        },
        {
            title: "Taojaa CLI",
            path: "/docs/authentication"
        }
    ];

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} menus={menus} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Welcome to Taojaa Developer Documentation</p>
                        <h1>Introduction</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocsPage;