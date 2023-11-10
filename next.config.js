const debug = process.env.NODE_ENV !== "production";

module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  },
};
