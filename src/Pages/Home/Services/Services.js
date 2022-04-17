import React from 'react';
import './Services.css';
import useServices from './../../../Hooks/useServices';
import Service from '../../Home/Service/Service';
import Footer from '../../Shared/Footer/Footer';
const Services = () => {
    const [services] = useServices();
    return (
        <>
            <div className="container lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto sm:mx-0">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-20 '>
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Services;