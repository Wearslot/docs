"use client";


import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import Route from '@/components/Route';
import { FiExternalLink } from 'react-icons/fi';

const Affluent = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Developer Tools',
            url: '/docs/dev-tools'
        },
        next: {
            name: null,
            url: null
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Developer Tools</p>
                        <h1 className='fw-bold' id='Overview'>Get Started Affluent</h1>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>
                                Affluent is Taojaa developers base theme to bootstrap themes development for your Taojaa storefronts. Affluent run on a theme engine created by Taojaa which is powered by <Link href={'https://handlebarsjs.com/'} target='_blank' className='text-primary'>Handlebars <FiExternalLink /></Link> a JavaScript package for rendering views, the Affluent theme is also available
                                on <Link href={'https://github.com/Wearslot/affluent'} target='_blank' className='text-primary'><i>Open Source <FiExternalLink /></i> </Link> for contributions and continuous improvement.
                            </p>
                        </div>

                        <h2 id='Architecture' className='fw-bold'>Architecture</h2>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>Affluent follows the same themes architecture and standard and allows you keep files in their respective directories with a better naming convention.
                                See more details about <Link href={'/docs/storefronts/themes/architecture'} target='_blank' className='text-primary'><i>Storefront Themes Architecture <FiExternalLink /></i> </Link> </p>
                        </div>


                        <h2 id='SyntaxesAndHelpers' className='fw-bold'>Helpers and Syntaxes</h2>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>Taojaa theme engine supoorts all <Link href={'https://handlebarsjs.com/'} target='_blank' className='text-primary'>Handlebars <FiExternalLink /></Link> syntaxes and also provides additional helpers to help simplify development for developers.</p>
                            <p>View available helper syntax examples <Link href={'affluent/helper-syntaxes'} target='_blank' className='text-primary'>here</Link></p>
                        </div>

                        <Route {...routes} />
                    </div>
                    <div className='col-lg-3 ps-2 d-sm-none d-md-block d-none'>
                        <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                            <p className='mb-1'>
                                <Link href={"#Overview"}><small style={{ fontSize: 13 }}>Affluent</small></Link>
                            </p>
                            <p className='mb-1'>
                            <Link href={"#Architecture"}><small style={{ fontSize: 13 }}>Architecture</small></Link>
                            </p>
                            <p className='mb-1'>
                            <Link href={"#SyntaxesAndHelpers"}><small style={{ fontSize: 13 }}>Helpers and Syntaxes</small></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affluent;