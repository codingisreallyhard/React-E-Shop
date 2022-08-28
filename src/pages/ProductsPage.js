import React from "react";

import Products from "../Products/Products";
import Footer from "../Forms/Footer";

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
    popUp,
  } = props;
  return (
    <div>
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
        popUp={popUp}
      />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
