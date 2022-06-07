import React from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal";

const ModalOverlay = (props) => {
  return ReactDOM.createPortal(<Modal onClose={props.onClose}/>, document.getElementById("modal-root"));
};

export default ModalOverlay;
