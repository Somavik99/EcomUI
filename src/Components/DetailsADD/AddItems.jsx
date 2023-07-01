import React, { useContext } from "react";
import { ContextCart, initialItems } from "../CartContext/CartContext";
import { Actions } from "../CartContext/Actions";

const AddItems = () => {
  const { CartState, CartDispatch } = useContext(ContextCart);

  //Adding Items to cart

  const AddItemToCart = (item) => {
    CartDispatch({
      type: Actions.ADD_ITEMS,
      payload: {
        ...item,
        quantity: initialItems.count + 1,
      },
    });
  };

  //Increase and decrease item count

  const DecreaseCount = (counts) => {
    CartDispatch({
      type: Actions.DECREASE_COUNT,
      payload: {
        quantity: counts ,
      },
    });
  };

  const IncreaseCount = (counts) => {
    CartDispatch({
      type: Actions.INCREASE_COUNT,
      payload: {
        quantity: counts ,
      },
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => DecreaseCount(initialItems.count)}>-</button>
        <span>{initialItems.count}</span>
        <button onClick={() => IncreaseCount(initialItems.count)}>+</button>
      </div>
      <button onClick={() => AddItemToCart(CartState)}>Add To Cart</button>
    </div>
  );
};

export default AddItems;
