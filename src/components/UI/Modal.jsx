import React from "react";
import Cart from "../Cart/Cart";
import Backdrop from "./Backdrop";
import Card from "./Card";

const Modal = (props) => {
  return (
    <Card>
      <Backdrop onClick={props.onClose} />
      <Cart onClose={props.onClose} />
    </Card>
  );
};

export default Modal;
