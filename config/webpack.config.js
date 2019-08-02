const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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

const pluginHtmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(srcPath, 'html/main.html')
})


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
      moduleRuleElm(mode)
    ]
  },
  plugins: [
    pluginHtmlWebpackPlugin
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
      moduleRuleElm(mode)
    ]
  },
  plugins: [
    pluginHtmlWebpackPlugin
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
