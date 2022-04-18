import React from 'react';
import aboutImg from '../../images/about/about-img.jpg';
const About = () => {
    return (
        <div>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md lg:mx-auto mt-16 hover:shadow-2xl mb-16">
                <div class="flex flex-col items-center  pb-10">
                    <img class="mb-3 mt-3 w-60 h-60 rounded-full shadow-lg" src={aboutImg} alt=""/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Anindita Roy</h5>
                        <span class="text-sm text-gray-500 0">About Me</span>
                        <div class="flex mt-4 space-x-3 lg:mt-6 px-10">
                          <p className='text-xl text-gray-500 0'>Hi! Currently i am student.I want to be web developer and want to learn many things.I always try think out of the box and through this i want to develop key soft skills.I want to see myself doing an intership or a job.So far,that's my main goal.</p>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default About;