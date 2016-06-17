const path = require('path');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    'angular2-chartist': './chartist.component.ts'
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
    },
    'chartist': {
      root: ['chartist'],
      commonjs: 'chartist',
      commonjs2: 'chartist',
      amd: 'chartist'
    }
  },
  module: {
    preLoaders: [{
      test: /\.ts$/,
      loader: 'tslint',
      exclude: /node_modules/,
      query: {
        emitErrors: true,
        failOnHint: true
      }
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      exclude: /node_modules/
      // Currently broken it seems
      // https://github.com/TypeStrong/ts-loader/issues/186
      // query: {
      //   compilerOptions: {
      //     declaration: true,
      //     listFiles: true
      //   }
      // }
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
