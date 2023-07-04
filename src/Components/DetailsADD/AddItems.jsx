import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Actions } from "../CartContext/Actions";
import { ProductDescription } from "../../ImageData/ImageData";
import Plus from "../../Assets/images/icon-plus.svg";
import Minus from "../../Assets/images/icon-minus.svg";
import Cart from "../../Assets/images/icon-cart.svg";
import "./AddItems.css";


const AddItems = () => {
  const { CartState, CartDispatch } = useCartContext();

  console.log(CartState.items);

  //Adding Items to cart

  //Increase and decrease item count

  const DecreaseCount = (item) => {
    CartDispatch({
      type: Actions.DECREASE_COUNT,
      payload: item,
    });
  };

  const IncreaseCount = (item) => {
    CartDispatch({
      type: Actions.INCREASE_COUNT,
      payload: item,
    });
  };

  return (
    <div>
      <div>
        {ProductDescription.map((prod, i) => {
          return (
            <div key={i}>
              <p
                style={{
                  color: "#ff7e1b",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {prod.title}
              </p>
              <p
                style={{ fontSize: "50px", fontWeight: "900" }}
                className="prod__company"
              >
                {prod.company}
              </p>
              <p>{prod.details}</p>
              <p>
                $
                {CartState.count === 0
                  ? prod.retailPrice
                  : prod.retailPrice * CartState.count}
              </p>
              <p>{prod.off}</p>
              <p style={{ textDecoration: "line-through", color: "gray" }}>
                {prod.original}
              </p>
              <div className="Btn__cont">
                <div className="Plus__minus">
                  <img
                    src={Minus}
                    alt="minus"
                    onClick={() => DecreaseCount(prod)}
                  />

                  <>{CartState.count}</>

                  <img
                    src={Plus}
                    alt="plus"
                    onClick={() => IncreaseCount(prod)}
                  />
                </div>

                <button
                  disabled={CartState.count === 0}
                  onClick={() => {
                    CartDispatch({
                      type: Actions.ADD_ITEMS,
                      payload: [...CartState.items, prod],
                    });
                  }}
                  className="Add__btn"
                >
                  <img
                    src={Cart}
                    style={{ marginRight: "18px" ,color:"white" }}
                    alt="Cart"
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddItems;
