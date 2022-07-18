const path = require('path')

module.exports = {
  // custom build directory
  distDir: '.next',

  // sass settings
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // 'x-powered-by' disabling
  poweredByHeader: false,

  // use React strict mode
  reactStrictMode: true,

  // ???
  experimental: {
    outputStandalone: true,
  }
}
