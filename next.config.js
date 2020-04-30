const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(path.resolve('./src'));
    config.plugins.push(
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(require('./package.json').version),
      })
    );
    return config;
  },
};
