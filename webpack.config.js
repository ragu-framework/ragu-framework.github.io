const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './pages/index.js'),
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "./pages/index.html")
  })],
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
              modules: true,
            }
          }
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
  }
};
