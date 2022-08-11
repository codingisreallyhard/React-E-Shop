import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Products.module.css";
import styles from "../Cart/backup/Global.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import Buttons from "./Buttons";

const Products = (props) => {
  const {
    favorites,
    handleFavorite,
    onAdd,
    setFilteredItems,
    filteredItems,
    handleRemoveFavorite,
    filterItem,
    menuItems,
  } = props;

  return (
    <div className={classes.gridcontainer}>
      <Buttons
        menuItems={menuItems}
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        filterItem={filterItem}
        favorites={favorites}
      />

      {filteredItems.map((item, i) => (
        <Card key={i} className={styles["pricing-plan--complete"]}>
          <div>
            <div className={classes.imgBox}>
              <img
                src={`${item.image}`}
                alt="mouse corsair"
                className={classes.mouse}
              />
            </div>

            <div class="contentBox">
              <h4 className={classes.h3bordertop}>{item.name}</h4>
              <h4 class="price">{item.price}$</h4>
            </div>
          </div>
          <div className={classes.flexbuttons}>
            <button
              className={styles["my-button"]}
              onClick={() => handleFavorite(item.id)}
            >
              {item.favorite === true ? <MdFavorite /> : <GrFavorite />}
            </button>

            <button className={styles["my-button"]} onClick={() => onAdd(item)}>
              {item.added === true ? (
                <BsFillCartCheckFill />
              ) : (
                <AiOutlineShoppingCart />
              )}
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Products;
