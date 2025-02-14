import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fliud Navbar' style={{alignContent:'center'}}  >
      <Row>
           <Col md={'8'}>
           <nav>OUTLET RUSH</nav>
           </Col>
           <Col>
               <ul className='Navitem'>
                    <Link to={'/Buyer/ProductPage'} style={{textDecoration:'none',color:"#fff"}}>
                         <li  >Products</li>
                    </Link>
                    <Link to={'/Buyer/ProductPage'}>
                         <li>
                             <select name="" id="">gift card</select>
                         </li>
                    </Link>
                    <Link to={'/Buyer/ProductPage'} style={{textDecoration:'none',color:"#fff"}}>
                         <li>Log in/Sign up</li>
                    </Link>
               </ul>
           </Col>
      </Row>
       
    </div>
  )
}

export default Navbar



 //const handleSubmit = (e) => {
    //   e.preventDefault();
      
    
    //   // Validate password length
    //   // if (formData.password.length < 4) {
    //   //   setPasswordError("Password must be at least 4 characters long.");
    //   // 
    //   // } else {
    //   //   setPasswordError(""); 
    //   // }
    
    
    //   // if (formData.password !== formData.confirmPassword) {
    //   //   setConfirmPasswordError("Passwords do not match!");
    //   //   valid = false;
    //   // } else {
    //   //   setConfirmPasswordError(""); 
    //   // }
    
    //   // if (valid) {
    //   // localStorage.setItem("userData", JSON.stringify(formData));
    //   // alert("Sign-up successful!");
    //   // }
     
    // };