"use client";
import React, { useState } from "react";

import * as styles from "./Misc.module.css";
import DefaultButton from "../../common/DefaultButton";
import MyFavLearnResource from "./MyFavLearnResource";
import MyNotes from "./MyNotes";

const Misc = () => {
  const [state, setstate] = useState("myFavRes");
  const btnClick = (state) => setstate(state);
  return (
    <div className={styles.main}>
      <section className={styles.navSection}>
        <DefaultButton
          onClick={() => btnClick("myFavRes")}
          className={`${styles.btnStyle} ${state === 'myFavRes'? styles.btnStyleActive : ''}`}
        >
          Fav Resources
        </DefaultButton>
        <DefaultButton
          onClick={() => btnClick("myNotes")}
          className={`${styles.btnStyle} ${state === 'myNotes'? styles.btnStyleActive : ''}`}
        >
          Notes
        </DefaultButton>
      </section>
      <section className={styles.contentSection}>
        {state === "myFavRes" ? <MyFavLearnResource /> : <MyNotes />}
      </section>
    </div>
  );
};

export default Misc;
