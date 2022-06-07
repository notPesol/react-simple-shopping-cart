import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart_context";

import styles from "./Header.module.css";

const Header = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmountInCart = cartContext.items.reduce((prevValue, currValue) => {
    return prevValue + currValue.amount;
  }, 0);

  const [isChange, setIsChange] = useState(true);

  const classes = `${styles.button} ${isChange && styles.bump}`;

  useEffect(() => {
    setIsChange(true);
    const timeId = setTimeout(() => {
      setIsChange(false);
    }, 300);

    return () => clearTimeout(timeId);
  }, [totalAmountInCart]);

  return (
    <header className={styles.header}>
      <h1>Shopping Cart</h1>
      <button className={classes} onClick={props.onShowCart}>
        <span>My Cart </span>
        <span className={styles.badge}>{totalAmountInCart}</span>
      </button>
    </header>
  );
};

export default Header;
