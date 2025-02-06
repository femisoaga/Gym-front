import React from 'react'

const BannerOne = () => {
  return (
    <div>
           {/* <!--Banner One Start --> */}
           <section className="banner-one">
            <div className="banner-one__shape-1 float-bob-y">
                <img src="assets/images/shapes/banner-one-shape-1.png" alt=""/>
            </div>
            <div className="banner-one__shape-2 float-bob-x">
                <img src="assets/images/shapes/banner-one-shape-2.png" alt=""/>
            </div>
            <div className="banner-one__shape-3 img-bounce">
                <img src="assets/images/shapes/banner-one-shape-3.png" alt=""/>
            </div>
            <div className="banner-one__shape-4 float-bob-y">
                <img src="assets/images/shapes/banner-one-shape-4.png" alt=""/>
            </div>
            <div className="banner-one__shape-6"></div>
            <div className="container">
                <div className="banner-one__inner">
                    <div className="banner-one__content">
                        <div className="banner-one__sub-title-box">
                            <div className="banner-one__sub-title-shape"></div>
                            <p className="banner-one__sub-title">Chiropractic Care in Manhattan</p>
                        </div>
                        <h2 className="banner-one__title">A Body in Balance <br/> Is Free From Pain</h2>
                        <div className="banner-one__btn-and-satisfied-patient">
                            <div className="banner-one__btn-box">
                                <a href="services1.html" className="banner-one__btn thm-btn">View Services<span className="icon-right-arrow"></span></a>
                            </div>
                            <div className="banner-one__satisfied-patient">
                                <ul className="banner-one__satisfied-patient-list list-unstyled">
                                    <li>
                                        <div className="banner-one__satisfied-patient-img">
                                            <img src="assets/images/resources/banner-one-satisfied-patient-img-1-1.png" alt=""/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-one__satisfied-patient-img">
                                            <img src="assets/images/resources/banner-one-satisfied-patient-img-1-2.png" alt=""/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-one__satisfied-patient-img">
                                            <img src="assets/images/resources/banner-one-satisfied-patient-img-1-3.png" alt=""/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="banner-one__satisfied-patient-img">
                                            <img src="assets/images/resources/banner-one-satisfied-patient-img-1-4.png" alt=""/>
                                        </div>
                                    </li>
                                </ul>
                                <div className="banner-one__satisfied-patient-content">
                                    <div className="banner-one__satisfied-patient-star">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                    <p className="banner-one__satisfied-patient-title">satisfied Patient</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-one__img-box">
                        <div className="banner-one__img">
                            <img src="assets/images/resources/banner-one-img-1.jpg" className='h-[27em] mt-24' alt=""/>
                            <div className="banner-one__img-shape-1">
                                <img src="assets/images/shapes/banner-one-img-shape-1.png" alt=""/>
                            </div>
                            <div className="banner-one__img-shape-2">
                                <img src="assets/images/shapes/banner-one-img-shape-2.png" alt=""/>
                            </div>
                            <div className="banner-one__pain-point-1">
                                <div className="banner-one__pain-markar">
                                    <i className="ripple"></i>
                                </div>
                                <div className="banner-one__popup-box">
                                    <div className="banner-one__popup">
                                        <div className="banner-one__popup-inner">
                                            <h5 className="banner-one__popup-title">Elbow Pain</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-one__pain-point-1 banner-one__pain-point-2">
                                <div className="banner-one__pain-markar banner-one__pain-markar-2">
                                    <i className="ripple"></i>
                                </div>
                                <div className="banner-one__popup-box">
                                    <div className="banner-one__popup">
                                        <div className="banner-one__popup-inner">
                                            <h5 className="banner-one__popup-title">Shoulder Pain</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-one__pain-point-1 banner-one__pain-point-3">
                                <div className="banner-one__pain-markar banner-one__pain-markar-3">
                                    <i className="ripple"></i>
                                </div>
                                <div className="banner-one__popup-box">
                                    <div className="banner-one__popup">
                                        <div className="banner-one__popup-inner">
                                            <h5 className="banner-one__popup-title">Lumbar Pain</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-one__pain-point-1 banner-one__pain-point-4">
                                <div className="banner-one__pain-markar banner-one__pain-markar-4">
                                    <i className="ripple"></i>
                                </div>
                                <div className="banner-one__popup-box">
                                    <div className="banner-one__popup">
                                        <div className="banner-one__popup-inner">
                                            <h5 className="banner-one__popup-title">Hand Pain</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--Banner One End --> */}
    </div>
  )
}

export default BannerOne