import React from "react";

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
          JavaScript(ES6+), Node.js, Express, ReactJS, Ionic, Ext JS, MongoDB, HTML,
          Sass, Git, Web Components, redis, Socket.io, mocha/jest, Apache kafka,
          webpack, Azure cloud services
          <h2>Secondary:-</h2>
          Vue.js, Typescript, NextJs, GraphQL, docker, gitlab CI-CD pipelines, protobuf, PWA, 
          gRPC, Grafana, AWS S3, .NET core, Java, TICK Stack, Apache Solr, FormIO
          <h2>Tools:-</h2>
          VSCode, IntelliJ, Jetbrains Rider, Mongo Compass, Docker Desktop,
          Fiddler, Postman, cURL, PuTTY, SOAP UI
        </section>
      </section>
      <section>
        <p className={styles.title}>Work Experience</p>
        <section className={styles.content}>
        <h2>Company: </h2>
          <p>Globallogic Inc., May 2021 to present</p>
          <br />
          <h2>Roles: </h2>
          <p className={styles.roleName}>
            <em>Lead Software Engineer, Feb 2023 to present</em>{" "}
          </p>
          Working with a major healthcare provider to develop a novel system to allow business teams to design, create and
          deploy new services to customers in real time with very minimal interaction with IT team hence leading to high cost
          savings and faster time to market, resposibilities include;
          <ul>
            <li>
            Work on RnD and create various PoC&apos;s on different tools and technologies that can help us achieve the target state
            </li>
            <li>
            Work with Product team, designers, business team & architects to discuss & design initial solution diagram
            and create initial repository, pipeline and other artifacts with DevOps team
            </li>
            <li>
            Implement foundational components to help deliver user stories, help resource team to evaluate & onboard
            new team members and create a smoother onboarding experience to ensure quick turnaround of deliverables
            </li>
            <li>
              Technologies: Angular 9, Sass, FormIO, Web Components, Nodejs, PingID (OAuth2), Azure cloud services
              (Cosmos/APIM/App Insights/Storage/etc), BPM tools, etc
            </li>
          </ul>
          <br />
          <p className={styles.roleName}>
            {" "}
            <em>Senior Software Engineer, July 2017 to June 2019</em>{" "}
          </p>
          <p>Worked with a major financial client to develop a new hybrid web app to accelerate business to delivery speed of
          Application to Android, iOS and Web platforms by using Ionic and Azure web services</p><br/>
          As a part of core Foundation team responsible for:
          <ul>
            <li>
            Creation and maintenance of foundational components such as authentication (OAuth2 via AD B2C),
            Biometrics
            </li>
            <li>
            Implementation of Native functionalities like Push Notifications (via Azure Notification Hub), Deep Linking,
            App share
            </li>
            <li>
            Integrate application with Kochava platform to drive app install attributions and analytics collection
            </li>
            <li>
            Implement omnichannel messaging platform via Braze to drive Email, Push notification, In-App messaging
            and SMS campaigns based on user behaviour for enhancing user interaction with the app
            </li>
            <li>
            Working closely with Product Owner’s to refine requirements, Architects to create system design and
            DevOps to update pipelines according to changing app needs.
            </li>
            <li>
              Technologies: Ionic, Capacitor, ReactJS, Kochava, Braze, Biometrics, Sass, MongoDB, reCAPTCHA v3, SFTP,
              Azure cloud services (Cosmos/APIM/AD B2C/App Insights/Storage/Notification Hub/etc)
            </li>
          </ul>
          <br />
          <h2>Company: </h2>
          <p>LTI - Larsen &amp; Toubro Infotech, Oct 2014 to April 2021</p>
          <br />
          <h2>Roles: </h2>
          <p className={styles.roleName}>
            <em>Specialist – Application Architecture, July 2019 to April 2021</em>{" "}
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
