import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./UI/Navigation";
import MainPage from "./pages/MainPage";
import Cart from "./Cart/Cart";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://reactcartapp-b4204-default-rtdb.firebaseio.com/Products.json"
      );
      const responseData = await response.json();
      const data = [];

      for (const key in responseData) {
        data.push({
          id: key,
          name: responseData[key].name,
          category: responseData[key].category,
          price: responseData[key].price,
          favorite: responseData[key].favorite,

          image: responseData[key].image,
          dimensions: responseData[key].dimensions,
          pwr: responseData[key].pwr,

          specs1: responseData[key].specs1,
        });
      }

      setFilteredItems(data);
      setFavorites(data);
    };
    fetchProducts();
  }, []);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setFavorites(favorites);
  }, [favorites]);

  const menuItems = [...new Set(filteredItems.map((Val) => Val.category))];

  const filterItem = (Gaming) => {
    const newItem = filteredItems.filter((newVal) => {
      return newVal.category === Gaming;
    });
    setFilteredItems(newItem);
  };

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });
    const filteredItemsF = filteredItems.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
    setFilteredItems(filteredItemsF);

    console.log(filteredItems);
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <section>
      <nav>
        <Navigation showModalHandler={showModalHandler} cartItems={cartItems} />
      </nav>
      {showModal && (
        <Cart
          onClose={hideModalHandler}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      )}

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/products"
          element={
            <ProductsPage
              handleFavorite={handleFavorite}
              favorites={favorites}
              onAdd={onAdd}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              data={filteredItems}
              filterItem={filterItem}
              menuItems={menuItems}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <FavoritePage
              handleFavorite={handleFavorite}
              favorites={favorites}
              onAdd={onAdd}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              data={filteredItems}
              filterItem={filterItem}
              menuItems={menuItems}
            />
          }
        ></Route>
      </Routes>
    </section>
  );
}
export default App;
