const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)

const webpackConfigBase = {
  entry: {
    main: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist')
  },
  optimization: {
    minimizer: [
      // 开启打包文件压缩
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false
        }
      })
    ],
    splitChunks: {
      // async异步代码分割 initial同步代码分割 all同步异步分割都开启
      chunks: 'all',
      minSize: 30000, // 字节 引入的文件大于30kb才进行分割
      minChunks: 1, // 模块至少使用次数
      maxAsyncRequests: 5, // 同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
      maxInitialRequests: 3, // 首页加载的时候引入的文件最多3个
      cacheGroups: {
        // 默认打包模块 commons.js
        commons: {
          name: 'commons',
          // 优先级，先打包到哪个组里面，值越大，优先级越高
          priority: 0
        },
        // node_modules的包打成vendor.js
        vendors: {
          name: 'vendor',
          priority: 10,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@src': resolve('../src'),
      '@img': resolve('../src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        include: [resolve('../src')],
        // 一定要加这个 否则检测不到
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            // 不符合Eslint规则时只console warning(默认false 直接error)
            // emitWarning: true
          }
        }]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html')
    })
  ]
}

module.exports = webpackConfigBase
