import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignupBuyer = () => {
 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "Minor",
        bvn: "",
        description: "",
        age: "",
       gender: "",
        phone: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/"); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (formData.password.length < 4) {
      alert("Password must be at least 4 characters");
      return;
    }
    localStorage.setItem("userData", JSON.stringify(formData));
  alert("Sign-up successful!");
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit} >
               < span className='signup-form' >
               <></>
               <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
               />
                  <input
                    type="text"
                    name="email"
                    placeholder="Company email"
                    value={formData.email}
                    onChange={handleChange}
                    required
               />
                  <input
                    type="text"
                    name="description"
                    placeholder="Product description"
                    value={formData.description}
                    onChange={handleChange}
                    required
               />
                   <input
                    type="text"
                    name="bvn"
                    placeholder="BVN"
                    value={formData.bvn}
                    onChange={handleChange}
                    required
               />
                   <input
                    type="text"
                    name="password"
                    placeholder="Input password"
                    value={formData.password}
                    onChange={handleChange}
                    required
               />

<div className='select-account'>
                <p>Select prfer account</p>
                <button>Minor</button>
                <button>Major</button>
                <button>Master</button>
               </div>
               <div>
               <button type="submit">Sign Up</button>
               <button type="reset" onClick={handleHomeButton}>back to home page</button>
               </div>              
         </span>
       
        </form>
    </div>
  )
}

export default SignupBuyer