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
      // 定义process.env.NODE_ENV让vue源码读取 这里的process.env.NODE_ENV是给vue源码及业务组件读取的
      // 注意区别npm script cross-env NODE_ENV=dev 这个只能在webpack配置中读取到
      'process.env.NODE_ENV': JSON.stringify('development'),
      // 定义后给urls.js用
      'SERVER': JSON.stringify('localhost')
    }),
    // 控制台打印
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        // 测试传的参数PROXY_ENV
        messages: [`PROXY_ENV: ${process.env.PROXY_ENV}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
      }
    })
  ],
  // dev环境用eval-source-map prod环境用source-map
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8100,
    // 自动打开网页
    open: true,
    // necessary for FriendlyErrorsPlugin
    quiet: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001/',
        changeOrigin: true
      }
    }
  }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
