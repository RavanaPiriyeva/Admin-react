import React from 'react'
import { Routes, Route } from "react-router-dom";
import Catagories from '../Page/Catagories/Catagories';
import Dashbord from '../Page/Dashbord/Dashbord';
// import Catagories from './Page/Catagories/Catagories';
// import Dashbord from './Page/Dashbord/Dashbord';
const Private = () => {
  return (
    <Routes>
    <Route path="/dashboard" element={<Dashbord/>} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
  )
}

export default Private