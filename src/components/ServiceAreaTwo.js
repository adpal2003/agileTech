import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaTwo = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>ADVANCED SERVICES</h6>
                <h2 className='title'>
                  Optimize Your <span>Performance</span> With Saas
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/4.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/8.png' alt='img' />
                  </div>
                  <h5>
                    <Link to='/service-details'>CloudCRM</Link>
                  </h5>
                  <p>SaaS stands for Software as a Service. It is a software</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/5.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/9.png' alt='img' />
                  </div>
                  <h5>
                    <Link to='/service-details'>CloudCRM</Link>
                  </h5>
                  <p>SaaS stands for Software as a Service. It is a software</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/6.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/10.png' alt='img' />
                  </div>
                  <h5>
                    <Link to='/service-details'>CloudCRM</Link>
                  </h5>
                  <p>SaaS stands for Software as a Service. It is a software</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaTwo;
