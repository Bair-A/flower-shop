import React, { useEffect, useState } from "react";
import styles from "./PotsGallery.module.scss";
import { pots } from "../mock";
import Loader from "../UI/Loader/Loader";
import { normalizeArr } from "../Utils/Utils";
import axios from "axios";
import Card from "../UX/Card/Card";
import CustomBtn from "../UI/CustomBtn/CustomBtn";
import { NavLink } from "react-router-dom";

const PotsGallery = () => {
  const [total, setTotal] = useState(0);
  const [potsArr, setPotsArr] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setShowLoader(true);
      if (!potsArr.length) {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 9,
              _page: 1,
            },
          }
        );
        setPotsArr(normalizeArr(response.data, pots));
        setTotal(response.headers["x-total-count"]);
      } else {
        const page = Math.ceil(potsArr.length / 9) + 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 9,
              _page: page,
            },
          }
        );
        setPotsArr((pre) => [
          ...pre,
          ...normalizeArr(response.data, pots, pre),
        ]);

        if (potsArr.length >= total && total) setDisabled(true);
      }
    } catch (e) {
      alert("Error in Pots Gallery component:" + e.message);
    } finally {
      setShowLoader(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.wrapper} id="pots_gallery">
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.header}>Flower pots</h2>
          <NavLink to="/PotsPage" className={styles.showFlowerGallery}>
            view all
          </NavLink>
        </div>
        <div className={styles.cards}>
          {showLoader ? (
            <Loader />
          ) : (
            potsArr.map((item) => <Card key={item.id} item={item} />)
          )}
        </div>
        <div className={styles.loadBtnWrapper}>
          <CustomBtn
            children={"Load more"}
            onClick={fetchProducts}
            color={"green"}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default PotsGallery;
