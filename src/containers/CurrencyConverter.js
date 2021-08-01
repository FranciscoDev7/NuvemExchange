import React, { Component } from 'react'
import axios from 'axios'
import ApiCaller from"./ApiCaller"

export class CurrencyConverter extends Component {
    state={
        fromBRL:"",
        toBRL:"",
        ethBRL:"",
        tokens:""
    }
    getEthPrice = async () =>{
        let url = ""
        let ethPrice = ""
        if (this.props.binance){url = "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=brl"
        ethPrice = await axios.get(url)
        ethPrice = ethPrice.data.binancecoin.brl}
        else{url="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl"
        ethPrice = await axios.get(url)
        ethPrice = ethPrice.data.ethereum.brl

    }
       
        this.setState({ethBRL:ethPrice})
        
    }

    getToken = (fromToken, toToken) =>{
        const fromTokenSymbol = fromToken.symbol.toLowerCase()
        const toTokenSymbol = toToken.symbol.toLowerCase()
        const tokenList = this.state.tokens
        fromToken = tokenList.filter((token)=>(token.symbol===fromTokenSymbol))
        toToken = tokenList.filter((token)=>(token.symbol===toTokenSymbol))
        fromToken = fromToken[0]
        toToken = toToken[0]
        if(fromToken && toToken) {
        this.tokenPrice(fromToken.id, toToken.id);
        }
       
    }

    tokenPrice = async (fromToken,toToken) =>{
        const url = "https://api.coingecko.com/api/v3/simple/price?ids="
        const fromTokenURL = `${url}${fromToken}&vs_currencies=brl`
        const toTokenURL = `${url}${toToken}&vs_currencies=brl`
        let fromTokenResponse = await axios.get(fromTokenURL)
        fromTokenResponse = fromTokenResponse.data[fromToken].brl
        let toTokenResponse = await axios.get(toTokenURL)
        toTokenResponse = toTokenResponse.data[toToken].brl
        this.setState({fromBRL:fromTokenResponse, toBRL:toTokenResponse})
       
    }

     componentDidMount = async () => {
        const url = "https://api.coingecko.com/api/v3/coins/list"
        let tokens = await axios.get(url)
        tokens = tokens.data
        this.setState({tokens})
        this.getEthPrice();
    } 

    render() {
        
        return (
            <ApiCaller
            tradingPage 
            updateTokensPrices = {this.componentDidMount}
            user={this.props.user}
            userLog={this.props.userLog}
            binance={this.props.binance}
            tokenPrice = {this.getToken}
            fromBRL={this.state.fromBRL}
            toBRL={this.state.toBRL}
            ethBRL={this.state.ethBRL}
            userAddress={this.props.userAddress}
            accountBalance = {this.props.accountBalance}
            web3 = {this.props.web3}
            balances = {this.props.balances}
            />
           
        )
    }
}

export default CurrencyConverter
