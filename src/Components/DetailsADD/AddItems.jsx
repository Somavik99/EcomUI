import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Actions } from "../CartContext/Actions";
import { ProductDescription } from "../../ImageData/ImageData";

const AddItems = () => {
  const { CartState, CartDispatch } = useCartContext();

  console.log(CartState.items);

  //Adding Items to cart

  const AddItemToCart = (item) => {
 ;
    CartDispatch({
      type: Actions.ADD_ITEMS,
      payload: item,
    });
  };

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

              <div>
                <button onClick={DecreaseCount}>
                  -
                </button>
                <span>{CartState.count}</span>
                <button onClick={IncreaseCount}>
                  +
                </button>
              </div>
              <button onClick={() => AddItemToCart(prod)}>
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
