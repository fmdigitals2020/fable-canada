import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { Search } from '../Imports/ImportImages'
import { Form } from 'react-bootstrap'
import { EventGrid1,EventGrid2,EventGrid3 } from '../Imports/ImportImages'
import SubscribeNow from '../Components/SubscribeNow'
import Pagination from '../Components/Pagination' 
import Footer from '../Components/Footer'

function eventList() {
  return (
    <>
     <Header HeaderInside/>
     <section className='event-banner'>
        <div className='event-bannerContent'>
            <div className='heading-meta'>
            <h2>Explore Interesting Events</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                <div className='search-event'>
                    <input type="text" placeholder='Searching event...'/>
                    <div className='search'>
                        <img src={Search}/>
                    </div>
                </div>
            </div>
            <div className='events-categories'>
                <button>
                    Popular Categories
                </button>
                <button>
                    A guest speaker event
                </button>
                <button>
                    Conferences
                </button>
                <button>
                    seminar
                </button>
                <button>
                    Workshops
                </button>
                <button>
                    Event sponsorships
                </button>
                <button>
                    Festivals and parties
                </button>
               
            </div>
        </div>
     </section>
     <div className='event-lists'>
        <Container>
            <div className='event-sorting'>
                <div className='search-sort'>
                    <Form.Select>
                        <option>A to Z</option>
                    </Form.Select>
                    <div className='sort'>
                        <span>Store By :</span>
                        <div className='selects'>
                        <Form.Select>
                            <option>A to Z</option>
                        </Form.Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='event-grid'>
                <Row>
                    <Col lg={4} md={6}>
                        <div className='event-box'>
                            <div className='picture'>
                                <img src={EventGrid1}/>
                            </div>
                            <div className='info'>
                                <h3>Chess World Champlonship</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                                <div className='actions'>
                                    <button>
                                    Computer Science
                                    </button>
                                    <button>
                                    Data Science
                                    </button>
                                    <button>
                                    Cognitive Science
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className='event-box'>
                            <div className='picture'>
                                <img src={EventGrid2}/>
                            </div>
                            <div className='info'>
                                <h3>Unfauxgettable Flowers</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                                <div className='actions'>
                                    <button>
                                    Computer Science
                                    </button>
                                    <button>
                                    Data Science
                                    </button>
                                    <button>
                                    Cognitive Science
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className='event-box'>
                            <div className='picture'>
                                <img src={EventGrid3}/>
                            </div>
                            <div className='info'>
                                <h3>Ylnka Shonlbare</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                                <div className='actions'>
                                    <button>
                                    Computer Science
                                    </button>
                                    <button>
                                    Data Science
                                    </button>
                                    <button>
                                    Cognitive Science
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className='event-box'>
                            <div className='picture'>
                                <img src={EventGrid1}/>
                            </div>
                            <div className='info'>
                                <h3>Ylnka Shonlbare</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                                <div className='actions'>
                                    <button>
                                    Computer Science
                                    </button>
                                    <button>
                                    Data Science
                                    </button>
                                    <button>
                                    Cognitive Science
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className='event-box'>
                            <div className='picture'>
                                <img src={EventGrid2}/>
                            </div>
                            <div className='info'>
                                <h3>Chess World Champlonship</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                                <div className='actions'>
                                    <button>
                                    Computer Science
                                    </button>
                                    <button>
                                    Data Science
                                    </button>
                                    <button>
                                    Cognitive Science
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className='event-box'>
                            <div className='picture'>
                                <img src={EventGrid3}/>
                            </div>
                            <div className='info'>
                                <h3>Chess World Champlonship</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                                <div className='actions'>
                                    <button>
                                    Computer Science
                                    </button>
                                    <button>
                                    Data Science
                                    </button>
                                    <button>
                                    Cognitive Science
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Pagination/>
        </Container>
     </div>
     <SubscribeNow/>
     <Footer/>
    </>
  )
}

export default eventList