import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerMenu from '../../../images/header/hamburger-menu.png';
import logo from '../../../images/home/logo.png';
import './Header.css';
const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 nav-font shadow-xl ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <span
                            className="flex items-center font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap text-4xl text-blue-600/80"
                        >
                            <img src={logo} className="" alt="logo"/>
                            <Link to="/">Tutor School</Link>
                        </span>
                        <button
                            className=" inline-flex items-center justify-center p-2 rounded-md text-white-600   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img
                                className="block h-8 w-8"
                                src={hamburgerMenu}
                                alt=""
                            />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <div className="flex flex-col lg:flex-row lg:ml-auto">
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75"
                                as={Link} to="/services">
                                Services
                            </Link>

                            <Link
                                className="nav-item px-3 py-2 flex items-center  hover:opacity-75"
                                as={Link} to="/blogs">
                                Blogs
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center hover:opacity-75"
                                as={Link} to="/about">
                                About    
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center hover:opacity-75"
                                as={Link} to="/login">
                                Login   
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;