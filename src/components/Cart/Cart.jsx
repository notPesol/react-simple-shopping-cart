import React, { useContext } from "react";

import styles from "./Cart.module.css";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import CartContext from "../../store/cart_context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const cartItemElements = cartContext.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={item}
        onAdd={cartContext.addItem}
        onRemove={cartContext.removeItem}
      />
    );
  });

  const hasItem = cartItemElements.length > 0;

  return (
    <React.Fragment>
      <div className={styles.cart}>
        <h2>My Cart</h2>
        <div className={styles["cart-items"]}>
          <ul>{cartItemElements}</ul>
        </div>
        <div className={styles["total-price"]}>
          <h3>Total Price:</h3>
          <h3>{totalPrice}</h3>
        </div>
        <div className={styles.actions}>
          <Button onClick={props.onClose} text="Cancel" />
          {hasItem && <Button text="Order" />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
