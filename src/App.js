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

const LOCAL_STORAGE_KEY = "basket";
const setLocalStorage = (value) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
};

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const addToBasket = (item) => {
    const existingItem = products.find((i) => i.id === item.id);
    if (existingItem) {
      const newProducts = products.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + 1 };
        } else {
          return i;
        }
      });
      setProducts(newProducts);
      setLocalStorage(newProducts);
    } else {
      const newProducts = [...products, { ...item, quantity: 1 }];
      setProducts(newProducts);
      setLocalStorage(newProducts);
    }
  };

  const removeFromBasket = (item) => {
    const newProducts = products.filter((i) => i.id !== item.id);
    setProducts(newProducts);
    setLocalStorage(newProducts);
  };

  const incrementCount = (item) => {
    console.log(item);
    const newProducts = products.map((i) => {
      console.log(i);
      if (i.id === item.id) {
        console.log(i.quantity);
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setProducts(newProducts);
    setLocalStorage(newProducts);
  };

  const decrementCount = (item, value) => {
    console.log("dec");
    const newProducts = products.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity - 1 > 0 ? i.quantity - 1 : 1 };
      }
      return i;
    });
    setProducts(newProducts);
    setLocalStorage(newProducts);
  };

  // const changeCount = (item, value) => {
  //   if (item.quantity <= 0) {
  //     removeFromBasket(item);
  //     return;
  //   }
  //   // if (value === "") return;
  //   const newProducts = products.map((i) => {
  //     if (i.id === item.id) {
  //       return { ...i, quantity: value };
  //     } else {
  //       return i;
  //     }
  //   });
  //   setProducts(newProducts);
  //   setLocalStorage(newProducts);
  // };

  return (
    <BasketContext.Provider
      value={{
        addToBasket,
        removeFromBasket,
        products,
        incrementCount,
        decrementCount,
      }}
    >
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
