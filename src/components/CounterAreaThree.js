import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterAreaThree = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className='counter-area bg-base pd-top-110 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/27.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={200} /> +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Team member</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/28.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={25} /> K+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Winning award</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/29.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={150} /> +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Complete project</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/30.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={180} /> +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Client review</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default CounterAreaThree;
