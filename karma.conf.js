'use strict';

const webpack = require('webpack');
const WATCH = process.argv.indexOf('--watch') > -1;

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      'test/entry.ts'
    ],
    exclude: [],
    preprocessors: {
      'test/entry.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.ts', '.js']
      },
      module: {
        preLoaders: [{
          test: /\.ts$/,
          loader: 'tslint',
          exclude: /node_modules/
        }],
        loaders: [{
          test: /\.ts$/,
          loader: 'ts',
          exclude: /node_modules/
        }],
        postLoaders: [{
          test: /\.ts$/,
          loader: 'istanbul-instrumenter',
          exclude: /(test|node_modules)/
        }]
      },
      tslint: {
        emitErrors: !WATCH,
        failOnHint: false
      },
      plugins: WATCH ? [] : [new webpack.NoErrorsPlugin()]
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [{
        type: 'text-summary'
      }, {
        type: 'lcov'
      }]
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: WATCH,
    browsers: ['PhantomJS'],
    singleRun: !WATCH
  });
};
