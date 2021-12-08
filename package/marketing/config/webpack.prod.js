const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const path = require("path");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(prodConfig, commonConfig);
