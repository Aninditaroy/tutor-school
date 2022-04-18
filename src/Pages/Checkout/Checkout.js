import React from 'react';
import './Checkout.css';
import { useParams, useNavigate } from 'react-router-dom';
const Checkout = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    return (
        <>
            <h2 className='text-center'>Welcome to checkout :{serviceId}</h2>
            <div className='w-full mt-20 lg:mx-auto'>

            </div>
        </>
    );
};

export default Checkout;