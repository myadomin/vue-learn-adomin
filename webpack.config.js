const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

// dev环境 webpack-dev-server --inline --hot --env.dev
// 通过env.dev传入参数 options.dev为true
module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    // babel-polyfill es6兼容性 也可以在入口文件import不写在这里
    index: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    // webpack-dev-server不能用chunkhash 可以用hash 所以这里做个判断
    filename: options.dev ? '[name].[hash].js' : '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        // eslint只load src目录
        include: [resolve(__dirname, 'src')],
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
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      // vue源码入口会判断process.env.NODE_ENV是development还是production做优化处理
      // 所以DefinePlugin 定义 process.env.NODE_ENV 让vue源码及业务组件可以读取到process.env.NODE_ENV
      'process.env.NODE_ENV': options.dev ? JSON.stringify('development') : JSON.stringify('production')
    }),
    // 参考 https://www.jb51.net/article/131865.htm
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // main.js el:#app 挂载在src/index.html的#app
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // 编译完成动态通知是否有error
    // new WebpackNotifierPlugin({
    //   title: 'Notify',
    //   excludeWarnings: true,
    //   skipFirstNotification: true
    // })
    // cmd打印
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        // package.json cross-env传参
        messages: [`options: ${JSON.stringify(options)}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
      }
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8100,
    open: true,
    proxy: {
      // '/api/index.php/*': {
      //     target: 'http://beeossdev.egtest.cn:7777',
      //     changeOrigin: true
      //     pathRewrite: {
      //       '^/api': ''
      //     }
      // }
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})
