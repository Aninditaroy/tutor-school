import React from 'react';
import useServices from './../../../Hooks/useServices';
import Service from '../../Home/Service/Service';
const Services = () => {
    const [services] = useServices();
    return (
        <>
            <div className="container mx-auto flex justify-center mt-10">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;