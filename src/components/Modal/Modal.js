import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal} from "react-bootstrap";


const ModalContainer = ({ children, openModal, closeModal }) => {
 
  return (

   
    <Modal size="sm"show={openModal} onHide={closeModal} animation={false} >
        {children}
    </Modal>
  );
};

export default ModalContainer;