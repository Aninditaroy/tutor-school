import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';
import swal from 'sweetalert';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if(user){
        navigate(from ,{replace: true});
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    } 
    const navigateRegister = () => {
        navigate('/register');
    }
    return (
        <>
        <div className='flex items-center justify-center'>
            <form onSubmit={handleLogin} className='shadow-md m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@tutorschool.com" required=""/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required=""/>
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
                <p className="text-sm font-medium text-gray-900  hover:underline text-start login-label mr-5 my-5">
                    Forgot password?
                </p>
                <p className='text-sm font-medium text-gray-900 '>New to <span className='text-blue-600/80'>Tutor School</span> ? <Link to="/register" className='text-secondary pe-auto hover:underline text-slate-600/100' onClick={navigateRegister}>Please Register</Link></p>
            </form>
            </div>
            <SocialLoginRegister/>
        </>
    );
};

export default Login;