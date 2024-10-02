"use client";

import React, { useContext } from 'react';
import styles from './index.module.css'
import { AppProvider } from '@/contexts/AppContext';

const DocsLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    const { theme } = useContext(AppProvider)

    return (
        <main className={`${styles.docs} ${theme === 'dark' ? 'bg-dark' : ''}`}>
            {children}
        </main>
    );
};

export default DocsLayout;