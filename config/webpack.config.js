const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, '..')
const srcPath  = path.join(rootPath, 'src')
const distPath = path.join(rootPath, 'dist')

module.exports = {
  entry: path.join(srcPath, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'html/main.html')
    })
  ]
}
