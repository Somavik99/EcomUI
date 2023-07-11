import React, { useState } from "react";
import logo from "../../Assets/images/logo.svg";
import BlackCart from "../../Assets/images/icon-cart-black.svg";
import { useCartContext } from "../CartContext/CartContext";
import Avatar from "../../Assets/images/image-avatar.png";
import Menu from "../../Assets/images/icon-menu.svg";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import "./NavBar.css";

const NavBar = () => {
  const [IsShowState, setIsShowState] = useState(false);
  const [IsCart, setIsCart] = useState(false);

  const { CartState } = useCartContext();

  const ShowCart = () => {
    setIsCart(!IsCart);
  };

  const Style= {
   maxWidth:"1500px",
  }

  let ItemsLEngth = CartState.items.length * CartState.count;

  return (
    <div className="NavBar">
      <div className="Nav__cont">
        <motion.button
          whileTap={{
            scale: 0.4,
          }}
          animate={{
            x: 0,
          }}
          initial={{
            x: "-100vw",
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={() => setIsShowState(!IsShowState)}
          className="btn__cont__res"
        >
          <img src={Menu} alt="Menu" />
        </motion.button>

        <img
          src={logo}
          alt="sneakers"
          style={{ marginRight: "1%", marginLeft: "-5%", width: "200px" }}
        />
        <motion.div
          className={
           Style? "Nav__menu__mobile  active" : "Nav__menu__mobile "
          }
          animate={{
            x: IsShowState ? "-100vw" : 0,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          <div>
            <button
              className="btn__close"
              onClick={() => setIsShowState(!IsShowState)}
            >
              <RxCross1 color="orange" size="25px" />{" "}
            </button>
          </div>
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </motion.div>
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
