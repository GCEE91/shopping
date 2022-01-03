import React, { createContext, useState } from 'react';

const CartContext = createContext({
  state: [],
  actions: {
    setCart: () => {},
  },
});
const { Consumer: CartConsumer } = CartContext; // Consumer대신 useContext사용함

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const value = {
    state: { cart },
    actions: { setCart },
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export { CartConsumer, CartProvider };

export default CartContext;
