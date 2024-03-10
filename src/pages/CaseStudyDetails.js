import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CaseStudyArea from "../components/CaseStudyArea";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";

const CaseStudyDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Case Study Details"} />

      {/* Case Study Area */}
      <CaseStudyArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default CaseStudyDetails;
