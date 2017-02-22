const webpack = require('webpack');

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
        extensions: ['.ts', '.js']
      },
      module: {
        loaders: [{
          enforce: 'pre',
          test: /\.ts$/,
          use: [{
            loader: 'tslint-loader',
            options: {
              emitErrors: false,
              failOnHint: false
            }
          }],
          include: [
            helpers.root('src'),
            helpers.root('test')
          ]
        }, {
          test: /\.ts$/,
          use: [{
            loader: 'awesome-typescript-loader'
          }],
          include: [
            helpers.root('src'),
            helpers.root('test')
          ]
        }, {
          enforce: 'post',
          test: /\.ts$/,
          use: [{
            loader: 'istanbul-instrumenter-loader'
          }],
          include: [
            helpers.root('src')
          ]
        }]
      }
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
