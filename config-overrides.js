const path = require('path');
const { compose } = require("react-app-rewired");
const rewireStyledComponents = require("react-app-rewire-styled-components");
const rewireStyledComponentsTypescriptPlugin = require('react-app-rewire-styled-components-typescript');

module.exports = compose(
  rewireStyledComponentsTypescriptPlugin,
  rewireStyledComponents
);