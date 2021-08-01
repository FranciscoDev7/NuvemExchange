import React, { Component } from "react";
import Moralis from "moralis";
import ModalError from "../components/Error/ModalError";
import CurrencyConverter from "../containers/CurrencyConverter";

Moralis.initialize("ZZDr8C572SYDqfPyHPpg2CXJ3B0pkotezCVNFj3l");
Moralis.serverURL = "https://yuqcuktpwrdn.moralis.io:2053/server";




class TradingBnc extends Component {
  state = {
    user: null,
    web3: "",
    noWallet: false,
    errorCode: "",
    userAddress: "",
    accountBalance:"",
    balances:[]
  };

  userLog = () => {
    const user = this.state.user;
    if (user === null) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  };

  onLogin = async () => {
    let userAddress = null;
    try {
      const user = await Moralis.authenticate();
      userAddress = Moralis.User.current().get("ethAddress");
      const options = { chain: 'bsc', address: userAddress }
      const balances = await Moralis.Web3.getAllERC20(options);
      this.setState({ user, userAddress, balances });
      
      } catch (error) {
      this.setState({ noWallet: true, errorCode: error });
      
    }
    try {
      const web3 = await Moralis.Web3.enable();
      const accountBalance = await web3.eth.getBalance(userAddress)
      this.setState({web3, accountBalance})
      console.log(accountBalance)
      
    } catch (error) {
  
    }
  };
  onLogout = () => {
    Moralis.User.logOut();
    this.setState({ user: null });
    
  };


  render() {
    return (
      <>
        <ModalError
          openErrorMode={this.state.noWallet}
          errorCode={this.state.errorCode}
          closeErrorMode={() => {
          this.setState({ noWallet: false });
          }}
        />
        <CurrencyConverter
          tradingPage
          user={this.state.user}
          userLog={this.userLog}
          userAddress={this.state.userAddress}
          web3 = {this.state.web3}
          accountBalance = {this.state.accountBalance}
          balances = {this.state.balances}
          binance
        />
      </>
    );
  }
}

export default TradingBnc;
