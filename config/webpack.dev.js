const webpack = require('webpack');

const IS_PROD = process.argv.indexOf('-p') > -1;

module.exports = {
  devtool: IS_PROD ? 'source-map' : 'eval',
  entry: './demo/entry.ts',
  output: {
    filename: 'demo.js',
    path: IS_PROD ? './demo' : '/'
  },
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /node_modules/,
      query: {
        emitErrors: false,
        failOnHint: false
      }
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
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
    // https://github.com/webpack/webpack/issues/2644
    // new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(IS_PROD ? 'production' : 'development')
    })
  ]
};
