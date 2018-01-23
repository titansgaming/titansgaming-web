const axisStylusPlugin = require('axis')
const path = require('path')
const webpack = require('webpack');

module.exports = {
  srcDir: 'src/',
  head: {
    title: 'Titans Gaming',
    titleTemplate: '%s | TG',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  loading: { color: '#3B8070' },
  // modules: ['~modules/typescript.ts'],

  build: {
    extend (config, { isDev, isClient }) {
      config.plugins = [
        ...config.plugins,
        new webpack.LoaderOptionsPlugin({
          options: {
            stylus: {
              import: [
                path.join(__dirname, 'src', 'styles') + '/**/*.styl',
              ],
              use: [
                axisStylusPlugin(),
              ],
            },
          },
        })
      ];
    },
  },
}
