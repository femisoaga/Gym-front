import React from "react";

const AboutTwo = () => {
  return (
    <div>
      <section className="about-two">
        <div className="about-two__shape-2"></div>
        <div className="about-two__shape-3"></div>
        <div className="about-two__shape-4"></div>
        <div className="about-two__shape-5"></div>
        <div className="about-two__shape-6">
          <img src="assets/images/shapes/about-two-shape-6.png" alt="" />
        </div>
        <div className="about-two__shape-7 float-bob-y">
          <img className="h-[25em]" src="assets/images/resources/aboutTwo.jpg" alt="" />
        </div>
        <div className="about-two__shape-8 float-bob-x">
          <img src="assets/images/shapes/about-two-shape-8.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-two__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <img
                      src="assets/images/resources/aboutTwo-man.jpg"
                      alt=""
                      className="h-[25em]"
                    />
                  </div>
                  <div className="about-two__img-two">
                    <img
                      src="assets/images/resources/bells.jpg"
                      alt=""
                      className="h-[10em]"
                    />
                  </div>
                  <div className="about-two__shape-1"></div>
                  <div className="about-two__experience">
                    <div className="about-two__experience-shape-1">
                      <img
                        src="assets/images/shapes/about-two-experience-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="about-two__experience-icon">
                      <span className="icon-award"></span>
                    </div>
                    <div className="about-two__experience-content">
                      <div className="about-two__experience-content-count count-box">
                        <h3
                          className="count-text"
                          data-stop="25"
                          data-speed="1500"
                        >
                          00
                        </h3>
                        <span className="about-two__experience-content-count-plus">
                          +
                        </span>
                      </div>
                      <p className="about-two__experience-content-text">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1"></div>
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title">
                    Welcome to Sport Account
                  </h2>
                </div>
                <p className="about-two__text-1">
                  It is a long established fact the reader will be distracted
                  the readable letters. content of a page when looking at layout
                  the point of using lorem the Ipsum less normal distribution of
                  letters.
                </p>
                <ul className="list-unstyled about-two__points">
                  <li>
                    <div className="icon">
                      <span className="icon-chiropractic"></span>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="about.html">Trusted Plans</a>
                      </h5>
                      <p>Scelerisque augue the consequat sodales</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-expert"></span>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="about.html">Expert Therapist</a>
                      </h5>
                      <p>Scelerisque augue the consequat sodales</p>
                    </div>
                  </li>
                </ul>
                <div className="about-two__btn-and-sign">
                  <div className="about-two__btn-box">
                    <a href="about.html" className="about-two__btn thm-btn">
                      About Us<span className="icon-right-arrow"></span>
                    </a>
                  </div>
                  <div className="about-two__sing">
                    <img
                      src="assets/images/resources/about-two-sing.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTwo;
