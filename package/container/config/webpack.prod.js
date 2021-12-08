const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require("path")

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(prodConfig, commonConfig);
