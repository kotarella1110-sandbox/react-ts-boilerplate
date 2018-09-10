import { setStubbingMode } from 'react-stubber';
import { configure, setAddon } from '@storybook/react';
import '@storybook/addon-console';
import { setOptions } from '@storybook/addon-options/preview';
import JSXAddon from 'storybook-addon-jsx';

setStubbingMode(true);

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

setAddon(JSXAddon);

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
