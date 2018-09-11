const { compose } = require('react-app-rewired');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireStyledComponentsTypescriptPlugin = require('react-app-rewire-styled-components-typescript');
const paths = require('react-scripts-ts/config/paths');

const rewireTslint = (options = {}) => (config, env) => {
  const tslintLoader = {
    test:  /\.(ts|tsx)$/,
    loader: require.resolve('tslint-loader'),
    enforce: 'pre',
    include: paths.appSrc,
    options: Object.assign({}, options),
  };

  config.module.rules.unshift(tslintLoader);

  return config;
};

module.exports = compose(
  rewireStyledComponentsTypescriptPlugin,
  rewireStyledComponents,
  rewireTslint({
    fix: true,
  }),
);
