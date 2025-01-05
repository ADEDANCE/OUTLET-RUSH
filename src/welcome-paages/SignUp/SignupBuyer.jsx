import React from 'react'
import  {useState} from 'react'
import {Container, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const SignupBuyer = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "Minor", 
  bvn: "",
  description: "",
  age: "",
  gender: "",
  phone: "",
 });

const [passwordError, setPasswordError] = useState("");
 const [confirmPasswordError, setConfirmPasswordError] = useState("");

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  e.preventDefault();

  // Validate password length
  if (formData.password.length < 4) {
    setPasswordError("Password must be at least 4 characters long.");
    valid = false;
  } else {
    setPasswordError(""); 
  }


  if (formData.password !== formData.confirmPassword) {
    setConfirmPasswordError("Passwords do not match!");
    valid = false;
  } else {
    setConfirmPasswordError(""); 
  }

  if (valid) {
  localStorage.setItem("userData", JSON.stringify(formData));
  alert("Sign-up successful!");
  }
 
  handleHomeButton();
};

const navigate = useNavigate();
const handleHomeButton = () => {
  navigate("/"); 
};

  return (
         <Container fluid>
               <div className="CreateA-bg">
                   <div>
                       <h2>Create an account</h2>
                   </div>
                  <Card className="signup-card "> 
                       <form onSubmit={handleSubmit}>
                            <div className='signup-inputs'>
                                <input
                                   type="text"
                                   name="firstName"
                                   placeholder="First Name"
                                   value={formData.firstName}
                                   onChange={handleChange}
                                   required
                               />
                               <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                              />
             <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
             <input
              type="text"
              name="userName"
              placeholder="User Name"
              value={formData.userName}
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
            name='age'
            placeholder='Age'
            value={formData.age}
            onChange={handleChange}
            required
             />
              <input 
            type="text"
            name='gender'
            placeholder='Gender'
            value={formData.bvn}
            onChange={handleChange}
            required
             />
              <input 
            type="text"
            name='phone'
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
            required
             />

<input
              type="text"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
             {passwordError && <p style={{ color: "red", fontSize: "0.9rem" }}>{passwordError}</p>}
             <input
              type="text"
              name="confirmPassword"
              placeholder="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
             {confirmPasswordError && <p style={{ color: "red", fontSize: "0.9rem" }}>{confirmPasswordError}</p>}

            </div>
            {/* <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div> */}
            {/* <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div> */}
    </form>
       <div>
       <button type="submit" onClick={handleSubmit}>Sign Up</button>
       <button type="reset" onClick={handleHomeButton}>back to home page</button>
       </div>
    </Card>
    </div>
    </Container>
   
    
  )
}

export default SignupBuyer