import React, { useReducer } from "react";
import CartContext from "./cart_context";

const defaultCartValue = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (prevStete, action) => {
  if (action.type === "ADD") {
    const { item, amount } = action;
    const totalPrice = prevStete.totalPrice + item.price * amount;
    const prevItemIndex = prevStete.items.findIndex((el) => el.id === item.id);
    let items = [...prevStete.items];
    if (prevItemIndex === -1) {
      items = [...prevStete.items, { ...item, amount }];
    } else {
      const updatedItem = { ...items[prevItemIndex] };
      updatedItem.amount += amount;
      items[prevItemIndex] = updatedItem;
    }
    return {
      items,
      totalPrice,
    };
  } else if (action.type === "REMOVE") {
    let items = [...prevStete.items];
    let item = { ...items.find((el) => el.id === action.id) };
    const totalPrice = prevStete.totalPrice - item.price;
    if (item.amount === 1) {
      items = items.filter((el) => el.id !== action.id);
    } else {
      const itemIndex = items.findIndex((el) => el.id === action.id);
      item.amount -= 1;
      items[itemIndex] = item;
    }

    return {
      items,
      totalPrice,
    };
  }

  return prevStete;
};

const CartContextProvider = (props) => {
  const [cartState, cartDispath] = useReducer(cartReducer, defaultCartValue);

  console.log(cartState);

  const addItemHandler = (item, amount) => {
    cartDispath({ type: "ADD", item, amount });
  };
  const removeItemHandler = (id) => {
    cartDispath({ type: "REMOVE", id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
