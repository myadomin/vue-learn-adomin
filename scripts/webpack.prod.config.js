
const webpack = require('webpack')
const path = require('path')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigProd = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      IS_DEVELOPMETN: false
    }),
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html'),
      mapConfig: 'http://56.32.3.21/config/qdkjdsj_map_config.js'
    }),
    // 压缩优化代码
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
    // http://localhost:3011/ 查看每个包大小 优化包大小用
    // new BundleAnalyzerPlugin({ analyzerPort: 3011 })
  ],
  devtool: 'source-map'
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
