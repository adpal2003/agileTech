import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterAreaTwo = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div
        className='counter-area bg-relative bg-cover pd-top-110 pd-bottom-100'
        style={{ backgroundImage: 'url("./assets/img/bg/10.png")' }}
      >
        <div className='container pd-bottom-90'>
          <div className='row'>
            <div
              className='col-lg-3 col-md-6 '
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/16.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={200} /> +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 '
              data-aos='fade-up'
              data-aos-delay='150'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/17.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={10} /> k+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 '
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/18.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={200} /> +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 '
              data-aos='fade-up'
              data-aos-delay='250'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner media'>
                <div className='thumb media-left pe-4'>
                  <img src='assets/img/icon/19.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h4 className='mb-1'>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={200} /> +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h4>
                  <p className='mb-0'>Team member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default CounterAreaTwo;
