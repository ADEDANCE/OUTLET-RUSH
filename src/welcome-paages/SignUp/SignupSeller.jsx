import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaEye,FaEyeSlash} from "react-icons/fa"

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
  })

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

  const initialValues = {
    company_name: "",
    email: "",
    password: "",
    confirm_password: "",
    bvn: "",
    gender: "",
    Phone: "",
  };

    const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/"); 
  }

  const handleSubmit = (values, { resetForm }) => {
    setFormData(values); // Update state with form data
    resetForm(false); // Reset the form
    navigate("/Seller"); // Navigate to another page
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     navigate("/SellerProfile");
//   }

  const validationSchema = Yup.object({ 
    company_name: Yup.string().required("Company name is required"),
     email: Yup.string().email("Invalid email").required("Email required"),
     Phone: Yup.string()
      .trim()
      .matches(/^(\+234|0)/,
    "Phone number must start with +234 or 0"
  )
  .min(10, "Phone number must be at least 10 characters")
  .max(14, "Phone number must not exceed 14 characters")
  .required("Phone number is required"),
  bvn: Yup.string().required("Bvn name is required"),
   password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
        confirm_password: Yup.string() 
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Please confirm password."),
  })

  return (
    <div>
     <Container fluid>
           <div className="CreateA-bg">
             <h2>Create an account</h2>
             <Card className="signup-card">
               <Formik
                          initialValues={initialValues}
                          validationSchema={validationSchema}
                          onSubmit={handleSubmit}
                        >
                 {({ errors, touched }) => (
                   <Form>
                     <Row>
                       <Col md={6} className="mt-3">
                         <Field
                           type="text"
                           name="company_name"
                           placeholder="Company Name *"
                           className={`input-field ${
                             touched.company_name && errors.company_name ? "is-invalid" : ""
                           }`}
                         />
                         <ErrorMessage
                           name="company_name"
                           component="div"
                           className="invalid-feedback"
                           style={{ color: "red" }}
                         />
                       </Col>
                       <Col md={6} className="mt-3">
                         <Field
                           type="email"
                           name="email"
                           placeholder="Email Address *"
                           className={`input-field ${
                             touched.email && errors.email ? "is-invalid" : ""
                           }`}
                         />
                         <ErrorMessage
                           name="email"
                           component="div"
                           className="invalid-feedback"
                           style={{ color: "red" }}
                         />
                       </Col>
                     </Row>
                     <Row>
                      
                       <Col md={6} className="mt-3">
                         <Field
                           type="text"
                           name="Phone"
                           placeholder="Phone *"
                           className={`input-field ${
                             touched.Phone && errors.Phone? "is-invalid" : ""
                           }`}
                         />
                         <ErrorMessage
                           name="Phone"
                           component="div"
                           className="invalid-feedback"
                           style={{ color: "red" }}
                         />
                       </Col>
                       <Col md={6} className="mt-3">
                         <Field
                           type="text"
                           name="bvn"
                           placeholder="BVN*"
                           className={`input-field ${
                             touched.bvn && errors.bvn ? "is-invalid" : ""
                           }`}
                         />
                         <ErrorMessage
                           name="bvn"
                           component="div"
                           className="invalid-feedback"
                           style={{ color: "red" }}
                         />
                       </Col>
                     </Row>
                     <Row>
                                             <Col md={6} className="mt-3">
                                                 <div className="position-relative">
                                                     <Field
                                                         type={showPassword ? "text" : "password"}
                                                         name="password"
                                                         placeholder="Password *"
                                                         className={`input-field ${touched.password && errors.password
                                                             ? "is-invalid"
                                                             : ""
                                                             }`}
                                                     />
                                                     <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                     <span
                                                         className="password-toggle-icon"
                                                         onClick={() => setShowPassword(!showPassword)}
                                                         style={{
                                                             position: 'absolute',
                                                             right: '10px',
                                                             top: '50%',
                                                             transform: 'translateY(-50%)',
                                                             cursor: 'pointer',
                                                         }}
                                                     >
                                                         {showPassword ? <FaEye /> : <FaEyeSlash />}
                                                     </span>
                                                 </div>
                                             </Col>
                                             <Col md={6} className="mt-3">
                                                 <div className="position-relative">
                                                     <Field
                                                         type={showConfirmPassword ? "text" : "password"}
                                                         name="confirm_password"
                                                         placeholder="Confirm Password *"
                                                         className={`input-field ${touched.confirm_password && errors.confirm_password
                                                             ? "is-invalid"
                                                             : ""
                                                             }`}
                                                     />
                                                     <ErrorMessage name="confirm_password" component="div" className="invalid-feedback" />
                                                     <span
                                                         className="password-toggle-icon"
                                                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                         style={{
                                                             position: 'absolute',
                                                             right: '10px',
                                                             top: '50%',
                                                             transform: 'translateY(-50%)',
                                                             cursor: 'pointer',
                                                         }}
                                                     >
                                                         {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                                     </span>
                                                 </div>
                                             </Col>
                                         </Row>
                                         <button type="submit">Sign Up</button>
                     <button type="button" onClick={handleHomeButton}>
                       Back to Home
                     </button>
                   </Form>
                 )}
               </Formik>
             </Card>
           </div>
         </Container>
    </div>
  )
}

export default SignupBuyer