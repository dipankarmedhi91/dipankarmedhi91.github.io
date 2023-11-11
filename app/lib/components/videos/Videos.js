"use client";

import React from "react";
import Image from "next/image";

import * as styles from "./Videos.module.css";
import { MyVideos } from "../../common/Constants";

const Videos = () => {
  const onVideoImageClick = (e, src) => {
    const element = e.target;
    var iframe = document.createElement("iframe");
    Object.assign(iframe, {
      src,
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: "1",
      autoplay: "1",
    });
    element.previousSibling.remove();
    element.parentNode.replaceChild(iframe, element);
  };

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        I&apos;m a beginner guitarist, still trying to learn this beautiful
        instrument and recording a couple of my attempts at songs I Love
        <span role="img" aria-label="guitar">
          ❤️🎸🎸
        </span>
      </section>
      <section className={styles.videoSection}>
        {MyVideos.map((video) => (
          <div key={video.name} className={styles.videoPanel}>
            <div>{video.name}</div>
            <span className={styles.circle}>
              <span className={styles.angle}></span>
            </span>
            <Image
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={`Guitar Pic for ${video.name}`}
              width={450}
              height={300}
              onClick={(e) => onVideoImageClick(e, video.src)}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Videos;
