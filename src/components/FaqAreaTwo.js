import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FaqAreaTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div className='faq-area pd-bottom-120'>
        <div className='container'>
          <div className='row pd-top-120'>
            <div className='col-xl-7 col-lg-6 col-md-8 order-lg-last'>
              <div className='about-thumb-inner video-thumb'>
                <img
                  className='main-img'
                  src='assets/img/about/15.png'
                  alt='img'
                />
                <span
                  onClick={() => setOpen(true)}
                  className='video-play-btn-hover'
                >
                  <img src='assets/img/video.svg' alt='img' />{" "}
                  <h6 className='d-inline-block'>how we work</h6>
                </span>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='XM6kTQPzzpQ'
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 align-self-center'>
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                <h6 className='sub-title'>YOUR ANSWER</h6>
                <h2 className='title'>
                  Have Any <span>Question</span> Please?
                </h2>
              </div>
              <div
                className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      How experienced is your team?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      Can you provide of past projects?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaTwo;
