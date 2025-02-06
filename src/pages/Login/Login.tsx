import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <header className="main-header-two">
        
        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
              <div className="site-logo main-menu-two__logo">
                <Link to="/">
                  <img
                    src="/assets/images/resources/logo.png"
                    alt="logo"
                    className="w-42"
                  />
                </Link>
              </div>
              <div className="main-menu-two__menu-box">
                <div className="main-menu-two__main-menu-box"></div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className="appointment-two mt-6">
        <div className="appointment-two__shape-3">
          <img src="assets/images/shapes/appointment-two-shape-3.png" alt="" />
        </div>
        <div className="appointment-two__shape-4 float-bob-y">
          <img
            src="assets/images/resources/bells.jpg"
            className="h-[10em]"
            alt=""
          />
        </div>
        <div className="appointment-two__shape-5 zoominout"></div>
        <div className="container">
          <div className="appointment-two__inner">
            <div className="appointment-two__shape-1"></div>
            <div className="appointment-two__shape-2">
              <img
                className="h-[22em]"
                src="assets/images/resources/appointment-two-img.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <div className="col-xl-5"></div>
              <div className="col-xl-7">
                <div className="appointment-two__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <div className="section-title__tagline-shape-1"></div>
                     
                    </div>
                    <h2 className="section-title__title">Login</h2>
                  </div>
                  <form
                    className="contact-form-validated appointment-two__form"
                    action="assets/inc/sendemail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="appointment-two__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            // required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="appointment-two__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            // required
                          />
                        </div>
                      </div>

                      {/* <div className="col-xl-12">
                                            <div className="appointment-two__input-box">
                                                <div className="select-box">
                                                    <select className="selectmenu wide">
                                                        <option selected="selected">Type Of Service</option>
                                                        <option>Type Of Service 01</option>
                                                        <option>Type Of Service 02</option>
                                                        <option>Type Of Service 03</option>
                                                        <option>Type Of Service 04</option>
                                                        <option>Type Of Service 05</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div> */}
                                        <Link to='/dashboard'>
                                        <div className="col-xl-12">
                        <div className="appointment-two__btn-box">
                          <button
                            type="submit"
                            className="thm-btn appointment-two__btn"
                          >
                            Sign in<span className="icon-right-arrow"></span>
                          </button>
                        </div>
                      </div>
                                        </Link>
                    
                    </div>
                  </form>
                  <div className="result"></div>
                </div>
              </div>
            </div>
            <div className="appointment-two__img">
              <img
                src="assets/images/resources/appointment-two-img-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
