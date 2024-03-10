import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingAreaTwo = () => {
  return (
    <>
      {/* Pricing Area Two start */}
      <div className='pricing-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>Pricing plan</h6>
            <h2 className='title'>
              Best plane to get our <span>Services</span>
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner'>
                <div className='price-header text-center mb-lg-4'>
                  <h5>Started</h5>
                  <h2 className='mb-3'>
                    $19 <sub>/mo</sub>
                  </h2>
                </div>
                <ul>
                  <li>
                    <FaCheck />
                    Mobile App Development
                  </li>
                  <li>
                    <FaCheck />
                    Branding &amp; Identity
                  </li>
                  <li>
                    <FaCheck />
                    Email Marketing &amp; Automation
                  </li>
                  <li>
                    <FaCheck />
                    E-commerce Solutions
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Video &amp; Animation Production{" "}
                  </li>
                </ul>
                <a
                  className='btn btn-border-gray border-radius-0 w-100'
                  href='#'
                >
                  Started
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner price-active'>
                <div className='price-header text-center mb-lg-4'>
                  <h5>Professional</h5>
                  <h2 className='mb-3'>
                    $29 <sub>/mo</sub>
                  </h2>
                </div>
                <ul>
                  <li>
                    <FaCheck />
                    Mobile App Development
                  </li>
                  <li>
                    <FaCheck />
                    Branding &amp; Identity
                  </li>
                  <li>
                    <FaCheck />
                    Email Marketing &amp; Automation
                  </li>
                  <li>
                    <FaCheck />
                    E-commerce Solutions
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Video &amp; Animation Production{" "}
                  </li>
                </ul>
                <a
                  className='btn btn-border-gray border-radius-0 w-100'
                  href='#'
                >
                  Started
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner'>
                <div className='price-header text-center mb-lg-4'>
                  <h5>Enterprise</h5>
                  <h2 className='mb-3'>
                    $39 <sub>/mo</sub>
                  </h2>
                </div>
                <ul>
                  <li>
                    <FaCheck />
                    Mobile App Development
                  </li>
                  <li>
                    <FaCheck />
                    Branding &amp; Identity
                  </li>
                  <li>
                    <FaCheck />
                    Email Marketing &amp; Automation
                  </li>
                  <li>
                    <FaCheck />
                    E-commerce Solutions
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Video &amp; Animation Production{" "}
                  </li>
                </ul>
                <a
                  className='btn btn-border-gray border-radius-0 w-100'
                  href='#'
                >
                  Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Area Two start */}
    </>
  );
};

export default PricingAreaTwo;
