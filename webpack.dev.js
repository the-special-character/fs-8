const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env.dev'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
  },
});
