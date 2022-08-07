const {resolveApp} = require('./utils');

module.exports = {
  entry: {
    main: resolveApp('src/index.tsx'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', resolveApp('src')],
    alias: {
      src: resolveApp('src'),
      '@': resolveApp('src'),
      static: resolveApp('src/static'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(woff|woff2|ttf|eot|ico|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(bmp|gif|jpg|png)$/,
        type: 'asset/resource',
      },
    ],
  },
};
