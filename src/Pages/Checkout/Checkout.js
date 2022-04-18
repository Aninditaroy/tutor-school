import React from 'react';
import './Checkout.css';
import { useParams,  Link } from 'react-router-dom';
import swal from 'sweetalert';
const Checkout = () => {
    const { serviceId } = useParams();
    const bookingAlert = () => {
        return swal({
            title: "Booking Done!",
            text: "Thank you for booking!",
            icon: "success",
        });
    }
    return (
        <>
            <h2 className='text-sm font-medium text-center text-gray-900'>Your Checkout Order No. <span className='text-blue-600/80'>{serviceId}</span> </h2>
            <p className='text-sm font-medium text-center text-gray-900 '>Do you want to book? <span className='text-secondary pe-auto underline text-blue-500' >Please fill the form below</span></p>
            <div className='w-full mt-16 lg:mx-auto'>
                <div className='flex items-center justify-center'>
                    <form className='shadow-md m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96 hover:shadow-2xl'>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                            <input type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
                            <input type="textarea" name='address' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                            <input type="number" name='phone' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <Link to='/services' type="submit" onClick={bookingAlert} className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3 disabled:bg-blue-400 cursor-pointer disabled:cursor-not-allowed disabled:text-white" >Confirm Booking</Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;