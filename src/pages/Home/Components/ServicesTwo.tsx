import React from 'react'

const ServicesTwo = () => {
  return (
    <div>
         <section className="services-two mt-6">
          <div className="services-two__shape-1 float-bob-x">
            <img src="assets/images/shapes/services-two-shape-1.png" alt="" />
          </div>
          <div className="services-two__shape-2 float-bob-y">
            <img src="assets/images/shapes/services-two-shape-2.png" alt="" />
          </div>
          <div className="services-two__shape-3 img-bounce"></div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Our Services</span>
              </div>
              <h2 className="section-title__title">
              BE UNSTOPPABLE Embrace Endurance
              </h2>
            </div>
            <div className="row">
              {/* <!--Services Two Single Start --> */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-duration=".9s"
                data-wow-delay="100ms"
              >
                <div className="services-two__single">
                  <div className="services-two__img">
                    <img src="assets/images/resources/banner-one-img-1.jpg" alt="" />
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <a href="massages-therapy.html">Fitness Therapy</a>
                    </h3>
                    <p className="services-two__text">
                      Aorem ipsum sit amet consectetur adipiscing donec pulvinar
                      tortor
                    </p>
                    <div className="services-two__icon">
                      <span className="icon-leg"></span>
                    </div>
                    <div className="services-two__btn-box">
                      <a
                        href="massages-therapy.html"
                        className="services-two__btn thm-btn"
                      >
                        Read More<span className="icon-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Services Two Single End -->
                    <!--Services Two Single Start --> */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay="200ms"
              >
                <div className="services-two__single">
                  <div className="services-two__img">
                    <img src="assets/images/resources/appointment-two-img.jpg" alt="" />
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <a href="chiropractic-care.html">Therapy</a>
                    </h3>
                    <p className="services-two__text">
                      Aorem ipsum sit amet consectetur adipiscing donec pulvinar
                      tortor
                    </p>
                    <div className="services-two__icon">
                      <span className="icon-trusted"></span>
                    </div>
                    <div className="services-two__btn-box">
                      <a
                        href="chiropractic-care.html"
                        className="services-two__btn thm-btn"
                      >
                        Read More<span className="icon-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Services Two Single End -->
                    <!--Services Two Single Start --> */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-duration=".9s"
                data-wow-delay="300ms"
              >
                <div className="services-two__single">
                  <div className="services-two__img">
                    <img src="assets/images/resources/banner-one-img-2.jpg" alt="" />
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <a href="trained-therapists.html">Trained Trainer</a>
                    </h3>
                    <p className="services-two__text">
                      Aorem ipsum sit amet consectetur adipiscing donec pulvinar
                      tortor
                    </p>
                    <div className="services-two__icon">
                      <span className="icon-trained"></span>
                    </div>
                    <div className="services-two__btn-box">
                      <a
                        href="trained-therapists.html"
                        className="services-two__btn thm-btn"
                      >
                        Read More<span className="icon-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Services Two Single End --> */}
            </div>
          </div>
        </section>
    </div>
  )
}

export default ServicesTwo