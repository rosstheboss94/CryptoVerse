import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../TopPick/Toppick.css";

const Toppick = (props) => {

  return (
    <Container fluid className="recap-data  mb-1">
      <Row>
        <Col xs={6} md={6} className="text-left px-0">
          <img className="coin-image" src={props.image} />
          <h6 className="d-inline-block">{props.name}</h6>
        </Col>
        <Col className="justify-content-end learn-more pr-0 d-flex">
          <button>
            <a href={props.homePage}>Learn More</a>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Toppick;
