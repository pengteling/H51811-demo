const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = {
  mode:'development',
  devServer:{
    contentBase:"./dist",
    hot:true,
    port:8888,
    historyApiFallback: true
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:[
          'vue-style-loader',
          {
            loader:'css-loader',
            options:{
              sourceMap:true
            }
          },
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
          {
            loader:'sass-loader',
            options:{
              sourceMap:true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          'vue-style-loader',
          {
            loader:'css-loader',
            options:{
              sourceMap:true,
              // modules:true,
              // localIdentName:'[path]-[name]-[hash:base64:5]'
            }
          },
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
        ]
      },
      {
        resourceQuery: /blockType=docs/,
        loader: require.resolve('./docs-loader.js')
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
}
module.exports = merge(baseConfig,config)
