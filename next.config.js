/** @type {import('next').NextConfig} */
// const repo = "dipankarmedhi91.github.io";

// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = ''

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`

// const nextConfig = {
//   output: "export",
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   images: {
//     unoptimized: true
//   }
// };

// module.exports = nextConfig;

const debug = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    BACKEND_URL: prod ? '' : '',
  },
  // exportPathMap: function () {
  //   return {
  //     "/": { page: "/" },
  //     "/misc": { page: "/misc" },
  //     "/tinkerbox": { page: "/tinkerbox" },
  //     "/videos": { page: "/videos" },
  //   };
  // },
  assetPrefix: !debug ? "" : "",
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  },
};
