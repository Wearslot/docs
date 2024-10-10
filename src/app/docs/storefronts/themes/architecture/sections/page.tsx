"use client";

import CodeBlock from '@/components/Code';
import Route from '@/components/Route';
import { AppProvider } from '@/contexts/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Page= () => {

    const { theme } = useContext(AppProvider);

    const routes = {
        previous: {
            name: 'Templates',
            url: '/docs/storefronts/themes/architecture/templates'
        },
        next: {
            name: 'Components',
            url: '/docs/storefronts/themes/architecture/components'
        }
    }

    return (
        <div className={`${theme === 'dark' ? 'text-white' : ''}`}>
            <div className='row'>
                <div className='col-lg-9'>
                    <p className='mt-2 mb-2'>Architecture</p>
                    <h1 className='fw-bold'>Sections</h1>

                    <div id='Start' className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Sections are partial HTML and JSON files used to render a group or a particular portion of the template on the storefront like headers-groups, special-offers, feature-products and more.
                        </p>
                        <p>
                            They are located inside the sections folder and subfolders and they the HTML sections files supports <Link href={''} className='text-primary'>Handlebars.js <FiExternalLink /></Link> syntaxes
                            and additional helpers that are provided by the Taojaa theme engine. The JSON section groups follows the same standard with the <Link href={'/docs/storefronts/themes/architecture/templates'} className='text-primary'>Templates <FiExternalLink /></Link> JSON file
                        </p>
                    </div>

                    <h4 className='fw-bold'>Location</h4>
                    <div id='Location' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>

                        <div className='mb-5'>
                            <CodeBlock
                                language='bash'
                                value={`.
└── theme
    ├── layout
    ├── sections
    |   ├── featured-collections.html
    |   ├── header-group.json
    |   ├── main-header.html
    ...`} />
                        </div>
                    </div>


                    <h4 className='fw-bold'>Structure</h4>
                    <div id='Structure' className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            Section HTML files should always contain a standard HTML elements with <Link href={''} className='text-primary'>Handlebars.js <FiExternalLink /></Link> syntaxes or
                            any custom helper function that are provided by the Taojaa theme engine.
                        </p>

                        <div className='mb-4'>
                            <CodeBlock
                                language='html'
                                value={`<!-- Start Featured Collection Section -->
<div class="product-section">
  <div class="container">
      <div class="row h-100">

        {{#iterate featured_collections}} <!-- Custom helper function to iterate over a list -->
        <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 h-100 order-2 order-lg-1">
            <a class="product-item" href="/collection/{{current.slug}}">
                <img src="{{current.image}}" class="img-fluid product-thumbnail">
                <h3 class="product-title">{{current.name}}</h3>
            </a>
        </div>
        {{/iterate }}

          <!-- Start Column 1 -->
          <div class="col-12 col-md-5 mb-5 mb-md-0 offset-lg-1 order-1 order-lg-1">
            {{#widgets section.widgets}} <!-- Custom helper function to iterate over section widgets -->
            {{#ifCond widget.type '==' 'featured_collections_title'}}
                <{{widget.tag}}>{{widget.settings.text}}</{{widget.tag}}>
            {{/ifCond}}
            {{#ifCond widget.type '==' 'featured_collections_description'}}
                <{{widget.tag}}>{{widget.settings.text}}</{{widget.tag}}>
            {{/ifCond}}
          {{/widgets}}
          </div>
          <!-- End Column 1 -->

      </div>
  </div>
</div>
<!-- End Featured Collection Section -->`} />
                        </div>
                    </div>

                    <h4 className='fw-bold'>Usage</h4>
                    <div id='Usage' className={`${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <p>
                            The section file name/path without the extension must be specified as the value for the <code>"type"</code> key within your section block.
                        </p>
                        <p>
                            If you create a new section file called <code>featured-collection.html</code> or in a subfolder <code>shop/featured-collection.html</code> when creating a section which uses this file the
                            value of you <code>"type"</code> key must be either <code>featured-collection</code> or <code>shop/featured-collection</code> respectively.
                        </p>

                        <div className='mb-4'>
                            <CodeBlock
                                language='javascript'
                                value={`{
    ...
    "sections": {
        "featured-collections" : {
            "type": "featured-collection", // The name of the html section file to be rendered
            ...
        }
    },
    ...
}`} />
                        </div>

                        <p>
                            HTML sections can also be rendered partially inside another section using the <code>{`{{{ render "<section-path>" }}}`}</code> helper function provided by the Taojaa theme engine.
                        </p>
                        <div className='mb-5'>
                            <CodeBlock
                                language='html'
                                value={`<!-- Rendering Featured Collection Section Inside Promotion Section -->
<div class="promotions-section">
  <div class="container">
      <div class="row h-100">
        
        <div class="col-md-6">
            Latest Featured Collections 
        </div>

        <div class="col-md-6">
            {{{ render "featured-collection" }}}
        </div>

      </div>
  </div>
</div>
<!-- End Promotion Section -->`} />
                        </div>
                    </div>

                    <Route {...routes} />
                </div>
                <div className='col-lg-3 ps-2'>
                    <div className={`border-start position-fixed ps-3 ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>
                        <h6 style={{ fontSize: 14 }}>ON THIS PAGE</h6>
                        <Link href={"#Overview"}><small style={{ fontSize: 13 }}>Overview</small></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;