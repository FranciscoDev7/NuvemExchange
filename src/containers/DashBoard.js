import React, { Component } from "react";
import styled from "styled-components";
import TradingCard from "../components/Cards/TradingCard";
import TokenSearch from "../components/Modal/TokenSearch";
import Section from "../components/Section/Section";
import DashBoardSection from "../components/Section/DashBoardSection";
import BottomSideCard from "../components/Cards/BottomSideCard";
import Modal from "../components/Modal/Modal";
import FeeCard from "../components/Cards/FeeCard";
import Sucess from "../components/Modal/Sucess";

const RightSideCard = styled.div`
  width: 500px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TransparentCard = styled.div`
  background: transparent;
  margin-top: 5px;
  width: 500px;
  height: 300px;
  border-radius: 2rem;
`;

class DashBoard extends Component {
  state = {
    tokenSearchMode: false,
    successModal: false,
    tokenYouSearch: "youPay",
  };

  openSuccessModal = () => {
    this.setState({ successModal: true });
  };

  closeSuccessModal = () => {
    this.setState({ successModal: false });
  };

  openTokenSearch = (searchToken) => {
    this.setState({ tokenSearchMode: true });
    let tokenYouSearch = this.state.tokenYouSearch;
    if (searchToken === "youPay") tokenYouSearch = "youPay";
    if (searchToken === "youReceive") tokenYouSearch = "youReceive";

    this.setState({ tokenYouSearch });
    this.props.reset();
  };

  chosenTokenHandler = (value) => {
    const tokenYouSearch = this.state.tokenYouSearch;
    value = { ...value, tokenYouSearch };
    this.setState({ tokenSearchMode: false });
    this.props.chosenToken(value);
  };

  closeTokenSearch = () => {
    this.setState({ tokenSearchMode: false });
  };

  render() {
    let feeCard = <TransparentCard></TransparentCard>;
    if (this.props.fromAmount > 0) {
      feeCard = (
        <BottomSideCard>
          <FeeCard
            gasPrice={this.props.gasPrice}
            networkFee={this.props.networkFee}
            ethBRL={this.props.ethBRL}
          />
        </BottomSideCard>
      );
    }

    return (
      <Section>
        <DashBoardSection>
          <RightSideCard>
            <TradingCard
              openTokenSearch={this.openTokenSearch}
              toToken={this.props.toToken}
              fromToken={this.props.fromToken}
              switchTokens={this.props.switchTokens}
              userLog={this.props.userLog}
              userInput={this.props.userInput}
              fromAmount={this.props.fromAmount}
              toAmount={this.props.toAmount}
              loading={this.props.loading}
              user={this.props.user}
              fromBRL={this.props.fromBRL}
              toBRL={this.props.toBRL}
              binance={this.props.binance}
              userAddress={this.props.userAddress}
              web3={this.props.web3}
              successModal={this.openSuccessModal}
            />

            {feeCard}
          </RightSideCard>
        </DashBoardSection>

        {this.state.tokenSearchMode ? (
          <>
            <Modal
              closeModal={this.closeTokenSearch}
              openModal={this.state.tokenSearchMode}
            >
              <TokenSearch
                closeTokenSearch={this.closeTokenSearch}
                tokenList={this.props.tokenList}
                chosenToken={this.chosenTokenHandler}
                filterTokenList={this.props.filterTokenList}
              />
            </Modal>
          </>
        ) : null}

        <Sucess
          openModal={this.state.successModal}
          closeModal={this.closeSuccessModal}
        />
      </Section>
    );
  }
}

export default DashBoard;
