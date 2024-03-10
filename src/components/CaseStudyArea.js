import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CaseStudyArea = () => {
  return (
    <>
      {/* ====================  Case Study Area start ====================*/}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_info'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> Project Info
                  </h5>
                  <div className='widget-info-inner'>
                    <h6>Clients</h6>
                    <p>Porter Victoria</p>
                    <h6>Category</h6>
                    <p>It Service</p>
                    <h6>Date</h6>
                    <p>20 January, 2023</p>
                    <h6>Location</h6>
                    <p>Cakung, Jakarta</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src='assets/img/service/7.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      Making this the first true generator on the Internet
                    </h4>
                    <p>
                      Cras varius. Donec vitae orci sed dolor rutrum auctor.
                      Fusce egestas elit eget lorem. Suspendisse nisl elit,
                      rhoncus eget elementum acondimentum eget, diam. Nam at
                      tortor in tellus interdum sagitliquam lobortis. Donec orci
                      lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum
                      eu odio. Vivamus laoreet.
                    </p>
                    <p>
                      Lorem available market standard dummy text available
                      market industry Lorem Ipsum simply dummy text of free
                      available market.There are many variations of passages of
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some form,
                    </p>
                    <h4>Get touch have any question ?</h4>
                    <p>
                      It is a long established fact that a reader will be distr
                      acted bioiiy the end gail readable content of a page when
                      looking.
                    </p>
                    <h4>Our Best it company</h4>
                    <p>
                      Thooiie point the of using the table.Your Startup industry
                      is ours standard our service decesion loream saum solar
                      sysem in the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================  Case Study Area End ====================*/}
    </>
  );
};

export default CaseStudyArea;
