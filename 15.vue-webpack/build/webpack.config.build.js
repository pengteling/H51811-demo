const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const path = require('path')
const config = {
  mode:'production',
  entry: path.resolve(__dirname,'../src/ui.js'),
  output:{
    filename:'./js/ui.js',
    library:'simpleUI5',
    libraryTarget:'umd'
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // optimization:{
  //   splitChunks:{
  //     chunks:'all',
  //     name:'vendors'
  //   },
  //   runtimeChunk:{
  //     name:'runtime'
  //   }
  // },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/ui.css'
    })
  ]
}
module.exports = merge(baseConfig,config)
