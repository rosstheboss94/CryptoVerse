import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import twitterLogo from "../../images/twitter-logo.png";
import youtubeLogo from "../../images/youtube-logo.png";
import discordLogo from "../../images/discord-logo.jpg";
import '../Footor/Footor.css';

const footor = (props) => {
    return(
        <Container fluid className="footor py-3">
            <Row className="justify-content-center"><h3>FOLLOW ME ON MY SOCIALS:</h3></Row>
            <Row className="h-100">
                <Col className="d-flex justify-content-center  align-items-center">
                <a href={props.twitterLink}><img className="socials-img" src={twitterLogo}/></a>
                <a href={props.youtubeLink}><img className="socials-img" src={youtubeLogo}/></a>
                <a href={props.discordLink}><img className="socials-img" src={discordLogo}/></a>
                </Col>
                
            </Row>
        </Container>
    );
};

export default footor;