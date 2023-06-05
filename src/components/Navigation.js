import React from "react";
import { Navbar, Container, Col, Nav } from "react-bootstrap";

export default function Navigation() {
  const bgNavbar = {
    backgroundColor: "#11A662",
    color: "white",
  };

  return (
    <div>
      <Navbar style={bgNavbar}>
        <Container>
          <Col
            className="d-flex"
            style={{ justifyContent: "space-between", color: "white" }}
          >
            <Navbar.Brand href="#home">
              <h2 style={{ color: "white" }}>Kasir</h2>
            </Navbar.Brand>
            <Nav
              className="text-white d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-white">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Pricing
              </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
