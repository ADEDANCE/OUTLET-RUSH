import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wmessage from './welcome-paages/Wmessage';
import SignupBuyer from './welcome-paages/SignUp/SignupBuyer';
import SignupSeller from './welcome-paages/SignUp/SignupSeller'


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Wmessage />} />
      <Route path="/SignupBuyer" element={<SignupBuyer />} />
      <Route path="/SignupSeller" element={<SignupSeller/>} />
    </Routes>
  </Router>
  )
}

export default App