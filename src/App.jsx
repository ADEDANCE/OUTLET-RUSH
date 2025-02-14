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
import Buyer from './NAVBARS/Buyer';
import BuyerProfile from './BUYER-PAGES/BuyerProfile';
import CartPage from './BUYER-PAGES/CartPage';
import OrderHistory from './BUYER-PAGES/OrderHistory';
import ProductPage from './BUYER-PAGES/ProductPage';


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

      <Route path='/Buyer' element={<Buyer/>} >
           <Route index element={<BuyerProfile />} /> 
          <Route path="CartPage" element={<CartPage/>} />  
          <Route path="OrderHistory" element={<OrderHistory />} />
          <Route path='ProductPage' element={<ProductPage />} />
     </Route>   
    </Routes>
  </Router>
  )
}

export default App