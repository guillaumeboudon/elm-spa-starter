// Dependencies
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Paths
const srcPath  = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

// Mode
const isDev = process.env.NODE_ENV !== 'production'


// Config
module.exports = {
  entry: [
    path.join(srcPath, 'main.js'),
    path.join(srcPath, 'main.scss')
  ],
  mode: isDev ? 'development' : 'production',
  // devServer: {},
  output: {
    path: distPath,
    filename: isDev ? '[name].js' : '[name]-[hash].js',
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
              debug: isDev,
              forceWatch: isDev,
              verbose: isDev
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
            },
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name]-[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id]-[hash].css',
    })
  ]
}
