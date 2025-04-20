import React from "react";
import Home from "../pages/Home";
import Faq from "../component/FAQSection.jsx";
import SaasAbleBlocksPage from "../component/Gallary.jsx";
import EndlessPossibilities from "../component/Posibility.jsx";
import AdminInterface from "../component/AdminInterface.jsx";
import Comperhensive from "../component/comprohensive.jsx";
import ContactPage from "../component/ContactPage.jsx";
import TrustSection from "../component/TrustSection.jsx";

function Index() {
  return (
    <>
   
      <Home />
      <TrustSection />
       
       <SaasAbleBlocksPage/>
       <Comperhensive/>
      <EndlessPossibilities/>
       <AdminInterface/> 
      
      <ContactPage/>
      <Faq />

    </>
  );
}

export default Index;
