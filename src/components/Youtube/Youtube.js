import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Media from "react-bootstrap/Media";
import Youtubevideo from "./YoutubeVideo/Youtubevideo";
import cryptoVerseLogo from "../../images/cryptoverse-website-logo.png";
import "../Youtube/Youtube.css";
import { Col } from "react-bootstrap";

class Youtube extends Component {
  state = {
    key: "AIzaSyD3M0LU5Bu0lZ2eiawPuEZqMAEkzge6U14",
    channelId: "UCstIqdk5lHwH4-GFOpwLrOA",
    channelPart: "snippet,contentDetails,statistics",
    part: "snippet",
    maxResults: 8,
    videoIdList: [],
    channelPic: "",
    subscriberCount: 0,
    viewCount: 0,
    videoCount: 0,
  };

  componentDidMount() {
    this.getYoutubeData();
    this.getChannelData();
  }

  getYoutubeData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${this.state.key}&part=${this.state.part}&channelId=${this.state.channelId}&maxResults=${this.state.maxResults}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let i = 0; i < this.state.maxResults; i++) {
          this.setState({
            videoIdList: [...this.state.videoIdList, data.items[i].id.videoId],
          });
        }
      });
  };

  getChannelData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=${this.state.key}&part=${this.state.channelPart}&id=${this.state.channelId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((channeldata) => {
        this.setState({
          channelPic: channeldata.items[0].snippet.thumbnails.default,
          subscriberCount: channeldata.items[0].statistics.subscriberCount,
          viewCount: channeldata.items[0].statistics.viewCount,
          videoCount: channeldata.items[0].statistics.videoCount,
        });
      });
  };

  render() {
    let videos = [];

    const DOT = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-dot"
        viewBox="0 0 16 16"
      >
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    );
    const smallScreenLayout = (
      <Container className='w-75'>
        <Row className='justify-content-center'>
          <img
            src={cryptoVerseLogo}
            className="youtube-logo"
            alt="..."
          />
        </Row>
        <Row className='justify-content-center'>
          <h5>CryptoVerse</h5>
        </Row>
        <Row className='justify-content-center'>
          <p>
            {this.state.subscriberCount} Subscribers {DOT}{" "}
            {this.state.videoCount} Videos {DOT} {this.state.viewCount} Views
          </p>
        </Row>
      </Container>
    );

    const largeScreenLayout = (
      <Media className="w-75 mx-auto">
        <img
          src={cryptoVerseLogo}
          className="youtube-logo mr-3 py-2"
          alt="..."
        />
        <Media.Body className="d-inline-flex flex-column align-items-start">
          <h5>CryptoVerse</h5>

          <p>
            {this.state.subscriberCount} Subscribers {DOT}{" "}
            {this.state.videoCount} Videos {DOT} {this.state.viewCount} Views
          </p>
        </Media.Body>
      </Media>
    );

    if (window.screen.width <= 576) {
      videos = <Youtubevideo video={this.state.videoIdList[0]} />;
    } else if (window.screen.width > 576 && window.screen.width <= 768) {
      for (let i = 0; i < 6; i++) {
        videos.push(<Youtubevideo video={this.state.videoIdList[i]} key={i} />);
      }
    } else {
      videos = this.state.videoIdList.map((video, idx) => {
        return <Youtubevideo video={video} key={idx} />;
      });
    }

    return (
      <Container fluid className="youtube py-3 bg">
        <Row className="justify-content-center">
          <h3>Latest from Youtube:</h3>
        </Row>
        {window.screen.width <= 576 ? smallScreenLayout : largeScreenLayout}
        <Row className="d-inline-flex w-75">{videos}</Row>
      </Container>
    );
  }
}

export default Youtube;
