const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)

const webpackConfigBase = {
  entry: {
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
    // 参考 https://www.jb51.net/article/131865.htm
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    // 如果不配置下面 只有main.js和vendor.js 每次修改代码后打包 这两个js的chunkhash值都变化了 不利于vendor.js的缓存
    // 配置了下面 每次修改代码后打包 只变化main mainfest的chunkhash, vendor chunkhash不变化 可以缓存vendor
    // filename必须使用chunkhash才能让以上规则生效
    // 开发环境webpack-dev-server必须用的hash不能用chunkhash 所以开发环境以上规则不生效
    new webpack.optimize.CommonsChunkPlugin({
      // vendor包括的是一些不常变化的库
      // manifest再抽出此次打包过程中vendor这些库变化的部分(一般都很小)
      // 所以mainfest.js很小每次chunkhash变化了请求也无所谓
      // vendor.js很大 但是chunkhash不变化 一直缓存着 从而提高加载速度
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
}

module.exports = webpackConfigBase
