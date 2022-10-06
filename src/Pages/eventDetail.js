import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import SubscribeNow from '../Components/SubscribeNow';
import Footer from '../Components/Footer';
import {BreadcrumbRight,EventDetailImg,EventDetailImgS,EventDetailSm,HeartBtn,EventDetailGrid,EventsGSm1,EventsGSm2,EventsGSm3,EventsGSm4,EventsGBig,Daytime1,Daytime2,Daytime3} from "../Imports/ImportImages";


function EventDetail() {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autopaly : true,
    dots : true,
    arrows : true,
  };

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
          slidesToScroll : 1,
          variableWidth: true,
        }
      }
    ]
  }

  return (
    <>
    <Header HeaderInside/>
    <div className='eventdetail'>
      <Container>
        <div className='breadcrumb'>
            <a href=''> Home<img src={BreadcrumbRight}/> </a> <a href=''> Event list<img src={BreadcrumbRight}/> </a> <a href='' className='active'>Event Detail</a> 
        </div>
        <div className='eventdetail-main'>
          <div className='picture eventpicture'>
            <img src={EventDetailImg} className="d-md-block d-none" width='100%'/>
            <img src={EventDetailImgS} className="d-md-none" width='100%'/>
          </div>
          <div className='top-area'>
            <div className='flexarea'>
              <div className='picture-con'>
                <div className='picture'>
                  <img src={EventDetailSm}/>
                </div>
                <div className='title'>
                  <h4>NA Carabana <span>Festival/Parade</span></h4>
                  <h5>Follow | <span> Become a Member </span></h5>
                </div>
              </div>
              <div className='actions'>
                <button><img src={HeartBtn}/>Like</button>
                <button>Let’s Go</button>
              </div>
            </div>
            <div className='content'>
              <h3>Two years later, Canada's biggest premium picnic is back!</h3>
              <div className='dates-info'>
                <span>Saturday, August 20, 2022 | 12 noon - 10 pm</span>
                <span>Woodbine Park, 1695 Queen St E</span>
                <span>Ticket Price: $15 Entry Fee</span>
              </div>
              <p>Enjoy the ultimate rosé experience at The Rosé Picnic 2022 ! Sip the best of the best from Ontario’s local & finest rosé wineries as well as global favourites, tune into live music, and indulge in gourmet fare curated by celebrity chef, Mark McEwan and The Food Dudes. Set on the grounds of Woodbine Park in the Beaches of Toronto, you can set up your picnic blanket and dance your heart out to live music and DJs all day!</p>
            </div>
            <div className='eventdetail-grid'>
            <Row>
              <Col lg={6}>
                <div className='box-info'>
                  <h3>Main information <br/> about the event details</h3>
                  <p>About the application; It is completely free, and compared to other platforms, it is easier to navigate and simple to use by anyone. Just register yourself, and then you are just one click away to bring a friend into your life!! <br/>
                  If you are concerned about your privacy, then stop thinking about it. FriendBok knows how important your personal life is. So, we always take care of people’s privacy. Your chat and identity are completely secure here!! We have used the SSL security feature to make your conversation more private and away from the reach of other people. </p>
                  <div className='actions'>
                    <a href=''>
                    View More
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className='picture'>
                  <img src={EventDetailGrid} width="100%"/>
                </div>
              </Col>
            </Row>
          </div>
          </div>
         
        </div>
      </Container>
    </div>
    <div className='events-gallery'>
      <Container>
        <div className='eventgallery-grid'>
          <div className='top-area'>
            <h2 className='section-heading'>Events Gallery</h2>
            <p className='section-paragraph'>Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          </div>
          <div className="eventsGallery-slider custom-setting">
              <Slider {...settings}>
                <div className='events-galleryBox'>
                  <Row>
                    <Col lg={4} style={{display : "flex",justifyContent : "space-between",flexDirection : "column"}}>
                      <div>
                        <img src={EventsGSm1}/>
                      </div>
                      <div>
                      <img src={EventsGSm2}/>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                      <img src={EventsGBig}/>
                      </div>
                    </Col>
                    <Col lg={4} style={{display : "flex",justifyContent : "space-between",flexDirection : "column"}}>
                      <div>
                      <img src={EventsGSm3}/>
                      </div>
                      <div>
                      <img src={EventsGSm4}/>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='events-galleryBox'>
                  <Row>
                    <Col lg={4} style={{display : "flex",justifyContent : "space-between",flexDirection : "column"}}>
                      <div>
                        <img src={EventsGSm1}/>
                      </div>
                      <div>
                      <img src={EventsGSm2}/>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                      <img src={EventsGBig}/>
                      </div>
                    </Col>
                    <Col lg={4} style={{display : "flex",justifyContent : "space-between",flexDirection : "column"}}>
                      <div>
                      <img src={EventsGSm3}/>
                      </div>
                      <div>
                      <img src={EventsGSm4}/>
                      </div>
                    </Col>
                    </Row>
                </div>
              </Slider>
          </div>
        </div>
      </Container>
    </div>
    {/* FAQ */}

    <div className='faq'>
      <Container>
        <div className='faq-content'>
          <h3>FAQs</h3>
        </div>
        <div className='faq-list'>
          <ul>
            <li><span></span> Make a list of all your debts and interest rates. Use online calculators to determine what is the best way to bring these debts down. Perhaps you add additional payments to your higher interest debts for the time being while paying lower amounts on cheaper debt. Adding just a few extra dollars a day could have you debt free sooner.</li>
            <li><span></span> Hate budgets and find them hard to stick to? Try an online budget calculator to at least help you understand where you are at now. It will help you find the money to pay down your debt.</li>
            <li><span></span> Don’t suffer in silence. If your debt is mounting, reach out to a credit counsellor or your Financial Advisor. They’ll not only take the shame and embarrassment out of the mix; they’ll apprise you of blind spots you didn’t even know you had by creating a plan customized to you and the support to execute it.</li>
            <li><span></span> Make a list of all your debts and interest rates. Use online calculators to determine what is the best way to bring these debts down. Perhaps you add additional payments to your higher interest debts for the time being while paying lower amounts on cheaper debt. Adding just a few extra dollars a day could have you debt free sooner.</li>
          </ul>
        </div>
      </Container>
    </div>

    {/* FAQ */}

    {/* other events */}

    <div className='others-events'>
      <Container>
      <h3>Other events you may like</h3>
        <div className='others-eventsSlider custom-setting'>
          <Slider {...clubSlider}>
            <div className='event-grid'>
              <div className='event-box'>
                  <div className='picture'>
                      <img src={Daytime1}/>
                  </div>
                  <div className='info'>
                      <h4>DAYTIME Brunch & Dinner Party Grand
                        <span>Sun, Aug 21, 2:00 PM +3 more Events</span>
                      </h4>
                      <div className='followers'>
                      G.Q Henderson Events <br/>
                      161 Followers
                      </div>
                  </div>
              </div>
            </div>
            <div className='event-grid'>
              <div className='event-box'>
                  <div className='picture'>
                      <img src={Daytime2}/>
                  </div>
                  <div className='info'>
                      <h4>DAYTIME Brunch & Dinner Party Grand
                        <span>Sun, Aug 21, 2:00 PM +3 more Events</span>
                      </h4>
                      <div className='followers'>
                        G.Q Henderson Events <br/>
                        161 Followers
                      </div>
                  </div>
              </div>
            </div>
            <div className='event-grid'>
              <div className='event-box'>
                  <div className='picture'>
                      <img src={Daytime3}/>
                  </div>
                  <div className='info'>
                      <h4>DAYTIME Brunch & Dinner Party Grand
                        <span>Sun, Aug 21, 2:00 PM +3 more Events</span>
                      </h4>
                      <div className='followers'>
                      G.Q Henderson Events <br/>
                      161 Followers
                      </div>
                  </div>
              </div>
            </div>
            <div className='event-grid'>
              <div className='event-box'>
                  <div className='picture'>
                      <img src={Daytime1}/>
                  </div>
                  <div className='info'>
                      <h4>DAYTIME Brunch & Dinner Party Grand
                        <span>Sun, Aug 21, 2:00 PM +3 more Events</span>
                      </h4>
                      <div className='followers'>
                      G.Q Henderson Events <br/>
                      161 Followers
                      </div>
                  </div>
              </div>
            </div>
            <div className='event-grid'>
              <div className='event-box'>
                  <div className='picture'>
                      <img src={Daytime2}/>
                  </div>
                  <div className='info'>
                      <h4>DAYTIME Brunch & Dinner Party Grand
                        <span>Sun, Aug 21, 2:00 PM +3 more Events</span>
                      </h4>
                      <div className='followers'>
                      G.Q Henderson Events <br/>
                      161 Followers
                      </div>
                  </div>
              </div>
            </div>
            <div className='event-grid'>
              <div className='event-box'>
                  <div className='picture'>
                      <img src={Daytime3}/>
                  </div>
                  <div className='info'>
                      <h4>DAYTIME Brunch & Dinner Party Grand
                        <span>Sun, Aug 21, 2:00 PM +3 more Events</span>
                      </h4>
                      <div className='followers'>
                      G.Q Henderson Events <br/>
                      161 Followers
                      </div>
                  </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>

    {/* other events */}

    {/* Subscribe Now */}

    <SubscribeNow/>

    {/* Subscribe Now */}

    {/* Footer */}

    <Footer/>
        
    {/* Footer */}

    </>
  )
}

export default EventDetail;