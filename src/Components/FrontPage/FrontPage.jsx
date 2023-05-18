import React, { useState, useEffect } from "react";
import styles from "./FrontPage.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import FrontPageFlowerCard from "./FrontPageFlowerCard/FrontPageFlowerCard";
import CustomBtn from "../UI/CustomBtn/CustomBtn";
import { NavHashLink } from "react-router-hash-link";
import classNames from "classnames";
import { useKeyboardEvent } from "@react-hookz/web";
import Popup from "./Popup/Popup";

const flowers = [
  {
    src: "/img/home/home_1.jpg",
    chapter: "New",
    title: "Peony",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, saepe.",
  },
  {
    src: "/img/home/home_2.jpg",
    chapter: "Popular",
    title: "Bryophyta",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, saepe.",
  },
  {
    src: "/img/home/home_3.jpg",
    chapter: "Featured",
    title: "Lycopod",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, saepe.",
  },
];

const FrontPage = () => {
  const [popup, setPopup] = useState(null);
  const [active, setActive] = useState(false);

  const cardHandler = (item) => {
    if (!active) {
      setPopup(item);
      console.log(item);
    } else {
      setPopup(null);
    }
    setActive(!active);
    document.body.classList.toggle("disableScrolling");
  };

  const escHandler = () => {
    if (active) cardHandler();
  };

  const overlay = classNames({
    [styles.overlay]: active,
  });

  useKeyboardEvent(escape, (e) => escHandler(), [], {
    eventOptions: { passive: true },
  });

  return (
    <div className={styles.homePage} id="home">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Happiness blooms from within</h1>
            <p className={styles.mainText}>
              Our environment, the world in which we live and work, is a mirror
              of our attitudes and expectations.
            </p>
            <div className={styles.btnContainer}>
              <NavHashLink to="/SearchPage">
                <CustomBtn
                  disabled={false}
                  children={"Shop now"}
                  color={"white"}
                />
              </NavHashLink>
              <a className={styles.exploreLink} href="#">
                <span className={styles.exploreLinkText}>Explore plants</span>
                <FaLongArrowAltRight className={styles.arrow} />
              </a>
            </div>
          </div>
          <div className={overlay} onClick={cardHandler}>
            {popup && <Popup item={popup} />}
          </div>
          <div className={styles.galleryWrapper}>
            <div className={styles.gallery}>
              {flowers.map((item) => (
                <div
                  className={
                    item.chapter === "Popular"
                      ? styles.galleryItemBig
                      : styles.galleryItem
                  }
                  key={item.title}
                >
                  <FrontPageFlowerCard
                    className={styles.card}
                    item={item}
                    onClick={cardHandler}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
