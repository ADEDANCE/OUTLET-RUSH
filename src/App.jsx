import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wmessage from './welcome-paages/Wmessage';
import Acconts from './welcome-paages/Acconts';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Wmessage />} />
      <Route path="/Acconts" element={<Acconts />} />
    </Routes>
  </Router>
  )
}

export default App