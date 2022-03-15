import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData } from "@/data";

const PortfolioHome = ({ portfolio }) => {
  const { sectionContent } = PortfolioHomeData;
  return (
    <section className="commonSection porfolio">
      <Container>
        <Row>
          {portfolio
            ? portfolio.map((element) => {
                return (
                  <Col key={element._id} lg={12} className="text-center">
                    <h4 className="sub_title">{element.subtitle}</h4>
                    <h2 className="sec_title black">{element.title}</h2>
                    <p className="sec_desc color_aaa">{element.text}</p>
                  </Col>
                );
              })
            : ""}
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData
                ? PortfolioData.map((post, index) => (
                    <Col lg={4} md={6} sm={12} key={index}>
                      <PortfolioCard data={post} />
                    </Col>
                  ))
                : ""}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;
