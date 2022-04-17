import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SocialLoginRegister = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebokError] = useSignInWithFacebook(auth);
    return (
        <>
          <div className='flex items-center justify-center'>
            <div className='border border-b-1  border-gray-400 m-3 mt-2 w-24  lg:w-40'></div>
              <span className='text text- text-slate-500'>OR</span>
            <div className='border border-b-1  border-gray-400 m-3 mt-2 w-24 lg:w-40'></div>
            </div>
            <div className='flex flex-col items-center justify-center mt-5'>
                <button onClick={() => signInWithGoogle()} className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                    <img style={{ width: "30px", height: "30px" }} src={google} alt=""  />
                    <span className='pl-8'>Continue with google</span>
                </button>
                <button onClick={() => signInWithGithub()} className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '>
                    <img style={{ width: "30px", height: "30px" }} src={github} alt="" />
                    <span className='pl-10'>Continue with github</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                    <img style={{ width: "30px", height: "30px" }} src={facebook} alt="" />
                    <span className='pl-5 '>Continue with facebook</span>
                </button>
            </div>
        </>
    );
};

export default SocialLoginRegister;