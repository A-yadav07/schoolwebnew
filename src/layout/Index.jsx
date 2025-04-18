import React from "react";
import Home from "../pages/Home";
import ContactPage from "../Component/Contact.jsx";
import Posibility from "../component/Posibility.jsx";
import Faq from "../component/Faq.jsx";
import SaasAbleBlocksPage from "../Component/Gallary.jsx"
function Index() {
  return (
    <>
   
      <Home />
      {/* <TrustSection */}
       {/* <AboutPag /> */}
       <SaasAbleBlocksPage/>
      // <Comperhensive/>
      <Posibility/>
      {/* <PowerfulAdminInterface/> */}
      {/* <SaasAbleFigma/> */}
      <ContactPage />
      <Faq />

    </>
  );
}

export default Index;
