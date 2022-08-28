import React from "react";
import FavoriteProducts from "../Favorites/FavoriteProducts";

const FavoritePage = (props) => {
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
    <div>
      <FavoriteProducts
        handleFavorite={handleFavorite}
        favorites={favorites}
        onAdd={onAdd}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
        data={filteredItems}
        filterItem={filterItem}
        menuItems={menuItems}
      />
    </div>
  );
};

export default FavoritePage;
