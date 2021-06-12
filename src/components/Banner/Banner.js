import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cryptoVerseLogo from "../../images/cryptoverse-website-logo.png";
import twitterLogo from "../../images/twitter-logo.png";
import youtubeLogo from "../../images/youtube-logo.png";
import discordLogo from "../../images/discord-logo.jpg";
import "../Banner/Banner.css";

const Banner = (props) => {
  const [marketCap, setMarketCap] = useState(0);
  const [volume, setVolume] = useState(0);
  const [dominance, setDominance] = useState(0);
  const [btcChange, setBtcChange] = useState(0);
  const [ethChange, setEthChange] = useState(0);

  useEffect(() => {
    fetchMarketData();
    fetchCoinData();
  }, []);
  
  function fetchMarketData() {
    fetch("https://coingecko.p.rapidapi.com/global", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "61f507d9f7mshe5053b75016ecc5p1435f8jsn50b4856f8a32",
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMarketCap(dataFormatter(data.data.total_market_cap.usd));
        setVolume(dataFormatter(data.data.total_volume.usd));
        setDominance(data.data.market_cap_percentage.btc);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function fetchCoinData() {
    fetch(
      "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&price_change_percentage=24h&page=1&order=market_cap_desc",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "61f507d9f7mshe5053b75016ecc5p1435f8jsn50b4856f8a32",
          "x-rapidapi-host": "coingecko.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBtcChange(data[0].market_cap_change_percentage_24h);
        setEthChange(data[1].market_cap_change_percentage_24h);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const dataFormatter = (num) => {
    let numInt = num.toFixed(0);
    return numInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const smallScreenLayout = (
    <marquee className="h-100">
      <h6>Market cap:</h6>
      <p>{`$${marketCap}`}</p>
      <h6>24h Vol:</h6> <p>{`$${volume}`}</p>
      <h6>Dominance:</h6>
      <p>{`BTC:${dominance.toFixed(2)}%`}</p>
      <h6>BTC 24h:</h6>
      <p className={btcChange >= 0 ? 'text-success' : 'text-danger'}>{`${btcChange.toFixed(2)}%`}</p>
      <h6>ETH 24h:</h6>
      <p className={ethChange >= 0 ? 'text-success' : 'text-danger'}>{`${ethChange.toFixed(2)}%`}</p>
    </marquee>
  );

  const largeScreenLayout= (
    <div className='h-100'>
      <h6>Market cap:</h6>
      <p>{`$${marketCap}`}</p>
      <h6>24h Vol:</h6> <p>{`$${volume}`}</p>
      <h6>Dominance:</h6>
      <p>{`BTC:${dominance.toFixed(2)}%`}</p>
      <h6>BTC 24h:</h6>
      <p className={btcChange >= 0 ? 'text-success' : 'text-danger'}>{`${btcChange.toFixed(2)}%`}</p>
      <h6>ETH 24h:</h6>
      <p className={ethChange >= 0 ? 'text-success' : 'text-danger'}>{`${ethChange.toFixed(2)}%`}</p>
    </div>
  );

  
  
 
  return (
    <Container fluid className="p-0">
      <Row className="align-items-center ml-0 logo-container">
        <Col className="d-flex flex-column align-items-start pl-0">
          <ul>
            <li>
              <img src={cryptoVerseLogo} />
            </li>
            <li className="logo">CryptoVerse</li>
          </ul>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-end">
          <ul className="socials">
            <li>
              <a href={props.twitterLink}>
                <img src={twitterLogo} />
              </a>
            </li>
            <li>
              <a href={props.youtubeLink}>
                <img src={youtubeLogo} />
              </a>
            </li>
            <li>
              <a href={props.discordLink}>
                <img src={discordLogo} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="market-recap ml-0 p-0">
        <Col className="px-0">
          {window.screen.width < 992 ? smallScreenLayout : largeScreenLayout}
        </Col>
      </Row>
      <Row className="banner"></Row>
    </Container>
  );
};

export default Banner;
