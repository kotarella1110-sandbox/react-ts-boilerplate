import * as React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const root = document.getElementById('root') as HTMLElement;
render(<App />, root);
registerServiceWorker();
