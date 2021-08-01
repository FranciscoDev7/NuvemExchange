import { FaCheck } from "react-icons/fa";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const SucessIcon = styled.div`
  display: flex;
  justify-content: center;
  color: rgba(63, 195, 128, 1); 
`;

const Sucess = ({ openModal, closeModal, children }) => {
  return (
    <Modal size="sm" show={openModal} onHide={closeModal} animation={false}>
      {children}

      <Modal.Header>
        <Modal.Title>Sucesso</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SucessIcon>
          <FaCheck />
        </SucessIcon>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Sucess;
