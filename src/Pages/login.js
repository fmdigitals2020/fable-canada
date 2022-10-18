import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {LoginImage,Logo,Google,Apple,LoginF,LoginG,LoginT} from "../Imports/ImportImages";

function login() {

  return (
    <div className='login-page'>
      <div className='login-content'>
        <Row>
            <Col lg={6}>
              <div className='login-box'>
                <div className='logo text-center'>
                    <a href=''>
                        <img src={Logo}/>
                    </a>
                </div>
                <div className='login-image'>
                    <img src={LoginImage} width="100%"/>
                </div>
                <div className='heading-para'>
                    <h2 className='section-heading'>Welcome To FABLE</h2>
                    <p className='section-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ad minim veniam.</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className='login-info'>
                <h3>Log In to FABLE</h3>
                <p>Welcome back! login with your data</p>
                <div className='actions'>
                    <a href='javascript:void(0)'>For Students</a>
                    <a href='javascript:void(0)'>For Clubs</a>
                </div>
                <div className='option'>
                    or with email
                </div>
                <form action="/action_page.php" class="was-validated">
                <div className='form-group'>
                  <label id="valid">E-mail</label>
                  <input type="text" required/>
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className='form-group'>
                <label>Password</label>
                  <input type="password" required/>
                  <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className='flex-area'>
                  <div className='remember'>
                    <input type='checkbox' id='check1'/>
                    <label for="check1">
                      Remember me
                    </label>
                  </div>
                  <div className='forgot'>
                    <a href=''>
                    Forgot Password?
                    </a>
                  </div>
                </div>
                <button type='submit' className='submit'>log In</button>
                <div className='account-create'>
                  <span>Don’t have an account? <a href=''> Sign Up</a></span>
                </div>
                <div className='option d-sm-none d-flex'>
                Or
                </div>
                <div className='mobile-social-btn d-sm-none d-flex justify-content-center'>
                  <a href=''>
                    <img src={LoginF}/>
                  </a>
                  <a href=''>
                    <img src={LoginG}/>
                  </a>
                  <a href=''>
                    <img src={LoginT}/>
                  </a>
                </div>
                <div className='bottom'>
                  <p className='section-paragraph'>Copyright 2022 Fable. All Right Reserved.</p>
                </div>
                </form>
              </div>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default login