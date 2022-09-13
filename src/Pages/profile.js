import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Header from '../Components/Header';
import SubscribeNow from '../Components/SubscribeNow';
import Footer from '../Components/Footer';
import {viewProfileMob,BreadcrumbRight,Disable,heartView,pinView,royalClub,signTick,viewProfile1,EventGrid1,EventGrid2,EventGrid3 } from '../Imports/ImportImages'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pagination from '../Components/Pagination';

const Profile = () =>  {
  return (
    <>
    <Header HeaderInside/>
    <div className='profile-area'>
        <Container>
            <div className='breadcrumb'>
                <a href=''> Home<img src={BreadcrumbRight}/> </a> <a href=''>Profile <img src={BreadcrumbRight}/> </a> <a href='' className='active'>Profile Details</a>
            </div>
            <div className='title-name'>
                <h2 className='title-big'>Club List</h2>
            </div>
            <div className='viewProfile-main'>
                <div className='top-area'>
                    <div className='picture profile-picture'>
                        <img src={viewProfile1} width="100%"/>
                        <img src={viewProfileMob}/>
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
                                        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising <br/> pain was born and I will give you a complete account of the system, and expound the actual <br/> teachings of the great explorer of the truth, the of human happiness denouncing pleasure.”</p>
                                        <div className='gridarea'>
                                            <div className='followers common-styles'>
                                                <h4>Followers</h4>
                                                <span>37.8k</span>
                                            </div>
                                            <div className='member common-styles'>
                                                <h4>Members</h4>
                                                <span>27.9k</span>
                                            </div>
                                            <div className='Registartion common-styles'>
                                                <h4>Registartion Status</h4>
                                                <span>Open</span>
                                            </div>
                                            <div className='actions'>
                                                <a href=''>
                                                Follow
                                                </a>
                                            </div>
                                            <div className='actions'>
                                                <a href=''>
                                                Apply For Member
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className='email-area'>
                                    <div className='flexarea'>
                                        <button>
                                            <img src={heartView}/>
                                        </button>
                                        <button>
                                            <img src={Disable}/>
                                        </button>
                                        <button>
                                            <img src={pinView}/>
                                        </button>
                                    </div>
                                    <div className='email-box'>
                                        <div className='flex-area'>
                                            <label>Email</label>
                                            <a href=''>ROYALCLUBTRT@GMAIL.COM</a>
                                        </div>
                                        <div className='flex-area'>
                                            <label>Phone</label>
                                            <a href=''>ROYALCLUBTRT@GMAIL.COM</a>
                                        </div>
                                        <div className='flex-area'>
                                            <label>Location</label>
                                            <a href=''>987 KING STREET, TORONTO, CANADA, ON M1Z7GH</a>
                                        </div>
                                        <div className='categories'>
                                            <h4>Club Identity Categories</h4>
                                            <button>
                                                Computer Science
                                            </button>
                                            <button>
                                                Data Science
                                            </button>
                                            <button>
                                                Cognitive & Computation Science
                                            </button>
                                            <button>
                                                Student Community
                                            </button>
                                            <button>
                                                UTKSM
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='tabs-area'>
                    <Tabs>
                    <TabList>
                      <Tab className="tab">Live & Future Events</Tab>
                      <Tab className="tab">Finished</Tab>
                      <Tab className="tab">Thread</Tab>
                      <Tab className="tab">About</Tab>
                    </TabList>
                  <TabPanel>
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
                            <div className='actions'>
                                <a href=''>View More</a>
                            </div>
                        </Row>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <Row>
                      <Col lg={4}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src=''/>
                              </div>
                              <div className="title">
                                <h4>UT EMC</h4>
                                <span>Hiphop</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>520K</h4>
                              <span>Followers</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPanel>
                  <TabPanel>
                    <Row>
                      <Col lg={4}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src=''/>
                              </div>
                              <div className="title">
                                <h4>UT EMC</h4>
                                <span>Hiphop</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>520K</h4>
                              <span>Followers</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPanel>
                  </Tabs>
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

export default Profile;