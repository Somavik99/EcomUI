import React, { createContext, useReducer } from "react";
import { Actions } from "./Actions";

export const ContextCart = createContext();

export const initialItems = { items: [], count: 0 };

export const CartContextFunction = (state, action) => {
  switch (action.type) {
    case Actions.ADD_ITEMS:
      if (action.payload.quantity === 0) {
        return state;
      } else {
        return {
          items: [
            ...state.items,
            action.payload,
            { id: Date.now() },
            action.payload.quantity,
          ],
        
        };
      }

      case Actions.INCREASE_COUNT:
        
    default:
      return console.error(action.type);
  }
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(CartContextFunction, initialItems);

  return (
    <ContextCart.Provider value={{ CartState: state, CartDispatch: dispatch }}>
      {children}
    </ContextCart.Provider>
  );
};

export default CartContext;
