import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ClientCarouselData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination]);

const ClientCarouselOne = ({ clientcarousel,carouselimg }) => {
  const { sectionContent, items } = ClientCarouselData;
  // const { title, subTitle, text } = sectionContent;

  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#client-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };

  return (
    <section className="commonSection client">
      <Container>
        <Row>
          {clientcarousel
            ? clientcarousel.map((element) => {
                return (
                  <Col lg={12} className="text-center">
                    <h4 className="sub_title">{element.subtitle}</h4>
                    <h2 className="sec_title">{element.title}</h2>
                    <p className="sec_desc">{element.text}</p>
                  </Col>
                );
              })
            : ""}
        </Row>
        <Row>
          <Col lg={12}>
            <Swiper className="client_slider" {...carouselOptions}>
             
            
           
            {carouselimg? 
           carouselimg.map((element, index) => (
                    <SwiperSlide key={index}>
                      <div className="singleClient">
                       
                        <Link href={element.link_url}>
                          <a>
                            <img src={element.image_url} alt="" />
                          </a>
                        </Link>
                      </div>
                    </SwiperSlide>
                  )):""
           }
              
              <div
                className="swiper-pagination"
                id="client-carousel-pagination"
              ></div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientCarouselOne;
