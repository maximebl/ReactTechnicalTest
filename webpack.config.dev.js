var path = require('path');

module.exports = {
  target: 'web',
  devtool: 'cheap-module-source-map',

  entry: {
        "indexEntry":['babel-polyfill', './src/index.js']
      },
      
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: "[name].js",
    sourceMapFilename: '[name].map'
  },

  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(css|scss)$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader']},
    ]
  },
};