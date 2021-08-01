import React, { Component } from "react";
import Section from "../components/Section/Section";
import axios from "axios";
import TokenList from "../components/TopTokens/TokenList";

class TopTokens extends Component {
  state = { tokens: [],

};

  chosenToken = (token) => {
    const swapTokens = this.props.tokens;
    const chosenToken = swapTokens.filter(value=>value.symbol === token.symbol)
    this.props.buyToken(chosenToken[0])
  };

  componentDidMount = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=200&page=1&sparkline=false";
    let rawData = await axios.get(url);
    rawData = rawData.data;
    const rankTokens = rawData.map((value) => ({
      name: value.name,
      symbol: value.symbol.toUpperCase(),
      rank: value.market_cap_rank,
      logo: value.image,
      price: value.current_price,
      marketCap: value.market_cap,
    }));
    const swapTokens = this.props.tokens;

    let tokens = [];
    rankTokens.forEach((value) => {
      let token = swapTokens.filter((token) => value.symbol === token.symbol);
      if (token[0] !== undefined) {
        tokens.push(value);
      }
    });


    this.setState({ tokens });
  };
  render() {

    return (
      <Section>
       <TokenList tokens={this.state.tokens} chosenToken={this.chosenToken} />
      </Section>
    );
  }
}

export default TopTokens;
