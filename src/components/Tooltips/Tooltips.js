import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ModalError = ({ children }) => {
  return (
    <OverlayTrigger
      key="bottom"
      placement="bottom"
      overlay={<Tooltip id="tooltip-disable">Preco pago em taxa</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

export default ModalError;
