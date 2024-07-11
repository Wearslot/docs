
'use client'

import { AppProvider } from '@/contexts/AppContext';
import Image from "next/image";
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { IoLogoGithub } from 'react-icons/io';
import { IoMoonSharp, IoClose } from "react-icons/io5";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";

export const links = [
    {
        name: "Docs",
        path: "/docs"
    },
    {
        name: "References",
        path: "/references",
    },
    {
        name: "Community",
        path: "/community"
    }
];

const NavBar = () => {

    const pathname = usePathname();
    const { theme, updateTheme, sidebar, toggleSidebar } = useContext(AppProvider);

    const handleResize = () => {
        if (window.innerWidth <= 480) {
            return toggleSidebar(false);
        }

        return toggleSidebar(true)
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <nav className={`navbar navbar-expand-lg navbar-light px-lg-5 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            <div className="container-fluid">
                <div className='d-flex align-items-center'>
                    <span onClick={() => toggleSidebar(!sidebar)} className={`me-3 ${theme === 'light' ? 'text-dark' : 'text-white'} d-sm-block d-md-none d-lg-none`}>
                        {sidebar ? <IoClose size={30} /> : <IoIosMenu size={30} />}
                    </span>

                    <Link className="navbar-brand" href="/">
                        <Image src={'/logo-light.png'} alt='Taojaa' width={50} height={50} />
                    </Link>
                </div>
                <button className={`navbar-toggler ${theme === 'dark' ? 'bg-white' : ''} d-none d-md-block d-lg-none`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link, index) =>
                            <li className="nav-item ms-2" key={index}>
                                <Link className={`nav-link ${theme === 'dark' ? 'text-white' : ''} ${pathname.indexOf(link.path) > -1 ? 'active' : ''}`} href={link.path}>{link.name}</Link>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <Link className="nav-link" href="#">
                                <IoLogoGithub size={23} className={theme === 'dark' ? 'text-white' : ''} />
                            </Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" href="#" onClick={() => updateTheme((theme === "dark" ? "light" : "dark"))}>
                                {theme === "light"
                                    ? <IoMoonSharp size={20} />
                                    : <BsFillBrightnessHighFill size={20} className={'text-white'} />}
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;