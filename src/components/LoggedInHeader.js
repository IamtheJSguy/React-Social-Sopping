import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import api from '../api'

const LoggedInHeader = () => {
  const navigation = useNavigate()
  const [routes, setRoutes] = useState([
    {
      title: 'Profile',
      path: '/accounts'
    },
    {
      title: 'Members Landing',
      path: '/members'
    },
    {
      title: 'My Subscriptions',
      path: '/cocarts'
    },
    {
      title: 'My Contacts',
      path: '/contacts'
    },
    {
      title: 'My Experts',
      path: '/members'
    },
    {
      title: 'My Settings',
      path: '/accounts'
    },
    {
      title: 'Help',
      path: '/help'
    }
  ])
  const searchBox = () => {
    console.log('searchBox')
  }
  const Signout = async () => {
    await api.configurations.SET_CURRENT_USER(null)
    navigation('/')
  }

  return (
    <>
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-expand-lg bg-transparent">
            {/* <a href="#" className="navbar-brand"><img src={require("../assets/images/logo.png")} alt="logo" /></a> */}
            <button className="navbar-brand" style={{ background: 'none', border: 'none', outline: 'none' }} onClick={() => navigation('/home')}><img src={require("../assets/images/logo.png")} alt="logo" /></button>

            <div className="search-area">
              <div className="search-box "><input className="form-control" id="text" type="text" placeholder="Search Here..." onKeyUp={searchBox} /><button className="btn btn-primary search-btn"><i className="fas fa-search"></i></button></div>
              <div id="keyword-searcher">
                <h5>Here's your search result</h5>
                <div className="cart-products-block">
                  <div className="cart-product">
                    <a href="#">
                      <img src={require("../assets/images/m12-mobile.jpg")} alt="" />
                      <span>product name <br /> price:$00.00</span>
                    </a>
                    <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                  </div>
                  <div className="cart-product">
                    <a href="#">
                      <img src={require("../assets/images/smart-watches.jpg")} alt="" />
                      <span>product name <br /> price:$00.00</span>
                    </a>
                    <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                  </div>
                  <div className="cart-product">
                    <a href="#">
                      <img src={require("../assets/images/smart-tv.jpeg")} alt="" />
                      <span>product name <br /> price:$00.00</span>
                    </a>
                    <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <a href="product-search-result.html" className="btn-link">More results</a>
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
                <li className="nav-item">
                  {/* <a href="join-cocart.html" className="nav-link">Join a CoCart</a> */}
                  <button className="nav-link" onClick={() => navigation('/cocarts/join')}>Join a CoCart</button>
                </li>
                <li className="nav-item dropdown">
                  <button className="nav-link" onClick={() => navigation('/cocarts/create')}>Create a CoCart</button>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle user-link" href="account.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={require("../assets/images/user.png")} alt="" /> <span>My Account</span></a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                      routes ?
                      routes.map((route, index) =>
                        <li key={'routes-' + (index + 1)}>
                          <button
                            className="dropdown-item"
                            onClick={ () => navigation(route.path)}
                          >
                            {route.title}
                          </button>
                        </li>
                      )
                      :
                      <></>
                    }
                    <li>
                      <button
                            className="dropdown-item"
                            onClick={Signout}
                          >
                            Sign Out
                          </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- header ends --> */}
    </>
  )
}

export default LoggedInHeader