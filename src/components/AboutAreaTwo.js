import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 mb-4 mb-lg-0 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/10.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Empowering businesses with SaaS technology
                </h2>
                <p className='content mb-4'>
                  You can access SaaS applications through a web browser or
                  mobile app, as long as you have an internet connection.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                  SaaS providers typically invest heavily in security measures
                  to protect customer data, such as encryption and multi-factor
                  authentication. However, it is important to research and
                  choose a reputable provider and also to ensure that
                </p>
                <Link className='btn btn-border-base' to='/about'>
                  Discover More <FaPlus />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
