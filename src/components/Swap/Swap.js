import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios"



let approveURL = "https://api.1inch.exchange/v3.0/1/approve/calldata?"
let callURL = "https://api.1inch.exchange/v3.0/1/swap?"

const Swap = (props) => {
  let web3 = props.web3  
    if(props.binance){
      approveURL="https://api.1inch.exchange/v3.0/56/approve/calldata?"
      callURL = "https://api.1inch.exchange/v3.0/56/swap?"
    }
    let ADDRESS = props.userAddress
    let amount = props.fromAmount
    const toTokenAddress=props.toToken.address
    let fromTokenAddress=props.fromToken.address
    const decimals = props.toToken.decimals 
  
    
    if (decimals <= 8) amount = amount * 10 ** decimals;
    if (decimals > 8) {
      amount = parseFloat(amount).toFixed(9);
      amount = amount * 10 ** 9;
      let zeros = 10 ** (decimals - 9);
      zeros = zeros.toString();
      zeros = zeros.substring(1);
      amount = `${amount}${zeros}`;
    }


    const driver = async () => {
        let blockHash = null
        let globalData = await approveApiCaller(approveURL, amount, fromTokenAddress, "0xfe");
        alert("loading")
          try{blockHash = await web3.eth.sendTransaction(globalData)
            const hash = blockHash.transactionHash
            const receipt = web3.eth.getTransactionReceipt(hash)
            console.log(receipt)
            alert(receipt)
          }
          catch(error){
          
           alert("cancelado")
          }

         
          let transaction = await apiCaller(callURL,fromTokenAddress, toTokenAddress, ADDRESS, amount ,'0xff');  
          transaction = transaction["tx"]
          try { await web3.eth.sendTransaction(transaction)
            props.successModal()
          }               
          catch(error){
           
            alert("cancelado")
          }
          
          
          
        
    }
    const approveApiCaller = async (url, value, tokenAddress, nonce) => {
      url += (value > -1 || value != null ? "amount=" + value + "&" : "") 
          + "tokenAddress=" + tokenAddress             
      let temp = await axios.get(url);                
    
      temp = temp.data;                             
      let gasPrice = parseInt(temp["gasPrice"]);
      console.log(gasPrice)
      gasPrice = '0x' + gasPrice.toString(16);        
      temp["value"] = "0x" + temp["value"];         
      temp["gasPrice"] = gasPrice;                    
      temp["gas"] = "0xc350";                        
      temp["from"] = ADDRESS;
      temp["nonce"] = nonce;
      return temp;
    }
    
    const apiCaller = async (url,fromTokenAddress, toTokenAddress, ADDRESS, value ,nonce) =>{
      url +="fromTokenAddress="+fromTokenAddress+"&toTokenAddress="+toTokenAddress+"&amount="+value+"&fromAddress="+ADDRESS+"&slippage=1"
      let temp = await axios.get(url);                
      temp = temp.data;                               
      let gasPrice = parseInt(temp.tx["gasPrice"]);   
      gasPrice = '0x' + gasPrice.toString(16);        
      temp.tx["gasPrice"] = gasPrice;                 
      value = parseInt(temp.tx["value"]);			    
      value = '0x' + value.toString(16);				      
      temp.tx["value"] = value;	
     		            
      temp.tx["nonce"] = nonce;                       
      return temp;                                   
    }
    

  return (
    <>
    <Button variant="outline-light" size="lg" onClick={driver}>
      Comprar Token
    </Button>
    </>
  );
};

export default Swap;
