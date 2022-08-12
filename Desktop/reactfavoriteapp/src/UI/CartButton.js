import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const { cartItems } = props;
  const numberOfCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.qty;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showModalHandler}>
      <span className={classes.flexspan}>
        <FaShoppingCart />
        Your Cart {numberOfCartItems}
      </span>
    </button>
  );
};

export default CartButton;
