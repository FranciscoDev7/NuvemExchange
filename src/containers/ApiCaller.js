import React, { Component } from "react";
import Header from "../components/Header/Header";
import DashBoard from "./DashBoard";
import axios from "axios";
import SideNav from "../components/Header/SideNav";
import UpdatePrices from "../containers/UpdatePrices";
import TopTokens from "../containers/TopTokens";

const URL_ETH = "https://api.1inch.exchange/v3.0/1";
const URL_BNC = "https://api.1inch.exchange/v3.0/56";

class ApiCaller extends Component {
  state = {
    loading: false,
    sideNav: false,
    topTokens: false,

    gasPrice: "",
    networkFee: "",
    fromAmount: "",
    toAmount: "",

    fromToken: {
      id: "",
      symbol: "",
      name: "",
      address: "",
      decimals: "",
      logoURI: "",
    },
    toToken: {
      id: "",
      symbol: "",
      name: "",
      decimals: 18,
      address: "",
      logoURI: "",
    },

    tokens: [
      {
        id: "",
        symbol: "",
        name: "",
        address: "",
        decimals: "",
        logoURI: "",
      },
    ],
    filteredTokens: [
      {
        id: "",
        symbol: "",
        name: "",
        address: "",
        decimals: "",
        logoURI: "",
      },
    ],
  };
  toggleTopTokens=()=>{
  this.setState({topTokens:true})
  }

  toggleSideNav = () => {
    this.setState({ sideNav: !this.state.sideNav });
  };

  Breakspinner = () => {
    this.setState({ loading: false });
  };

  loadSpinner = () => {
    this.setState({ loading: true });
  };

  reset = () => {
    const tokens = this.state.tokens;
    this.setState({ filteredTokens: tokens, toAmount: "", fromAmount: "" });
  };

  userInput = (value) => {
    this.setState({ fromAmount: value });

    if (this.state.fromToken.id !== "" && this.state.toToken.id !== "") {
      this.loadSpinner();
      setTimeout(() => {
        let amount = this.state.fromAmount;

        if (amount === value) {
          setTimeout(() => {
            this.callGasFeePrice();
          }, 200);
        }
      }, 800);
    }
  };

  callGasFeePrice = async () => {
    const value = this.state.fromAmount;
    const gasPrice = this.state.gasPrice;
    const fromToken = this.state.fromToken;
    const toToken = this.state.toToken;
    const decimals = fromToken.decimals;
    let amount = value;
    amount = parseFloat(amount);
    let url = null;

    if (decimals <= 8) amount = amount * 10 ** decimals;
    if (decimals > 8) {
      amount = amount.toFixed(9);
      amount = amount * 10 ** 9;
      let zeros = 10 ** (decimals - 9);
      zeros = zeros.toString();
      zeros = zeros.substring(1);
      amount = `${amount}${zeros}`;
    }
    let URL_FEE_PRICE = URL_ETH + "/quote?";
    if (this.props.binance) {
      URL_FEE_PRICE = URL_BNC + "/quote?";
    }

    url = `${URL_FEE_PRICE}fromTokenAddress=${fromToken.address}&toTokenAddress=${toToken.address}&amount=${amount}`;
    if (amount > 0) {
      try {
        let Response = await axios.get(url);
        let toAmount = Response.data.toTokenAmount;
        toAmount /= 10 ** toToken.decimals;

        let estimatedGas = Response.data.estimatedGas;
        const totalFee = (estimatedGas * gasPrice) / 10 ** 18;

        this.setState({ toAmount, networkFee: totalFee });
      } catch (error) {
        alert(error);
      }
    }
    if (amount <= 0) {
      this.reset();
    }
    this.Breakspinner();
  };

