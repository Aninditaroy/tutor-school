import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../../firebase.init';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';
import './Register.css';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const registerAlert = () => {
        return swal({
            title: "Good job!",
            text: "Successfully registered!",
            icon: "success",
        });
    }
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password.value.length >=6 && confirmPassword.value.length >=6) {
            return swal("Error!", "Passwords must be in 6 characters or longer!", "error");
        }
        else if (password !== confirmPassword) {
            return swal("Error!", "Passwords did't match!", "error");
        }
        await createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleRegister} className='shadow-md m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96'>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@tutorschool.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                        <input type="password" name='confirmPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div className="flex items-start mb-3 mt-3">
                        <div className="flex items-center h-5">
                            <input onClick={() => setAgree(!agree)} id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-900 ">I agree with the <span className="text-blue-600 hover:underline ">terms and conditions</span></label>
                        </div>
                    </div>
                    <input type="submit" disabled={!agree} onClick={registerAlert} className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3 disabled:bg-blue-400 cursor-pointer disabled:cursor-not-allowed disabled:text-white" value="Register" />

                    <p className='text-sm font-medium text-gray-900 '>Already registered? <Link to="/login" className='text-secondary pe-auto underline text-blue-500' onClick={navigateLogin}>Please Login</Link></p>
                </form>
            </div>
            <SocialLoginRegister />
        </>
    );
};

export default Register;