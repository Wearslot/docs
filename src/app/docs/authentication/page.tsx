"use client";

import React, { useContext } from 'react';
import { menus } from '../page';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import Route from '@/components/Route';
import CodeBlock from '@/components/Code';

const Authentication = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        next: {
            name: null,
            url: null
        },
        previous: {
            name: 'Developer Tools',
            url: '/docs/dev-tools'
        }
    }

    const command = `$ taojaa authenticate\nEnter Access Token: {{YOUR_ACCESS_TOKEN}}\nEnter Secret Key: {{YOUR_SECRET_KEY}}\nAuthenticated succssfully.`;
    const command2 = `$ taojaa authenticate --accesstoken={{YOUR_ACCESS_TOKEN}} --secretkey={{YOUR_SECRET_KEY}}`;

    return (
        <div className='d-flex'>
            <Sidebar title={'Documentation'} menus={menus} />
            <div className='main-content'>
                <div className={`row ${theme === 'dark' ? 'text-white' : ''}`}>
                    <div className='col-md-9'>
                        <p className='mt-2 mb-2'>Overview</p>
                        <h1>Authentication</h1>

                        <div id='Authentication' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>
                                To develop themes, apps and plugins using Taojaa CLI and APIs, it requires authentication as part of the security and data protection method.
                                See below how to authenticate your CLI access and API access on Taojaa.
                            </p>
                        </div>

                        <div className='alert alert-warning py-2 px-3 mb-5'>
                            <p><b>Pre-requisites:</b></p>
                            <ul className='m-0'>
                                <li style={{ fontSize: 14 }}>Make sure you have the latest version of <Link href={'/docs/developer-tools/cli'} className='text-primary fw-bold'><u>Taojaa CLI</u></Link> installed. See <Link href={''} className='text-primary fw-bold'><u>Installation Guide</u></Link> on how to install the latest version.</li>
                            </ul>
                        </div>

                        <h4>CLI Authentication</h4>
                        <div id='CLI-Authentication' className={`${theme === 'dark' ? 'text-white' : 'text-muted'} mb-5`}>
                            <p>
                                To authenticate your CLI access once you have installed the CLI tool globally on your local machine, run the command <code>taojaa authenticate</code> on your terminal, you will be asked
                                to enter your SECRET KEY and your ACCESS TOKEN.
                            </p>
                            <p>To get your credentials, sign in to your <Link href={'https://partners.taojaa.com'} className='text-primary fw-bold'>Partners Account</Link></p>

                            <CodeBlock language='bash' value={command} />

                            <p>You can also use the option flags to run a one line command as show below</p>

                            <CodeBlock language='bash' value={command2} />
                        </div>

                        <Route {...routes} />
                    </div>
                    <div className='col-lg-3 ps-2'>
                        <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                            <Link href={"#Authentication"}><small style={{ fontSize: 13 }}>Authentication</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;