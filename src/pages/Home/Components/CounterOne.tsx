import React from 'react'

const CounterOne = () => {
  return (
    <div>
         <section className="counter-one">
          <div className="container">
            <div className="counter-one__inner">
              <div className="counter-one__shape-1 float-bob-y">
                <img
                  src="assets/images/shapes/counter-one-shape-1.png"
                  alt=""
                />
              </div>
              <div className="counter-one__shape-2 float-bob-x">
                <img
                  src="assets/images/shapes/counter-one-shape-2.png"
                  alt=""
                />
              </div>
              <ul className="list-unstyled counter-one__list">
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-satisfied"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count count-box">
                      <h3
                        className="count-text"
                        data-stop="25"
                        data-speed="1500"
                      >
                        00
                      </h3>
                    </div>
                    <p className="counter-one__text">Satisfied Patients</p>
                  </div>
                </li>
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-finished"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count count-box">
                      <h3
                        className="count-text"
                        data-stop="600"
                        data-speed="1500"
                      >
                        00
                      </h3>
                      <span className="counter-one__count-plus">+</span>
                    </div>
                    <p className="counter-one__text">Finished Projects</p>
                  </div>
                </li>
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-experts"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count count-box">
                      <h3
                        className="count-text"
                        data-stop="250"
                        data-speed="1500"
                      >
                        00
                      </h3>
                      <span className="counter-one__count-plus">+</span>
                    </div>
                    <p className="counter-one__text">Experts Therapist</p>
                  </div>
                </li>
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-award-two"></span>
                  </div>
                  <div className="counter-one__content">
                    <div className="counter-one__count count-box">
                      <h3
                        className="count-text"
                        data-stop="5690"
                        data-speed="1500"
                      >
                        00
                      </h3>
                    </div>
                    <p className="counter-one__text">Award Got</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
  )
}

export default CounterOne