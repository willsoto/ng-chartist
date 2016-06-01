const webpack = require('webpack');
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
      exclude: [
        /node_modules/
      ],
      query: {
        emitErrors: false,
        failOnHint: false
      }
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      exclude: [
        /node_modules/
      ]
    }, {
      test: /\.json$/,
      loader: 'json',
      exclude: [
        /node_modules/
      ]
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    contentBase: 'demo'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(IS_PROD ? 'production' : 'development')
    })
  ]
};
