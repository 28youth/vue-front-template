const path = require('path')
const globalLessVars = require(path.join(__dirname, './src/util/globalLessVars.js'))
const colorsLess = globalLessVars(path.join(__dirname, './src/style/theme.less'))

module.exports = {
  publicPath: process.env.BASE_URL || '/',
  lintOnSave: true,

  // compiler: false,
  css: {
    // eslint-disable-next-line no-eval
    sourceMap: !!eval(process.env.GENERATE_CSS_MAP),
    loaderOptions: {
      less: {
        globalVars: colorsLess
      }
    }
  },

  chainWebpack: config => {
    config.output.chunkFilename(`js/[name]-[chunkhash].js`)
  },

  devServer: {
    open: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_HOST,
        changeOrigin: true
      },
      '/storage': {
        target: process.env.VUE_APP_API_HOST,
        changeOrigin: true
      }
    }
  },

  pwa: {
    name: process.env.VUE_APP_NAME || 'blue',
    themeColor: '#59B6D7',
    msTileColor: '#59B6D7'
  }
}
