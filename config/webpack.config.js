const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rootPath = path.resolve(__dirname, '..')
const srcPath  = path.join(rootPath, 'src')
const distPath = path.join(rootPath, 'dist')

const isProd = (mode) => mode === 'production'
const isDev  = (mode) => !isProd(mode)


/* ============================================================================
 * > SHARED
 * ============================================================================
 */
const entry = path.join(srcPath, 'index.js')

const output = (mode) => ({
  filename: isProd(mode) ? '[name]-[hash].js' : '[name].js',
  path: distPath
})

const moduleRuleElm = (mode) => ({
  test: /\.elm$/,
  exclude: [/elm-stuff/, /node_modules/],
  use: [
    { loader: 'elm-webpack-loader',
      options: {
        debug: isDev(mode),
        forceWatch: isDev(mode),
        verbose: isDev(mode)
      }
    }
  ]
})

const moduleRuleCss = (mode) => ({
  test: /\.(scss|css)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev(mode),
      },
    },
    'css-loader',
    'sass-loader'
  ]
})

const pluginHtmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(srcPath, 'html/main.html')
})

const pluginMiniCssExtractPlugin = (mode) => {
  return new MiniCssExtractPlugin({
    filename: isDev(mode) ? '[name].css' : '[name]-[hash].css',
    chunkFilename: isDev(mode) ? '[id].css' : '[id]-[hash].css',
  })
}


/* ============================================================================
 * > DEVELOPMENT
 * ============================================================================
 */
const configDev = (mode) => ({
  entry: entry,
  output: output(mode),
  devServer: {
    contentBase: distPath,
  },
  module: {
    noParse: /\.elm$/,
    rules: [
      moduleRuleElm(mode),
      moduleRuleCss(mode)
    ]
  },
  plugins: [
    pluginHtmlWebpackPlugin,
    pluginMiniCssExtractPlugin(mode)
  ]
})


/* ============================================================================
 * > PRODUCTION
 * ============================================================================
 */
const configProd = (mode) => ({
  entry: entry,
  output: output(mode),
  module: {
    noParse: /\.elm$/,
    rules: [
      moduleRuleElm(mode),
      moduleRuleCss(mode)
    ]
  },
  plugins: [
    pluginHtmlWebpackPlugin,
    pluginMiniCssExtractPlugin(mode)
  ]
})


/* ============================================================================
 * > MAIN
 * ============================================================================
 */
module.exports = (env, argv) => {
  const mode = argv.mode
  return isDev(mode) ? configDev(mode) : configProd(mode)
}
