import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}


export function CartProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [showLogin, setShowLogn] = useState(false);

  const addToCart = (item) => {
    setCartList((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCartList((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const clickLogin = (value) => {
    setShowLogn(value);
  };

  const cartValue = {
    cartList,
    addToCart,
    removeFromCart,
    showLogin,
    clickLogin
  };

  return (
    <>
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
   </>
  );
}