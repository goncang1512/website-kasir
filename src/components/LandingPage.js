import React, { useState } from "react";
import "./components.css";
import Navbar from "./Navigation";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import dataMenu from "../datamenu";
import Slick from "./Slick";
import "./components.css";

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="navbar-home">
        <Navbar />
      </div>
      <div className="carosusel">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={true}
          className=".carousel-indicators"
        >
          {dataMenu.imgCarousel.map((caraousel) => {
            return (
              <Carousel.Item interval={5000} className="caraousel-container">
                <img
                  className="d-block w-100"
                  src={caraousel.images}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1 className="text-white">{caraousel.tittle}</h1>
                  <p className="text-white">{caraousel.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <Container className="project-caraousel">
        <Row className="">
          <Col className="left-project">
            <Slick />
          </Col>
        </Row>
      </Container>
    </>
  );
}
