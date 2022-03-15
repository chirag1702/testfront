import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ParallaxOneData } from "@/data";

const ParallaxOne = ({parallaxOne}) => {
  const { iconName, title, specialText, text } = ParallaxOneData;
  return (
    <>
      {
        parallaxOne?
        parallaxOne.map((element) =>{
            return(
              <section style={{ backgroundImage: `url(${element.image_url})` }} className="commonSection testimonial"   >
        
              <Container  >
              
                <Row>
                  <Col lg={{ span: 10, offset: 1 }} sm={12} className="text-center">
                    <div className="testimonial_content">
                      <div className="testi_icon">
                        <i className={iconName}></i>
                      </div>
                      <h2>
                        {element.quote}
                        
                      </h2>
                      <p>{element.text}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            )
          }):""
      }
      
    </>
    
  );
};

export default ParallaxOne;
