import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Actions } from "../CartContext/Actions";
import { ProductDescription } from "../../ImageData/ImageData";
import Plus from "../../Assets/images/icon-plus.svg";
import Minus from "../../Assets/images/icon-minus.svg";
import Cart from "../../Assets/images/icon-cart.svg";
import { motion } from "framer-motion";
import "./AddItems.css";

const AddItems = () => {
  const { CartState, CartDispatch } = useCartContext();

  console.log(CartState.items);


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
              <p style={{color:"gray", fontWeight:"600"}}>{prod.details}</p>
              <span style={{ fontSize: "30px", fontWeight: "700" }}>
                $
                {CartState.count === 0
                  ? prod.retailPrice
                  : prod.retailPrice * CartState.count}
                .00
              </span>
              <span style={{marginLeft:"50px", background: "#f6be565b" }} className="off">{prod.off}</span>
              <p style={{ textDecoration: "line-through", color: "gray" , fontWeight:"600",fontSize:"20px"}}>
                {prod.original}
              </p>
              <div className="Btn__cont">
                <div className="Plus__minus">
                  <span onClick={DecreaseCount}>
                    <img src={Minus} alt="minus" />
                  </span>

                  <>{CartState.count}</>
                  <span onClick={IncreaseCount}>
                    <img src={Plus} alt="plus" />
                  </span>
                </div>

                <motion.button
                whileTap={{scale:0.8}}
                  disabled={CartState.count === 0}
                  onClick={() => {
                    CartDispatch({
                      type: Actions.ADD_ITEMS,
                      payload: [...CartState.items,prod.id],
                    });
                  }}
                  className="Add__btn"
                >
                  <img
                    src={Cart}
                    style={{ marginRight: "18px", color: "white" }}
                    alt="Cart"
                  />
                  Add To Cart
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddItems;
