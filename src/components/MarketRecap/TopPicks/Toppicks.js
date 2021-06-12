import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toppick from "../TopPick/Toppick";
import "../TopPicks/Toppicks.css";

class Toppicks extends Component {
  state = {
    topPicks: [
      "harmony",
      "bitcoin",
      "cosmos",
      "decentraland",
      "cardano",
      "ethereum",
      "pancakeswap-token",
    ],
    coinData: [],
    trendingNews: [],
    gotCoinData: false,
    gotNewsData: false,
  };

  componentDidMount() {
    this.getTopPickData();
  }

  componentWillUnmount() {}

  getTopPickData = () => {
    for (let i = 0; i <= this.state.topPicks.length - 1; i++) {
      fetch(
        "https://coingecko.p.rapidapi.com/coins/" +
          this.state.topPicks[i] +
          "?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false",
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
          this.setState({ coinData: [...this.state.coinData, data] });
        })
        .then(() => {
          if (i === this.state.topPicks.length - 1) {
            this.setState({
              gotCoinData: true,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  getTrendingNewsData = () => {
    fetch(
      "https://coingecko.p.rapidapi.com/status_updates?category=milestone&page=1&per_page=3",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "61f507d9f7mshe5053b75016ecc5p1435f8jsn50b4856f8a32",
          "x-rapidapi-host": "coingecko.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          trendingNews: [data],
        });
      })
      .then(() => {
        console.log(this.state.trendingNews);
        this.setState({
          gotNewsData: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <Container fluid className="py-3 section-bg">
        <Row className="px-3 justify-content-center">
          <Col md={6} lg xl={4} className="">
            <Row className="justify-content-center section-header">
              <h5>Crypto Verse's Top Picks</h5>
            </Row>
            <Row className="top-picks p-3">
              {this.state.gotCoinData === true ? (
                this.state.coinData.map((coin, idx) => {
                  return (
                    <Toppick
                      key={coin.id}
                      image={coin.image.thumb}
                      name={coin.name}
                      homePage={coin.links.homepage[0]}
                    />
                  );
                })
              ) : (
                <div class="loader">Loading...</div>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Toppicks;
