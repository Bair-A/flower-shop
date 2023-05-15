import React from "react";
import styles from "./Search.module.scss";
import { BiSearchAlt } from "react-icons/bi";

const Search = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="selectProduct">
        {title}
      </label>
      <div className={styles.searchWrapper}>
        <input className={styles.search} type="text" />
        <button className={styles.searchBtn}>
          <BiSearchAlt className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Search;
