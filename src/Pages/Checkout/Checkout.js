import React, { useRef } from 'react';
import './Checkout.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
const Checkout = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2 className='text-center'>Welcome to checkout :{serviceId}</h2>
            <div className='w-full mt-20 lg:mx-auto'>

            </div>
        </div>
    );
};

export default Checkout;