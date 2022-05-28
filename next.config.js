const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/float-toolbar': { page: '/float-toolbar' }
    }
  },
  assetPrefix: !debug ? '/next-typescript-playground/' : ''
}