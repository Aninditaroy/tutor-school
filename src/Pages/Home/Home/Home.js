import React from 'react';
import coach from '../../../images/home/coach.png';
import tutor from '../../../images/home/tutor.png';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Services from '../Services/Services';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
const Home = () => {
    const [services] = useServices();
    const navigate = useNavigate();
    return (
        <>
        <div className="container lg:mx-56">
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 my-5'>
                {
                    services.slice(0, 3).map(service => <Service key={service.id} service={service} />)
                }
            </div>
            <span className='flex justify-center'>
                <button onClick={() => navigate('/services')} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 shadow-sm">See All Reviews</button>
            </span>
        </div>
        </>
    );
};

export default Home;