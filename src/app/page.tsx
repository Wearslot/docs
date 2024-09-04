"use client";

import styles from "./page.module.css";

import 'prismjs/themes/prism-okaidia.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as editor from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Link from "next/link";
import { useContext } from "react";
import { AppProvider } from "@/contexts/AppContext";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  const { theme } = useContext(AppProvider);

  const codeString = `
      <div class="product-card">
        <div class="product-image">
          <img src="{{product.image}}" alt="Wrist watch" />
        </div>

        <div class="product-detail">
          <h4>{{product.title}}</h4>
          <p>{{product.description}}</p>
        </div>

        <div class="product-buttons">
          {{#form 'product' product=product}}
            <button class="btn-primary">Add to Cart</button>
            <button class="btn-secondary">Buy Now</button>
          {{/form}}
        </div>
      </div>
  `;

  const menus = [
    {
        title: "Docs",
        path: "/docs",
    },
    {
        title: "References",
        path: '/references',
    },
    {
        title: "Community",
        path: "/docs/storefronts"
    },
    {
        title: "Blog",
        path: "/docs/authentication"
    }
];

  return (
    <main className={`${styles.main} ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
      <div className="d-lg-none d-md-none d-sm-block">
        <Sidebar title="Home" menus={menus}/>
      </div>
      <section className={styles.hero}>
        <div className="row">
          <div className={`col-lg-6 ${theme === 'dark' ? 'text-white' : ''}`}>
            <h1 className={`${styles.hero_h1} h1 mb-10 fw-bold`}>Start Building Amazing Digital Commerce Experiences</h1>
            <p className={styles.description}>Taojaa provides seamless tools and solution to help you build powerful storefronts
              and e-commerce apps for your clients and businesses.</p>
            <div className="mt-5">
              <Link href={'/account/register'} className="btn btn-primary btn-lg fw-bold fs-6 py-4 px-5">Start Building <span>-&gt;</span></Link>
              <Link href={`/docs`} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ms-4`}><u>View Documentation</u></Link>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.codeblock}`}>
            <SyntaxHighlighter language={'html'} style={editor.atomDark}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className={styles.themes}>
        <div className={`${styles.grid} ${theme === 'dark' ? 'text-white' : ''}`}>

          <Link
            href="/docs/storefronts/themes" scroll={false}
            className={styles.card}
          >
            <h2>
              Build Storefront Themes <span>-&gt;</span>
            </h2>
            <p>Create a new storefront theme for your store and publish to themes store for others using Toajaa integrated dev tools.</p>
          </Link>

          <Link
            href="/docs/storefronts/headless"
            className={styles.card}
          >
            <h2>
              Build Headless Storefronts <span>-&gt;</span>
            </h2>
            <p>Go headless with any framework such as Next.js, Gatsby, Vue and others using storefront APIs</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
