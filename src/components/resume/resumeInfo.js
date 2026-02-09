import { getExperience } from "../../lib/Utils";

export default {
  summary: [
    `A Full Stack Software Engineer with about ${getExperience()} of experience in both frontend and backend development along with developing hybrid mobile applications.`,
    "Successfully led cross-functional teams, mentored junior developers while driving timely delivery of high-impact projects.",
    "I thrive as a part of a team where we can have explore and discuss about technologies, tools and architectures",
  ],
  skills: {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "ExtJS",
      "Web Components",
      "Angular",
      "SASS",
      "OAuth2",
    ],
    backend: [
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "WebSocket",
      "Redis",
      "MongoDB",
      "Kafka",
      ".NET Core",
    ],
    devops: [
      "Docker",
      "Traefik",
      "Azure Cloud Services (Cosmos DB, APIM, AD B2C, App Insights, Notification Hub)",
      "AWS S3",
      "Gitlab pipelines",
    ],
    mobile: [
      "Ionic",
      "Capacitor",
      "Biometrics",
      "Push Notifications",
      "PWA",
      "Kochava",
      "Braze",
    ],
    other: [
      "Git",
      "Apache Solr",
      "Puppeteer",
      "reCAPTCHA v3",
      "SFTP",
      "TICK Stack",
      "Grafana",
      "Form.io",
    ],
    methodologies: [
      "Agile",
      "TDD/BDD",
      "Continuous Integration/Continuous Deployment (CI/CD)",
    ],
  },
  workExperience: [
    {
      company: "Globallogic Inc.",
      duration: "May 2021 to present",
      roles: [
        {
          title: "Lead Software Engineer, Feb 2023 to present",
          description:
            "Working with a major healthcare provider to develop a novel system to allow business teams to design, create and deploy new services to customers in real time with very minimal interaction with IT team hence leading to high cost savings and faster time to market, responsibilities include;",
          points: [
            "Work with Product team, designers, business team & architects to discuss & design initial solution diagram and create initial repository, pipeline and others with DevOps team",
            "Designed the core functionality using Form.io for authoring assessments and Web Components for isolated rendering which streamlined business processes leading to faster time to market and cost savings",
            "Work on RnD and create various PoC's on different tools and technologies that can help us achieve the target state",
            "Technologies: Angular 9, Sass, Form.io, Web Components, Nodejs, PingID (OAuth2), Azure cloud services (Cosmos/APIM/App Insights/Storage/etc), BPM tools, etc",
          ],
        },
        {
          title: "Senior Software Engineer, July 2017 to June 2019",
          description:
            "Worked with a major financial client to develop a new hybrid web app to accelerate business to delivery speed of Application to Android, iOS and Web platforms by using Ionic and Azure web services",
          points: [
            "As a part of core Foundation team responsible for:",
            "Creation and maintenance of foundational components such as authentication (OAuth2 via AD B2C), Biometrics",
            "Implementation of Native functionalities like Push Notifications (via Azure Notification Hub), Deep Linking, App share",
            "Integrate application with Kochava platform to drive app install attributions and analytics collection",
            "Implement omnichannel messaging platform via Braze to drive Email, Push notification, In-App messaging and SMS campaigns based on user behaviour for enhancing user interaction with the app",
            "Working closely with Product Owner’s to refine requirements, Architects to create system design and DevOps to update pipelines according to changing app needs.",
            "Technologies: Ionic, Capacitor, ReactJS, Kochava, Braze, Biometrics, Sass, MongoDB, reCAPTCHA v3, SFTP, Azure cloud services (Cosmos/APIM/AD B2C/App Insights/Storage/Notification Hub/etc)",
          ],
        },
      ],
    },
    {
      company: "LTI - Larsen & Toubro Infotech",
      duration: "Oct 2014 to April 2021",
      roles: [
        {
          title:
            "Specialist – Application Architecture, July 2019 to April 2021",
          description: "As a member of architecture team I'm responsible for",
          points: [
            "Creation and maintenance of foundational packages for Node.js, Ext JS, ReactJS, Kafka, websocket, .NET Core, etc by wrapping critical components like authentication, user identity, preferences, etc",
            "Helping teams with architectural guidance, code reviews, PoC development and troubleshooting critical issues",
            "Conducting training sessions for teams on new technologies and best practices",
            "Technologies: Node.js, Ext JS, ReactJS, Kafka, websocket, .NET Core, etc",
          ],
        },
        {
          title: "Senior Software Engineer, Oct 2014 to June 2019",
          description:
            "Worked on various projects for different clients ranging from banking, insurance to retail sectors",
          points: [
            "As a part of core Foundation team responsible for:",
            "Creation and maintenance of foundational components such as authentication (OAuth2 via AD B2C), Biometrics",
            "Implementation of Native functionalities like Push Notifications (via Azure Notification Hub), Deep Linking, App share",
            "Integrate application with Kochava platform to drive app install attributions and analytics collection",
            "Implement omnichannel messaging platform via Braze to drive Email, Push notification, In-App messaging and SMS campaigns based on user behaviour for enhancing user interaction with the app",
            "Working closely with Product Owner’s to refine requirements, Architects to create system design and DevOps to update pipelines according to changing app needs.",
            "Technologies: Ionic, Capacitor, ReactJS, Kochava, Braze, Biometrics, Sass, MongoDB, reCAPTCHA v3, SFTP, Azure cloud services (Cosmos/APIM/AD B2C/App Insights/Storage/Notification Hub/etc)",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "University of Mumbai",
      year: "2010 - 2014",
    },
  ],
  certifications: getCertifications(),
};
