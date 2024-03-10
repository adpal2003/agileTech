import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaTwo = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/12.png")' }}
      >
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>MEET OUR EXPERTS</h6>
            <h2 className='title text-white'>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/4.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to='/team-details'>Devon Lane</Link>
                    </h5>
                    <p>Merketing Department</p>
                    <ul className='team-social-inner mt-3 mb-1'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/5.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to='/team-details'>Falcon Lane</Link>
                    </h5>
                    <p>Merketing Department</p>
                    <ul className='team-social-inner mt-3 mb-1'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/6.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to='/team-details'>Wilson Jac</Link>
                    </h5>
                    <p>Merketing Department</p>
                    <ul className='team-social-inner mt-3 mb-1'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaTwo;
