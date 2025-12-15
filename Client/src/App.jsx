import React from 'react';
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import Gateway from './Pages/Gateway';
import Brands from './Pages/Brands';
import Offers from './Pages/Offers';
import Wholesale from './Pages/Wholesale';
import NewArrivals from './Pages/NewArrivals';
import TopRated from './Pages/TopRated';
import PowerTools from './Pages/PowerTools';
import SafetyGear from './Pages/SafetyGear';
import TrackOrder from './Pages/TrackOrder';
import History from './Pages/History';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Catalog from './Pages/Catalog';

const App = () => {
  return (
    <>
      <ToastContainer 
        position="bottom-right"
        autoClose={2000} 
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="colored" 
      />

      <Routes>
         

        <Route path='/' element={<Login/>} />
        <Route path="auth/hash/:username/tool-junctions-home" element={<Gateway />}>
          <Route path="brands" element={<Brands />} />
          <Route path="offers" element={<Offers />} />
          <Route path="wholesale" element={<Wholesale />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="power-tools" element={<PowerTools />} />
          <Route path="safety-gears" element={<SafetyGear />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>

        {/* Standalone pages */}
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>




      
    </>



  );
};

export default App;
