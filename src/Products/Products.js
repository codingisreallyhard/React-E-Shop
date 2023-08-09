import React from "react";
import Card from "../UI/Card";
import classes from "./Products.module.css";
import styles from "../Global/Global.module.css";

import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

import Buttons from "./Buttons";
import { AiFillInfoCircle } from "react-icons/ai";

import "./Products.css";
import ReactStars from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = (props) => {
  const {
    favorites,
    handleFavorite,
    onAdd,
    setFilteredItems,
    filteredItems,

    filterItem,
    menuItems,
  } = props;

  return (
    <>
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
              <div className="inside">
                <div className="icon">
                  <i className="material-icons">
                    <AiFillInfoCircle className={classes.icon} />
                  </i>
                </div>

                <div>
                  <div className="contents">
                    <table>
                      <tbody>
                        <tr>
                          <th>Power Consumption</th>
                        </tr>
                        <tr>
                          <td>{item.pwr}</td>
                        </tr>
                        <tr>
                          <th>Dimensions</th>
                        </tr>
                        <tr>
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
                  className={classes.mouse}
                />
              </div>

              <div className="contentBox">
                <h4 className={classes.h3bordertop}>{item.name}</h4>
                <h4 className="price">{item.price}$</h4>
              </div>

              <div className={classes.review}>
                <span>
                  {" "}
                  <VscCircleFilled className={classes.stock} />
                  In stock
                </span>
                <div>
                  <ReactStars count={5} size={24} activeColor="#ffd710" />
                </div>
              </div>
            </div>
            <div className={classes.flexbuttons}>
              <button
                className={styles["my-button"]}
                onClick={() => handleFavorite(item.id)}
              >
                {item.favorite === true ? (
                  <MdFavorite className={styles.favbtnn} />
                ) : (
                  <GrFavorite />
                )}
              </button>
              <button
                className={styles["my-button"]}
                onClick={() => {
                  onAdd(item);
                }}
              >
                <AiOutlineShoppingCart />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Products;
