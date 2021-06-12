import React from "react";
import Col from "react-bootstrap/Col";
import "../YoutubeVideo/Youtubevideo.css";

const youtubevideo = (props) => {
  
  return (
      
      <Col xs={12} md={4} lg xl={3} className="d-inline mx-0 w-25 px-0">
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${props.video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
        
      </Col>
    
  );
};

export default youtubevideo;
