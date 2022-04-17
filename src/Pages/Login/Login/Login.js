import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/register');
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <>
        <div className='flex items-center justify-center'>
            <form onSubmit={handleLogin} className='shadow-md m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96'>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@tutorschool.com" required=""/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required=""/>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={navigateRegister}>Login</button>
            </form>
            </div>
            <SocialLoginRegister/>
        </>
    );
};

export default Login;