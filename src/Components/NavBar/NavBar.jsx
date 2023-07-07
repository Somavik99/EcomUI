import React, { useState } from "react";
import logo from "../../Assets/images/logo.svg";
import BlackCart from "../../Assets/images/icon-cart-black.svg";
import { useCartContext } from "../CartContext/CartContext";
import Avatar from "../../Assets/images/image-avatar.png";
import Menu from "../../Assets/images/icon-menu.svg";
import "./NavBar.css";

const NavBar = () => {
  const [IsShowState, setIsShowState] = useState({
    resp: false,
    cart: false,
  });

  const { CartState } = useCartContext();

  const ShowCart = () => {
    setIsShowState(!IsShowState.cart);
  };

  let ItemsLEngth = CartState.items.length * CartState.count;

  return (
    <div className="NavBar">
      <div className="Nav__cont">
        <button className={IsShowState.resp ? "hidden" : "btn__cont__res"}>
          {!IsShowState.resp ? <img src={Menu} alt="Menu" /> : ""}
        </button>
        <img
          src={logo}
          alt="sneakers"
          style={{ marginRight: "1%", marginLeft: "-5%", width: "200px" }}
        />
        <div className={IsShowState.resp ? "Nav__menu__mobile" : "Nav__menu"}>
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div style={{}} className="Cart__cont">
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
              fontWeight: "600",
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
