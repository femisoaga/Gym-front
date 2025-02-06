import React from 'react'

const TeamTwo = () => {
  return (
    <div>
         <section className="team-two">
          <div className="team-two__shape-1"></div>
          <div className="team-two__shape-2"></div>
          <div className="team-two__shape-3"></div>
          <div className="team-two__shape-4"></div>
          <div className="team-two__shape-5 zoominout">
            <img src="assets/images/shapes/team-two-shape-5.png" alt="" />
          </div>
          <div className="team-two__shape-6 zoominout">
            <img src="assets/images/shapes/team-two-shape-6.png" alt="" />
          </div>
          <div className="team-two__shape-7 float-bob-x">
            <img src="assets/images/shapes/team-two-shape-7.png" alt="" />
          </div>
          <div className="team-two__shape-8 float-bob-y">
            <img src="assets/images/shapes/team-two-shape-8.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Our Therapists</span>
              </div>
              <h2 className="section-title__title">Our Chiropractic Team</h2>
            </div>
            <div className="row">
              {/* <!--Team Two Single Start --> */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="team-two__single">
                  <div className="team-two__img">
                    <img src="assets/images/team/team-2-1.jpg" alt="" />
                  </div>
                  <div className="team-two__content">
                    <div className="team-two__info-box">
                      <h4 className="team-two__name">
                        <a href="team-details.html">Marvin McKinney</a>
                      </h4>
                      <p className="team-two__sub-title">Physical Therapist</p>
                    </div>
                    <div className="team-two__social">
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                      <a href="#">
                        <span className="icon-link-in"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Team Two Single End -->
                    <!--Team Two Single Start --> */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="team-two__single">
                  <div className="team-two__img">
                    <img src="assets/images/team/team-2-2.jpg" alt="" />
                  </div>
                  <div className="team-two__content">
                    <div className="team-two__info-box">
                      <h4 className="team-two__name">
                        <a href="team-details.html">Bessie Cooper</a>
                      </h4>
                      <p className="team-two__sub-title">Senior Therapist</p>
                    </div>
                    <div className="team-two__social">
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                      <a href="#">
                        <span className="icon-link-in"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Team Two Single End -->
                    <!--Team Two Single Start --> */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="team-two__single">
                  <div className="team-two__img">
                    <img src="assets/images/team/team-2-3.jpg" alt="" />
                  </div>
                  <div className="team-two__content">
                    <div className="team-two__info-box">
                      <h4 className="team-two__name">
                        <a href="team-details.html">Leslie Alexander</a>
                      </h4>
                      <p className="team-two__sub-title">
                        Acupuncture Therapist
                      </p>
                    </div>
                    <div className="team-two__social">
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                      <a href="#">
                        <span className="icon-link-in"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Team Two Single End --> */}
            </div>
          </div>
        </section>
    </div>
  )
}

export default TeamTwo