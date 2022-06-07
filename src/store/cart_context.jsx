import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item, amount) => {},
  removeItem: (id) => {},
});


export default CartContext;