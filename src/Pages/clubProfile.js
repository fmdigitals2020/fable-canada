import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Header from '../Components/Header';
import SubscribeNow from '../Components/SubscribeNow';
import Footer from '../Components/Footer';
import {clubProfileMob,BreadcrumbRight,Disable,heartView,pinView,royalClub,signTick,EventGrid1,EventGrid2,EventGrid3, clubProfile } from '../Imports/ImportImages'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pagination from '../Components/Pagination';

const ClubProfile = () =>  {
  return (
    <>
    <Header HeaderInside/>
    <div className='profile-area club-areaa'>
        <Container>
            <div className='breadcrumb'>
                <a href=''> Home<img src={BreadcrumbRight}/> </a> <a href=''>Club Profile</a>
            </div>
            <div className='title-name'>
                <h2 className='title-big'>Club Profile</h2>
            </div>
            <div className='viewProfile-main'>
                <div className='top-area'>
                    <div className='picture profile-picture'>
                        <img src={clubProfile} width="100%"/>
                        <img src={clubProfileMob}/>
                    </div>
                    <div className='top-grid'>
                        <Row>
                            <Col xl={8}>
                                <div className='content'>
                                    <div className='picture'>
                                        <img src={royalClub}/>
                                    </div>
                                    <div className='meta'>
                                        <h3>Royal Club</h3>
                                        <span>Start up ventures for Students</span>
                                        <span>@carlapress <img src={signTick}/></span>
                                        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.”</p>
                                        <div className='gridarea'>
                                            <div className='followers common-styles'>
                                                <h4>Followers</h4>
                                                <span>37.8k</span>
                                            </div>
                                            <div className='member common-styles'>
                                                <h4>Members</h4>
                                                <span>27.9k</span>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <h5>Description</h5>
                                            <p>About the application; It is completely free, and compared to other platforms, it is easier to navigate and simple to use by anyone. Just register yourself, and then you are just one click away to bring a friend into security feature to make your conversation more private and away from the reach of other people. your life!!</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className='create-event'>
                                    <button>
                                        +  create event
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='grid-section'>
                        <div class="search-sort"> <h2 className='heading'>Events List</h2> <div class="sort"><span>Store By :</span><div class="selects"><select class="form-select"><option>A to Z</option></select></div></div></div>
                        <div className='event-grid tab-box'>
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
                    </div>
                </div>
            </div>
            {/* pagination */}
            <Pagination/>
            {/* pagination */}
        </Container>
    </div>

    {/* Subscribe */}
      <SubscribeNow/>
    {/* Subscribe */}

    {/* Footer */}
       <Footer/>
    {/* Footer */}
    </>
  )
}

export default ClubProfile;