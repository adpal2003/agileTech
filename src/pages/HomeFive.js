import React from "react";
import AboutAreaFive from "../components/AboutAreaFive";
import AboutAreaSix from "../components/AboutAreaSix";
import BannerFive from "../components/BannerFive";
import BlogAreaFive from "../components/BlogAreaFive";
import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import FooterFour from "../components/FooterFour";
import NavbarFour from "../components/NavbarFour";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TeamAreaThree from "../components/TeamAreaThree";
import TestimonialFive from "../components/TestimonialFive";
import WorkProcessFour from "../components/WorkProcessFour";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* Case Study Area Two */}
      <CaseStudyAreaTwo />

      {/* About Area Six */}
      <AboutAreaSix />

      {/* Team Area Three */}
      <TeamAreaThree />

      {/* Work Process Four */}
      <WorkProcessFour />

      {/* Testimonial Five */}
      <TestimonialFive />

      {/* Blog Area Five */}
      <BlogAreaFive />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default HomeFive;
