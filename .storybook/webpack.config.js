'use strict'
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const utils = require('../build/utils')
const vueConfig = require('../build/webpack.base.conf')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules = [
    ...storybookBaseConfig.module.rules,
    ...utils.styleLoaders({
      sourceMap: configType !== 'DEVELOPMENT',
      usePostCSS: true,
    }),
  ];
  storybookBaseConfig.resolve = vueConfig.resolve;

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
