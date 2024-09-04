import Sidebar from '@/components/Sidebar';
import React from 'react';

const ThemesLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const menus = [
        {
            title: "Overview",
            path: "/docs/storefronts/themes",
            subs: undefined
        },
        {
            title: "Getting Started",
            path: '#',
            subs: [
                {
                    title: "Overview",
                    path: "/getting-started"
                },
                {
                    title: 'Build new theme',
                    path: '/getting-started/build-new-theme'
                },
                {
                    title: 'Customize existing theme',
                    path: '/getting-started/build-new-theme'
                }
            ]
        },
        {
            title: "Architecture",
            path: '#',
            subs: [
                {
                    title: "Overview",
                    path: "/architecture"
                },
                {
                    title: 'Layouts',
                    path: '/architecture/layouts'
                },
                {
                    title: 'Templates',
                    path: '/architecture/templates'
                },
                {
                    title: 'Sections',
                    path: '/architecture/sections'
                },
                {
                    title: 'Components',
                    path: '/architecture/components'
                },
                {
                    title: 'Assets',
                    path: '/architecture/assets'
                },
                {
                    title: 'Configs',
                    path: '/architecture/configs'
                },
                {
                    title: 'Locales',
                    path: '/architecture/locales'
                }
            ]
        },
        {
            title: "Best Practices",
            path: '#',
            subs: [
                {
                    title: "Overview",
                    path: "/best-practices"
                }
            ]
        },
        {
            title: "Monitize Themes",
            path: '#',
            subs: [
                {
                    title: "Overview",
                    path: "/monitization"
                },
                {
                    title: "Publish to Themes store",
                    path: "/monitization/publish-t-themes-store"
                }
            ]
        },
    ];

    return (
        <div className='d-flex'>
            <Sidebar title='Themes' menus={menus} />
            <div className='main-content'>
                {children}
            </div>
        </div>
    );
};

export default ThemesLayout;