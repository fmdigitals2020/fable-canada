import React, { useState,Component  } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {ApplyIcon,Map,SearchImg1,SearchImg2,SearchImg3,SearchMap,Profs,Urban,Foodies,FeaturedClub,TrendingImg1,TrendingImg2,TrendingImg3,ClubEventsImg4,Deca2,Tamil2,Badminton2,Cass,HiringImg1,HiringImg2,dotImage,clubImage,eventsImg1,eventsImg2,eventsImg3,Badminton,Deca,Tamil,ClubEventsImg1,ClubEventsImg2,ClubEventsImg3,Location} from "../Imports/ImportImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Index = () => {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var mySettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  }

  var clubSlider = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  }

    return (
      <div className="App">
        {/* HEADER START */}
          <Header/>
        {/* HEADER END */}
        
        {/* banner */}
        <section className="homepage-banner">
          <div className="banner-slider">
            <Slider {...settings}>
              <div className="slider-content">
                <Container>
                  <div className="slider-meta">
                    <span>University experience platform</span>
                    <h2>Discover Your University <br/> Experiences</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, posuere dis posuere aliquet. <br/> Aliquam arcu morbi tempor, ultrices dis. </p>
                    <div className="actions">
                      <a href="">Explore Now</a>
                      <a href="">Create Account</a>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="slider-content">
                <Container>
                  <div className="slider-meta">
                    <span>University experience platform</span>
                    <h2>Discover Your University <br/> Experiences</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, posuere dis posuere aliquet. <br/> Aliquam arcu morbi tempor, ultrices dis. </p>
                    <div className="actions">
                      <a href="">Explore Now</a>
                      <a href="">Create Account</a>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="slider-content">
                <Container>
                  <div className="slider-meta">
                    <span>University experience platform</span>
                    <h2>Discover Your University <br/> Experiences</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, posuere dis posuere aliquet. <br/> Aliquam arcu morbi tempor, ultrices dis. </p>
                    <div className="actions">
                      <a href="">Explore Now</a>
                      <a href="">Create Account</a>
                    </div>
                  </div>
                </Container>
              </div>
            </Slider>
          </div>
        </section>
        {/* banner */}
        
        {/* Hiring */}

        <section className="hiring">
          <Container>
            <div className="hiring-content">
              <Row>
                <Col lg={6}>
                  <div className="hiring-box">
                      <div className="picture">
                        <img src={HiringImg1}/>
                        <div className="actions">
                          <a href="">
                            Apply Now <img src={ApplyIcon}/>
                          </a>
                        </div>
                      </div>
                      <div className="picture">
                        <img src={HiringImg2}/>
                        <div className="dotimage">
                          <img src={dotImage}/>
                        </div>
                      </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="hiring-text">
                    <h2>We’re Hiring</h2>
                    <p>Fable is looking for frontend, backend developers, UI/UX designers, and social media marketers. Get your hands on to real life projects and gain real experience!</p>
                    <div className="club-names">
                      <h4>Club Name</h4>
                      <div className="actions">
                        <a href="">
                          <img src={clubImage}/>FABLE.CO
                        </a>
                      </div>
                      <span>Application Deadline: August 31, 2022</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        {/* Hiring */}

        {/* Events */}
         
         <section className="events">
           <Container>
             <div className="events-content">
                <div className="tophead">
                  <h2 className="section-heading">Featured Events</h2>
                  <p className="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="events-slider">
                <Slider {...mySettings}>
                    <div className="events-box">
                      <div className="box">
                        <div className="picture">
                          <img src={eventsImg1}/>
                          <div className="actions">
                            <a href="">
                              March 20, 2022
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Tamil}/>
                              <div className="title">
                                  Tamil UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <h3>Title of the event is written ...</h3>
                            <p>Short description of the event will be shown here. or part of long description can be shown here as well...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                        <div className="picture">
                          <img src={eventsImg2}/>
                          <div className="actions">
                            <a href="">
                              March 20, 2022
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Deca}/>
                              <div className="title">
                                  DECA UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <h3>Saturday Night DJ Khalid!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                        <div className="picture">
                          <img src={eventsImg3}/>
                          <div className="actions">
                            <a href="">
                              March 20, 2022
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Badminton}/>
                              <div className="title">
                                  UT Badminton
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <h3>Toronto Badminton Tournam..</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                        <div className="picture">
                          <img src={eventsImg1}/>
                          <div className="actions">
                            <a href="">
                              March 20, 2022
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Tamil}/>
                              <div className="title">
                                  Tamil UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <h3>Title of the event is written ...</h3>
                            <p>Short description of the event will be shown here. or part of long description can be shown here as well...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                        <div className="picture">
                          <img src={eventsImg2}/>
                          <div className="actions">
                            <a href="">
                              March 20, 2022
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Deca}/>
                              <div className="title">
                                  DECA UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <h3>Saturday Night DJ Khalid!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                        <div className="picture">
                          <img src={eventsImg3}/>
                          <div className="actions">
                            <a href="">
                              March 20, 2022
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <div className="picture-title">
                            <img src={Badminton}/>
                            <div className="title">
                                UT Badminton
                                <span>@utsgcass</span>
                            </div>
                          </div>
                          <h3>Toronto Badminton Tournam..</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan.</p>
                        </div>
                      </div>
                    </div>
                </Slider>
                </div>
             </div>
           </Container>
         </section>

        {/* Events */}

        {/* Club Events */}

        <section className="club-events events">
          <Container>
          <div className="events-content">
                <div className="tophead">
                  <h2 className="section-heading">Latest Clubs With Events</h2>
                  <p className="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="events-slider">
                <Slider {...clubSlider}>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Cass}/>
                              <div className="title">
                                    UTSG CASS
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              01
                            </div>
                          </div>
                          <div className="body">
                          <h3>Slate & Crystal Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg1}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Deca2}/>
                              <div className="title">
                                  DECA UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              02
                            </div>
                          </div>
                          <div className="body">
                          <h3>Buttercup Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg2}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Tamil2}/>
                              <div className="title">
                                  DECA UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              03
                            </div>
                          </div>
                          <div className="body">
                          <h3>Polished Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg3}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Badminton2}/>
                              <div className="title">
                                  UT Badminton
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              04
                            </div>
                          </div>
                          <div className="body">
                          <h3>Dark Roast Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg4}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Cass}/>
                              <div className="title">
                                    UTSG CASS
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              01
                            </div>
                          </div>
                          <div className="body">
                          <h3>Slate & Crystal Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg1}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Deca2}/>
                              <div className="title">
                                  DECA UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              02
                            </div>
                          </div>
                          <div className="body">
                          <h3>Buttercup Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg2}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Tamil2}/>
                              <div className="title">
                                  DECA UTSG
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              03
                            </div>
                          </div>
                          <div className="body">
                          <h3>Polished Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg3}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="events-box">
                      <div className="box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <img src={Badminton2}/>
                              <div className="title">
                                  UT Badminton
                                  <span>@utsgcass</span>
                              </div>
                            </div>
                            <div className="number">
                              04
                            </div>
                          </div>
                          <div className="body">
                          <h3>Dark Roast Events</h3>
                            <div className="picture">
                              <img src={ClubEventsImg4}/>
                              <div className="date">
                                <span>15 Aug , 2022</span>
                                <h4> <img src={Location} className='location'/> Sugar Camp Road, USA </h4>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </Slider>
                </div>
             </div>
          </Container>
        </section>

        {/* Club Events */}

        {/* Trending Clubs */}

         <section className="trending-clubs">
           <Container>
              <div className="trending-content">
                <div className="tophead">
                  <h2 className="section-heading">Trending Clubs</h2>
                  <p className="section-paragraph">Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </div>
                <div className="trending-grid">
                  <Tabs>
                    <TabList>
                      <Tab className="tab">Mississauga</Tab>
                      <Tab className="tab">TToronto</Tab>
                      <Tab className="tab">Scarborough</Tab>
                    </TabList>
                  <TabPanel>
                    <Row>
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg1}/>
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
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg2}/>
                              </div>
                              <div className="title">
                                <h4>CASS UTSG</h4>
                                <span>Hiphop</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>5.2K</h4>
                              <span>Followers</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg3}/>
                              </div>
                              <div className="title">
                                <h4>Riders United</h4>
                                <span>Academic</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>250m</h4>
                              <span>Followers</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg1}/>
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
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg2}/>
                              </div>
                              <div className="title">
                                <h4>CASS UTSG</h4>
                                <span>Hiphop</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>5.2K</h4>
                              <span>Followers</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg3}/>
                              </div>
                              <div className="title">
                                <h4>Riders United</h4>
                                <span>Academic</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>250m</h4>
                              <span>Followers</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg1}/>
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
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg2}/>
                              </div>
                              <div className="title">
                                <h4>CASS UTSG</h4>
                                <span>Hiphop</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>5.2K</h4>
                              <span>Followers</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6}>
                        <div className="trending-box">
                          <div className="flex-area">
                            <div className="picture-title">
                              <div className="picture">
                                <img src={TrendingImg3}/>
                              </div>
                              <div className="title">
                                <h4>Riders United</h4>
                                <span>Academic</span>
                              </div>
                            </div>
                            <div className="followers">
                              <h4>250m</h4>
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
                                <img src={TrendingImg1}/>
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
                                <img src={TrendingImg1}/>
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
           </Container>
         </section>

        {/* Trending Clubs */}

        {/* Featured Clubs */}

        <section className="featured-clubs">
          <Container>
              <div className="featured-content">
                 <div className="tophead">
                    <h2 className="section-heading">Featured Clubs</h2>
                 </div>
                 <div className="featured-grid">
                  <div className="featured-slider">
                      <Slider {...settings}>
                          <div className="slide-box">
                            <Row>
                              <Col lg={6}>
                                <div className="featured-box">
                                  <div className="picture-con">
                                      <div className="picture">
                                        <img width="100%" src={FeaturedClub}/>
                                        <div className="ventures">
                                           <div className="flex-area">
                                              <div className="square">

                                              </div>
                                              <div>
                                                <h4>SB Ventures</h4>
                                                <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                              </div>
                                           </div>
                                           <div className="flex-area">
                                              <div>
                                                <p>by Lovish  |  Jan 18, 2021</p>
                                              </div>
                                              <div className="square">

                                              </div>
                                           </div>
                                        </div>
                                      </div>
                                      <div className="bottom-area">
                                        <div className="flex-area">
                                          <div className="picture-text d-flex">
                                            <img src={Tamil}/>
                                            <div>
                                              <h4>Tamil UTSG</h4>
                                              <span>@utsgcass</span>
                                            </div>
                                          </div>
                                          <div className="right-text">
                                            <span>by Lovish  |  Jan 18, 2021</span>
                                          </div>
                                        </div>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and  there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the large language ocean there live the blind texts. </p>
                                      </div>
                                  </div>
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="info-area">
                                  <div className="flexarea">
                                      <div className="title">
                                          <h4>Urban Adventurers</h4>
                                          <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                          <span>by Lovish  |  Jan 18, 2021</span>
                                      </div>
                                      <div className="picture">
                                        <img src={Urban}/>
                                      </div>
                                  </div>
                                </div>
                                <div className="info-area">
                                  <div className="flexarea">
                                      <div className="title">
                                          <h4>Urban Profs</h4>
                                          <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                          <span>by Lovish  |  Jan 18, 2021</span>
                                      </div>
                                      <div className="picture">
                                        <img src={Profs}/>
                                      </div>
                                  </div>
                                </div>
                                <div className="info-area">
                                  <div className="flexarea">
                                      <div className="title">
                                          <h4>More Than Foodies</h4>
                                          <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                          <span>by Lovish  |  Jan 18, 2021</span>
                                      </div>
                                      <div className="picture">
                                        <img src={Foodies}/>
                                      </div>
                                  </div>
                                </div>
                                <div className="actions">
                                  <a href="">
                                  View More
                                  </a>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="slide-box">
                            <Row>
                              <Col lg={6}>
                                <div className="featured-box">
                                  <div className="picture-con">
                                      <div className="picture">
                                        <img width="100%" src={FeaturedClub}/>
                                        <div className="ventures">
                                           <div className="flex-area">
                                              <div className="square">

                                              </div>
                                              <div>
                                                <h4>SB Ventures</h4>
                                                <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                              </div>
                                           </div>
                                           <div className="flex-area">
                                              <div>
                                                <p>by Lovish  |  Jan 18, 2021</p>
                                              </div>
                                              <div className="square">

                                              </div>
                                           </div>
                                        </div>
                                      </div>
                                      <div className="bottom-area">
                                        <div className="flex-area">
                                          <div className="picture-text d-flex">
                                            <img src={Tamil}/>
                                            <div>
                                              <h4>Tamil UTSG</h4>
                                              <span>@utsgcass</span>
                                            </div>
                                          </div>
                                          <div className="right-text">
                                            <span>by Lovish  |  Jan 18, 2021</span>
                                          </div>
                                        </div>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and  there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the large language ocean there live the blind texts. </p>
                                      </div>
                                  </div>
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="info-area">
                                  <div className="flexarea">
                                      <div className="title">
                                          <h4>Urban Adventurers</h4>
                                          <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                          <span>by Lovish  |  Jan 18, 2021</span>
                                      </div>
                                      <div className="picture">
                                        <img src={Urban}/>
                                      </div>
                                  </div>
                                </div>
                                <div className="info-area">
                                  <div className="flexarea">
                                      <div className="title">
                                          <h4>Urban Profs</h4>
                                          <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                          <span>by Lovish  |  Jan 18, 2021</span>
                                      </div>
                                      <div className="picture">
                                        <img src={Profs}/>
                                      </div>
                                  </div>
                                </div>
                                <div className="info-area">
                                  <div className="flexarea">
                                      <div className="title">
                                          <h4>More Than Foodies</h4>
                                          <p>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et.</p>
                                          <span>by Lovish  |  Jan 18, 2021</span>
                                      </div>
                                      <div className="picture">
                                        <img src={Foodies}/>
                                      </div>
                                  </div>
                                </div>
                                <div className="actions text-sm-left text-center">
                                  <a href="">
                                  View More
                                  </a>
                                </div>
                              </Col>
                            </Row>
                          </div>
                      </Slider>
                  </div>
                 </div>
              </div>
          </Container>
        </section>

        {/* Featured Clubs */}

        {/* Maps Direction */}

        <section className="map">
          <Container>
            <div className="tophead">
              <h2 className="section-heading">Get Directions </h2>
              <p className="section-paragraph">Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            </div>
            <div className="map-content">
              <Row>
                 <Col lg={5}>
                   <div className="search-events">
                     <div className="form-group">
                        <input type="text" id="" placeholder="Search Event" name="Search Event"/>
                        <img src={SearchMap}/>
                     </div>
                     <div className="search-body">
                        <div className="search-box"> 
                          <div className="picture">
                            <img src={SearchImg1}/>
                            <div className="info">
                               <h4>Tamil UTSG</h4>
                               <span>@utsgcass</span>
                            </div>
                          </div>
                        </div>
                        <div className="search-box"> 
                          <div className="picture">
                            <img src={SearchImg2}/>
                            <div className="info">
                               <h4>DECA UTSG</h4>
                               <span>@utsgcass</span>
                            </div>
                          </div>
                        </div>
                        <div className="search-box"> 
                          <div className="picture">
                            <img src={SearchImg3}/>
                            <div className="info">
                               <h4>UT Badminton</h4>
                               <span>@utsgcass</span>
                            </div>
                          </div>
                        </div>
                        <div className="search-box"> 
                          <div className="picture">
                            <img src={SearchImg1}/>
                            <div className="info">
                               <h4>Tamil UTSG</h4>
                               <span>@utsgcass</span>
                            </div>
                          </div>
                        </div>
                        <div className="search-box"> 
                          <div className="picture">
                            <img src={SearchImg2}/>
                            <div className="info">
                               <h4>DECA UTSG</h4>
                               <span>@utsgcass</span>
                            </div>
                          </div>
                        </div>
                        <div className="search-box"> 
                          <div className="picture">
                            <img src={SearchImg3}/>
                            <div className="info">
                               <h4>UT Badminton</h4>
                               <span>@utsgcass</span>
                            </div>
                          </div>
                        </div>
                     </div>
                   </div>
                 </Col>
                 <Col lg={7}>
                  <div className="picture-map">
                     <img src={Map} width="100%"/>
                  </div>
                 </Col>
              </Row>
            </div>
          </Container>
        </section>

        {/* Maps Direction */}

        {/* Subscribe Now */}

        <section className="subscribe-now">
           <Container>
               <div className="subscribe-content">
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <div className="text">
                          <h2>Subscribe Now & Get News</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  varius lacus vel elit accumsan, sollicitudin rhoncus quam scelerisque.</p>
                      </div> 
                    </Col>
                    <Col lg={6}>
                      <div className="subscribe">
                        <input type="text" id="" placeholder="Your Email Address" name=""/>
                        <a href="">
                        Submit
                        </a>
                      </div> 
                    </Col>
                  </Row>
               </div>
           </Container>
        </section>

        {/* Subscribe Now */}

        {/* Footer */}

        <Footer/>
   
      </div>
    )
}

export default Index;