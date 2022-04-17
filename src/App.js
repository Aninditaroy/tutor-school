import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path='/services/checkout/:serviceId' element={<Checkout/>}></Route>
      </Routes>
    </>
  );
}

export default App;
