"use client";


import styles from '../../../page.module.css';

import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import Route from '@/components/Route';
import { FiExternalLink } from 'react-icons/fi';
import CodeBlock from '@/components/Code';

const Cli = () => {

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
                        <h1 className='fw-bold'>Taojaa CLI</h1>

                        <div id='Overview' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>
                                Taojaa CLI tool provide developers with a set of commands to perform development and deployment tasks directly from the terminal. Taojaa CLI is built on <Link href={'https://nodejs.org/en'} target='_blank' className='text-primary'>NodeJS <FiExternalLink /></Link> and also available
                                on <Link href={'https://github.com/Wearslot/cli'} target='_blank' className='text-primary'><i>Open Source <FiExternalLink /></i> </Link> for contributions and continuous improvement.
                            </p>
                        </div>

                        <h2 id='Installation' className='fw-bold'>Installation</h2>

                        <div className='alert alert-warning py-2 px-3 mb-3 mt-3'>
                            <p><b>Pre-requisites:</b></p>
                            <ul className='m-0'>
                                <li style={{ fontSize: 14 }}>Make sure you have the latest version of <Link href={'https://nodejs.org/en'} target='_blank' className='text-primary'>NodeJS <FiExternalLink /></Link> installed on you machine.</li>
                            </ul>
                        </div>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>Once you have NodeJS installed, follow these simple steps below to install Taojaa CLI tool on your local machine.</p>

                            <p>Run the NPM command to install Taojaa CLI globally on your machine</p>
                            <CodeBlock language='bash' value={`$ npm install -g taojaa-cli`} />

                            <p>This will install Taojaa CLI globally on your local machine and will be accessible via your terminal</p>
                            <p>To verify your installation, run this command on your terminal.</p>

                            <CodeBlock language='bash' value={`$ taojaa --help`} />
                        </div>

                        <h2 id='Updating' className='fw-bold'>Update to latest version</h2>
                        <div  className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>To update your existing Taojaa CLI to the latest version, simply uninstall the current version using the NPM uninstall command.</p>
                            <CodeBlock language='bash' value={`$ npm uninstall -g taojaa-cli`} />
                            <p>After you have successfully uninstall the current installed version, run the installation command specify <code>latest</code> tag to install the latest version.</p>
                            <CodeBlock language='bash' value={`$ npm install -g taojaa-cli@latest`} />
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

export default Cli;