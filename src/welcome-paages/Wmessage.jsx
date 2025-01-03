import React from 'react'
import { useNavigate } from 'react-router-dom';


function Wmessage() {

    const navigate = useNavigate();
        const handleSignup = () => {
          navigate("/Accounts"); 
        };

  return (
    <div>
          <nav>WELCOME TO OUTLET RUSH</nav>
        <div>
              <p>
              Welcome to OUTLET RUSH, your one-stop destination for everything you need to elevate your style, enhance your living space, and stay ahead with the latest gadgets.
              We specialize in offering:
              </p>
                <ul>
                    <li> 
                         Trendy fashion essentials to express your unique style.
                     </li>
                     <li>
                          Beautiful home accessories to make your space feel like home.
                     </li>
                     <li>
                     Cutting-edge phones, laptops, and tech gadgets to keep you connected.
                     </li>
                </ul>
                <p>
                Our goal is to bring you quality, affordability, and inspiration all in one place. Whether you're looking to upgrade your look, transform your home, or explore the latest in technology, we've got something for you.
                </p>
                <h1>Thank you for choosing OUTLET RUSH —where style meets innovation. We're excited to be part of your journey</h1>
                 
               <button onClick={handleSignup}>SignUp</button>
        </div>
    </div>
  )
}



export default Wmessage