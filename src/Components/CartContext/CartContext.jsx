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

    case Actions.INCREASE_COUNT: {
      if (action.payload === initialItems.count) {
        return (initialItems.count += 1);
      } else {
        return state;
      }
    }
    case Actions.DECREASE_COUNT: {
      if (action.payload > 0) {
        return (initialItems.count -=1);
      } else if (action.payload === 0) {
        return initialItems.count;
      } else {
        return state;
      }
    }
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
