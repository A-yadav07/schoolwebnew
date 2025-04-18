import React from "react";
import { Outlet } from "react-router-dom";
import FloatingActionButton from "../pages/FloatingActionButton.jsx";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../Component/Footer.jsx";

const Layout = ({childern}) => {
  return (
    <>
      <Navbar />
      <main >
        <Outlet /> 
        {childern}{/* Renders the nested child route like Home */}
      </main>
      <FloatingActionButton />
      <Footer />
    </>
  );
};

export default Layout;
