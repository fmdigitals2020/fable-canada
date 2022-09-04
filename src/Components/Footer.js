import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {Logo,Facebook,Twitter,Linkedin,Youtube} from "../Imports/ImportImages";

function Footer() {
  return (
    <footer>
        <Container>
            <div className='footer-wrapper'>
                <Row>
                    <Col lg={5}>
                       <div className='footer-box'>
                            <div className='footer-logo'>
                                <a href=''>
                                    <img src={Logo}/>
                                </a>
                            </div>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. varius lacus vel elit accumsan, sollicitudin.</p>
                            </div>
                            <div className='social-icons'>
                                <a href=''>
                                    <img src={Facebook}/>
                                </a>
                                <a href=''>
                                    <img src={Twitter}/>
                                </a>
                                <a href=''>
                                    <img src={Youtube}/>
                                </a>
                                <a href=''>
                                    <img src={Linkedin}/>
                                </a>
                            </div>
                       </div>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col xs={4}>
                               <div className='footer-box'>
                                  <h4>Company</h4>
                                  <ul>
                                    <li><a href=''>Wishlist</a></li>
                                    <li><a href=''>Cart</a></li>
                                    <li><a href=''>Checkout</a></li>
                                    <li><a href=''>Maintenance Mode</a></li>
                                  </ul>
                               </div>
                            </Col>
                            <Col xs={4}>
                               <div className='footer-box'>
                                  <h4>Links</h4>
                                  <ul>
                                    <li><a href=''>About Us</a></li>
                                    <li><a href=''>Blog</a></li>
                                    <li><a href=''>Services</a></li>
                                    <li><a href=''>Contact</a></li>
                                  </ul>
                               </div>
                            </Col>
                            <Col xs={4}>
                               <div className='footer-box'>
                                  <h4>Help</h4>
                                  <ul>
                                    <li><a href=''>Email Us</a></li>
                                    <li><a href=''>Help & FAQ</a></li>
                                    <li><a href=''>Shipping Policy</a></li>
                                    <li><a href=''>Gift Cards</a></li>
                                  </ul>
                               </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='footer-bottom'>
                    <p>Copyright 2022 Fable. All Right Reserved.</p>
                    <p>Terms of Service  |  Privacy Policy</p>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer