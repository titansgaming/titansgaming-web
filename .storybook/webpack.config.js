'use strict'
const vueConfig = require('../build/webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.loaders = vueConfig.module.loaders;
  storybookBaseConfig.resolve = vueConfig.resolve;

  if (configType === 'DEVELOPMENT') {
    storybookBaseConfig.plugins.push(new FriendlyErrorsPlugin())
    storybookBaseConfig.devServer = {quiet: true};
  }

  return storybookBaseConfig;
};