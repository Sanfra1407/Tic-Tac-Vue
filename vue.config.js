const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : './'
    : '/',

    configureWebpack: {
      resolve: {
        alias: {
          "@atoms": path.resolve(__dirname, 'src/components/atoms/'),
          "@molecules": path.resolve(__dirname, 'src/components/molecules/'),
        }
      }
    }
}
