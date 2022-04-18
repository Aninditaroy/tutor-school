import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerMenu from '../../../images/header/hamburger-menu.png';
import services from '../../../images/header/services.png';
import blogs from '../../../images/header/blogs.png';
import about from '../../../images/header/about.png';
import login from '../../../images/header/login.png';
import logout from '../../../images/header/logout.png';
import logo from '../../../images/home/logo.png';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 nav-font hover:shadow-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <span
                            className="flex items-center font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap text-4xl text-blue-600/80"
                        >
                            <img src={logo} className="" alt="logo" />
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
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold"
                                as={Link} to="/services">
                                <img src={services} className="" alt="" />
                                Services
                            </Link>

                            <Link
                                className="nav-item px-3 py-2 flex items-center  hover:opacity-75 font-semibold"
                                as={Link} to="/blogs">
                                <img src={blogs} alt="" />
                                Blogs
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center hover:opacity-75 font-semibold"
                                as={Link} to="/about">
                                <img src={about} alt="" />
                                About
                            </Link>
                            {
                                user ?
                                    <button onClick={handleSignOut} className="nav-item px-3 py-2 flex items-center hover:opacity-50 font-semibold">
                                        <img src={logout} alt="" />
                                        Log out</button>
                                    :
                                    <Link
                                        className="nav-item px-3 py-2 flex items-center hover:opacity-50 font-semibold"
                                        as={Link} to="login">
                                        <img src={login} alt="" />
                                        Login
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;