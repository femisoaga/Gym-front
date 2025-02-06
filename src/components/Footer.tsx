import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer site-footer-two">
        <div className="site-footer__shape-1">
          <img src="assets/images/shapes/site-footer-shape-1.png" alt="" />
        </div>
        <div className="site-footer__shape-2">
          <img src="assets/images/shapes/site-footer-shape-2.png" alt="" />
        </div>
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__logo">
                    <Link to="/">
                    <img src='/assets/images/resources/logo.png' alt="logo" className='w-64' />
                  </Link>
                    </div>
                    <p className="footer-widget__about-text">
                      Phasellus ultricies aliquam volutpat ullamcorper laoreet
                  
                    </p>
                    <div className="site-footer__social">
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
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__quick-link">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Quick Links</h3>
                    </div>
                    <ul className="footer-widget__quick-link-list list-unstyled">
                     
                      <li>
                        <Link to="/pricing.">
                          <span className="icon-andle-dabble"></span>Our Pricing
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq">
                          <span className="icon-andle-dabble"></span>
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-andle-dabble"></span>Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © All Copyright 2024 by Sport Account
              </p>
              <ul className="list-unstyled site-footer__bottom-menu">
                <li>
                  <a href="about.html">Trams & Condition</a>
                </li>
                <li>
                  <a href="about.html">Privacy Policy</a>
                </li>
              </ul>
              <a
                href="#"
                data-target="html"
                className="scroll-to-target scroll-to-top"
              >
                <i className="fas fa-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

{/* <footer>
<div className="footer-wrapper wow fadeIn" >
    <div className="container">
        <div className="footer-block">
            <div className="top-block">
                <a href="/" className="logo image-wrapper">
                  <img loading="lazy" src={logo} className='w-20em' alt="footer-logo"/>
                </a>
                <div className="icon-wrapper">
                    <a href="#!" className="icon image-wrapper">
                        <img loading="lazy" src="{{ asset('assets/images/icon/facebook.svg') }}" width="24" height="24" alt="facebook"/>
                    </a>
                    <a href="#!" className="icon image-wrapper">
                        <img loading="lazy" src="{{ asset('assets/images/icon/instagram.svg') }}" width="24" height="24" alt="instagram"/>
                    </a>
                    <a href="#!" className="icon image-wrapper">
                        <img loading="lazy" src="{{ asset('assets/images/icon/twitter.svg') }}" width="24" height="24" alt="twitter"/>
                    </a>
                    <a href="#!" className="icon image-wrapper">
                        <img loading="lazy" src="{{ asset('assets/images/icon/youtube.svg') }}" width="24" height="24" alt="youtube"/>
                    </a>
                    <a href="#!" className="icon image-wrapper">
                        <img loading="lazy" src="{{ asset('assets/images/icon/linkedln.svg') }}" width="24" height="24" alt="linkedln"/>
                    </a>
                </div>
            </div>
            <div className="footer-content">
                <ul>
                    <li><a href="{{url('/')}}">home</a></li>
                    <li><a href="#">blogs</a></li>
                    <li><a href="#">faq</a></li>
                    <li><a href="#">sitemap</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="copyright wow fadeIn">
    <div className="container">
        <div className="d-flex gap-4 align-items-center justify-content-lg-between justify-content-center">
            <p>Copyright © 2024. All rights reserved</p>
        </div>
    </div>
</div>
</footer> */}