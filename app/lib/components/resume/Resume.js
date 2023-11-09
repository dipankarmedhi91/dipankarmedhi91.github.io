"use client";
import React, { useState } from "react";

import * as styles from "./Resume.module.css";
import StaticResume from "./StaticResume";
import InteractiveResume from "./InteractiveResume";
import DefaultButton from "../../common/DefaultButton";

const Resume = () => {
  const [state, setstate] = useState("static");
  const btnClick = (state) => setstate(state);

  return (
    <div className={styles.main}>
      <section className={styles.navSection}>
        <DefaultButton
          onClick={() => btnClick("static")}
          className={styles.btnStyle}
        >
          Static
        </DefaultButton>
        <DefaultButton
          onClick={() => btnClick("interactive")}
          className={styles.btnStyle}
        >
          Interactive
        </DefaultButton>
      </section>
      <section className={styles.mainSection}>
        {state === "static" ? <StaticResume /> : <InteractiveResume />}
      </section>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
