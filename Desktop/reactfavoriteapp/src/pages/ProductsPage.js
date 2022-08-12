import React from "react";

import Products from "../Products/Products";
import Footer from "../UI/Footer";
import classes from "./ProductsPage.module.css";

const ProductsPage = (props) => {
  const {
    handleFavorite,
    favorites,
    onAdd,
    cartItems,
    filteredItems,
    setFilteredItems,
    data,
    filterItem,
    menuItems,
  } = props;
  return (
    <div className={classes.containergridrows}>
      <Products
        handleFavorite={handleFavorite}
        favorites={favorites}
        onAdd={onAdd}
        cartItems={cartItems}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
        data={data}
        filterItem={filterItem}
        menuItems={menuItems}
      />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
