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
  module: {
    noParse: /\.elm$/,
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          { loader: 'elm-webpack-loader',
            options: {
              debug: true,
              forceWatch: true,
              verbose: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'html/main.html')
    })
  ]
}
