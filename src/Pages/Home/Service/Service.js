import React from 'react';
import './Service.css';
import coach from '../../../images/home/coach.png';
import tutor from '../../../images/home/tutor.png';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, email, img, price, description, job_title } = service;
    return (
        <>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-10 py-6 my-2">
                <div className="flex flex-col items-center pb-10 ">
                    <div className=" px-4 pt-4 pb-3">
                     <div >
                      <span className="bg-red-100 text-red-800 text-xs font-semibold  px-1 rounded dark:bg-red-200 dark:text-red-900">{job_title}</span>
                     <span className='flex items-center justify-center'> <img src={tutor} alt="" className='w-8 h-8'/></span>
                     </div>
                    </div>
                    <div className='border border-b-1 border border-gray-200 mb-2 w-44 '></div>
                    <img className="mb-3 w-24  h-24 rounded-full shadow-lg " src={img} alt="" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-black dark:text-gray-400">{}</span>
                    <h6 className="text-gray-800  text-xs font-semibold  px-1 rounded my-2"><span className='bg-red-200 rounded-lg p-1'>{price} per class</span></h6>
                    <h5  class="text-xs tex text-slate-600 m-5">{description.slice(0,150)}</h5>
                    <div className='border border-b-1 border border-gray-200 mb-2 w-44 '></div>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                        <Link as={Link} to='/cart' className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</Link>
                        <Link as={Link} to='/about' className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Know More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;