import React, { useState } from "react";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Background from "./components/UI/Background";
import ModalOverlay from "./components/UI/ModalOverlay";
import Summary from "./components/UI/Summary";
import CartContextProvider from "./store/CartContextProvider";

const App = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };

  const closeCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <CartContextProvider>
      {isShowCart && <ModalOverlay onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Background />
      <Summary />
      <Items />
    </CartContextProvider>
  );
};

export default App;
