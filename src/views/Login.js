import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/Forms/Login'
import RegisterForm from '../components/Forms/Register'

import UNITYSVG from '../assets/images/unity.svg'
import api from '../api'

function Login() {
  let refresh = false;
  const navigate = useNavigate()

  useEffect(() => {
    if (api.configurations.GET_CURRENT_USER()) {
      navigate('/home')
    }
  }, [!refresh]);
  return (
    <>
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-expand-lg bg-transparent">
            <a href="#" className="navbar-brand"><img src={require("../assets/images/logo.png")} alt="logo" /></a>
            <div className="search-area">
              <div className="search-box "><input className="form-control" id="text" type="text" placeholder="Search Here..." /><button className="btn btn-primary search-btn"><i className="fas fa-search"></i></button></div>
              <div id="keyword-searcher">
                <h5>Here's your search result</h5>
                <div className="cart-products-block">
                  <div className="cart-product">
                    <a href="#">
                      <img src={require("../assets/images/m12-mobile.jpg")} alt="" />
                      <span>product name <br />price:$00.00</span>
                    </a>
                    <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                  </div>
                  <div className="cart-product">
                    <a href="#">
                      <img src={require("../assets/images/smart-watches.jpg")} alt="" />
                      <span>product name <br />price:$00.00</span>
                    </a>
                    <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                  </div>
                  <div className="cart-product">
                    <a href="#">
                      <img src={require("../assets/images/smart-tv.jpeg")} alt="" />
                      <span>product name <br />price:$00.00</span>
                    </a>
                    <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <a href="product-search-result.html" className="btn-link">More Results</a>
                  </div>
                </div>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar icon-bar-1"></span>
              <span className="icon-bar icon-bar-2"></span>
              <span className="icon-bar icon-bar-3"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item join-btn">
                  <a href="#" className="nav-link">Join a CoCart</a>
                </li>
                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Create a CoCart
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Sign In if a Member</a></li>
                                        <li><a className="dropdown-item" href="#">Sign Up if not a Member</a></li>
                                    </ul>
                                </li> */}
                <li className="nav-item nav-credentials">
                  <a href="#login" data-bs-toggle="modal" data-bs-target="#login" className="nav-link">Sign In</a>
                </li>
                <li className="nav-item nav-credentials">
                  <a href="#register" data-bs-toggle="modal" data-bs-target="#register" className="nav-link">Free Sign Up</a>
                  {/* <button className="nav-link" onClick={navigateToAccount}>Free Sign Up</button> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="modal contact-modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <LoginForm />
      </div>
      {/* <!-- modal ends --> */}
      {/* <!-- Modal --> */}
      <div className="modal contact-modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <RegisterForm />
      </div>
      {/* <!-- modal ends --> */}
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
                <span className="info-text">Simple Use CoCart</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="info-box">
                <div className="icon"><i className="fas fa-gift"></i></div>
                <span className="info-text">Trusted Opinions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- information-section ends --> */}
      <section className="two-column-section">
        {/* <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="group-cart"></div>
                        </div>
                        <div className="col-md-5">
                            <div className="group-cart-member"></div>
                        </div>
                    </div>
                </div> */}
        {/* <div className="img-responsive" style="background-image: url(../assets/images/cart-image-bnr.jpg);"></div> */}
      </section>
      {/* <!-- two-column-section ends --> */}
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
      {/* <!-- ecommerce-section ends --> */}
    </>
  )
}

export default Login