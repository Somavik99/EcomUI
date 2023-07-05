import React, { useState } from "react";
import logo from "../../Assets/images/logo.svg";
import BlackCart from "../../Assets/images/icon-cart-black.svg";
import {  useCartContext } from "../CartContext/CartContext";
import Avatar from "../../Assets/images/image-avatar.png";
import "./NavBar.css";

const NavBar = () => {
  const [ShowCartState, setShowCartState] = useState(false);

  const { CartState } = useCartContext();

  const ShowCart = () => {
    setShowCartState(!ShowCartState);
  };

  let ItemsLEngth =  CartState.items.length * CartState.count;

  return (
    <div className="NavBar">
      <div className="Nav__cont">
        <img
          src={logo}
          alt="sneakers"
          style={{ marginRight: "1%", marginLeft: "-5%" }}
        />
        <div className="Nav__menu">
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div style={{ marginRight: "-10%" }}>
          <div
            style={{
              marginLeft: "12px",
              position: "relative",
              borderRadius: "8px",
              width: "25px",
              textAlign: "center  ",
              background: "orange",
              color: "white",
              marginBottom: "-8px",
              fontWeight:"600"
            }}
          >
            {ItemsLEngth}
          </div>
          <img src={BlackCart} onClick={ShowCart} alt="Cart" />
        </div>
        <p className="Avatar">
          <img
            src={Avatar}
            alt="Avatar"
            style={{ height: "50px", width: "50px" }}
          />
        </p>
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
