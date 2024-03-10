import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceAreaThree = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-10'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>CREATIVE SERVICES</h6>
                <h2 className='title'>
                  Best Destination To Get Your Own <span>Application</span>{" "}
                  Developed
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner style-3'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/1.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>Only the best</Link>
                  </h5>
                  <p>
                    You can access SaaS applications through a web browser or
                    mobile app, as long as you have
                  </p>
                  <Link className='read-more-text' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner style-3'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/2.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>Focusing on details</Link>
                  </h5>
                  <p>
                    SaaS can benefit your business by reducing costs associated
                    with software installation and
                  </p>
                  <Link className='read-more-text' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner style-3'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/3.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>No flaws here</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='read-more-text' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
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

export default ServiceAreaThree;
