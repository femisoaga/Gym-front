import React from 'react'

const ProcessOne = () => {
  return (
    <div>
         <section className="process-one">
          <div className="process-one__shape-1 float-bob-y">
            <img src="assets/images/shapes/process-one-shape-1.png" alt="" />
          </div>
          <div className="process-one__shape-2 float-bob-x">
            <img src="assets/images/shapes/process-one-shape-2.png" alt="" />
          </div>
          <div className="process-one__shape-3 zoominout"></div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Fitness Process</span>
              </div>
              <h2 className="section-title__title">
                Step to Get Fitness
              </h2>
            </div>
            <div className="process-one__inner">
              <div className="process-one__line-1">
                <img src="assets/images/shapes/process-one-line-1.png" alt="" />
              </div>
              <div className="row">
                {/* <!--Process One Single Start --> */}
                <div className="col-xl-4 col-lg-4">
                  <div className="process-one__single">
                    <div className="process-one__icon-box">
                      <div className="process-one__count"></div>
                      <div className="process-one__icon">
                        <span className="icon-book"></span>
                      </div>
                    </div>
                    <div className="process-one__content">
                      <h4 className="process-one__title">
                        Select Preference
                      </h4>
                      <p className="process-one__text">
                        In a free hour, when our power of choice is untrammelled
                        and when nothing prevents dolor sit amet, consectetur
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Process One Single End -->
                        <!--Process One Single Start --> */}
                <div className="col-xl-4 col-lg-4">
                  <div className="process-one__single">
                    <div className="process-one__icon-box">
                      <div className="process-one__count"></div>
                      <div className="process-one__icon">
                        <span className="icon-team"></span>
                      </div>
                    </div>
                    <div className="process-one__content">
                      <h4 className="process-one__title">Get Recommendation</h4>
                      <p className="process-one__text">
                        Integer feugiat tortor non there are many other nullam
                        In a free hour, when our power of choice is untrammelled
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Process One Single End -->
                        <!--Process One Single Start --> */}
                <div className="col-xl-4 col-lg-4">
                  <div className="process-one__single">
                    <div className="process-one__icon-box">
                      <div className="process-one__count"></div>
                      <div className="process-one__icon">
                        <span className="icon-like"></span>
                      </div>
                    </div>
                    <div className="process-one__content">
                      <h4 className="process-one__title">Enjoy Our Therapy</h4>
                      <p className="process-one__text">
                        In a free hour, when our power of choice is untrammelled
                        and when nothing prevents dolor sit amet, consectetur
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Process One Single End --> */}
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ProcessOne