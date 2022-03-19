import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()
    function navigateToAccount() {
        navigate('/accounts')
    }
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
        </>
    )
}

export default Header