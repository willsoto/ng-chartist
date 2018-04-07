const helpers = require('./helpers');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [helpers.root('src'), 'node_modules']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: true,
              failOnHint: false
            }
          }
        ],
        include: [helpers.root('src'), helpers.root('test')]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        include: [helpers.root('src'), helpers.root('test')]
      }
    ]
  }
};
