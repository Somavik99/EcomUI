import React from "react";
import { initialItems } from "../CartContext/CartContext";

const AddItems = () => {



  return (
    <div>
      <div>
        <button >-</button>
        <span>{initialItems.count}</span>
        <button>+</button>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default AddItems;
