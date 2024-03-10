import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Service;
