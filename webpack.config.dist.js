const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'angular2-chartist': './angular2-chartist.ts'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'angular2Chartist',
    path: path.resolve(__dirname, 'dist')
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
    }
  },
  module: {
    preLoaders: [{
      test: /\.ts$/,
      loader: 'tslint',
      exclude: [
        /node_modules/
      ],
      query: {
        emitErrors: true,
        failOnHint: true
      }
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      exclude: [
        /node_modules/
      ]
      // TODO: get this working
      // query: {
      //   compilerOptions: {
      //     declaration: true
      //   }
      // }
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
