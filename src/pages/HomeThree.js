import React from "react";
import AboutAreaThree from "../components/AboutAreaThree";
import BannerThree from "../components/BannerThree";
import BlogAreaThree from "../components/BlogAreaThree";
import ContactAreaThree from "../components/ContactAreaThree";
import CounterAreaThree from "../components/CounterAreaThree";
import FooterTwo from "../components/FooterTwo";
import NavBar from "../components/NavBar";
import PricingAreaThree from "../components/PricingAreaThree";
import ServiceAreaThree from "../components/ServiceAreaThree";
import TestimonialTwo from "../components/TestimonialTwo";
import WorkProcessThree from "../components/WorkProcessThree";

const HomeThree = () => {
  return (
    <>
      {/* Navigation Bar*/}
      <NavBar />

      {/* Banner Three*/}
      <BannerThree />

      {/* Service Area Three */}
      <ServiceAreaThree />

      {/* About Area Three */}
      <AboutAreaThree />

      {/* Pricing Area Three */}
      <PricingAreaThree />

      {/* Contact Area Three */}
      <ContactAreaThree />

      {/* Testimonial Two */}
      <TestimonialTwo />

      {/* WorkProcess Three */}
      <WorkProcessThree />

      {/* Counter Area Three */}
      <CounterAreaThree />

      {/* Blog Area Three */}
      <BlogAreaThree />

      {/* Footer Two */}
      <FooterTwo />
    </>
  );
};

export default HomeThree;
