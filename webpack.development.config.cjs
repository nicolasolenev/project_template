const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')

const commonConfig = require('./webpack.common.config.cjs')

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash:8].js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
})
