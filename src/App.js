import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path='/login' element={<Login/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/service/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route>
       <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
