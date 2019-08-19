const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // 使用开发模式
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist') // 出口，此处必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(less)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
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
    })
  ]
};