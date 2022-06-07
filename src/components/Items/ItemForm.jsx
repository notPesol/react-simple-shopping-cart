import React, { useState, useRef, useContext } from "react";
import CartContext from "../../store/cart_context";

import styles from "./ItemForm.module.css";

const ItemForm = (props) => {
  const inputRef = useRef(0);
  const [inValid, setInValid] = useState(false);

  const cartContext = useContext(CartContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const amount = +inputRef.current.value;
    if (amount < 1) {
      setInValid(true);
      return;
    }

    cartContext.addItem(props.item, amount);

    setInValid(false);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input ref={inputRef} type="number" min="1" />
      {inValid && <p>Invalid Amount</p>}
      <button type="submit">+Add</button>
    </form>
  );
};

export default ItemForm;
