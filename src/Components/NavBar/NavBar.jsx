import React, { useState } from "react";
import logo from "../../Assets/images/logo.svg";
import { BsCart } from "react-icons/bs";
import  { useCartContext } from '../CartContext/CartContext';
import Avatar from "../../Assets/images/image-avatar.png"
import "./NavBar.css"


const NavBar = () => {
  const [ShowCartState, setShowCartState] = useState(false);

  const { CartState } = useCartContext();

  const ShowCart = () => {
    setShowCartState(!ShowCartState);
  };

  let ItemsLEngth =  CartState.items.length;

  return (
    <div className="NavBar">
      <div className="Nav__cont">
      <img src={logo} alt="sneakers" style={{marginRight:"1%", marginLeft:"-5%"}} />
      <div className="Nav__menu">
      <p>Collections</p>
      <p>Men</p>
      <p>Women</p>
      <p>About</p>
      <p>Contact</p>
      </div>
      <p style={{marginRight:"-8%"}}><BsCart onClick={ShowCart}  /><span>{ItemsLEngth}</span></p>
      <p><img src={Avatar} alt="Avatar" /></p>
      </div>
      {/* {!ShowCartState && CartState.items.map((Cart,index)=>{
return (
  <div key={index}>{Cart}</div>
)
      })} */}
    </div>
  );
};

export default NavBar;
