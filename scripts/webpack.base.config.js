const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)

const webpackConfigBase = {
  entry: {
    // 一些不常变化的库打包成vendor.js
    vendor: resolve('../src/vendor.js'),
    main: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist')
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
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html')
    }),
    // https://www.jb51.net/article/131865.htm
    // 抽取chunk vendor.js
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    // vendor.js中变化的部分抽取为manifest.js
    // filename用chunkhash才能保证vendor.hashxxx.js的hash值不变化
    // 然后设置一个长的max-age缓存，之后vendor.hashxxx.js就都是缓存加载了
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
}

module.exports = webpackConfigBase
