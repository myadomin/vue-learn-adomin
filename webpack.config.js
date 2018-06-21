const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const WebpackNotifierPlugin = require('webpack-notifier')
const publicPath = ''

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader',]
    }, {
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
    // build出 vendor manifest
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // main.js el:#app 挂载在src/index.html的#app
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // 编译完成动态通知
    new WebpackNotifierPlugin({
      title: "Notify",
      excludeWarnings: true,
      skipFirstNotification: true
    }),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    //extensions: ['', '.js', '.vue'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  devServer: {
    host: 'localhost',
    port: 8888,
    // webpack.config.js中webpack-dev-server --inline --hot 热更新
    // 自动打开浏览器
    open: true,
    proxy: {
        // http://localhost:8888/api/index.php/xxx 转发到 http://beeossdev.egtest.cn:7777/api/index.php/xxx 跨域
        '/api/index.php/*': {
            target: 'http://beeossdev.egtest.cn:7777',
            changeOrigin: true
            /*pathRewrite: {
            '^/api': ''
            }*/
        },
        '/api.php': {
            target: 'http://iot-dev-upgrade-center.egtest.cn:7777',
            changeOrigin: true
            /*pathRewrite: {
                '^/api': ''
            }*/
        }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})