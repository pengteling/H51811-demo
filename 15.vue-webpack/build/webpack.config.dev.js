const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const express = require('express')
const axios = require('axios')

const app = express()
const apiRoutes = express.Router()
app.use('/api',apiRoutes)

const config = {
  mode:'development',
  devtool: 'source-map',
  devServer:{
    before(app){
      app.get('/api/vkey', function(req,res){
        var url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
        axios.get(url, {
          headers:{
            referer:'https://c.y.qq.com',
            host:'c.y.qq.com'
          },
          params:req.query
        }).then(response =>
          res.json(response.data)
          )
        .catch(err=>console.log(err))
      })
    },
    contentBase:"./dist",
    hot:true,
    port:8888,
    host:'0.0.0.0',
    historyApiFallback: true,
    proxy:{
      '/api/list':{
        target:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-12-24&topid=4&type=top&song_begin=0&song_num=30&g_tk=1507819077&loginUin=3001418919&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0',
        changeOrigin: true
      },
      // '/api/vkey':{
      //   target:'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg',
      //   changeOrigin: true
      // }
    }
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
