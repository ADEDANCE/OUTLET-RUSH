import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wmessage from './welcome-paages/Wmessage';
import SignupBuyer from './welcome-paages/SignUp/SignupBuyer';
import SignupSeller from './welcome-paages/SignUp/SignupSeller';
import SellerProfile from './welcome-paages/Profile-pages/SellerProfile';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Wmessage />} />
      <Route path="/SignupBuyer" element={<SignupBuyer />} />
      <Route path="/SignupSeller" element={<SignupSeller/>} />
      <Route path='/SellerProfile' element={<SellerProfile/>
    
    
    
    
    
    
    
    
    
    
    } />
    </Routes>
  </Router>
  )
}

export default App