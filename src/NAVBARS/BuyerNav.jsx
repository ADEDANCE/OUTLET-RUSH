import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wmessage from '../welcome-paages/Wmessage';

const BuyerNav = () => {
  return (
    <div>
          <nav>
            <ul>
                <Link  to={"/"} className='BuyerPages' 
                   
                >
                  <li > PRODUCTS</li> </Link>
                <Link  to={"/"} className='BuyerPages' > <li className='BuyerPages'>CART</li></Link>
            </ul>
          </nav>

          {/* <Routes>
                  <Route path='/' element={<Wmessage/>} />
        </Routes> */}
    </div>

   
  );
}

export default BuyerNav