import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wmessage from './welcome-paages/Wmessage';
import SignupBuyer from './welcome-paages/SignUp/SignupBuyer';
import SignupSeller from './welcome-paages/SignUp/SignupSeller';
import SellerProfile from './SELLER-PAGES/SellerProfile';
import ProductView from './SELLER-PAGES/ProductView';
import Seller from './NAVBARS/Seller';
import ManageOrder from './SELLER-PAGES/ManageOrder';
import Earnings from './SELLER-PAGES/Earnings';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Wmessage />} />
      <Route path="/SignupBuyer" element={<SignupBuyer />} />
      <Route path="/SignupSeller" element={<SignupSeller/>} />
     
      <Route path="/Seller" element={<Seller />}>
          <Route index element={<SellerProfile />} /> {/* Default page inside Seller */}
          <Route path="ManageOrder" element={<ManageOrder />} />  
          <Route path="ProductView" element={<ProductView />} />
          <Route path='Earnings' element={<Earnings />} />
        </Route>
      
    </Routes>
  </Router>
  )
}

export default App