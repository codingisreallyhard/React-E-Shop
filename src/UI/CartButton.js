import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const { cartItems } = props;
  const numberOfCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.qty;
  }, 0);

  useEffect(() => {
    if (numberOfCartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItems]);

  return (
    <button className={btnClasses} onClick={props.showModalHandler}>
      <span className={classes.flexspan}>
        <FaShoppingCart />
        Your Cart <span className={classes.badge}>{numberOfCartItems}</span>
      </span>
    </button>
  );
};

export default CartButton;
