process.argv.push('--scripts-version');
process.argv.push('react-scripts-ts');

const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const rewires = require('../config-overrides').webpack;

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
    options: {},
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push('.ts', '.tsx');
  return rewires(config);
};
