
const webpack = require('webpack')
const path = require('path')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfigProd = {
  output: {
    // 用chunkhash 保证每次打包后vendor的hash都不变化 缓存vendor
    filename: '[name].[chunkhash].js',
    // 部署到生产 path是打包出的index.html的同级目录
    publicPath: './'
  },
  plugins: [
    // 压缩优化代码
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
    // 打出zip包
    // new FileManagerPlugin({
    //   onEnd: {
    //     mkdir: ['./dist-package'],
    //     archive: [
    //       {
    //         source: './dist', destination: './dist-package/dist.zip'
    //       }
    //     ]
    //   }
    // })
    // http://localhost:3011/ 查看每个包大小 优化包大小用
    // new BundleAnalyzerPlugin({ analyzerPort: 3011 })
  ],
  devtool: 'source-map'
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
