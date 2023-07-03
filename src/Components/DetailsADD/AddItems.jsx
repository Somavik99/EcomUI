import React from "react";
import {  useCartContext } from "../CartContext/CartContext";
import { Actions } from "../CartContext/Actions";
import { ProductDescription } from "../../ImageData/ImageData";

const AddItems = () => {
  const { CartState, CartDispatch } = useCartContext();

  console.log(CartState.items)

  //Adding Items to cart

  const AddItemToCart = (item) => {
    CartDispatch({
      type: Actions.ADD_ITEMS,
      payload: {
        ...item,
      },
    });
  };

 
  //Increase and decrease item count

  const DecreaseCount = (counts) => {
    CartDispatch({
      type: Actions.DECREASE_COUNT,
      payload: counts,
    });
  };

  const IncreaseCount = (counts) => {
    CartDispatch({
      type: Actions.INCREASE_COUNT,
      payload:counts
    });
  };

  return (
    <div>
      <div>
{
  ProductDescription.map((prod,i)=>{
return <div key={i}>
<span>{prod.title}</span>
<span>{prod.company}</span>
<div>{prod.details}</div>
</div>
  })
}
      </div>
      <div>
        <button onClick={() => DecreaseCount(CartState.count)}>-</button>
        <span>{CartState.count}</span>
        <button onClick={() => IncreaseCount(CartState.count)}>+</button>
      </div>
      <button onClick={()=> AddItemToCart(CartState)}>Add To Cart</button>
    </div>
  );
};

export default AddItems;
