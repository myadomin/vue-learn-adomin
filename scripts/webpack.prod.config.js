
const webpack = require('webpack')
const path = require('path')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfigProd = {
  mode: 'production',
  output: {
    // 用chunkhash 保证每次打包后vendor的hash都不变化 缓存vendor
    filename: '[name].[chunkhash].js',
    // 打包后 引用任何文件都是./(index.html的同级目录)
    publicPath: './'
  },
  plugins: [
    // http://localhost:3011/ 查看每个包大小 优化包大小用
    // new BundleAnalyzerPlugin({ analyzerPort: 3011 })
  ],
  // 打包界面不出现性能建议warning
  performance: {
    hints: false
  }
}

module.exports = (env) => {
  // 定义SERVER给urls.js用
  if (env === 'test') {
    // npm run build-test，通过 --env=test 传参
    webpackConfigProd.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'SERVER': JSON.stringify('test')
    }))
  } else if (env === 'prod') {
    // npm run build-prod，通过 --env=prod 传参
    webpackConfigProd.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'SERVER': JSON.stringify('prod')
    }))
  } else {
    // npm run build，通过 --env=sameDomain 传参
    webpackConfigProd.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'SERVER': JSON.stringify('sameDomain')
    }))
  }
  return merge(webpackConfigBase, webpackConfigProd)
}
