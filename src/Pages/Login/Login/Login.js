import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';
import Loading from '../../Shared/Loading/Loading';
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
    const [sendPasswordResetEmail, passwordSending, passwordError] = useSendPasswordResetEmail(auth);
    let errorElement;
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement =
            <p className='text-red-600/100 text-center'>Error: {error?.message}</p>
    }
    if(loading || passwordSending){
        return <Loading/>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Send email');
        }
        else{
            toast('Please enter your email address')
        }
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='shadow-md m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96'>
                    <form onSubmit={handleSubmit} className=''>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input ref={emailRef} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@tutorschool.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                            <input type="password" ref={passwordRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <button  type='submit' className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3">Login</button> 
                        <p className="text-sm font-medium text-gray-900 text-start  mr-5 my-5">Forgot password?
                        <button className='text-sm font-medium text-gray-900  hover:underline text-start' onClick={resetPassword}>Reset password</button>
                    </p>
                    </form>  
                    {errorElement}
                    <br />
                    <br />
                    <p className='text-sm font-medium text-gray-900 '>New to <span className='text-blue-600/80'>Tutor School</span> ? <Link to="/register" className='text-secondary pe-auto hover:underline text-slate-600/100' onClick={navigateRegister}>Please Register</Link></p>
                </div>
            </div>
            <SocialLoginRegister />
            <ToastContainer/>
        </>
    );
};

export default Login;