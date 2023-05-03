import React, { useState } from "react";
import { BiCaretUp } from "react-icons/bi";
import styles from "./Header.module.scss";
import { NavHashLink } from "react-router-hash-link";
import classNames from "classnames";
import IconsList from "./IconsList/IconsList";
import Menu from "./Menu/Menu";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerHandler = () => {
    setBurgerOpen((cur) => !cur);
    document.body.classList.toggle("disableScrolling");
  };

  const burger = classNames([styles.burger], {
    [styles.active]: burgerOpen,
  });

  const burgerList = classNames([styles.burgerList], {
    [styles.burgerListActive]: burgerOpen,
  });

  const blackout = classNames([styles.blackout], {
    [styles.blackoutActive]: burgerOpen,
  });

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menuWrapper}>
            <Menu />
          </div>
          <div className={burger} onClick={burgerHandler}>
            <span />
          </div>
          <div className={burgerList} onClick={burgerHandler}>
            <Menu />
          </div>
          <div className={blackout} onClick={burgerHandler} />
          <img src={process.env.PUBLIC_URL + "/img/Logo.svg"} alt="" />
          <IconsList />
        </div>
      </div>
    </div>
  );
};

export default Header;
