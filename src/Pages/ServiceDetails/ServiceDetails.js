import React from 'react';
import './ServiceDetails.css';
import { Link, useParams } from 'react-router-dom';
const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className='text-center mt-5'>
            <h2>Welcome to detail :{serviceId}</h2>
            <Link to="/checkout">
                <button className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   shadow-lg mb-10"'>Proceed to Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;