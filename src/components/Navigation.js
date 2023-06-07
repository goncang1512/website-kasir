import React from "react";
import { Navbar, Container, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Nav.Link as={Link} to="/" className="btn btn-success text-white">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/menulist"
                className="btn btn-success text-white"
              >
                Menu
              </Nav.Link>
              <Nav.Link className="btn btn-success text-white">
                Features
              </Nav.Link>
              <Nav.Link
                href="https://github.com/goncang1512"
                className="btn btn-success text-white"
              >
                Open Source
              </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
