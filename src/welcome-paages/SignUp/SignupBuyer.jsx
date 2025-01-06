import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaEye,FaEyeSlash} from "react-icons/fa"

const SignupBuyer = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bvn: "",
    gender: "",
    Phone: "",
  });

  const navigate = useNavigate();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bvn: "",
    gender: "",
    Phone: "",
  };

  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    bvn: Yup.string().required("bvn is required"),
    gender: Yup.string().required("Input your gender"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
      confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Please confirm password."),
      Phone: Yup.string()
      .matches(
        /^((\+234)|(0))\d{10}$/,
        "Phone number must start with +234 or 0 and contain exactly 11 digits"
      )
      .length(11, "Phone number must be exactly 11 digits") 
      .required("Phone number is required"),
  });
  

  const handleSubmit = (values, { resetForm }) => {
    setFormData(values); // Update state with form data
    resetForm(false); // Reset the form
    navigate("/age"); // Navigate to another page
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  return (
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
                      name="first_name"
                      placeholder="First Name *"
                      className={`input-field ${
                        touched.first_name && errors.first_name ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="invalid-feedback"
                      style={{ color: "red" }}
                    />
                  </Col>
                  <Col md={6} className="mt-3">
                    <Field
                      type="text"
                      name="last_name"
                      placeholder="Last Name *"
                      className={`input-field ${
                        touched.last_name && errors.last_name ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="invalid-feedback"
                      style={{ color: "red" }}
                    />
                  </Col>
                </Row>
                <Row>
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
                  <Col md={6} className="mt-3">
                    <Field
                      type="number"
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
                </Row>
                <Row>
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
                  <Col md={6} className="mt-3">
                    <Field
                      type="text"
                      name="gender"
                      placeholder="Gender*"
                      className={`input-field ${
                        touched.gender && errors.gender ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="gender"
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
  );
};

export default SignupBuyer;
