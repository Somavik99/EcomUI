import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Actions } from "../CartContext/Actions";
import { ProductDescription } from "../../ImageData/ImageData";

const AddItems = () => {
  const { CartState, CartDispatch } = useCartContext();

  console.log(CartState.items);

  //Adding Items to cart

  //Increase and decrease item count

  const DecreaseCount = () => {
    CartDispatch({
      type: Actions.DECREASE_COUNT,
    });
  };

  const IncreaseCount = () => {
    CartDispatch({
      type: Actions.INCREASE_COUNT,
    });
  };

  return (
    <div>
      <div>
        {ProductDescription.map((prod, i) => {
          return (
            <div key={i}>
              <span>{prod.title}</span>
              <span>{prod.company}</span>
              <div>{prod.details}</div>
              <p>{prod.retailPrice}</p>
              <p>{prod.off}</p>
              <p style={{ textDecoration: "line-through", color: "gray" }}>
                {prod.original}
              </p>
              <div>
                <button onClick={DecreaseCount}>-</button>
                <span>{CartState.count}</span>
                <button onClick={IncreaseCount}>+</button>
              </div>
              <button
                onClick={() => {
                  CartDispatch({
                    type: Actions.ADD_ITEMS,
                    payload: [...CartState.items, prod],
                  });
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddItems;
