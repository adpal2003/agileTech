import React from "react";

const ContactAreaTwo = () => {
  return (
    <>
      {/* ========================= contact Area Two start =========================*/}
      <div className='contact-area'>
        <div className='container'>
          <div className='contact-inner-1'>
            <div className='row'>
              <div
                className='col-lg-8'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img className='w-100' src='assets/img/bg/9.png' alt='img' />
              </div>
              <div
                className='col-lg-4 '
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <div className='section-title mb-0'>
                  <h6 className='sub-title'>GET IN TOUCH</h6>
                  <h2 className='title'>Performance with SaaS</h2>
                  <p className='content'>
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p>
                  <div
                    className='accordion accordion-inner style-3 accordion-icon-left mt-3'
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
                          Many desktop publishing packages and web page editors
                          now use Lorem Ipsum as their default model text,
                          search for 'lorem ipsum' will uncover
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
                          How long does it take for you to complete a project?
                        </button>
                      </h2>
                      <div
                        id='collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingTwo'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          Many desktop publishing packages and web page editors
                          now use Lorem Ipsum as their default model text,
                          search for 'lorem ipsum' will uncover
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
                          How much does it cost to work with your agency?
                        </button>
                      </h2>
                      <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          Many desktop publishing packages and web page editors
                          now use Lorem Ipsum as their default model text,
                          search for 'lorem ipsum' will uncover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*========================= contact-inner Two end =========================*/}
    </>
  );
};

export default ContactAreaTwo;
