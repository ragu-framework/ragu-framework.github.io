const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const path = require('path');

module.exports = merge(require('./webpack.config'), {
  mode: 'production'
});
