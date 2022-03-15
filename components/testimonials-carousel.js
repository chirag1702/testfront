import React, { useState } from "react";
import SwiperCore, { Autoplay, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsOneData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/swiper-bundle.min.css";
import moment from "moment";

SwiperCore.use([Autoplay, Thumbs, Pagination]);

const TestimonialsOneCarousel = ({testimonialHeader,testimonialCrousal}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 0,
    speed: 1400,
    pagination: {
      el: "#testimonials-carousel-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    }
  };
  const { sectionContent, posts } = TestimonialsOneData;
  return (
    <section className="commonSection testimonial_2">
      <Container>
        <Row className="testimoniTab">
          <Col lg={5}>
              {
                testimonialHeader ?
                    testimonialHeader.map((element)=>{
                   return(
                     <>
                    <h4 className="sub_title color_aaa">{element.subtitle}</h4>
                    <h2 className="sec_title white">{element.title}</h2>
                    </>
                   )
                 }):""
              }
            
            <Swiper
              id="testimonial_2_thumb"
              onSwiper={setThumbsSwiper}
              {...testimonialsThumbOptions}>
                {
                  testimonialCrousal ?
                   testimonialCrousal.map((element,index)=>{
                     return(
                      <SwiperSlide key={element._id}>
                      <div className="control_item">
                        <a href={`#tab_${index}`} data-toggle="tab">
                          <span>
                            <img src={element.image_url} alt={element.name} />
                          </span>
                          <div className="author_detail">
                            <h5>{element.name}</h5>
                            <h6>{element.position}</h6>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                     )
                   }):""

                }
              {/*                 
              {posts.map(({ name, designation, image }, index) => (
                <SwiperSlide key={index}>
                  <div className="control_item">
                    <a href={`#tab_${index}`} data-toggle="tab">
                      <span>
                        <img src={image} alt={name} />
                      </span>
                      <div className="author_detail">
                        <h5>{name}</h5>
                        <h6>{designation}</h6>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))} */}
            </Swiper>
          </Col>
          <Col lg={7}>
            <div
              className="swiper-pagination"
              id="testimonials-carousel-pagination"
            ></div>
            <div className="tab-content">
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                {...testimonialsOptions}
              >
                {
                  testimonialCrousal?
                    testimonialCrousal.map((element,index)=>{
                    
                      return(
                      <SwiperSlide key={index}>
                        <div className="testi_con">
                          <p>{element.feedback}</p>
                          <span>{moment(element.createdAt).format("DD-MM-YYYY")}</span>
                        </div>
                      </SwiperSlide>)
                    }):""
                }
                {/* {posts.map(({ content, date }, index) => (
                  <SwiperSlide key={index}>
                    <div className="testi_con">
                      <p>{content}</p>
                      <span>{date}</span>
                    </div>
                  </SwiperSlide>
                ))} */}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsOneCarousel;
