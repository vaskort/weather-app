const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["transform-es2015-destructuring", "transform-object-rest-spread", "transform-class-properties"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
