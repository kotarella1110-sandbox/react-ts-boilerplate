const { compose } = require('react-app-rewired');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireStyledComponentsTypescriptPlugin = require('react-app-rewire-styled-components-typescript');
const StyleLintPlugin = require('stylelint-webpack-plugin');
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

// not working
const rewireStylelint = (options = {}) => (config, env) => {
  config.plugins = (config.plugins || []).concat([
    new StyleLintPlugin(Object.assign({}, options))
  ]);

  return config;
};

module.exports.webpack = () => {
  compose(
    rewireStyledComponentsTypescriptPlugin,
    rewireStyledComponents,
    rewireTslint({
      fix: true,
    }),
    rewireStylelint({
      files: [
        'public/**/*.css',
        'public/index.html',
      ],
      fix: true,
    }),
    rewireStylelint({
      files: ['src/**/*.ts{,x}'],
    }),
  );
 }

module.exports.jest = (config) => {
  config.globals['ts-jest'].babelConfig = {
    presets: [
      'react-app',
    ],
    plugins: [
      [
        'styled-components',
        {
          displayName: true,
          fileName: false,
        },
      ],
    ],
  };
  return config;
}