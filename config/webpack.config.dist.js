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
    preLoaders: [{
      test: /\.ts$/,
      loader: 'tslint',
      include: [
        helpers.root('src'),
        helpers.root('demo')
      ],
      query: {
        emitErrors: true,
        failOnHint: true
      }
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      include: [
        helpers.root('src'),
        helpers.root('demo')
      ],
      // Currently broken on 0.8.2
      // https://github.com/TypeStrong/ts-loader/issues/186
      query: {
        compilerOptions: {
          declaration: true,
          listFiles: true
        }
      }
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
