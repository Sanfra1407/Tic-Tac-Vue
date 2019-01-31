module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : './'
    : '/'
}
