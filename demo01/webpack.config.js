const path = require('path');

module.exports = {
  mode: 'development', // 使用开发模式
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist') // 出口，此处必须是绝对路径
  }
};