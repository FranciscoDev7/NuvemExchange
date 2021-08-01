import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";




class UpdatePrices extends Component {
  state = {
    count: 0
   
  };

  update = () => {
    this.props.updateGas()
    this.props.updateTokensPrices()
  };

  render() {
 

    return (
     <>
     </>
    );
  }
  componentDidMount = () => {
    this.progressCount = setInterval(() => {
      this.setState({ progressCount: this.state.progressCount + 1 });
    }, 1000);
    this.myInterval = setInterval(() => {
      this.setState({ progressCount: 0 });
      this.update();
    }, 21000);
  };
  componentWillUnmount = () => {
    clearInterval(this.myInterval);
    clearInterval(this.progressCount);
  };
}

export default UpdatePrices;
