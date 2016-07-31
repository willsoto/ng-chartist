const webpack = require('webpack');

const helpers = require('./helpers');

const IS_PROD = process.argv.indexOf('-p') > -1;

module.exports = {
  devtool: IS_PROD ? 'source-map' : 'eval',
  entry: './demo/entry.ts',
  output: {
    filename: 'demo.js',
    path: IS_PROD ? './demo' : ''
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
        emitErrors: false,
        failOnHint: false
      }
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      include: [
        helpers.root('src'),
        helpers.root('demo')
      ]
    }, {
      test: /\.json$/,
      loader: 'json',
      include: [
        helpers.root('src'),
        helpers.root('demo')
      ]
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    contentBase: 'demo',
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(IS_PROD ? 'production' : 'development')
    })
  ]
};
