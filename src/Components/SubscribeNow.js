import React from 'react';
import { Container,Row,Col } from "react-bootstrap";

function SubscribeNow() {
  return (
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
  )
}

export default SubscribeNow