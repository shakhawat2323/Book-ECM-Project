import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footar/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
