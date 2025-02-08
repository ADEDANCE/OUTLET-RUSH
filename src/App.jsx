import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wmessage from './welcome-paages/Wmessage';
import SignupBuyer from './welcome-paages/SignUp/SignupBuyer';
import SignupSeller from './welcome-paages/SignUp/SignupSeller';
import SellerProfile from './SELLER-PAGES/SellerProfile';
import ProductView from './SELLER-PAGES/ProductView';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Wmessage />} />
      <Route path="/SignupBuyer" element={<SignupBuyer />} />
      <Route path="/SignupSeller" element={<SignupSeller/>} />
      <Route path='/SellerProfile' element={<SellerProfile/>}/>
      <Route path="/ProductView" element={<ProductView />} />
      
    </Routes>
  </Router>
  )
}

export default App