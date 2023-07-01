import React, { createContext, useReducer } from "react";

export const ContextCart = createContext();

export const CartContextFunction = (state, action) => {
  switch (action.type) {
    case "":
      return ;
    default:
      return console.error(action.type);
  }
};

const CartContext = ({ children }) => {
  const [CartState, dispatch] = useReducer(CartContextFunction, []);

  return (
    <ContextCart.Provider
      value={{ CartState: CartState, CartDispatch: dispatch }}
    >
      {children}
    </ContextCart.Provider>
  );
};

export default CartContext;
