import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path='/services/:serviceId' element={<ServiceDetails/>}></Route>
        <Route path="/footer" element={<Footer/>} />
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </>
  );
}

export default App;
