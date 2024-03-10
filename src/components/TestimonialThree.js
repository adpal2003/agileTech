import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialThree = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* =================== Testimonial Three Start ===================*/}
      <div
        className='testimonial-area bg-cover pd-top-120 pd-bottom-120'
        style={{ backgroundImage: 'url("./assets/img/bg/13.png")' }}
      >
        <div className='container pd-bottom-100'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-9'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>Testimonial</h6>
                <h2 className='title'>
                  What Client <span>Think</span> About Us?
                </h2>
              </div>
            </div>
          </div>
          <div className='testimonial-slider-2 owl-carousel slider-control-dots'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-inner style-3'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='thumb'>
                        <div className='shadow-img'>
                          <img src='assets/img/testimonial/0.png' alt='img' />
                        </div>
                        <img
                          className='main-img'
                          src='assets/img/testimonial/10.png'
                          alt='img'
                        />
                      </div>
                    </div>
                    <div className='col-md-7 align-self-center'>
                      <div className='details'>
                        <img
                          className='quote'
                          src='assets/img/testimonial/01.png'
                          alt='img'
                        />
                        <p className='designation mb-0'>
                          Let us be a part of your personal and professional
                          growth by providing effective way to learn.Let us be a
                          of your growth by a fun and effective way.
                        </p>
                        <h6 className='mb-0 mt-3'>Devon Lane</h6>
                        <div className='ratting-inner mt-3'>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-3'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='thumb'>
                        <div className='shadow-img'>
                          <img src='assets/img/testimonial/0.png' alt='img' />
                        </div>
                        <img
                          className='main-img'
                          src='assets/img/testimonial/11.png'
                          alt='img'
                        />
                      </div>
                    </div>
                    <div className='col-md-7 align-self-center'>
                      <div className='details'>
                        <img
                          className='quote'
                          src='assets/img/testimonial/01.png'
                          alt='img'
                        />
                        <p className='designation mb-0'>
                          Let us be a part of your personal and professional
                          growth by providing effective way to learn.Let us be a
                          of your growth by a fun and effective way.
                        </p>
                        <h6 className='mb-0 mt-3'>Devon Lane</h6>
                        <div className='ratting-inner mt-3'>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-3'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='thumb'>
                        <div className='shadow-img'>
                          <img src='assets/img/testimonial/0.png' alt='img' />
                        </div>
                        <img
                          className='main-img'
                          src='assets/img/testimonial/10.png'
                          alt='img'
                        />
                      </div>
                    </div>
                    <div className='col-md-7 align-self-center'>
                      <div className='details'>
                        <img
                          className='quote'
                          src='assets/img/testimonial/01.png'
                          alt='img'
                        />
                        <p className='designation mb-0'>
                          Let us be a part of your personal and professional
                          growth by providing effective way to learn.Let us be a
                          of your growth by a fun and effective way.
                        </p>
                        <h6 className='mb-0 mt-3'>Devon Lane</h6>
                        <div className='ratting-inner mt-3'>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-3'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='thumb'>
                        <div className='shadow-img'>
                          <img src='assets/img/testimonial/0.png' alt='img' />
                        </div>
                        <img
                          className='main-img'
                          src='assets/img/testimonial/11.png'
                          alt='img'
                        />
                      </div>
                    </div>
                    <div className='col-md-7 align-self-center'>
                      <div className='details'>
                        <img
                          className='quote'
                          src='assets/img/testimonial/01.png'
                          alt='img'
                        />
                        <p className='designation mb-0'>
                          Let us be a part of your personal and professional
                          growth by providing effective way to learn.Let us be a
                          of your growth by a fun and effective way.
                        </p>
                        <h6 className='mb-0 mt-3'>Devon Lane</h6>
                        <div className='ratting-inner mt-3'>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* =================== Testimonial Three End ===================*/}
    </>
  );
};

export default TestimonialThree;
