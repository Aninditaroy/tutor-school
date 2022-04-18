import React from 'react';
import './Footer.css';
import logo from '../../../images/home/logo.png';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import instagram from '../../../images/social/instagram.png';
import github from '../../../images/social/github.png';
import twitter from '../../../images/social/twitter.png';
import youtube from '../../../images/social/youtube.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="p-2 sm:p-6 sm:m-3 bg-blue-600/10">
                <span className="flex items-center font-bold leading-relaxed  mr-4 py-1 whitespace-nowrap text-4xl text-blue-600/80 pb-5 lg:ml-20">
                    <img src={logo} className="" alt="logo" />
                    <Link to="/">Tutor School</Link>
                </span>
                <div className="grid grid-cols-2 gap-8 sm:gap-0 sm:grid-cols-3 lg:ml-20">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <span className="hover:underline">Tutoring Classes</span>
                            </li>
                            <li>
                                <span className="hover:underline">Online Videos</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <span className="hover:underline">Privacy Policy</span>
                            </li>
                            <li>
                                <span className="hover:underline">Terms &amp; Conditions</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us On</h2>
                        <div className="flex sm:flex-col md:flex-row lg:flex-row">
                            <img src={google} alt="" className='w-6 h-6 rounded-full' />
                            <img src={github} alt="" className='w-6 h-6 lg:ml-2 rounded-full' />
                            <img src={facebook} alt="" className='w-6 h-6 lg:ml-2 rounded-full' />
                            <img src={twitter} alt="" className='w-6 h-6 lg:ml-2 rounded-full' />
                            <img src={instagram} alt="" className='w-6 h-6 lg:ml-2 rounded-full' />
                            <img src={youtube} alt="" className='w-6 h-6 lg:ml-2 rounded-full' />
                        </div>
                    </div>    
                </div> 
                <div className='lg:border lg:border-b-1  border-blue-400 mb-2 mt-10   lg:mx-80'></div>
                <p className="mt-6 text-sm text-gray-900 lg:text-center sm:text-start">©2019-2024 <span className='text-blue-600/80'>Tutor School</span> All Rights Reserved.</p>
            </footer>
        </> 
    );
};

export default Footer;