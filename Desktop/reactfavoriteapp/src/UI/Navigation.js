import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const { cartItems } = props;
  return (
    <Fragment>
      <nav className={classes.topnav}>
        <NavLink to="/">
          <span className={classes.intro}>ReactFavorites</span>
        </NavLink>
        <div className={classes.flex}>
          <NavLink
            to="/products"
            className={classes.navlink}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#fff",
              backgroundColor: isActive ? "#021e4e" : "#333",
            })}
          >
            Products
          </NavLink>
          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#fff",
              backgroundColor: isActive ? "#021e4e" : "#333",
            })}
            className={classes.navlink}
          >
            Favorites
          </NavLink>
          <CartButton
            cartItems={cartItems}
            showModalHandler={props.showModalHandler}
          />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
