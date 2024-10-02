'use client'

import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../Navbar';

import styles from './index.module.css'
import { AppProvider } from '@/contexts/AppContext';

const Header = () => {

    const { sidebar } = useContext(AppProvider);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.header} style={scrollPosition > 10 || sidebar ? { borderBottom: '1px solid rgba(200, 200, 200, 0.15)' } : {}}>
            <NavBar />
        </header>
    );
};

export default Header;