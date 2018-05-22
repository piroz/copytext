const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  mode: 'production',
  entry: ['./src/index.ts'],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'piroz',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ]
}
