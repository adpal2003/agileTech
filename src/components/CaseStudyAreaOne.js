import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CaseStudyAreaOne = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className='case-study-area bg-relative pd-top-110'>
        <img
          className='animate-img-1 top_image_bounce'
          src='assets/img/banner/2.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>GALLERY HERE</h6>
            <h2 className='title'>
              Leading The <span>Digital</span> Revolution
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  <img src='assets/img/case-study/1.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Tecnology Farms</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  <img src='assets/img/case-study/2.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Tecnology Farms</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner'>
                <div className='thumb'>
                  <img src='assets/img/case-study/3.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Tecnology Farms</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                  <a className='right-arrow' href='#'>
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaOne;
