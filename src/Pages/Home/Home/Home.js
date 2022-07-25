import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import tutor from '../../../images/home/tutor2.png';
const Home = () => {
    const [services] = useServices();
    const navigate = useNavigate();
    return (
        <>
            <section>
                <div className='bg-blue-600/10 md:py-10 lg:py-10 xl:pt-3 2xl:pt-0'>
                    <div className='flex lg:flex-row home-area items-center lg:mx-52'>
                        <div>
                            <span className=''>
                                <h2 className='shrink  home-heading text-blue-600/70 sm:text-xl md:text-xl lg:text-3xl'>Inspiring tutors,
                                    <br /> matched with your courses with <br />
                                    Our <span className='text-blue-800/100'>Tutor School</span>!</h2>
                            </span>
                        </div>
                        <div>
                            <img src={tutor} alt="" className='home-img sm:ml-0 lg:ml-16 xl:ml-20 2xl:ml-20' />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl text-blue-600/100 text-center py-10 font-semibold hover:underline'>Our Courses</h2>
                    <div className="container mx-auto flex justify-center">

                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-20 courses'>
                            {
                                services.slice(0, 3).map(service => <Service key={service.id} service={service} />)
                            }
                        </div>

                    </div>
                    <span className='flex justify-center'>
                        <button onClick={() => navigate('/services')} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg mb-10">See All Services</button>
                    </span>
                </div>
            </section>
        </>
    );
};

export default Home;