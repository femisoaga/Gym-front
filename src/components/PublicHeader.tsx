import React from 'react'
import { Link } from 'react-router-dom'

const PublicHeader = () => {
  return (
    <div>
         <header className="main-header-two">
          <div className="main-menu-two__top">
            <div className="main-menu-two__top-inner">
              {/* <ul className="list-unstyled main-menu-two__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-envolop"></i>
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-pin"></i>
                  </div>
                  <div className="text">
                    <p>8502 Preston Rd. Inglewood</p>
                  </div>
                </li>
              </ul> */}
              <div className="main-menu-two__top-right">
                <div className="main-menu-two__social-box">
                  <div className="main-menu-two__social-box-inner">
                    <h4 className="main-menu-two__social-box-title">
                      Follow Us:
                    </h4>
                    <div className="main-menu-two__social">
                      <a href="#">
                        <i className="icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon-link-in"></i>
                      </a>
                      <a href="#">
                        <i className="icon-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="site-logo main-menu-two__logo">
                  <Link to="/">
                    <img src='/assets/images/resources/logo.png' alt="logo" className='w-42' />
                  </Link>
                </div>
                <div className="main-menu-two__menu-box">
                    <div className="main-menu-two__main-menu-box">
                        <ul className="main-menu__list">
                            <li>
                                <Link to="/pricing">Pricing</Link>
                            </li>
                            <li>
                                <a href="faq">Faq</a>
                            </li>
                          
                            <li className="dropdown">
                                <a href="#">Blog</a>
                                <ul>
                                    <li><a href="#">Blog Gird</a></li>
                                    <li><a href="#">Blog List</a></li>
                                    <li><a href="#">Blog Details</a></li>
                                </ul>
                            </li>
                        
                        </ul>
                    </div>
                </div>

                <div className="main-menu-two__right d-flex align-items-center gap-sm-4 gap-3">
                    <Link to="/login" 
                       className="btn btn-outline-primary px-4 py-2 font-semibold rounded-lg border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300">
                       Login
                    </Link>
                    <Link to="/register" 
                       className="btn btn-primary px-4 py-2 font-semibold rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300">
                       Sign Up
                    </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="stricky-header stricked-menu main-menu main-menu-two">
          <div className="sticky-header__content"></div>
        </div>
    </div>
  )
}

export default PublicHeader