import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamDetailsGroup = () => {
  return (
    <>
      {/* ================= TeamDetailsGroup Start =================*/}
      <div className='team-blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='team-details-page'>
            <div className='row'>
              <div className='col-lg-5 text-center'>
                <div className='thumb mb-4 mb-lg-0'>
                  <img src='assets/img/team/7.png' alt='img' />
                </div>
              </div>
              <div className='col-lg-7 align-self-center ps-xl-5'>
                <h3 className='mb-2'>Christine Pearson</h3>
                <span className='designation'>Design Expert</span>
                <div className='details mt-4'>
                  <h4>About Me</h4>
                  <p>
                    Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy
                    veldt fox. Bright vixens jump; dozy fowl The quick, brown
                    fox jumps over a lazy dog.{" "}
                  </p>
                  <p>
                    DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by
                    fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad
                    nymph, for quick jigs vex! Fox nymphs grab quick-jived
                    waltz. Brick quiz whangs jumpy veldt fox. Bright vixens
                    jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
                  </p>
                </div>
                <ul className='social-media style-base mt-4 pt-2'>
                  <li>
                    <a href='#'>
                      <FaFacebookF aria-hidden='true' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaTwitter aria-hidden='true' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaInstagram aria-hidden='true' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaPinterest aria-hidden='true' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaLinkedinIn aria-hidden='true' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service area start */}
      <div className='service-area bg-relative pd-bottom-90'>
        <div className='container'>
          <div className='section-title '>
            <h6 className='sub-title'>Service</h6>
            <h2 className='title'>My Service Here</h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/1.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>Mobile App Development</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/2.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>Content Marketing</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/3.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>E-commerce Solutions</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TeamDetailsGroup End =================*/}
    </>
  );
};

export default TeamDetailsGroup;
