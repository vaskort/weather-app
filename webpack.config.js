const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      appStyles: path.resolve(__dirname, './app/styles/app.scss'),
      foundationStyles: path.resolve(__dirname, './node_modules/foundation-sites/dist/css/foundation.min.css'), 
      Main: path.resolve(__dirname, './app/components/Main.jsx'),
      SearchForm: path.resolve(__dirname, './app/components/SearchForm.jsx'),
      DataLayout: path.resolve(__dirname, './app/components/DataLayout.jsx'),
      ErrorPage: path.resolve(__dirname, './app/components/ErrorPage.jsx'),
      weatherActions: path.resolve(__dirname, './app/actions/weatherActions.js'),
    },
    extensions: ['.js', '.jsx'],
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
