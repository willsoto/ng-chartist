'use strict';

const helpers = require('./config/helpers');

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
          include: [
            helpers.root('src'),
            helpers.root('test')
          ]
        }],
        loaders: [{
          test: /\.ts$/,
          loader: 'ts',
          include: [
            helpers.root('src'),
            helpers.root('test')
          ]
        }, {
          test: /\.json$/,
          loader: 'json',
          include: [
            helpers.root('src'),
            helpers.root('test')
          ]
        }],
        postLoaders: [{
          test: /\.ts$/,
          loader: 'istanbul-instrumenter',
          include: [
            helpers.root('src')
          ]
        }]
      },
      tslint: {
        emitErrors: false,
        failOnHint: false
      },
      plugins: []
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
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
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
