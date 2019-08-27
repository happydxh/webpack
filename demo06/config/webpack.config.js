const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离出 css 样式生成一个文件

module.exports = {
  mode: 'development', // 使用开发模式
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, './../dist') // 出口，此处必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/, // 尽可能少的在模块上运用loader,提高打包速度
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader'] // 执行顺序从后到前
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // 创建一个link 标签
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
              limit: '10240'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/font/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true, // 对index.html压缩
        removeAttributeQuotes: true // 删除""
      }
    }),
    // 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css', // contenthash 文件内容改变便会生成新的hash
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
    })
  ]
}
