import React from "react";
import styled from "styled-components";
import Tootltips from "../Tooltips/Tooltips";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.74);
`;
const Item = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;
  width: 90%;
`;

const Text = styled.p`
  margin-top: 5px;
  font-size: 1rem;
  width: 150px;
`;

const FeeInput = styled.input`
  width: 150px;
  margin-left: 50px;
  color: rgba(255, 255, 255, 0.74);
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.507);
  border-radius: 1rem;
  border-color: transparent;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

/*<Item>
        <Text>ETH/USD</Text>
        <FeeInput value="" readOnly></FeeInput>
      </Item>*/

const FeeCard = (props) => {
  let networkFee = "";
  let BRLFee = "";
  const gasPrice = parseInt(props.gasPrice / 10 ** 9);
  if (props.networkFee) networkFee = parseFloat(props.networkFee).toFixed(4);
  if (props.networkFee) {
    BRLFee = props.ethBRL * networkFee;
    BRLFee = parseFloat(BRLFee).toFixed(2);
    BRLFee = `~ R$ ${BRLFee}`;
  }

  return (
    <Container>
      <Item>
        <Text>USD/ETH</Text>
        <FeeInput value={""} disabled readOnly></FeeInput>
      </Item>
      <Item>
        <Tootltips>
          <Text>Preco Gas</Text>
        </Tootltips>

        <FeeInput
          style={{ cursor: "pointer" }}
          value={`${gasPrice} Gwei`}
          readOnly
          disabled
        ></FeeInput>
      </Item>
      <Item>
        <Text>Taxa de Trasnsacao</Text>
        <FeeInput value={networkFee} disabled readOnly></FeeInput>
      </Item>
      <Item>
        <Text>Taxa em Reais</Text>
        <FeeInput value={BRLFee} disabled readOnly></FeeInput>
      </Item>
      <Item>
        <Text>Taxa percentual</Text>
        <FeeInput disabled readOnly></FeeInput>
      </Item>
    </Container>
  );
};

export default FeeCard;
