import React from 'react';
import './Services.css';
import coach from '../../../images/home/coach.png';
import tutor from '../../../images/home/tutor.png';
import useServices from './../../../Hooks/useServices';
import Service from '../../Home/Service/Service';
import { Link } from 'react-router-dom';
const Services = () => {
    const [services] = useServices();
    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 my-5'>
            {
                services.map(service => <Service key={service.id} service={service} />)
            }
        </div>
    );
};

export default Services;