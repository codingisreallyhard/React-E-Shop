import React, { useState } from "react";

import classes from "../Products/Products.module.css";
import styles from "../Global/Global.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { BsFillCartCheckFill } from "react-icons/bs";
import CardFav from "./CardFavorites";
import { AiFillInfoCircle } from "react-icons/ai";

const FavoriteProducts = (props) => {
  const {
    handleFavorite,
    onAdd,

    filteredItems,
  } = props;

  return (
    <div className="App">
      <h1>Favorites list</h1>
      <br></br>
      {filteredItems.map((item, i) =>
        item.favorite === true ? (
          <div key={i} className={classes.containergridfav}>
            {" "}
            <CardFav key={i} className={classes.cardfav}>
              <div>
                <div class="inside">
                  <div class="icon">
                    <i class="material-icons">
                      <AiFillInfoCircle className={classes.icon} />
                    </i>
                  </div>
                  <div>
                    <div class="contents">
                      <table>
                        <tbody>
                          <tr>
                            <th>Power Consumption</th>
                            <th>Dimensions</th>
                          </tr>
                          <tr>
                            <td>{item.pwr}</td>
                            <td>{item.dimensions}</td>
                          </tr>
                          <tr>
                            <th>Specifications</th>
                          </tr>
                          <tr>
                            <td>{item.specs1}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className={classes.imgBox}>
                  <img
                    src={`${item.image}`}
                    alt="mouse corsair"
                    className={classes.mousefav}
                  />
                </div>

                <div class="contentBox">
                  <h4 className={classes.h3bordertop}>{item.name}</h4>
                  <h4 class="price">{item.price}$</h4>
                  <VscCircleFilled className={classes.stock} />
                  In stock
                </div>
              </div>
              <div className={classes.flexbuttons}>
                <button
                  className={styles["my-button"]}
                  onClick={() => handleFavorite(item.id)}
                >
                  {item.favorite === true ? <MdFavorite /> : <GrFavorite />}
                </button>

                <button
                  className={styles["my-button"]}
                  onClick={() => onAdd(item)}
                >
                  {item.added === true ? (
                    <BsFillCartCheckFill />
                  ) : (
                    <AiOutlineShoppingCart />
                  )}
                </button>
              </div>
            </CardFav>
          </div>
        ) : null
      )}
    </div>
  );
};
export default FavoriteProducts;
