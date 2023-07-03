import React, { useState } from 'react'
import logo from "../../Assets/images/logo.svg"
import {BsCart} from "react-icons/bs"
import {   useCartContext } from '../CartContext/CartContext'
// import { ContextCart } from '../CartContext/CartContext'



const NavBar = () => {

const [ShowCartState, setShowCartState] = useState(false)

const {CartState} = useCartContext()

const ShowCart = ()=>{
  setShowCartState(!ShowCartState)
}

  return (
    <div >
      <img src={logo} alt="sneakers" />
    <p>{CartState.items.length }</p>  
      <BsCart onClick={ShowCart} />
      {/* {!ShowCartState && CartState.items.map((Cart,index)=>{
return (
  <div key={index}>{Cart}</div>
)
      })} */}
    </div>
  )
}

export default NavBar