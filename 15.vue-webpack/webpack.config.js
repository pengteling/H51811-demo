const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'development',
  entry:{
    app: __dirname + '/src/main.js'
  },
  output:{
    path:__dirname + '/dist',
    filename:'./js/[name]-[hash:8].js',
    publicPath:'/'
  },
  devServer:{
    contentBase:"./dist",
    hot:true,
    port:8888
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      // inject:
    })
  ]
}