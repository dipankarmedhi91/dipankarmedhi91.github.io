/** @type {import('next').NextConfig} */
const repo = "dipankarmedhi91.github.io";

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

// if (isGithubActions) {
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
// }
// const assetPrefix = `/${repo}/`;
// const basePath = `/${repo}`;

const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
