"use client";

import Link from 'next/link';
import React, { useContext } from 'react';

import { AppProvider } from '@/contexts/AppContext';
import styles from './index.module.css'

interface Menu {
    url: string | null,
    name: string | null
}

const Route = ({ previous, next }: Readonly<{ previous: Menu, next: Menu }>) => {

    const { theme } = useContext(AppProvider);

    return (
        <div id='Routing' className={`${theme === 'dark' ? 'text-white' : 'text-muted'} mt-5`}>
            <div className='row'>
                <div className='col-md-6'>
                    {previous.url !== null &&
                        < Link href={previous.url} className={styles.routeItem}>
                            <span>&lt;-</span> {previous.name}
                        </Link>
                    }
                </div>
                <div className='col-md-6 text-end'>
                    {next.url !== null &&
                        <Link href={next.url} className={styles.routeItem}>
                            {next.name} <span>-&gt;</span>
                        </Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Route;