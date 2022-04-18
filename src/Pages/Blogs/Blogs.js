import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center lg:mx-20  xl:mx-32 2xl:mx-60 mt-10 mb-10'> 
            <ol class="relative border-l border-blue-400 ">
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                    <span class="mb-1 text-sm font-normal leading-none text-gray-400 ">Question-1</span>
                    <h4 class="text-lg font-semibold text-blue-900 ">Difference between authorization and authentication?</h4>
                    <p class="text-base font-normal text-gray-500  w-full">Authentication verifies who the user is and 	Authorization determines what resources a user can access.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user and Authorization works through settings that are implemented and maintained by the organization.Authentication is the first step of a good identity and access management process where Authorization always takes place after authentication.Authentication is visible to and partially changeable by the user and viceversa.</p>
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                    <span class="mb-1 text-sm font-normal leading-none text-gray-400 ">Question-2</span>
                    <h4 class="text-lg font-semibold text-gray-900 ">Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p class="text-base font-normal text-gray-500 ">Firebase Authentication provides backend services ready-made UI libraries to authenticate users to your app for storing our data.It supports authentication using passwords, phone numbers, identity providers like Google, Facebook and Twitter, and more.Rather than that,firebase also has hosting.I can host my website with a single command and quickly deploy web apps and serve both static and dynamic content to a global CDN.</p>
                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <span class="mb-1 text-sm font-normal leading-none text-gray-400 ">Question-3</span>
                    <h4 class="text-lg font-semibold text-gray-900 ">What other services does firebase provide other than authentication?</h4>
                    <span class="text-base font-normal text-gray-500 ">Firebase authentication alternatives  are:
                        <li>1. Auth0</li>
                        <li>2. MongoDB</li>
                        <li>3. Okta</li>
                        <li>4. Amazon Cognito</li>
                        <li>5. Passport</li>
                        <li>6. Keycloak</li>
                        <li>7. Backendless</li>
                        <li>8. JSON Web Token</li>
                    </span>
                </li>
            </ol>
        </div>
    );
};

export default Blogs;