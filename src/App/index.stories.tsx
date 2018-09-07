import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import App from '../App';

storiesOf('App Group|App', module)
  .addDecorator((story, context) =>
    withInfo(`
      description or documentation about my component, supports markdown
      ~~~js
      <App />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'Welcome to Storybook',
    withNotes('Note about App component, supports markdown')(() => <App />)
  );
