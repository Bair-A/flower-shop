import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.scss";
import SelectProduct from "../../UX/SelectProduct/SelectProduct";
import Search from "../../UX/Search/Search";
import axios from "axios";
import { normalizeArr } from "../../Utils/Utils";
import { flowers, pots } from "../../mock";
import Loader from "../../UI/Loader/Loader";
import FlowerGalleryCard from "../../UX/Card/Card";
import CustomBtn from "../../UI/CustomBtn/CustomBtn";

const productOptions = [
  { name: "flowers", value: "flowers", selected: true },
  { name: "pots", value: "pots" },
];

const sortOptions = [
  { name: "default", value: "default", selected: true },
  { name: "ascending price", value: "ascending" },
  { name: "descending price", value: "descending" },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [product, setProduct] = useState(flowers);
  const [productsArr, setProductsArr] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [sort, setSort] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const sortBy = (arr, sort) => {
    if (sort === "ascending")
      return structuredClone(arr).sort((a, b) => a.price - b.price);
    if (sort === "descending")
      return structuredClone(arr).sort((a, b) => b.price - a.price);
    return structuredClone(arr).sort((a, b) => a.id - b.id);
  };

  async function fetchFlowers(product, first = false) {
    setShowLoader(true);
    try {
      if (!productsArr.length || first) {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 9,
              _page: 1,
            },
          }
        );
        setProductsArr(sortBy(normalizeArr(response.data, product), sort));
        setFilteredProducts(sortBy(normalizeArr(response.data, product), sort));
        setTotal(response.headers["x-total-count"]);
      } else {
        const page = Math.ceil(productsArr.length / 9) + 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 9,
              _page: page,
            },
          }
        );
        setFilteredProducts(
          sortBy(
            [
              ...productsArr,
              ...normalizeArr(response.data, product, productsArr),
            ],
            sort
          )
        );
        setProductsArr((pre) => {
          return sortBy(
            [...pre, ...normalizeArr(response.data, product, pre)],
            sort
          );
        });

        if (productsArr.length >= total && total) setDisabled(true);
      }
    } catch (e) {
      alert("Error in Flower Gallery component:" + e.message);
    } finally {
      setShowLoader(false);
    }
  }

  const selectProduct = (e) => {
    if (e.target.value === "flowers") {
      setProduct(flowers);
      fetchFlowers(flowers, true);
    }
    if (e.target.value === "pots") {
      setProduct(pots);
      fetchFlowers(pots, true);
    }
  };

  const sortSelectorHandler = (e) => {
    setSort(e.target.value);
    setProductsArr(sortBy(productsArr, e.target.value));
    setFilteredProducts(sortBy(productsArr, e.target.value));
  };

  const searchHandler = (query) => {
    setSearchQuery(query);
    setFilteredProducts(
      [...productsArr].filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchFlowers(product);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <SelectProduct
            options={productOptions}
            title={"choose a product"}
            onSelect={selectProduct}
            default={"flowers"}
          />
          <SelectProduct
            options={sortOptions}
            title={"sort by"}
            default={"default"}
            onSelect={sortSelectorHandler}
          />
          <Search
            searchQuery={searchQuery}
            title={"search a product"}
            onChange={searchHandler}
          />
        </div>
        <div className={styles.cardsWrapper}>
          {showLoader ? (
            <Loader />
          ) : (
            filteredProducts.map((item) => (
              <FlowerGalleryCard key={item.id} item={item} />
            ))
          )}
        </div>
        <div className={styles.loadBtnWrapper}>
          <CustomBtn
            onClick={() => fetchFlowers(product)}
            color={"green"}
            children={"Load more"}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
