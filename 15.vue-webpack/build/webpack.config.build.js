const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const config = {
  mode:'production',
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
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  optimization:{
    splitChunks:{
      chunks:'all',
      name:'vendors'
    },
    runtimeChunk:{
      name:'runtime'
    }
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css'
    })
  ]
}
module.exports = merge(baseConfig,config)
