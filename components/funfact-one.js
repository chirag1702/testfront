import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunfactData } from "@/data";

const FunfactOne = ({ Funfact }) => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="commonSection funfact">
      <Container>
        <Row>
          {Funfact
            ? Funfact.map((element) => {
                return (
                  <Col lg={3} md={6} sm={12} key={element._id}>
                    <div className="singlefunfact text-center">
                      <h1 className="timer">
                        <span className="countSpan"></span>
                        <VisibilitySensor
                          onChange={onVisibilityChange}
                          offset={{ top: 10 }}
                          delayedCall
                        >
                          <CountUp
                            end={counter.startCounter ? element.number : 0}
                          />
                        </VisibilitySensor>
                      </h1>
                      <h3>{element.title}</h3>
                    </div>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
    </section>
  );
};

export default FunfactOne;
