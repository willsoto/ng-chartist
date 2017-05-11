const helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [helpers.root('src'), 'node_modules']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [helpers.root('node_modules/rxjs'), helpers.root('node_modules/@angular')]
      },
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
            loader: 'awesome-typescript-loader',
            query: {
              sourceMap: false,
              inlineSourceMap: true,
              compilerOptions: {
                removeComments: true
              }
            }
          }
        ],
        include: [helpers.root('src'), helpers.root('test')]
      },
      {
        enforce: 'post',
        test: /\.(js|ts)$/,
        use: [
          {
            loader: 'istanbul-instrumenter-loader'
          }
        ],
        include: [helpers.root('src')],
        exclude: [/\.spec\.ts$/, /node_modules/]
      }
    ]
  }
};
