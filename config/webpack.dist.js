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
      loader: 'tslint',
      exclude: /node_modules/,
      query: {
        emitErrors: true,
        failOnHint: true
      }
    }, {
      test: /\.ts$/,
      loader: 'ts',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
