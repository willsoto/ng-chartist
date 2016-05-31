module.exports = {
  devtool: 'source-map',
  entry: './angular2-chartist.ts',
  output: {
    filename: './angular2-chartist.js',
    libraryTarget: 'umd',
    library: 'angular2Chartist'
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
      ],
      query: {
        compilerOptions: {
          declaration: true
        }
      }
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
