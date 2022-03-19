import React, { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import API from '../../api';

import { CometChat } from '@cometchat-pro/chat';

const LoginForm = () => {
  const navigation = useNavigate()
  const [credential, setCredential] = useState('')
  const [password, setPassword] = useState('')
  const closeRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      credential: credential,
      password: password
    }
    API.users.LOGIN(payload)
      .then(response => {
        const res = response.data.data
        API.configurations.SET_CURRENT_USER(res)
        closeRef.current.click()
        var apiKey = 'a58a0d20ed1b0473c316861b2cd30df15daaaac8';
        CometChat.login(response.data.data._id, apiKey).then(
          () => {
            navigation('/home')
          },
          error => {
            console.log("Login failed with error:", error.code);
          }
        );
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" ref={closeRef} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <figure className="d-flex justify-content-center">
                  <img className="mobile-image" src={require("../../assets/images/mobile.svg")} alt="" />
                </figure>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <h4>
                    <img
                      className="modal-logo"
                      src={require("../../assets/images/logo.png")}
                      alt=""
                    /> Social Shopper
                  </h4>
                </div>
                <h3>Member Sign In</h3>
                <form onSubmit={onSubmit}>
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                    <input
                      type="email"
                      name="loginEmail"
                      className="form-control"
                      placeholder="me@email.com"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      required
                      onChange={event => {
                        setCredential(event.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon2"><i className="fas fa-lock"></i></span>
                    <input
                      type="password"
                      name="loginPassword"
                      className="form-control"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon2"
                      required
                      onChange={event => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-6">
                        <button className="btn btn-primary" type="submit">Sign In</button>
                      </div>
                      <div className="col-md-6">
                        <a href="#">Forgot password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <ul className="login-options">
                      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fab fa-google"></i></a></li>
                    </ul>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm