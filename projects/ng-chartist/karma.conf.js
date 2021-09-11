// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-jasmine-diff-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],

    // TRIGGER
    autoWatch: true,
    singleRun: false,

    // BUILD
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    basePath: '',
    angularCli: {
      environment: 'dev',
    },

    // RUN
    port: 9876,
    browsers: ['ChromeHeadless'],

    // REPORT
    colors: true,
    logLevel: config.LOG_INFO,

    reporters: ['jasmine-diff', 'mocha'],

    jasmineDiffReporter: {
      color: {
        // white is actually gray here
        expectedBg: 'bgWhite',
        expectedWhitespaceBg: 'bgWhite',
        expectedFg: 'red',

        actualBg: 'bgWhite',
        actualWhitespaceBg: 'bgWhite',
        actualFg: 'blue',
      },
      legacy: true,
    },

    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
    },
  });
};
