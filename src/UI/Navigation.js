import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";

import classes from "./Navigation.module.css";
import imageLogo from "../Images/MainLogo.svg";

const Navigation = (props) => {
  const { cartItems } = props;
  return (
    <Fragment>
      <nav className={classes.topnav}>
        <NavLink to="/" className={classes.logomainflex}>
          <div className={classes.intro}>
            {" "}
            {
              <img
                src={imageLogo}
                alt="Logo of the site"
                className={classes.mainlogo}
              ></img>
            }
          </div>
        </NavLink>
        <div className={classes.flex}>
          <NavLink
            to="/products"
            className={classes.navlink}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#e8590c" : "#333",
              paddingBottom: isActive ? 43 : undefined,
            })}
          >
            Products
          </NavLink>
          <NavLink
            to="/favorites"
            className={classes.navlink}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#e8590c" : "#333",
              paddingBottom: isActive ? 43 : undefined,
            })}
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
