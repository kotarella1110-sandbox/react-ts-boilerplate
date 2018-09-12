import React from 'react';
import { setStubbingMode } from 'react-stubber';
import { configure, setAddon, addDecorator } from '@storybook/react';
import '@storybook/addon-console';
import { setOptions } from '@storybook/addon-options/preview';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled';
import theme from 'components/theme';

setStubbingMode(true);

setOptions({
  name: 'React TypeScript Boilerplate'
});

setAddon(JSXAddon);

addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
