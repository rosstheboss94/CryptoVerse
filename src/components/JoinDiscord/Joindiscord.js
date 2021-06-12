import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../JoinDiscord/Joindiscord.css";

const joindiscord = (props) => {
  let chatImage = "https://cdn.vox-cdn.com/thumbor/H1Zh1SkjaCuQ-JiZU67FD9F3IbU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22409287/Audience.png"
  return (
    <Container fluid className="w-75 py-3">
      <Row className="h-100 justify-content-center">
        <Col xs={12} lg xl={6} className="d-inline-flex align-items-center justify-content-center">
         <img className="discord-img" src={chatImage}/>
         </Col>
        <Col lg xl={6} className="d-flex flex-column align-items-center justify-content-center section-header">
          <Row><h3>Be Apart of My Free Discord Community!</h3></Row>
          <Row><a href={props.discordLink}><Button variant="dark" className="join-discord">Join Now</Button></a></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default joindiscord;
