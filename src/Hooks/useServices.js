
import { useEffect, useState } from 'react';

const useServices = () => {
   const [service,setServices] = useState([]);
   useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setServices(data));
   },[]);
   return [service,setServices];
};

export default useServices;