const path = require('path');

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '..', 'demo'),
  entry: './entry.ts',
  output: {
    filename: 'demo.js',
    path: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: [
          {
            loader: 'tslint-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};
