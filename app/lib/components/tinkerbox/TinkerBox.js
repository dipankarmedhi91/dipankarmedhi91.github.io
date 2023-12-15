import React from "react";

import * as styles from "./TinkerBox.module.css";

import { MyProjects } from "./myProjects";

import { Github, ExternalLink } from "../../common/Icons";

const TinkerBox = () => {
  return (
    <div className={styles.main}>
      <section>
        <div className={styles.content}>
          {MyProjects.projects.map((project) => (
            <div key={project.name} className={styles.project}>
              <p className={styles.projectName}>{project.name}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                className={styles.links}
                href={project.github}
                target="_blank"
              >
                Github <div className={styles.icons}>{Github}</div>
              </a>
              <br />
              <a
                className={styles.links}
                href={project.site}
                target="_blank"
              >
                Live Site <div className={styles.icons}>{ExternalLink}</div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

TinkerBox.propTypes = {};

export default TinkerBox;
