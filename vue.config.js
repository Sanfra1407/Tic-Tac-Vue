const path = require('path');

const _getPublicPath = () => {
  return process.env.NODE_ENV === 'production'
    ? ( process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : './' )
    : '/'
}

module.exports = {
  publicPath: _getPublicPath(),
  configureWebpack: {
    resolve: {
      alias: {
        "@atoms": path.resolve(__dirname, 'src/components/atoms/'),
        "@molecules": path.resolve(__dirname, 'src/components/molecules/'),
        "@pages": path.resolve(__dirname, 'src/pages/'),
      }
    }
  }
}
