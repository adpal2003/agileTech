import React from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaFacebookF,
  FaRegFolderOpen,
  FaInstagram,
  FaQuoteRight,
  FaTwitter,
  FaRegUser,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogDetailsArea = () => {
  return (
    <>
      {/* ==================== Blog Details Area start ====================*/}
      <div className='blog-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner'>
                  <div className='thumb'>
                    <img src='assets/img/blog/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <ul className='blog-meta'>
                      <li>
                        <FaRegUser /> By Admin
                      </li>
                      <li>
                        <FaRegFolderOpen /> Category
                      </li>
                    </ul>
                    <p>
                      Cras varius. Donec vitae orci sed dolor rutrum auctor.
                      Fusce egestas elit eget lorem. Suspendisse nisl elit,
                      rhoncus eget elementum acondimentum eget, diam. Nam at
                      tortor in tellus interdum sagitliquam lobortis. Donec orci
                      lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum
                      eu odio. Vivamus laoreet.
                    </p>
                    <p>
                      Lorem available market standard dummy text available
                      market industry Lorem Ipsum simply dummy text of free
                      available market.There are many variations of passages of
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some form,
                    </p>
                    <blockquote>
                      <FaQuoteRight />
                      <p>
                        sollicitudin nisi nulla eget augue. Maecenas quis
                        turpaliquet, portorem et, dictum purus.
                        Cdimentfermentposuere world class service provider
                      </p>
                      <p className='name'>Mark wood</p>
                    </blockquote>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='thumb'>
                          <img src='assets/img/blog/4.png' alt='img' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='thumb'>
                          <img src='assets/img/blog/5.png' alt='img' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='thumb'>
                          <img src='assets/img/blog/6.png' alt='img' />
                        </div>
                      </div>
                    </div>
                    <h4>You’re in Good Hands With Allstate</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                    </p>
                    <h4>It includes a key benefit</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                    </p>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Creating a Balanced and Nutritious
                      </li>
                      <li>
                        <FaCheckCircle /> iTechnology that helps grow companies
                      </li>
                      <li>
                        <FaCheckCircle /> Everything you need to succeed
                      </li>
                    </ul>
                    <p>
                      Lorem available market standard dummy text available
                      market industry Lorem Ipsum simply dummy text of free
                      available market.There are many variations of passages of
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some form.
                    </p>
                    <div className='tag-and-share'>
                      <div className='tags d-inline-block'>
                        <strong>Tag : </strong>
                        <a href='#'>Agency</a> <a href='#'>Marketing</a>
                      </div>
                    </div>
                    <div className='prev-next-post'>
                      <div className='row'>
                        <div className='col-6 border-right-1'>
                          <a className='btn btn-base border-radius-5' href='#'>
                            <FaChevronLeft />
                          </a>
                        </div>
                        <div className='col-6 text-end'>
                          <a className='btn btn-base border-radius-5' href='#'>
                            <FaChevronRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='blog-admin media'>
                  <div className='media-left pe-3'>
                    <img
                      className='avatar'
                      alt='img'
                      src='assets/img/about/8.png'
                    />
                  </div>
                  <div className='media-body align-self-center'>
                    <h6>Admin</h6>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful
                    </p>
                  </div>
                </div>
                <div className='blog-comment'>
                  <h4 className='mb-2'>Leave a Reply</h4>
                  <p>Your E-mail address not be published</p>
                  <ul className='comment-list mt-lg-4 pt-2 mt-4'>
                    <li className='comment'>
                      <article className='comment-body'>
                        <footer className='comment-meta'>
                          <div className='comment-author vcard'>
                            <img
                              className='avatar'
                              alt='img'
                              src='assets/img/about/7.png'
                            />{" "}
                            <a
                              href=''
                              rel='external nofollow ugc'
                              className='url'
                            >
                              John Κώστας Doe Τάδε
                            </a>{" "}
                            <span className='says'>says:</span>
                          </div>
                          <div className='comment-metadata'>
                            <a href='#'>March 14, 2013 at 7:57 am</a>
                            <span className='edit-link'>
                              <a className='comment-edit-link' href='#'>
                                Edit
                              </a>
                            </span>
                          </div>
                        </footer>
                        <div className='comment-content'>
                          <p>Comment Depth 01</p>
                        </div>
                        <div className='reply'>
                          <a
                            rel='nofollow'
                            className='comment-reply-link'
                            href='#'
                          >
                            Reply
                          </a>
                        </div>
                      </article>
                    </li>
                    <li className='comment'>
                      <article className='comment-body'>
                        <footer className='comment-meta'>
                          <div className='comment-author vcard'>
                            <img
                              className='avatar'
                              alt='img'
                              src='assets/img/about/7.png'
                            />
                            <a
                              href='http://example.org/'
                              rel='external nofollow ugc'
                              className='url'
                            >
                              John Κώστας Doe Τάδε
                            </a>{" "}
                            <span className='says'>says:</span>
                          </div>
                          <div className='comment-metadata'>
                            <a href='#'>March 14, 2013 at 7:57 am</a>
                            <span className='edit-link'>
                              <a className='comment-edit-link' href='#'>
                                Edit
                              </a>
                            </span>
                          </div>
                        </footer>
                        <div className='comment-content'>
                          <p>Comment Depth 01</p>
                        </div>
                        <div className='reply'>
                          <a
                            rel='nofollow'
                            className='comment-reply-link'
                            href='#'
                          >
                            Reply
                          </a>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
                <form className='blog-comment-form'>
                  <div className='mb-3'>
                    <h4>Leave a Reply</h4>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='single-input-inner style-bg'>
                        <input type='text' placeholder='Name' />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='single-input-inner style-bg'>
                        <input type='text' placeholder='Email' />
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='single-input-inner style-bg'>
                        <textarea placeholder='Message' defaultValue={""} />
                      </div>
                    </div>
                    <div className='col-12'>
                      <button className='btn btn-base border-radius-5'>
                        Post Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar'>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/7.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5>Leslie Alexander</h5>
                    <h6>(480) 555-0103</h6>
                    <ul className='social-media'>
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
                <div className='widget widget_search'>
                  <form className='search-form'>
                    <div className='form-group'>
                      <input type='text' placeholder='Key word' />
                    </div>
                    <button className='submit-btn' type='submit'>
                      <FaChevronRight />
                    </button>
                  </form>
                </div>
                <div className='widget widget-recent-post'>
                  <h4 className='widget-title'>Recent News</h4>
                  <ul>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/1.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <Link to='/blog-details'>
                              Empowering future with solar.
                            </Link>
                          </h6>
                          <div className='post-info'>
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/2.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <Link to='/blog-details'>
                              Marketing For Base market watch
                            </Link>
                          </h6>
                          <div className='post-info'>
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/3.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <Link to='/blog-details'>
                              Condtum Integer urna at faucibus
                            </Link>
                          </h6>
                          <div className='post-info'>
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_catagory'>
                  <h4 className='widget-title'>Catagory</h4>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/blog'>
                        Business <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Finance <span>7</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Web Design <span>2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Counsiling <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        IT Service <span>5</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_tag_cloud mb-0'>
                  <h4 className='widget-title'>Tags</h4>
                  <div className='tagcloud'>
                    <a href='#'>Information</a>
                    <a href='#'>Learn</a>
                    <a href='#'>ICT</a>
                    <a href='#'>Business</a>
                    <a href='#'>Portfolio</a>
                    <a href='#'>Project</a>
                    <a href='#'>Personal</a>
                    <a href='#'>Server</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Blog Details Area End ====================*/}
    </>
  );
};

export default BlogDetailsArea;
