process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {
        pattern: 'config/spec-bundle.js',
        watched: false
      }
    ],
    exclude: [],
    preprocessors: {
      'config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
    },
    client: {
      captureConsole: false
    },
    webpack: require('./config/webpack.test'),
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },
    coverageReporter: {
      type: 'in-memory'
    },
    remapCoverageReporter: {
      'text-summary': null,
      html: './coverage/html',
      lcovonly: './coverage/lcov.info'
    },
    reporters: ['mocha', 'coverage', 'remap-coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
