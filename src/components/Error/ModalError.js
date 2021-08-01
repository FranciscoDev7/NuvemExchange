import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button} from "react-bootstrap";
import styled from "styled-components"

const Link = styled.a`
margin-left : 5px;
text-decoration:none;
`


const ModalError = ({ errorCode, openErrorMode, closeErrorMode }) => {
    console.log(errorCode)
    let errorTitle= ""
    let errorMessage = ""
    switch (errorCode.code){
        case 4001:
          errorTitle= "Cancelado pelo usuário"
            errorMessage = <> </>
            break;
        case -32002:
            errorTitle= "Assinatura Pendente"
            errorMessage = <> Verifique sua carteira. Já há um requisito pendente para se conectar
            à Nuvem. Para continuar a negociação, você deve assinar autorização em sua carteira.</>
            break;
        default:
          errorTitle="Instale uma carteira";
          errorMessage = <>
          Para negociar na nuvem, é necessário instalar uma carteira como a Metamask
          em seu browser.
          <Link href="https://metamask.io/">Instalar Metamask</Link>
          </>

        }


  return (

   
    <Modal show={openErrorMode} onHide={closeErrorMode} animation={false}>
      <Modal.Header>
        <Modal.Title>{errorTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeErrorMode}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalError;
