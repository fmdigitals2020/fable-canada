import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Header from "../Components/Header";
import {ClubGridImg1,ClubGridImg2,ClubGridImg3,ClubGridImg4,BreadcrumbRight,UserBlack} from "../Imports/ImportImages";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer';
import SubscribeNow from '../Components/SubscribeNow';
import Pagination from '../Components/Pagination';

function clublist() {
  return (
    <>
        <Header HeaderInside className='headerinside'/>
        <section className='clublist'>
            <Container>
                <div className='clublist-content'>
                    <div className='breadcrumb'>
                        <a href=''> Home<img src={BreadcrumbRight}/> </a> <a href=''>Club List</a> 
                    </div>
                    <div className='title-name'>
                        <h2>Club List</h2>
                    </div>
                    <div className='club-grid'>
                        <Row>
                            <Col lg={3}>
                              <div className='categories-accordion'>
                                <h3>Category of Club</h3>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Academtics</Accordion.Header>
                                        <Accordion.Body>
                                         <ul>
                                            <li>
                                                <input type='radio' name='type' id='radio1'/>
                                                <label for='radio1'>Humaanities</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='type' id='radio2'/>
                                                <label for='radio2'>Performing arts</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='type' id='radio3'/>
                                                <label for='radio3'>Visual arts</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='type' id='radio4'/>
                                                <label for='radio4'>Languages and literature</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='type'/>
                                                <label>Law</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='type' id='radio5'/>
                                                <label for='radio5'>Philosophy</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='type' id='radio6'/>
                                                <label for='radio6'>Theology</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='type' id='radio7'/>
                                                <label for='radio7'>Social Sciences</label>
                                            </li>
                                         </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Arts</Accordion.Header>
                                        <Accordion.Body>
                                         <ul>
                                            <li>
                                                <input type='radio'/>
                                                <label>Humaanities</label>
                                            </li>
                                            <li>
                                                <input type='radio'/>
                                                <label>Performing arts</label>
                                            </li>
                                         </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Athletics and Recreation</Accordion.Header>
                                        <Accordion.Body>
                                         <ul>
                                            <li>
                                                <input type='radio'/>
                                                <label>Humaanities</label>
                                            </li>
                                            <li>
                                                <input type='radio'/>
                                                <label>Performing arts</label>
                                            </li>
                                         </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Community Service</Accordion.Header>
                                        <Accordion.Body>
                                         <ul>
                                            <li>
                                                <input type='radio'/>
                                                <label>Humaanities</label>
                                            </li>
                                            <li>
                                                <input type='radio'/>
                                                <label>Performing arts</label>
                                            </li>
                                         </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Culture and Identities</Accordion.Header>
                                        <Accordion.Body>
                                         <ul>
                                            <li>
                                                <input type='radio'/>
                                                <label>Humaanities</label>
                                            </li>
                                            <li>
                                                <input type='radio'/>
                                                <label>Performing arts</label>
                                            </li>
                                         </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Environment and Sust..</Accordion.Header>
                                        <Accordion.Body>
                                         <ul>
                                            <li>
                                                <input type='radio'/>
                                                <label>Humaanities</label>
                                            </li>
                                            <li>
                                                <input type='radio'/>
                                                <label>Performing arts</label>
                                            </li>
                                         </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                              </div>
                            </Col>
                            <Col lg={9}>
                                <div className='club-list'>
                                    <div className='search-sort'>
                                        <div className='textbox'>
                                            <input type='text' placeholder='Search'/>
                                        </div>
                                        <div className='sort'>
                                            <span>Store By :</span>
                                            <div className='selects'>
                                            <Form.Select>
                                                <option>A to Z</option>
                                            </Form.Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='club-grid'>
                                        <div className='item-box'>
                                            <div className='picture'>
                                                <img src={ClubGridImg1}/>
                                                <a href='javascript:void(0)'>
                                                    Follow
                                                </a>
                                            </div>
                                            <div className='info'>
                                                <h3>Articial Intelligence Association</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. Suspendisse potenti. Fusce eget commodo diam. Proin sagittis tellus sit amet varius sollicitudin. Suspendisse consequat pulvinar elit id suscipit. Phasellus vulputate viverra dapibus consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. </p>
                                                <div className='selection'>
                                                    <button>Computer Science</button>
                                                    <button>AI</button>
                                                    <button>Data Science</button>
                                                    <button>Cognitive Science</button>
                                                    <button>AIA</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item-box'>
                                            <div className='picture'>
                                                <img src={ClubGridImg2}/>
                                                <a href='javascript:void(0)'>
                                                    Follow
                                                </a>
                                            </div>
                                            <div className='info'>
                                                <h3>Habitat for Humanity Center</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. Suspendisse potenti. Fusce eget commodo diam. Proin sagittis tellus sit amet varius sollicitudin. Suspendisse consequat pulvinar elit id suscipit. Phasellus vulputate viverra dapibus consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. </p>
                                                <div className='selection'>
                                                    <button>Environment</button>
                                                    <button>Sustainability</button>
                                                    <button>Volunteering</button>
                                                    <button>Architecture</button>
                                                    <button>Social Justice</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item-box'>
                                            <div className='picture'>
                                                <img src={ClubGridImg3}/>
                                                <a href='javascript:void(0)'>
                                                    Follow
                                                </a>
                                            </div>
                                            <div className='info'>
                                                <h3>Astronomy Research Club</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. Suspendisse potenti. Fusce eget commodo diam. Proin sagittis tellus sit amet varius sollicitudin. Suspendisse consequat pulvinar elit id suscipit. Phasellus vulputate viverra dapibus consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. </p>
                                                <div className='selection'>
                                                    <button>Environment</button>
                                                    <button>Sustainability</button>
                                                    <button>Volunteering</button>
                                                    <button>Architecture</button>
                                                    <button>Social Justice</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item-box'>
                                            <div className='picture'>
                                                <img src={ClubGridImg4}/>
                                                <a href='javascript:void(0)'>
                                                    Follow
                                                </a>
                                            </div>
                                            <div className='info'>
                                                <h3>Shiba Choreography Studio</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. Suspendisse potenti. Fusce eget commodo diam. Proin sagittis tellus sit amet varius sollicitudin. Suspendisse consequat pulvinar elit id suscipit. Phasellus vulputate viverra dapibus consectetur adipiscing elit. Donec ut lacus et eros malesuada auctor dignissim in metus. </p>
                                                <div className='selection'>
                                                    <button>Dance</button>
                                                    <button>Music</button>
                                                    <button>Hip Hop</button>
                                                    <button>Chareography</button>
                                                    <button>Shiba Studio</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                 {/* Pagination */}
                <Pagination/>
                {/* Pagination */}
            </Container>
        </section>

         {/* Subscribe */}
         <SubscribeNow/>
        {/* Subscribe */}

        {/* Footer */}
        <Footer/>
        {/* Footer */}
    </>
  )
}

export default clublist