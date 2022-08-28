import React from "react";
import classes from "./CardFavorites.module.css";

export default function CardFav(props) {
  return <div className={classes.cardfav}>{props.children}</div>;
}
