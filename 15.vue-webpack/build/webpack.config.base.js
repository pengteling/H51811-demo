const htmlWebpackPlugin = require('html-webpack-plugin')
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry:{
    app: path.resolve(__dirname , '../src/main.js'),
    // vendor:['vue','vue-router']
  },
  output:{
    path:path.resolve(__dirname , '../dist'),
    filename:'./js/[name]-[hash:8].js',
    publicPath:'/'
  },
  resolve: {
    extensions:['*','.vue','.js','.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      '@': path.resolve(__dirname,'../src/components')
    }
  },
  module:{
    rules:[
      {
        test: /\.(vue|js|jsx)$/,
        loader:'eslint-loader',
        enforce:'pre',
        exclude: /node_modules/,
        include:[path.resolve(__dirname,'../src')],
        options:{
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader:'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ttf)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'[name]-[hash:base64:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      // inject:
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
