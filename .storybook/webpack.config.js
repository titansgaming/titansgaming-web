'use strict'
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const config = require('../config')
const utils = require('../build/utils')
const vueWebpackConfig = require('../build/webpack.base.conf')

module.exports = (storybookBaseConfig, configType) => {
  const isProduction = configType === 'PRODUCTION'
  const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

  storybookBaseConfig.module.rules = [
    {
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    },
    ...storybookBaseConfig.module.rules,
    ...utils.styleLoaders({
      sourceMap: sourceMapEnabled,
      usePostCSS: true,
    }),
  ];
  storybookBaseConfig.resolve = vueWebpackConfig.resolve;

  if (configType === 'DEVELOPMENT') {
    const host = process.env.STORYBOOK_HOST || 'localhost';
    const port = process.env.STORYBOOK_PORT || 6006;
    storybookBaseConfig.plugins.push(new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${host}:${port}
        `], // Intentional new line
      },
    }));
    storybookBaseConfig.devServer = {quiet: true};
  }

  return storybookBaseConfig;
};
