import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Actions } from "../CartContext/Actions";
import { ProductDescription } from "../../ImageData/ImageData";
import Plus from "../../Assets/images/icon-plus.svg";
import Minus from "../../Assets/images/icon-minus.svg";
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
              <p style={{ color: "#ff7e1b", fontWeight: "bolder" }}>
                {prod.title}
              </p>
              <p>{prod.company}</p>
              <p>{prod.details}</p>
              <p>{prod.retailPrice}</p>
              <p>{prod.off}</p>
              <p style={{ textDecoration: "line-through", color: "gray" }}>
                {prod.original}
              </p>
              <div>
                <span onClick={DecreaseCount}>
                  <img src={Minus} alt="" />
                </span>
                <span>{CartState.count}</span>
                <span onClick={IncreaseCount}>
                  <img src={Plus} alt="" />
                </span>
              </div>
              <button
                disabled={CartState.count === 0}
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
