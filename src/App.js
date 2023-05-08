import "./App.scss";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Components/Pages/HomePage/HomePage";
import FlowersPage from "./Components/Pages/FlowersPage/FlowersPage";
import PotsPage from "./Components/Pages/PotsPage/PotsPage";
import PersonalPage from "./Components/Pages/PersonalPage/PersonalPage";
import BasketPage from "./Components/Pages/BasketPage/BasketPage";
import SearchPage from "./Components/Pages/SearchPage/SearchPage";
import { BasketContext } from "./Context/BasketContext";

function App() {
  const [products, setProducts] = useState([]);
  const addToBasket = (item) => {
    const existingItem = products.find((i) => i.id === item.id);
    console.log(products);
    if (existingItem) {
      setProducts(
        products.map((i) => {
          if (i.id === item.id) {
            return { ...i, quantity: i.quantity + 1 };
          } else {
            return i;
          }
        })
      );
    } else {
      setProducts([...products, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBasket = (itemId) => {
    setProducts(products.filter((i) => i.id !== itemId));
  };

  return (
    <BasketContext.Provider value={{ addToBasket, removeFromBasket, products }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/FlowersPage" element={<FlowersPage />} />
            <Route path="/PotsPage" element={<PotsPage />} />
            <Route path="/PersonalPage" element={<PersonalPage />} />
            <Route path="/BasketPage" element={<BasketPage />} />
            <Route path="/SearchPage" element={<SearchPage />} />
          </Route>
        </Routes>
      </div>
    </BasketContext.Provider>
  );
}

export default App;
