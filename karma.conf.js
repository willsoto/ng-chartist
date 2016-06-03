'use strict';

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
        }, {
          test: /\.json$/,
          loader: 'json',
          exclude: /node_modules/
        }],
        postLoaders: [{
          test: /\.ts$/,
          loader: 'istanbul-instrumenter',
          exclude: /(test|node_modules)/
        }]
      },
      tslint: {
        emitErrors: false,
        failOnHint: false
      },
      plugins: []
    },
    webpackMiddleware: {
      noInfo: true
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
