import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import api from "helper/Api";
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const SliderOne = ({ slider }) => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {slider
          ? slider.map((element, index) => (
              <SwiperSlide key={index}>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${element.image_url})` }}
                ></div>
                <Container>
                  <Row>
                    <Col lg={12} className="text-center">
                      <p className="main-slider__subtext">
                        {element.subtitles}
                      </p>
                      <h3 className="main-slider__title">{element.title}</h3>

                      <Link href={element.button_url}>
                        <a className={`common_btn`}>
                          <span>{element.button}</span>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            ))
          : ""}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default SliderOne;
