const path = require('path')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const webpackConfigDev = {
  // 定义process.env.NODE_ENV=development 让react源码和webpack读取 做优化处理
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      // 定义后给urls.js用
      'SERVER': JSON.stringify('sameDomain')
    }),
    // 控制台打印
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`this is some messages`]
      },
      onErrors: function (severity, errors) {
      }
    })
  ],
  devServer: {
    port: 8100,
    open: true,
    // 后续热更新需要
    // hot: true,
    // 本地开发跨域请求设置
    proxy: {
      // '/api/*': {
      //   target: 'http://localhost:3001/',
      //   changeOrigin: true
      // }
    }
  }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
