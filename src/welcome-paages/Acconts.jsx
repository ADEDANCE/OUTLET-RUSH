import React from 'react'
import { useState } from 'react';

const Acconts = () => {

    const [isSeller, setIsSeller] = useState(true); 
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length > 4) {
        alert("Password must be at least 4 characters");
        return;
    }
  }

  localStorage.setItem("userData", JSON.stringify(formData));
  alert("Sign-up successful!");

  return (
    <div>
         <h1>{isSeller ? "Sign Up as Seller" : "Sign Up as Buyer"}</h1>
      <form onSubmit={handleSubmit}>
        {isSeller ? (
               <>
               <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
               />
             </>
        ) : (
            <>
               <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            </>
        )};
         <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Acconts