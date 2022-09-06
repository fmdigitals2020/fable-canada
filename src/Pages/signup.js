import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {LoginImage,Logo,Google,Apple,LoginAdmin,LoginEmail,LoginPhone,LoginPw,LoginPwo} from "../Imports/ImportImages";

function signup() {

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
                <h3>Sign Up</h3>
                <p>Welcome back! login with your data</p>
                <form action="" class="was-validated">
                <div className='form-group'>
                  <label>User name</label>
                  <input type="text" required/>
                  <img src={LoginAdmin}/>
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className='form-group'>
                <label>E-mail</label>
                  <input type="email" required/>
                  <img src={LoginEmail}/>
                  <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className='form-group'>
                  <label id="valid">Phone Number</label>
                  <input type="tel" pattern="[+][0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                  <img src={LoginPhone}/>
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className='form-group'>
                <label>Password</label>
                  <input type="Password" required/>
                  <img src={LoginPw}/>
                  <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className='form-group'>
                <label>Confirm Password</label>
                  <input type="password" required/>
                  <img src={LoginPwo}/>
                  <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className='flex-area d-flex justify-content-start'>
                  <div className='remember'>
                    <input type='checkbox' id='check1'/>
                    <label for='check1'>
                    I agree to the 
                    </label>
                  </div>
                  <div className='forgot'>
                    <a href=''>
                    Terms & Conditions
                    </a>
                  </div>
                </div>
                <button type='submit' className='submit'>Sign Up</button>
                <div className='account-create'>
                  <span>Already have an account? <a href=''>Login</a></span>
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

export default signup