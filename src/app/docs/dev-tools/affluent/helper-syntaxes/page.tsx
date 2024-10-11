"use client";


import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import Route from '@/components/Route';
import { FiExternalLink } from 'react-icons/fi';
import CodeBlock from '@/components/Code';

const HelperSyntaxes = () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Affluent',
            url: '/docs/dev-tools/affluent'
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
                        <p className='mt-2 mb-2'>Devlooper Tools</p>
                        <h1 className='fw-bold' id='Overview'>Affluent Helpers & Syntaxes</h1>

                        <p className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            Taojaa theme engine supports handlebars syntaxes and below you'll find exmples of all the additional helpers Taojaa has created 
                        </p>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <CodeBlock language='javascript' value={`{
  "product": {
    "title": "Lofty Sneakers",
    "description": "<p>Nice soft sneakers</p>"
  }
}`} />
                        </div>

                        <h2 id='RenderingData' className='fw-bold'>Rendering Data </h2>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <CodeBlock language='html' value={`<h1>{{product.title}}</h1>
{{{product.description}}}         // renders html string`
} />
                        </div>


                        <h2 id='SyntaxesAndHelpers' className='fw-bold'>Helpers and Syntaxes</h2>

                        <div className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <p>Taojaa theme engine supoorts all <Link href={'https://handlebarsjs.com/'} target='_blank' className='text-primary'>Handlebars <FiExternalLink /></Link> syntaxes and also provides additional helpers to simplify developments for developers.</p>
                            <p>View available helper syntax examples <Link href={'affluent/helper-syntaxes'} target='_blank' className='text-primary'>here</Link></p>
                        </div>

                        <Route {...routes} />
                    </div>
                    <div className='col-lg-3 ps-2 d-sm-none d-md-block d-none'>
                        <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                            <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                            <p className='mb-1'>
                                <Link href={"#Overview"}><small style={{ fontSize: 13 }}>Affluent helpers & syntaxes</small></Link>
                            </p>
                            <p className='mb-1'>
                                <Link href={"#RenderingData"}><small style={{ fontSize: 13 }}>Rendering Data</small></Link>
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

export default HelperSyntaxes;