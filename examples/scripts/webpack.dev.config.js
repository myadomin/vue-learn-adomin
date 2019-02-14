const path = require('path')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const webpackConfigDev = {
  output: {
    // webpack-dev-server不能用chunkhash 只能用hash
    filename: '[name].[hash].js',
    // 本地开发 path都是根路径localhost:8100
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      // vue源码入口会判断process.env.NODE_ENV是development还是production做优化处理
      // 定义process.env.NODE_ENV让vue源码读取 这里的process.env.NODE_ENV只可以在vue源码及项目业务组件中读取
      'process.env.NODE_ENV': JSON.stringify('development'),
      // 定义后给urls.js用
      'SERVER': JSON.stringify('sameDomain')
    }),
    // 控制台打印
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        // 通过 npm script cross-env NODE_ENV=abc 传参数
        // 这个参数只能在webpack配置中读取到
        messages: [`PROXY_ENV: ${process.env.PROXY_ENV}`],
        notes: ['this is some notes']
      },
      onErrors: function (severity, errors) {
      }
    })
  ],
  // dev环境用eval-source-map prod环境用source-map
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8177,
    open: true,
    // necessary for FriendlyErrorsPlugin
    quiet: true,
    proxy: {
      // '/api/*': {
      //   target: 'http://localhost:3001/',
      //   changeOrigin: true
      // }
    }
  }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
