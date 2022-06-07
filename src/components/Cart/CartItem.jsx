import React from "react";

import styles from "./CartItem.module.css";
import Button from "../UI/Button";

const CartItem = (props) => {
  const { item } = props;

  const removeItemHandler = () => {
    props.onRemove(item.id);
  };

  const addItemHandler = () => {
    props.onAdd(item, 1);
  };

  return (
    <li className={styles["cart-item"]}>
      <div className={styles.item}>
        <div>
          <h3>{item.name}</h3>
          <p>{item.price.toFixed(2)}</p>
        </div>
        <div className={styles.amount}>{item.amount}</div>
      </div>
      <div className={styles["cart-item-actions"]}>
        <Button onClick={removeItemHandler} text="-" />
        <Button onClick={addItemHandler} text="+" />
      </div>
    </li>
  );
};

export default CartItem;
