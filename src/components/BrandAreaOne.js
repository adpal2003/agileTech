import React from "react";
import Marquee from "react-fast-marquee";
const BrandAreaOne = () => {
  return (
    <div className='about-area bg-gray pt-5 pb-5'>
      <div className='container'>
        <div className='client-slider'>
          <Marquee gradient={false}>
            <div className='thumb'>
              <img src='assets/img/client/7.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/8.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/9.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/11.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/8.svg' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/9.svg' alt='img' />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaOne;
