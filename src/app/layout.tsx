"use client";

import { Inter } from "next/font/google";
import 'prismjs/themes/prism-okaidia.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Header from "@/components/Header";
import AppContext from "@/contexts/AppContext";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <AppContext>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
        </body>
      </html>
    </AppContext>

  );
}