  gasPrice = async () => {
    let gasPriceURL = "";
    if (this.props.binance) {
      gasPriceURL = await axios.get(
        URL_BNC +
          "/approve/calldata?amount=10000000000&tokenAddress=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      );
    } else {
      gasPriceURL = await axios.get(
        URL_ETH +
          "/approve/calldata?amount=10000000000&tokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f"
      );
    }

    const gasPrice = gasPriceURL.data.gasPrice;
    this.setState({ gasPrice });
  };

  buyToken = (token) => {
    this.setState({toToken:token, topTokens:false})
  };

  chooseToken = (token) => {
    const tokenYouSearch = token.tokenYouSearch;
    if (tokenYouSearch === "youPay") {
      this.setState({ fromToken: token, mode: false });
      this.callTokenPrice(token, this.state.toToken);
    }
    if (tokenYouSearch === "youReceive") {
      this.setState({ toToken: token, mode: false });
      this.callTokenPrice(this.state.fromToken, token);
    }
  };

  switchTokens = () => {
    let newTokenYouPay = this.state.fromToken;
    let newTokenyouReceive = this.state.toToken;

    this.setState({ fromToken: newTokenyouReceive, toToken: newTokenYouPay });
    this.reset();
    this.callTokenPrice(newTokenyouReceive, newTokenYouPay);
  };

  callTokenPrice = (fromToken, toToken) => {
    this.props.tokenPrice(fromToken, toToken);
  };

  filterTokenList = (e) => {
    let stringValue = e.toUpperCase();
    const symbolList = this.state.tokens.map((value) => value.symbol);

    let list = symbolList.filter((symbolList) =>
      symbolList.includes(stringValue)
    );

    const tokenList = this.state.tokens;

    let filteredList = [];
    tokenList.forEach((value) => {
      let token = list.filter((list) => list === value.symbol);
      if (token.length >= 1) {
        filteredList.push(value);
      }
    });

    this.setState({
      filteredTokens: filteredList,
    });
  };

  componentDidMount = async () => {
    let url = URL_ETH + "/tokens";
    if (this.props.binance) url = URL_BNC + "/tokens";

    let tokenArray = [];
    let tokensResponse = await axios.get(url);

    let tokensData = tokensResponse.data.tokens;
    let tokenID = Object.keys(tokensData);
    tokenArray = tokenID.map((ID) => ({
      id: ID,
      symbol: tokensData[ID].symbol,
      name: tokensData[ID].name,
      decimals: tokensData[ID].decimals,
      address: tokensData[ID].address,
      logoURI: tokensData[ID].logoURI,
    }));
    //Preset
    let fromToken = tokenArray.filter(
      (token) => token.id === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    );
    fromToken = fromToken[0];
    /// Sorting order
    let tokenSymbol = tokenArray.map((value) => value.symbol);

    tokenSymbol = tokenSymbol.sort();

    let tokens = [];
    tokenSymbol.forEach((value) => {
      let token = tokenArray.filter((token) => value === token.symbol);

      tokens.push(token[0]);
    });

    this.setState({
      tokens,
      filteredTokens: tokens,
      fromToken,
    });

    this.gasPrice();
  };

  render() {
    return (
      <>
        <Header
          tradingPage={this.props.tradingPage}
          user={this.props.user}
          userLog={this.props.userLog}
          binance={this.props.binance}
          toggleTopTokens = {this.toggleTopTokens}
        />
        <SideNav
          toggleSideNav={this.toggleSideNav}
          sideNav={this.state.sideNav}
          binance={this.props.binance}
          userAddress={this.props.userAddress}
          accountBalance={this.props.accountBalance}
          ethBRL={this.props.ethBRL}
          fromToken={this.state.fromToken}
          balances={this.props.balances}
        />
        <UpdatePrices
          updateGas={this.gasPrice}
          updateTokensPrices={this.props.updateTokensPrices}
        />
        {}
        {this.state.topTokens===false?(
        <DashBoard
          tokenList={this.state.filteredTokens}
          chosenToken={this.chooseToken}
          toToken={this.state.toToken}
          fromToken={this.state.fromToken}
          filterTokenList={this.filterTokenList}
          switchTokens={this.switchTokens}
          userLog={this.props.userLog}
          reset={this.reset}
          userInput={this.userInput}
          fromAmount={this.state.fromAmount}
          toAmount={this.state.toAmount}
          loading={this.state.loading}
          user={this.props.user}
          gasPrice={this.state.gasPrice}
          networkFee={this.state.networkFee}
          fromBRL={this.props.fromBRL}
          toBRL={this.props.toBRL}
          ethBRL={this.props.ethBRL}
          binance={this.props.binance}
          userAddress={this.props.userAddress}
          web3={this.props.web3}
        />):null}
       
        {this.state.topTokens ? (
          <TopTokens tokens={this.state.tokens} buyToken={this.buyToken} />
        ) : null}
      </>
    );
  }
}

export default ApiCaller;
