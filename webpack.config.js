const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');


module.exports = {
  entry: {
    index: path.join(__dirname, './src/route/index.js')
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@style': path.resolve(__dirname, 'src/style/'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/template.html')
    }),
    new ErrorOverlayPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: false,
            }
          }
        ],
      },
    ]
  },
  output: {
    filename: '[name].[contenthash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
