import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = 'Welcome to React';
  expect(
    wrapper
      .find('AppTitle')
      .children()
      .text()
  ).toBe(welcome);
});
