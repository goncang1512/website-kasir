import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataMenu from "../datamenu";
import "./components.css";
import { Container, Card, Button, Modal, Alert } from "react-bootstrap";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        color: "red",
      }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const [showKomposisi, setShowKomposisi] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState(null);

  function komposisiFood(populerId) {
    const selectedFood = dataMenu.menuPopuler.find(
      (populer) => populer.id === populerId
    );

    if (selectedFood) {
      return (
        <Modal
          show={showKomposisi && selectedFoodId === populerId}
          onHide={() => setShowKomposisi(false)}
          className="modal-alert"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedFood.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedFood.komposisi}</Modal.Body>
        </Modal>
      );
    }

    return null;
  }

  return (
    <div>
      <div>
        <h2 className="pt-5 pb-3">Populer</h2>
        <Slider {...settings}>
          {dataMenu.menuPopuler.map((populer) => {
            return (
              <Container
                className="px-5 d-flex justify-content-space-evenly align-items-stretch"
                style={{ height: "100%" }}
                key={populer.id}
              >
                <Card style={{ width: "18rem", height: "500px" }}>
                  <Card.Img
                    variant="top"
                    src={populer.foto}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex  flex-column justify-content-between">
                    <Card.Title>{populer.name}</Card.Title>
                    <Card.Text>{populer.text}</Card.Text>
                    {komposisiFood()}
                    <Button
                      onClick={() => {
                        setShowKomposisi(true);
                        setSelectedFoodId(populer.id);
                      }}
                      className="button-composisi"
                      variant="primary"
                      data-name-id={populer.id}
                    >
                      Komposisi
                    </Button>
                  </Card.Body>
                </Card>
              </Container>
            );
          })}
        </Slider>
      </div>
      {dataMenu.menuPopuler.map((populer) => komposisiFood(populer.id))}
    </div>
  );
}
export default Carousel;
