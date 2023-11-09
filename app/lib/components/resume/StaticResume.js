import React from "react";
// import "@fontsource/roboto"

import * as styles from "./StaticResume.module.css";
import { getExperience } from "../../common/Utils";

const StaticResume = () => {
  return (
    <div className={styles.main}>
      <section>
        <p className={styles.title}>In Brief</p>
        <p className={styles.content}>
          A driven, collaborative and versatile developer with {getExperience()}{" "}
          of agile approach fullstack web development experience
          <br />
          Passion for learning new technologies, seeking out challenges and to
          keep improving constantly
          <br />I thrive as a part of a team where we can have discussions and
          debates on technologies/approaches/architectures
        </p>
      </section>
      <section>
        <p className={styles.title}>Skills</p>
        <section className={styles.content}>
          <h2>Primary:-</h2>
          JavaScript(ES6+), Node.js, Express, ReactJS, Ext JS, MongoDB, HTML,
          SASS, Git, redis, Socket.io, mocha, Material-UI, Apache kafka,
          webpack, neutrino
          <h2>Secondary:-</h2>
          Vue.js, GraphQL, docker, gitlab CI-CD pipelines, protobuf, PWA,
          Puppeteer, gRPC, Grafana, AWS S3, .NET core, Java, TICK Stack, Apache
          Solr
          <h2>Tools:-</h2>
          VSCode, IntelliJ, Jetbrains Rider, Mongo Compass, Docker Desktop,
          Fiddler, Postman, cURL, PuTTY, SOAP UI
        </section>
      </section>
      <section>
        <p className={styles.title}>Work Experience</p>
        <section className={styles.content}>
          <h2>Company: </h2>
          <p>LTI - Larsen &amp; Toubro Infotech, Oct 2014 to Present</p>
          <br />
          <h2>Roles: </h2>
          <p className={styles.roleName}>
            <em>Specialist – Application Architecture, July 2019 to present</em>{" "}
          </p>
          As a member of architecture team I&apos;m responsible for
          <ul>
            <li>
              Creation and maintenance of foundational packages for Node.js, Ext
              JS, ReactJS, Kafka, websocket, .NET Core, etc by wrapping critical
              components like authentication, user identity, preferences,
              configurations, logging, Heap/CPU stats logging, encryption, etc
            </li>
            <li>
              Creation of administration, monitoring, scheduling and
              notification utility services to give more power to teams to
              deliver robust applications quickly
            </li>
            <li>
              Technologies: ReactJS, Vue.js, Node.js, kafka, Ext JS, SASS,
              redis, MongoDB, Git, docker, traefik, websocket, storybook,
              webpack, PWA, graphQL, puppeteer, AWS S3, .NET Core, Material-UI,
              protobuf, puppeteer, gRPC, TICK stack
            </li>
          </ul>
          <br />
          <p className={styles.roleName}>
            {" "}
            <em>Senior Software Engineer, July 2017 to June 2019</em>{" "}
          </p>
          Leading a team of developers for modernization of multiple external
          facing business insurance applications to use modern JavaScript stack
          on the frontend
          <ul>
            <li>
              Creation of application solution structure and developing multiple
              common functionalities to be reused across apps, like navigation,
              print &amp; popout functionality
            </li>
            <li>
              Creation of reusable node services to read data from solr, mongoDB
              and oracle datasources
            </li>
            <li>
              Technologies: Ext JS, Node Js, browserify, webpack, mocha, java,
              CSS, solr, SVN, MongoDB, oracle
            </li>
          </ul>
          <br />
          <p className={styles.roleName}>
            {" "}
            <em>Software Engineer, Oct 2014 to June 2017</em>{" "}
          </p>
          Modernization of legacy external Rate-Quote-Issue(RQI) applications
          from VB.Net to Ext JS and .Net
          <ul>
            <li>
              Involved in frontend development and defect fixing for 3 RQI
              applications involving 30+ screens
            </li>
            <li>
              Session management and left panel navigation implementation for
              reuse across all 3 RQI apps
            </li>
            <li>
              Technologies: Ext JS, JavaScript, IBM RAD 8.5, CSS, SVN, fiddler
            </li>
          </ul>
        </section>
      </section>
      <section>
        <p className={styles.title}>Education</p>
        <section className={styles.content}>
          Bachelor of Engineering, Computer Engineering 2010-2014
          <br />
          RTM Nagpur University, Nagpur, Maharashtra, India
        </section>
      </section>
    </div>
  );
};

StaticResume.propTypes = {};

export default StaticResume;
