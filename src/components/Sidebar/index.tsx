"use client"

import React, { Fragment, useContext } from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import { AppProvider } from '@/contexts/AppContext';
import { links } from '../Navbar';
import { IoMenuOutline, IoMoonSharp } from "react-icons/io5";
import { IoLogoGithub } from 'react-icons/io';
import { BsFillBrightnessHighFill } from 'react-icons/bs';

interface SubsType {
    title: string;
    path: string;
}

export interface Menus {
    title: string;
    path: string;
    subs?: SubsType[];
    [key: string]: string | SubsType[] | undefined;
}

interface SidebarProps {
    title: string;
    menus: Menus[];  // Correctly type the 'menus' prop
}


const Sidebar: React.FC<SidebarProps> = ({ menus, title }) => {

    const { theme, sidebar, updateTheme, toggleSidebar } = useContext(AppProvider)

    const handleSidebarMenuClick = () => {
        if (window.innerWidth <= 480) {
            toggleSidebar(false);
        }
    }

    return (
        <div className={`${styles.sidebar} ${theme === 'light' ? 'bg-white' : 'bg-dark'} ${sidebar ? styles.open : ''}`}>
            <div className={styles.content}>

                <div className={`accordion accordion-flush`} id="accordionSidebarMenu">

                    <div className={`accordion-item d-sm-block d-md-none d-lg-none mb-3 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
                        <h2 className="accordion-header d-block" id={`flush-appMenus`}>
                            <button className={`${styles.accordion_button} accordion-button px-3 py-2 collapsed ${theme === 'dark' ? 'dark-acc-btn' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-appMenus`}
                                aria-expanded="false" aria-controls={`flush-appMenus`}>
                                <IoMenuOutline size={18} className='me-2' /> Menus
                            </button>
                        </h2>
                        <div id={`flush-appMenus`} className="accordion-collapse collapse" aria-labelledby={`flush-appMenus`}
                            data-bs-parent="#accordionSidebarMenu">
                            <div className="accordion-body py-0">
                                <ul className='p-0 m-0' style={{ listStyle: 'none' }}>
                                    <li className='mb-2'>
                                        <Link href={`/`} onClick={handleSidebarMenuClick} className={`${theme === 'dark' ? 'text-white' : ''} `}>
                                            Home
                                        </Link>
                                    </li>
                                    {links.map((nav, i) =>
                                        <li key={`menu-${i}`} className='mb-2'>
                                            <Link href={`${nav.path} `} onClick={handleSidebarMenuClick} className={`${theme === 'dark' ? 'text-white' : ''} `}>
                                                {nav.name}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h6 className={`${styles.title} fw-bold ${theme === 'dark' ? 'text-white border-0' : ''} `}>{title}</h6>

                    {menus.map((menu, index) =>
                        <Fragment key={index}>
                            {menu?.subs
                                ? <Fragment>
                                    <div className={`accordion-item ${theme === 'dark' ? 'bg-dark text-white' : ''}`}>
                                        <h2 className="accordion-header" id={`flush-${menu.title.replaceAll(' ', '-')} `}>
                                            <button className={`${styles.accordion_button} accordion-button collapsed ${theme === 'dark' ? 'dark-acc-btn' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-${menu.title.replaceAll(' ', '-')}`}
                                                aria-expanded="false" aria-controls={`flush-${menu.title.replaceAll(' ', '-')}`}>
                                                {menu.title}
                                            </button>
                                        </h2>
                                        <div id={`flush-${menu.title.replaceAll(' ', '-')}`} className="accordion-collapse collapse" aria-labelledby={`flush-${menu.title.replaceAll(' ', '-')} `}
                                            data-bs-parent="#accordionSidebarMenu">
                                            <div className="accordion-body py-0">
                                                <ul className='p-0 m-0' style={{ listStyle: 'none' }}>
                                                    {menu.subs.map((nav, i) =>
                                                        <li key={`sub-${i}`} className='mb-2'>
                                                            <Link href={`${menu.path}${nav.path}`} className={`${theme === 'dark' ? 'text-white' : ''} menu-item`}>
                                                                {nav.title}
                                                            </Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                                :
                                <p className='py-2 mb-0'>
                                    <Link className={`${theme === 'dark' ? 'text-white' : ''} menu-item`} onClick={handleSidebarMenuClick} key={index} href={menu.path}>{menu.title}</Link>
                                </p>
                            }
                        </Fragment>
                    )}
                </div>

                <div className='sidebar-footer position-absolute bottom-0 d-md-none d-lg-none'>
                    <ul className='d-flex gap-2' style={{ listStyle: 'none' }}>
                        <li className="nav-item me-3">
                            <Link href="#" onClick={() => updateTheme((theme === "dark" ? "light" : "dark"))}>
                                {theme === "light"
                                    ? <IoMoonSharp size={20} />
                                    : <BsFillBrightnessHighFill size={20} className={'text-white'} />}
                            </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link href="#">
                                <IoLogoGithub size={23} className={theme === 'dark' ? 'text-white' : ''} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;