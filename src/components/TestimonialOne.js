import React from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
const TestimonialOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaAngleRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaAngleLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {/* =================== Testimonial One Start ===================*/}
      <div
        className='testimonial-area pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/11.png")' }}
      >
        <div className='container'>
          <div className='section-title'>
            <h6 className='sub-title'>TESTIMONIAL 00</h6>
            <h2 className='title'>Advanced Engine Services</h2>
          </div>
          <div className='testimonial-slider-1  slider-control-round slider-control-dots slider-control-right-top'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-inner style-1 text-center'>
                  <h5>Devon Lane</h5>
                  <p className='designation mb-3'>Marketing Coordinator</p>
                  <div className='icon mb-2'>
                    <img src='assets/img/icon/25.png' alt='img' />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className='ratting-inner mt-4'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='thumb'>
                    <img src='assets/img/testimonial/1.png' alt='img' />
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-1 text-center'>
                  <h5>Devon Lane</h5>
                  <p className='designation mb-3'>Marketing Coordinator</p>
                  <div className='icon mb-2'>
                    <img src='assets/img/icon/25.png' alt='img' />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className='ratting-inner mt-4'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='thumb'>
                    <img src='assets/img/testimonial/2.png' alt='img' />
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-1 text-center'>
                  <h5>Devon Lane</h5>
                  <p className='designation mb-3'>Marketing Coordinator</p>
                  <div className='icon mb-2'>
                    <img src='assets/img/icon/25.png' alt='img' />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className='ratting-inner mt-4'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='thumb'>
                    <img src='assets/img/testimonial/3.png' alt='img' />
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-1 text-center'>
                  <h5>Devon Lane</h5>
                  <p className='designation mb-3'>Marketing Coordinator</p>
                  <div className='icon mb-2'>
                    <img src='assets/img/icon/25.png' alt='img' />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className='ratting-inner mt-4'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='thumb'>
                    <img src='assets/img/testimonial/1.png' alt='img' />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* =================== Testimonial One End ===================*/}
    </>
  );
};

export default TestimonialOne;
