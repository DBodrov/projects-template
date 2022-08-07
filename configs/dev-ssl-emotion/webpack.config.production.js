const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {resolveApp} = require('./utils');
const commonConfig = require('./webpack.config.common');

process.env.NODE_ENV = 'production';
const VERSION = require('../package.json').version;

module.exports = env => {
  return webpackMerge.merge(commonConfig, {
    mode: 'production',
    stats: 'errors-only',

    output: {
      path: resolveApp('dist'),
      filename: 'static/js/[name].[chunkhash].js',
      chunkFilename: 'static/js/[name].[chunkhash].chunk.js',
      publicPath: '/',
      assetModuleFilename: 'static/media/[name].[hash:8].[ext]',
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            filename: 'static/js/vendor.[contenthash].js',
            reuseExistingChunk: true,
          },
          common: {
            name: 'common',
            chunks: 'all',
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      },
      runtimeChunk: {
        name: 'runtime',
      },
      emitOnErrors: false,
      minimize: true,
      minimizer: [new TerserPlugin()],
    },

    performance: {
      hints: false,
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        filename: 'index.html',
        template: resolveApp('src/index.html'),
        chunksSortMode: 'none',
        version: VERSION,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),

      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        VERSION: VERSION,
        USE_API_MOCKS: 'false'
      }),
    ],
  });
};
