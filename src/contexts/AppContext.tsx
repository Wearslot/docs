'use client'

import React, { createContext, useState, useEffect } from 'react';


interface AppContextData {
    theme: string,
    sidebar: boolean,
    updateTheme: (theme: string) => void,
    toggleSidebar: (status: boolean) => void
}

export const AppProvider = createContext<AppContextData>({ theme: 'light', sidebar: true, updateTheme: () => { }, toggleSidebar: () => { } })

const AppContext = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    const [theme, setTheme] = useState<string>('light');
    const [sidebar, setSidebar] = useState<boolean>(true);

    const updateTheme = (theme: string) => {
        setTheme(theme);
        return;
    }

    const toggleSidebar = (status: boolean) => {
        setSidebar(status)
        return;
    }

    useEffect(() => {
        window.innerWidth <= 480 ? setSidebar(false) : setSidebar(true);
    }, [])

    return (
        <AppProvider.Provider value={{ theme, updateTheme, sidebar, toggleSidebar }}>
            {children}
        </AppProvider.Provider>
    );
};

export default AppContext;