import React from "react";
import Home from "../pages/Home";
import Faq from "../component/Faq.jsx";
import SaasAbleBlocksPage from "../component/Gallary.jsx"
import EndlessPossibilities from "../component/Posibility.jsx"
import ContactPage from "../component/ContactPage.jsx";

function Index() {
  return (
    <>
   
      <Home />
      {/* <TrustSection */}
       {/* <AboutPag /> */}
       <SaasAbleBlocksPage/>
      // <Comperhensive/>
      <EndlessPossibilities/>
      {/* <PowerfulAdminInterface/> */}
      {/* <SaasAbleFigma/> */}
      <ContactPage/>
      <Faq />

    </>
  );
}

export default Index;
