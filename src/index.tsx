import * as React from 'react';
import { render } from 'react-dom';
import { injectGlobal, ThemeProvider } from 'styled';
import theme from 'components/theme';
import App from 'components/App';
import registerServiceWorker from 'registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

const root = document.getElementById('root') as HTMLElement;
render(<Root />, root);
registerServiceWorker();
