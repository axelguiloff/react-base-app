const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack Config
module.exports = {
  entry: path.join(paths.JS,'app.js'),
  output: {
    filename: 'app.bundle.js',
    path: paths.DIST
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      use: [
        'babel-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'index.js'],
    modules: [ paths.JS, 'node_modules' ]
  }
};
