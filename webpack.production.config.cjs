const { merge } = require('webpack-merge')
const path = require('path')

const commonConfig = require('./webpack.common.config.cjs')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'prod.tsx'),
  experiments: {
    outputModule: true,
  },
  output: {
    filename: './index.js',
    iife: true,
    library: {
      type: 'umd',
    },
  },
})
