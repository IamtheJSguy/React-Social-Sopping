import React from 'react'

import LoggedInHeader from '../components/LoggedInHeader'

import UNITYSVG from '../assets/images/unity.svg'

const Home = () => {
    return (
        <>
            <LoggedInHeader />
            <section className="banner">
                <div className="container">
                    <div className="static-banner-item">
                        <div className="fixed-item">
                            <h1>Now you can shop online together with</h1>
                            <h2> <span className="input"></span></h2>
                        </div>
                        <div className="banner-figure">
                            <img src={UNITYSVG} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- banner ends --> */}
            <section className="information-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-hands-helping"></i></div>
                                <span className="info-text">Build <br />relationships</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-globe-asia"></i></div>
                                <span className="info-text">Shop with anyone <br />anywhere</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-shopping-cart"></i></div>
                                <span className="info-text">Simple Use <br />CoCart</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-gift"></i></div>
                                <span className="info-text">Trusted <br />Opinions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- information-section ends --> */}
            <section className="two-column-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="group-cart"></div>
                        </div>
                        <div className="col-md-5">
                            <div className="group-cart-member"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials-section">
                <div className="container">
                    <h2>Customers Testimonials</h2>
                    <div className="swiper testimonials-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>Thanks to Social Shopper offering the Cocart shopping feature, it creates more ways to spend time with my sister while we live over 1000 miles apart. I feel it helps to grow even closer. Where has this app been all my life?
                                            I love it and highly recommend it.</p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>Thanks to Social Shopper offering the group shopping feature, it creates more ways to spend time with my sister... </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>I have never enjoyed going in and out of stores. Now, I can quickly enter a search term and see what is selling nearby. It makes the local stores closer than they were and I can have my friends weigh in as to what their
                                            thoughts are before I make the purchase.
                                        </p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>I have never enjoyed going in and out of stores. Now, I can quickly enter a search term and see what is selling nearby. It makes the local stores... </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>This is Cool, easy to use and make it so easy to shop with impenitent hub...</p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>This is Cool, easy to use and make it so easy to shop with impenitent hub... </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>I feel this need to be easier to join the CoCart because my mom is not good with tech stuff...</p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>I feel this need to be easier to join the CoCart because my mom is not good with tech stuff... </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>Thanks to Social Shopper offering the group shopping feature, it creates more ways to spend time with my sister while we live over 1000 miles apart. I feel it helps to grow even closer. Where has this app been all my life?
                                            I love it and highly recommend it.</p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>Thanks to Social Shopper offering the group shopping feature, it creates more ways to spend time with my sister... </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>I have never enjoyed going in and out of stores. Now, I can quickly enter a search term and see what is selling nearby. It makes the local stores closer than they were and I can have my friends weigh in as to what their
                                            thoughts are before I make the purchase.
                                        </p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>I have never enjoyed going in and out of stores. Now, I can quickly enter a search term and see what is selling nearby. It makes the local stores... </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>This is Cool, easy to use and make it so easy to shop with impenitent hub...</p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>This is Cool, easy to use and make it so easy to shop with impenitent hub... </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>I feel this need to be easier to join the CoCart because my mom is not good with tech stuff...</p>
                                    </div>
                                    <figure><img src={require("../assets/images/user.png")} alt="" /></figure>
                                    <p>I feel this need to be easier to join the CoCart because my mom is not good with tech stuff... </p>
                                </div>
                            </div>

                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>
            {/* <!-- testimonials-section ends --> */}
            <div className="ecommerce-section">
                <div className="container">
                    <div className="counter-show">
                        <h2 className="counter"><span>+</span><span className="timer count-number">10000000</span> of products are available at:</h2>
                    </div>
                    <div className="swiper client-logos">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={require("../assets/images/etsy.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/ebay.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/target.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/walmart.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/amazon.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/etsy.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/ebay.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/target.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/walmart.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/amazon.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home