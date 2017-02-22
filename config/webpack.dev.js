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
      loader: [{
        loader: 'tslint-loader',
        options: {
          emitErrors: false,
          failOnHint: false
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.ts$/,
      use: [{
        loader: 'awesome-typescript-loader'
      }],
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
    new webpack.DefinePlugin({
      ENV: JSON.stringify(IS_PROD ? 'production' : 'development')
    })
  ]
};
