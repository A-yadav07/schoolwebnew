import React from "react";
import { Outlet } from "react-router-dom";
import FloatingActionButton from "../pages/FloatingActionButton.jsx";
import Navbar from "../Component/Navbar.jsx"
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
