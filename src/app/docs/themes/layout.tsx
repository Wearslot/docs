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
            path: "/docs/themes",
            subs: undefined
        },
        {
            title: "Getting Started",
            path: '#',
            subs: [
                {
                    title: "Installation",
                    path: "/installation"
                }
            ]
        }
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