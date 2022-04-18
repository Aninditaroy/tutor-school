import React from 'react';
import './NotFound.css';
import notFound from '../../../images/notfound/notfound.svg';
const NotFound = () => {
    return (
        <>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
        <h2 className='lg:text-4xl text-red-600/100 text-center py-10 font-semibold  lg:mt-40'>404! <br />The page you are  <br /> looking for is not found</h2>
            <img src={notFound} alt="" className='sm:w-100' style={{width:'550px'}}/>
        </div>
        </>
    );
};

export default NotFound;