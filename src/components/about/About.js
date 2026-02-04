"use client";
import React from "react";
import Image from "next/image";
import * as styles from "./About.module.css";
import ProfileImage from "@/images/img.jpeg";
import AboutContent from "@/content/about.mdx";

const About = () => {
  return (
    <div className={styles.main}>
      <section className={styles.imageSection}>
        <Image
          src={ProfileImage}
          alt="Picture of the author"
          placeholder="blur"
        />
      </section>
      <section>
        <article>
          <AboutContent />
        </article>
      </section>
    </div>
  );
};

export default About;
