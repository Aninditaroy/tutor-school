import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import tutor from '../../../images/home/tutor2.png';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    const [services] = useServices();
    const navigate = useNavigate();
    return (
        <>
        <section>
        <div className='bg-blue-600/10 pt-5'>
                <div className='flex lg:flex-row home-area items-center lg:mx-52'>
                    <div>
                        <span className=''>
                            <h2 className='shrink  home-heading text-blue-600/70 sm:text-xl'>Inspiring tutors, 
                            <br /> matched with your students.</h2>
                            </span>
                    </div>
                    <div>
                     <img src={tutor} alt="" className='home-img' />
                    </div>
                </div>
        </div>
        <div className="lg:mx-56">
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 my-5'>
                {
                    services.slice(0, 3).map(service => <Service key={service.id} service={service} />)
                }
            </div>
            <span className='flex justify-center'>
                <button onClick={() => navigate('/services')} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   shadow-lg mb-10">See All Reviews</button>
            </span>
        </div>
        </section>
        <Footer/>
        </>
    );
};

export default Home;