import React from "react";
import Link from "next/link";

import * as styles from "./About.module.css";
import ProfileImage from "../../images/main_image.webp";
import Image from "next/image";

import { Linkedin, Email, Location } from "../../common/Icons";
import { getExperience } from "../../common/Utils";
import { LinkedinURL, MyLoc, EmailAddress } from "../../common/Constants";

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
          <p>Hi, I&apos;m Dipankar.</p>
          <p>Welcome to my personal website.</p>
          <p>Working as a fullstack JavaScript developer.</p>
          <p>
            {getExperience()} of agile approach software development experience.
          </p>
          <p>
            Self motivated, collaborative, versatile and a lifelong learner by
            heart{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </p>
          <p>
            Currently based out of Connecticut.
            <a
              title="Google Maps"
              className={styles.iconlinks}
              target="_blank"
              rel="noreferrer"
              href={MyLoc}
            >
              {Location}
            </a>
          </p>
          <p></p>
          <p>
            View my <Link href="/resume" as="/resume">résumé</Link> for more information.
          </p>
          <p>
            Projects I&apos;m <Link href="/tinkerbox" as="/tinkerbox">tinkering</Link> with{" "}
            <span role="img" aria-label="laptop">
              👨‍💻💻
            </span>
          </p>
          <p>
            My awkward guitar <Link href="/videos" as="/videos">videos</Link>{" "}
            <span role="img" aria-label="guitar">
              🎸😄
            </span>
          </p>
          <p>
            Say hi on
            <a
              title="LinkedIn"
              className={styles.iconlinks}
              target="_blank"
              rel="noreferrer"
              href={LinkedinURL}
            >
              {Linkedin}
            </a>
            <a
              title="Email"
              className={styles.iconlinks}
              target="_blank"
              rel="noreferrer"
              href={EmailAddress}
            >
              {Email}
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
