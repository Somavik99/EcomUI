import React, { createContext, useContext, useReducer } from "react";
import { Actions } from "./Actions";

export const ContextCart = createContext();

export const initialItems = { items: [], count: 0 };

export const CartContextFunction = (state, action) => {
  switch (action.type) {
    case Actions.ADD_ITEMS: {
      console.log(action.payload);
      const AddedItem = state.items.filter(
        (data) => action.payload.title === data.title
      );
      if (AddedItem.length > 0) {
        return { ...state.items, items: [...state.items, action.payload] };
      } else {
        return state;
      }
    }

    case Actions.INCREASE_COUNT: {
      if (initialItems.count === 0 || action.payload === initialItems.count) {
        return { ...state, count: state.count + 1 };
      } else {
        return state;
      }
    }
    case Actions.DECREASE_COUNT: {
      if (action.payload > 0 && action.payload !== 0) {
        return { ...state, count: state.count - 1 };
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

export const useCartContext = () => {
  return useContext(ContextCart);
};
