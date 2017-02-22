const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const helpers = require('./helpers');

module.exports = {
  devtool: 'source-map',
  context: helpers.root('src'),
  entry: {
    'angular2-chartist': './chartist.component.ts'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'angular2Chartist',
    path: helpers.root('dist')
  },
  externals: {
    '@angular/core': {
      root: ['ng', 'core'],
      commonjs: '@angular/core',
      commonjs2: '@angular/core',
      amd: '@angular/core'
    },
    '@angular/common': {
      root: ['ng', 'common'],
      commonjs: '@angular/common',
      commonjs2: '@angular/common',
      amd: '@angular/common'
    },
    'chartist': {
      root: ['chartist'],
      commonjs: 'chartist',
      commonjs2: 'chartist',
      amd: 'chartist'
    }
  },
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.ts$/,
      use: [{
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
          failOnHint: true
        }
      }],
      exclude: /node_modules/,
    }, {
      test: /\.ts$/,
      use: [{
        loader: '@ngtools/webpack'
      }],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: helpers.root('tsconfig.json'),
      entryModule: helpers.root('src', 'chartist.component#ChartistModule')
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    })
  ]
};
