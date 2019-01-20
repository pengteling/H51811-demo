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
      // jsonp 也可以
      // https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2019_02&topid=26&type=top&song_begin=0&song_num=30&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&jsonpCallback=music
      '/api/list':{
        target:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-12-24&topid=4&type=top&song_begin=0&song_num=30&g_tk=1507819077&loginUin=3001418919&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0',
        changeOrigin: true
      },
      // '/api/vkey':{
      //   target:'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg',
      //   changeOrigin: true
      // }
      '/api/getVkey':{
        target:'https://u.y.qq.com/cgi-bin/musicu.fcg'
        //?-=getplaysongvkey23738856956926147&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%22960257530%22%2C%22songmid%22%3A%5B%220031PTO62Kdxxj%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%220%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A0%2C%22format%22%3A%22json%22%2C%22ct%22%3A24%2C%22cv%22%3A0%7D%7D',
        ,bypass:function(req,res,proxyOptions){
          req.headers.referer = 'https://c.y.qq.com',
          req.headers.host = 'c.y.qq.com'
        },
        changeOrigin:true,
        pathRewrite:{
          '^/api/getVkey':''
        },

      }
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
