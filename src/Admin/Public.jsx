import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export default Public;
