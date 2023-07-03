import React, { useState } from "react";
import logo from "../../Assets/images/logo.svg";
import { BsCart } from "react-icons/bs";
import  { useCartContext } from '../CartContext/CartContext'

const NavBar = () => {
  const [ShowCartState, setShowCartState] = useState(false);

  const { CartState } = useCartContext();

  const ShowCart = () => {
    setShowCartState(!ShowCartState);
  };

  let ItemsLEngth =  CartState.items.length;

  return (
    <div>
      <img src={logo} alt="sneakers" />
      <p>{ItemsLEngth}</p>
      <BsCart onClick={ShowCart} />
      {/* {!ShowCartState && CartState.items.map((Cart,index)=>{
return (
  <div key={index}>{Cart}</div>
)
      })} */}
    </div>
  );
};

export default NavBar;
